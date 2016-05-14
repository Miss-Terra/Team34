//state 1
//This displays the graphics for game and initiates the game settings

function loadGame(){
	// images
	bgImage.src = "images/backgframe_480.jpg";
	dude.src = "images/person.png";
	
	// required buttons
 	pauseButtonImage.src = "images/gmenub1.png";
	pauseButtonImage2 = new Image();
 	pauseButtonImage2.src = "images/gpauseButton.png";
	
	// test buttons
 	generateButtonImage.src = "images/button.png";
	victoryButtonImage.src = "images/button.png";
	addscoreButtonImage.src = "images/button.png";
  	
	initGameSetting();
}

//Draw the background image, load level rules, buttons, display, lineup.
function drawGame(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

	loadRules();
	addMenuButton();
	displayInLevel();
	drawLine();
 
}

//adds the pause menu button to the screen

function addMenuButton() {
	var buttonWidth = canvas.width/10;
	var buttonHeight = canvas.height/10;	
	var buttonX = (buttonWidth *(3/16)); 
	var	buttonY = (buttonHeight / 4); 

	ctx.drawImage(pauseButtonImage2, buttonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Pause Menu");
				setState(3);
				console.log("Level: " + currentLevel)
			});
	}	