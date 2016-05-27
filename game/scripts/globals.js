// This document holds global variables.
// Scoring can also take place here.

var levelScore = 0; //The score unique to a specific level.
var finalScore = 0; //The overall score between levels.
var levelVictory = false; //Defines when a user is victorious or not.
var finalVictory = false; //Defines if the user won the game. (Only useful during the last level) (possibly useless)
var levelTime = 3 * 60; // Set 3 minutes for each level
var finalTime = 0;
var uiObjects = []; // defines uiObjects... Things people can click
var uiPeople = []; // Just like uiObjects... But ONLY for people in the line.
var personArray = [];
var gamePaused = false; // A variable used to check if the game is paused.


// number of items in the item matrix
var NumberHats=7;
var NumberShirts=7;
var NumberPants=7;
var NumberShoes=7;
var NumberItems=8;
var NumberColors=7;
var NumberFaces=8;

// pause or quit
var quitFromPause;
var quitFromVictory = false;

// game music 
var music = new Audio('audio/defense_line.mp3');
var musicOn = true;

// tutorial screen: display tutorial image based on users click 
var tutorialImageNum = 1;

// music control after game over
var gameOver = false;