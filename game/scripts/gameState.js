var state = -1; // -1 is only used to define that no state has been issued yet.

//State 0 == main menu;
//State 1 == Gameplay screen
//State 2 == Result screen
//State 3 == Pause menu screen
//State 4 == Score screen
//State 5 == Credits screen
//State 6 == Extra screen
//State 7 == Back to Main Menu Screen
//State 8 == Item Select screen
//State 9 == Tutorial screen
//State 10 == Score submission screen
//State 11 == Restart confirm menu screen

function setState(n){
	if (state != n){
		//Erases all UIobjects (buttons & clickable stuff)
		uiObjects = [];

		//All state changes should ensure the timer has stopped.
		if (state == 1){
			stopAllTimers();
		}else{ //If current state is not 1. 
			uiPeople = []; //reset uiPeople.
			if (state == 10){
				inputField.destroy();
				inputField = null;
			}
		}		
		state = n;
     //reloadGraphics() is in graphicsBase.js file
		reloadGraphics();
		
		if (state == 1){
			gamePaused = false; console.log(gamePaused);
		}
	} else {
		console.log("Game State already set.");
	}
	console.log("State --> " + state);
}