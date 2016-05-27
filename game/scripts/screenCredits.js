//State 5

function loadCreditsMenu() {
	
    // credits menu background image		
    bgImage.src = "images/creditScreen.png";   
    mainMenuButtonImage.src = "images/mainMenuButton.png"; 
	scoreLogo.src = "images/logoct2.png";	
}



function drawCredits(){
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	
	// logo position
	logowidth = canvas.width * 3 / 10;
	logoheight = canvas.height / 4;

	ctx.drawImage(scoreLogo, canvas.width / 2 - logowidth / 2, canvas.height / 13, logowidth, logoheight);
	
	// draw names
	ctx.font = canvas.width / 23 + "px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("Developers", canvas.width / 2, logoheight + canvas.height / 18 * 3);
	ctx.font = canvas.width / 35 + "px Arial";
	ctx.fillText("Hyunsoo Yoo", canvas.width / 2, logoheight + canvas.height / 20 * 5);
	ctx.fillText("Judy(Dan) Zhu", canvas.width / 2, logoheight + canvas.height / 20 * 6);
	ctx.fillText("Steven(Shen-Yuan) Tsao", canvas.width / 2, logoheight + canvas.height / 20 * 7);
	ctx.fillText("Terra Hunter", canvas.width / 2, logoheight + canvas.height / 20 * 8);
	ctx.fillText("Thomas Mckay", canvas.width / 2, logoheight + canvas.height / 20 * 9);
	
	// draw main menu button
    var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var menuX = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth / 2)) / 2 + (buttonWidth / 2);          

	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart. go to confirm menu.");
                levelTime = 0;
				setState(0);
				console.log("Level: " + currentLevel)
				tutorialImageNum = 1;
			}, null,
			function() {
				mainMenuButtonImage.src = "images/mainMenuButton2.png";
			});	
}