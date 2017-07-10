/*var slide=document.getElementById("slidePhoto");
var slideArray=["photo1.jpg","photo2.jpg","photo3.jpg"];
var slideIndex=0;

function changePhoto(){
	slideIndex++;
	if(slideIndex>=slideArray.length){
		slideIndex=0;
	}
}

var intervalHandle = setInterval(changePhoto,2000);

changePhoto();*/
/*$(document).ready(function(){
	var myIndex = 0;
	carousel();

	function carousel() {
		var i;
		var x = $(".slidePhoto");
		console.log(x.length);
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		myIndex++;
		if (myIndex > x.length) {myIndex = 1}
		x[myIndex-1].style.display = "block";
		setTimeout(carousel, 3000);
	}
});*/
$(document).ready(function () {
		var currentPosition = 0;
		var slideWidth = 2000;
		var slides = $('.slidePhoto');
		var numberOfSlides = slides.length;
		var slideShowInterval;
		var speed = 3000;

		slideShowInterval = setInterval(changePosition, speed);

		slides.wrapAll('<div id="slidesHolder"></div>');

		slides.css({ 'float': 'left' });

		$('#slidesHolder').css('width', slideWidth * numberOfSlides);

		$('#slideShowWindow')
		 .prepend('<span class="slideNav" id="leftNav">Move Left</span>')
		 .append('<span class="slideNav" id="rightNav">Move Right</span>');

			manageNav(currentPosition);


			$('.slideNav').bind('click', function () {

			 currentPosition = ($(this).attr('id') === 'rightNav')
			 ? currentPosition + 1 : currentPosition - 1;

			 manageNav(currentPosition);
			 clearInterval(slideShowInterval);
			 slideShowInterval = setInterval(changePosition, speed);
			 moveSlide();
			 });

		function manageNav(position) {
	 
			 if (position === 0) {
			 $('#leftNav').hide();
			 }
			 else {
			 $('#leftNav').show();
			 }

			 if (position === numberOfSlides - 1) {
			 $('#rightNav').hide();
			 }
			 else {
			 $('#rightNav').show();
			 }
		}

		function changePosition() {
			if (currentPosition === numberOfSlides - 1) {
			currentPosition = 0;
			manageNav(currentPosition);
		} else {
			currentPosition++;
			manageNav(currentPosition);
			}
			moveSlide();
		}

		function moveSlide() {
			$('#slidesHolder').animate({ 'marginLeft': slideWidth * (-currentPosition) });
		}

});