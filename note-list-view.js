(function(exports) {

  var NoteListView = function() {
    this.notes = new NoteList();
  };
  
  NoteListView.prototype.returnHTML = function() {
    var arrayLength = this.notes.list.length
    var htmlString = '<ul>';
    for (var i = 0; i < arrayLength; i++) {
      htmlString += '<li><div>' + this.notes.list[i].text + '</div></li>'
    }
    htmlString += '</ul>'
    return htmlString
  };
  exports.NoteListView = NoteListView;

})(this);
