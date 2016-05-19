	
//State 10 Score Submission Screen
function loadScoreSubmission() {

   bgImage.src = "images/scoreSubmissionbg.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
   scoreboardButtonImage.src = "images/scoreboardButton.png";
   buttonImage.src = "images/submitButton.png";
  
   console.log("load once");
   drawInputField(); // canvasInput.js	

}


	
	// Draw the score submission Screen.
function drawScoreSubmission(){
	
	
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
 	
	var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var scoreboardX = (canvas.width / 2) - (buttonWidth / 2);
	var submitX = (scoreboardX / 2) - (buttonWidth / 2);
	var menuX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth / 2)) / 2 + (buttonWidth / 2);  

	// left button: submit
	ctx.drawImage(buttonImage, submitX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(submitX, buttonY, buttonWidth, buttonHeight, 
			function (){


				
				console.log("submit to server!!");

				//databaseConnect.js
				updateDatabase(finalScore, finalTime, currentLevel, playerName);
		
			});
		
	
	// middle button: scoreboard
	ctx.drawImage(scoreboardButtonImage, scoreboardX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(scoreboardX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("scoreboard");
				setState(4);
				console.log("Level: " + currentLevel)
			});
	
	
	// right button: main menu
	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("menu");
			setState(0);
			console.log("Level: " + currentLevel)
		});
			

	updateInputField();
}
