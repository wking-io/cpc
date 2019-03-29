jQuery(document).ready(function () {
    jQuery('#hugeitmapinsert').on('click', function () {
        var id = jQuery('#huge_it_map_select option:selected').val();

        window.send_to_editor('[huge_it_maps id="' + id + '"]');
        tb_remove();
        var name = jQuery("#map_name").val();
        var type = jQuery("#map_type").val();
        var width = jQuery("#map_width").val();
        var height = jQuery("#map_height").val();
        var align = jQuery("#map_align").val();
        id = jQuery('#huge_it_map_select option:selected').val();
        var data = {
            action: "hugeit_maps_save_shortcode_options",
            nonce: inlinePopupL10n.nonce,
            map_id: id,
            name: name,
            type: type,
            width: width,
            height: height,
            align: align
        };
        jQuery.post(ajaxurl, data, function (response) {}, "json");
        return false;
    });
    jQuery("#huge_it_map_select").on("change", function () {
        var name = jQuery("#map_name").val();
        var type = jQuery("#map_type").val();
        var width = jQuery("#map_width").val();
        var height = jQuery("#map_height").val();
        var align = jQuery("#map_align").val();
        id = jQuery('#huge_it_map_select option:selected').val();
        var data = {
            action: "hugeit_maps_shortcode_change_map",
            nonce: inlinePopupL10n.nonce,
            map_id: id,
            name: name,
            type: type,
            width: width,
            height: height,
            align: align
        };
        jQuery.post(ajaxurl, data, function (response) {
            if (response.success) {
                jQuery("#map_name").val(response.name);
                if (response.type == "ROADMAP") {
                    jQuery("#map_type option").eq(0).attr("selected", "selected");
                }
                if (response.type == "SATELLITE") {
                    jQuery("#map_type option").eq(1).attr("selected", "selected");
                }
                if (response.type == "HYBRID") {
                    jQuery("#map_type option").eq(2).attr("selected", "selected");
                }
                if (response.type == "TERRAIN") {
                    jQuery("#map_type option").eq(3).attr("selected", "selected");
                }
                jQuery("#map_width").simpleSlider("setValue", response.width);
                if (response.align == "left") {
                    jQuery("#map_align option").eq(0).attr("selected", "selected");
                }
                if (response.align == "center") {
                    jQuery("#map_align option").eq(1).attr("selected", "selected");
                }
                if (response.align == "right") {
                    jQuery("#map_align option").eq(2).attr("selected", "selected");
                }
                jQuery("#map_height").val(response.height);
                jQuery("#map_border_radius").val(response.border_radius);
            }
        }, "json")
        return false;
    });
    jQuery('#map_width').bind("slider:changed", function (event, data) {
        jQuery(this).parent().find('span').html(data.value + "%");
        jQuery(this).val(data.value);
    });
});