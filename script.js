function init(){
	var textIn = document.getElementById('enterimput');
	var textOut = document.getElementById('pressButt');
	
	textOut.addEventListener('click', function() {
		alert('Armani LeSure: ' + textIn.value);
		document.getElementById('entryoutput').innerHTML = textIn.value;
		});
}
window.addEventListener('load', init); 