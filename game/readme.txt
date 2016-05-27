Index.html - main page, calls the canvas rendering function, lists all of the resource javascript files used.

thirdParty folder - hold the third party js code we used for score input textbox
- CanvasInput.js 

screen<name>.js files are for specific screen states such as main menu, gamee screen, pause menu
The rest are helper files.


screenAchievements.js
- Code for rendering the achievements.

screenCredits.js
- loads and renders the credit screen (not implemented 100%)

screenGame.js
- Loads & renders game settings, images, characters & stuff.

screenMainMenu.js
- Loads & renders main menu screen... Menu buttons & stuff

screenPauseMenu.js
- Loads & renders the pause menu. Users can pause during gameplay.

screenResult.js
- When a level ends... Display the screen to show whether a user won or lost. Also calls the necessary functions that should happen.

screenScoreboard.js
- Display the scoreboard screen! Calls databaseConnect.js

screenScoreSubmit.js
- Loads & renders the score submission screen. Calls databaseConnect.js to update server.

screenSelect.js
- Loads & renders the item selection screen, after clicking a person in line.

screenTutorial.js
- Loads & renders the tutorial screen. (Not 100% working)

-------------------------------------------------------------------------------------------------
// Help files

canvas.js 
- runs the base canvas and it's settings...

databaseConnect.js
- call PHP files. Database manipulation functions.

drawItems.js
- draw items, like: short, hat, shoes, suitcase... in game play screen.

drawLine.js
- defines how the people are visually arranged on the screen.

drawTextPlayerStats.js
- contains functions to display the score, level, and time on various screens.

gameState.js 
- defines the state of the game, and what screen/window/menu you're on.

globals.js
- Defines some global variables here. Scoring might take place here.

graphicsBase.js 
- defines the structure to how/what images are loaded onscreen during a state setup.

imageVariables.js
- An extention of graphicsBase.js... It holds the image variables.

items.js
- extension of imageVariables.js.. It shows the image of items.

levels.js
- holds rules and global variables defining how gameplay changes as the level increases.

personGen.js
- defines how each person variable is generated and what they are wearing.

rules.js
- defines rule generation for color, number and type of items based on level.

levels.js
- defines (how the level will be displayed) and the rules determined.

score.js
- keep it for future score function... Current score function code is combined in rules.js

textBox.js
- load and draw text input box in score submission screen.

timer.js
- defines function for creating, pausing and erasing timer object.

uiObjects.js
- The best code ever!
Use the functions in here to build clickable objects. Menu buttons and whatnot.