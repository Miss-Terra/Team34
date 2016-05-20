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

    // middle button
	ctx.drawImage(restartButtonImage, buttonXmiddle, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonXmiddle, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart. go to confirm menu.");
				quitFromPause = false;
				quitFromVictory = false;
				setState(7);
				console.log("Level: " + currentLevel)
			});
	
    // left button
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
			});

	
    // right button
	ctx.drawImage(resumeButtonImage, buttonXright, buttonY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(buttonXright, buttonY, buttonWidth, buttonHeight,
			function (){
				console.log("resume");
                //Judy: will update State value when we have resume function
				setState(1);
				console.log("Level: " + currentLevel)
			});
			
			displayPaused();
}



//--------------------Confirm Menu--------------------
function loadConfirmMenu() {
	
    // Confirm menu background image		
    bgImage.src = "images/confirmScreen.png"; 
	resumeButtonImage.src = "images/noButton.png";
    restartButtonImage.src = "images/yesButton.png";	
}


function drawConfirmMenu() {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var noX = (canvas.width / 2) - (buttonWidth / 2);
	var yesX = (noX / 2) - (buttonWidth / 2);            


    // middle button
	ctx.drawImage(restartButtonImage, noX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(noX, buttonY, buttonWidth, buttonHeight, 
			function (){
				// restart
				if (!quitFromPause && !quitFromVictory) {
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
				}
				// quit from pause
				else if (quitFromPause && !quitFromVictory) {
					initTimeSetting();
					finalTime = 0;
					levelScore = 0;
					finalScore = 0;
					extraLevelScore = 0;
					setState(0);
				}
				// quit from victory
				else if (!quitFromPause && quitFromVictory) {
					initTimeSetting();
					finalTime = 0;
					levelScore = 0;
					finalScore = 0;
					extraLevelScore = 0;
					setState(0);
				}
			});	
	
    // left button
	ctx.drawImage(resumeButtonImage, yesX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(yesX, buttonY, buttonWidth, buttonHeight, 
			function (){
				// restart 
				if (!quitFromPause && !quitFromVictory) {
					console.log("Do not restart. Go back to pause menu");
					setState(3);
					console.log("Level: " + currentLevel)
				}
				// quit from pause 
				else if (quitFromPause && !quitFromVictory) {
					setState(3);
				}
				else if (!quitFromPause && quitFromVictory) {
					setState(2);
				}
			});
}