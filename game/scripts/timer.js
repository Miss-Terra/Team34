	//levelTimer determines how much time you have on each level.
var levelTimer;
var lineTimer;
var lineAccuracyCounter = 0; //Used to help remember each second between timer ticks.


//----------level timer funtions---------
function initTimeSetting() {
			  //lineSize and lineSpeed are defined in levels.js 
	levelTime = Math.floor(lineSize * (5 * (lineSpeed/1000))); //Level time is based on line size and line speed.
}
function startLevelTimer(){
	// set interval and task
	levelTimer = setInterval(levelTimerTick, 1000);
	console.log("Level timer started");
}
function levelTimerTick(){
	
	if (levelTime > 0) {
		levelTime--;
	} else {
		stopTimer(levelTimer);
	}	
}

//---------lineTimer functions----------


function startLineTimer(){
	if (gamePaused == false){
  		lineAccuracyCounter = 0;
  	}
  											//defined in level.js
	lineTimer = setInterval(lineTimerTick, lineSpeed);
	console.log("Line timer started");
}


//Every time the lineTimer interval ticks.
//Currently set to occure once every 5 seconds.
function lineTimerTick(){

	lineAccuracyCounter++;

	if (lineAccuracyCounter == 5){
		//Shift everyone forward in the line, 1 space.
		shiftLine(); //drawLine.js
		console.log("Line Size: " + personArray.length);

		if (personArray.length == 0){
			stopTimer(lineTimer);
		}
		lineAccuracyCounter = 0;
	}


}

//----------General Timer Functions-----------

function stopTimer(timer){
  clearInterval(timer);
  console.log("Timer stopped.");
}
function stopAllTimers() { // to be called when you want to stop the timer	
  clearInterval(levelTimer);
  clearInterval(lineTimer);
  if (gamePaused == false){
  	lineAccuracyCounter = 0;
  }
  console.log("All timers stopped.");
}


