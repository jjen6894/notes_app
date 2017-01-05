(function(exports) {

  var SingleNoteView = function(singleNote){
    this.viewSingleNote = singleNote;
  };

  SingleNoteView.prototype.returnNote = function(){
    var noteString = "<div>" + this.viewSingleNote.text + "</div>";
    return noteString;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
