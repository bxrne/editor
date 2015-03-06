var editor = ace.edit("editor");
var preview =document.getElementById('preview');
document.getElementById('editor').style.fontSize='16px';

ace.require("ace/ext/language_tools");
ace.require("ace/ext/emmet");

editor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: false,
  enableEmmet: true
});

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
editor.setHighlightActiveLine(true);

function previewCode() {
  requestAnimationFrame(previewCode);
  preview.innerHTML = editor.getValue();
}

previewCode();