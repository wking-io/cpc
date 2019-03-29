jQuery(document).ready(function(){
    var saveButton = jQuery(".hg_gmaps_save_api_key_button");
    if (saveButton.length) {
        saveButton.on('click', function () {
            var _this = jQuery(this);
            var key = jQuery(this).closest("form").find(".hg_gmaps_api_key_input").val();
            console.log(key);
            if ( key != undefined ) {
                var data = {
                    action: 'hugeit_maps_save_api_key',
                    nonce: apiKeyL10n.nonce,
                    api_key: key
                };

                jQuery.ajax({
                    url: ajaxurl,
                    type: 'post',
                    data: data,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        _this.attr("disabled", true);
                        _this.parent().find(".spinner").css("visibility", "visible");
                    }
                }).done( function(result){
                    if (result.success) {
                        setTimeout(function () {
                            var successNotice = "<div id='hg_gmaps_api_key_success' class='notice notice-success is-dismissible'>" +
                                "<p class='hg_mui_heading'>GOOGLE API KEY SAVED SUCCESSFULLY!</p>" +
                                "<button type='button' class='notice-dismiss'><span class='screen-reader-text'>Dismiss this notice.</span></button>" +
                                "</div>";
                            var bigNotice = jQuery("#hg_gmaps_no_api_key_big_notice"),
                                freeBanner = jQuery(".free_version_banner"),
                                screenMeta = jQuery("#screen-meta"),
                                apiForm = jQuery(".hg_gmaps_main_api_form");
                            if (bigNotice.length) {
                                bigNotice.replaceWith(successNotice);
                            } else if (freeBanner.length) {
                                freeBanner.after(successNotice);
                            } else if (screenMeta.length) {
                                screenMeta.after(successNotice);
                            } else {
                                jQuery("#wpbody-content").prepend(successNotice);
                            }
                            jQuery("#hg_gmaps_api_key_success .notice-dismiss").on("click", function () {
                                jQuery(this).parent().remove();
                            });

                            if (apiForm.length && apiForm.hasClass("hide")) {
                                apiForm.removeClass("hide");
                                apiForm.find(".hg_gmaps_api_key_input").val(key);
                            }
                        }, 1500);
                        setTimeout(function () {
                            location.reload();
                        },2500);
                    }
                }).always(function(){
                    var form = _this.closest("form");
                    _this.removeAttr('disabled');
                    if (form.hasClass("hg_gmaps_main_api_form")) {
                        form.find("button").css("visibility", "hidden");
                    }

                    form.find(".spinner").css("visibility", "hidden");
                })
            }
            return false;
        });
    }

    jQuery(".hg_gmaps_main_api_form .hg_gmaps_api_key_input").on("keyup", function () {
        if (jQuery(this).val() != "") {
            jQuery(this).closest("form").find("button").css("visibility", "visible");
        }
    });
});