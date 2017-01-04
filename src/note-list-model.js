function NoteList(){
  this._notes = [];
}

(function(exports) {

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  NoteList.prototype.showNotes = function(){
    return this._notes;
  };

  NoteList.prototype.createNote = function(string){
    var note = new Note(string);
    this.addNote(note);
  };

  exports.addNote = this.addNote;
  exports.showNotes = this.showNotes;
  exports.createNote = this.createNote;

})(this);
