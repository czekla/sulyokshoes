<?php
session_start();
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";

$dir = "../kepek/technologia";
$image_dir = "./kepek/technologia";
$i = 0;
$array = array();
if ($handle = opendir($dir)) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
            $array[$i] = $file;
            $i++;
        }
    }
    closedir($handle);
}

include_once "./menu3_$lang.php";

unset($array);