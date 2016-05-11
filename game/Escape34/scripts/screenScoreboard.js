function loadScoreboard() {

   bgImage.src = "images/levelvictory.png";
   mainMenuButtonImage.src = "images/mainMenuButton.png";
   creditsButtonImage.src = "images/creditsButton.png";
}

function drawScoreboard(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
 	
 	var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var menuX = (canvas.width / 2) - (buttonWidth / 2);
	var creditsX = (menuX / 2) - (buttonWidth / 2);

	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("menu");
			setState(0);
			console.log("Level: " + currentLevel)
		});
		
	ctx.drawImage(creditsButtonImage, creditsX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(creditsX, buttonY, buttonWidth, buttonHeight, 
		function (){
			console.log("credits");
			setState(5);
			console.log("Level: " + currentLevel)
		});

}