function tab1click() {
	document.getElementById('hello1').style.display='block';
	document.getElementById('hello2').style.display='none';
	document.getElementById('hello3').style.display='none';
}
tab1click();

function tab2click() {
	document.getElementById('hello1').style.display='none';
	document.getElementById('hello2').style.display='block';
	document.getElementById('hello3').style.display='none';
}

function tab3click() {
	document.getElementById('hello1').style.display='none';
	document.getElementById('hello2').style.display='none';
	document.getElementById('hello3').style.display='block';
}