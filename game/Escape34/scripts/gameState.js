

var state = -1; // -1 is only used to define that no state has been issued yet.


//State 0 == main menu;
//State 1 == Gameplay screen
//State 2 == finish level screen
function setState(n){
	if (state != n){
		state = n;
		reloadGraphics();
	}else{
		console.log("Game State already set.")
	}
}

