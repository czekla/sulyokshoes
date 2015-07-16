<?php
session_start();
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";

echo $content2;
?>
<ul>
    <li><a ui-sref="menu2.sub1" ui-sref-active="active-menu"><?= $menu2_1 ?></a></li>
    <li><a ui-sref="menu2.sub2" ui-sref-active="active-menu"><?= $menu2_2 ?></a></li>
</ul>
<div ui-view></div>