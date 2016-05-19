<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$score = $_POST['score'];
$time = gmdate("H:i:s", $_POST['time']);
$level = $_POST['level'];
$name = $_POST['name'];


// used to define the player's rightful place on the leaderboard...
$rank = -1; // -1 default means the player didn't get into the leaderboard. 
$result = 0; // holds the result of queries
// Technically $row is a 2 dimensional array. $row[][]
$row = array("","","","","","","","","",""); // Will hold each row of the 10.
 

$con = mysqli_connect('sql3.freemysqlhosting.net','sql3119862','RPBZu79X53','sql3119862');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}


  // generate each row
for ($i = 0; $i < 10; $i++){
    echo "hey";
    $sql="SELECT * FROM Leaderboard WHERE Rank = '".($i+1)."'";
    $result = mysqli_query($con,$sql);
  if ($result) {
    echo "Loaded " . $i;
  } else {
    echo "Failed to load " . $i . mysqli_error($con);
  }
    $row[$i] =  mysqli_fetch_array($result); // this command defines $row as 2 dimensional
}  


  //loop through the rows and compare scores
for ($i = 1; $i <= 10; $i++){
  //Is the player score higher than or equal to the score for this rank/row?
  if ($score >= $row[$i-1]['Score']){
    $rank = $i; // Player belongs here.
    break; // exit the loop. We found what we needed.
  }
}

//If the player belongs in the leaderboard....
if ($rank != -1){
  if ($rank != 10){// If $rank == 10, no reason to shift values down...
    //Shift values once down the ranks
    for ($i = 10; $i >= $rank; $i--){

        // These hold the values being shifted down the leaderboard
        $scoreHolder = $row[$i-1]['Score'];
        $timeHolder = $row[$i-1]['Time'];
        $levelHolder = $row[$i-1]['Level'];
        $nameHolder = $row[$i-1]['Name'];
        $moveToRank = $i+1; // holds the value of $i+1... Therefore the rank below...
        // Set the score from above
        // Take said score to the rank below

      
        $sql = "UPDATE Leaderboard SET Score='".$scoreHolder."', Time='".$timeHolder."', Level='".$levelHolder."', Name='".$nameHolder."' WHERE Rank='".$moveToRank."'";


        if (mysqli_query($con, $sql)) {
          echo "Record updated successfully";
        } else {
          echo "Error updating record: " . mysqli_error($con);
        }
    }
  }
  $sql = "UPDATE Leaderboard SET Score='".$score."', Time='".$time."', Level='".$level."', Name='".$name."' WHERE Rank='".$rank."'";

  if (mysqli_query($con, $sql)) {
    echo "Record updated successfully FINAL";
  } else {
    echo "Error updating record FINAL: " . mysqli_error($con);
  }

      //echo "Database updated!";
      //echo $result;
}else{echo "Database NOT updated...";}

/*
$sql="UPDATE Leaderboard SET Score='1' WHERE Rank='10'";
$result = mysqli_query($con,$sql);
echo $result;
echo $score; 
echo $time;
echo $level;
echo $name;
*/
//$array = array(1,2,3,4,5);
//echo json_encode($array);
/*
while($row = mysqli_fetch_array($result)) {
    echo $row['Rank'];
    echo $row['Name'];
    echo $row['Score'];
    echo $row['Time'];
    echo $row['Level'];

}
*/
mysqli_close($con);
?>
