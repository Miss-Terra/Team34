//This file generates the list of people and assigns clothing numbers.
//For the graphical side of things... Check out drawLine.js


//Generate a list of people
function genPeople(n, personImg){

	var person = [];

	for (i = 0; i < n; i++){
		person[i] = genPerson(personImg);
	}
	return person;
}

//Create and return a person.
function genPerson(personImg){
	var person = {
		hat: 0,
		shirt: 0,
		item1: 0,
		item2: 0,
		pants: 0,
		shoes: 0,
		image: 0,

		//This function assigns items to the person based on the item matrix.
		//For example, 2 for hat might be a blue sillyhat.
		//Or 2 for shirt could be a red t-shirt.
		setItems: function() {
			this.hat = hatArray[2];
			this.shirt = shirtArray[2];
			this.item1 = itemArray[2];
			this.item2 = itemArray[2];
			this.pants = pantArray[2];
			this.shoes = shoeArray[2];
			this.image = personImg;
		}
	};
	person.setItems();
	return person;
}
