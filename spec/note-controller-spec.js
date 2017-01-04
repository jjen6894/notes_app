function testNoteControllerCreation() {
  function NoteListDouble() {};
  var controller = new NoteListController(NoteListDouble);
  assert.isTrue(controller._noteList == NoteListDouble);
};
testNoteControllerCreation();

function testHTMLOnPage() {
  var a = document.createElement('div');
  a.setAttribute("id", "app");

  function NoteDouble(){};

  NoteDouble.prototype = {
    returnNoteText: function() {
      return "this is a doubled note";
    }
  };
  function NoteListDouble() {
    this._notes = [NoteDouble];
  };

  NoteListDouble.prototype = {
    showNotes: function() {
      return this._notes;
    }
  };


console.log(NoteListDouble.showNotes());

  var controller = new NoteListController(NoteListDouble);
  controller.printNoteListView()
  assert.isTrue(a.innerHTML === "<ul><li><div>this is a doubled note</div></li></ul>")
};
testHTMLOnPage();
