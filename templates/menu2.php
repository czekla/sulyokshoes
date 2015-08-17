<?php
session_start();
$lang = $_SESSION["lang"];
include_once "../lang/$lang.php";
include_once "./menu2_$lang.php";
?>
<ul class="product-menu">
    <li><a ui-sref=".sub1" ui-sref-active="active-menu" class="btn" lang="<?= $lang ?>"><?= $menu2_1 ?></a></li>
    <li><a ui-sref=".sub2" ui-sref-active="active-menu" class="btn" lang="<?= $lang ?>"><?= $menu2_2 ?></a></li>
</ul>
<div ui-view></div>