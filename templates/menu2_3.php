<?php
session_start(); 
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";

$dir = "../kepek/extrak";
$image_dir = "./kepek/extrak";
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
    $dir = "../kepek/extrak/";
    return filemtime($dir.$a) < filemtime($dir.$b);
});

include_once "./menu2_3_$lang.php";

unset($array);