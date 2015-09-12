<?php
session_start(); 
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";

$dir = "../kepek/noicipok";
$image_dir = "./kepek/noicipok";
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
usort($array, function($a, $b) {
    return filemtime($a) < filemtime($b);
});

include_once "./menu2_2_$lang.php";

unset($array);