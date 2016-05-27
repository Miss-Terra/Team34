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


var gamespeed = 300; //Edit me for faster gameplay.
//How fast the line moves. in miliseconds. (updated in nextLevel())
var lineSpeed = gamespeed;
var MAXLEVEL = 34; 
var MAXTYPES = 6; //Hat, shirt, pants, shoes, item1, item2

//How large the line is. (How many people are in it).
var lineSize = 23;
var maxPeopleInLine = 23; // Only display this number of people at a time.

function nextLevel(){
	currentLevel++;
	lineSize-= 1;

	//We use lineSpeed in timer.js
	if (currentLevel <= 15){
		lineSpeed = gamespeed*(1 - ((currentLevel-1)/20)); // Multiple this number by 5 to realise how often the line moves.
	}else{
		lineSpeed = gamespeed*(1 - ((14)/20));
	
			
	
	}
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
