function NoteListView(noteList){
  this._noteList = noteList;
}

(function(exports) {

  NoteListView.prototype.listNotes = function(){
    notes = "<ul>";
    this._noteList._notes.forEach(function(element){
      notes += "<li><div>" + element.returnNoteText() + "</div></li>"
    });
    notes += "</ul>";
    return notes;
  };

  exports.listNotes = this.listNotes;

})(this);
