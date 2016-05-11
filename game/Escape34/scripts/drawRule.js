
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

	ctx.fillStyle = "#FFFFFF";
	if (level <= 10) { // draws a square for a rule
		ctx.fillRect(canvas.width/2, 0, 75, 75);
				
		ctx.moveTo(canvas.width/2, 0);
		ctx.lineTo(canvas.width/2 + 75, 0);
		ctx.stroke();
		ctx.moveTo(canvas.width/2, 75);
		ctx.lineTo(canvas.width/2 + 75, 75);
		ctx.stroke();
		ctx.moveTo(canvas.width/2, 0);
		ctx.lineTo(canvas.width/2, 75);
		ctx.stroke();
		ctx.moveTo(canvas.width/2 + 75, 0);
		ctx.lineTo(canvas.width/2 + 75, 75);
		ctx.stroke();
				
		generateRule();	
	}
	else { // draws three squares for two rules and an operation
		ctx.fillRect(canvas.width/2, 0, 225, 75);
				
		ctx.moveTo(canvas.width/2, 0);
		ctx.lineTo(canvas.width/2 + 225, 0);
		ctx.stroke();
		ctx.moveTo(canvas.width/2, 75);
		ctx.lineTo(canvas.width/2 + 225, 75);
		ctx.stroke();
		ctx.moveTo(canvas.width/2, 0);
		ctx.lineTo(canvas.width/2, 75);
		ctx.stroke();
		ctx.moveTo(canvas.width/2 + 75, 0);
		ctx.lineTo(canvas.width/2 + 75, 75);
		ctx.stroke();
		ctx.moveTo(canvas.width/2 + 150, 0);
		ctx.lineTo(canvas.width/2 + 150, 75);
		ctx.stroke();
		ctx.moveTo(canvas.width/2 + 225, 0);
		ctx.lineTo(canvas.width/2 + 225, 75);
		ctx.stroke();
		
		generateRule();
	}
	
	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(rule, canvas.width/2, 50); 
}
	

function generateRule() {			
			
	//rule = "Level " + level + ", Person " + person + "<br />";
	rule = "";

	if (level <= 5) {
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
	else if (level <= 10) {
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
	else if (level <= 15) {
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
	if (level <= 10) {
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

	// document.getElementById("demo").innerHTML = rule;
				
	
	
	// assuming each level has 5 people 
	/*person++;
	if (person > 5) {
		level++;
		person = 1;
	}*/

}