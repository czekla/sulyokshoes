<div class="isotope clearfix">
    <?php
    $i = 0;
    foreach ($array as $image) {
        $i++;
        $file = "$image_dir/$image";
        echo "<a href='$file' class=''><div class='img_block' style='background-image:url($file);'><span>$i</span></div><i>+</i></a>";
    }
    ?>
</div>