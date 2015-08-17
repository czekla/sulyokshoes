<div class="technology">
    <h2>
        My shoes are manufactured traditionally by hand, with original, <br/>specialised tools and utmost care.
    </h2>
    <div class="isotope clearfix">
        <?php
        foreach ($array as $image) {
            $file = "$image_dir/$image";
            echo "<a href='$file' class=''><div class='img_block' style='background-image:url($file);'></div><i>+</i></a>";
        }
        ?>
    </div>
</div>