function drawBackgroundImg(){
	bgImage.src = "images/backgframe_480.jpg";
//<<<<<<< HEAD
  	buttonImage.src = "images/button.png";
//=======
  	pauseButtonImage.src = "images/gmenub1.png";
  	lineManImage.src = "images/lineMan.png";
//>>>>>>> 6b1deac05f70e8ef53ca0d4f671f6a3803f666d7
	initGameSetting();
}

function drawGame(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
//	var buttonWidth = canvas.width / 6;
//	var buttonHeight = canvas.height / 10;	
	
	var buttonWidth = canvas.width/10;
	var buttonHeight = canvas.height/10;	

	var buttonX = (buttonWidth *(3/16));  //
	var	buttonY = (buttonHeight / 4); //6 px

	ctx.drawImage(pauseButtonImage, buttonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Pause Menu");
				setState(3);
				console.log("Level: " + currentLevel)
			});
			
	// button to generate rules
	ctx.drawImage(buttonImage, canvas.width/2-75, 75, buttonWidth*2, buttonHeight);
	uiObjects[1] = new uiObject(canvas.width/2-75, 75, buttonWidth*2, buttonHeight, 
			function (){
				generateRule();
			});
			
			
	// display rule box
	if (currentLevel <= 10) {
		ctx.fillStyle = "#33FFFF";
		ctx.fillRect(canvas.width/2-75, 0, 150, 75);
	}
	else {
		ctx.fillStyle = "#33FFFF";
		ctx.fillRect(canvas.width/2-150, 0, 300, 75);
	}
	
	/*	
	// display random rule every 5 seconds
	if (levelTime % 5 == 0)
		generateRule();
			
	if (levelTime % 5 != 0)
		drawRule();*/
	
	if (rule != null)
		drawRule();
	
	ctx.font="20px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText("Click me!", canvas.width/2, 100);
}

//Settings that need to run during setup for gameplay. (runs once).
function initGameSetting(){
	startLevelTimer();
}

