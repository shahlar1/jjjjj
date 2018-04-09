// var myDivElement=document.getElementById('myDiv');

// var _html='';

// for (var i = 0; i < 3; i++) {
// 	_html+='<div class="box"></div>';
// }


// myDivElement.innerHTML=_html;


/************/

var myDivElement=document.getElementById('myDiv');

for (var i = 0; i < 5; i++) {
	var boxElement=document.createElement('div');
	boxElement.setAttribute('class','box');
	boxElement.setAttribute('style','top:0;left:'+(100*i)+'px');
	myDivElement.appendChild(boxElement);
}



