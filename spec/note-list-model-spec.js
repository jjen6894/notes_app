(function testNoteListExist() {
  var notelist = new NoteList();
  assert.isTrue(notelist);
})();

(function testListingAllNotes() {
  var text = 'This is a note on Tuesday';
  var listItems = new NoteList();
  listItems.createNote(text);
  assert.isTrue(listItems.list.length === 1);
})();

(function testIncrementNoteID() {
  var text = "This is the first note";
  var text2 = "This is the second note";
  var notelist = new NoteList();
  notelist.createNote(text);
  notelist.createNote(text2);
  var popnote = notelist.list.pop();
  assert.isTrue(popnote.id === 1);
})();
