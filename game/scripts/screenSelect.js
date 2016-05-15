//state 8
var selectionPerson; // This variable is a person. It's defined in drawLine.js... Whenever a user clicks a person.
function loadCharSelection(){

	bgImage.src = "images/charSelection.png";
	dude.src = "images/person.png";
	resumeButtonImage.src = "images/yesButton.png";
    restartButtonImage.src = "images/noButton.png";

	initSelectionSetting();

}

function initSelectionSetting(){
	
}

function drawCharSelection(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	drawSelectMenuButtons();
	drawSelectionChar();


}


function drawSelectMenuButtons(){

    var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	noY = canvas.height * 0.8;
	var	yesY = canvas.height * 0.2;
	//Button x positions
	var noX =  buttonWidth * 0.5;
	var yesX = buttonWidth * 0.5;            


    // No button
	ctx.drawImage(restartButtonImage, noX, noY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(noX, noY, buttonWidth, buttonHeight, 
			function (){
				console.log("Canceled Selecton...");
				setState(1);
			});	
	
    // Yes button
	ctx.drawImage(resumeButtonImage, yesX, yesY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(yesX, yesY, buttonWidth, buttonHeight, 
			function (){
				gamePaused = false; console.log(gamePaused); // unpause game
				console.log("Nothing happened.")
			});

}



function drawSelectionChar(){

	var x = canvas.width * 0.55;
	var y = canvas.height * 0.25;
	//var width = (canvas.width * 0.5) - canvas.width * 0.1;
	//var height = (canvas.height * 0.9) - canvas.height * 0.25;
	var width = (canvas.width/4) * 0.9; // Math looks weird here because I needed to keep the same raito as the person size in drawline.js
	var height = (canvas.height/1.375) * 0.9; // Math looks weird here because I needed to keep the same raito as the person size in drawline.js

	selectionPerson.setSize(width,height); // needed for drawItems
	selectionPerson.setPosition(x,y); // needed for drawItems



	ctx.drawImage(selectionPerson.image, selectionPerson.x, selectionPerson.y, selectionPerson.width, selectionPerson.height);
	drawItems(selectionPerson, true);
}
		

// (Calls the functions required to enable users to select the item.)	
function drawItemSelection(x,y,w,h){
	//create a box around each item.
	ctx.rect(x, y, w, h);
	ctx.stroke();
}
