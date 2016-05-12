function loadMainMenu() {
	
   // Judy: main menu background image		
   bgImage.src = "images/mainMenu.jpg";
   playButtonImage.src = "images/playButton.png";
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
	uiObjects[3] = new uiObject(0, animationY, animationWidth, animationHeight, 
			function (){
				console.log("easter Egg!!!");
				menuAnimationImage.src = "images/yesButton.png";
			});

    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var scoreboardX = (canvas.width / 2) - (buttonWidth / 2);
	var restartX = (scoreboardX / 2) - (buttonWidth / 2);            
	var CreditsX = scoreboardX + (scoreboardX / 2) + (buttonWidth / 2); 

    // middle button
	ctx.drawImage(scoreboardButtonImage, scoreboardX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(scoreboardX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("scoreboard");
				setState(4);
			});
	
    // left button
	ctx.drawImage(playButtonImage, restartX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(restartX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart");
				setState(1);
				currentLevel = 1;
				console.log("Level: " + currentLevel)
			});

	
    // right button
	ctx.drawImage(creditsButtonImage, CreditsX, buttonY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(CreditsX, buttonY, buttonWidth, buttonHeight,
			function () {
				console.log("credits");
				setState(5);
			});

}