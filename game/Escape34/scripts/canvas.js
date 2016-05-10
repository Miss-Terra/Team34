//This file is for the base canvas settings.

// Variables
	var
	canvas,
	ctx,
	width,
	height;

	canvas = document.getElementById("canvas")
	ctx = canvas.getContext("2d");
	
	//Set the canvas width to your window width.
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	

	//(event)When the window is resized, this function runs.
	$(window).resize(function() {
		canvas.width = $(window).width();
		canvas.height = $(window).height();
		
	});
	
