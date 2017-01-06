(function testNoteModelExist() {
  var note = new Note("Text");
  assert.isTrue(note);
})();

(function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
})();

(function testNewNoteHasID() {
  var note = new Note("test");
  assert.isTrue(note.id === 0);
})();
