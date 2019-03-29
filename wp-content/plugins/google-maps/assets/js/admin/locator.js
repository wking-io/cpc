editLocator = false;
jQuery(document).ready(function(){
    if( typeof locatorL10n.map == "object" && locatorL10n.map != null ){
        hugeitMapsLoadLocatorsMap(
            locatorL10n.map.id,
            locatorL10n.map.styling_hue,
            locatorL10n.map.styling_saturation,
            locatorL10n.map.styling_lightness,
            locatorL10n.map.styling_gamma,
            locatorL10n.map.zoom,
            locatorL10n.map.type,
            locatorL10n.map.bike_layer,
            locatorL10n.map.traffic_layer,
            locatorL10n.map.transit_layer
        );
    }
});

function hugeitMapsLoadLocatorsMap(id, hue, saturation, lightness, gamma, zoom, type, bike, traffic, transit) {
    data = {
        action: 'hugeit_maps_get_info',
        map_id: id
    };
    jQuery.ajax({
        url: ajaxurl,
        dataType: 'json',
        method: 'post',
        data: data,
        beforeSend: function () {}
    }).done(function (response) {
        hugeitMapsInitializeLocatorMap(response);
    }).fail(function () {
        console.log('Failed to load response from database');
    });

    function hugeitMapsInitializeLocatorMap(response){
        if( !response.success ){
            return false;
        }

        var mapInfo = response.success;
        var maps = mapInfo.maps;
        for (var i = 0; i < maps.length; i++) {
            var trafficLayer = new google.maps.TrafficLayer();
            var trafficLayer1 = new google.maps.TrafficLayer();
            var bikeLayer = new google.maps.BicyclingLayer();
            var bikeLayer1 = new google.maps.BicyclingLayer();
            var transitLayer = new google.maps.TransitLayer();
            var transitLayer1 = new google.maps.TransitLayer();
            mapcenter = new google.maps.LatLng(
                parseFloat(maps[i].center_lat),
                parseFloat(maps[i].center_lng));
            var styles = [
                {
                    stylers: [
                        {hue: hue},
                        {saturation: saturation},
                        {lightness: lightness},
                        {gamma: gamma}
                    ]
                }
            ];
            var mapOptions = {
                zoom: parseInt(zoom),
                center: mapcenter,
                styles: styles
            };

            var input        = document.getElementById('locator_edit_addr');
            var autocomplete = new google.maps.places.Autocomplete(input);
            var searchBox    = new google.maps.places.SearchBox(input);
            var geocoder = new google.maps.Geocoder();
            google.maps.event.addDomListener(searchBox,'places_changed',function () {
                var address= document.getElementById('locator_edit_addr').value;
                geocoder.geocode({'address': address}, function(results, status) {
                    if (status === 'OK') {

                        document.getElementById('locator_edit_lat').value = results[0].geometry.location.lat();
                        document.getElementById('locator_edit_lng').value = results[0].geometry.location.lng();

                    }
                    else {

                        alert('Geocode was not successful for the following reason: ' + status);
                    }

                });

            });


            jQuery(".edit_locator_list_delete a").on("click",function(){
                editLocator = false;
                editDirectionCoords = [];
                editDirectionsDisplay = false;
                editDirectionMode = 'DRIVING';
                editDirectionShowSteps = false;

                var parent = jQuery(this).parent();
                var idelement = parent.find(".locator_edit_id");
                var locatorid = idelement.val();
    /* Temporarily unnecessary              jQuery("#g_maps > div").addClass("hide");*/
                jQuery("#g_map_locator_edit").removeClass("hide");
                jQuery("#locator_edit_exist_section").hide(200).addClass("tab_options_hidden_section");
                jQuery(this).parent().parent().parent().parent().parent().find(".update_list_item").show(200).addClass("tab_options_active_section");
                jQuery("#locator_add_button").hide(200).addClass("tab_options_hidden_section");

                jQuery("#locator_get_id").val(locatorid);

                var info_locators = mapInfo.locators;

                for (var e = 0; e < info_locators.length; e++) {
                    var id = info_locators[e].id;
                    if (locatorid != id) {
                        continue;
                    }

                    var locator_name = info_locators[e].name;
                    var locator_lat = info_locators[e].locator_lat;
                    var locator_lng = info_locators[e].locator_lng;
                    var locator_addr = info_locators[e].locator_addr;
                    var locator_phone = info_locators[e].locator_phone;
                    var locator_days  = info_locators[e].locator_days;
                    jQuery("#locator_edit_name").val(locator_name);
                    jQuery("#locator_edit_lat").val(locator_lat);
                    jQuery("#locator_edit_lng").val(locator_lng);
                    jQuery("#locator_edit_addr").val(locator_addr);
                    jQuery("#locator_edit_phone").val(locator_phone);
                    jQuery("#locator_edit_days").val(locator_days);

                    //Assign values to Operating Days from JSON
                    var assignLocDays = JSON.parse(locator_days);

                    for(var i in assignLocDays){
                        for(var j in assignLocDays[i]){
                            jQuery("#store_edit_days").find("#"+i).find("input[name="+j+"]").val(assignLocDays[i][j]);
                        }
                    }
                    //Assign values to Operating Days


                }
                return false;
            });

            //Timepicker


            jQuery(".timepicker").timepicker({});
            jQuery("#store_days input[type='text'], textarea").attr('spellcheck',false);
            jQuery("#store_edit_days input[type='text'], textarea").attr('spellcheck',false);


            //Timepicker

        }

    }
}

