var hugeitMaps = [];

function hugeitMapsBindInfoWindow(marker, map, infowindow, description, infoType, openOnload) {
    if (openOnload) {
        /* Temporarily unnecessary       google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
         infowindow.setContent(description);
         infowindow.open(map, marker);
         });*/
    }

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(description);
        infowindow.open(map, marker);
    });
}

function hugeitMapsAttachInstructionText(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, 'click', function () {
        /*Open an info window when the marker is clicked on, containing the text of the step.*/
        stepDisplay.setContent(text);
        stepDisplay.open(map, marker);
    });
}


jQuery(document).ready(function () {
    function hugeitMapsInitializeMap(elementId) {
        var element = jQuery("#" + elementId),
            marker = [],
            polygone = [],
            polyline = [],
            polylinepoints,
            newpolylinecoords = [],
            polygonpoints,
            polygoncoords = [],
            directions = [],
            directionMarkers = [],
            newcircle = [],
            infowindow = new google.maps.InfoWindow,
            infowindows = [],
            newcirclemarker = [],
            circlepoint,
            locatorEnabled = element.data('locator-enabled'),
            width = element.width(),
            height = element.height(),
            div = parseInt(width) / parseInt(height),
            dataMapId = element.data('map_id'),
            dataZoom = element.data('zoom'),
            dataMinZoom = element.data('min-zoom'),
            dataMaxZoom = element.data('max-zoom'),
            dataCenterLat = element.data('center-lat'),
            dataCenterLng = element.data('center-lng'),
            dataPanController = parseInt(element.data('pan-controller')),
            dataZoomController = parseInt(element.data('zoom-controller')),
            dataTypeController = parseInt(element.data('type-controller')),
            dataScaleController = parseInt(element.data('scale-controller')),
            imgurl = element.data('img-url'),
            dataStreetViewController = parseInt(element.data('street-view-controller')),
            dataOverviewMapController = parseInt(element.data('overview-map-controller')),
            dataInfoType = element.data('info-type'),
            dataOpenInfowindowsOnload = element.data('open-infowindows-onload');

        var center_coords = new google.maps.LatLng(dataCenterLat, dataCenterLng);

        var frontEndMapOptions = {
            zoom: parseInt(dataZoom),
            center: center_coords,
            disableDefaultUI: true,
            panControl: dataPanController,
            zoomControl: dataZoomController,
            mapTypeControl: dataTypeController,
            scaleControl: dataScaleController,
            streetViewControl: dataStreetViewController,
            overviewMapControl: dataOverviewMapController,
            mapTypeId: google['maps']['MapTypeId']['ROADMAP'],
            minZoom: dataMinZoom,
            maxZoom: dataMaxZoom,
            fullscreenControl: true
        };
        var front_end_map = new google.maps.Map(document.getElementById(elementId), frontEndMapOptions);


        function hugeitMapsFrontRefresh() {
            google.maps.event.trigger(front_end_map, 'resize');
        }

        jQuery(document).on('click',function () {
            setTimeout(function () {
                hugeitMapsFrontRefresh();
            }, 500);
        })

        var front_end_data = {
            action: 'hugeit_maps_get_info',
            map_id: dataMapId
        };
        jQuery.ajax({
            url: ajaxurl,
            dataType: 'json',
            method: 'post',
            data: front_end_data,
            beforeSend: function () {
            }
        }).done(function (response) {
            hugeitMapsInitializeMap(response);
            locStores = response.success.locators;
        }).fail(function () {
            console.log('Failed to load response from database');
        });
        function hugeitMapsInitializeMap(response) {
            if (response.success) {
                var mapInfo = response.success;
                var markers = mapInfo.markers;
                for (var i = 0; i < markers.length; i++) {
                    var name = markers[i].name;
                    var address = markers[i].address;
                    var anim = markers[i].animation;
                    var description = markers[i].description;
                    var point = new google.maps.LatLng(
                        parseFloat(markers[i].lat),
                        parseFloat(markers[i].lng));
                    marker[i] = new google.maps.Marker({
                        map: front_end_map,
                        position: point,
                        title: name,
                        content: description,
                        animation: google['maps']['Animation'][anim]
                    });
                    var currentInfoWindow;

                    if (dataOpenInfowindowsOnload) {
                        currentInfoWindow = infowindows[i] = new google.maps.InfoWindow;
                    } else {
                        currentInfoWindow = infowindow;
                    }
                    hugeitMapsBindInfoWindow(marker[i], front_end_map, currentInfoWindow, description, dataInfoType, dataOpenInfowindowsOnload);
                }
                var polygones = mapInfo.polygons;
                for (var i = 0; i < polygones.length; i++) {
                    var name = polygones[i].name;
                    var line_opacity = polygones[i].line_opacity;
                    var line_color = "#" + polygones[i].line_color;
                    var fill_opacity = polygones[i].fill_opacity;
                    var line_width = polygones[i].line_width;
                    var fill_color = "#" + polygones[i].fill_color;
                    var latlngs = polygones[i].latlng;
                    polygoncoords = [];
                    for (var j = 0; j < latlngs.length; j++) {
                        polygonpoints = new google.maps.LatLng(parseFloat(latlngs[j].lat),
                            parseFloat(latlngs[j].lng))
                        polygoncoords.push(polygonpoints)
                    }
                    polygone[i] = new google.maps.Polygon({
                        paths: polygoncoords,
                        map: front_end_map,
                        strokeOpacity: line_opacity,
                        strokeColor: line_color,
                        strokeWeight: line_width,
                        fillOpacity: fill_opacity,
                        fillColor: fill_color,
                        draggable: false
                    });
                }
                var polylines = mapInfo.polylines;
                for (var i = 0; i < polylines.length; i++) {
                    var name = polylines[i].name;
                    var line_opacity = polylines[i].line_opacity;
                    var line_color = polylines[i].line_color;
                    var line_width = polylines[i].line_width;
                    var latlngs = polylines[i].latlng;
                    newpolylinecoords = [];
                    for (var j = 0; j < latlngs.length; j++) {
                        polylinepoints = new google.maps.LatLng(parseFloat(latlngs[j].lat),
                            parseFloat(latlngs[j].lng));
                        newpolylinecoords.push(polylinepoints)
                    }
                    polyline[i] = new google.maps.Polyline({
                        path: newpolylinecoords,
                        map: front_end_map,
                        strokeColor: "#" + line_color,
                        strokeOpacity: line_opacity,
                        strokeWeight: line_width
                    });
                }
                var circles = mapInfo.circles;
                for (var i = 0; i < circles.length; i++) {
                    var circle_name = circles[i].name;
                    var circle_center_lat = circles[i].center_lat;
                    var circle_center_lng = circles[i].center_lng;
                    var circle_radius = circles[i].radius;
                    var circle_line_width = circles[i].line_width;
                    var circle_line_color = circles[i].line_color;
                    var circle_line_opacity = circles[i].line_opacity;
                    var circle_fill_color = circles[i].fill_color;
                    var circle_fill_opacity = circles[i].fill_opacity;
                    var circle_show_marker = parseInt(circles[i].show_marker);
                    circlepoint = new google.maps.LatLng(parseFloat(circles[i].center_lat),
                        parseFloat(circles[i].center_lng));
                    newcircle[i] = new google.maps.Circle({
                        map: front_end_map,
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
                            map: front_end_map,
                            title: circle_name
                        });
                    }
                }
            }
        }

        /* locator start */
        if (locatorEnabled != 0) {
            var locpOptions = {
                map: front_end_map,
                strokeColor: "#00FF00",
                strokeOpacity: 0.9,
                strokeWeight: 4
            };
            var locDirectionsService = new google.maps.DirectionsService;
            var locDirectionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                polylineOptions: locpOptions
            });
            var locRouteInfowindow = new google.maps.InfoWindow;
            var locClosest, locClosetPosition, def, locClosetAddress, locInfoWindow, locCurrent,fromLatLng, locMarker, finalStores = [], locClosetArr = [], locMarkers = [];
            var locBounds = new google.maps.LatLngBounds();
            var locMap_id = dataMapId;
            var input = document.getElementById('searchLocator_' + locMap_id);
            var autocomplete = new google.maps.places.Autocomplete(input);
            var searchBox = new google.maps.places.SearchBox(input);
            var LocatorIcon = {
                url: imgurl + "/str-marker-icon.png",
                labelOrigin: new google.maps.Point(22, 20)
            };
            var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var labelIndex = 1;

            function calcDistance(pointA, pointB) {

                return (google.maps.geometry.spherical.computeDistanceBetween(pointA, pointB) / 1000).toFixed(2);

            }

            function clearDistance() {
                for (var i in locMarkers) {
                    if (locMarkers[i].get('name') == 'closest') {
                        locMarkers[i].setMap(null);
                        locMarkers[i].length = 0;
                    }

                    if (locCurrent) {
                        locCurrent.setMap(null);
                        locCurrent.length = 0;
                    }

                }
            }

            function clearLocations() {
                for (var i in locMarkers) {
                    locMarkers[i].setMap(null);
                }
                locMarkers.length = 0;
            }

            function clearDirections() {
                locDirectionsDisplay.setMap(null);
            }



            var oldRadius;
            var hgCounter=0;
            var hgTheSame;
            jQuery(document).on("click", "#submitLocator_" + locMap_id, function () {
                if(oldRadius!=jQuery("#locatorRadius_" + locMap_id).val()){
                    oldRadius = jQuery("#locatorRadius_" + locMap_id).val();
                    hgTheSame=false;
                }
                else {
                    hgTheSame=true;
                }

                var locAddress = jQuery("#searchLocator_" + locMap_id).val();
                var locRadius =  jQuery("#locatorRadius_" + locMap_id).val();
                var testGetDist = function (lp1, lp2) {
                    var deferred = jQuery.Deferred();
                    var tLocRoute, tLocContent;
                    locDirectionsService.route({
                        origin: lp1,
                        destination: lp2,
                        travelMode: 'DRIVING'
                    }, function (response, status) {
                        if (status === google.maps.DirectionsStatus.OK) {
                            tLocRoute = response.routes[0];
                            deferred.resolve(tLocContent = Number(tLocRoute.legs[0].distance.value / 1000).toFixed(1));
                        }
                        else {
                            deferred.reject(status);
                        }
                    });
                    return deferred.promise();
                };


                function getFinalStores(locStores) {
                    var dfd = jQuery.Deferred();
                    for (var i in locStores) {
                        (function(i){

                            locStores[i].latLng = new google.maps.LatLng(locStores[i].locator_lat, locStores[i].locator_lng);


                            testGetDist(fromLatLng, locStores[i].latLng).then(function (resp) {
                               if(locRadius && jQuery.isNumeric(locRadius)){
                                    if (resp < parseInt(locRadius)) {
                                        locStores[i].distance = resp;
                                        finalStores.push(locStores[i]);
                                    }
                                }

                                },
                                function (err) {

                                    console.log(err);

                                }).always(function () {
                                if (i == locStores.length - 1) {
                                    dfd.resolve();
                                }
                            });
                        }(i));

                    }

                    return dfd.promise();
                }
                if (locAddress != "" && locRadius != "") {
                    finalStores = [];
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': locAddress}, function (result, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            /* Compare old with new value */
                            if(!!fromLatLng){
                                var oldLatLng = fromLatLng;
                            }
                            fromLatLng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
                                if(!!oldLatLng){
                                    if(oldLatLng.lat()===fromLatLng.lat() && oldLatLng.lng()===fromLatLng.lng() && hgTheSame ){
                                        return false;
                                    }
                                }

                            /* Compare old with new value */
                            getFinalStores(locStores).then(function () {
                                if (finalStores.length > 0) {
                                    labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                                    labelIndex = 1;
                                    jQuery(document).find("#huge_main_store_block").remove();
                                    jQuery(".huge_it_google_map_container").after("<div id='huge_main_store_block'></div>");
                                    var StoreBlock = "";
                                    StoreBlock += "<div class='str-block'>";
                                    StoreBlock += "        <div class='addr-info'>";
                                    StoreBlock += "            <div class='str-img'>";
                                    StoreBlock += "                <img src='" + imgurl + "\/str-marker.png' alt=''>";
                                    StoreBlock += "            <\/div>";
                                    StoreBlock += "            <div class='addr_block'>";
                                    StoreBlock += "                <p class='str-name'><\/p>";
                                    StoreBlock += "                <p class='str-dir'><a href='' target='_blank'>Get Directions<\/a><\/p>";
                                    StoreBlock += "                <div class='str-phone'>";
                                    StoreBlock += "                    <img src='" + imgurl + "\/phone.png' alt=''><p class='str-number'><\/p>";
                                    StoreBlock += "                <\/div>";
                                    StoreBlock += "";
                                    StoreBlock += "            <\/div>";
                                    StoreBlock += "";
                                    StoreBlock += "            <p class='str-addr'><\/p>";
                                    StoreBlock += "        <\/div>";
                                    StoreBlock += "";
                                    StoreBlock += "        <div class='a_info'>";
                                    StoreBlock += "            <table>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Sun<\/td>";
                                    StoreBlock += "                    <td name='sun'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Mon<\/td>";
                                    StoreBlock += "                    <td name='mon'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Tue<\/td>";
                                    StoreBlock += "                    <td name='tue'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Wed<\/td>";
                                    StoreBlock += "                    <td name='wed'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Thu<\/td>";
                                    StoreBlock += "                    <td name='thu'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Fri<\/td>";
                                    StoreBlock += "                    <td name='fri'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "                <tr>";
                                    StoreBlock += "                    <td>Sat<\/td>";
                                    StoreBlock += "                    <td name='sat'><\/td>";
                                    StoreBlock += "                <\/tr>";
                                    StoreBlock += "";
                                    StoreBlock += "            <\/table>";
                                    StoreBlock += "";
                                    StoreBlock += "        <\/div>";
                                    StoreBlock += "    <\/div>";
                                    locClosetArr = [];
                                    clearDistance();
                                    clearLocations();
                                    clearDirections();
                                    locClosest = parseInt(locRadius);

                                    for (var i in finalStores) {
                                        locClosetArr.push(finalStores[i].distance);
                                    }
                                    locClosest = Math.min.apply(null, locClosetArr);
                                    for (var i in finalStores) {

                                        if (typeof(finalStores[i].locator_days) != "object" && finalStores[i].locator_days != "") {
                                            finalStores[i].locator_days = JSON.parse(finalStores[i].locator_days);
                                        }
                                        else {

                                            if(typeof(finalStores[i].locator_days) != "object" && finalStores[i].locator_days == ""){
                                                finalStores[i].locator_days = JSON.parse(null);
                                            }

                                        }

                                        locMarker = new google.maps.Marker({
                                            map: front_end_map,
                                            position: {
                                                lat: finalStores[i].locator_lat,
                                                lng: finalStores[i].locator_lng
                                            },
                                            id: i,
                                            icon: LocatorIcon,
                                            label: labels[labelIndex++ % labels.length]

                                        });
                                        locInfoWindow = new google.maps.InfoWindow;

                                        if (parseFloat(finalStores[i].distance) <= parseFloat(locClosest)) {
                                            locClosest = finalStores[i].distance;
                                            locClosetPosition = {
                                                lat: parseFloat(finalStores[i].locator_lat),
                                                lng: parseFloat(finalStores[i].locator_lng)
                                            };
                                            locClosetAddress = finalStores[i].locator_addr;
                                            locMarker.set('name', 'closest');
                                        }

                                        locBounds.extend(locMarker.getPosition());
                                        google.maps.event.addListener(locMarker, 'click', function (i) {
                                            return function () {
                                                testGetDist(fromLatLng, this.position).then(function (resp) {
                                                    locInfoWindow.setContent("<b>" + finalStores[i].name + "</b><br/>" + finalStores[i].locator_addr + "<br/>" + resp+" km");
                                                }, function (err) {
                                                    console.log(err);
                                                });
                                                locInfoWindow.open(front_end_map, this);
                                            }
                                        }(i));

                                        locMarkers.push(locMarker);
                                        jQuery("#huge_main_store_block").append(StoreBlock);
                                        if (finalStores[i].locator_phone == "") {
                                            jQuery(document).find(".str-phone").last().css("visibility", 'hidden');
                                        }
                                        else {
                                            jQuery(document).find(".str-phone").last().css("visibility", 'visible');
                                        }
                                        var gDirQuery = finalStores[i].locator_addr;
                                        gDirQuery = gDirQuery.replace(/ /g, '+');
                                        jQuery(document).find("#huge_main_store_block .str-name").last().text(finalStores[i].name);
                                        jQuery(document).find("#huge_main_store_block .str-addr").last().text(finalStores[i].locator_addr);
                                        jQuery(document).find("#huge_main_store_block .str-number").last().text(finalStores[i].locator_phone);
                                        jQuery(document).find("#huge_main_store_block .str-dir a").last().prop('href', 'https://www.google.com/maps/dir//' + gDirQuery);
                                        jQuery(document).find("#huge_main_store_block .str-img img").last().before("<p class='markerLabel'>" + locMarker.label + "</p>");
                                        jQuery(document).find("#huge_main_store_block .a_info").last().find("table tr td:last-child").each(function () {
                                            var nameDayOfWeek = jQuery(this).attr('name');
                                            if (finalStores[i].locator_days[nameDayOfWeek].start != "" && finalStores[i].locator_days[nameDayOfWeek].end != "") {
                                                jQuery(this).text(finalStores[i].locator_days[nameDayOfWeek].start + " - " + finalStores[i].locator_days[nameDayOfWeek].end);
                                            }
                                            else {
                                                jQuery(this).text("Closed");
                                            }
                                        });
                                    }
                                    locCurrent = new google.maps.Marker({
                                        map: front_end_map,
                                        icon: LocatorIcon,
                                        label: 'A',
                                        position: fromLatLng
                                    });
                                    google.maps.event.addListener(locCurrent, "click", function () {
                                        locInfoWindow.setContent(locAddress);
                                        locInfoWindow.open(front_end_map, this);
                                    });

                                    locBounds.extend(locCurrent.getPosition());
                                    front_end_map.fitBounds(locBounds);
                                    center_coords = locBounds;
                                    var locRoute, locContent;
                                    locDirectionsDisplay.setMap(front_end_map);
                                    locDirectionsService.route({
                                        origin: locCurrent.getPosition(),
                                        destination: locClosetPosition,
                                        travelMode: 'DRIVING'
                                    }, function (response, status) {
                                        if (status === google.maps.DirectionsStatus.OK) {
                                            locDirectionsDisplay.setDirections(response);
                                            locRoute = response.routes[0];
                                            locContent = "<b>Total distance: </b>" + locRoute.legs[0].distance.text;
                                            front_end_map.fitBounds(locBounds);
                                        }
                                        else {
                                            window.alert('Directions request failed due to ' + status);
                                        }
                                    });
                                    locRouteInfowindow.close();
                                    google.maps.event.clearListeners(locpOptions, 'click');
                                    google.maps.event.addListener(locpOptions, "click", function (e) {
                                        locRouteInfowindow.close();
                                        locRouteInfowindow.setPosition(e.latLng);
                                        locRouteInfowindow.setContent(locContent);
                                        locRouteInfowindow.open(front_end_map);
                                    });

                                }
                                else {
                                    clearDistance();
                                    clearLocations();
                                    clearDirections();
                                    jQuery(document).find("#huge_main_store_block").remove();
                                    alert("Sorry, but there are not available stores in certain radius!");

                                }
                            });
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }

                    });
                }
            });
        }

        /* locator end */
    }

    var allMaps = jQuery('.huge_it_google_map');

    if (allMaps.length) {

        allMaps.each(function (i) {

            var id = jQuery(this).attr('id');

            hugeitMaps[i] = hugeitMapsInitializeMap(id);


        });

    }


});