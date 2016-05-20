//State 2
function loadResult(){

	if (levelVictory){
		bgImage.src = "images/levelvictory.png";
		buttonImage.src = "images/nextLevelButton.png";
	}else{
		bgImage.src = "images/gameover.png";
		buttonImage.src = "images/submitButton.png";
		
	}
	mainMenuButtonImage.src = "images/mainMenuButton.png";
	restartButtonImage.src = "images/restartButton.png";
}

function drawResult(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

	
		displayResult();
	
	var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var middleButtonX = (canvas.width / 2) - (buttonWidth / 2);
	var leftButtonX = (middleButtonX / 2) - (buttonWidth / 2);
	var rightButtonX = middleButtonX + (middleButtonX / 2) + (buttonWidth / 2);

	ctx.drawImage(restartButtonImage, middleButtonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(middleButtonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart");
				finalScore -= levelScore + extraLevelScore;
				levelScore = 0;
				extraLevelScore = 0;
				// initTimeSetting() in timer.js file
				initTimeSetting();
				generateRule();
				itemSelectedByPlayer = null;
				setState(1);
				console.log("Level: " + currentLevel)
			});
	
	ctx.drawImage(mainMenuButtonImage, leftButtonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(leftButtonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				gamePaused = false; console.log(gamePaused); // unpause game
				console.log("menu");
				quitFromPause = false;
				quitFromVictory = true;
				setState(7);
				/*console.log("menu");
				setState(0);
				levelScore = 0;
				finalScore = 0;
				extraLevelScore = 0;
				// initTimeSetting() in timer.js file
				*/
				initTimeSetting();
				console.log("Level: " + currentLevel)
			});

	

	
	ctx.drawImage(buttonImage, rightButtonX, buttonY, buttonWidth, buttonHeight);
	if (levelVictory){ //If player beat the level	
		uiObjects[2] = new uiObject(rightButtonX, buttonY, buttonWidth, buttonHeight, 
				function (){
					console.log("next");
					nextLevel();
					levelScore = 0;
					extraLevelScore = 0;
					// initTimeSetting() in timer.js file
					initTimeSetting();
					generateRule();
					itemSelectedByPlayer = null;
					setState(1);
					console.log("Level: " + currentLevel)
				});
	} else { // if player lost
	
			// display rule box
			if (currentLevel <= 10) {
				ctx.fillStyle = "#FFFFFF";
				ctx.fillRect(canvas.width / 2 - canvas.width / 10, 0, canvas.width / 5, canvas.height / 7);
			} else {
				ctx.fillStyle = "#FFFFFF";
				ctx.fillRect(canvas.width / 2 - canvas.width / 5, 0, canvas.width * 2 / 5, canvas.height / 7);

				ctx.fillStyle = "#FFFFFF";
				ctx.fillRect(canvas.width / 2 - canvas.width / 10, 0, canvas.width / 5, canvas.height / 7);
		//	} else {

				//Terra commented//		ctx.fillStyle = "#FFFFFF";

				//		ctx.fillRect(canvas.width / 2 - canvas.width / 5, 0, canvas.width * 2 / 5, canvas.height / 10);

			}
			// display rule
			ctx.fillStyle = "#000000";
			ctx.fillText("Correct Rule:", canvas.width / 2, canvas.height / 30);
			drawRule();	
		
		// display "submit" button
		uiObjects[2] = new uiObject(rightButtonX, buttonY, buttonWidth*2, buttonHeight, 
				function (){
					console.log("Submit Score function here...");
					//nextLevel();
					setState(10);
					levelScore = 0;
					extraLevelScore = 0;
					console.log("Level: " + currentLevel)
				});
	}

}