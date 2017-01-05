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
