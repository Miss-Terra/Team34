//The current level. (level 0 == tutorial)
var currentLevel = 1;
//How many item types are available for the current level.
//If 1... Then perhaps only HATS are used.
//If 2... Then only HATS and maybe SHOES are used.
var itemTypes = 1;
//How many different unique items are allowed...
//2 would mean a person can have either a red hat or a blue shirt assigned.
//Perhaps they have 1 or both.
//(type/color) define a unique item.
var itemVariety = 2;

//How fast the line moves.
var speed = 1.0;

var MAXLEVEL = 34; 
var MAXTYPES = 6; //Hat, shirt, pants, shoes, item1, item2

//How large the line is. (How many people are in it).
var lineSize = 6;
var maxPeopleInLine = 5; // Only display this number of people at a time.

setSettings();

//When loading a level... This sets up the difficulty & level settings.
function setSettings(){
	setItemTypes();
	setItemVariety();
}

//This is how long the line is.
//Unused right now.
function setLineSize(n){
	lineSize = n;
}

//Sets the number of item types allowed.
//Basically this adds 1 item type per 5 levels. (except at the start).
function setItemTypes(){
	if (currentLevel <= 2){
		itemTypes = 1; 
	}
	if (currentLevel < 5 && currentLevel > 2){
		itemTypes = 2;
	}
	if (currentLevel < 10 && currentLevel > 4){
		itemTypes = 3;
	}
	if (currentLevel < 15 && currentLevel > 9){
		itemTypes = 4;
	}
	if (currentLevel < 20 && currentLevel > 14){
		itemTypes = 5;
	}
	if (currentLevel >= 20){
		itemTypes = 6;
	}

}

//Baiscally this sets item variety.
//At level 2, you have a max of 2 different objects. (type/color)
function setItemVariety(){

	if (currentLevel <= 2){
		itemVariety = 2; 
	} else{
		itemVariety = (currentLevel / 2) + 2;
	}

}

function nextLevel(){
	currentLevel++;
	setSettings();
}