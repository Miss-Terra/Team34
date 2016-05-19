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

// Item interface. Contains methods for reading and drawing objects.
var Itm = {
	
	//Draw item of type t, number n, and color c
	drawItmtnc: function(t, n, c, x, y, wth, hgt) {

		var w = canvas.width/16; //default sizes
		var h = canvas.height/5.5;
    if (typeof wth != "undefined")
			w = wth;
    if (typeof hgt != "undefined")
			h = hgt;
		//  console.log("inputs=" + t + n + c + w + h);
			
		  if (t==1) {
				ctx.drawImage(itemfArray[((c-1)*NumberItems) + n], x, y, w, h);
			} else if (t==2) {
				ctx.drawImage(hatArray[((c-1)*NumberHats) + n], x, y, w, h);
			} else if (t==3) {
				ctx.drawImage(shirtArray[((c-1)*NumberShirts) + n], x, y, w, h);
			} else if (t==4) {
				ctx.drawImage(pantArray[((c-1)*NumberPants) + n], x, y, w, h);
			} else if (t==5) {
				ctx.drawImage(shoeArray[((c-1)*NumberShoes) + n], x, y, w, h);
			} else if (t==6) {
				ctx.drawImage(itembArray[((c-1)*NumberItems) + n], x, y, w, h);	
			} else {
				
			}
	}
}


//Itm.drawItmtnc(1,1,2,50,50); itemf
//Itm.drawItmtnc(2,1,2,50,50); hat
//Itm.drawItmtnc(3,1,2,50,50); shirt
//Itm.drawItmtnc(4,1,2,50,50); pant
//Itm.drawItmtnc(5,1,2,50,50); shoe
//Itm.drawItmtnc(6,1,2,50,50); itemb

//function(Itmtype, Itmnumber, Itmcolor)
//	this.type = Itmtype;
//	this.number = Itmnumber;
//	this.color = Itmcolor;
