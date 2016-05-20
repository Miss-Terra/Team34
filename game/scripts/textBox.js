var inputField; // for player name
var playerName = "";

// player name input textbox. Use external js library from James Simpson and GoldFire Studios, Inc.
// library/CanvasInput.js
// Judy: Still working on....
function drawInputField() {
	
		   	inputField = new CanvasInput({
					canvas: document.getElementById('canvas'),
					x: canvas.width / 4,
					y: canvas.height / 2,
					fontSize: 18, 
					fontColor: 'black',
					fontWeight: 'bold',
					width: canvas.width/2,
					padding: 10,
					borderWidth: 2
			});
	
			inputField.focus();
			console.log("inputField drawn");
}
function updateInputField(){
	
	inputField.x(canvas.width/4);
	inputField.y(canvas.height/2);
	inputField.width(canvas.width/2);

	playerName = inputField.value();
	inputField.render();
	console.log("inputField rendered");

}