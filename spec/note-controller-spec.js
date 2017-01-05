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
  assert.isTrue(element.innerHTML === "<ul><li><div id=\"0\">My favourite color i</div></li></ul>");
})();
