//This file generates the list of people and assigns clothing numbers.
//For the graphical side of things... Check out drawLine.js


//Generate a list of people
function genPeople(n){

	var person = [];

	for (i = 0; i < n; i++){
		person[i] = genPerson();
	}
	return person;
}

//Create and return a person.
function genPerson(){
	var person = {
		hat: 0,
		shirt: 0,
		item1: 0,
		item2: 0,
		pants: 0,
		shoes: 0,

		//This function assigns items to the person based on the item matrix.
		//For example, 2 for hat might be a blue sillyhat.
		//Or 2 for shirt could be a red t-shirt.
		setItems: function() {
			this.hat = 2;
			this.shirt = 2;
			this.item1 = 2;
			this.item2 = 2;
			this.pants = 2;
			this.shoes = 2;
		}
	};
	person.setItems();
	return person;
}
