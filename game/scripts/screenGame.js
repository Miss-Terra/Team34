//state 1
//This displays the graphics for game and initiates the game settings

function loadGame(){
	// images
	bgImage.src = "images/backgframe_480.jpg";
	dude.src = "images/person.png";
	scrollImage.src = "images/scroll.png";
	
	// required buttons
 	pauseButtonImage.src = "images/gmenub1.png";
	
 	pauseButtonImage2.src = "images/gpauseButton.png";
	
	// test buttons (debugging)
 	generateButtonImage.src = "images/button.png";
	victoryButtonImage.src = "images/button.png";
	addscoreButtonImage.src = "images/button.png";
	addGameOverButtonImage.src = "images/button.png";

	/*// turn off main menu music
	musicOn = false;
	music.pause();*/
	
	initGameSetting(); //rules.js
}

//Draw the background image, load level rules, buttons, display, lineup.
function drawGame(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

	loadRules();  //rules.js
	addMenuButton();
	displayInLevel();  //display.js
	drawLine();  //drawLine.js
	drawEndLevelButton(); //rules.js
}

//adds the pause menu button to the screen

function addMenuButton() {
	var buttonWidth = canvas.width/10;
	var buttonHeight = canvas.height/8;	
	var buttonX = (buttonWidth *(3/16)); 
	var	buttonY = (buttonHeight / 4); 

	ctx.drawImage(pauseButtonImage2, buttonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Pause Menu");
				gamePaused = true; console.log(gamePaused); // pause game
				setState(3);
				console.log("Level: " + currentLevel)

			}, null,
			function() {
				pauseButtonImage2.src = "images/gpauseButton2.png";
			});
	}	