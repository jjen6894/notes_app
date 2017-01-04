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

(function testPrintingOneHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black')
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>My favourite color is: black</div></li></ul>');
})();

(function testPrintingTwoHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black');
  notelistview.notes.createNote('My favourite activity is: sleep');
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>My favourite color is: black</div></li><li><div>My favourite activity is: sleep</div></li></ul>');
})();

(function testNoteControllerExist() {
  var notecontroller = new NoteController();
  assert.isTrue(notecontroller);
})();

(function testNoteControllerExistWithNoteList() {
  var notecontroller = new NoteController();
  assert.isTrue(notecontroller);
})();

(function testNoteControllerChangesAppProperty() {
  var notecontroller = new NoteController();
  notecontroller.noteListView.notes.createNote('My favourite color is: black');
  notecontroller.changeText()
  var element = document.getElementById('app');
  assert.isTrue(element.innerHTML === '<ul><li><div>My favourite color is: black</div></li></ul>');
})();
