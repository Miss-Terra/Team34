//state 8

function loadCharSelection(){

	bgImage.src = "images/charSelection.png";
	dude.src = "images/person.png";
	resumeButtonImage.src = "images/noButton.png";
    restartButtonImage.src = "images/yesButton.png";

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
				console.log("Nothing happened.")
			});

}



function drawSelectionChar(){

	var x = canvas.width * 0.5;
	var y = canvas.height * 0.25;
	var width = (canvas.width * 0.5) - canvas.width * 0.1;
	var height = (canvas.height * 0.9) - canvas.height * 0.25;


	ctx.drawImage(dude, x, y, width, height);
				// Draws uiObjects for people.
	/*uiPeople[i] = new uiObject(personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height, 
		function (){
			console.log("Person: " + this.person.number + " clicked.");
			this.person.debugPerson(); // runs console commands to display items.	
			setState(8);				
		}, personArray[i]);
	*/
}