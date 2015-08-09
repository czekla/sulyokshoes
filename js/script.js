function include(url) {
    document.write('<script src="' + url + '"></script>');
    return false;
}

/* DEVICE.JS
 ========================================================*/
include('js/device.min.js');

/* migrate library
 ========================================================*/
include('js/jquery-migrate-1.2.1.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* ToTop
 ========================================================*/
include('js/jquery.ui.totop.js');
$(function () {
    $().UItoTop({easingType: 'easeOutQuart'});
});

/* DEVICE.JS AND SMOOTH SCROLLIG
 ========================================================*/
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');

$(function () {
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll({
            step: 150,
            speed: 800
        });
    }
});

/* Copyright Year
 ========================================================*/
//var currentYear = (new Date).getFullYear();
//$(document).ready(function() {
//  $("#copyright-year").text( (new Date).getFullYear() );
//});


/* Background change by menu
 ========================================================*/
include('js/jquery.background.js');

/* camera - carusal text
 ========================================================*/
//include('js/camera.js');
//
//$(function () {
//    $('#camera_wrap').camera({
//        height: '68.125%',
//        thumbnails: false,
//        pagination: true,
//        fx: 'simpleFade',
//        loader: 'none',
//        hover: false,
//        navigation: false,
//        playPause: false,
//        minHeight: "975px"
//    });
//});

/* touchTouch
 ========================================================*/
include('js/touchTouch.jquery.js');

/* Orientation tablet fix
 ========================================================*/
$(function () {
// IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
            ua = navigator.userAgent,
            gestureStart = function () {
                viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
            },
            scaleFix = function () {
                if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                    viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                    document.addEventListener("gesturestart", gestureStart, false);
                }
            };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
                result = ua.match(regM)
        if (!result) {
            $('.sf-menu li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                            function () {
                                return false;
                            },
                            function () {
                                window.location.href = $(this).attr("href");
                            }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
        regV = /ipod|ipad|iphone/gi,
        result = ua.match(regV),
        userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')

/* mobile.customized
 ========================================================*/
include('js/jquery.mobile.customized.min.js');


/* custom hover
 ========================================================*/

//$('.btn').each(function(){
//      var title = $(this).html();
//      $(this).addClass('custom_hover');
//      $(this).html('<span><span>'+title+'</span><strong>'+title+'</strong></span>');
//})