// element = document.getElementById('app');
// element.innerHTML = "howdy";

function NoteListController(list){
  this._noteList = list;
}

(function(exports) {

  NoteListController.prototype.makeNoteListView = function(noteList) {
    return new NoteListView(this._noteList);
  };

  NoteListController.prototype.showNoteListView = function() {
    view = this.makeNoteListView().listNotes();
    return view;
  };

  NoteListController.prototype.printNoteListView = function() {
    html = this.makeNoteListView().listNotes();
    element.innerHTML += html
  };

  exports.makeNoteListView = this.makeNoteListView;
  exports.showNoteListView = this.showNoteListView;
  exports.printNoteListView = this.printNoteListView;

})(this);
