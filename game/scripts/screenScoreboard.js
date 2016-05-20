//State 4

// Scoreboard / leaderboard

//Leaderboard Values...
var leaderboardRanks = [""+1,""+2,""+3,""+4,""+5,""+6,""+7,""+8,""+9,""+10];
var leaderboardScores = [];
var leaderboardTimes = [];
var leaderboardLevels = [];
var leaderboardNames = [];

function loadScoreboard() {

   bgImage.src = "images/levelvictory.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
	 scoreLogo.src = "images/logoct1.png";
  
   for (var i = 1; i <= 10; i++){
   	/*	leaderboardScores[i] = */ connectLeaderboard(i,"Score");
   	/*	leaderboardTimes[i] = */  connectLeaderboard(i,"Time");
   	/*	leaderboardLevels[i] = */  connectLeaderboard(i,"Level");
   	/*	leaderboardNames[i] = */  connectLeaderboard(i,"Name");
   }
}

function drawScoreboard(){
	
	var logowidth = 367/2;
	var logoheight = 150/2;

	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(scoreLogo, canvas.width/2 - logowidth/2, 0, logowidth, logoheight);
 	
 	var buttonWidth = canvas.width / 10;
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
		






	// -----columns of scoreboard ----

	//This variable is the Y position of the header texts.
	var leaderboardHeaderRow = canvas.height*4/20;
	//This is basically the x value of each column like rank, scores, names, times....
	var leaderboardColumns = [];

	// These are not in a loop... For simple viewer understanding.
	leaderboardColumns[0] = canvas.width*1/20;
	leaderboardColumns[1] = canvas.width*4/20;
	leaderboardColumns[2] = canvas.width*7/20;
	leaderboardColumns[3] = canvas.width*10/20;
	leaderboardColumns[4] = canvas.width*13/20;
	

	ctx.font = canvas.width/20 + "px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Ranking", leaderboardColumns[0], canvas.height*2/20);
	
	ctx.font = canvas.width/30 + "px Arial";
	ctx.fillText("Rank", leaderboardColumns[0], leaderboardHeaderRow);
	ctx.fillText("Score", leaderboardColumns[1], leaderboardHeaderRow);
	ctx.fillText("Time", leaderboardColumns[2], leaderboardHeaderRow);
	ctx.fillText("District", leaderboardColumns[3], leaderboardHeaderRow);
	ctx.fillText("Name", leaderboardColumns[4], leaderboardHeaderRow);
	

	//leaderboardScores.sort(function(a, b){return b-a});

	//Draw each row in their specified column.
	drawLeaderboardArray(leaderboardRanks, leaderboardColumns[0]);
	drawLeaderboardArray(leaderboardScores, leaderboardColumns[1]);
	drawLeaderboardArray(leaderboardTimes, leaderboardColumns[2]);
	drawLeaderboardArray(leaderboardLevels, leaderboardColumns[3]);
	drawLeaderboardArray(leaderboardNames, leaderboardColumns[4]);

}





//Takes in an array parameter.
//id specifies the x
function drawLeaderboardArray(array, xPos){


	for (var i = 0; i < 10; i++){
		var yPos = canvas.height*(5+i)/20;

		if (array[i] == null)
			ctx.fillText("", xPos, yPos);
		else {
			ctx.fillText(array[i], xPos, yPos); // draws the score per row.
		}
		
	}
}
		
		/*
		
		ctx.fillText("2", canvas.width*1/20, canvas.height*6/20);
		if (leaderboardScores[1] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*6/20);
		else 
			ctx.fillText(leaderboardScores[1], canvas.width*4/20, canvas.height*6/20);
		
		ctx.fillText("3", canvas.width*1/20, canvas.height*7/20);
		if (leaderboardScores[2] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*7/20);
		else 
			ctx.fillText(leaderboardScores[2], canvas.width*4/20, canvas.height*7/20);
		
		ctx.fillText("4", canvas.width*1/20, canvas.height*8/20);
		if (leaderboardScores[3] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*8/20);
		else 
			ctx.fillText(leaderboardScores[3], canvas.width*4/20, canvas.height*8/20);
		
		ctx.fillText("5", canvas.width*1/20, canvas.height*9/20);
		if (leaderboardScores[4] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*9/20);
		else 
			ctx.fillText(leaderboardScores[4], canvas.width*4/20, canvas.height*9/20);
		
		ctx.fillText("6", canvas.width*1/20, canvas.height*10/20);
		if (leaderboardScores[5] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*10/20);
		else 
			ctx.fillText(leaderboardScores[5], canvas.width*4/20, canvas.height*10/20);
		
		ctx.fillText("7", canvas.width*1/20, canvas.height*11/20);
		if (leaderboardScores[6] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*11/20);
		else 
			ctx.fillText(leaderboardScores[6], canvas.width*4/20, canvas.height*11/20);
		
		ctx.fillText("8", canvas.width*1/20, canvas.height*12/20);
		if (leaderboardScores[7] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*12/20);
		else 
			ctx.fillText(leaderboardScores[7], canvas.width*4/20, canvas.height*12/20);
		
		ctx.fillText("9", canvas.width*1/20, canvas.height*13/20);
		if (leaderboardScores[8] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*13/20);
		else 
			ctx.fillText(leaderboardScores[8], canvas.width*4/20, canvas.height*13/20);
		
		ctx.fillText("10", canvas.width*1/20, canvas.height*14/20);
		if (leaderboardScores[9] == null)
			ctx.fillText("", canvas.width*4/20, canvas.height*14/20);
		else 
			ctx.fillText(leaderboardScores[9], canvas.width*4/20, canvas.height*14/20);

		*/






	
//State 10 Score Submission Screen
function loadScoreSubmission() {

   bgImage.src = "images/scoreSubmissionbg.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
   scoreboardButtonImage.src = "images/scoreboardButton.png";
   buttonImage.src = "images/submitButton.png";
  
   console.log("load once");
   drawInputField(); // canvasInput.js	

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
