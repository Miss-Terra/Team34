//state 1

function loadGame(){
	// images
	bgImage.src = "images/backgframe_480.jpg";
	dude.src = "images/person.png";
	
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

	loadItems();
	loadRules();
	addMenuButton();
	displayInLevel();
	
  	ctx.drawImage(dude, 100, 100);
		ctx.drawImage(hatArray[1], 100, 130); //test drawing an image from array

}

//adds the pause menu button to the screen

function addMenuButton() {
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
		
		
	}		