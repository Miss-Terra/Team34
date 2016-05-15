//State 9
function loadTutorialMenu() {
	
    // credits menu background image		
    // bgImage.src = "";   
    mainMenuButtonImage.src = "images/mainMenuButton.png";   
}



function drawTutorial(){
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var menuX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth / 2)) / 2 + (buttonWidth / 2);          

    // right button
	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("Go to main menu.");
                levelTime = 0;
				setState(0);
			});
}