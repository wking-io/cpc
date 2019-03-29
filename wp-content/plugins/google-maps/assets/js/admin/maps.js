function hugeitMapsInitializeAllMaps(id, response){
    hugeitMapsLoadMap(id, "#" + response.hue, response.saturation, response.lightness, response.gamma, response.zoom, response.type, response.bike, response.traffic, response.transit, response.animation, response.draggable, response.wheel_scroll);
    hugeitMapsLoadMarkerMap(id, "#" + response.hue, response.saturation, response.lightness, response.gamma, response.zoom, response.type, response.bike, response.traffic, response.transit);
    hugeitMapsLoadPolygonMap(id, "#" + response.hue, response.saturation, response.lightness, response.gamma, response.zoom, response.type, response.bike, response.traffic, response.transit);
    hugeitMapsLoadPolylineMap(id, "#" + response.hue, response.saturation, response.lightness, response.gamma, response.zoom, response.type, response.bike, response.traffic, response.transit);
    hugeitMapsLoadCircleMap(id, "#" + response.hue, response.saturation, response.lightness, response.gamma, response.zoom, response.type, response.bike, response.traffic, response.transit);
    hugeitMapsLoadLocatorsMap(id, "#" + response.hue, response.saturation, response.lightness, response.gamma, response.zoom, response.type, response.bike, response.traffic, response.transit);
}

var data,
    marker = [],
    infowindow,
    polygone = [],
    polyline = [],
    circle = [],
    newcirclemarker = [],
    directions = [],
    directionMarkers = [],
    geocoder;

function hugeitMapsDeleteItem(id, table, li, x) {
    var delete_data = {
        action: 'hugeit_maps_delete_item',
        nonce: mapL10n.delete_nonce,
        id: id,
        table: table
    };

    jQuery.post(ajaxurl, delete_data, function (response) {
        if (response.success) {
            li.remove();
        }
    }, "json")
}

