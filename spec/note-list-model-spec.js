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
