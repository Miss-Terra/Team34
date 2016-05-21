var itemfArray = new Array();
var hatArray = new Array();
var shirtArray = new Array();
var pantArray = new Array();
var shoeArray = new Array();
var itembArray = new Array();
var newItemArray = new Array();

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
	///////////////////////newItemArray//////////////////////
	for (g=0; g<5; g++) {

		for (f=1; f<=NumberColors; f++) {
			g=0;
			for (i=1; i<=NumberItems; i++) {
				newItemArray[g+(((f-1)*NumberItems) + i)] = new Image();
				newItemArray[g+((f-1)*NumberItems) + i].src = ("images/items/itemf/itemf_" + i + f + ".png");
			} 
			g+= NumberColors*NumberItems;
			for (i=1; i<=NumberHats; i++) {
				newItemArray[g+((f-1)*NumberHats) + i] = new Image();
				newItemArray[g+((f-1)*NumberHats) + i].src = ("images/items/hat/hat_" + i + f + ".png");
			} 
			g+= NumberColors*NumberHats;
			for (i=1; i<=NumberShirts; i++) {
				newItemArray[g+((f-1)*NumberShirts) + i] = new Image();
				newItemArray[g+((f-1)*NumberShirts) + i].src = ("images/items/shirt/shirt_" + i + f + ".png");
			} 
			g+= NumberColors*NumberShirts;
			for (i=1; i<=NumberPants; i++) {
				newItemArray[g+((f-1)*NumberPants) + i] = new Image();
				newItemArray[g+((f-1)*NumberPants) + i].src = ("images/items/pant/pant_" + i + f + ".png");
			}
			g+= NumberColors*NumberPants;
			for (i=1; i<=NumberShoes; i++) {
				newItemArray[g+((f-1)*NumberShoes) + i] = new Image();
				newItemArray[g+((f-1)*NumberShoes) + i].src = ("images/items/shoe/shoe_" + i + f + ".png");
			}
			g+= NumberColors*NumberShoes;
			for (i=1; i<=NumberItems; i++) {
				newItemArray[g+((f-1)*NumberItems) + i] = new Image();
				newItemArray[g+((f-1)*NumberItems) + i].src = ("images/items/itemb/itemb_" + i + f + ".png");
			}
		}
	}
	//////////////////////////////////
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
	},
	drawItmIndex: function(index, x, y) {
		ctx.drawImage(newItemArray[index], x, y);
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



//Begin new code

//Generate n item objects and return an array of size n.
function genItems(n) {
	var genItemArray[];
	
	for (i=0; i<n; i++) {
		genItemArray[i] = new item();
	}
	return genItemArray;
}

////////New item Object
var item = {
	//CONSTANTS
	ITEMWIDTH:62,
	ITEMHEIGHT:140,
	
	//Attributes (0 indicates that nothing was assigned!)
	
	// Item type 1-6 is itemf/hat/shirt/pants/shoes/itemb
	type:0,
	// Item numb is variation of type
	numb:0,
	// Item color is the color of item
	color:0,
	imgindex:0, //Each item has a pointer to an image file
	imgsrc:null, 
	
	//Method to draw an item
	draw: function() {
		ctx.drawImage(newItemArray[this.imgsrc], x, y, ITEMWIDTH, ITEMHEIGHT);
	},
	compareColor: function(item) {
		return (this.color == item.color); 
	},
	compareNumber: function(item) {
		return (this.numb == item.numb); 
	},
	setItemAttr: function(t,n,c) {
		this.type = t;
		this.numb = n;
		this.color = c;
	},
	setIndex: function() {
		var temp =0;
		
		switch (this.type) {
			case 6:
				temp+= (NumberItems*NumberColors);
			case 5:
				temp+= (NumberShoes*NumberColors);
			case 4:
				temp+= (NumberPants*NumberColors);
			case 3:
				temp+= (NumberShirts*NumberColors);
			case 2:
				temp+= (NumberItems*NumberColors);
			case 1:
				break;
				
				temp+=((this.numb-1)*NumberColors + this.color) ;
				this.imgindex = temp;
		}
		
//		this.imgindex = ((t-1) * NumberColors*fx) + ((n-1) * NumberColors) + (c);
		//where fx is simply the number of Variations (numb) assuming ALL items
		// have the same number of variations
	}
};


	
}

	//var x7 = function(){};