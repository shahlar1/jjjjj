

console.log('global '+document.readyState);

window.onload=function () {
	console.log('onload '+document.readyState);

		var lisItems=document.querySelectorAll('.tab');

		for (var i = 0; i < lisItems.length; i++) {
			
			

			lisItems[i].addEventListener('click',function ( ) {
				
					var contentAllItems=
				document.getElementsByClassName('content');

				contentAllItems[0].setAttribute('class','content');
				contentAllItems[1].setAttribute('class','content');
				contentAllItems[2].setAttribute('class','content');


				var contentId=this.getAttribute('data-content');

				var contenItem=document.getElementById(contentId);
				contenItem.setAttribute('class','content active');

			});
		}
}


