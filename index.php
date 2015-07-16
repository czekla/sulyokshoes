<?php 
session_start(); 
if (!isset($_SESSION["lang"])) {
    $_SESSION["lang"] = "hu";
}
$lang = $_SESSION["lang"];
require_once "./lang/$lang.php";
?>
<!DOCTYPE html>
<html ng-app="SulyokShoes-app-<?=$lang?>">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="css/style.css"/>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js"></script>
        <script src="js/app.js"></script>
    </head>
    <body>
        
        <div>
            <form action="lang.php" method="post">
            <input type="hidden" name="lang" value="hu"/>
            <input type="submit" value="hu"/>
        </form>
        <form action="lang.php" method="post">
            <input type="hidden" name="lang" value="en"/>
            <input type="submit" value="en"/>
        </form>
        </div>
        <div>
            <ul>
                <li><a ui-sref="menu1" ui-sref-active="active-menu"><?=$menu1?></a></li>
                <li><a ui-sref="menu2" ui-sref-active="active-menu"><?=$menu2?></a></li>
                <li><a ui-sref="menu3" ui-sref-active="active-menu"><?=$menu3?></a></li>
                <li><a ui-sref="menu4" ui-sref-active="active-menu"><?=$menu4?></a></li>
            </ul>
        </div>
        <div >
            <div ui-view></div>
        </div>
        <?php
        // put your code here
        ?>
    </body>
</html>