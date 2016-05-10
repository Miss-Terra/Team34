

var state = -1; // -1 is only used to define that no state has been issued yet.


//State 0 == main menu;
//State 1 == Gameplay screen
//State 2 == finish level screen
//State 3 == fail level screen
//State 4 == Pause menu screen
//State 5 == Score screen
//State 6 == Credits screen
//State 7 == Extra screen

function setState(n){
	if (state != n){
		//Erases all UIobjects (buttons & clickable stuff)
		uiObjects = [];
		state = n;
        //reloadGraphics() is in graphicsBase.js file
		reloadGraphics();
	}else{
		console.log("Game State already set.")
	}
}

