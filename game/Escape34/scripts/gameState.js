

var state = -1; // -1 is only used to define that no state has been issued yet.


//State 0 == main menu;
//State 1 == Gameplay screen
//State 2 == Result screen
//State 3 == Pause menu screen
//State 4 == Score screen
//State 5 == Credits screen
//State 6 == Extra screen
//State 7 == Confirm screen
//State 8 == Item Select screen

function setState(n){
	if (state != n){
		//Erases all UIobjects (buttons & clickable stuff)
		uiObjects = [];
		//All state changes should ensure the timer has stopped.
		if (state == 1){stopTimer();}
		
		state = n;
        //reloadGraphics() is in graphicsBase.js file
		reloadGraphics();
	}else{
		console.log("Game State already set.")
	}
	console.log("State --> " + state)
}

