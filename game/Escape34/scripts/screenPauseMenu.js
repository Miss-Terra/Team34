//--------------------Pause Menu--------------------
function loadPauseMenu() {
	
    // Pause menu background image		
    bgImage.src = "images/pauseScreen.png"; 
	resumeButtonImage.src = "images/resumeButton.png";
    restartButtonImage.src = "images/restartButton.png";  
    mainMenuButtonImage.src = "images/mainMenuButton.png";   
}

function drawPauseMenu() {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var restartX = (canvas.width / 2) - (buttonWidth / 2);
	var resumeX = (restartX / 2) - (buttonWidth / 2);            
	var menuX = restartX + (restartX / 2) + (buttonWidth / 2); 

    // middle button
	ctx.drawImage(restartButtonImage, restartX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(restartX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart. go to confirm menu.");
				setState(7);
				console.log("Level: " + currentLevel)
			});
	
    // left button
	ctx.drawImage(resumeButtonImage, resumeX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(resumeX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("resume");
                //Judy: will update State value when we have resume function
				setState(1);
				console.log("Level: " + currentLevel)
			});

	
    // right button
	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight,
			function () {
				console.log("menu");
				setState(0);
				levelTime = 0;
                finalTime = 0; 
				console.log("Level: " + currentLevel)
			});
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
                levelTime = 0;
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