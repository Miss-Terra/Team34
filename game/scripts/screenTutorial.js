//State 9
var i = 1; // count users click

function loadTutorialMenu() {
	
    // credits menu background image changed based on how many time user click buttons		
    bgImage.src = "images/tutorial" + i + ".png";  
    mainMenuButtonImage.src = "images/mainMenuButton.png";   
	backButtonImage.src = "images/backButton.png";
	nextButtonImage.src = "images/nextButton.png";	
	
}



function drawTutorial(){

    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    var buttonWidth = canvas.width / 10;
	var buttonHeight = canvas.height / 10;	
	var	buttonY = canvas.height * 7 / 8;
	//Button x positions
	var buttonXright = (canvas.width / 2) - (buttonWidth / 2) + ((canvas.width / 2) - (buttonWidth / 2)) / 2 + (buttonWidth / 2);    
	var buttonXmiddle = (canvas.width / 2) - (buttonWidth / 2);
	var buttonXleft = (buttonXmiddle / 2) - (buttonWidth / 2);            
	
	// Left Button - Back to previous page
	ctx.drawImage(backButtonImage, buttonXleft, buttonY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(buttonXleft, buttonY, buttonWidth, buttonHeight, 
			function () {
				if (i <= 1) {
					bgImage.src = "images/tutorial1.png"; 
				} else {
					i--;
				}
				loadTutorialMenu();	
				console.log("Tutorial picture: " + i)
			}, null, function() {});

    // Middle Button - Go to next page
	ctx.drawImage(nextButtonImage, buttonXmiddle, buttonY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(buttonXmiddle, buttonY, buttonWidth, buttonHeight, 
			function (){
				if (i >= 6) {
					bgImage.src = "images/tutorial6.png"; 
				} else {
					i++;
				}				
				loadTutorialMenu();						
				console.log("Tutorial picture: " + i)
			}, null, function() {});
	
	
    // right button
	ctx.drawImage(mainMenuButtonImage, buttonXright, buttonY, buttonWidth, buttonHeight);
	uiObjects[2] = new uiObject(buttonXright, buttonY, buttonWidth, buttonHeight, 
			function() {
				console.log("Go to main menu.");
                levelTime = 0;
				setState(0);
				i = 0;
			}, null, function() {});
				
}