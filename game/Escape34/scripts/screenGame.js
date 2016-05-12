function drawBackgroundImg(){
	// images
	bgImage.src = "images/backgframe_480.jpg";
	lineManImage.src = "images/lineMan.png";
	
	// required buttons
  	pauseButtonImage.src = "images/gmenub1.png";
	
	// test buttons
  	generateButtonImage.src = "images/button.png";
	victoryButtonImage.src = "images/button.png";
	addscoreButtonImage.src = "images/button.png";
  	
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
	ctx.drawImage(generateButtonImage, canvas.width/2-75, 75, buttonWidth*2, buttonHeight);
	uiObjects[1] = new uiObject(canvas.width/2-75, 75, buttonWidth*2, buttonHeight, 
			function (){
				generateRule();
			});
			
	// button to skip level (just for testing)
	ctx.drawImage(victoryButtonImage, canvas.width/2-75, 150, buttonWidth*2, buttonHeight);
	uiObjects[2] = new uiObject(canvas.width/2-75, 150, buttonWidth*2, buttonHeight, 
			function (){
				setState(2);
			});
			
	// button to add scores (just for testing)
	ctx.drawImage(addscoreButtonImage, canvas.width/2-75, 225, buttonWidth*2, buttonHeight);
	uiObjects[3] = new uiObject(canvas.width/2-75, 225, buttonWidth*2, buttonHeight, 
			function (){
				levelScore += 5;
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
	
	ctx.fillStyle = "#000000";
	
	if (rule != null)
		drawRule();
	
	// button to generate rules
	//ctx.fillStyle = "#000000";
	ctx.fillText("Generate", canvas.width/2, 100);
	
	// button to skip level
	ctx.fillText("Skip level", canvas.width/2, 175);
	
	// button to add score 
	ctx.fillText("Add score", canvas.width/2, 250);
	
	// display level
	ctx.fillStyle = "#000000";
	var levelDisplay = "Level " + currentLevel;
	ctx.fillText(levelDisplay, canvas.width-120, 50);
	
	// display score
	var scoreDisplay = "Score: " + levelScore;
	ctx.fillText(scoreDisplay, canvas.width-120, 100);
	
	// display time in each level
	var levelTimeSec = levelTime % 60;
	var levelTimeMin = Math.floor(levelTime / 60);
	var levelTimeDisplay = pad2(levelTimeMin) + " : " + pad2(levelTimeSec);
	ctx.fillText(levelTimeDisplay, canvas.width-120, 150);
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}

//Settings that need to run during setup for gameplay. (runs once).
function initGameSetting(){
	startLevelTimer();
}

