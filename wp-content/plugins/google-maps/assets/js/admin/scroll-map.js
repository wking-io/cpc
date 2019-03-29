jQuery(document).ready(function(){
    if (jQuery('#g_maps').length) {
        var el = jQuery('#g_maps');
        var elpos_original = el.offset().top;
        jQuery(window).scroll(function () {
            var elpos = el.offset().top;
            var windowpos = jQuery(window).scrollTop();
            var finaldestination = windowpos;
            if (windowpos < elpos_original) {
                finaldestination = elpos_original;
                el.stop().css({'top': 3});
            } else {
                el.stop().animate({'top': finaldestination - elpos_original + 40}, 500);
            }
        });
    }
});