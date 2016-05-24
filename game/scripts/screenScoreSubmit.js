//State 10 Score Submission Screen
function loadScoreSubmission() {

   bgImage.src = "images/levelvictory.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
   scoreboardButtonImage.src = "images/scoreboardButton.png";
   buttonImage.src = "images/submitButton.png";
   scoreLogo.src = "images/logoct1.png";
  
   console.log("load once");
   drawInputField(); //  textBox.js	
   
   // turn off game over music
	music.pause();

}
	
	// Draw the score submission Screen.
function drawScoreSubmission(){
	
	//Logo
	logowidth = canvas.width * 3 / 10;
	logoheight = canvas.height / 5;
	
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(scoreLogo, canvas.width/2 - logowidth/2, 0, logowidth, logoheight);
 	
	var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var scoreboardX = (canvas.width / 2) - (buttonWidth / 2);
	var menuX = (scoreboardX / 2) - (buttonWidth / 2);
	var submitX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth / 2)) / 2 + (buttonWidth / 2);  

	// left button: main menu
	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("menu");
			setState(0);
			console.log("Level: " + currentLevel)
		}, null, function() {});	
	
	// right button: submit
	ctx.drawImage(buttonImage, submitX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(submitX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Go to Scoreboard");
				setState(4);
				console.log("Level: " + currentLevel)

				//databaseConnect.js
				updateDatabase(finalScore, finalTime, currentLevel, playerName);
			}, null, function() {
				buttonImage.src = "images/submitButton3.png";
			});
			

	updateInputField();  //  textBox.js	
	
	var inputLevelX = canvas.width / 10;
	var inputLevelY = canvas.height / 10;
	// draw level
	ctx.font = canvas.width/20 + "px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("District:", inputLevelX * 3, inputLevelY * 3);
	ctx.fillText(currentLevel, inputLevelX * 8, inputLevelY * 3);
	
	// draw time
	ctx.fillText("Time:", inputLevelX * 3, inputLevelY * 4);
	ctx.fillText(finalTime, inputLevelX * 8, inputLevelY * 4);
	
	// draw score
	ctx.fillText("Score:", inputLevelX * 3, inputLevelY * 5);
	ctx.fillText(finalScore, inputLevelX * 8, inputLevelY * 5);	
	
	// draw name
	ctx.fillText("Name:", inputLevelX * 3, inputLevelY * 6);
}
