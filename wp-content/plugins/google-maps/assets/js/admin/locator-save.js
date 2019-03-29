jQuery(document).ready(function(){
    var input = document.getElementById("locator_default_address");
    var autocomplete = new google.maps.places.Autocomplete(input);

    jQuery("#locator_edit_submit").on("click",function(){
        var checkEmpty,checkVal=[];
        var _this = jQuery(this),
            name = jQuery("#locator_edit_name").val(),
            locatorLat = jQuery("#locator_edit_lat").val(),
            locatorLng = jQuery("#locator_edit_lng").val(),
            locatorAddr = jQuery("#locator_edit_addr").val(),
            locatorPhone = jQuery("#locator_edit_phone").val(),
            id = jQuery("#locator_get_id").val(),
            map_id = jQuery("#map_id").val();

        checkVal.push(name,locatorLat,locatorLng,locatorAddr);

        for(var i in checkVal){
            checkEmpty = checkVal[i] || '';
            if(checkEmpty==''){
                alert("Please fill up the blanks!");
                return false;
            }
        }
        var locatorDays = {};
        jQuery('#store_edit_days').find('tr').each(function () {
            var StrInpId = jQuery(this).attr('id');
            var StrRow = {};
            jQuery(this).find('input').each(function () {
                StrRow[jQuery(this).attr('name')] = jQuery(this).val();
            });
            locatorDays[StrInpId] = StrRow;
        });
        locatorDays = JSON.stringify(locatorDays);
        jQuery("locator_edit_days").val(locatorDays);
        var data = {
            action: "hugeit_maps_edit_locator",
            nonce : locatorSaveL10n.nonce,
            id: id,
            map_id : map_id,
            name: name,
            locatorLat: locatorLat,
            locatorLng: locatorLng,
            locatorAddr: locatorAddr,
            locatorPhone:locatorPhone,
            locatorDays:locatorDays
        };

        jQuery.ajax({
            url:ajaxurl,
            type: 'post',
            data: data,
            dataType: 'json',
            beforeSend: function(xhr) {
                _this.parent().find(".spinner").css("visibility","visible");
            }
        }).done(function (response) {
            _this.parent().find(".spinner").css("visibility","hidden");
            if(response.success){

                hugeitMapsInitializeAllMaps(map_id, response);
                jQuery("#cancel_edit_locator").trigger("click");
                jQuery(document).scrollTop(0);
                jQuery("#locator_edit_exist_section li").each(function () {
                    if (jQuery(this).attr("data-list_id") == id) {
                        jQuery(this).find(".edit_list_item").html(name)
                    }
                })
            }

        }).fail(function(){
            console.log("Failed to save the store");
        });

        return false;
    });

    jQuery("#locator_submit").on("click",function(){
        var checkEmpty,checkVal=[];
        var _this = jQuery(this),
            name = jQuery("#locator_name").val(),
            locatorLat = jQuery("#locator_lat").val(),
            locatorLng = jQuery("#locator_lng").val(),
            locatorAddr= jQuery("#locator_addr").val(),
            locatorPhone=jQuery("#locator_phone").val(),
            map_id = jQuery("#map_id").val();
        checkVal.push(name,locatorLat,locatorLng,locatorAddr);

        for(var i in checkVal){
            checkEmpty = checkVal[i] || '';
            if(checkEmpty==''){
                alert("Please fill up the blanks!");
                return false;
            }
        }

        var locatorDays = {};
        jQuery('#store_days').find('tr').each(function () {
            var StrInpId = jQuery(this).attr('id');
            var StrRow = {};
            jQuery(this).find('input').each(function () {
                StrRow[jQuery(this).attr('name')] = jQuery(this).val();
            });
            locatorDays[StrInpId] = StrRow;
        });
        locatorDays = JSON.stringify(locatorDays);
        jQuery("locator_days").val(locatorDays);
        var data = {
            action: "hugeit_maps_save_new_locator",
            nonce : locatorSaveL10n.nonce,
            map_id: map_id,
            name: name,
            locatorLat: locatorLat,
            locatorLng: locatorLng,
            locatorAddr: locatorAddr,
            locatorPhone:locatorPhone,
            locatorDays:locatorDays
        };

        jQuery.ajax({
            url:ajaxurl,
            type: 'post',
            data: data,
            dataType: 'json',
            beforeSend: function(xhr) {
                _this.parent().find(".spinner").css("visibility","visible");
            }
        }).done(function (response) {
            _this.parent().find(".spinner").css("visibility","hidden");
            if (response.success) {
                hugeitMapsInitializeAllMaps(map_id, response);
                jQuery("#cancel_locator").trigger("click");
                jQuery(document).scrollTop(0);
                if (jQuery(".empty_locator").html() != undefined) {
                    jQuery(".empty_locator").after("<ul>" +
                        "<li class='edit_list has_background' data-list_id='" + response.last_id + "'>" +
                        "<div class='list_number' >1</div><div class='edit_list_item'>" + name + "</div>" +
                        "<div class='edit_locator_list_delete edit_list_delete'>" +
                        "<form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='" + map_id + "'>" +
                        "<input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' />" +
                        "<input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='locator' />" +
                        "<input type='hidden' class='edit_list_delete_table' value='hugeit_maps_stores' />" +
                        "<input type='hidden' name='delete_locator_id' class='edit_list_delete_id' value='" + response.last_id + "' />" +
                        "</form>" +
                        "<a href='#' class='button' class='edit_locator_list_item' ></a>" +
                        "<input type='hidden' class='locator_edit_id' name='locator_edit_id' value='" + response.last_id + "' />" +
                        "</div>" +
                        "</li>" +
                        "</ul>");
                    jQuery(".empty_locator").remove();
                } else {
                    var last_id = jQuery("#locator_edit_exist_section .edit_list").last().find(".list_number").html();
                    var this_id = parseInt(last_id) + 1;
                    jQuery("#locator_edit_exist_section .edit_list").last().after("<li class='edit_list has_background' data-list_id='" + response.last_id + "'>" +
                        "<div class='list_number' >" + this_id + "</div><div class='edit_list_item'>" + name + "</div>" +
                        "<div class='edit_locator_list_delete edit_list_delete'>" +
                        "<form class='edit_list_delete_form' method='post' action='admin.php?page=hugeitgooglemaps_main&task=edit_cat&id='" + map_id + "'>" +
                        "<input type='submit' class='button edit_list_delete_submit' name='edit_list_delete_submit' value='x' />" +
                        "<input type='hidden' class='edit_list_delete_type' name='edit_list_delete_type' value='locator' />" +
                        "<input type='hidden' class='edit_list_delete_table' value='hugeit_maps_stores' />" +
                        "<input type='hidden' name='delete_locator_id' class='edit_list_delete_id' value='" + response.last_id + "' />" +
                        "</form>" +
                        "<a href='#' class='button' class='edit_locator_list_item' ></a>" +
                        "<input type='hidden' class='locator_edit_id' name='locator_edit_id' value='" + response.last_id + "' />" +
                        "</div>" +
                        "</li>");
                }
            } else {
                console.log("Oops, something went wrong");
            }
        }).fail(function () {
            console.log('Failed to save the Store Locator');
        });
        return false;
    });
});