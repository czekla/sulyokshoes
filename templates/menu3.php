<?php
session_start(); 
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";
include_once "./menu3_$lang.php";