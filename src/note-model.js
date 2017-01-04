function Note(string){
  this._text = string;
}

(function(exports) {

  Note.prototype.returnNoteText = function() {
    return this._text;
  };

  exports.returnNoteText = this.returnNoteText;

})(this);
