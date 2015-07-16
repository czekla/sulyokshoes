<?php
session_start(); 
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";

echo $content4;