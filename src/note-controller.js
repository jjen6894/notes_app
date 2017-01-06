(function(exports) {
  var NoteController = function() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeText = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnHTML();
  };

  NoteController.prototype.createNote = function(note) {
    this.noteList.createNote(note);
  };

  NoteController.prototype.makeUrlChangeShowNote = function(){
      var self = this;
      window.addEventListener("hashchange", function(){
        var id = parseInt(window.location.href.split("#")[1]);
        var note = self.noteList.listNoteItems()[id];
        var singleNoteView = new SingleNoteView(note);
        var app = document.getElementById("app");
        app.innerHTML = singleNoteView.returnNote();
      });
  };
  exports.NoteController = NoteController;
})(this);
