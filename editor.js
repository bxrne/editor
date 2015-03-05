var editor = ace.edit("editor");
var preview =document.getElementById('preview');

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
editor.setHighlightActiveLine(true);

function previewCode() {
  requestAnimationFrame(previewCode);
  preview.innerHTML = editor.getValue();
}

previewCode();