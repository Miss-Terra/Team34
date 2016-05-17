//State 4
function loadScoreboard() {

   bgImage.src = "images/levelvictory.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
}

function drawScoreboard(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
 	
 	var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var menuX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth / 2)) / 2 + (buttonWidth / 2);  

	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("menu");
			setState(0);
			console.log("Level: " + currentLevel)
		});
		
	// contents of scoreboard
		
	ctx.font = canvas.width/20 + "px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Ranking", canvas.width*1/20, canvas.height*2/20);
	
	ctx.font = canvas.width/30 + "px Arial";
	ctx.fillText("Rank", canvas.width*1/20, canvas.height*4/20);
	ctx.fillText("Score", canvas.width*4/20, canvas.height*4/20);
	ctx.fillText("Time", canvas.width*7/20, canvas.height*4/20);
	ctx.fillText("District", canvas.width*10/20, canvas.height*4/20);
	ctx.fillText("Name", canvas.width*13/20, canvas.height*4/20);
	

	highscores.sort(function(a, b){return b-a});

	ctx.fillText("1", canvas.width*1/20, canvas.height*5/20);
	if (highscores[0] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*5/20);
	else {
		ctx.fillText(highscores[0], canvas.width*4/20, canvas.height*5/20);
		//ctx.fillText(currentLevel, canvas.width*10/20, canvas.height*5/20);
	}
	
	
	
	
	
	ctx.fillText("2", canvas.width*1/20, canvas.height*6/20);
	if (highscores[1] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*6/20);
	else 
		ctx.fillText(highscores[1], canvas.width*4/20, canvas.height*6/20);
	
	ctx.fillText("3", canvas.width*1/20, canvas.height*7/20);
	if (highscores[2] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*7/20);
	else 
		ctx.fillText(highscores[2], canvas.width*4/20, canvas.height*7/20);
	
	ctx.fillText("4", canvas.width*1/20, canvas.height*8/20);
	if (highscores[3] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*8/20);
	else 
		ctx.fillText(highscores[3], canvas.width*4/20, canvas.height*8/20);
	
	ctx.fillText("5", canvas.width*1/20, canvas.height*9/20);
	if (highscores[4] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*9/20);
	else 
		ctx.fillText(highscores[4], canvas.width*4/20, canvas.height*9/20);
	
	ctx.fillText("6", canvas.width*1/20, canvas.height*10/20);
	if (highscores[5] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*10/20);
	else 
		ctx.fillText(highscores[5], canvas.width*4/20, canvas.height*10/20);
	
	ctx.fillText("7", canvas.width*1/20, canvas.height*11/20);
	if (highscores[6] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*11/20);
	else 
		ctx.fillText(highscores[6], canvas.width*4/20, canvas.height*11/20);
	
	ctx.fillText("8", canvas.width*1/20, canvas.height*12/20);
	if (highscores[7] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*12/20);
	else 
		ctx.fillText(highscores[7], canvas.width*4/20, canvas.height*12/20);
	
	ctx.fillText("9", canvas.width*1/20, canvas.height*13/20);
	if (highscores[8] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*13/20);
	else 
		ctx.fillText(highscores[8], canvas.width*4/20, canvas.height*13/20);
	
	ctx.fillText("10", canvas.width*1/20, canvas.height*14/20);
	if (highscores[9] == null)
		ctx.fillText("", canvas.width*4/20, canvas.height*14/20);
	else 
		ctx.fillText(highscores[9], canvas.width*4/20, canvas.height*14/20);
}






//State 10 Score Submission Screen
function loadScoreSubmission() {

   bgImage.src = "images/scoreSubmissionbg.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
   scoreboardButtonImage.src = "images/scoreboardButton.png";
   buttonImage.src = "images/submitButton.png";
}


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
				console.log("submit to server");
				// userName
				// currentLevel;
				// finalScore;
				// totalTime;
				console.log("Level: " + currentLevel)
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
		
	
	// player name input textbox. Use external js library from James Simpson and GoldFire Studios, Inc.
	// library/CanvasInput.js
	// Judy: Still working on....
	/*
	var input = new CanvasInput({
		canvas: document.getElementById('canvas'),
		x: canvas.width / 2,
		y: canvas.height / 2,
		fontSize: 18,
		fontColor: 'black',
		fontWeight: 'bold',
		width: 200,
		padding: 10,
		borderWidth: 2,
	});
		//input.focus();
		// render();
	*/
}