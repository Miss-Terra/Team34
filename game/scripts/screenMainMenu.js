//State 0

function loadMainMenu() {
		
	 bgImage.src = "images/mainMenu.jpg";
	 playButtonImage.src = "images/playButton.png";
	 tutorialButtonImage.src = "images/tutorialButton.png";
	 scoreboardButtonImage.src = "images/scoreboardButton.png";
	 creditsButtonImage.src = "images/creditsButton.png";
	 menuAnimationImage.src = "images/lineMan.png"; //Change  me for easter egg.
	 menuLogo.src = "images/logoct2.png";
	 easterEggclick = 0;
	 finalScore = 0;
	 finalTime = 0;
	 
	 // main menu music, allow looping
	 music = new Audio('audio/defense_line.mp3');
	 musicOn = true;
	 music.loop = true;
	 music.play();
	 
	 speakerOnButtonImage.src = "images/on.png";
	 speakerOffButtonImage.src = "images/off.png";

}


var easterEggclick = 0;

function drawMainMenu(){

	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	
	//Logo
	logowidth = canvas.width * 3 / 10;
	logoheight = canvas.height / 4;

	ctx.drawImage(menuLogo, canvas.width / 2- logowidth / 2, canvas.height / 5,
							  logowidth, logoheight);
	
	//Easter Egg	
	// Click on game logo and eat it
	var animationWidth = logowidth;
	var animationHeight = logoheight;	
	var	animationY = canvas.height - (canvas.height / 6);
	uiObjects[4] = new uiObject(canvas.width / 2- logowidth / 2, canvas.height / 5, animationWidth, animationHeight, 
			function (){
				console.log("easter Egg!!!");

				easterEggclick++;
				
				if(easterEggclick == 0)	{
					menuLogo.src = "images/logoct2.png";
				} else if(easterEggclick == 1) {
					menuLogo.src = "images/logoctBite1.png";
					drawEgg();
				} else if(easterEggclick == 2) {
					menuLogo.src = "images/logoctBite2.png";	
				} else if(easterEggclick == 3) {
					menuLogo.src = "images/logoctBite3.png";		
				} else
					menuLogo.src = "images/logoctBite3.png";
			});
	// Keep original Easter Egg code in case use another animation in future
	/**	
	var animationWidth = canvas.width / 6;
	var animationHeight = canvas.height / 6;	
	var	animationY = canvas.height - (canvas.height / 6);
	ctx.drawImage(menuAnimationImage, 0, animationY, animationWidth, animationHeight);
	uiObjects[4] = new uiObject(0, animationY, animationWidth, animationHeight, 
			function (){
				console.log("easter Egg!!!");
				
				
				
				
				//menuAnimationImage.src = "images/yesButton.png";
			});
	**/

		
		
			
	// Main menu buttons		
    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;
	var buttonX = (canvas.width / 4) - (buttonWidth / 4)  - (buttonWidth / 2); // Test Dan
	//Button y positions
	var restartY = canvas.height - (buttonHeight * 8);
	var tutorialY = restartY + (buttonHeight * 2);
	var scoreboardY = tutorialY + (buttonHeight * 2);
	var creditsY = scoreboardY + (buttonHeight * 2);

    // top button
	ctx.drawImage(playButtonImage, buttonX, restartY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonX, restartY, buttonWidth, buttonHeight, 
			function (){
				console.log("restart");
				currentLevel = 1;
				// initTimeSetting() in timer.js file
				initTimeSetting();
				generateRule();
				itemSelectedByPlayer = null;
				
				// turn off main menu music
				musicOn = false;
				music.pause();
				
				// gameplay music, allow looping
				music = new Audio('audio/Pirates.mp3');
				musicOn = true;
				music.loop = true;
				music.play();
				
				setState(1);
				console.log("Level: " + currentLevel);
			});
			
    // top-middle button
	ctx.drawImage(tutorialButtonImage, buttonX, tutorialY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonX, tutorialY, buttonWidth, buttonHeight, 
			function (){
				console.log("tutorial");
				musicOn = false;
				music.pause();
				setState(9);
			});	

	
    // middle-bottom button
	ctx.drawImage(scoreboardButtonImage, buttonX, scoreboardY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(buttonX, scoreboardY, buttonWidth, buttonHeight, 
			function (){
				console.log("scoreboard");
				musicOn = false;
				music.pause();
				setState(4);
			});
	
	
    // bottom button
	ctx.drawImage(creditsButtonImage, buttonX, creditsY, buttonWidth, buttonHeight);
	uiObjects[3] = new uiObject(buttonX, creditsY, buttonWidth, buttonHeight,
			function () {
				console.log("credits");
				musicOn = false;
				music.pause();
				setState(5);
			});
			
	// music button
	ctx.fillStyle = "white";
	ctx.fillRect(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
	
	if (musicOn) {
		ctx.drawImage(speakerOnButtonImage, canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
		uiObjects[5] = new uiObject(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16,
			function () {
				musicOn = false;
				music.pause();
			});
	}
	else {
		ctx.drawImage(speakerOffButtonImage, canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16);
		uiObjects[5] = new uiObject(canvas.width/32, canvas.height/32, canvas.width/16, canvas.height/16,
			function () {
				musicOn = true;
				music.loop = true;
				music.play();
			});
	}

}