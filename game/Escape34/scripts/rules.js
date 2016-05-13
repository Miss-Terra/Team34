
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

	ctx.fillText(rule, canvas.width/2, 50);
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
	ctx.drawImage(generateButtonImage, canvas.width/2-75, 75, buttonWidth*2, buttonHeight);
	uiObjects[1] = new uiObject(canvas.width/2-75, 75, buttonWidth*2, buttonHeight, 
			function (){
				generateRule();
			});
			
	// button to skip level (just for testing)
	ctx.drawImage(victoryButtonImage, canvas.width/2-75, 150, buttonWidth*2, buttonHeight);
	uiObjects[2] = new uiObject(canvas.width/2-75, 150, buttonWidth*2, buttonHeight, 
			function (){
				setState(2);
			});
			
	// button to add scores (just for testing)
	ctx.drawImage(addscoreButtonImage, canvas.width/2-75, 225, buttonWidth*2, buttonHeight);
	uiObjects[3] = new uiObject(canvas.width/2-75, 225, buttonWidth*2, buttonHeight, 
			function (){
				levelScore += 5;
			});
			
			
	// display rule box
	if (currentLevel <= 10) {
		ctx.fillStyle = "#33FFFF";
		ctx.fillRect(canvas.width/2-75, 0, 150, 75);
	}
	else {
		ctx.fillStyle = "#33FFFF";
		ctx.fillRect(canvas.width/2-150, 0, 300, 75);
	}
	
	/*	
	// display random rule every 5 seconds
	if (levelTime % 5 == 0)
		generateRule();
			
	if (levelTime % 5 != 0)
		drawRule();*/
	
	ctx.fillStyle = "#000000";
	
	if (rule != null)
		drawRule();
	
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}

//Settings that need to run during setup for gameplay. (runs once).
function initGameSetting(){
	startLevelTimer();
}


