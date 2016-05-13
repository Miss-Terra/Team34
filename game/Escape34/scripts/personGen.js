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
		item1: 0,
		item2: 0,
		pants: 0,
		shoes: 0,
		image: 0,
		number: 0,

		//This function assigns items to the person based on the item matrix.
		//For example, 2 for hat might be a blue sillyhat.
		//Or 2 for shirt could be a red t-shirt.
		setItems: function() {
			this.hat = hatArray[Math.floor((Math.random() * 3) + 1)];
			this.shirt = shirtArray[Math.floor((Math.random() * 3) + 1)];
			this.item1 = itemArray[Math.floor((Math.random() * 3) + 1)];
			this.item2 = itemArray[Math.floor((Math.random() * 3) + 1)];
			this.pants = pantArray[Math.floor((Math.random() * 3) + 1)];
			this.shoes = shoeArray[Math.floor((Math.random() * 3) + 1)];
			this.image = personImg;
		},
		setNumber: function(n){
			this.number = n;
		},

		debugPerson: function() {
			console.log("Hat: " + this.hat.src);
			console.log("Shirt: " + this.shirt.src);
			console.log("Item1: " + this.item1.src);
			console.log("Item2: " + this.item2.src);
			console.log("Pants: " + this.pants.src);
			console.log("Shoes: " + this.shoes.src);
		}

	};
	person.setNumber(num);
	person.setItems();
	
	return person;
}
