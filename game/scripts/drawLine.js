

//Draw the line of people.
function drawLine(){

	var personWidth = canvas.width/16;
	var personHeight = canvas.height/5.5;

	var lineXStart = canvas.width * 0.85;
	var lineYStart = canvas.height * 0.675;
	var lineSpacing = personWidth + personWidth / 8 ;

	//This displays the line of people and their clothes.
	//maxPeopleInLine is defined in levels.js
	for (var i = 0; i < personArray.length; i++){

		//maxPeopleInLine in levels.js
		//Make sure only a specific number people can show at one time.
		if (i < maxPeopleInLine && personArray.length != 0){
			personArray[i].setSize(personWidth, personHeight); // assign size variables to each person.
			personArray[i].setPosition(lineXStart - (i*(lineSpacing)), lineYStart); // assign x and y variables to each person.

			//Always within canvas x borders
			if (personArray[i].x > canvas.width - personArray[i].width || personArray[i].x < 0){
				
			}else{

				ctx.drawImage(personArray[i].image, personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height);
				// Draws uiObjects for people.
			 	uiPeople[i] = new uiObject(personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height, 
					function (){
						console.log("Person: " + this.person.number + " clicked.");
						gamePaused = true; console.log(gamePaused); // unpause game
						this.person.debugPerson(); // runs console commands to display items.	
						setState(8);				
					}, personArray[i]);


			 	//drawItems.js
			 	//Draw the items for person
			 	drawItems(personArray[i]);
			}
		}
	}
}

//Shift everyone forward in the line, 1 space.
function shiftLine(){
	var newArray = [];
	uiPeople = [];
	for (var i = 1; i < personArray.length; i++){
		newArray[i-1] = personArray[i];
	}
	personArray = newArray;
}