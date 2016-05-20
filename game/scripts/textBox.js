var inputField; // for player name
var playerName = "";

// player name input textbox. Use external js library from James Simpson and GoldFire Studios, Inc.
// thirdParty/CanvasInput.js
function drawInputField() {
	
		   	inputField = new CanvasInput({
					canvas: document.getElementById('canvas'),
					x:  canvas.width * 7 / 10,
					y: canvas.height * 6 / 11,
					fontSize: 18, 
					fontColor: 'black',
					fontWeight: 'bold',
					width: 100,
					padding: 10,
					borderWidth: 2
			});
	
			inputField.focus();
			console.log("inputField drawn");
}
function updateInputField(){
	playerName = inputField.value();
	inputField.render();
	console.log("inputField rendered");

}