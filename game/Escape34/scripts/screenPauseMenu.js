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
  var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var buttonXmiddle = (canvas.width / 2) - (buttonWidth / 2);
	var buttonXleft = (buttonXmiddle / 2) - (buttonWidth / 2);            
	var buttonXright = buttonXmiddle + (buttonXmiddle / 2) + (buttonWidth / 2); 

    // middle button
	ctx.drawImage(restartButtonImage, buttonXmiddle, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonXmiddle, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart. go to confirm menu.");
				setState(7);
				console.log("Level: " + currentLevel)
			});
	
    // left button
	ctx.drawImage(mainMenuButtonImage, buttonXleft, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonXleft, buttonY, buttonWidth, buttonHeight, 
			function () {
				console.log("menu");
				setState(0);
				// initTimeSetting() in timer.js file
				initTimeSetting();
                finalTime = 0;
				levelScore = 0;
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

    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var noX = (canvas.width / 2) - (buttonWidth / 2);
	var yesX = (noX / 2) - (buttonWidth / 2);            


    // middle button
	ctx.drawImage(restartButtonImage, noX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(noX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Restart game");
				setState(1);
				// initTimeSetting() in timer.js file
				initTimeSetting();
                finalTime = 0; 
				levelScore = 0;
			});	
	
    // left button
	ctx.drawImage(resumeButtonImage, yesX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(yesX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Do not restart. Go back to pause menu");
				setState(3);
				console.log("Level: " + currentLevel)
			});
}