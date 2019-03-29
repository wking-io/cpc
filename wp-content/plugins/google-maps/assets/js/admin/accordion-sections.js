/**
 *
 */

jQuery(document).ready(function(){

    jQuery(".editing_heading").on('click', function () {
        var active,parent,content;

        if (jQuery(this).parent().hasClass("active_option_tab")) {

            active = jQuery(this).parent().parent().find(".active_option_tab");

            active.find(".tab_options_hidden_section").css({display: "block"});

            active.find(".tab_options_active_section").css({display: "none"});

            jQuery(this).parent().removeClass("active_option_tab");

            jQuery("#g_map_canvas").trigger("resize");

            parent = jQuery(this).parent();

            content = parent.find(".edit_content");

            content.slideUp(200);

            jQuery("#g_maps > div").addClass("hide");

            jQuery("#g_map_canvas").removeClass("hide");

        } else {
            active = jQuery(this).parent().parent().find(".active_option_tab");

            active.find(".edit_content").slideUp(200);

            active.removeClass("active_option_tab");

            active.find(".tab_options_hidden_section").css({display: "block"});

            active.find(".tab_options_active_section").css({display: "none"});

            jQuery(".marker_image_choose ul li.active").removeClass("active");

            jQuery("#g_map_canvas").trigger("resize");

            jQuery(this).parent().addClass("active_option_tab");

            parent = jQuery(this).parent();

            content = parent.find(".edit_content");

            content.slideDown(200);

            jQuery("#g_maps > div").addClass("hide");

            jQuery("#g_map_canvas").removeClass("hide");

        }
    });

});
