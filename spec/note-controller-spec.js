(function testNoteControllerExist() {
  var notecontroller = new NoteController();
  assert.isTrue(notecontroller);
})();

(function testNoteControllerExistWithNoteList() {
  var notecontroller = new NoteController(NoteList());
  assert.isTrue(notecontroller);
})();

(function testNoteControllerChangesAppProperty() {
  var notecontroller = new NoteController();
  notecontroller.noteListView.notes.createNote("My favourite color is: black");
  notecontroller.changeText()
  var element = document.getElementById('app');
  assert.isTrue(element.innerHTML === '<ul><li><div id="0"><a href="#0">My favourite color i</a></div></li></ul>');
})();


(function testPageShowsSingleNote(){
  var cont = new NoteController();
  cont.makeUrlChangeShowNote();
  cont.createNote("Favourite food: pesto")
  cont.changeText();
  document.getElementsByTagName("a")[0].click();
    window.addEventListener("hashchange", function(){
      console.log("TEST: PageShowsSingleNote");
      assert.isTrue(document.getElementById("app").innerHTML === "<div>Favourite food: pesto</div>")
    });
})();
