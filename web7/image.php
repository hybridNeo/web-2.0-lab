<?php
	
$temp = $_GET['id'];
   
    if($temp == 1)
        header("Location:1.jpg");
    else if($temp == 2)
        header("Location:2.jpg");
    else if($temp == 3)
        header("Location:3.jpg");
    else if($temp == 4)
        header("Location:4.jpg");
    else
        header("Location:5.jpg");
?>

