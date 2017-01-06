(function(exports) {
  var NoteList = function() {
    this.list = [];
  };
    NoteList.prototype.listNoteItems = function() {
      return this.list;
    };
    NoteList.prototype.createNote = function(text) {
      var note = new Note(text);
      this.list.push(note);
    };
    NoteList.prototype.addNote = function(note) {
      this.list.push(note);
    };
  exports.NoteList = NoteList;
})(this);
