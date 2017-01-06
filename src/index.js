var noteController = new NoteController();
var note = new Note("testing the notes work number one");
var note2 = new Note("a second test making sure that the first wasnt luck");

function createNewController() {
  var noteController = new NoteController()
};

window.onload = function () {
  noteController.noteList.addNote(note);
  noteController.noteList.addNote(note2);
  noteController.changeText();
};
