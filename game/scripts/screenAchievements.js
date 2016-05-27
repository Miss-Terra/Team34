//State 6

var achiLevelImage = new Image();
var achiScoreImage = new Image();
var achiEasterEggImage = new Image();

var achiLevelFlag = false;
var achiScoreFlag = false;
var achiEasterEggFlag = false;

// set achievements flags
function achievementsFlag(testLevel, testScore, testEasterEggClick){
	
	// level flag
	if (testLevel >= 5) 
		achiLevelFlag = true;
	
	// score flag
	if (testScore >= 1000)
		achiScoreFlag = true;
	
	// ester egg flag
	if (testEasterEggClick > 0) 
		achiEasterEggFlag = true;	
}

 
// load achievements images
function loadAchievements() {
	
	achievementsFlag(currentLevel, finalScore, easterEggclick);
	
	if (achiLevelFlag) {
		achiLevelImage.src = "images/level.png";
	} else {
		achiLevelImage.src = "images/levelUnlocked.png";
	};
	
	
	if (achiScoreFlag) {
		achiScoreImage.src = "images/score.png";
	} else {
		achiScoreImage.src = "images/scoreUnlocked.png";
	};
	

	if (achiEasterEggFlag) {
		achiEasterEggImage.src = "images/easterEgg.png";
	} else {
		achiEasterEggImage.src = "images/easterEggUnlocked.png";
	};	
	
	bgImage.src = "images/creditScreen.png"; 
} 
 
 
// draw achievements images
function drawAchievements() {	
		
		// draw background
		ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
		
		var achievementImageWidth = canvas.width / 7;
		var achievementImageHeight = achievementImageWidth;
		
		// draw images
		ctx.drawImage(achiLevelImage, canvas.width / 7, canvas.height * (1 / 5),achievementImageWidth, achievementImageHeight);
		ctx.drawImage(achiScoreImage, canvas.width / 7, canvas.height * (2 / 5), achievementImageWidth, achievementImageHeight);
		ctx.drawImage(achiEasterEggImage, canvas.width / 7, canvas.height * (3 / 5), achievementImageWidth, achievementImageHeight);
		
		// draw title
		ctx.font = canvas.width / 20 + "px Arial";
		ctx.textAlign='center';
		ctx.fillText("Achievements", canvas.width / 2, canvas.height / 8);
		
		// draw text
		ctx.font = canvas.width / 27 + "px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign='start';
		ctx.fillText("Level: Escaped 5 districts", canvas.width * (1 / 3), canvas.height * (1 / 5) + achievementImageHeight * (1 / 2));
		ctx.fillText("Scores: Score is greater than 1000", canvas.width * (1 / 3), canvas.height * (2 / 5) + achievementImageHeight * (1 / 2));
		ctx.fillText("Easter Egg: You found it", canvas.width * (1 / 3), canvas.height * (3 / 5) + achievementImageHeight * (1 / 2));	


		// draw main menu button
		var buttonWidth = canvas.width / 10;
		var buttonHeight = canvas.height / 8;	
		var	buttonY = canvas.height - (buttonHeight * (1.5));
		//Button x positions
		var menuX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth)) / 2;   
		
		// right button: main menu
		ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
		uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("menu");
			setState(0);
			tutorialImageNum = 1;
		}, null, function() {});
}
