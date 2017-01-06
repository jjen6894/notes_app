(function(exports) {

  var NoteListView = function(notelist) {
    this.notes = notelist;
  };
  NoteListView.prototype.returnHTML = function() {
    var arrayLength = this.notes.list.length
    var htmlString = '<ul>';
    for (var i = 0; i < arrayLength; i++) {
      htmlString += '<li><div id=' + i + '>' + '<a href=#'+ i + ">" + this.notes.list[i].text.slice(0, 20) + "</a>" + '</div></li>'
    }
    htmlString += '</ul>'
    return htmlString
  };
  exports.NoteListView = NoteListView;

})(this);
