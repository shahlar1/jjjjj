var pElement=document.createElement('p');
var pText=document.createTextNode('p text');
pElement.appendChild(pText);

pElement.setAttribute('id','pElement1');
pElement.setAttribute('style','color:red;font-size:30px');
pElement.setAttribute('class','pElement-class');

document.body.appendChild(pElement);

document.getElementById('myDiv1').style.color='green';
document.getElementById('myDiv1').style.backgroundColor='red';
console.log(document.getElementById('myDiv1').style);

/*************************/


// console.log(document.getElementById('myDiv').innerText);
// console.log(document.getElementById('myDiv').innerHTML);


// var divElement=document.getElementById('myDiv');

// console.log(divElement.innerText);
// console.log(divElement.innerHTML);


/********************/

// console.log(document.getElementById('myDiv').innerText);
// console.log(document.getElementById('myDiv').innerHTML);


// document.getElementById('myDiv').innerText='<strong>P103</strong>';
// document.getElementById('myDiv1').innerHTML='<strong>P103</strong>';

// var testElements=document.getElementsByClassName('test');

// console.log(document.getElementById('myDiv'));
// console.log(testElements);


// testElements[1].innerText='Hello world';

// for (var i = testElements.length-1; i >= 0; i--) {
// 	//console.log(i)
// 	testElements[i].innerText='Hello world '+i;
// }

// var tagElements=document.getElementsByTagName('div');

// console.log(tagElements);

// for (var i = 0; i < tagElements.length; i++) {
// 	tagElements[i].innerText='div element '+i;
// }


