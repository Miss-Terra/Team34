var itemfArray = new Array();
var hatArray = new Array();
var shirtArray = new Array();
var pantArray = new Array();
var shoeArray = new Array();
var itembArray = new Array();

//Loads items into appropriate arrays, based on Number(type) in globals.js
function loadItems() {

	for (f=1; f<=NumberColors; f++) {
		for (i=1; i<=NumberItems; i++) {
			itemfArray[((f-1)*NumberItems) + i] = new Image();
			itemfArray[((f-1)*NumberItems) + i].src = ("images/items/itemf/itemf_" + i + f + ".png");
		}
		for (i=1; i<=NumberHats; i++) {
			hatArray[((f-1)*NumberHats) + i] = new Image();
			hatArray[((f-1)*NumberHats) + i].src = ("images/items/hat/hat_" + i + f + ".png");
		}
		for (i=1; i<=NumberShirts; i++) {
			shirtArray[((f-1)*NumberShirts) + i] = new Image();
			shirtArray[((f-1)*NumberShirts) + i].src = ("images/items/shirt/shirt_" + i + f + ".png");
		}
		for (i=1; i<=NumberPants; i++) {
			pantArray[((f-1)*NumberPants) + i] = new Image();
			pantArray[((f-1)*NumberPants) + i].src = ("images/items/pant/pant_" + i + f + ".png");
		}
		for (i=1; i<=NumberShoes; i++) {
			shoeArray[((f-1)*NumberShoes) + i] = new Image();
			shoeArray[((f-1)*NumberShoes) + i].src = ("images/items/shoe/shoe_" + i + f + ".png");
		}
		for (i=1; i<=NumberItems; i++) {
			itembArray[((f-1)*NumberItems) + i] = new Image();
			itembArray[((f-1)*NumberItems) + i].src = ("images/items/itemb/itemb_" + i + f + ".png");
		}
	}
}
loadItems();