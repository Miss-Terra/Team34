//This file generates the list of people and assigns clothing numbers.
//For the graphical side of things... Check out drawLine.js


//Generate a list of people
function genPeople(n, personImg){

	var person = [];

	for (i = 0; i < n; i++){
		person[i] = genPerson(i, personImg);
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
		x: 0,
		y: 0,
		width: 0,
		height: 0,

		//This function assigns items to the person based on the item matrix.
		//if ruleType equals 2, all the hat items are generated the same.
		setItems: function() {
			
			if (ruleType == 1) {

				if (ruleNumber == 0) {
			  	this.itemf = itemfArray[Math.floor((Math.random() * NumberItems) + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.itemf = itemfArray[Math.floor((Math.random() * NumberColors) + (numberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else
				this.itemf = itemfArray[NumberItems*(ruleColor-1) + ruleNumber];

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 2) {
				
				if (ruleNumber == 0) {
			  	this.hat = hatArray[Math.floor((Math.random() * NumberHats) + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.hat = hatArray[Math.floor((Math.random() * NumberColors) + (numberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else
				this.hat = hatArray[NumberHats*(ruleColor-1) + ruleNumber];

				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 3) {

				if (ruleNumber == 0) {
			  	this.shirt = shirtArray[Math.floor((Math.random() * NumberShirts) + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.shirt = shirtArray[Math.floor((Math.random() * NumberColors) + (numberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else
				this.shirt = shirtArray[NumberShirts*(ruleColor-1) + ruleNumber];

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 4) {
				
				if (ruleNumber == 0) {
			  	this.pants = pantArray[Math.floor((Math.random() * NumberPants) + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.pants = pantArray[Math.floor((Math.random() * NumberColors) + (numberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else
				this.pants = pantArray[NumberPants*(ruleColor-1) + ruleNumber];

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (ruleType == 5) {
				
				if (ruleNumber == 0) {
			  	this.shoes = shoeArray[Math.floor((Math.random() * NumberShoes) + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.shoes = shoeArray[Math.floor((Math.random() * NumberColors) + (numberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else
				this.shoes = shoeArray[NumberShoes*(ruleColor-1) + ruleNumber];

				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
			}
			else if (ruleType == 6) {
				
  			if (ruleNumber == 0) {
			  	this.itemb = itembArray[Math.floor((Math.random() * NumberItems) + ruleColor)]; // Item will be a specific color
				} else if (ruleColor == 0) {
			  	this.itemb = itembArray[Math.floor((Math.random() * NumberColors) + (numberColors* (ruleNumber -1)))]; // Item will be a specific type
				} else
	  		this.itemb = itembArray[NumberItems*(ruleColor-1) + ruleNumber];
	
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
			
			/*this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
			this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
			this.item1 = itemfArray[Math.floor((Math.random() * 9) + 1)];
			this.item2 = itembArray[Math.floor((Math.random() * 9) + 1)];
			this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
			this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];*/

//			this.hat = hatArray[Math.floor((Math.random() * 5) + 1)];
//			this.shirt = shirtArray[Math.floor((Math.random() * 4) + 1)];
//			this.item1 = itemfArray[Math.floor((Math.random() * 3) + 1)];
//			this.item2 = itembArray[Math.floor((Math.random() * 3) + 1)];
//			this.pants = pantArray[Math.floor((Math.random() * 4) + 1)];
//			this.shoes = shoeArray[Math.floor((Math.random() * 3) + 1)];
			this.image = personImg;
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
