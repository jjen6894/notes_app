(function testNoteListViewExist() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView)
})();

(function testPrintingEmptyHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === '<ul></ul>');
})();

(function testPrintingOneNote20Char() {
  var notelist = new NoteList();
  notelist.createNote('My favourite color is: black');
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === "<ul><li><div id=0><a href=#0>My favourite color i</a></div></li></ul>");
})();

(function testPrintingOneHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black');
  assert.isTrue(notelistview.returnHTML() === "<ul><li><div id=0><a href=#0>My favourite color i</a></div></li></ul>");
})();

(function testPrintingTwoHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black');
  notelistview.notes.createNote('My favourite color is: red');
  assert.isTrue(notelistview.returnHTML() === "<ul><li><div id=0><a href=#0>My favourite color i</a></div></li><li><div id=1><a href=#1>My favourite color i</a></div></li></ul>");
})();

(function testURLchanges() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote('My favourite color is: black');
  notelistview.notes.createNote('My favourite color is: red');
  document.getElementById("0").click();
  assert.isTrue("file:///Users/jjenorthall/Documents/Projects/Javascript/notes_js/SpecRunner.html#0" == window.location.href);
})();
