//Draws all the items on the person.
// selectable var is a boolean to determine if these clothes are selectable. (Item select screen).
function drawItems(person, selectable){

		drawShirt(person, selectable);
		drawHat(person, selectable);
		drawShoes(person, selectable);
		drawPants(person, selectable);
		
}

//Draw on the shirt
function drawShirt(person, selectable){

	var x = person.x;	
	var y = person.y + person.height/4;
	var w = person.width;
	var h = person.height * 0.3;

	ctx.drawImage(person.shirt, x, y, w, h);	

	if (selectable){
		drawItemSelection(x,y,w,h,"shirt"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	
}

//Draw on the hat
function drawHat(person, selectable){

	var x = person.x;	
	var y = person.y - person.height/4.5;
	var w = person.width;
	var h = person.height * 0.3;

	ctx.drawImage(person.hat, x, y, w, h);	

	//Bellow only used during item selection
	if (selectable){
		drawItemSelection(x,y,w,h,"hat"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	
}

//Draw on the pants
function drawPants(person, selectable){

	var x = person.x + person.width * 0.05; 	
	var y = person.y + person.height/1.85;
	var w = person.width * 0.9;
	var h = person.height * 0.4;
	ctx.drawImage(person.pants, x, y, w, h);

	//Bellow only used during item selection
	if (selectable){
		y *= 1.013
		h *= 0.85; // adjustment
		drawItemSelection(x,y,w,h,"pants"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	

}

//Draw on the shoes
function drawShoes(person, selectable){

	var x = person.x + person.width * 0.14; 	
	var y = person.y + person.height * 0.9;
	var w = person.width * 0.81;
	var h = person.height * 0.1;
	ctx.drawImage(person.shoes, x, y, w, h);	

	//Bellow only used during item selection
	if (selectable){
		x *= 0.97
		w *= 1.15; // adjustment
		drawItemSelection(x,y,w,h,"shoes"); //screenSelect.js (Calls the functions required to enable users to select the item.)
	}	


}