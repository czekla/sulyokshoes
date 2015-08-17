<div class="technology">
    <h2>
        Cipőimet hagyományosan kézzel eredeti, különleges cipészszerszámokkal, <br/>aprólékos munkával készítem. 
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
