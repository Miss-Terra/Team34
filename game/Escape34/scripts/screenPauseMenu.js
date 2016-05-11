function loadPauseMenu() {
	
    // Judy: pause menu background image		
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
				console.log("restart");
                //Judy: will update State value when create confirm window
				setState(1);
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
				console.log("Level: " + currentLevel)
			});
}