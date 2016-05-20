//state 8
var selectionPerson; // This variable is a person. It's defined in drawLine.js... Whenever a user clicks a person.
var itemSelectedByPlayer; // Item seleted by player

var hatSelected = false;
var shirtSelected = false;
var pantsSelected = false;
var shoesSelected = false;
var itemfSelected = false;
var itembSelected = false;
var allowed = true; // Define if number of items allowed exceeds maximum 
//(defined in the function drawItemSelection)

var selectedArray = new Array(6); //array of items selectable

 //Function to return the number of items currently selected
var numberSelected = function () {
	selectedArray = [hatSelected, shirtSelected, pantsSelected, shoesSelected, itemfSelected, itembSelected];
  var count = 0;
	for (var i=0; i< selectedArray.length; i++) {
		if (selectedArray[i] == true){
			count++;
		}
	}	
	return count;
}


function loadCharSelection(){

	bgImage.src = "images/charSelection.png";
	dude.src = "images/person.png";
	resumeButtonImage.src = "images/yesButton.png";
  restartButtonImage.src = "images/noButton.png";
  borderImage.src = "images/itemSelect.png";
  borderImage2.src = "images/itemDeSelect.png";

	initSelectionSetting();

}

function initSelectionSetting(){
	hatSelected = false;
	shirtSelected = false;
	pantsSelected = false;
	shoesSelected = false;
	itemfSelected = false;
	itembSelected = false;
}

function drawCharSelection(){
	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	drawSelectMenuButtons();
	drawSelectionChar();
}


function drawSelectMenuButtons(){

  var buttonWidth = canvas.width / 6;
	var buttonHeight = canvas.height / 10;	
	var	noY = canvas.height * 0.8;
	var	yesY = canvas.height * 0.2;
	//Button x positions
	var noX =  buttonWidth * 0.5;
	var yesX = buttonWidth * 0.5;            


    // No button
	ctx.drawImage(restartButtonImage, noX, noY, buttonWidth, buttonHeight);
	uiObjects[0] = new uiObject(noX, noY, buttonWidth, buttonHeight, 
			function (){
				console.log("Canceled Selecton...");
				setState(1);
			});	
	
    // Yes button
	ctx.drawImage(resumeButtonImage, yesX, yesY, buttonWidth, buttonHeight);
	uiObjects[1] = new uiObject(yesX, yesY, buttonWidth, buttonHeight, 
			function (){
				console.log(gamePaused); 
				console.log("Nothing happened.")
				setState(1);
				
				// Assign item selected by player to itemSelectedByPlayer
				if (hatSelected == true){
					itemSelectedByPlayer = selectionPerson.hat 
					console.log("PlayerSelection: hat");
				} else if (shirtSelected == true){
					itemSelectedByPlayer = selectionPerson.shirt 
					console.log("PlayerSelection: shirt");
				} else if (pantsSelected == true){
					itemSelectedByPlayer = selectionPerson.pants 
					console.log("PlayerSelection: pants");
				} else if (shoesSelected == true){
					itemSelectedByPlayer = selectionPerson.shoes 
					console.log("PlayerSelection: shoes");
				} else if (itemfSelected == true){
					itemSelectedByPlayer = selectionPerson.itemf 
					console.log("PlayerSelection: itemFront");
				} else if (itembSelected == true){
					itemSelectedByPlayer = selectionPerson.itemb 
					console.log("PlayerSelection: itemBack");					
				};
								
			});

}



function drawSelectionChar(){

	var x = canvas.width * 0.55;
	var y = canvas.height * 0.25;
	//var width = (canvas.width * 0.5) - canvas.width * 0.1;
	//var height = (canvas.height * 0.9) - canvas.height * 0.25;
	var width = (canvas.width/4) * 0.9; // Math looks weird here because I needed to keep the same ratio as the person size in drawline.js
	var height = (canvas.height/1.375) * 0.9; // Math looks weird here because I needed to keep the same raito as the person size in drawline.js

	selectionPerson.setSize(width,height); // needed for drawItems
	selectionPerson.setPosition(x,y); // needed for drawItems

	//console.log("numselected=" + numberSelected());  //////

	ctx.drawImage(selectionPerson.image, selectionPerson.x, selectionPerson.y, selectionPerson.width, selectionPerson.height);
	drawItems(selectionPerson, true);
}
		

// (Calls the functions required to enable users to select the item.)	
function drawItemSelection(x,y,w,h,id){
	
	if (numberSelected() == 1) {
		allowed = false;
	} else if (numberSelected() == 0) {
		allowed = true;
	}
	
	//Depending on which item you draw... Do the following...
	var img = borderImage2; // deselected
	if (id == "hat"){
		if (hatSelected == true){
			img = borderImage; // selected
		}
		uiObjects[2] = new uiObject(x, y, w, h, 
			function (){
				if (hatSelected){
					hatSelected = false; // Hat selected
				} else if (allowed==true) {hatSelected = true;}
				console.log("hat selected.")
		});
	}

	if (id == "shirt"){
		if (shirtSelected == true){
			img = borderImage; // selected
		}
		uiObjects[3] = new uiObject(x, y, w, h, 
			function (){
				if (shirtSelected){
					shirtSelected = false; // shirt selected
				}else if (allowed==true) {shirtSelected = true;}
				console.log("shirt selected.")
		});		
	}

	if (id == "pants"){
		if (pantsSelected == true){
			img = borderImage; // selected		
		}
		uiObjects[4] = new uiObject(x, y, w, h, 
			function (){
				if (pantsSelected){
					pantsSelected = false; // pants selected
				}else if (allowed==true) {pantsSelected = true;}
				console.log("pants selected.")
		});
	}

	if (id == "shoes"){
		if (shoesSelected == true){
			img = borderImage; // selected		
		}
		uiObjects[5] = new uiObject(x, y, w, h, 
			function (){
				if (shoesSelected){
					shoesSelected = false; // shoes selected
				}else if (allowed==true) {shoesSelected = true;}
				console.log("shoes selected.")
		});
	}
	
		if (id == "itemFront"){
		if (itemfSelected == true){
			img = borderImage; // selected
		}
		uiObjects[6] = new uiObject(x, y, w, h, 
			function (){
				if (itemfSelected){
					itemfSelected = false; // Hat selected
				}else if (allowed==true) {itemfSelected = true;}
				console.log("front item selected.")
		});
	}
	
		if (id == "itemBack"){
		if (itembSelected == true){
			img = borderImage; // selected
		}
		uiObjects[7] = new uiObject(x, y, w, h, 
			function (){
				if (itembSelected){
					itembSelected = false; // Hat selected
				}else if (allowed==true) {itembSelected = true;}
				console.log("back item selected.")
		});
	}

	//create a box around each item.
	ctx.drawImage(img,x,y,w,h);
}
