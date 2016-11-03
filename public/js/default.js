// var Sandbox = {
//     init: function() {
//       Sandbox.template = _.template($('#template').html())
//       Sandbox.destination = $('#preview iframe')[0]
//     },
//     render: function(data) {
//       Sandbox.destination.srcdoc = Sandbox.template(data)
//     }
// }

$(document).ready(function(){

	var code = $('.codemirror-textarea')[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
		mode: "javascript",
		tabSize: 2,
		lineWrapping: true,
		matchBrackets: true, 
		autoCloseBrackets: true,
		styleActiveLine: true,
		theme: 'pastel-on-dark',
		autofocus: true
	});

	$('#load').on('click', function() {
		getData();
	})

	function produceMessage(){
    	var msg= '<script class="output">' + editor.getValue() + '</script>';
    	return msg;
	}

	function getData() {
		var text = editor.getValue();
    	$('canvas').remove();
    	$('#output').append(produceMessage());
	}
})

