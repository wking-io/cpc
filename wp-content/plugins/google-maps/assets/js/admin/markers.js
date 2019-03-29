var marker = [];
var infowindow = [];
var newmarker;
var geocoder;
var markeredit;

jQuery(document).ready(function () {
    hugeitMapsLoadMarkerMap(
        markerL10n.map.id,
        markerL10n.map.styling_hue,
        markerL10n.map.styling_saturation,
        markerL10n.map.styling_lightness,
        markerL10n.map.styling_gamma,
        markerL10n.map.zoom,
        markerL10n.map.type,
        markerL10n.map.bike_layer,
        markerL10n.map.traffic_layer,
        markerL10n.map.transit_layer
    );
});
function hugeitMapsLoadMarkerMap(id, hue, saturation, lightness, gamma, zoom, type, bike, traffic, transit) {
    var data = {
        action: 'hugeit_maps_get_info',
        map_id: id
    };
    jQuery.ajax({
        url: ajaxurl,
        dataType: 'json',
        method: 'post',
        data: data,
        beforeSend: function () {
        }
    }).done(function (response) {
        HGinitializeMarkerMap(response);
    }).fail(function () {
        console.log('Failed to load response from database');
    });
    function HGinitializeMarkerMap(response) {
        if (response.success) {
            var mapInfo = response.success;
            var maps = mapInfo.maps;
            for (var i = 0; i < maps.length; i++) {
                var mapcenter = new google.maps.LatLng(
                    parseFloat(maps[i].center_lat),
                    parseFloat(maps[i].center_lng));
                var mapOptions = {
                    zoom: parseInt(zoom),
                    center: mapcenter,
                };
                map = new google.maps.Map(document.getElementById('g_map_marker'), mapOptions);
                map_marker_edit = new google.maps.Map(document.getElementById('g_map_marker_edit'), mapOptions);
                jQuery("#marker_pic").on("change", function () {
                    jQuery("#marker_pic_name").val(jQuery(this).val());
                });

                var input_marker = document.getElementById("marker_location");
                var autocomplete_marker = new google.maps.places.Autocomplete(input_marker);
                google.maps.event.addListener(autocomplete_marker, 'place_changed', function () {

                    var addr = jQuery("#marker_location").val();
                    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': addr}, function (results, status) {
                        if (newmarker) {
                            newmarker.setPosition(results[0].geometry.location)
                        }
                        else {
                            hugeitMapsPlaceMarker(results[0].geometry.location)
                        }
                        map.setCenter(results[0].geometry.location);
                        hugeitMapsUpdateMarkerInputs(results[0].geometry.location);
                    });
                });

                jQuery("#marker_add_button").on("click", function () {
                    jQuery(".marker_image_choose").find(".active").removeClass("active");
                    jQuery("#marker_location").val("");
                    jQuery("#marker_description").val("");
                    jQuery("#marker_title").val("");
                    jQuery("#marker_location_lat").val("");
                    jQuery("#marker_location_lng").val("");
                    google.maps.event.trigger(map, 'resize');
                    map.setCenter(mapcenter);
                    if (newmarker) {
                        newmarker.setMap(null);
                    }
                });
                if (type == "ROADMAP") {
                    map.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP});
                    map_marker_edit.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP})
                }
                if (type == "SATELLITE") {
                    map.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
                    map_marker_edit.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
                }
                if (type == "HYBRID") {
                    map.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
                    map_marker_edit.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
                }
                if (type == "TERRAIN") {
                    map.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
                    map_marker_edit.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
                }

                google.maps.event.addListener(map, 'rightclick', function (event) {
                    hugeitMapsPlaceMarker(event.latLng);
                    hugeitMapsUpdateMarkerInputs(event.latLng);
                });

                jQuery("#marker_animation").off("change");
                jQuery("#marker_animation").on("change", function () {
                    var animation = jQuery(this).val();
                    if (newmarker) {
                        if (animation == "BOUNCE") {
                            newmarker.setAnimation(google.maps.Animation.BOUNCE)
                        }
                        if (animation == "DROP") {
                            newmarker.setAnimation(google.maps.Animation.DROP)
                        }
                        if (animation == "NONE") {
                            newmarker.setAnimation(null);
                        }
                    }
                })


                jQuery("#marker_location_lat #marker_location_lng").off("change");
                jQuery("#marker_location_lat #marker_location_lng").on("change", function () {
                    var lat = parseFloat(jQuery("#marker_location_lat").val());
                    var lng = parseFloat(jQuery("#marker_location_lng").val());
                    var position = new google.maps.LatLng(lat, lng);
                    hugeitMapsPlaceMarker(position);

                });
                var markers = mapInfo.markers;

                jQuery(".edit_marker_list_delete a").off("click");
                jQuery(".edit_marker_list_delete a").on("click", function () {
                    jQuery("#marker_edit_pic").on("change", function () {
                        jQuery("#marker_edit_pic_name").val(jQuery(this).val());
                    })
                    var parent = jQuery(this).parent();
                    var idelement = parent.find(".marker_edit_id");
                    var markerid = idelement.val();
                    jQuery("#g_maps > div").not("#g_map_polygon").addClass("hide");
                    jQuery("#g_map_marker_edit").removeClass("hide");
                    jQuery("#markers_edit_exist_section").hide(200).addClass("tab_options_hidden_section");
                    jQuery(this).parentsUntil(".editing_section").find(".update_list_item").show(200).addClass("tab_options_active_section");
                    jQuery("#marker_add_button").hide(200).addClass("tab_options_hidden_section");
                    jQuery("#marker_get_id").val(markerid);
                    var markers = mapInfo.markers;
                    for (var y = 0; y < markers.length; y++) {
                        var id = markers[y].id;
                        if (markerid == id) {
                            var name = markers[y].name;
                            var address = markers[y].address;
                            var anim = markers[y].animation;
                            var description = markers[y].description;


                            var lat = markers[y].lat;
                            var lng = markers[y].lng;
                            var img = markers[y].img;
                            var img_size = markers[y].size;

                            jQuery("#image_edit_size_"+img_size).attr("selected", "selected");

                            var point = new google.maps.LatLng(
                                parseFloat(markers[y].lat),
                                parseFloat(markers[y].lng));


                            map_marker_edit.setCenter(point);

                            google.maps.event.trigger(map_marker_edit, 'resize');
                            map_marker_edit.setCenter(point);
                            jQuery("#marker_edit_location_lat").val(lat);
                            jQuery("#marker_edit_location_lng").val(lng);
                            jQuery("#marker_edit_animation").val(anim);
                            jQuery("#marker_edit_title").val(name);
                            jQuery("#marker_edit_description").val(description);
                            jQuery("#marker_edit_pic").val(img);
                            if (markeredit) {
                                markeredit.setMap(null);
                            }
                            markeredit = new google.maps.Marker({
                                map: map_marker_edit,
                                position: point,
                                title: name,
                                content: description,
                                animation: google['maps']['Animation'][anim],
                                draggable: true
                            });
                            google.maps.event.addListener(map_marker_edit, 'rightclick', function (event) {
                                if (markeredit) {
                                    markeredit.setPosition(event.latLng);
                                }
                                hugeitMapsUpdateMarkerEditInputs(event.latLng);
                            });

                            google.maps.event.addListener(markeredit, 'drag', function (event) {

                                hugeitMapsUpdateMarkerEditInputs(event.latLng);
                            });

                            var input_edit_marker = document.getElementById("marker_edit_location");
                            var autocomplete_edit_marker = new google.maps.places.Autocomplete(input_edit_marker);
                            google.maps.event.addListener(autocomplete_edit_marker, 'place_changed', function () {

                                var addr = jQuery("#marker_edit_location").val();
                                geocoder = new google.maps.Geocoder();
                                geocoder.geocode({'address': addr}, function (results, status) {
                                    if (markeredit) {
                                        markeredit.setPosition(results[0].geometry.location)
                                    }
                                    map_marker_edit.setCenter(results[0].geometry.location);
                                    hugeitMapsUpdateMarkerEditInputs(results[0].geometry.location);
                                })
                            })

                            hugeitMapsUpdateMarkerEditInputs(markeredit.getPosition());
                        }
                    }
                    google.maps.event.trigger(map_marker_edit, 'resize');
                    jQuery("#marker_edit_animation").off("change");
                    jQuery("#marker_edit_animation").on("change", function () {
                        var animation = jQuery(this).val();
                        if (markeredit) {
                            if (animation == "BOUNCE") {
                                markeredit.setAnimation(google.maps.Animation.BOUNCE)
                            }
                            if (animation == "DROP") {
                                markeredit.setAnimation(google.maps.Animation.DROP)
                            }
                            if (animation == "NONE") {
                                markeredit.setAnimation(null);
                            }
                        }
                    })
                    jQuery("#marker_edit_pic").off("change");
                    jQuery("#marker_edit_pic").on("change", function () {
                        var name = jQuery(this).val();
                        jQuery(this).parent().parent().find("#marker_image_choose").find(".active").removeClass("active");
                        if (name != "") {
                            markeredit.setIcon(name);
                            jQuery('#marker_edit_pic_name').val(name);
                        }
                    })


                    jQuery(".marker_image_choose_button").on("click", function () {
                        var name = jQuery(this).val();
                        var size = jQuery("#marker_edit_image_size").val();
                        jQuery("#marker_pic").val("");
                        if (markeredit) {
                            if (name == 'default') {
                                markeredit.setIcon(null);
                            } else {
                                markeredit.setIcon(markerL10n.icons_url + name + "" + size + ".png");
                            }
                        }
                    })



                    return false;
                })
            }

        }
    }
}
function hugeitMapsPlaceMarker(location) {
    if (newmarker) {
        newmarker.setMap(map);
        newmarker.setPosition(location);
    }
    else {
        newmarker = new google.maps.Marker({
            map: map,
            position: location,
            title: "new point",
            draggable: true
        })
    }
    google.maps.event.addListener(newmarker, 'drag', function (event) {
        hugeitMapsUpdateMarkerInputs(event.latLng);
    });
}
function hugeitMapsUpdateMarkerInputs(location) {
    jQuery("#marker_location_lat").val(location.lat());
    jQuery("#marker_location_lng").val(location.lng());
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': location}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            address = results[0].formatted_address;
            jQuery("#marker_location").val(address);
        }
    })
}

function hugeitMapsUpdateMarkerEditInputs(location) {
    jQuery("#marker_edit_location_lat").val(location.lat());
    jQuery("#marker_edit_location_lng").val(location.lng());
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': location}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            address = results[0].formatted_address;
            jQuery("#marker_edit_location").val(address);
        }
    })
}
