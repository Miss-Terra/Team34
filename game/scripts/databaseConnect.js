
function connectLeaderboard(rank, value) {


  if (value == 'score' || value == 'Score'){value = 1;}
  else if (value == 'time' || value == 'Time'){value = 2;}
  else if (value == 'level' || value == 'Level'){value = 3;}
  else if (value == 'name' || value == 'Name'){value = 4;}


  var url = 'http://localhost/connect.php?r='+rank+'&v='+value;                 //the script to call to get data  
  console.log(url); 
    $.ajax({ 
      type: 'GET',                                  
      url: url,                           //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      crossDomain: true,
      cache: false,
      async: true,
      dataType: 'text',                //data format  
      success: handleScoreboardData   
   /*   success: function(data)          //on recieve of reply
      {
        //--------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------
      //  console.log("rank = " + rank + " name = " + name);
      //  console.log("score = " + score + " time = " + time + " level = " + level);
      someFunction(data);
      return data;
       // $('#output').html("<b>id: </b>"+id+"<b> name: </b>"+vname); //Set output element html
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
      } 
      */
    });
  //  return result;
  function handleScoreboardData(data){

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
