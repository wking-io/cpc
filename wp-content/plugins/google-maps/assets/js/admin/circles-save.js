jQuery(document).ready(function(){
    jQuery("#circle_submit").on("click", function () {
        var circle_name = jQuery("#circle_name").val();
        var circle_center_lat = jQuery("#circle_center_lat").val();
        var circle_center_lng = jQuery("#circle_center_lng").val();
        var circle_marker_show = jQuery(".circle_marker_show:checked").val();
        var circle_radius = jQuery("#circle_radius").val();
        var circle_line_width = jQuery("#circle_line_width").val();
        var circle_line_color = jQuery("#circle_line_color").val();
        var circle_line_opacity = jQuery("#circle_line_opacity").val();
        var circle_fill_color = jQuery("#circle_fill_color").val();
        var circle_fill_opacity = jQuery("#circle_fill_opacity").val();
        var id = jQuery("#map_id").val();
        var circle_data = {
            action: "hugeit_maps_save_circle",
            nonce: circleSaveL10n.nonce,
            map_id: id,
            circle_name: circle_name,
            circle_center_lat: circle_center_lat,
            circle_center_lng: circle_center_lng,
            circle_marker_show: circle_marker_show,
            circle_radius: circle_radius,
            circle_line_width: circle_line_width,
            circle_line_color: circle_line_color,
            circle_line_opacity: circle_line_opacity,
            circle_fill_color: circle_fill_color,
            circle_fill_opacity: circle_fill_opacity
        };
        jQuery("#circle_submit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, circle_data, function (response) {
            jQuery("#circle_submit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps( id, response );
                jQuery("#cancel_circle").trigger("click");
                jQuery(document).scrollTop(0);
                if (jQuery(".empty_circle").html() != undefined) {

                    jQuery(".empty_circle").after("<ul><li class='edit_list has_background' data-list_id='" + response.last_id + "'><div class='list_number' >1</div><div class='edit_list_item'>" + circle_name + "</div><div class='edit_circle_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='" + id + "'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='circle' /><input type='hidden' class='edit_list_delete_table' value='hugeit_maps_circles' /><input type='hidden' name='delete_circle_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_circle_list_item' ></a><input type='hidden' class='circle_edit_id' name='circle_edit_id' value='" + response.last_id + "' /></div></li></ul>");
                    jQuery(".empty_circle").remove();
                } else {
                    var last_id = jQuery("#circle_edit_exist_section .edit_list").last().find(".list_number").html();
                    var this_id = parseInt(last_id) + 1;
                    jQuery("#circle_edit_exist_section .edit_list").last().after("<li class='edit_list has_background' data-list_id='" + response.last_id + "'><div class='list_number' >" + this_id + "</div><div class='edit_list_item'>" + circle_name + "</div><div class='edit_circle_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='" + id + "'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='circle' /><input type='hidden' class='edit_list_delete_table' value='hugeit_maps_circles' /><input type='hidden' name='delete_circle_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_circle_list_item' ></a><input type='hidden' class='circle_edit_id' name='circle_edit_id' value='" + response.last_id + "' /></div></li>");
                }
            }
        }, "json");
        return false;
    });
    jQuery("#circle_edit_submit").on("click", function () {
        var circle_edit_name = jQuery("#circle_edit_name").val();
        var circle_edit_center_lat = jQuery("#circle_edit_center_lat").val();
        var circle_edit_center_lng = jQuery("#circle_edit_center_lng").val();
        var circle_edit_marker_show = jQuery(".circle_edit_marker_show:checked").val();
        var circle_edit_radius = jQuery("#circle_edit_radius").val();
        var circle_edit_line_width = jQuery("#circle_edit_line_width").val();
        var circle_edit_line_color = jQuery("#circle_edit_line_color").val();
        var circle_edit_line_opacity = jQuery("#circle_edit_line_opacity").val();
        var circle_edit_fill_color = jQuery("#circle_edit_fill_color").val();
        var circle_edit_fill_opacity = jQuery("#circle_edit_fill_opacity").val();
        var map_id = jQuery("#map_id").val();
        var id = jQuery("#circle_get_id").val();
        var circle_edit_data = {
            action: "hugeit_maps_edit_circle",
            nonce: circleSaveL10n.nonce,
            map_id: map_id,
            id: id,
            circle_edit_name: circle_edit_name,
            circle_edit_center_lat: circle_edit_center_lat,
            circle_edit_center_lng: circle_edit_center_lng,
            circle_edit_marker_show: circle_edit_marker_show,
            circle_edit_radius: circle_edit_radius,
            circle_edit_line_width: circle_edit_line_width,
            circle_edit_line_color: circle_edit_line_color,
            circle_edit_line_opacity: circle_edit_line_opacity,
            circle_edit_fill_color: circle_edit_fill_color,
            circle_edit_fill_opacity: circle_edit_fill_opacity
        };
        jQuery("#circle_edit_submit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, circle_edit_data, function (response) {
            jQuery("#circle_edit_submit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps( map_id, response );
                jQuery("#cancel_edit_circle").trigger("click");
                jQuery(document).scrollTop(0);
                jQuery("#circle_edit_exist_section li").each(function () {
                    if (jQuery(this).attr("data-list_id") == id) {
                        jQuery(this).find(".edit_list_item").html(circle_edit_name)
                    }
                });
            }
        }, "json");
        return false;
    });
});