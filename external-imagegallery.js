//JavaScript by Michael Egharevba for image gallery web page

//First of all I assign a value of 'a' to the 'image_tracker' and I allow this JavaScript file to get the image from html by Id. Then when a user clicks on an image it's source will change to the new one I gave it below. When the image changes to the new source it's the value of the 'image_tracker' is 'b', if it changes back to the original source in the html file its value will be 'a' and so on. @reference  https://www.youtube.com/watch?v=SGKXZUGe2sw*/
var image_tracker = 'a';
function change(){
	var image = document.getElementById('oconnell');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/oconnellbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/oconnell.jpg';
		image_tracker = 'a';
	}
}

//Here I did the same thing in the code above, except I changed the value for onclick in html and I used that for the function here. I will do that for the next 6 images because I figured using the same onclick value doesn't work
var image_tracker = 'a';
function changea(){
	var image = document.getElementById('view');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/viewbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/view.jpg';
		image_tracker = 'a';
	}
}

var image_tracker = 'a';
function changeb(){
	var image = document.getElementById('night');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/nightbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/night.jpg';
		image_tracker = 'a';
	}
}

var image_tracker = 'a';
function changec(){
	var image = document.getElementById('private');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/privatebig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/private.jpg';
		image_tracker = 'a';
	}
}

var image_tracker = 'a';
function changed(){
	var image = document.getElementById('chicken');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/chickenbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/chicken.jpg';
		image_tracker = 'a';
	}
}

var image_tracker = 'a';
function changee(){
	var image = document.getElementById('vegan');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/veganbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/vegan.jpg';
		image_tracker = 'a';
	}
}

var image_tracker = 'a';
function changef(){
	var image = document.getElementById('ingredients');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/ingredientsbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/ingredients.jpg';
		image_tracker = 'a';
	}
}

var image_tracker = 'a';
function changeg(){
	var image = document.getElementById('nyc');
	if(image_tracker == 'a'){
		image.src = "images-home-gallery/nycbig.jpg";
		image.style.position = 'relative';
		image.style.zIndex = '3';
		image_tracker = 'b'
	}else{
		image.src = 'images-home-gallery/nyc.jpg';
		image_tracker = 'a';
	}
}