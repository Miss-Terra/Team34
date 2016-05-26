//Draws all the items on the person.
// selectable var is a boolean to determine if these clothes are selectable. (Item select screen).

function drawItems(person, selectable){

	drawFace(person, selectable);
	drawFrontItem(person, selectable);
	drawShirt(person, selectable);
	drawHat(person, selectable);
	drawShoes(person, selectable);
	drawPants(person, selectable);
	drawBackItem(person, selectable);
		
}

//Draw face on character
function drawFace(person, selectable){
	
	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;
	
	ctx.drawImage(person.face, x, y, w, h);	
}

//Draw the front item (behind the character)
function drawFrontItem(person, selectable){
	
	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;

	if (selectable){
		ctx.drawImage(person.itemf, x+person.width*3/16, y, w, h);	
		x += person.width*13/16;
		y += person.height*9/16;
		w = person.width*6/16;
		h = person.height*7/16;
		
		drawItemSelection(x,y,w,h,"itemFront"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	else {
  	ctx.drawImage(person.itemf, x, y, w, h);		
	}
}

//Draw on the shirt
function drawShirt(person, selectable){

	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;
	
	ctx.drawImage(person.shirt, x, y, w, h);	

	if (selectable){
		x += person.width*1/8;
		y += person.height*5/16;
		w = person.width*3/4;
		h = person.height/4;

		drawItemSelection(x,y,w,h,"shirt"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	
}

//Draw on the hat
function drawHat(person, selectable){

	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;

	ctx.drawImage(person.hat, x, y, w, h);	

	//Bellow only used during item selection
	if (selectable){
		x += person.width*1/8;
		y = person.y;
		w = person.width*3/4;
		h = person.height*5/16;

		drawItemSelection(x,y,w,h,"hat"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	
}

//Draw on the pants
function drawPants(person, selectable){

	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;
	
	ctx.drawImage(person.pants, x, y, w, h);

	//Bellow only used during item selection
	if (selectable){
		x += person.width*3/16;
		y += person.height*9/16;
		w = person.width*10/16;
		h = person.height*5/16;
		drawItemSelection(x,y,w,h,"pants"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	

}

//Draw on the shoes
function drawShoes(person, selectable){

	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;
	
	ctx.drawImage(person.shoes, x, y, w, h);	

	//Below only used during item selection
	if (selectable){
		x += person.width*3/16;
		y += person.height*14/16;
		w = person.width*10/16;
		h = person.height*2/16;		
		drawItemSelection(x,y,w,h,"shoes"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}
	
}
	
	//Draw the back item (in front of the character)
function drawBackItem(person, selectable){

	var x = person.x;	
	var y = person.y;
	var w = person.width;
	var h = person.height;

	
	if (selectable){

		ctx.drawImage(person.itemb, x-person.width*3/16, y, w, h);			
		x -= person.width*3/16;
		y += person.height*9/16;
		w = person.width*6/16;
		h = person.height*7/16;
		
		drawItemSelection(x,y,w,h,"itemBack"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	} else {
		ctx.drawImage(person.itemb, x, y, w, h);			
	}		

}