(function(exports) {
  var Note = function(text) {
    this.text = text;
    this.id = 0;
  };
  Note.prototype.returnText = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
