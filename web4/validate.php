<?php

$usn =  $_GET['usn'];
$handle = fopen("data.txt", "r");
$flag = 0;
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $arr = explode("=",$line);
        if($arr[0] == $usn)
        {
          $flag = 1;
          echo $arr[1];
        }
    }

    fclose($handle);
} else {
    // error opening the file.
}
/////////////
if($flag == '0')
{
  echo '-1';
}

 ?>
