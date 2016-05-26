// State 3--------------------Pause Menu--------------------
function loadPauseMenu() {
  // Pause menu background image		
  bgImage.src = "images/pauseScreen.png"; 
  mainMenuButtonImage.src = "images/mainMenuButton.png";   
  restartButtonImage.src = "images/restartButton.png";  
  resumeButtonImage.src = "images/resumeButton.png";
}

function drawPauseMenu() {
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  var buttonWidth = canvas.width / 7;
	var buttonHeight = canvas.height / 7;	
	var	buttonY = (canvas.height /2) - (buttonHeight/2);
	//Button x positions
	var buttonXmiddle = (canvas.width / 2) - (buttonWidth / 2);
	var buttonXleft = (buttonXmiddle / 2) - (buttonWidth / 2);            
	var buttonXright = buttonXmiddle + (buttonXmiddle / 2) + (buttonWidth / 2); 

    // Left Button - Back to main menu button
	ctx.drawImage(mainMenuButtonImage, buttonXleft, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonXleft, buttonY, buttonWidth, buttonHeight, 
			function () {
				gamePaused = false; console.log(gamePaused); // unpause game
				console.log("menu");
				quitFromPause = true;
				quitFromVictory = false;
				setState(7);
				// initTimeSetting() in timer.js file
				/*initTimeSetting();
                finalTime = 0;
				levelScore = 0;
				finalScore = 0;
				extraLevelScore = 0;*/
				console.log("Level: " + currentLevel)
			}, null,
			function() {
				mainMenuButtonImage.src = "images/mainMenuButton2.png";
			});

    // Middle Button - Restart button
	ctx.drawImage(restartButtonImage, buttonXmiddle, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonXmiddle, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart. go to confirm menu.");
				quitFromPause = false;
				quitFromVictory = false;
				setState(11);
				console.log("Level: " + currentLevel)
			}, null,
			function() {
				restartButtonImage.src = "images/restartButton2.png";
			});

	
    // Right Button - Resume button
	ctx.drawImage(resumeButtonImage, buttonXright, buttonY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(buttonXright, buttonY, buttonWidth, buttonHeight,
			function (){
				console.log("resume");
                //Judy: will update State value when we have resume function
				setState(1);
				console.log("Level: " + currentLevel)
			}, null,
			function() {
				resumeButtonImage.src = "images/resumeButton2.png";
			});
			
	// music button
	
	if (musicOn) {
		ctx.drawImage(speakerOnButtonImage, canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
		uiObjects[3] = new uiObject(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16,
			function () {
				musicOn = false;
				music.pause();
			}, null, function() {});
	}
	else {
		ctx.drawImage(speakerOffButtonImage, canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
		uiObjects[3] = new uiObject(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16,
			function () {
				musicOn = true;
				music.loop = true;
				music.play();
			}, null, function() {});
	}
			
			displayPaused();
}



//-------------Back to main menu Confirm Menu-------------
function loadBackToMainMenuConfirmMenu() {
	
    // Back to main screen confirm background image		
    bgImage.src = "images/backToMainScreenConfirm.png"; 
	resumeButtonImage.src = "images/noButton.png";
    restartButtonImage.src = "images/yesButton.png";		
}


function drawBackToMainMenuConfirmMenu() {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

	var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height/2 - (buttonHeight / 2);
	//Button x positions

	var buttonXleft = (buttonWidth);
	var buttonXright = canvas.width - (buttonWidth *2);            

    // Left Button - No Button
	ctx.drawImage(restartButtonImage, buttonXright, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonXright, buttonY, buttonWidth, buttonHeight, 

			function (){
				// restart
				/*if (!quitFromPause && !quitFromVictory) {
					gamePaused = false; console.log(gamePaused); // unpause game
					console.log("Restart game");
					// initTimeSetting() in timer.js file
					initTimeSetting();
					finalTime = 0; 
					levelScore = 0;
					extraLevelScore = 0;
					generateRule();
					itemSelectedByPlayer = null;
					setState(1);
				}*/
				// quit from pause
				 if (quitFromPause && !quitFromVictory) {
					initTimeSetting();
					finalTime = 0;
					levelScore = 0;
					finalScore = 0;
					extraLevelScore = 0;
					
					// turn off gameplay music
					music.pause();
					
					setState(0);
				}
				// quit from victory
				else if (!quitFromPause && quitFromVictory) {
					initTimeSetting();
					finalTime = 0;
					levelScore = 0;
					finalScore = 0;
					extraLevelScore = 0;
					
					// turn off victory music
					music.pause();
					
					setState(0);
				}
			}, null, function() {});	
	
    // Right Button - Yes Button
	ctx.drawImage(resumeButtonImage, buttonXleft, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonXleft, buttonY, buttonWidth, buttonHeight, 

			function (){
				// restart 
				/*if (!quitFromPause && !quitFromVictory) {
					console.log("Do not restart. Go back to pause menu");
					setState(3);
					console.log("Level: " + currentLevel)
				}*/
				// do not quit from pause 
				 if (quitFromPause && !quitFromVictory) {
					setState(3);
				}
				// do not quit from victory
				else if (!quitFromPause && quitFromVictory) {
					setState(2);
				}
			}, null, function() {});
}
    //-----------------Restart Confirm Menu---------------
function loadRestartConfirmMenu() {
	
    // Restart screen confirm menu background image		
    bgImage.src = "images/restartScreenConfirm.png"; 
	resumeButtonImage.src = "images/noButton.png";
    restartButtonImage.src = "images/yesButton.png";	
}


function drawRestartConfirmMenu() {
     ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

  var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height/2 - (buttonHeight / 2);
	//Button x positions
	var buttonXleft = (buttonWidth);
	var buttonXright = canvas.width - (buttonWidth *2);            

    // Left Button - No Button
	ctx.drawImage(restartButtonImage, buttonXright, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonXright, buttonY, buttonWidth, buttonHeight, 

			function (){
				// restart level from pause
				//if (!quitFromPause && !quitFromVictory) {
					gamePaused = false; console.log(gamePaused); // unpause game
					console.log("Restart game");
					// initTimeSetting() in timer.js file
					initTimeSetting();
					finalTime = 0; 
					levelScore = 0;
					extraLevelScore = 0;
					generateRule();
					itemSelectedByPlayer = null;
					
					// turn off gameplay/victory music
					music.pause();
					
					// gameplay music, allow looping
					music = new Audio('audio/07-thor.mp3');
					if (musicOn) {
						music.loop = true;
						music.play();
					}
					
					setState(1);
				//}
				// quit from pause
				/*else if (quitFromPause && !quitFromVictory) {
					initTimeSetting();
					finalTime = 0;
					levelScore = 0;
					finalScore = 0;
					extraLevelScore = 0;
					setState(0);
				}*/
				// quit from victory
				/*else if (!quitFromPause && quitFromVictory) {
					initTimeSetting();
					finalTime = 0;
					levelScore = 0;
					finalScore = 0;
					extraLevelScore = 0;
					setState(0);
				}*/
			}, null, function() {});	
	
    // Right Button - Yes Button
	ctx.drawImage(resumeButtonImage, buttonXleft, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonXleft, buttonY, buttonWidth, buttonHeight, 

			function (){
				// do not restart from pause
				//if (quitFromPause) {
				if (!quitFromPause && !quitFromVictory) {
					console.log("Do not restart. Go back to pause menu");
					setState(3);
					console.log("Level: " + currentLevel)
				}
				/*// quit from pause 
				else if (quitFromPause && !quitFromVictory) {
					setState(3);
				}*/
				// do not restart from victory
				//else if (quitFromVictory) {
				else if (!quitFromPause && quitFromVictory) {
					setState(2);
				}
			}, null, function() {} );
}