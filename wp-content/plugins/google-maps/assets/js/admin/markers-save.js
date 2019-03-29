jQuery(document).ready(function(){
    jQuery("#marker_submit").on("click", function () {
        var marker_location = jQuery("#marker_location").val();
        var marker_location_lat = jQuery("#marker_location_lat").val();
        var marker_location_lng = jQuery("#marker_location_lng").val();
        var marker_animation = jQuery("#marker_animation").val();
        var marker_title = jQuery("#marker_title").val();
        var marker_description = jQuery("#marker_description").val();
        var id = jQuery("#map_id").val();
        var marker_data = {
            action: "hugeit_maps_save_marker",
            nonce: markerSaveL10n.nonce,
            map_id: id,
            marker_location: marker_location,
            marker_location_lat: marker_location_lat,
            marker_location_lng: marker_location_lng,
            marker_animation: marker_animation,
            marker_title: marker_title,
            marker_description: marker_description,
        };
        jQuery("#marker_submit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, marker_data, function (response) {
            jQuery("#marker_submit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps(id,response);
                jQuery("#cancel_marker").trigger("click");
                jQuery(document).scrollTop(0);
                if (jQuery(".empty_marker").html() != undefined) {

                    jQuery(".empty_marker").after("<ul><li class='edit_list has_background' data-list_id='" + response.last_id + "' ><div class='list_number' >1</div><div class='edit_list_item'>" + marker_title + "</div><div class='edit_marker_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='+id+'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='marker' /><input type='hidden' class='edit_list_delete_table' value='hugeit_maps_markers' /><input type='hidden' name='delete_marker_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_marker_list_item' ></a><input type='hidden' class='marker_edit_id' name='marker_edit_id' value='" + response.last_id + "' /></div></li></ul>");
                    jQuery(".empty_marker").remove();
                } else {
                    var last_id = jQuery("#markers_edit_exist_section .edit_list").last().find(".list_number").html();
                    var this_id = parseInt(last_id) + 1;
                    jQuery("#markers_edit_exist_section .edit_list").last().after("<li class='edit_list has_background' data-list_id='" + response.last_id + "' ><div class='list_number' >" + this_id + "</div><div class='edit_list_item'>" + marker_title + "</div><div class='edit_marker_list_delete edit_list_delete'><form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='+id+'><input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' /><input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='marker' /><input type='hidden' class='edit_list_delete_table' value='hugeit_maps_markers' /><input type='hidden' name='delete_marker_id' class='edit_list_delete_id' value='" + response.last_id + "' /></form><a href='#' class='button' class='edit_marker_list_item' ></a><input type='hidden' class='marker_edit_id' name='marker_edit_id' value='" + response.last_id + "' /></div></li>");
                }

            }
        }, "json");
        return false;
    });
    jQuery("#marker_edit_submmit").on("click", function () {
        var marker_edit_location = jQuery("#marker_edit_location").val();
        var marker_edit_location_lat = jQuery("#marker_edit_location_lat").val();
        var marker_edit_location_lng = jQuery("#marker_edit_location_lng").val();
        var marker_edit_animation = jQuery("#marker_edit_animation").val();
        var marker_edit_title = jQuery("#marker_edit_title").val();
        var marker_edit_description = jQuery("#marker_edit_description").val();
        var id = jQuery("#marker_get_id").val();
        var map_id = jQuery("#map_id").val();
        var marker_edit_data = {
            action: "hugeit_maps_edit_marker",
            nonce: markerSaveL10n.nonce,
            id: id,
            map_id: map_id,
            marker_edit_location: marker_edit_location,
            marker_edit_location_lat: marker_edit_location_lat,
            marker_edit_location_lng: marker_edit_location_lng,
            marker_edit_animation: marker_edit_animation,
            marker_edit_title: marker_edit_title,
            marker_edit_description: marker_edit_description
        };
        jQuery("#marker_edit_submmit").parent().find('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, marker_edit_data, function (response) {
            jQuery("#marker_edit_submmit").parent().find('.spinner').css('visibility','hidden');
            if (response.success) {
                hugeitMapsInitializeAllMaps(map_id, response);
                jQuery("#cancel_edit_marker").trigger("click");
                jQuery(document).scrollTop(0);
                jQuery("#markers_edit_exist_section li").each(function () {
                    if (jQuery(this).attr("data-list_id") == id) {
                        jQuery(this).find(".edit_list_item").html(marker_edit_title)
                    }
                });
            }
        }, "json");
        return false;
    });
});