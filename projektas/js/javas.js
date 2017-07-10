$(document).ready(function () {
		var currentPosition = 0;
		var slideWidth = 2000;
		var slides = $('.slidePhoto');
		console.log(slides);
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
	$(".info div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

	
    $("#next").click(function(){
        if ($(".info div:visible").next().length != 0)
            $(".info div:visible").next().show().prev().hide();
        else {
            $(".info div:visible").hide();
            $(".info div:first").show();
        }
        return false;
    });
	
	
    $("#prev").click(function(){
        if ($(".info div:visible").prev().length != 0)
            $(".info div:visible").prev().show().next().hide();
        else {
            $(".info div:visible").hide();
            $(".info div:last").show();
        }
        return false;
    });
	
	$(".active").on("click", function(){
			
		var eventInfo=$(this).children("span").text();
		$("#7").append(eventInfo);
		$("#13").append(eventInfo);
		$("#25").append(eventInfo);
		$("#29").append(eventInfo);
	});
});