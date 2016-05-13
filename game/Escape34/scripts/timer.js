var timer;

function initTimeSetting() {
	levelTime = 3 * 60;
}

function startLevelTimer(){
	// set interval and task
	// levelTime = 60 * 3;
	timer = setInterval(levelTimeTick, 1000);
	console.log("Timer started");
}
	
function levelTimeTick(){
	levelTime--;
	console.log(levelTime);
}

function stopTimer() { // to be called when you want to stop the timer
  clearInterval(timer);
  console.log("Timer stopped");
}