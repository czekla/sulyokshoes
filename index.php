<?php
session_start();
if (!isset($_SESSION["lang"])) {
    $_SESSION["lang"] = "hu";
}
$lang = $_SESSION["lang"];
require_once "./lang/$lang.php";
?>
<!DOCTYPE html>
<html ng-app="SulyokShoes-app-<?= $lang ?>">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Sulyok Shoes</title>
        <meta name="description" content="My shoes are manufactured traditionally by hand, with original, specialised tools and utmost care."/>
        <meta name="keywords" content="shoemaker, shoes, footwear, design, orthopaedic, manufacturer, custom-made, tailor-made, ready-made, boots"/>
        <meta name="robots" content="index,follow"/>
        
        <link href='http://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'/>
        <link href='http://fonts.googleapis.com/css?family=Cabin+Sketch' rel='stylesheet' type='text/css'/>
        <link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'/>
        
        <link rel="stylesheet" href="css/grid.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <link rel="stylesheet" href="css/touchTouch.css"/>
        <link rel="stylesheet" href="css/camera.css"/>
        <link rel="stylesheet" href="css/bg.css"/>
        <link rel="stylesheet" href="css/flag.css"/>

        <script src="js/jquery.js"></script>
        <script src="js/script.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js"></script>
        <script src="js/app.js"></script>
    </head>
    <body class="unselectable">

        <div id="ac_background" class="ac_background">
            <img class="ac_bgimage" src="images/cipo/cipo3.jpg" alt="Background"/>
            <div class="ac_overlay"></div>
            <div class="ac_loading"></div>
        </div>

        <header id="header">
            <div class="language-selector">
                <form action="lang.php" method="post">
                    <input type="hidden" name="lang" value="hu"/>
                    <input type="submit" value="" class="flag flag-hu"/>
                </form>
                <form action="lang.php" method="post">
                    <input type="hidden" name="lang" value="en"/>
                    <input type="submit" value="" class="flag flag-gb"/>
                </form>
            </div>
            <div id="stuck_container">
                <div class="container">
                    <div class="row">
                        <div class="grid_12">
                            <h1 class="unselectable">Sulyok Shoes<span>Hand made by László Sulyok</span></h1>
                            <nav class="ac_menu">
                                <ul class="sf-menu">
                                    <li><a ui-sref="menu1" ui-sref-active="current" data-bg="images/cipo/cipo3.jpg"><?= $menu1 ?></a></li>
                                    <li><a ui-sref="menu2" ng-class="{current: $state.includes('menu2')}" data-bg="images/cipo/cipo5.jpg"><?= $menu2 ?></a></li>
                                    <li><a ui-sref="menu3" ui-sref-active="current" data-bg="images/cipo/cipo1.jpg"><?= $menu3 ?></a></li>
                                    <li><a ui-sref="menu4" ui-sref-active="current" data-bg="images/cipo/cipo4.jpg"><?= $menu4 ?></a></li>
                                </ul>
                                <ul class="select-menu">
                                    <li><a ui-sref="menu1" ui-sref-active="current" data-bg="images/cipo/cipo3.jpg"><?= $menu1 ?></a></li>
                                    <li><a ui-sref="menu2" ng-class="{current: $state.includes('menu2')}" data-bg="images/cipo/cipo5.jpg"><?= $menu2 ?></a></li>
                                    <li><a ui-sref="menu3" ui-sref-active="current" data-bg="images/cipo/cipo1.jpg"><?= $menu3 ?></a></li>
                                    <li><a ui-sref="menu4" ui-sref-active="current" data-bg="images/cipo/cipo4.jpg"><?= $menu4 ?></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="content">
            <div class="container">
                <div ui-view></div>
            </div>
        </section>

        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="grid_12">
                        <div class="copyright">
                            <pre>© <span id="copyright-year">2015</span> | Sulyok Shoes</pre>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
