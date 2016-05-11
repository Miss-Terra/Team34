//This file is for the base canvas settings.

// Variables
	var
	canvas,
	ctx,
	winWidth = $(window).width(),
	winHeight = $(window).height();

	canvas = document.getElementById("canvas")
	ctx = canvas.getContext("2d");
	
	//resize canvas during initialization.
	resizeCanvas();

	
	

	//(event)When the window is resized, this function runs.
	$(window).resize(function() {
		resizeCanvas();
	});

	//function that resizes canvas.
	function resizeCanvas(){
		winWidth = $(window).width(),
		winHeight = $(window).height();
		var heightMin = winWidth * (3/4);
		var widthMin = winHeight * (4/3);

			//Check if device is mobile or not.
		if (winWidth < 800 && winHeight < 550){
			//Set the canvas width to your window width.
			canvas.width = winWidth;
			canvas.height = winHeight;
		}else{ // if desktop
			//Settings to fit he screen, while keeping ratio.
				if (heightMin <= winHeight){
					canvas.width = winWidth;
					canvas.height = heightMin;
				}else{
					canvas.width = widthMin;
					canvas.height = winHeight;
				}
		}
	}
	

