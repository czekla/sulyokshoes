<?php
session_start(); 
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";

$dir = "../kepek/ferficipok";
$image_dir = "./kepek/ferficipok";
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
    $dir = "../kepek/ferficipok/";
    return filemtime($dir.$a) < filemtime($dir.$b);
});

include_once "./menu2_1_$lang.php";

unset($array);