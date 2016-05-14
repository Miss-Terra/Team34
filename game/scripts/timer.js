var levelTimer;
var lineTimer;


//----------level timer funtions---------
function initTimeSetting() {
	levelTime = 3 * 60;
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


function startLineTimer(intervalMS){
	lineTimer = setInterval(lineTimerTick, intervalMS);
	console.log("Line timer started");
}


//Every time the lineTimer interval ticks.
function lineTimerTick(){
	//Shift everyone forward in the line, 1 space.
	shiftLine(); //drawLine.js
	console.log("Line Size: " + personArray.length);

	if (personArray.length == 0){
		stopTimer(lineTimer);
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
  console.log("All timers stopped.");
}

