var Seid = document.querySelector('#myInput')

Seid.addEventListener('keyup', function () {
	var text=Seid.value;


	console.log(text.length);
	var lastElement=text[text.length-1];

	if(isNaN(lastElement)===false){

		Seid.value=

		text.substr(0, text.length-1);

	}

	
	
})





var sliderItems=[
	{
		imgSrc:'https://www.metaslider.com/wp-content/uploads/2014/11/mountains1.jpg',
		title:'Slider 1'
	},
	{
		imgSrc:'https://www.metaslider.com/wp-content/uploads/2014/11/mountains1.jpg',
		title:'Slider 2'
	}
];

console.log(sliderItems);


