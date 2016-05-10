// This file displays the graphics on the canvas.
//Note, the canvas is constructed in canvas.js.
//Here we load backgrounds & art based on the level/state

//--------------------Image Variables--------------------

		//Define background image variable.
		//When loaded, bgReady becomes true.
		var bgImage = new Image();
		var bgReady = false;
		bgImage.onload = function () {
			//background is safe to load...
			bgReady = true;
		};

		var lineManImage = new Image();
		var lineManReady = false;
		lineManImage.onload = function () {
			//Stickman is safe to load...
			lineManReady = true;
		};

		var buttonImage = new Image();
		var buttonReady = false;
		buttonImage.onload = function () {
			//button image is safe to load...
			buttonReady = true;
		};



//-----------------Graphics Functions--------------------



//State 0 == Main menu;
//State 1 == Gameplay screen
//State 2 == Result screen
//State 3 == Pause menu screen
//State 4 == Score screen
//State 5 == Credits screen
//State 6 == Extra screen
//	<script src="scripts/screenMainMenu.js"></script> 
//	<script src="scripts/screenGame.js"></script>
//	<script src="scripts/screenResult.js"></script>
//	<script src="scripts/screenPauseMenu.js"></script>
//	<script src="scripts/screenScoreboard.js"></script>
//	<script src="scripts/screenCredits.js"></script>
//	<script src="scripts/screenEgg.js"></script>


function reloadGraphics(){
	
	
	//Removes all art. Byebye!
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//defaults everything back to false.
	clearLoadedImages();

	//0 is main menu
	if (state == 0){
		
	}
		//1 is gameplay.
	if (state == 1){
		bgImage.src = "images/background.png";
		lineManImage.src = "images/lineMan.png";
	}
		//2 is result screen
	if (state == 2){
        //levelFinishBackgroundImg() is in screenResult.js file
		levelResultBackgroundImg()
	}
		//3 is pause menu screen
	if (state == 3){
			//screenPauseMenu.js
	}
		//4 is scoreboard screen
	if (state == 4){
			//screenScoreboard.js
	}
		//5 is credits screen
	if (state == 5){
			//screenCredits.js
	}
		//6 easter egg screen
	if (state == 6){
			//screenEgg.js
	}


}

//This fuction sets all the status of all images to false.
//It's an extention of the reloadGraphics() function.
function clearLoadedImages(){
	bgReady = false;
	lineManReady = false;
	buttonReady = false;
}


//-------------Most important function here!!!!!------------
//This function is the function that draws loaded images.
//The main method will constantly run this function to update graphics.
function renderGraphics(){

	if (graphicsStatus){
		//Main Menu
		if (state == 0){

		}
		//Gameplay Screen
		if (state == 1){
			//draw background
			ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);	
			//Draw the line of people.
            //drawLine() is in drawLine.js file
			drawLine(lineManImage);
		}
		//Result Screen
		if (state == 2){	
			//Draw background & buttons
            //drawFinishLevel() is in levelFinish.js file
			drawResult();
		}
	
			//3 is pause menu screen
		if (state == 3){
				//screenPauseMenu.js
		}
			//4 is scoreboard screen
		if (state == 4){
				//screenScoreboard.js
		}
			//5 is credits screen
		if (state == 5){
				//screenCredits.js
		}
			//6 easter egg screen
		if (state == 6){
				//screenEgg.js
		}

	}
	
	
}//end renderGraphics()


//This fuction checks whether ALL images have been loaded yet.
//Some states may have more than 1 image to load.
//bgReady is likely the most common image between all states.
function graphicsStatus(){

	if (state == 1) {
		//Did these images load yet?
		if (bgReady && lineManReady){
			return true;
		}else{
			return false;
		}
	}
	if (state == 2) {
		//check state 1 img status
		if (bgReady){
			return true;
		}else{
			return false;
		}
	}
}

