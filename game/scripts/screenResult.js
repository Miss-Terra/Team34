//State 2
function loadResult(){

	if (levelVictory){
		bgImage.src = "images/levelvictory.png";
		buttonImage.src = "images/nextLevelButton.png";
	}else{
		bgImage.src = "images/gameover.png";
		buttonImage.src = "images/submitButton.png";
		
	}	

	speakerOnButtonImage.src = "images/on.png";
	speakerOffButtonImage.src = "images/off.png";
	mainMenuButtonImage.src = "images/mainMenuButton.png";
	restartButtonImage.src = "images/restartButton.png";
}

function drawResult(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

	//ctx.fillStyle = "white";
	//displayResult();
	
	var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 8;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var middleButtonX = (canvas.width / 2) - (buttonWidth / 2);
	var leftButtonX = (middleButtonX / 2) - (buttonWidth / 2);
	var rightButtonX = middleButtonX + (middleButtonX / 2) + (buttonWidth / 2);

	
	// middle button, restart
	ctx.drawImage(restartButtonImage, middleButtonX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(middleButtonX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart");
				finalScore -= currentLevel*50;
				levelScore = 0;
				extraLevelScore = 0;
				// initTimeSetting() in timer.js file
				initTimeSetting();
				generateRule();
				itemSelectedByPlayer = null;
				setState(11);
				console.log("Level: " + currentLevel)
			}, null, 
				function() {
					restartButtonImage.src = "images/restartButton2.png";
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
			}, null, 
				function() {
					mainMenuButtonImage.src = "images/mainMenuButton2.png";
				});

			
	// music button

//	ctx.fillStyle = "white";
//	ctx.fillRect(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);

	//ctx.fillStyle = "white";
	//ctx.fillRect(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
	
	if (musicOn) {
		ctx.drawImage(speakerOnButtonImage, canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
		uiObjects[2] = new uiObject(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16,
			function () {
				musicOn = false;
				music.pause();
			}, null, function() {});
	}
	else {
		ctx.drawImage(speakerOffButtonImage, canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
		uiObjects[2] = new uiObject(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16,
			function () {
				musicOn = true;
				music.loop = true;
				music.play();
			}, null, function() {});
	}

	ctx.drawImage(buttonImage, rightButtonX, buttonY, buttonWidth, buttonHeight);
	if (levelVictory){ //If player beat the level	

		// displays level and scores along with scroll
		//ctx.drawImage(scrollImage, canvas.width/4, canvas.height/4, canvas.width/2, canvas.height/2);

		uiObjects[3] = new uiObject(rightButtonX, buttonY, buttonWidth, buttonHeight, 
				function (){
					console.log("next");
					nextLevel();
					levelScore = 0;
					extraLevelScore = 0;
					// initTimeSetting() in timer.js file
					initTimeSetting();
					generateRule();
					itemSelectedByPlayer = null;
					
					// turn off victory music
					music.pause();
					
					// gameplay music, allow looping
					music = new Audio('audio/07-thor.mp3');
					if (musicOn) {
						music.loop = true;
						music.play();
					}
					
					setState(1);
					console.log("Level: " + currentLevel)
				}, null, 
				function() {
					buttonImage.src = "images/nextButton2.png";
				});
	} else { // if player lost
			
			// display rule
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Correct Rule", canvas.width / 2, canvas.height / 30);
			
			var cornerRadius = 10; // rounded border
			ctx.lineJoin = "round"; 
			ctx.lineWidth = cornerRadius;

			ctx.strokeRect(canvas.width/2-canvas.width/10+(cornerRadius/2), canvas.height/20+(cornerRadius/2), canvas.width/5-cornerRadius, canvas.height/7-cornerRadius);
			ctx.fillRect(canvas.width/2-canvas.width/10+(cornerRadius/2), canvas.height/20+(cornerRadius/2), canvas.width/5-cornerRadius, canvas.height/7-cornerRadius);
			
			drawRule();
		
		// display "submit" button
		uiObjects[3] = new uiObject(rightButtonX, buttonY, buttonWidth*2, buttonHeight, 
				function (){
					console.log("Submit Score function here...");
					//nextLevel();
					gameOver = true;
					setState(10);
					levelScore = 0;
					extraLevelScore = 0;
					console.log("Level: " + currentLevel)
				}, null, 
				function() {
					buttonImage.src = "images/submitButton2.png";
				});
	}
	
	displayResult();


}