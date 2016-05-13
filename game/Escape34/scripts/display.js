
function displayResult() {
	
	// display level
	var levelDisplay = "Level: " + currentLevel;
	ctx.fillText(levelDisplay, (canvas.width * 0.8), (canvas.height * 0.1));
	
	// display score
	var scoreDisplay = "Score: " + levelScore;
	ctx.fillText(scoreDisplay, (canvas.width * 0.8), (canvas.height * 0.15));

	// display total score
	var scoreDisplay = "Total Score: " + finalScore;
	ctx.fillText(scoreDisplay, (canvas.width * 0.8), (canvas.height * 0.2));
	
	
	
}

//called in the Pause menu to display the level, score etc
function displayPaused() {
	
	
	// display level
	var levelDisplay = "Level: " + currentLevel;
	ctx.fillText(levelDisplay, (canvas.width * 0.8), (canvas.height * 0.1));
	
	// display score
	var scoreDisplay = "Score: " + levelScore;
	ctx.fillText(scoreDisplay, (canvas.width * 0.8), (canvas.height * 0.15));
	
	
}

//called in the gameScreen to display the level, time, score, etc
function displayInLevel() {
	
	
	// button to generate rules
	//ctx.fillStyle = "#000000";
	ctx.fillText("Generate", canvas.width/2, 100);
	
	// button to skip level
	ctx.fillText("Skip level", canvas.width/2, 175);
	
	// button to add score 
	ctx.fillText("Add score", canvas.width/2, 250);
	
	// display level
	ctx.fillStyle = "#000000";
	var levelDisplay = "Level " + currentLevel;
	ctx.fillText(levelDisplay, canvas.width-120, 50);
	
	// display score
	var scoreDisplay = "Score: " + levelScore;
	ctx.fillText(scoreDisplay, canvas.width-120, 100);
	
	// display time in each level
	var levelTimeSec = levelTime % 60;
	var levelTimeMin = Math.floor(levelTime / 60);
	var levelTimeDisplay = pad2(levelTimeMin) + " : " + pad2(levelTimeSec);
	ctx.fillText(levelTimeDisplay, canvas.width-120, 150);
	
}
