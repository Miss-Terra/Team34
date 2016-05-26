//This file generates the list of people and assigns clothing numbers.
//For the graphical side of things... Check out drawLine.js

//Generate a list of people
function genPeople(n, personImg){

	correctPerson = Math.floor(1+ Math.random() * lineSize);
	var person = [];
//	person[correctPerson] = genPerson[correctPerson, personImg];
	
	for (i = 0; i < n; i++){
//		if (i!=correctPerson) {
		person[i] = genPerson(i, personImg);
//		}
	}
	return person;
}

//Create and return a person.
function genPerson(num, personImg){
	var person = {
		hat: 0,
		shirt: 0,
		itemf: 0,
		itemb: 0,
		pants: 0,
		shoes: 0,
		image: 0,
		number: 0,
		face: 0,
		x: 0,
		y: 0,
		width: 0,
		height: 0,

		//This function assigns items to the person based on the item matrix.
		//if ruleType equals 2, all the hat items are generated the same.
		setItems: function() {
			
		if (ruleType == 1) {

				if (ruleNumber == 0) {
			  	this.itemf = itemfArray[Math.floor(1+(Math.random() * NumberItems) * NumberColors + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.itemf = itemfArray[Math.floor(1+(Math.random() * NumberColors) + (NumberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else {
					this.itemf = itemfArray[NumberItems*(ruleColor-1) + ruleNumber];
					
//					if (this.number == correctPerson) {
//						//
//					} else {
//							this.itemf = itemfArray[NumberItems*(ruleColor-1) + ruleNumber];
////						while (this.itemf === person[correctPerson].itemf) {
////							this.itemf = itemfArray[NumberItems*(ruleColor-1) + ruleNumber];
////						}
//					}
				}

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 2) {
				if (ruleNumber == 0) { //specific color but any type (1,4,7,10,13)
			  	this.hat = hatArray[Math.floor(1+(Math.random() * NumberHats) * NumberColors + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
					this.hat = hatArray[Math.floor(1+(Math.random() * NumberColors) + (NumberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else {
					this.hat = hatArray[NumberItems*(ruleColor-1) + ruleNumber];
					
//					if (this.number == correctPerson) {
//						//
//					} else {
//							this.hat = hatArray[NumberItems*(ruleColor-1) + ruleNumber];
////						while (this.hat === person[correctPerson].hat) {
////							this.hat = hatArray[NumberItems*(ruleColor-1) + ruleNumber];
////						}
//					}
				}

				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 3) {

				if (ruleNumber == 0) {
			  	this.shirt = shirtArray[Math.floor(1+(Math.random() * NumberShirts) * NumberColors + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.shirt = shirtArray[Math.floor(1+(Math.random() * NumberColors) + (NumberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else {
					this.shirt = shirtArray[NumberItems*(ruleColor-1) + ruleNumber];
					
//					if (this.number == correctPerson) {
//						//
//					} else {
//							this.shirt = shirtArray[NumberItems*(ruleColor-1) + ruleNumber];
////						while (this.shirt === person[correctPerson].shirt) {
////							this.shirt = shirtArray[NumberItems*(ruleColor-1) + ruleNumber];
////						}
//					}
				}

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 4) {
				
				if (ruleNumber == 0) {
					
			  	this.pants = pantArray[Math.floor(1+(Math.random() * NumberPants) * NumberColors + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.pants = pantArray[Math.floor(1+(Math.random() * NumberColors) + (NumberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else {
					this.pants = pantArray[NumberItems*(ruleColor-1) + ruleNumber];
					
					if (this.number == correctPerson) {
						//
//					} else {
//							this.pants = pantArray[NumberItems*(ruleColor-1) + ruleNumber];
////						while (this.pants === person[correctPerson].pants) {
////							this.pants = pantArray[NumberItems*(ruleColor-1) + ruleNumber];
////						}
//					}
				}

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 5) {
				
				if (ruleNumber == 0) {

			  	this.shoes = shoeArray[Math.floor(1+(Math.random() * NumberShoes) * NumberColors + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.shoes = shoeArray[Math.floor(1+(Math.random() * NumberColors) + (NumberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else {
					this.shoes = shoeArray[NumberItems*(ruleColor-1) + ruleNumber];
					
					if (this.number == correctPerson) {
						//
					} else {
//							this.shoes = shoeArray[NumberItems*(ruleColor-1) + ruleNumber];
////						while (this.shoes === person[correctPerson].shoes) {
////							this.shoes = shoesArray[NumberItems*(ruleColor-1) + ruleNumber];
////						}
//					}
				}

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
			}
			else if (ruleType == 6) {
				
  			if (ruleNumber == 0) {

			  	this.itemb = itembArray[Math.floor(1+(Math.random() * NumberItems) * NumberColors + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.itemb = itembArray[Math.floor(1+(Math.random() * NumberColors) + (NumberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else {
					this.itemb = itembArray[NumberItems*(ruleColor-1) + ruleNumber];
					
					if (this.number == correctPerson) {
						//
//					} else {
//							this.itemb = itembArray[NumberItems*(ruleColor-1) + ruleNumber];
////						while (this.itemb === person[correctPerson].itemb) {
////							this.itemb = itembArray[NumberItems*(ruleColor-1) + ruleNumber];
////						}
					}
				}
	
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else {
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			
			this.image = personImg;
			this.face = faceArray[Math.floor(1+ Math.random() * NumberFaces)];
		},
		setNumber: function(n){
			this.number = n;
		},

		debugPerson: function() {
			console.log("Hat: " + this.hat.src);
			console.log("Shirt: " + this.shirt.src);
			console.log("Item1: " + this.itemf.src);
			console.log("Item2: " + this.itemb.src);
			console.log("Pants: " + this.pants.src);
			console.log("Shoes: " + this.shoes.src);
		},

		setSize: function(w, h){
			this.width = w;
			this.height = h;
		},
		setPosition: function(xPos, yPos){
			this.x = xPos;
			this.y = yPos;
		}

	};
	person.setNumber(num);
	person.setItems();
	
	return person;
}
