(function(exports) {
  var NoteController = function() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  exports.NoteController = NoteController;
})(this);
