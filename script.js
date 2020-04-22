function init(){
	var textIn = document.getElementById('entryinput');
	var textOut = document.getElementById('entrybutton');
	
	textOut.addEventListener('click', function() {
		alert('Armani LeSure: ' + textIn.value);
		document.getElementById('textoutput').innerHTML = textIn.value;
		});
}
window.addEventListener('load', init); 