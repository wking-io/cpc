jQuery(document).ready(function(){
    jQuery("#polygone_submit").on("click", function () {
        var polygone_name = jQuery("#polygone_name").val();
        var polygone_coords = jQuery("#polygone_coords").val();
        var polygone_line_opacity = jQuery("#polygone_line_opacity").val();
        var polygone_line_color = jQuery("#polygone_line_color").val();
        var polygone_line_width = jQuery("#polygone_line_width").val();
        var polygone_fill_opacity = jQuery("#polygone_fill_opacity").val();
        var polygone_fill_color = jQuery("#polygone_fill_color").val();
        var id = jQuery("#map_id").val();
        var polygon_data = {
            action: "hugeit_maps_save_polygon",
            nonce: polygonSaveL10n.nonce,
            map_id: id,
            polygon_name: polygone_name,
            polygon_coords: polygone_coords,
            polygon_line_opacity: polygone_line_opacity,
            polygon_line_color: polygone_line_color,
            polygon_line_width: polygone_line_width,
            polygon_fill_opacity: polygone_fill_opacity,
            polygon_fill_color: polygone_fill_color
        };
        jQuery("#polygone_submit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, polygon_data, function (response) {
            jQuery("#polygone_submit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps(id, response);
                jQuery("#cancel_polygone").trigger("click");
                jQuery(document).scrollTop(0);
                if (jQuery(".empty_polygon").html() != undefined) {

                    jQuery(".empty_polygon").after("<ul><li class='edit_list has_background' data-list_id='" + response.last_id + "' ><div class='list_number' >1</div><div class='edit_list_item'>" + polygone_name + "</div><div class='edit_polygone_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='+id+'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='polygone' /><input type='hidden' class='edit_list_delete_table' value='g_polygones' /><input type='hidden' name='delete_polygone_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_polygone_list_item' ></a><input type='hidden' class='polygone_edit_id' name='polygone_edit_id' value='" + response.last_id + "' /></div></li></ul>");
                    jQuery(".empty_polygon").remove();
                } else {
                    var last_id = jQuery("#polygone_edit_exist_section .edit_list").last().find(".list_number").html();
                    var this_id = parseInt(last_id) + 1;
                    jQuery("#polygone_edit_exist_section .edit_list").last().after("<li class='edit_list has_background' data-list_id='" + response.last_id + "'><div class='list_number' >" + this_id + "</div><div class='edit_list_item'>" + polygone_name + "</div><div class='edit_polygone_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='+id+'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='polygone' /><input type='hidden' class='edit_list_delete_table' value='g_polygones' /><input type='hidden' name='delete_polygone_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_polygone_list_item' ></a><input type='hidden' class='polygone_edit_id' name='polygone_edit_id' value='" + response.last_id + "' /></div></li>");
                }
            }
        }, "json");
        return false;
    });
    jQuery("#polygone_edit_submit").on("click", function () {
        var polygone_edit_name = jQuery("#polygone_edit_name").val();
        var polygone_edit_coords = jQuery("#polygone_edit_coords").val();
        var polygone_edit_line_opacity = jQuery("#polygone_edit_line_opacity").val();
        var polygone_edit_line_color = jQuery("#polygone_edit_line_color").val();
        var polygone_edit_line_width = jQuery("#polygone_edit_line_width").val();
        var polygone_edit_fill_opacity = jQuery("#polygone_edit_fill_opacity").val();
        var polygone_edit_fill_color = jQuery("#polygone_edit_fill_color").val();
        var map_id = jQuery("#map_id").val();
        var id = jQuery("#polygone_get_id").val();
        var polygon_edit_data = {
            action: 'hugeit_maps_edit_polygon',
            nonce: polygonSaveL10n.nonce,
            map_id: map_id,
            id: id,
            polygone_edit_name: polygone_edit_name,
            polygone_edit_coords: polygone_edit_coords,
            polygone_edit_line_opacity: polygone_edit_line_opacity,
            polygone_edit_line_color: polygone_edit_line_color,
            polygone_edit_line_width: polygone_edit_line_width,
            polygone_edit_fill_opacity: polygone_edit_fill_opacity,
            polygone_edit_fill_color: polygone_edit_fill_color,
        };

        jQuery("#polygone_edit_submit").parent().find('.spinner').css('visibility','visible');

        jQuery.post(ajaxurl, polygon_edit_data, function (response) {
            jQuery("#polygone_edit_submit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps(map_id,response);
                jQuery("#cancel_edit_polygone").trigger("click");
                jQuery(document).scrollTop(0);
                jQuery("#polygone_edit_exist_section li").each(function () {
                    if (jQuery(this).attr("data-list_id") == id) {
                        jQuery(this).find(".edit_list_item").html(polygone_edit_name)
                    }
                });
            }
        }, "json");
        return false;
    })
});