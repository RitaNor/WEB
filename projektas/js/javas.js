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
		var x = $(".numberPhoto");
		console.log(x.length);
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		myIndex++;
		if (myIndex > x.length) {myIndex = 1}
		x[myIndex-1].style.display = "block";
		setTimeout(carousel, 3000);
	}
});
*/
$(document).ready(function(){
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = $(".numberPhoto");
    var dots = $(".dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
});