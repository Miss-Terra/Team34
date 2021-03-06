//State 4

// Scoreboard / leaderboard

//Leaderboard Values...
var leaderboardRanks = [""+1,""+2,""+3,""+4,""+5,""+6,""+7,""+8,""+9,""+10];
var leaderboardScores = [];
var leaderboardTimes = [];
var leaderboardLevels = [];
var leaderboardNames = [];

function loadScoreboard() {


   	bgImage.src = "images/scoreboardBackground.png";
   	mainMenuButtonImage.src = "images/mainMenuButton.png";
	achievementsButtonImage.src = "images/achievementsButton.png";
	//scoreLogo.src = "images/logoct2.png";
  
   for (var i = 1; i <= 10; i++){
   	 connectLeaderboard(i,"Score");
   	 connectLeaderboard(i,"Time");
     connectLeaderboard(i,"Level");
     connectLeaderboard(i,"Name");
   }
}

function drawScoreboard(){
	// remove logo
	/*
	// logo position
	var logowidth = canvas.width/4;
	var logoheight = canvas.height/8;

	ctx.drawImage(scoreLogo, canvas.width/2 - logowidth/2, 0, logowidth, logoheight); */

	
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	
 	var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 8;	
	var	buttonY = canvas.height - (buttonHeight * (1.5));
	//Button x positions
	var menuX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth)) / 2;  
	var achievementX = menuX - (canvas.width * (2 / 5));
	
	// right button: main menu
	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("menu");
			
			// turn off game over music
			if (gameOver) {
				music.pause();
				
				music = new Audio('audio/defense_line.mp3');
				if (musicOn) {
					music.loop = true;
					music.play();
				}
				
				gameOver = false;
			}
			
			setState(0);
			console.log("Level: " + currentLevel)
			tutorialImageNum = 1;
		}, null,
			function() {
				mainMenuButtonImage.src = "images/mainMenuButton2.png";
			});	
		
	// left button: achievements
	ctx.drawImage(achievementsButtonImage, achievementX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(achievementX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("achievement");
			setState(6);
			console.log("Level: " + currentLevel)
			console.log("Score: " + finalScore)
			console.log("EasterEggClick: " + easterEggclick)
		}, null,
			function() {
				achievementsButtonImage.src = "images/achievementsButton2.png";
			});	
		






	// -----columns of scoreboard ----

	//This variable is the Y position of the header texts.
	var leaderboardHeaderRow = canvas.height*(2/9);
	//This is basically the x value of each column like rank, scores, names, times....
	var leaderboardColumns = [];

	// These are not in a loop... For simple viewer understanding.
	leaderboardColumns[0] = canvas.width*5/20;
	leaderboardColumns[1] = canvas.width*7/20;
	leaderboardColumns[2] = canvas.width*9/20;
	leaderboardColumns[3] = canvas.width*11/20;
	leaderboardColumns[4] = canvas.width*14/20;
	
	//ctx.font = canvas.width/30 + "px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	// ctx.fillText("Ranking", canvas.width/4, canvas.height*(2/9));
	
	ctx.font = canvas.width/35 + "px Arial";
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
		var yPos = canvas.height*(6+i)/20;

		if (array[i] == null)
			ctx.fillText("", xPos, yPos);
		else {
			ctx.fillText(array[i], xPos, yPos); // draws the score per row.
		}
		
	}
}