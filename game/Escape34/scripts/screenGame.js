function drawBackgroundImg(){
		bgImage.src = "images/backgframe_480.jpg";
//<<<<<<< HEAD
  	buttonImage.src = "images/button.png";
  	initGameSetting(); //The setting required for gameplay. (run once)
//=======
  	buttonImage.src = "images/gmenub1.png";
//>>>>>>> 6b1deac05f70e8ef53ca0d4f671f6a3803f666d7
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

