
function connectLeaderboard(rank, value) {


  if (value == 'score' || value == 'Score'){value = 1;}
  else if (value == 'time' || value == 'Time'){value = 2;}
  else if (value == 'level' || value == 'Level'){value = 3;}
  else if (value == 'name' || value == 'Name'){value = 4;}


  var url = 'http://localhost/getLeaderboard.php?r='+rank+'&v='+value;                 //the script to call to get data  
    $.ajax({ 
      type: 'GET',                                  
      url: url,                           //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      crossDomain: true,
      cache: false,
      async: true,
      dataType: 'text',                //data format  
      success: receiveScoreboardData   

    });
  //  return result;
  function receiveScoreboardData(data){

    if (value == 1){
      leaderboardScores[rank-1] = data;
    }
    if (value == 2){
      leaderboardTimes[rank-1] = data;
    }
    if (value == 3){
      leaderboardLevels[rank-1] = data;
    }
    if (value == 4){
      leaderboardNames[rank-1] = data;
    }

   
  }  

}

function updateDatabase(score, time, level, name){


    var url = 'http://localhost/updateLeaderboard.php';                 //the script to call to get data   
    $.ajax({ 
      type: 'POST',                                  
      url: url,                           
      data: {score: score,
      		 time: time,
      		 level: level,
      		 name: name},                            
      crossDomain: true,
      cache: false,
      async: true,
    //  dataType: 'text',                //data format  
      success: function(response){
      	console.log("Server Return: " + response);
      }

    });

}







/*

    var xmlhttp;
    if (query == "") {
        console.log("No query specified...");
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log("Server Answer: " + xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET","localhost/connect.php?q="+query,true);
        xmlhttp.send();
    }
    */
