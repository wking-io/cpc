var data;
var polyline = [];
var polylinemarker = [];
var i = 0;
var newpolyline;
var polylineedit;
var newpolylinecoords = [];
var polylineeditmarker = [];
var polylineeditcoords = [];
jQuery(document).ready(function () {
    hugeitMapsLoadPolylineMap(
        polylineL10n.map.id,
        polylineL10n.map.styling_hue,
        polylineL10n.map.styling_saturation,
        polylineL10n.map.styling_lightness,
        polylineL10n.map.styling_gamma,
        polylineL10n.map.zoom,
        polylineL10n.map.type,
        polylineL10n.map.bike_layer,
        polylineL10n.map.traffic_layer,
        polylineL10n.map.transit_layer
    );

});
function hugeitMapsLoadPolylineMap(id, hue, saturation, lightness, gamma, zoom, type, bike, traffic, transit) {
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
        hugeitMapsInitializePolylineMap(response);
    }).fail(function () {
        console.log('Failed to load response from database');
    });
    function hugeitMapsInitializePolylineMap(response) {
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
                mappolyline = new google.maps.Map(document.getElementById('g_map_polyline'), mapOptions);
                map_polyline_edit = new google.maps.Map(document.getElementById('g_map_polyline_edit'), mapOptions);

                jQuery("#polyline_add_button").on("click", function () {

                    jQuery("#polyline_name").val("");
                    jQuery("#polyline_coords").val("");
                    jQuery("#polyline_line_opacity").simpleSlider("setValue", 0.9);
                    jQuery( '#polyline_line_color' )[0].jscolor.fromString('18A326');

                    jQuery("#polyline_line_width").simpleSlider("setValue", 5);
                    jQuery( '#hover_polyline_line_color' )[0].jscolor.fromString('11A000');
                    jQuery("#hover_polyline_line_opacity").simpleSlider("setValue", 0.5);

                    google.maps.event.trigger(mappolyline, 'resize');
                    mappolyline.setCenter(mapcenter);
                    if (newpolyline) {
                        newpolyline.setMap(null);

                        newpolylinecoords = [];
                        for (var i = 0; i < polylinemarker.length; i++) {
                            polylinemarker[i].setMap(null);
                        }
                        polylinemarker = [];
                    }
                })

                if (type == "ROADMAP") {
                    mappolyline.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP})
                    map_polyline_edit.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP})
                }
                if (type == "SATELLITE") {
                    mappolyline.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
                    map_polyline_edit.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
                }
                if (type == "HYBRID") {
                    mappolyline.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
                    map_polyline_edit.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
                }
                if (type == "TERRAIN") {
                    mappolyline.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
                    map_polyline_edit.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
                }

                google.maps.event.addListener(mappolyline, 'rightclick', function (event) {
                    hugeitMapsPlacePolyline(event.latLng);
                    hugeitMapsUpdatePolylineInputs(event.latLng);
                });

                jQuery(".polyline_options_input").on("change", function () {
                    var polyline_line_color = "#" + jQuery('#polyline_line_color').val();
                    var polyline_line_opacity = jQuery('#polyline_line_opacity').val();
                    var polyline_line_width = jQuery('#polyline_line_width').val();
                    if (newpolyline) {
                        newpolyline.setOptions({
                            strokeColor: polyline_line_color,
                            strokeWeight: polyline_line_width,
                            strokeOpacity: polyline_line_opacity
                        });
                    }
                });


                jQuery(".edit_polyline_list_delete a").on("click", function () {
                    if (polylineedit) {
                        polylineedit.setMap(null);
                        for (var i = 0; i < polylineeditmarker.length; i++) {
                            polylineeditmarker[i].setMap(null);
                        }
                        polylineeditmarker = [];
                        polylineeditcoords = [];
                    }
                    var parent = jQuery(this).parent();
                    var idelement = parent.find(".polyline_edit_id");
                    var polylineid = idelement.val();
                    jQuery("#g_maps > div").addClass("hide");
                    jQuery("#g_map_polyline_edit").removeClass("hide");
                    jQuery("#polyline_edit_exist_section").hide(200).addClass("tab_options_hidden_section");
                    jQuery(this).parent().parent().parent().parent().parent().find(".update_list_item").show(200).addClass("tab_options_active_section");
                    jQuery("#polyline_add_button").hide(200).addClass("tab_options_hidden_section");
                    google.maps.event.trigger(map_polyline_edit, 'resize');

                    jQuery("#polyline_get_id").val(polylineid);
                    var polylines = mapInfo.polylines;
                    for (var e = 0; e < polylines.length; e++) {
                        var id = polylines[e].id;
                        if (polylineid == id) {
                            var name = polylines[e].name;
                            var line_opacity = polylines[e].line_opacity;
                            var line_color = polylines[e].line_color;
                            var line_width = polylines[e].line_width;
                            var latlngs = polylines[e].latlng;
                            jQuery("#polyline_edit_name").val(name);
                            jQuery("#polyline_edit_line_opacity").simpleSlider("setValue", line_opacity);
                            jQuery("#polyline_edit_line_color")[0].jscolor.fromString(line_color);
                            jQuery("#polyline_edit_line_width").simpleSlider("setValue", line_width);
                            for (var j = 0; j < latlngs.length; j++) {
                                var lat = latlngs[j].lat;
                                var lng = latlngs[j].lng;
                                var polylineeditpoint = new google.maps.LatLng(parseFloat(latlngs[j].lat),
                                    parseFloat(latlngs[j].lng));
                                if (j == 0) {
                                    map_polyline_edit.setCenter(polylineeditpoint);
                                }
                                polylineeditmarker[j] = new google.maps.Marker({
                                    position: polylineeditpoint,
                                    map: map_polyline_edit,
                                    title: "#" + j,
                                    draggable: true
                                });
                                polylineeditcoords.push(polylineeditpoint);

                                google.maps.event.addListener(polylineeditmarker[j], 'click', function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    polylineeditcoords.splice(index, 1);
                                    polylineeditmarker.splice(index, 1);
                                    polylineedit.setPath(polylineeditcoords);
                                    this.setMap(null);
                                    hugeitMapsUpdatePolylineEditInputs();
                                    for (var z = 0; z < polylineeditcoords.length; z++) {
                                        polylineeditmarker[z].setTitle("#" + z);
                                    }
                                });
                                google.maps.event.addListener(polylineeditmarker[j], "drag", function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    var position = this.getPosition();
                                    polylineeditcoords[index] = position;
                                    polylineedit.setPath(polylineeditcoords);
                                    hugeitMapsUpdatePolylineEditInputs();
                                })

                            }
                            polylineedit = new google.maps.Polyline({
                                path: polylineeditcoords,
                                map: map_polyline_edit,
                                strokeOpacity: line_opacity,
                                strokeColor: "#" + line_color,
                                strokeWeight: line_width,
                                draggable: false
                            });
                            jQuery(".polyline_edit_options_input").on("change", function () {
                                var line_opacity = jQuery("#polyline_edit_line_opacity").val();
                                var line_color = jQuery("#polyline_edit_line_color").val();
                                var line_width = jQuery("#polyline_edit_line_width").val();
                                polylineedit.setOptions({
                                    strokeColor: "#" + line_color,
                                    strokeWeight: line_width,
                                    strokeOpacity: line_opacity
                                });
                            })
                            google.maps.event.addListener(map_polyline_edit, "rightclick", function (event) {
                                var edit_array_index = polylineeditmarker.length;
                                polylineeditmarker[edit_array_index] = new google.maps.Marker({
                                    map: map_polyline_edit,
                                    position: event.latLng,
                                    title: "#" + edit_array_index,
                                    draggable: true,
                                })
                                polylineeditcoords.push(event.latLng);
                                polylineedit.setPath(polylineeditcoords);
                                google.maps.event.addListener(polylineeditmarker[edit_array_index], 'click', function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    polylineeditcoords.splice(index, 1);
                                    polylineeditmarker.splice(index, 1);
                                    polylineedit.setPath(polylineeditcoords);
                                    this.setMap(null);
                                    hugeitMapsUpdatePolylineEditInputs();
                                    for (var z = 0; z < polylineeditcoords.length; z++) {
                                        polylineeditmarker[z].setTitle("#" + z);
                                    }
                                });
                                google.maps.event.addListener(polylineeditmarker[edit_array_index], "drag", function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    var position = this.getPosition();
                                    polylineeditcoords[index] = position;
                                    polylineedit.setPath(polylineeditcoords);
                                    hugeitMapsUpdatePolylineEditInputs();
                                });
                                hugeitMapsUpdatePolylineEditInputs();
                            });

                            hugeitMapsUpdatePolylineEditInputs();

                        }
                    }
                    return false;
                })
            }
        }
    }
}
function hugeitMapsUpdatePolylineInputs(location) {
    var temp_array = "";
    newpolylinecoords.forEach(function (latLng, index) {
        temp_array = temp_array + latLng + ",";
    });
    jQuery("#polyline_coords").val(temp_array);
}
function hugeitMapsUpdatePolylineEditInputs() {
    var temp_array = "";
    polylineeditcoords.forEach(function (latLng, index) {
        temp_array = temp_array + latLng + ",";
    });
    jQuery("#polyline_edit_coords").val(temp_array);
}
function hugeitMapsPlacePolyline(location) {
    array_index = polylinemarker.length;
    polylinemarker[array_index] = new google.maps.Marker({
        position: location,
        map: mappolyline,
        title: "#" + polylinemarker.length,
        draggable: true
    });
    google.maps.event.addListener(polylinemarker[array_index], 'click', function (event) {
        var title = this.getTitle();
        var index = title.replace("#", "");
        newpolylinecoords.splice(index, 1);
        polylinemarker.splice(index, 1);
        newpolyline.setPath(newpolylinecoords);
        this.setMap(null);
        hugeitMapsUpdatePolylineInputs();
        for (var z = 0; z < newpolylinecoords.length; z++) {
            polylinemarker[z].setTitle("#" + z);
        }
    });
    newpolylinecoords.push(polylinemarker[array_index].getPosition());
    google.maps.event.addListener(polylinemarker[array_index], "drag", function (e) {
        var title = this.getTitle();
        var index = title.replace("#", "");
        var position = this.getPosition();
        newpolylinecoords[index] = position;
        newpolyline.setPath(newpolylinecoords);
        hugeitMapsUpdatePolylineInputs(position);
    });
    var polyline_line_color = "#" + jQuery('#polyline_line_color').val();
    var polyline_line_opacity = jQuery('#polyline_line_opacity').val();
    var polyline_line_width = jQuery('#polyline_line_width').val();
    if (newpolyline) {
        newpolyline.setMap(mappolyline);
        newpolyline.setPath(newpolylinecoords);
    }
    else {
        newpolyline = new google.maps.Polyline({
            map: mappolyline,
            path: newpolylinecoords,
            strokeColor: polyline_line_color,
            strokeWeight: polyline_line_width,
            strokeOpacity: polyline_line_opacity
        })
    }
    i++
}