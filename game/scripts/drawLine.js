


function drawLine(personArray){

	var personWidth = canvas.width/16;
	var personHeight = canvas.height/5.5;

	var lineXStart = (personWidth / 4);
	var lineYStart = canvas.height - personHeight - (personHeight / 4);
	var lineSpacing = personWidth + personWidth / 8 ;

	//This displays the line of people and their clothes.
	for (var i = 0; i < maxPeopleInLine; i++){
		personArray[i].setSize(personWidth, personHeight); // assign size variables to each person.
		personArray[i].setPosition(lineXStart + (i*(lineSpacing)), lineYStart); // assign x and y variables to each person.

		//Always within canvas x borders
		if (personArray[i].x > canvas.width - personArray[i].width || personArray[i].x < 0){
			
		}else{

			ctx.drawImage(personArray[i].image, personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height);
			// Draws uiObjects for people.
		 	uiPeople[i] = new uiObject(personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height, 
				function (){
					console.log("Person: " + this.person.number + " clicked.");
					this.person.debugPerson(); // runs console commands to display items.
				}, personArray[i]);


		 	//drawItems.js
		 	//Draw the items for each person
		 	drawItems(personArray[i]);
		}
	}
}