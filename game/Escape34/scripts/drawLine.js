
var personSize = 50;
var lineXStart = 50;
var lineYStart = canvas.height - personSize;
var lineSpacing = 50;


function drawLine(personArray){

	var positionInLine = [];


	for (var i = 0; i < maxPeopleInLine; i++){

		var xPos = lineXStart + (i*lineSpacing);
		var yPos = lineYStart;

		//Always within canvas x borders
		if (xPos > canvas.width - personSize || xPos < 0){
			
		}else{

			ctx.drawImage(personArray[i].image, xPos, yPos, personSize, personSize);
	 	
		//ctx.drawImage(hatArray[1], 100, 130); //test drawing an image from array

		}
}
}