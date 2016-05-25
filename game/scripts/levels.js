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

//How fast the line moves. in miliseconds. (updated in nextLevel())
var lineSpeed = 1000;

var MAXLEVEL = 34; 
var MAXTYPES = 6; //Hat, shirt, pants, shoes, item1, item2

//How large the line is. (How many people are in it).
var lineSize = 23;
var maxPeopleInLine = 23; // Only display this number of people at a time.

function nextLevel(){
	currentLevel++;
	//We use lineSpeed in timer.js
	lineSpeed = 1000*(1 - ((currentLevel-1)/68)); // Multiple this number by 5 to realise how often the line moves.
//	setSettings();
}

//Basically I want a function in levels.js that is used to tweak the difficulty
//based on level, using the rule setting functions in rules.js
function setLevelDifficulty() {
	
	if (currentLevel >= 1 && currentLevel <= 5){
    setRuleDifficulty(1);
	} else if (currentLevel >= 6 && currentLevel <= 10){
    setRuleDifficulty(2);
	} else if (currentLevel >= 11 && currentLevel <= 15){
    setRuleDifficulty(3);
	} else if (currentLevel >= 16 && currentLevel <= 20){
    setRuleDifficulty(4);
	} else if (currentLevel >= 21 && currentLevel <= 25){
    setRuleDifficulty(5);
	} else if (currentLevel >= 26 && currentLevel <= 30){
    setRuleDifficulty(6);
	} else if (currentLevel >= 31 && currentLevel <= 34){
    setRuleDifficulty(7);
	}
}

/*
//This is how long the line is.
//Unused right now.
function setLineSize(n){
	lineSize = n;
}

//When loading a level... This sets up the difficulty & level settings.
function setSettings(){
	setItemTypes();
	setItemVariety();
}

setSettings();

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
*/