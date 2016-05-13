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
	
	var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var restartX = (canvas.width / 2) - (buttonWidth / 2);
	var menuX = (restartX / 2) - (buttonWidth / 2);
	var nextX = restartX + (restartX / 2) + (buttonWidth / 2);

	ctx.drawImage(restartButtonImage, restartX, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(restartX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart");
				setState(1);
				levelScore = 0;
				levelTime = 0;
				console.log("Level: " + currentLevel)
			});
	
	ctx.drawImage(mainMenuButtonImage, menuX, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(menuX, buttonY, buttonWidth, buttonHeight, 
			function (){
				console.log("menu");
				setState(0);
				levelScore = 0;
				levelTime = 0;
				console.log("Level: " + currentLevel)
			});

	

	
	ctx.drawImage(buttonImage, nextX, buttonY, buttonWidth, buttonHeight);
	if (levelVictory){ //If player beat the level
		uiObjects[2] = new uiObject(nextX, buttonY, buttonWidth, buttonHeight, 
				function (){
					console.log("next");
					nextLevel();
					setState(1);
					finalScore += levelScore;
					levelScore = 0;
					levelTime = 0;
					console.log("Level: " + currentLevel)
				});
	}else{ // if player lost
		uiObjects[2] = new uiObject(nextX, buttonY, buttonWidth, buttonHeight, 
				function (){
					console.log("Submit Score function here...");
					nextLevel();
					setState(1);
					console.log("Level: " + currentLevel)
				});
	}


}