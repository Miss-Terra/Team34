//State 0

function loadMainMenu() {
	
   // Judy: main menu background image		
   bgImage.src = "images/mainMenu.jpg";
   playButtonImage.src = "images/playButton.png";
   tutorialButtonImage.src = "images/tutorialButton.png";
   scoreboardButtonImage.src = "images/scoreboardButton.png";
   creditsButtonImage.src = "images/creditsButton.png";
   menuAnimationImage.src = "images/lineMan.png"; //Change  me for easter egg.
}

function drawMainMenu(){

	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);


	var animationWidth = canvas.width / 6;
	var animationHeight = canvas.height / 6;	
	var	animationY = canvas.height - (canvas.height / 6);
	ctx.drawImage(menuAnimationImage, 0, animationY, animationWidth, animationHeight);
	uiObjects[4] = new uiObject(0, animationY, animationWidth, animationHeight, 
			function (){
				console.log("easter Egg!!!");
				menuAnimationImage.src = "images/yesButton.png";
			});

    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;
	var buttonX = (canvas.width / 4) - (buttonWidth / 4)  - (buttonWidth / 2); // Test Dan
	//Button y positions
	var restartY = canvas.height - (buttonHeight * 8);
	var tutorialY = restartY + (buttonHeight * 2);
	var scoreboardY = tutorialY + (buttonHeight * 2);
	var creditsY = scoreboardY + (buttonHeight * 2);

    // top button
	ctx.drawImage(playButtonImage, buttonX, restartY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonX, restartY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart");
				setState(1);
				currentLevel = 1;
				console.log("Level: " + currentLevel)
			});
			
    // top-middle button
	ctx.drawImage(tutorialButtonImage, buttonX, tutorialY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonX, tutorialY, buttonWidth, buttonHeight, 
			function (){
				console.log("tutorial");
				setState(9);
			});	

	
    // middle-bottom button
	ctx.drawImage(scoreboardButtonImage, buttonX, scoreboardY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(buttonX, scoreboardY, buttonWidth, buttonHeight, 
			function (){
				console.log("scoreboard");
				setState(4);
			});
	
	
    // bottom button
	ctx.drawImage(creditsButtonImage, buttonX, creditsY, buttonWidth, buttonHeight);
	uiObjects[3] = new uiObject(buttonX, creditsY, buttonWidth, buttonHeight,
			function () {
				console.log("credits");
				setState(5);
			});

}