
var level = 1;
var person = 1;
var colors;
var items;
//var rule;
var rule = [];
var color = [];
var item = [];
var randomRule1, randomRule2;
var operators;
var join;
var extraLevelScore = 0;
var ruleImage = new Image();
var itemType;

function drawSelected() {
	if (itemSelectedByPlayer == selectionPerson.itemf) {
		ctx.drawImage(selectionPerson.itemf, canvas.width / 100 * 46, -canvas.height / 10, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.hat) {
		ctx.drawImage(selectionPerson.hat, canvas.width / 100 * 46, canvas.height / 20, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.shirt) {
		ctx.drawImage(selectionPerson.shirt, canvas.width / 100 * 46, -canvas.height / 50, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.pants) {
		ctx.drawImage(selectionPerson.pants, canvas.width / 100 * 46, -canvas.height / 12, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.shoes) {
		ctx.drawImage(selectionPerson.shoes, canvas.width / 100 * 46, -canvas.height / 8, canvas.width/10, canvas.height/4);
	}
	else if (itemSelectedByPlayer == selectionPerson.itemb) {
		ctx.drawImage(selectionPerson.itemb, canvas.width / 100 * 43, -canvas.height / 10, canvas.width/10, canvas.height/4);
	}
}

function drawRule() {
	// display selected item in top box
	//Comment out part of original code (moved to generateRule() )
	/*switch (rule[0]) {
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

	ruleImage.src = "images/items/" + itemType + "/" + itemType + "_" + rule[1] + rule[2] + ".png";*/
	
	
	if (ruleImage != null) {
		
		switch (rule[0]) {
			case 1:
				ctx.drawImage(ruleImage, canvas.width / 9 * 4, -canvas.height / 10);
				break;
			case 2:
				ctx.drawImage(ruleImage, canvas.width / 9 * 4, canvas.height / 25);
				break;
			case 3:
				ctx.drawImage(ruleImage, canvas.width / 9 * 4, -canvas.height / 25);
				break;
			case 4:
				ctx.drawImage(ruleImage, canvas.width / 9 * 4, -canvas.height / 9);
				break;
			case 5:
				ctx.drawImage(ruleImage, canvas.width / 9 * 4, -canvas.height * 3 / 20);
				break;
			case 6:
				ctx.drawImage(ruleImage, canvas.width/2, -canvas.height / 10);
				break;
		}
	}
}	

function generateRule() {			

	rule[0] = 0; // item location
	rule[1] = 0; // item type
	rule[2] = 0; // color
	
	// 1 = itemf
	// 2 = hat
	// 3 = shirt
	// 4 = pant
	// 5 = shoe
	// 6 = itemb
	rule[0] = Math.floor(Math.random() * 6 + 1);
	
	switch (rule[0]) {
		case 1:
			rule[1] = Math.floor(Math.random() * NumberItems + 1);
			break;
		case 2:
			rule[1] = Math.floor(Math.random() * NumberHats + 1);
			break;
		case 3:
			rule[1] = Math.floor(Math.random() * NumberShirts + 1);
			break;
		case 4:
			rule[1] = Math.floor(Math.random() * NumberPants + 1);
			break;
		case 5:
			rule[1] = Math.floor(Math.random() * NumberShoes + 1);
			break;
		case 6:
			rule[1] = Math.floor(Math.random() * NumberItems + 1);
			break;
	}
	
	rule[2] = Math.floor(Math.random() * NumberColors + 1);
	
	
	// Below code moved from original drawRule()
	switch (rule[0]) {
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

	ruleImage.src = "images/items/" + itemType + "/" + itemType + "_" + rule[1] + rule[2] + ".png";

	
	

	/*if (currentLevel <= 5) {
		// color matrix 
		colors = [ "red", "yellow", "green", "blue" ];
		// item matrix 
		items = [ [ "none" ],
				  [ "shirt" ],
				  [ "none" ],
				  [ "none" ], 
				  [ "pants" ],
				  [ "shoes" ] ];
	
		// items each character possesses 
		color[0] = colors[Math.floor(Math.random() * colors.length)];
		item[0] = items[0][Math.floor(Math.random() * items[0].length)];
		color[1] = colors[Math.floor(Math.random() * colors.length)];
		item[1] = items[1][Math.floor(Math.random() * items[1].length)];
		color[2] = colors[Math.floor(Math.random() * colors.length)];
		item[2] = items[2][Math.floor(Math.random() * items[2].length)];
		color[3] = colors[Math.floor(Math.random() * colors.length)];
		item[3] = items[3][Math.floor(Math.random() * items[3].length)];
		color[4] = colors[Math.floor(Math.random() * colors.length)];
		item[4] = items[4][Math.floor(Math.random() * items[4].length)];
		color[5] = colors[Math.floor(Math.random() * colors.length)];
		item[5] = items[5][Math.floor(Math.random() * items[5].length)];
	}
	else if (currentLevel <= 10) {
		colors = [ "red", "yellow", "green", "blue", "black", "white" ];
		items = [ [ "none", "hats" ],
				  [ "shirt", "t-shirt" ],
				  [ "none", "bag" ],
				  [ "none", "bag" ] ,
				  [ "pants", "shorts" ],
				  [ "shoes", "boots" ] ];
							  
		color[0] = colors[Math.floor(Math.random() * colors.length)];
		item[0] = items[0][Math.floor(Math.random() * items[0].length)];
		color[1] = colors[Math.floor(Math.random() * colors.length)];
		item[1] = items[1][Math.floor(Math.random() * items[1].length)];
		color[2] = colors[Math.floor(Math.random() * colors.length)];
		item[2] = items[2][Math.floor(Math.random() * items[2].length)];
		color[3] = colors[Math.floor(Math.random() * colors.length)];
		item[3] = items[3][Math.floor(Math.random() * items[3].length)];
		color[4] = colors[Math.floor(Math.random() * colors.length)];
		item[4] = items[4][Math.floor(Math.random() * items[4].length)];
		color[5] = colors[Math.floor(Math.random() * colors.length)];
		item[5] = items[5][Math.floor(Math.random() * items[5].length)];
	}
	else if (currentLevel <= 15) {
		colors = [ "red", "yellow", "green", "blue", "black", "white", "brown", "gray" ];
		items = [ [ "none", "hats", "sunglasses" ],
				  [ "shirt", "t-shirt", "sleeveless" ],
				  [ "none", "bag", "umbrella" ],
				  [ "none", "bag", "umbrella" ],
				  [ "pants", "shorts", "skirt" ],
				  [ "shoes", "boots", "sandals" ] ];
							  
		color[0] = colors[Math.floor(Math.random() * colors.length)];
		item[0] = items[0][Math.floor(Math.random() * items[0].length)];
		color[1] = colors[Math.floor(Math.random() * colors.length)];
		item[1] = items[1][Math.floor(Math.random() * items[1].length)];
		color[2] = colors[Math.floor(Math.random() * colors.length)];
		item[2] = items[2][Math.floor(Math.random() * items[2].length)];
		color[3] = colors[Math.floor(Math.random() * colors.length)];
		item[3] = items[3][Math.floor(Math.random() * items[3].length)];
		color[4] = colors[Math.floor(Math.random() * colors.length)];
		item[4] = items[4][Math.floor(Math.random() * items[4].length)];
		color[5] = colors[Math.floor(Math.random() * colors.length)];
		item[5] = items[5][Math.floor(Math.random() * items[5].length)];
	}
				
	// rule consists of two items for level > 10 
	if (currentLevel <= 10) {
		randomRule1 = Math.floor(Math.random() * 6);
				
		while (item[randomRule1] == "none") {
			randomRule1 = Math.floor(Math.random() * 6);
		}
					
		rule += color[randomRule1] + " " + item[randomRule1];
	}
	else {
		randomRule1 = Math.floor(Math.random() * 6);
		randomRule2 = Math.floor(Math.random() * 6);
		operators = [ "AND", "OR" ];
		join = Math.floor(Math.random() * 2);
				
		while (item[randomRule1] == "none" || item[randomRule2] == "none" || randomRule1 == randomRule2 ) {
			randomRule1 = Math.floor(Math.random() * 6);
			randomRule2 = Math.floor(Math.random() * 6);
		}
					
		rule += color[randomRule1] + " " + item[randomRule1] + " " + operators[join] + " " +
				color[randomRule2] + " " + item[randomRule2];
	}*/
}

function loadRules() {
		
	var buttonWidth = canvas.width/10;
	var buttonHeight = canvas.height/10;	

	// button to generate rules
	/*ctx.drawImage(generateButtonImage, canvas.width*8/10, canvas.height*2/10, buttonWidth*2, buttonHeight);
	uiObjects[1] = new uiObject(canvas.width*8/10, canvas.height*2/10, buttonWidth*2, buttonHeight, 
			function (){
				generateRule();
				personArray = genPeople(lineSize, dude);
			});*/
			
	// button to skip level (just for testing)
	ctx.drawImage(victoryButtonImage, canvas.width*8/10, canvas.height*3/10, buttonWidth*2, buttonHeight);
	uiObjects[1] = new uiObject(canvas.width*8/10, canvas.height*3/10, buttonWidth*2, buttonHeight, 
			function (){

				if (itemSelectedByPlayer == null) {
					// if no items selected, this button does nothing
				}
				else if (itemSelectedByPlayer.src.indexOf(ruleImage.src)!= -1)
				{
					// Score rule: pass level n in t seconds get ((100 * n) + (180 - t)) points 
					levelScore = levelTime + 100;
					// Set original "levelScore" to extraLevelScore for testing purpose
					finalScore += levelScore + extraLevelScore;				
					levelVictory = true;
					setState(2); // Skip level screen
					console.log("Correct rule:" + "images/items/" + itemType + "/" + itemType + "_" + rule[1] + rule[2] + ".png");
				}
				else {
					finalScore += levelScore + extraLevelScore;
					levelVictory = false;					
					setState(2); // Game over sreen
					console.log("Correct rule:" + "images/items/" + itemType + "/" + itemType + "_" + rule[1] + rule[2] + ".png");
				}
					
				/* Commented out original code
				// Score rule: pass level n in t seconds get ((100 * n) + (180 - t)) points 
				levelScore = levelTime + 100;
				// Set original "levelScore" to extraLevelScore for testing purpose
				finalScore += levelScore + extraLevelScore;				
				levelVictory = true;
				setState(2);
				*/
			});
		
	// Remove add score button.		
	// button to add scores (just for testing)
	/*
	ctx.drawImage(addscoreButtonImage, canvas.width*8/10, canvas.height*4/10, buttonWidth*2, buttonHeight);
	uiObjects[2] = new uiObject(canvas.width*8/10, canvas.height*4/10, buttonWidth*2, buttonHeight, 
			function (){
				extraLevelScore += 5;
			});
	*/
			
	// button to end game (just for testing)
	ctx.drawImage(addGameOverButtonImage, canvas.width*8/10, canvas.height*5/10, buttonWidth*2, buttonHeight);
	uiObjects[2] = new uiObject(canvas.width*8/10, canvas.height*5/10, buttonWidth*2, buttonHeight, 
			function (){
				finalScore += levelScore + extraLevelScore;
				levelVictory = false;
				setState(2);
			});
	
	
	// button to generate rules
	//ctx.fillText("Generate", canvas.width*9/10, canvas.height*5/20);
	
	// button to skip level
	ctx.fillText("Confirm Selection", canvas.width*9/10, canvas.height*7/20);
	
	// Remove add score button.
	// button to add score 
	// ctx.fillText("Add score", canvas.width*9/10, canvas.height*9/20);
	
	// button to end game
	ctx.fillText("Game over", canvas.width*9/10, canvas.height*11/20);
			
			
	// display item selected box
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(canvas.width/2 - canvas.width/10, 0, canvas.width/5, canvas.height/7);

	if (itemSelectedByPlayer != null)
		drawSelected();
		//drawRule(); // For testing if victory/fail mechanics work
	
	ctx.fillStyle = "#000000";
	ctx.fillText("Selected", canvas.width/2, canvas.height/30);
	
	// When timer reaches zero, level ends
	if (levelTime == 0) {
		finalScore += levelScore;
		setState(2);
	}
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}

//Settings that need to run during setup for gameplay. (runs once).
function initGameSetting(){
	startLevelTimer(); // timer.js
	startLineTimer(); //timer.js 
	if (gamePaused == false){
		personArray = genPeople(lineSize, dude); // generate the personArray. (globals.js)
	}
}

