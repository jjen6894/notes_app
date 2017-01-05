(function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
})();

(function testListingAllNotes() {
  var text = 'This is a note on Tuesday';
  var listItems = new NoteList();
  listItems.createNote(text);
  assert.isTrue(listItems.list.length === 1);
})();

(function testNoteListViewExist() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView)
})();

(function testPrintingEmptyHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === '<ul></ul>');
})();

(function testPrintingOneNote20Char() {
  var notelist = new NoteList();
  notelist.createNote('My favourite color is: black');
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === "<ul><li><div>My favourite color i</div></li></ul>");
})();

(function testPrintingOneHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black')
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>My favourite color i</div></li></ul>');
})();

(function testPrintingTwoHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black');
  notelistview.notes.createNote('My favourite color is: red');
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>My favourite color i</div></li><li><div>My favourite color i</div></li></ul>');
})();

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
  notecontroller.noteListView.notes.createNote('My favourite color is: black');
  notecontroller.changeText()
  var element = document.getElementById('app');
  assert.isTrue(element.innerHTML === '<ul><li><div>My favourite color i</div></li></ul>');
})();

(function testSingleNoteViewExists() {
  var singleNoteView = new SingleNoteView();
  assert.isTrue(singleNoteView);
})();

(function testSingleNoteViewUponCreation(){
  var note = new Note("Something");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.viewSingleNote.text == "Something");
})();

(function testSingleNoteViewDisplay(){
  var note = new Note("Faviourite drink: seltzer");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnNote() === "<div>Faviourite drink: seltzer</div>");
})();
