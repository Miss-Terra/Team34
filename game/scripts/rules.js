
var level = 1;
var person = 1;
var colors;
var items;
var rule;
var color = [];
var item = [];
var randomRule1, randomRule2;
var operators;
var join;

function drawRule() {
	// display rule in top box
	ctx.fillText(rule, canvas.width/2, canvas.height/20);
}	

function generateRule() {			

	rule = "";

	if (currentLevel <= 5) {
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
	}
}

function loadRules() {
		
	var buttonWidth = canvas.width/10;
	var buttonHeight = canvas.height/10;	

	// button to generate rules
	ctx.drawImage(generateButtonImage, canvas.width*8/10, canvas.height*2/10, buttonWidth*2, buttonHeight);
	uiObjects[1] = new uiObject(canvas.width*8/10, canvas.height*2/10, buttonWidth*2, buttonHeight, 
			function (){
				generateRule();
			});
			
	// button to skip level (just for testing)
	ctx.drawImage(victoryButtonImage, canvas.width*8/10, canvas.height*3/10, buttonWidth*2, buttonHeight);
	uiObjects[2] = new uiObject(canvas.width*8/10, canvas.height*3/10, buttonWidth*2, buttonHeight, 
			function (){
				finalScore += levelScore;
				setState(2);
			});
			
	// button to add scores (just for testing)
	ctx.drawImage(addscoreButtonImage, canvas.width*8/10, canvas.height*4/10, buttonWidth*2, buttonHeight);
	uiObjects[3] = new uiObject(canvas.width*8/10, canvas.height*4/10, buttonWidth*2, buttonHeight, 
			function (){
				levelScore += 5;
			});
			
	// button to end game (just for testing)
	ctx.drawImage(addGameOverButtonImage, canvas.width*8/10, canvas.height*5/10, buttonWidth*2, buttonHeight);
	uiObjects[4] = new uiObject(canvas.width*8/10, canvas.height*5/10, buttonWidth*2, buttonHeight, 
			function (){
				finalScore += levelScore;
				levelVictory = false;
				setState(2);
			});
	
	
	// button to generate rules
	ctx.fillText("Generate", canvas.width*9/10, canvas.height*5/20);
	
	// button to skip level
	ctx.fillText("Skip level", canvas.width*9/10, canvas.height*7/20);
	
	// button to add score 
	ctx.fillText("Add score", canvas.width*9/10, canvas.height*9/20);
	
	// button to end game
	ctx.fillText("Game over", canvas.width*9/10, canvas.height*11/20);
			
			
	// display rule box
	if (currentLevel <= 10) {
		ctx.fillStyle = "#33FFFF";
		ctx.fillRect(canvas.width/2 - canvas.width/10, 0, canvas.width/5, canvas.height/10);
	}
	else {
		ctx.fillStyle = "#33FFFF";
		ctx.fillRect(canvas.width/2-canvas.width/5, 0, canvas.width*2/5, canvas.height/10);
	}

	ctx.fillStyle = "#000000";
	
	if (rule != null){
		drawRule();
	}
	
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


