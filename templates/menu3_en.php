<div class="technology">
    <p>
        My shoes are manufactured traditionally by hand, with original, specialised tools and utmost care.
    </p>
    <div class="isotope clearfix">
        <?php
        foreach ($array as $image) {
            $file = "$image_dir/$image";
            echo "<a href='$file' class=''><div class='img_block' style='background-image:url($file);'></div><i>+</i></a>";
        }
        ?>
    </div>
</div>