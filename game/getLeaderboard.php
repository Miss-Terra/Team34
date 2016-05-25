<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$r = intval($_GET['r']);
$v = intval($_GET['v']);

  if ($v == '1'){$v = 'Score';}
  else if ($v == '2'){$v = 'Time';}
  else if ($v == '3'){$v = 'Level';}
  else if ($v == '4'){$v = 'Name';}

//$con = mysqli_connect('sql300.byethost3.com','b3_18089762','Ekarc3000','b3_18089762_Leaderboard');
$con = mysqli_connect('sql3.freemysqlhosting.net','sql3120944','9vHA8KKeQP','sql3120944');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

//mysqli_select_db($con,"sql3119862");
$sql="SELECT * FROM Leaderboard WHERE Rank = '".$r."'";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);

echo $row[$v];
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
