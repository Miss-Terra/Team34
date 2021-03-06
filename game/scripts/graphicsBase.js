// This file displays the graphics on the canvas.
//Note, the canvas is constructed in canvas.js.
//Here we load backgrounds & art based on the level/state




/*
-----------------------------Image Variables moved to imageVariables.js-----------------------------------
*/





//State 0 == Main menu;
//State 1 == Gameplay screen
//State 2 == Result screen
//State 3 == Pause menu screen
//State 4 == Score screen
//State 5 == Credits screen
//State 6 == Achievements screen
//State 7 == back to main menu confirm screen
//State 8 == Item Select screen
//State 9 == Tutorial screen
//State 10 == Score submission screen
//State 11 == restart confirm screen 
//	<script src="scripts/screenMainMenu.js"></script> 
//	<script src="scripts/screenGame.js"></script>
//	<script src="scripts/screenResult.js"></script>
//	<script src="scripts/screenPauseMenu.js"></script>
//	<script src="scripts/screenScoreboard.js"></script>
//	<script src="scripts/screenCredits.js"></script>
//	<script src="scripts/screenAchievements.js"></script>            
//	<script src="scripts/screenTutorial.js"></script>
// no confirmation menu source file?

//-----------------Graphics Functions--------------------

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
		//screenGame.js
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
		//6 achievements screen
	if (state == 6){
		loadAchievements();
		//screenAchievements.js
	}
		//7 back to main confirm screen
	if (state == 7){
		//screenPauseMenu.js
		loadBackToMainMenuConfirmMenu();
	}
		//8 item select screen
	if (state == 8){
		//screenSelect.js
		loadCharSelection();
	}
	  //tutorial level
	if (state == 9){
		//screenTutorial.js
		loadTutorialMenu();	
	}
		//score submission screen
	if (state == 10){
		//screenScoreboard.js
		loadScoreSubmission();	
	}
    
        //11 restart confirm menu
    if (state == 11){
        //screenPauseMenu.js
        loadRestartConfirmMenu();
    }

}

//This function sets all the status of all images to false.
//It's an extention of the reloadGraphics() function.
function clearLoadedImages(){
	bgReady = false;
	personReady = false;
	mlogoReady = false;
	slogoReady = false;
	buttonReady = false;
	playButtonReady = false;
	scoreboardButtonReady = false;
	creditsButtonReady = false;
	mainMenuButtonReady = false;
	restartButtonReady = false;
	resumeButtonReady = false;
	pauseButtonReady = false;
	pauseButtonReady2 = false;
	borderReady = false;
	borderReady2 = false;
	backButtonReady = false;
	nextButtonReady = false;
	achievementsButtonReady = false;
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
			//screenGame.js
			drawGame();
			//Draw the line of people.
      //drawLine() is in drawLine.js file
      //drawLine(person);

		}
		//Result Screen
		if (state == 2){	
			//Draw background & buttons
			//drawResult() is in screenResult.js file
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
			drawAchievements();
			//screenAchievements.js
		}
			//7 back to main menu confirm screen
		if (state == 7){
			//screenPauseMenu.js
            //back to main menu confirm menu
			drawBackToMainMenuConfirmMenu();	
		}
		
			//8 confirm screen
		if (state == 8){
			//screenSelect.js
			drawCharSelection();	
		}
		
		
			//9 tutorial screen
		if (state == 9){
			//screenTutorial.js
			drawTutorial();	
		}
		
			//10 score submission screen
		if (state == 10){
			//screenScoreboard.js
			drawScoreSubmission();	
		}
        
            //11 restart confirm screen
        if (state == 11){
            //screenPauseMenu.js
            //restart confirm screen
            drawRestartConfirmMenu();
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
		if (bgReady && personReady 
					&& pauseButtonReady
					&& pauseButtonReady2){
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
				  && slogoReady
					&& creditsButtonReady){
			return true;
		}else{
			return false;
		}
	}
	


	if (state == 8) {
		//check state 8 img status
		if (bgReady && personReady
					&& resumeButtonReady
					&& restartButtonReady
					&& borderReady
					&& borderReady2){
			return true;
		}else{
			return false;
		}
	}
	
	
	if (state == 9) {
		//check state 9 img status
		if (bgReady && mainMenuButtonReady
					&& nextButtonReady
					&& backButtonReady){
			return true;
		}else{
			return false;
		}
	}
	
	
	if (state == 10) {
		//check state 10 img status
		if (bgReady && mainMenuButtonReady
					&& scoreboardButtonReady
					&& buttonImage){
			return true;
		}else{
			return false;
		}
	}
    
}
