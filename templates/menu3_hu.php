<div class="technology">
    <p>
        Cipőimet hagyományosan kézzel eredeti, különleges cipészszerszámokkal, aprólékos munkával készítem. 
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
