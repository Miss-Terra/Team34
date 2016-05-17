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
		//For example, 2 for hat might be a blue sillyhat.
		//Or 2 for shirt could be a red t-shirt.
		setItems: function() {
			
			if (rule[0] == 1) {
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[NumberItems*(rule[2]-1) + rule[1]];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (rule[0] == 2) {
				this.hat = hatArray[NumberHats*(rule[2]-1) + rule[1]];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (rule[0] == 3) {
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[NumberShirts*(rule[2]-1) + rule[1]];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (rule[0] == 4) {
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[NumberPants*(rule[2]-1) + rule[1]];
				this.shoes = shoeArray[Math.floor((Math.random() * 9) + 1)];
			}
			else if (rule[0] == 5) {
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[Math.floor((Math.random() * 9) + 1)];
				this.pants = pantArray[Math.floor((Math.random() * 12) + 1)];
				this.shoes = shoeArray[NumberShoes*(rule[2]-1) + rule[1]];
			}
			else if (rule[0] == 6) {
				this.hat = hatArray[Math.floor((Math.random() * 15) + 1)];
				this.shirt = shirtArray[Math.floor((Math.random() * 12) + 1)];
				this.itemf = itemfArray[Math.floor((Math.random() * 9) + 1)];
				this.itemb = itembArray[NumberItems*(rule[2]-1) + rule[1]];
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
