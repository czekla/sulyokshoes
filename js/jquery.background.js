$(function () {
    var $ac_background = $('#ac_background'),
            $ac_bgimage = $ac_background.find('.ac_bgimage'),
            $ac_loading = $ac_background.find('.ac_loading'),
            $menu = $('.ac_menu'),
            $mainNav = $menu.find('ul:first'),
            $menuItems = $mainNav.children('li'),
            $offset = $menu.offset().top;
            $ItemImages = new Array();

    $menuItems.each(function (i) {
        $ItemImages.push($(this).children('a:first').attr('data-bg'));
    });
    $ItemImages.push($ac_bgimage.attr('src'));

    var Menu = (function () {
        var init = function () {
            loadPage();
            initWindowEvent();
        },
                loadPage = function () {
                    $ac_loading.show();
                    $.when(loadImages()).done(function () {
                        $.when(showBGImage()).done(function () {
                            $ac_loading.hide();
                            initEventsSubMenu();
                        });
                    });
                },
                showBGImage = function () {
                    return $.Deferred(
                            function (dfd) {
                                adjustImageSize($ac_bgimage);
                                $ac_bgimage.fadeIn(1000, dfd.resolve);
                            }
                    ).promise();
                },
                initEventsSubMenu = function () {
                    $menuItems.each(function (i) {
                        var $item = $(this), 
                                $el_title = $item.children('a:first'),
                                el_image = $el_title.attr('data-bg');
                        $el_title.bind('click.Menu', function (e) {
                            //$('html, body').stop().animate({scrollTop: $offset}, 1200, 'easeInOutQuad');
                            showItemImage(el_image);
                            return false;
                        });
                    });
                },
                showItemImage = function (source) {
                    if ($ac_bgimage.attr('src') === source)
                        return false;

                    var $itemImage = $('<img src="' + source + '" alt="Background" class="ac_bgimage"/>');

                    $ac_background.find('img').each(function () {
                        var $this = $(this);
                        $this.stop().fadeOut(1500, function () {
                            $(this).remove();
                        });
                    });
                    $itemImage.insertBefore($ac_bgimage);
                    adjustImageSize($itemImage);
                    $itemImage.stop().fadeIn(1500);
                    $ac_bgimage = $itemImage;
                },
                initWindowEvent = function () {
                    $(window).bind('resize.Menu', function (e) {
                        adjustImageSize($ac_bgimage);
                    });
                },
                adjustImageSize = function ($img) {
                    var w_w = $(window).width(),
                            w_h = $(window).height(),
                            r_w = w_h / w_w,
                            i_w = $img.width(),
                            i_h = $img.height(),
                            r_i = i_h / i_w,
                            new_w, new_h,
                            new_left, new_top;

                    if (r_w > r_i) {
                        new_h = w_h;
                        new_w = w_h / r_i;
                    }
                    else {
                        new_h = w_w * r_i;
                        new_w = w_w;
                    }

                    $img.css({
                        width: new_w + 'px',
                        height: new_h + 'px',
                        left: (w_w - new_w) / 2 + 'px',
                        top: (w_h - new_h) / 2 + 'px'
                    });
                },
                loadImages = function () {
                    return $.Deferred(
                            function (dfd) {
                                var total_images = $ItemImages.length,
                                        loaded = 0;
                                for (var i = 0; i < total_images; ++i) {
                                    $('<img/>').load(function () {
                                        ++loaded;
                                        if (loaded === total_images)
                                            dfd.resolve();
                                    }).attr('src', $ItemImages[i]);
                                }
                            }
                    ).promise();
                };
                
        return {
            init: init
        };
    })();
    
    Menu.init();
});