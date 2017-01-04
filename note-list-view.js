(function(exports) {
  var noteListView = function(notes) {
    this.notes = new noteList();
    noteListView.prototype.returnHTML = function() {
      return '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>'
    };
    };
  };
  exports.noteListView = noteListView;
})(this);
