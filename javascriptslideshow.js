var i = 0; 
var images = [];
var time = 1000;

// Image List
images[0] = "dog1.jpg";
images[1] = "dog2.jpg";
images[2] = "dog3.jpg";

//Change Image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
	}

window.onload = changeImg;
