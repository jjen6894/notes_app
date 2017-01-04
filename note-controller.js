function NoteListController(list){
  this._noteList = list;
}

(function(exports) {


  NoteListController.prototype.makeNoteListView = function(noteList) {
    noteListView = new NoteListView(this._noteList);
    return noteListView
  };

  NoteListController.prototype.printNoteListView = function() {
    element = document.getElementById('app');
    html = this.makeNoteListView().listNotes();
    element.innerHTML += html
  };

  exports.makeNoteListView = this.makeNoteListView;
  exports.showNoteListView = this.showNoteListView;
  exports.printNoteListView = this.printNoteListView;

})(this);
