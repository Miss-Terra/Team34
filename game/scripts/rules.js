var extraLevelScore = 0;
var ruleImage = new Image();
var itemType;

var ruleArray = [];
var selectArray = [];

//This determines the number of items selectable and the number of 
//UI objects allowed in the rulebox
var numberRuleItems;

// Type of item
var ruleType;
// Number of specific item
var ruleNumber;
// Color of item
var ruleColor;

// Draws one item selected by player onto game screen
function drawSelected() {
	if (itemSelectedByPlayer == selectionPerson.itemf) {
		ctx.drawImage(selectionPerson.itemf, canvas.width / 100 * 45, -canvas.height/9 + canvas.height/40, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.hat) {
		ctx.drawImage(selectionPerson.hat, canvas.width / 100 * 45, canvas.height/20 + canvas.height/40, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.shirt) {
		ctx.drawImage(selectionPerson.shirt, canvas.width / 100 * 45, -canvas.height/30 + canvas.height/40, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.pants) {
		ctx.drawImage(selectionPerson.pants, canvas.width / 100 * 45, -canvas.height/10 + canvas.height/40, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.shoes) {
		ctx.drawImage(selectionPerson.shoes, canvas.width / 100 * 45, -canvas.height/6 + canvas.height/40, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.itemb) {
		ctx.drawImage(selectionPerson.itemb, canvas.width / 100 * 45, -canvas.height/9 + canvas.height/40, canvas.width/10, canvas.height/4);
	}
	
//	selectArray[0].draw();
}

// Draws the correct rule image to the game over screen
function drawRule() {
	
	if (ruleImage != null) {
		
		switch (ruleType) {
			case 1:
				ctx.drawImage(ruleImage, canvas.width / 100 * 45, -canvas.height/9 + canvas.height/20, canvas.width/10, canvas.height/4);
				break;
			case 2:
				ctx.drawImage(ruleImage, canvas.width / 100 * 45, canvas.height/20 + canvas.height/20, canvas.width/10, canvas.height/4);
				break;
			case 3:
				ctx.drawImage(ruleImage, canvas.width / 100 * 45, -canvas.height/30 + canvas.height/20, canvas.width/10, canvas.height/4);
				break;
			case 4:
				ctx.drawImage(ruleImage, canvas.width / 100 * 45, -canvas.height/10 + canvas.height/20, canvas.width/10, canvas.height/4);
				break;
			case 5:
				ctx.drawImage(ruleImage, canvas.width / 100 * 45, -canvas.height/6 + canvas.height/20, canvas.width/10, canvas.height/4);
				break;
			case 6:
				ctx.drawImage(ruleImage, canvas.width / 100 * 45, -canvas.height/9 + canvas.height/20, canvas.width/10, canvas.height/4);
				break;
		}
	}
}

function loadRules() {
	
	var ruleboxWidth = canvas.width/4;
	var ruleboxHeight = canvas.height/7;
	
	//ctx.fillStyle = "#FFFFFF";
	//ctx.fillRect(canvas.width/2 - ruleboxWidth/2, 0, ruleboxWidth, ruleboxHeight);
	
	if (itemSelectedByPlayer != null)
		drawSelected();
		//drawRule(); // For testing if victory/fail mechanics work
	
	//ctx.fillStyle = "#000000";
	//ctx.fillText("Selected", canvas.width/2, canvas.height/30);

	// When timer reaches zero, level ends
	if (levelTime == 0) {
		finalScore += levelScore;
		setState(2);
	}

//	borderImage.src = "images/itemSelect.png";
//  borderImage2.src = "images/itemDeSelect.png";
//	
//	ctx.drawImage(borderImage2, 250, 250);
}

//Generates a single rule. (OLD + new)

function generateRule() {			

	ruleType = 0; // item location
	ruleNumber = 0; // item type
	ruleColor = 0; // color
	
	// 1 = itemf
	// 2 = hat
	// 3 = shirt
	// 4 = pant
	// 5 = shoe
	// 6 = itemb

	ruleType = Math.floor(1+Math.random() * 6); //1-6

		switch (ruleType) { // 1+
		case 1:
			ruleNumber = Math.floor(1+ Math.random() * (NumberItems));
			break;
		case 2:
			ruleNumber = Math.floor(1+ Math.random() * (NumberHats));
			break;
		case 3:
			ruleNumber = Math.floor(1+ Math.random() * (NumberShirts));
			break;
		case 4:
			ruleNumber = Math.floor(1+ Math.random() * (NumberPants));
			break;
		case 5:
			ruleNumber = Math.floor(1+ Math.random() * (NumberShoes));
			break;
		case 6:
			ruleNumber = Math.floor(1+ Math.random() * (NumberItems));
			break;
	}
	
//	switch (ruleType) { // 0+
//		case 1:
//			ruleNumber = Math.floor(Math.random() * (NumberItems + 1));
//			break;
//		case 2:
//			ruleNumber = Math.floor(Math.random() * (NumberHats + 1));
//			break;
//		case 3:
//			ruleNumber = Math.floor(Math.random() * (NumberShirts + 1));
//			break;
//		case 4:
//			ruleNumber = Math.floor(Math.random() * (NumberPants + 1));
//			break;
//		case 5:
//			ruleNumber = Math.floor(Math.random() * (NumberShoes + 1));
//			break;
//		case 6:
//			ruleNumber = Math.floor(Math.random() * (NumberItems + 1));
//			break;
//	}
	
	
//	if (ruleNumber != 0){
//	ruleColor = 0;
//	}
//	
//	if (ruleNumber == 0) {
    	ruleColor = Math.floor(1+Math.random() * (NumberColors)); ///1-3
//	} else {
//	  ruleColor = Math.floor(Math.random() * (NumberColors + 1)); ///0-3
//	}
	
	// Below code moved from original drawRule()
	switch (ruleType) {
		case 0:
			itemType = "ANY"
			break;
		case 1:
			itemType = "itemf";
			break;
		case 2:
			itemType = "hat";
			break;
		case 3:
			itemType = "shirt";
			break;
		case 4:
			itemType = "pant";
			break;
		case 5:
			itemType = "shoe";
			break;
		case 6:
			itemType = "itemb";
			break;
	}

	//prevent crashing page by loading non-existent image
	if (ruleColor != 0 && ruleNumber != 0) {
	ruleImage.src = "images/items/" + itemType + "/" + itemType + "_" + ruleNumber + ruleColor + ".png";
	} 
	
} //End generateRule()

function loadRules() {
	drawEndLevelButton();		
			
	// display item selected box
	
	//ctx.drawImage(ruleDisplayImage, canvas.width/2 - canvas.width/10, 0, canvas.width/5, canvas.height/7);
	//ctx.fillStyle = "#FFFFFF";
	//ctx.fillRect(canvas.width/2 - canvas.width/10, 0, canvas.width/5, canvas.height/7);

	var cornerRadius = 10; // rounded border
	ctx.lineJoin = "round"; 
	ctx.lineWidth = cornerRadius;

	ctx.strokeRect(canvas.width/2-canvas.width/10+(cornerRadius/2), canvas.height/40+(cornerRadius/2), canvas.width/5-cornerRadius, canvas.height/7-cornerRadius);
	ctx.fillRect(canvas.width/2-canvas.width/10+(cornerRadius/2), canvas.height/40+(cornerRadius/2), canvas.width/5-cornerRadius, canvas.height/7-cornerRadius);

	if (itemSelectedByPlayer != null) {
		drawSelected();
		//drawRule(); // For testing if victory/fail mechanics work
	}
	
	//ctx.fillStyle = "#000000";
	//ctx.fillText("Selected", canvas.width/2, canvas.height/30);
	
	// When timer reaches zero, level ends
	if (levelTime == 0) {
		finalScore += levelScore;
		setState(2);
	}
}

function drawEndLevelButton() {
	
	var buttonWidth = canvas.width/10;
	var buttonHeight = canvas.height/10;	

	// button to end level 
	ctx.drawImage(victoryButtonImage, canvas.width*39/50, canvas.height*15/50, buttonWidth*2, buttonHeight);
	
	ctx.font = canvas.width/40 + "px Arial";
	
	// display text on end level button
	if (itemSelectedByPlayer == null) {
		ctx.fillText("Select an item", canvas.width*44/50, canvas.height*18/50);
	}
	else {
		ctx.fillText("Go", canvas.width*44/50, canvas.height*18/50);
	}
	

	uiObjects[1] = new uiObject(canvas.width*8/10, canvas.height*3/10, buttonWidth*2, buttonHeight, 
		function (){
		
		if (itemSelectedByPlayer == null) {		
			// if no items selected, this button does nothing
		} else if (itemSelectedByPlayer != 0) {

			if (ruleNumber == 0) {				
				//compare color and type of item
						
			} else if (ruleColor == 0) {				
				//compare number and type of item
						
					}	else if ((itemSelectedByPlayer.src.indexOf(ruleImage.src)!= -1) || 
					(ruleTypeSelected == ruleType)){
 							levelComplete();   					
							console.log("Correct rule:" + "images/items/" + itemType + "/" + itemType + "_" + ruleNumber + ruleColor + ".png");
							
						}	else { //lost level
							if (currentLevel > 1) {
								currentLevel--;
							}
				// turn off gameplay music
				music.pause();
				
				// defeat theme, allow looping
				music = new Audio('audio/smw_gameover.mp3');
				if (musicOn) {
					music.loop = true;
					music.play();
				}
				
				levelVictory = false;					
				setState(2); // Game over sreen
				console.log("Correct rule:" + "images/items/" + itemType + "/" + itemType + "_" + ruleNumber + ruleColor + ".png");
				console.log("final time: " + finalTime);
			}
		}// if item selected by player
					
	}, null, function() {}); //uiObject
	
}

function setRuleDifficulty(x) {
 
	switch(x) {
			case 0:

			break;
		case 1:
numberRuleItems = 1;
			break;
		case 2:
numberRuleItems = 2;
			break;
		case 3:
numberRuleItems = 3;
			break;
	}
}

//Type is x , number of rules is n
function setRuleType(x, n){
	
	switch (x) {
		case 1:
			createRules(n);
			break;	
		case 2:
			createRules(n);
			break;	
		case 3:
			createRules(n);
			break;	
		case 4:
			createRules(n);
			break;	
		case 5:
			createRules(n);
			break;	
		case 6:
	}
	
}


function createRules(n) {
	
	selectArray = genItems(n);
	for (i = 0; i < n; i++){
		ruleArray[i] = genRule();
	}
	return ruleArray;
}

//Function to make and return one rule object.
function genRule() {
	//Rule is an object storing these three properties.
	var rule = {
		rType,
		rNumber,
		rColor,
		compareColor: function(item) {
				return ((rColor == item.color) || (rColor == 0));
		},
		compareNumber: function(item) {
				return ((rNumber == item.number) || (rNumber == 0));
		},
	};

	generateRule();

	this.rType=ruleType;
	this.rNumber=ruleNumber;
	this.rColor=ruleColor;
	
	return rule;
}

// Updates score when level completed.
function updateScore() {
			// Score rule: pass level n in t seconds get ((100 * n) + (180 - t)) points 
	levelScore = (levelTime + 100) + Math.floor(levelTime * (currentLevel-1));
	// Set original "levelScore" to extraLevelScore for testing purpose
	finalScore += levelScore + extraLevelScore;		
	// Add finalTime
	finalTime += startLevelTime - levelTime;
}
	
// Called when end level button is pushed.
function levelComplete() { 
	updateScore();
	levelVictory = true;
	
	// turn off gameplay music
	music.pause();
	
	// victory theme, allow looping
	music = new Audio('audio/smw_bossvict.mp3');
	if (musicOn) {
		music.loop = true;
		music.play();
	}

	setState(2); // Result screen
	console.log("final time: " + finalTime);
}

//Settings that need to run during setup for gameplay. (runs once).
function initGameSetting(){
	startLevelTimer(); // timer.js
	startLineTimer(); //timer.js 
	if (gamePaused == false){
		personArray = genPeople(lineSize, dude); // generate the personArray. (globals.js)
	}
}