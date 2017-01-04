function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
};

testAddingNewNote();

function testListingAllNotes() {
  var text = 'This is a note on Tuesday';
  var listItems = new NoteList();
  listItems.createNote(text);
  assert.isTrue(listItems.list.length === 1);
};

testListingAllNotes();

function testNoteListViewExist() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView)
};

testNoteListViewExist();

function testPrintingEmptyHtmlString() {
  var notelistview = new NoteListView();
  assert.isTrue(notelistview.returnHTML() === '<ul></ul>');
};

testPrintingEmptyHtmlString();

function testPrintingOneHtmlString() {
  var notelistview = new NoteListView();
  notelistview.notes.createNote('My favourite color is: black')
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>My favourite color is: black</div></li></ul>');
};

testPrintingOneHtmlString();

function testPrintingTwoHtmlString() {
  var notelistview = new NoteListView();
  notelistview.notes.createNote('My favourite color is: black');
  notelistview.notes.createNote('My favourite activity is: sleep');
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>My favourite color is: black</div></li><li><div>My favourite activity is: sleep</div></li></ul>');
};

testPrintingTwoHtmlString();
