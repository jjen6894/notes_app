(function(exports) {
  var Note = function(text) {
    this.text = text;
    this.id = 1;
  };
  Note.prototype.returnText = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
