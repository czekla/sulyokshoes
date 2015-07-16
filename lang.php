<?php
session_start();

$lang = $_REQUEST["lang"];
$_SESSION["lang"] = $lang;

header("Location: index.php");