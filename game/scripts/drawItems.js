//Draws all the items on the person.
function drawItems(person){

		drawShirt(person);
		drawHat(person);
		drawShoes(person);
		drawPants(person);
		
}

//Draw on the shirt
function drawShirt(person){

	var x = person.x;	
	var y = person.y + person.height/4;
	var w = person.width;
	var h = person.height * 0.3;

	ctx.drawImage(person.shirt, x, y, w, h);		
}

//Draw on the hat
function drawHat(person){

	var x = person.x;	
	var y = person.y - person.height/4.5;
	var w = person.width;
	var h = person.height * 0.3;

	ctx.drawImage(person.hat, x, y, w, h);		
}

//Draw on the pants
function drawPants(person){

	var x = person.x + person.width * 0.05; 	
	var y = person.y + person.height/1.85;
	var w = person.width * 0.9;
	var h = person.height * 0.4;

	ctx.drawImage(person.pants, x, y, w, h);		
}

//Draw on the shoes
function drawShoes(person){

	var x = person.x + person.width * 0.14; 	
	var y = person.y + person.height * 0.9;
	var w = person.width * 0.81;
	var h = person.height * 0.1;

	ctx.drawImage(person.shoes, x, y, w, h);		
}