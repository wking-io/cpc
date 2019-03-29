jQuery(document).ready(function(){
    jQuery("#map_submit").on("click", function () {
        var map_name = jQuery("#map_name").val();
        if (jQuery("#map_controller_pan").is(":checked")) {
            var map_controller_pan = jQuery("#map_controller_pan").val();
        }
        else {
            var map_controller_pan = 0;
        }
        if (jQuery("#map_controller_zoom").is(":checked")) {
            var map_controller_zoom = jQuery("#map_controller_zoom").val();
        }
        else {
            var map_controller_zoom = 0;
        }
        if (jQuery("#map_controller_type").is(":checked")) {
            var map_controller_type = jQuery("#map_controller_type").val();
        }
        else {
            var map_controller_type = 0;
        }
        if (jQuery("#map_controller_scale").is(":checked")) {
            var map_controller_scale = jQuery("#map_controller_scale").val();
        }
        else {
            var map_controller_scale = 0;
        }
        if (jQuery("#map_controller_street_view").is(":checked")) {
            var map_controller_street_view = jQuery("#map_controller_street_view").val();
        }
        else {
            var map_controller_street_view = 0;
        }
        if (jQuery("#map_controller_overview").is(":checked")) {
            var map_controller_overview = jQuery("#map_controller_overview").val();
        }
        else {
            var map_controller_overview = 0;
        }
        var map_zoom = jQuery("#map_zoom").val();
        var map_center_lat = jQuery("#map_center_lat").val();
        var map_center_lng = jQuery("#map_center_lng").val();
        var map_width = jQuery("#map_width").val();
        var map_height = jQuery("#map_height").val();
        var map_align = jQuery("#map_align").val();
        var min_zoom = jQuery("#min_zoom").val();
        var max_zoom = jQuery("#max_zoom").val();
        var map_border_radius = jQuery("#map_border_radius").val();
        var open_infowindows_onload = jQuery("#open_infowindows_onload").is(":checked") ? 1 : 0;
        var id = jQuery("#map_id").val();
        var general_data = {
            action: "hugeit_maps_save_map",
            nonce: mapSaveL10n.nonce,
            map_id: id,
            map_name: map_name,
            map_controller_pan: map_controller_pan,
            map_controller_zoom: map_controller_zoom,
            map_controller_type: map_controller_type,
            map_controller_scale: map_controller_scale,
            map_controller_street_view: map_controller_street_view,
            map_controller_overview: map_controller_overview,
            map_zoom: map_zoom,
            min_zoom: min_zoom,
            max_zoom: max_zoom,
            map_center_lat: map_center_lat,
            map_center_lng: map_center_lng,
            map_width: map_width,
            map_height: map_height,
            map_align: map_align,
            map_border_radius: map_border_radius,
            open_infowindows_onload: open_infowindows_onload
        };
        jQuery("#map_submit").parent().find(".spinner").css("visibility","visible");
        jQuery.post(ajaxurl, general_data, function (response) {
            jQuery("#map_submit").parent().find(".spinner").css("visibility","hidden");
            if (response.success) {
                hugeitMapsInitializeAllMaps( id, response );

            } else {

            }
        }, "json");

        return false;
    });

    jQuery('#locator_general_edit_submit').on('click',function () {
        var _this = jQuery(this);
        var locator_data,
            locatorCheck,
            locatorDefaultAddress,
            locatorEnabled;

        locatorDefaultAddress = jQuery('#locator_default_address').val();

        var id = jQuery("#map_id").val();
        if(jQuery("#locator_enabled").is(":checked")){
            locatorEnabled = 1;
        } else {
            locatorEnabled = 0;
        }

        locator_data = {
            action: "hugeit_maps_save_locator",
            nonce: mapSaveL10n.nonce,
            map_id: id,
            locator_enabled: locatorEnabled,
            locator_default_address : locatorDefaultAddress
        };

        _this.siblings('.spinner').css('visibility','visible');
        jQuery.post(ajaxurl, locator_data, function (response) {
            _this.siblings('.spinner').css('visibility','hidden');
            if (!response.success) {
                console.log(response);
            }
        }, "json");
        return false;
    })

});