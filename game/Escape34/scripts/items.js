var hatArray = new Array();
var shirtArray = new Array();
var pantArray = new Array();
var shoeArray = new Array();
var itemArray = new Array();

//Loads items into appropriate arrays, based on Number(type) in globals.js
function loadItems() {

	for (i=1; i<=NumberHats; i++) {
		hatArray[i] = new Image();
		hatArray[i].src = ("images/items/hat_" + i + ".png");
	}
	for (i=1; i<=NumberShirts; i++) {
		shirtArray[i] = new Image();
		shirtArray[i].src = ("images/items/shirt_" + i + ".png");
	}
	for (i=1; i<=NumberPants; i++) {
		pantArray[i] = new Image();
		pantArray[i].src = ("images/items/pant_" + i + ".png");
	}
	for (i=1; i<=NumberShoes; i++) {
		shoeArray[i] = new Image();
		shoeArray[i].src = ("images/items/shoe_" + i + ".png");
	}
	for (i=1; i<=NumberItems; i++) {
		itemArray[i] = new Image();
		itemArray[i].src = ("images/items/item_" + i + ".png");
	}
}