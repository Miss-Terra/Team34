
var personSize = 50;
var lineXStart = 50;
var lineYStart = 50;
var lineSpacing = 50;


function drawLine(personImg){

	var positionInLine = [];


	for (var i = 0; i < lineSize; i++){

		var xPos = lineXStart + (i*lineSpacing);
		var yPos = lineYStart;

		//Always within canvas x borders
		if (xPos > canvas.width - personSize || xPos < 0){
			
		}else{

			ctx.drawImage(personImg, xPos, yPos, personSize, personSize);
	
		}
}
}