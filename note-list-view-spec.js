note = {};
note.returnNoteText = function(){
  return "A doubled note";
};
var noteList = new NoteList();
noteList.addNote(note);


function testInstantiatesWithNoteList(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._noteList === noteList);
};
testInstantiatesWithNoteList();

function testListNotes(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul><li><div>A doubled note</div></li></ul>");
};
testListNotes();
