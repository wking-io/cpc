jQuery(document).ready(function(){
    jQuery("#polyline_submit").on("click", function () {
        var polyline_name = jQuery("#polyline_name").val();
        var polyline_coords = jQuery("#polyline_coords").val();
        var polyline_line_opacity = jQuery("#polyline_line_opacity").val();
        var polyline_line_color = jQuery("#polyline_line_color").val();
        var polyline_line_width = jQuery("#polyline_line_width").val();
        var id = jQuery("#map_id").val();
        var polyline_data = {
            action: "hugeit_maps_save_polyline",
            nonce: polylineSaveL10n.nonce,
            map_id: id,
            polyline_name: polyline_name,
            polyline_coords: polyline_coords,
            polyline_line_opacity: polyline_line_opacity,
            polyline_line_color: polyline_line_color,
            polyline_line_width: polyline_line_width
        };

        jQuery("#polyline_submit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, polyline_data, function (response) {
            if (response.success) {
                hugeitMapsInitializeAllMaps( id, response );
                jQuery("#cancel_polyline").trigger("click");
                jQuery(document).scrollTop(0);
                if (jQuery(".empty_polyline").html() != undefined) {

                    jQuery(".empty_polyline").after("<ul><li class='edit_list has_background' data-list_id='" + response.last_id + "'><div class='list_number' >1</div><div class='edit_list_item'>" + polyline_name + "</div><div class='edit_polyline_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='" + id + "'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='polyline' /><input type='hidden' class='edit_list_delete_table' value='hugeit_maps_polylines' /><input type='hidden' name='delete_polyline_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_polyline_list_item' ></a><input type='hidden' class='polyline_edit_id' name='polyline_edit_id' value='" + response.last_id + "' /></div></li></ul>");
                    jQuery(".empty_polyline").remove();
                } else {
                    var last_id = jQuery("#polyline_edit_exist_section .edit_list").last().find(".list_number").html();
                    var this_id = parseInt(last_id) + 1;
                    jQuery("#polyline_edit_exist_section .edit_list").last().after("<li class='edit_list has_background' data-list_id='" + response.last_id + "' ><div class='list_number'>" + this_id + "</div><div class='edit_list_item'>" + polyline_name + "</div><div class='edit_polyline_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='" + id + "'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='polyline' /><input type='hidden' class='edit_list_delete_table' value='hugeit_maps_polylines' /><input type='hidden' name='delete_polyline_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_polyline_list_item' ></a><input type='hidden' class='polyline_edit_id' name='polyline_edit_id' value='" + response.last_id + "' /></div></li>");
                }

            }
        }, "json");
        return false;
    })
    jQuery("#polyline_edit_submit").on("click", function () {
        var polyline_edit_name = jQuery("#polyline_edit_name").val();
        var polyline_edit_coords = jQuery("#polyline_edit_coords").val();
        var polyline_edit_line_opacity = jQuery("#polyline_edit_line_opacity").val();
        var polyline_edit_line_color = jQuery("#polyline_edit_line_color").val();
        var polyline_edit_line_width = jQuery("#polyline_edit_line_width").val();
        var map_id = jQuery("#map_id").val();
        var id = jQuery("#polyline_get_id").val();
        var polyline_edit_data = {
            action: "hugeit_maps_edit_polyline",
            nonce: polylineSaveL10n.nonce,
            id: id,
            map_id: map_id,
            polyline_edit_name: polyline_edit_name,
            polyline_edit_coords: polyline_edit_coords,
            polyline_edit_line_opacity: polyline_edit_line_opacity,
            polyline_edit_line_color: polyline_edit_line_color,
            polyline_edit_line_width: polyline_edit_line_width
        };
        jQuery("#polyline_edit_submit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, polyline_edit_data, function (response) {
            jQuery("#polyline_edit_submit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps(map_id, response);
                jQuery("#cancel_edit_polyline").trigger("click");
                jQuery(document).scrollTop(0);
                jQuery("#polyline_edit_exist_section li").each(function () {
                    if (jQuery(this).attr("data-list_id") == id) {
                        jQuery(this).find(".edit_list_item").html(polyline_edit_name)
                    }
                });
            }
        }, "json")
        return false;
    })
});