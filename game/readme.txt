Index.html - main page, calls the canvas rendering function, lists all of the resource javascript files used.

screen<name>.js files are for specific screen states such as main menu, gamee screen, pause menu
The rest are helper files.

screenCredits.js

screenEgg.js
- Code for rendering the easter egg.

screenGame.js

screenMainMenu.js

screenPauseMenu.js

screenResult.js
- When a level ends... Display the screen to show whether a user won or lost. Also calls the necessary functions that should happen.

screenScoreboard.js

screenSelect.js

screenTutorial.js


canvas.js 
- runs the base canvas and it's settings...

display.js
- contains functions to display the score, level, and time on various screens.

drawLine.js
- defines how the people are visually arranged on the screen.

gameState.js 
- defines the state of the game, and what screen/window/menu you're on.

graphicsBase.js 
- defines the structure to how/what images are loaded onscreen during a state setup.

globals.js
- Defines some global variables here. Scoring might take place here.

levels.js
- holds rules and global variables defining how gameplay changes as the level increases.

personGen.js
- defines how each person variable is generated and what they are wearing.

rules.js
- defines rule generation for color, number and type of items based on level.

levels.js
- defines (how the level will be displayed) and the rules determined.

timer.js
- defines function for creating, pausing and erasing timer object.

uiObjects.js
- The best code ever!
Use the functions in here to build clickable objects. Menu buttons and whatnot.