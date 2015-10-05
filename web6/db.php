<?php
	if(isset($_GET['col'])){
		$myfile = fopen("file.txt", "r") or die("Unable to open file!");
		$arr = explode(";" ,fgets($myfile));
		fclose($myfile);
		$id = 0;
		if($_GET['col'] == "RVCE"){
			$id += 2;
		}
		if($_GET['dept'] == "ECE"){
			$id +=1;
		}
		$arr[$id] -= 1;
		
		$str = implode(";",$arr);
		
		
		file_put_contents("file.txt", $str);
		echo $str;
	}else{
		$myfile = fopen("file.txt", "r") or die("Unable to open file!");
		echo fgets($myfile);	
	}
?>
