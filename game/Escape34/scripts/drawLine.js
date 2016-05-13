


function drawLine(personArray){

	var personWidth = canvas.width/16;
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
				console.log("Person: " + this.person.number + " clicked.");
				this.person.debugPerson(); // runs console commands to display items.
			}, personArray[i]);

		//	xPos = xPos + personWidth/8;
		yPos = yPos + personHeight/4;		
		//draw shirt
		ctx.drawImage(personArray[i].shirt, xPos, yPos, personWidth, personHeight * 0.3); //test drawing an image from array
		
		yPos = yPos - personHeight/2.1;

		ctx.drawImage(personArray[i].hat, xPos, yPos, personWidth, personHeight * 0.3); //test drawing an image from array
		
		yPos = yPos + personHeight * 0.77;
		xPos = xPos + personWidth * 0.05;

		ctx.drawImage(personArray[i].pants, xPos, yPos, personWidth * 0.90, personHeight * 0.4); //test drawing an image from array
		
	//	yPos = yPos + personHeight * 0.77;
	//	ctx.drawImage(personArray[i].shoes, xPos, yPos, personWidth * 0.73, personHeight * 0.3); //test drawing an image from array
		
		}
	}
}