function levelFinishBackgroundImg(){

	if (levelVictory){
		bgImage.src = "images/levelvictory.png";
	}else{
		bgImage.src = "images/gameover.png";
	}
	buttonImage.src = "images/button.png";
}

function drawFinishLevel(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);


	
	var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height - (buttonHeight * 2);
	//Button x positions
	var restartX = (canvas.width / 2) - (buttonWidth / 2);
	var menuX = (restartX / 2) - (buttonWidth / 2);
	var nextX = restartX + (restartX / 2) + (buttonWidth / 2);

	ctx.drawImage(buttonImage, restartX, buttonY, buttonWidth, buttonHeight);
	ctx.drawImage(buttonImage, menuX, buttonY, buttonWidth, buttonHeight);
	ctx.drawImage(buttonImage, nextX, buttonY, buttonWidth, buttonHeight);

}