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
$(document).ready(function(){
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
