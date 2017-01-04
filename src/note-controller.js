(function(exports) {
  var NoteController = function() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeText = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnHTML();
  };

  exports.NoteController = NoteController;
})(this);
