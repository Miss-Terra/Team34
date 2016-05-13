


function drawLine(personArray){

	var personWidth = canvas.width/8;
	var personHeight = canvas.height/5.5;
	var lineXStart = (personWidth / 4);
	var lineYStart = canvas.height - personHeight - (personHeight / 4);
	var lineSpacing = personWidth + personWidth / 8 ;

	for (var i = 0; i < maxPeopleInLine; i++){

		var xPos = lineXStart + (i*(lineSpacing));
		var yPos = lineYStart;


		//Always within canvas x borders
		if (xPos > canvas.width - personWidth || xPos < 0){
			
		}else{

			ctx.drawImage(personArray[i].image, xPos, yPos, personWidth, personHeight);
	 		uiPeople[i] = new uiObject(xPos, yPos, personWidth, personHeight, 
			function (){
				console.log("person clicked.");
			});

		//	xPos = xPos + personWidth/8;
		yPos = yPos + personHeight/4;		

			ctx.drawImage(personArray[i].shirt, xPos, yPos, personWidth, personHeight * 0.3); //test drawing an image from array
		//ctx.drawImage(hatArray[1], 100, 130); //test drawing an image from array

		}
	}
}