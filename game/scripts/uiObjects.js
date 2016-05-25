//A mouse listener for the canvas.
canvas.addEventListener("click", mouseClick, false);
canvas.addEventListener("mousedown", mouseDown, false);


//Whenever user clicks the screen.
function mouseClick(e){
	
	//Check all uiObjects, if you've clicked any of them...
	for (var i = 0; i < uiObjects.length; i++){
		//Compares mouse x&y to the object in question.
		if (e.pageX > uiObjects[i].x && e.pageX < (uiObjects[i].x + uiObjects[i].width)
			&& e.pageY > uiObjects[i].y && e.pageY < (uiObjects[i].y + uiObjects[i].height)){

			uiObjects[i].clicked();
		}
	}
	if (state == 1){
		for (var i = 0; i < uiPeople.length; i++){
			//Compares mouse x&y to the object in question.
			if (e.pageX > uiPeople[i].x && e.pageX < (uiPeople[i].x + uiPeople[i].width)
				&& e.pageY > uiPeople[i].y && e.pageY < (uiPeople[i].y + uiPeople[i].height)){

				uiPeople[i].clicked();
			}
		}
	}
}

//Whenever user clicks down the screen.
function mouseDown(e){
	
	//Check all uiObjects, if you've clicked any of them...
	for (var i = 0; i < uiObjects.length; i++){
		//Compares mouse x&y to the object in question.
		if (e.pageX > uiObjects[i].x && e.pageX < (uiObjects[i].x + uiObjects[i].width)
			&& e.pageY > uiObjects[i].y && e.pageY < (uiObjects[i].y + uiObjects[i].height)){

			uiObjects[i].down();
		}
	}
}




// Each object has a point & size... PLUS a unique function. :)
/*var uiObject = function(x, y, width, height, funcClick, funcHover) {
	this.x = x;
    this.y = y;
    this.width = width;
    this.height = height; 
    this.clicked = funcClick; //Takes in a function. Therefore each uiObject can be unique.
    this.hover = funcHover; 
}*/

// Each object has a point & size... PLUS a unique function. :)
var uiObject = function(x, y, width, height, clicked, person, down) {
	this.x = x;
    this.y = y;
    this.width = width;
    this.height = height; 
    //this.clicked = func; //Takes in a function. Therefore each uiObject can be unique.
	this.clicked = clicked;
    this.person = person;
	this.down = down;
}