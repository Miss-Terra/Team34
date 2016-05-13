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

		var dude = new Image();
		var personReady = false;
		dude.onload = function () {
			//Stickman is safe to load...
			personReady = true;
		};		

		var menuLogo = new Image();
		var mlogoReady = false;
		menuLogo.onload = function () {
			//logo is safe to load...
			mlogoReady = true;
		};		
		
		var menuAnimationImage = new Image();
		var menuAnimationReady = false;
		menuAnimationImage.onload = function () {
			//Stickman is safe to load...
			menuAnimationReady = true;
		};	
	//----------------Buttons Image----------------

		var generateButtonImage = new Image();
		var buttonReady = false;
		generateButtonImage.onload = function () {
			//button image is safe to load...
			buttonReady = true;
		};
		
		var victoryButtonImage = new Image();
		var buttonReady = false;
		victoryButtonImage.onload = function () {
			//button image is safe to load...
			buttonReady = true;
		};
		
		var addscoreButtonImage = new Image();
		var buttonReady = false;
		addscoreButtonImage.onload = function () {
			//button image is safe to load...
			buttonReady = true;
		};
	
	
	
	
	
	
	
	
		// Basic button
		var buttonImage = new Image();
		var buttonReady = false;
		buttonImage.onload = function () {
			//button image is safe to load...
			buttonReady = true;
		};

		var pauseButtonImage = new Image();
		var pauseButtonReady = false;
		pauseButtonImage.onload = function () {
			//button image is safe to load...
			buttonReady = true;
		};
		
		var mainMenuButtonImage = new Image();
		var mainMenuButtonReady = false;
		mainMenuButtonImage.onload = function () {
			//button image is safe to load...
			mainMenuButtonReady = true;
		};
		
		var playButtonImage = new Image();
		var playButtonReady = false;
		playButtonImage.onload = function () {
			//button image is safe to load...
			playButtonReady = true;
		};
		
		var tutorialButtonImage = new Image();
		var tutorialButtonReady = false;
		tutorialButtonImage.onload = function () {
			//button image is safe to load...
			tutorialButtonReady = true;
		};
		
		var scoreboardButtonImage = new Image();
		var scoreboardButtonReady = false;
		scoreboardButtonImage.onload = function () {
			//button image is safe to load...
			scoreboardButtonReady = true;
		};
		
		var creditsButtonImage = new Image();
		var creditsButtonReady = false;
		creditsButtonImage.onload = function () {
			//button image is safe to load...
			creditsButtonReady = true;
		};

		var restartButtonImage = new Image();
		var restartButtonReady = false;
		restartButtonImage.onload = function () {
			//button image is safe to load...
			restartButtonReady = true;
		};
		var resumeButtonImage = new Image();
		var resumeButtonReady = false;
		resumeButtonImage.onload = function () {
			//button image is safe to load...
			resumeButtonReady = true;
		};
		
		

	//----------------Buttons Image----------------

	//----------------Items Image----------------









	//----------------Items Image----------------



//-----------------Graphics Functions--------------------



//State 0 == Main menu;
//State 1 == Gameplay screen
//State 2 == Result screen
//State 3 == Pause menu screen
//State 4 == Score screen
//State 5 == Credits screen
//State 6 == Extra screen
//State 7 == Confirm screen
//State 8 == Item Select screen
//State 9 == Tutorial screen
//	<script src="scripts/screenMainMenu.js"></script> 
//	<script src="scripts/screenGame.js"></script>
//	<script src="scripts/screenResult.js"></script>
//	<script src="scripts/screenPauseMenu.js"></script>
//	<script src="scripts/screenScoreboard.js"></script>
//	<script src="scripts/screenCredits.js"></script>
//	<script src="scripts/screenEgg.js"></script>
//	<script src="scripts/screenTutorial.js"></script>
// no confirmation menu source file?

function reloadGraphics(){
	
	
	//Removes all art. Byebye!
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//defaults everything back to false.
	clearLoadedImages();

	//0 is main menu
	if (state == 0){
		//screenMainMenu.js
		loadMainMenu();
	}
		//1 is gameplay.
	if (state == 1){
 		loadGame();
	}
		//2 is result screen
	if (state == 2){
		//levelFinishBackgroundImg() is in screenResult.js file
		loadResult();
	}
		//3 is pause menu screen
	if (state == 3){
		//screenPauseMenu.js
		loadPauseMenu();
	}
		//4 is scoreboard screen
	if (state == 4){
		//screenScoreboard.js
		loadScoreboard();
	}
		//5 is credits screen
	if (state == 5){
		//screenCredits.js
		loadCreditsMenu();
	}
		//6 easter egg screen
	if (state == 6){
			//screenEgg.js
	}
		//7 confirm screen
	if (state == 7){
		//screenPauseMenu.js
		loadConfirmMenu();	
	}
		//8 item select screen
	if (state == 8){
		//
	}
	  //tutorial level
	if (state == 9){
		//screenTutorial.js
		loadTutorialMenu();	
	}

}

//This function sets all the status of all images to false.
//It's an extention of the reloadGraphics() function.
function clearLoadedImages(){
	bgReady = false;
	personReady = false;
	mlogoReady = false;
	buttonReady = false;
	playButtonReady = false;
	scoreboardButtonReady = false;
	creditsButtonReady = false;
	mainMenuButtonReady = false;
	restartButtonReady = false;
	resumeButtonReady = false;
}


//-------------Most important function here!!!!!------------
//This function is the function that draws loaded images.
//The main method will constantly run this function to update graphics.
function renderGraphics(){

	if (graphicsStatus){
		//Main Menu
		if (state == 0){
			//screenMainMenu.js
			drawMainMenu();
		}
		//Gameplay Screen
		if (state == 1){
			drawGame();
			//Draw the line of people.
      //drawLine() is in drawLine.js file
      //drawLine(person);

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
			drawPauseMenu();
		}
			//4 is scoreboard screen
		if (state == 4){
				//screenScoreboard.js
			drawScoreboard();
		}
			//5 is credits screen
		if (state == 5){
			//screenCredits.js
			drawCredits();
		}
			//6 easter egg screen
		if (state == 6){
				//screenEgg.js
		}
			//7 confirm screen
		if (state == 7){
			//screenPauseMenu.js
			drawConfirmMenu();	
		}
		
		
			//9 tutorial screen
		if (state == 9){
			//screenTutorial.js
			drawTutorial();	
		}
	}
	
	
}//end renderGraphics()


//This fuction checks whether ALL images have been loaded yet.
//Some states may have more than 1 image to load.
//bgReady is likely the most common image between all states.
function graphicsStatus(){

	if (state == 0) {
		// Check state 0 img status
		if (bgReady && playButtonReady 
					&& scoreboardButtonReady
					&& creditsButtonReady
					&& mainMenuButtonReady
			    && mlogoReady){
			return true;
		}else{
			return false;
		}
	}
	if (state == 1) {
		//Did these images load yet?
		if (bgReady && personReady){
			return true;
		}else{
			return false;
		}
	}
	if (state == 2) {
		//check state 2 img status
		if (bgReady && restartButtonReady
					&& nextLevelButtonImage
					&& buttonImage){
			return true;
		}else{
			return false;
		}
	}
	if (state == 3) {
		//check state 3 img status
		if (bgReady && mainMenuButtonImage
					&& restartButtonImage
					&& resumeButtonImage){
			return true;
		}else{
			return false;
		}
	}
	if (state == 4) {
		//check state 4 img status
		if (bgReady && mainMenuButtonImage
					&& creditsButtonReady){
			return true;
		}else{
			return false;
		}
	}
}
