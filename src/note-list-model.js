(function(exports) {
  var NoteList = function() {
    this.list = [];
    this.idCounter = -1;
  };
    NoteList.prototype.listNoteItems = function() {
      return this.list;
    };
    NoteList.prototype.createNote = function(text) {
      var note = new Note(text);
      this.addNote(note);
    };
    NoteList.prototype.addNote = function(note) {
      this.list.push(note);
      this.idCounter ++;
      note.id = this.idCounter;
    };
  exports.NoteList = NoteList;
})(this);
