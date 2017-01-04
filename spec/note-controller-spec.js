function testNoteControllerCreation() {
  function NoteListDouble() {};
  var controller = new NoteListController(NoteListDouble);
  assert.isTrue(controller._noteList == NoteListDouble);
};
testNoteControllerCreation();

function testHTMLOnPage() {
  var noteList = new NoteList();
  note = new Note("Tests note");
  noteList.addNote(note);
  var controller = new NoteListController(noteList);
  controller.printNoteListView();
  assert.isTrue(document.getElementById('app').innerHTML == "<ul><li><div>Tests note</div></li></ul>")
};
testHTMLOnPage();
