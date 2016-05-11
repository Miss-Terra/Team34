function drawBackgroundImg(){
		bgImage.src = "images/backgframe_480.jpg";
  	buttonImage.src = "images/gmenub1.png";
}

function drawGame(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	
//	var buttonWidth = canvas.width / 6;
//	var buttonHeight = canvas.height / 10;	
	
		var buttonWidth = canvas.width/10;
	  var buttonHeight = canvas.height/10;	

  var buttonX = (buttonWidth *(3/16));  //
	var	buttonY = (buttonHeight / 4); //6 px

	ctx.drawImage(buttonImage, buttonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Pause Menu");
				setState(3);
				console.log("Level: " + currentLevel)
			});
}