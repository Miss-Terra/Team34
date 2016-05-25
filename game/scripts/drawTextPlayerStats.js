
function displayResult() {
	
	// display level
	var levelDisplay = "Level: " + currentLevel;
	ctx.fillText(levelDisplay, (canvas.width * 0.8), (canvas.height * 0.1));
	
	// display score
	var scoreDisplay = "Score: " + (levelScore + extraLevelScore);
	ctx.fillText(scoreDisplay, (canvas.width * 0.8), (canvas.height * 0.15));

	// display total score
	var scoreDisplay = "Total Score: " + finalScore;
	ctx.fillText(scoreDisplay, (canvas.width * 0.8), (canvas.height * 0.2));
	
	
	
}

//called in the Pause menu to display the level, score etc
function displayPaused() {
	
	ctx.font = canvas.width/50 + "px Arial";
	
	// display level
	var levelDisplay = "Level: " + currentLevel;
	ctx.fillText(levelDisplay, (canvas.width * 0.8), (canvas.height * 0.1));
	
	// display score
	var scoreDisplay = "Score: " + finalScore;
	ctx.fillText(scoreDisplay, (canvas.width * 0.8), (canvas.height * 0.15));
	
	
}

//called in the gameScreen to display the level, time, score, etc
function displayInLevel() {
	
	// must be place here, does not work in global
	ctx.font = canvas.width/50 + "px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	
	
	// display level
	var levelDisplay = "Level " + currentLevel;
	ctx.fillText(levelDisplay, canvas.width*9/10, canvas.height/10);
	
	// display score
	var scoreDisplay = "Score: " + finalScore;
	ctx.fillText(scoreDisplay, canvas.width*9/10, canvas.height*3/20);
	
	// display time in each level
	var levelTimeSec = levelTime % 60;
	var levelTimeMin = Math.floor(levelTime / 60);
	var levelTimeDisplay = pad2(levelTimeMin) + " : " + pad2(levelTimeSec);
	ctx.fillText(levelTimeDisplay, canvas.width*9/10, canvas.height/5);
	
}

//Used for displaying the correct time.
function pad2(number) {
    return (number < 10 ? '0' : '') + number
}
