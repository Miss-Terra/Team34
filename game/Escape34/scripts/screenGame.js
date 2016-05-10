function drawBackgroundImg(){
		bgImage.src = "images/backgframe_480.jpg";
  	buttonImage.src = "images/button.png";
}

function drawGame(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	
	var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = (buttonHeight / 2);
	//Button x positions
  var menuX = (buttonWidth / 2) - (buttonWidth / 2);

	ctx.drawImage(buttonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Pause Menu");
				setState(3);
				console.log("Level: " + currentLevel)
			});
}