jQuery(document).ready(function () {

    jQuery('#map_zoom').bind("slider:changed", function (event, data) {
        jQuery(this).parent().find('span').html(parseInt(data.value));
        jQuery(this).val(parseInt(data.value));
        map_admin_view.setZoom(parseInt(jQuery(this).val()))
    });

    jQuery('#map_width').bind("slider:changed", function (event, data) {
        jQuery(this).parent().find('span').html(parseInt(data.value) + "%");
        jQuery(this).val(parseInt(data.value));
    });

    jQuery("#map_name_tab").on("keyup change", function () {
        var name = jQuery(this).val();
        var data = {
            action: 'hugeit_maps_change_map_name',
            nonce: mapL10n.save_nonce,
            id: mapL10n.map.id,
            name: name
        };
        jQuery.post(ajaxurl, data, function (response) {
            if (response.success) {
                jQuery("#map_name").val(name);
            }
        }, 'json')
    });

    jQuery("#map_name").on("keyup change", function () {
        var name = jQuery(this).val();
        var data = {
            action: 'hugeit_maps_change_map_name',
            nonce: mapL10n.save_nonce,
            id:mapL10n.map.id,
            name: name
        };
        jQuery.post(ajaxurl, data, function (response) {
            if (response.success) {
                jQuery("#map_name_tab").val(name);
            }
        }, 'json')
    });

    jQuery(".admin_edit_section_container").on("click",".edit_list_delete_submit", function () {
        var parent = jQuery(this).parent();
        var typeelement = parent.find(".edit_list_delete_type");
        var type = typeelement.val();
        var idelement = parent.find(".edit_list_delete_id");
        var tableelement = parent.find(".edit_list_delete_table");
        var id = idelement.val();
        var table = tableelement.val();
        var li = jQuery(this).parent().parent().parent();
        var x = li.index();
        switch(type){
            case "direction":
                directions[x].setMap(null);
                if(directionMarkers[x])	{
                    for (var o = 0; o < directionMarkers[x].length; o++) {
                        directionMarkers[x][o].setMap(null);
                    }
                    directionMarkers.splice(x,1);
                }

                hugeitMapsDeleteItem(id, table, li, x);
                directions.splice(x,1);
                break;
            case "circle":
                circle[x].setMap(null);
                circle.splice(x,1);
                hugeitMapsDeleteItem(id, table, li, x);
                break;
            case "polygone":
                polygone[x].setMap(null);
                polygone.splice(x,1);
                hugeitMapsDeleteItem(id, table, li, x);
                break;
            case "polyline":
                polyline[x].setMap(null);
                polyline.splice(x,1);
                hugeitMapsDeleteItem(id, table, li, x);
                break;
            case "marker":
                marker[x].setMap(null);
                marker.splice(x,1);
                hugeitMapsDeleteItem(id, table, li, x);
                break;
            case "locator":
                hugeitMapsDeleteItem(id, table, li, x);
                break;
        }
        return false;
    });

    hugeitMapsLoadMap(
        mapL10n.map.id,
        "#"+mapL10n.map.styling_hue,
        mapL10n.map.styling_saturation,
        mapL10n.map.styling_lightness,
        mapL10n.map.styling_gamma,
        mapL10n.map.zoom,
        mapL10n.map.type,
        mapL10n.map.bike_layer,
        mapL10n.map.traffic_layer,
        mapL10n.map.transit_layer,
        mapL10n.map.animation
    );

});
function hugeitMapsLoadMap(id, hue, saturation, lightness, gamma, zoom, type, bike, traffic, transit, animation , draggable, wheel_scroll) {

    data = {
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
        initializeMap(response);
    }).fail(function () {
        console.log('Failed to load response from database');
    });
    function initializeMap(response) {
        if (response.success) {
            window.infowindow = new google.maps.InfoWindow;
            var mapInfo = response.success,
                maps = mapInfo.maps
            for (var i = 0; i < maps.length; i++) {

                var info_type = maps[i].info_type;
                var pan_controller = maps[i].pan_controller;
                var zoom_controller = maps[i].zoom_controller;
                var type_controller = maps[i].type_controller;
                var scale_controller = maps[i].scale_controller;
                var street_view_controller = maps[i].street_view_controller;
                var overview_map_controller = maps[i].overview_map_controller;
                var draggable = maps[i].draggable;
                var wheel_scroll = maps[i].wheel_scroll;
                var mapcenter = new google.maps.LatLng(
                    parseFloat(maps[i].center_lat),
                    parseFloat(maps[i].center_lng)
                );


                geocoder = new google.maps.Geocoder();
                geocoder.geocode({'latLng': mapcenter}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        address = results[0].formatted_address;
                        jQuery("#map_center_addr").val(address);
                    }
                });

                var mapOptions = {
                    zoom: parseInt(zoom),
                    center: mapcenter,
                    disableDefaultUI: true,
                    fullscreenControl: true
                };


                map_admin_view = new google.maps.Map(document.getElementById('g_map_canvas'), mapOptions);

                var input = document.getElementById("map_center_addr");
                var autocomplete = new google.maps.places.Autocomplete(input);
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    var addr = jQuery("#map_center_addr").val();
                    var geocoder = geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': addr}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            address = results[0].geometry.location;
                            map_admin_view.setCenter(address);
                            jQuery("#map_center_lat").val(address.lat());
                            jQuery("#map_center_lng").val(address.lng());
                        }
                    })
                });
                jQuery("#map_center_addr").on("change input", function () {
                    var addr = jQuery("#map_center_addr").val();
                    var geocoder = geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': addr}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            address = results[0].geometry.location;
                            map_admin_view.setCenter(address);
                            jQuery("#map_center_lat").val(address.lat());
                            jQuery("#map_center_lng").val(address.lng());
                        }
                    });
                });
                jQuery(".editing_heading").on("click", function () {
                    google.maps.event.trigger(map_admin_view, 'resize');
                    map_admin_view.setCenter(mapcenter);
                    map_admin_view.setZoom(parseInt(zoom));
                });


                if (pan_controller) {
                    map_admin_view.setOptions({
                        panControl: true
                    })
                } else {
                    map_admin_view.setOptions({
                        panControl: false
                    })
                }

                if (zoom_controller) {
                    map_admin_view.setOptions({
                        zoomControl: true
                    })
                } else {
                    map_admin_view.setOptions({
                        zoomControl: false
                    })
                }

                if (type_controller) {
                    map_admin_view.setOptions({
                        mapTypeControl: true
                    })
                } else {
                    map_admin_view.setOptions({
                        mapTypeControl: false
                    })
                }

                if (scale_controller) {
                    map_admin_view.setOptions({
                        scaleControl: true
                    })
                } else {
                    map_admin_view.setOptions({
                        scaleControl: false
                    })
                }

                if (street_view_controller) {
                    map_admin_view.setOptions({
                        streetViewControl: true
                    })
                } else {
                    map_admin_view.setOptions({
                        streetViewControl: false
                    })
                }

                if (overview_map_controller) {
                    map_admin_view.setOptions({
                        overviewMapControl: true
                    })
                } else {
                    map_admin_view.setOptions({
                        overviewMapControl: false
                    })
                }

                if (draggable) {
                    map_admin_view.setOptions({
                        draggable: true
                    })
                } else {
                    map_admin_view.setOptions({
                        draggable: false
                    })
                }


                if (wheel_scroll) {
                    map_admin_view.setOptions({
                        scrollwheel: true
                    })
                } else {
                    map_admin_view.setOptions({
                        scrollwheel: false
                    })
                }

                jQuery(".map_controller_input").on("click", function () {
                    if (jQuery('#map_controller_pan').is(':checked')) {
                        map_admin_view.setOptions({
                            panControl: true
                        })
                    } else {
                        map_admin_view.setOptions({
                            panControl: false
                        })
                    }

                    if (jQuery('#map_controller_zoom').is(':checked')) {
                        map_admin_view.setOptions({
                            zoomControl: true
                        })
                    } else {
                        map_admin_view.setOptions({
                            zoomControl: false
                        })
                    }

                    if (jQuery('#map_controller_type').is(':checked')) {
                        map_admin_view.setOptions({
                            mapTypeControl: true
                        })
                    } else {
                        map_admin_view.setOptions({
                            mapTypeControl: false
                        })
                    }

                    if (jQuery('#map_controller_scale').is(':checked')) {
                        map_admin_view.setOptions({
                            scaleControl: true
                        })
                    } else {
                        map_admin_view.setOptions({
                            scaleControl: false
                        })
                    }

                    if (jQuery('#map_controller_street_view').is(':checked')) {
                        map_admin_view.setOptions({
                            streetViewControl: true
                        })
                    } else {
                        map_admin_view.setOptions({
                            streetViewControl: false
                        })
                    }

                    if (jQuery('#map_controller_overview').is(':checked')) {
                        map_admin_view.setOptions({
                            overviewMapControl: true
                        })
                    } else {
                        map_admin_view.setOptions({
                            overviewMapControl: false
                        })
                    }
                });
                var markers = mapInfo.markers;
                for (j = 0; j < markers.length; j++) {
                    var name = markers[j].name;
                    var address = markers[j].address;
                    var anim = markers[j].animation;
                    var description = markers[j].description;
                    var markimg = markers[j].img;
                    var img = new google.maps.MarkerImage(markimg,
                        new google.maps.Size(20, 20));
                    var point = new google.maps.LatLng(
                        parseFloat(markers[j].lat),
                        parseFloat(markers[j].lng));
                    var html = "<b>" + name + "</b> <br/>" + address;
                    if (anim == 'DROP') {
                        marker[j] = new google.maps.Marker({
                            map: map_admin_view,
                            position: point,
                            title: name,
                            icon: markimg,
                            content: description,
                            animation: google.maps.Animation.DROP
                        });
                    }
                    if (anim == 'BOUNCE') {
                        marker[j] = new google.maps.Marker({
                            map: map_admin_view,
                            position: point,
                            title: name,
                            content: description,
                            icon: markimg,
                            animation: google.maps.Animation.BOUNCE
                        });
                    }
                    if (anim == 'NONE') {
                        marker[j] = new google.maps.Marker({
                            map: map_admin_view,
                            position: point,
                            icon: markimg,
                            content: description,
                            title: name
                        });
                    }

                    HugeitMapsBindInfoWindow(marker[j], map_admin_view, infowindow, description, info_type);
                }
            }
            var polygones = mapInfo.polygons;
            for (var k = 0; k < polygones.length; k++) {

                var name = polygones[k].name;
                var new_line_opacity = polygones[k].line_opacity;
                var new_line_color = "#" + polygones[k].line_color;
                var new_fill_opacity = polygones[k].fill_opacity;
                var new_line_width = polygones[k].line_width;
                var new_fill_color = "#" + polygones[k].fill_color;
                var latlngs = polygones[k].latlng;
                var hover_new_line_opacity = polygones[k].hover_line_opacity;
                var hover_new_line_color = "#" + polygones[k].hover_line_color;
                var hover_new_fill_opacity = polygones[k].hover_fill_opacity;
                var hover_new_fill_color = "#" + polygones[k].hover_fill_color;
                polygoncoords = [];
                for (var g = 0; g < latlngs.length; g++) {
                    polygonpoints = new google.maps.LatLng(parseFloat(latlngs[g].lat),
                        parseFloat(latlngs[g].lng));
                    polygoncoords.push(polygonpoints);
                }

                polygone[k] = new google.maps.Polygon({
                    paths: polygoncoords,
                    map: map_admin_view,
                    strokeOpacity: new_line_opacity,
                    strokeColor: new_line_color,
                    strokeWeight: new_line_width,
                    fillOpacity: new_fill_opacity,
                    fillColor: new_fill_color,
                    draggable: false
                });


            }
            var polylines = mapInfo.polylines;
            for (var q = 0; q < polylines.length; q++) {
                var name = polylines[q].name;
                var line_opacity = polylines[q].line_opacity;
                var line_color = polylines[q].line_color;
                var line_width = polylines[q].line_width;
                var latlngs = polylines[q].latlng;
                var newpolylinecoords = [];
                for (var g = 0; g < latlngs.length; g++) {
                    polylinepoints = new google.maps.LatLng(parseFloat(latlngs[g].lat),
                        parseFloat(latlngs[g].lng));
                    newpolylinecoords.push(polylinepoints)
                }
                polyline[q] = new google.maps.Polyline({
                    path: newpolylinecoords,
                    map: map_admin_view,
                    strokeColor: "#" + line_color,
                    strokeOpacity: line_opacity,
                    strokeWeight: line_width
                });
            }
            var circles = mapInfo.circles;
            for (var u = 0; u < circles.length; u++) {
                var circle_name = circles[u].name;
                var circle_center_lat = circles[u].center_lat;
                var circle_center_lng = circles[u].center_lng;
                var circle_radius = circles[u].radius;
                var circle_line_width = circles[u].line_width;
                var circle_line_color = circles[u].line_color;
                var circle_line_opacity = circles[u].line_opacity;
                var circle_fill_color = circles[u].fill_color;
                var circle_fill_opacity = circles[u].fill_opacity;
                var circle_show_marker = parseInt(circles[u].show_marker);
                circlepoint = new google.maps.LatLng(parseFloat(circles[u].center_lat),
                    parseFloat(circles[u].center_lng));
                circle[u] = new google.maps.Circle({
                    map: map_admin_view,
                    center: circlepoint,
                    title: name,
                    radius: parseInt(circle_radius),
                    strokeColor: "#" + circle_line_color,
                    strokeOpacity: circle_line_opacity,
                    strokeWeight: circle_line_width,
                    fillColor: "#" + circle_fill_color,
                    fillOpacity: circle_fill_opacity
                });

                if (circle_show_marker) {
                    newcirclemarker[i] = new google.maps.Marker({
                        position: circlepoint,
                        map: map_admin_view,
                        title: circle_name
                    })
                }
            }

            var info_directions = mapInfo.directions;
            for( var d = 0; d < info_directions.length; d++ ){
                var dir_name = info_directions[d].name;
                var dir_start_lat = info_directions[d].start_lat;
                var dir_start_lng = info_directions[d].start_lng;
                var dir_end_lat = info_directions[d].end_lat;
                var dir_end_lng = info_directions[d].end_lng;
                var dir_show_steps = info_directions[d].show_steps;
                var dir_travel_mode = info_directions[d].travel_mode;
                var dir_line_width = info_directions[d].line_width;
                var dir_line_color = info_directions[d].line_color;
                var dir_line_opacity = info_directions[d].line_opacity;
                var dir_show_steps = info_directions[d].show_steps == 1;

                var request = {
                    destination: new google.maps.LatLng(parseFloat(dir_end_lat),
                        parseFloat(dir_end_lng)),
                    origin: new google.maps.LatLng(parseFloat(dir_start_lat),
                        parseFloat(dir_start_lng)),
                    travelMode: google.maps.TravelMode[dir_travel_mode]
                };
            }



        }

    }
}
function HugeitMapsBindInfoWindow(marker, map, infowindow, description, info_type) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(description);
        infowindow.open(map, marker);
    });

}
function hugeitMapsAttachInstructionText(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, 'click', function() {
        /*Open an info window when the marker is clicked on, containing the text of the step.*/
        stepDisplay.setContent(text);
        stepDisplay.open(map, marker);
    });
}