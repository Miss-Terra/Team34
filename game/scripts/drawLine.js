
	
//Draw the line of people.
function drawLine(){


	var personWidth = canvas.width/16;
	var personHeight = canvas.height/5.5;

	var lineXStart = canvas.width * 0.85;
	var lineYStart = canvas.height * 0.675;
	var lineSpacingX = personWidth + personWidth / 8 ;
	var lineSpacingY = personHeight + personHeight / 6 ;
	var direction = "west";
	var xMove = 0;
	var yMove = 0;
	var counter = 0;

	//This displays the line of people and their clothes.
	//maxPeopleInLine is defined in levels.js
	for (var i = 0; i < personArray.length; i++){

		//maxPeopleInLine in levels.js
		//Make sure only a specific number people can show at one time.
		if (i < maxPeopleInLine && personArray.length != 0 && i < 22){
			personArray[i].setSize(personWidth, personHeight); // assign size variables to each person.
			
			if (i == 12){direction = "north"; counter = 1; lineXStart = personArray[i-1].x;}
			else if (i == 14){direction = "east"; counter = 1; lineYStart = personArray[i-1].y;}
			else if (i == 21){direction = "north"; counter = 1; lineXStart = personArray[i-1].x;}



			if (direction == "west"){
				xMove = -1;
				yMove = 0;
			}else if (direction == "east"){
				xMove = 1;
				yMove = 0;
			}else if (direction == "north"){
				yMove = -1;
				xMove = 0;
			}else if (direction == "south"){
				yMove = 1;
				xMove = 0;
			}



			personArray[i].setPosition(lineXStart + ((counter*xMove)*(lineSpacingX)), lineYStart + ((counter*yMove)*(lineSpacingY))); // assign x and y variables to each person.
			


				ctx.drawImage(personArray[i].image, personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height);
				// Draws uiObjects for people.
			 	uiPeople[i] = new uiObject(personArray[i].x, personArray[i].y, personArray[i].width, personArray[i].height, 
					function (){
						console.log("Person: " + this.person.number + " clicked.");
						gamePaused = true; console.log(gamePaused); // unpause game
						this.person.debugPerson(); // runs console commands to display items.	
						selectionPerson = this.person; // Variable used in screenSelect.js
						setState(8);				
					}, personArray[i]);


			 	//drawItems.js
			 	//Draw the items for person
			 	drawItems(personArray[i], false);
			
		}
		counter++;
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