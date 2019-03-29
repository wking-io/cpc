var data, polygonedit, geocoder, newpolygon
var polygone = [];
var polygonmarker = [];
var i = 0;
var newpolygoncoords = [];
var polygoneditmarker = [];
var polygoneditcoords = [];

jQuery(document).ready(function () {

    hugeitMapsLoadPolygonMap(
        polygonL10n.map.id,
        polygonL10n.map.styling_hue,
        polygonL10n.map.styling_saturation,
        polygonL10n.map.styling_lightness,
        polygonL10n.map.styling_gamma,
        polygonL10n.map.zoom,
        polygonL10n.map.type,
        polygonL10n.map.bike_layer,
        polygonL10n.map.traffic_layer,
        polygonL10n.map.transit_layer
    );

});
function hugeitMapsLoadPolygonMap(id, hue, saturation, lightness, gamma, zoom, type, bike, traffic, transit) {
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
        hugeitMapsInitializePolygonMap(response);
    }).fail(function () {
        console.log('Failed to load response from database');
    });
    function hugeitMapsInitializePolygonMap(response) {
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
                mappolygone = new google.maps.Map(document.getElementById('g_map_polygon'), mapOptions);
                map_polygone_edit = new google.maps.Map(document.getElementById('g_map_polygone_edit'), mapOptions);

                jQuery("#polygon_add_button").on("click", function () {
                    jQuery( '#polygone_name' ).val('');
                    jQuery( '#polygone_url' ).val('');
                    jQuery( '#polygone_coords' ).val('');
                    jQuery( '#polygone_line_opacity' ).simpleSlider("setValue", 0.9);
                    jQuery( '#polygone_line_color' )[0].jscolor.fromString('FF0F0F');
                    jQuery( '#polygone_line_width' ).simpleSlider("setValue", 5);
                    jQuery( '#polygone_fill_opacity' ).simpleSlider("setValue", 0.5);
                    jQuery( '#polygone_fill_color' )[0].jscolor.fromString('5DFF0D');
                    jQuery( '#hover_polygone_fill_opacity' ).simpleSlider("setValue", 0.5);
                    jQuery( '#hover_polygone_fill_color' )[0].jscolor.fromString('75FF7E');
                    jQuery( '#hover_polygone_line_opacity' ).simpleSlider("setValue", 0.5);
                    jQuery( '#hover_polygone_line_color' )[0].jscolor.fromString('FF80B7');
                    google.maps.event.trigger(mappolygone, 'resize');
                    mappolygone.setCenter(mapcenter);
                    if (newpolygon) {
                        newpolygon.setMap(null);

                        newpolygoncoords = [];
                        for (var i = 0; i < polygonmarker.length; i++) {
                            polygonmarker[i].setMap(null);
                        }
                        polygonmarker = [];
                    }
                });

                if (type == "ROADMAP") {
                    mappolygone.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP})
                    map_polygone_edit.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP})
                }
                if (type == "SATELLITE") {
                    mappolygone.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
                    map_polygone_edit.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
                }
                if (type == "HYBRID") {
                    mappolygone.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
                    map_polygone_edit.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
                }
                if (type == "TERRAIN") {
                    mappolygone.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
                    map_polygone_edit.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
                }

                google.maps.event.addListener(mappolygone, 'rightclick', function (event) {
                    hugeitMapsPlacePolygone(event.latLng);
                    hugeitMapsUpdatePolygoneInputs(event.latLng);
                });

                jQuery(".polygone_options_input").on("keyup change", function () {
                    var polygone_line_color = "#" + jQuery('#polygone_line_color').val();
                    var polygone_line_opacity = jQuery('#polygone_line_opacity').val();
                    var polygone_fill_color = "#" + jQuery('#polygone_fill_color').val();
                    var polygone_fill_opacity = jQuery('#polygone_fill_opacity').val();
                    var polygone_line_width = jQuery('#polygone_line_width').val();
                    if (newpolygon) {
                        newpolygon.setOptions({
                            strokeColor: polygone_line_color,
                            strokeWeight: polygone_line_width,
                            strokeOpacity: polygone_line_opacity,
                            fillOpacity: polygone_fill_opacity,
                            fillColor: polygone_fill_color
                        });
                    }
                });


                jQuery(".edit_polygone_list_delete a").on("click", function () {
                    if (polygonedit) {
                        polygonedit.setMap(null);
                        for (var i = 0; i < polygoneditmarker.length; i++) {
                            polygoneditmarker[i].setMap(null);
                        }
                        polygoneditmarker = [];
                        polygoneditcoords = [];
                    }
                    var parent = jQuery(this).parent();
                    var idelement = parent.find(".polygone_edit_id");
                    var polygoneid = idelement.val();
                    jQuery("#g_maps > div").addClass("hide");
                    jQuery("#g_map_polygone_edit").removeClass("hide");
                    jQuery("#polygone_edit_exist_section").hide(200).addClass("tab_options_hidden_section");
                    jQuery(this).parent().parent().parent().parent().parent().find(".update_list_item").show(200).addClass("tab_options_active_section");
                    jQuery("#polygon_add_button").hide(200).addClass("tab_options_hidden_section");
                    google.maps.event.trigger(map_polygone_edit, 'resize');

                    jQuery("#polygone_get_id").val(polygoneid);
                    var polygones = mapInfo.polygons;
                    for (var e = 0; e < polygones.length; e++) {
                        var id = polygones[e].id;
                        if (polygoneid == id) {
                            var name = polygones[e].name;
                            var line_opacity = polygones[e].line_opacity;
                            var line_color = polygones[e].line_color;
                            var fill_opacity = polygones[e].fill_opacity;
                            var fill_color = polygones[e].fill_color;
                            var line_width = polygones[e].line_width;

                            var latlngs = polygones[e].latlng;

                            jQuery("#polygone_edit_name").val(name);

                            jQuery("#polygone_edit_line_opacity").simpleSlider("setValue", line_opacity);

                            jQuery("#polygone_edit_line_color")[0].jscolor.fromString(line_color);

                            jQuery("#polygone_edit_line_width").simpleSlider("setValue", line_width);

                            jQuery("#polygone_edit_fill_opacity").simpleSlider("setValue", fill_opacity);

                            jQuery("#polygone_edit_fill_color")[0].jscolor.fromString(fill_color);
                            for (var j = 0; j < latlngs.length; j++) {
                                var lat = latlngs[j].lat;
                                var lng = latlngs[j].lng;
                                var polygoneditpoint = new google.maps.LatLng(parseFloat(latlngs[j].lat),
                                    parseFloat(latlngs[j].lng));
                                if (j == 0) {
                                    map_polygone_edit.setCenter(polygoneditpoint);
                                }
                                polygoneditmarker[j] = new google.maps.Marker({
                                    position: polygoneditpoint,
                                    map: map_polygone_edit,
                                    title: "#" + j,
                                    draggable: true,
                                });
                                polygoneditcoords.push(polygoneditpoint);

                                google.maps.event.addListener(polygoneditmarker[j], 'click', function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");


                                    polygoneditcoords.splice(index, 1);
                                    polygoneditmarker.splice(index, 1);
                                    polygonedit.setPaths(polygoneditcoords);
                                    this.setMap(null);
                                    hugeitMapsUpdatePolygoneEditInputs();
                                    for (var z = 0; z < polygoneditcoords.length; z++) {
                                        polygoneditmarker[z].setTitle("#" + z);
                                    }
                                });
                                google.maps.event.addListener(polygoneditmarker[j], "drag", function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    var position = this.getPosition();
                                    polygoneditcoords[index] = position;
                                    polygonedit.setPaths(polygoneditcoords);
                                    hugeitMapsUpdatePolygoneEditInputs();
                                })

                            }

                            polygonedit = new google.maps.Polygon({
                                paths: polygoneditcoords,
                                map: map_polygone_edit,
                                strokeOpacity: line_opacity,
                                strokeColor: "#" + line_color,
                                fillOpacity: fill_opacity,
                                fillColor: "#" + fill_color,
                                draggable: false,
                            });
                            jQuery(".polygone_edit_options_input").on("change keyup", function () {
                                var line_opacity = jQuery("#polygone_edit_line_opacity").val();
                                var line_color = jQuery("#polygone_edit_line_color").val();
                                var line_width = jQuery("#polygone_edit_line_width").val();
                                var fill_opacity = jQuery("#polygone_edit_fill_opacity").val();
                                var fill_color = jQuery("#polygone_edit_fill_color").val();
                                polygonedit.setOptions({
                                    strokeColor: "#" + line_color,
                                    strokeWeight: line_width,
                                    strokeOpacity: line_opacity,
                                    fillOpacity: fill_opacity,
                                    fillColor: "#" + fill_color
                                });
                            });

                            google.maps.event.addListener(map_polygone_edit, "rightclick", function (event) {
                                //alert(event.latLng);
                                var edit_array_index = polygoneditmarker.length;
                                polygoneditmarker[edit_array_index] = new google.maps.Marker({
                                    map: map_polygone_edit,
                                    position: event.latLng,
                                    title: "#" + edit_array_index,
                                    draggable: true
                                });
                                polygoneditcoords.push(event.latLng);
                                polygonedit.setPaths(polygoneditcoords);
                                google.maps.event.addListener(polygoneditmarker[edit_array_index], 'click', function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    polygoneditcoords.splice(index, 1);
                                    polygoneditmarker.splice(index, 1);
                                    polygonedit.setPaths(polygoneditcoords);
                                    this.setMap(null);
                                    hugeitMapsUpdatePolygoneEditInputs();
                                    for (var z = 0; z < polygoneditcoords.length; z++) {
                                        polygoneditmarker[z].setTitle("#" + z);
                                    }
                                });
                                google.maps.event.addListener(polygoneditmarker[edit_array_index], "drag", function (event) {
                                    var title = this.getTitle();
                                    var index = title.replace("#", "");
                                    var position = this.getPosition();
                                    polygoneditcoords[index] = position;
                                    polygonedit.setPaths(polygoneditcoords);
                                    hugeitMapsUpdatePolygoneEditInputs();
                                });
                                hugeitMapsUpdatePolygoneEditInputs();
                            });

                            hugeitMapsUpdatePolygoneEditInputs();

                        }
                    }
                    return false;
                })
            }
        }
    }
}
function hugeitMapsUpdatePolygoneInputs(location) {
    var temp_array = "";
    newpolygoncoords.forEach(function (latLng, index) {
        temp_array = temp_array + latLng + ",";
    });
    jQuery("#polygone_coords").val(temp_array);
}
function hugeitMapsUpdatePolygoneEditInputs() {
    var temp_array = "";
    polygoneditcoords.forEach(function (latLng, index) {
        temp_array = temp_array + latLng + ",";
    });
    jQuery("#polygone_edit_coords").val(temp_array);
}
function hugeitMapsPlacePolygone(location) {
    array_index = polygonmarker.length;
    polygonmarker[array_index] = new google.maps.Marker({
        position: location,
        map: mappolygone,
        title: "#" + polygonmarker.length,
        draggable: true
    });
    google.maps.event.addListener(polygonmarker[array_index], 'click', function (event) {
        var title = this.getTitle();
        var index = title.replace("#", "");
        newpolygoncoords.splice(index, 1);
        polygonmarker.splice(index, 1);
        newpolygon.setPaths(newpolygoncoords);
        this.setMap(null);
        hugeitMapsUpdatePolygoneInputs();
        for (var z = 0; z < newpolygoncoords.length; z++) {
            polygonmarker[z].setTitle("#" + z);
        }
    });
    newpolygoncoords.push(polygonmarker[array_index].getPosition());
    google.maps.event.addListener(polygonmarker[array_index], "drag", function (e) {
        var title = this.getTitle();
        var index = title.replace("#", "")
        var position = this.getPosition();
        newpolygoncoords[index] = position;
        newpolygon.setPaths(newpolygoncoords);
        hugeitMapsUpdatePolygoneInputs(position);
    });
    var polygone_line_color = "#" + jQuery('#polygone_line_color').val();
    var polygone_line_opacity = jQuery('#polygone_line_opacity').val();
    var polygone_fill_color = "#" + jQuery('#polygone_fill_color').val();
    var polygone_fill_opacity = jQuery('#polygone_fill_opacity').val();
    var polygone_line_width = jQuery('#polygone_line_width').val();
    if (newpolygon) {
        newpolygon.setMap(mappolygone);
        newpolygon.setPaths(newpolygoncoords);
    }
    else {
        newpolygon = new google.maps.Polygon({
            map: mappolygone,
            paths: newpolygoncoords,
            strokeColor: polygone_line_color,
            strokeWeight: polygone_line_width,
            strokeOpacity: polygone_line_opacity,
            fillOpacity: polygone_fill_opacity,
            fillColor: polygone_fill_color,
        })
    }

    i++
}