var hgCloseNoticeTimeout = false;

function hugeitMapsNoticeOptimize(){
    if(jQuery(".hg_gmaps_map_notice_wrapper").length && jQuery(".g_map:not(.hide)").length){
        var bigLeft = jQuery(".g_map:not(.hide)").offset().left;
        var computed = getComputedStyle(jQuery(".g_map:not(.hide)")[0]);
        var width = parseInt(computed.width) - parseInt(jQuery(".hg_gmaps_map_notice_wrapper").width()) - 50;
        var left = jQuery("#g_maps").offset().left;
        jQuery(".hg_gmaps_map_notice_wrapper").css( "left", bigLeft-left+width );
        window.requestAnimationFrame(hugeitMapsNoticeOptimize);
    }

}

function hugeitMapsShowNotice(text){
    jQuery(".hg_gmaps_map_notice").text(text);
    jQuery(".hg_gmaps_map_notice_wrapper").show(0);
    setTimeout(function(){
        if(hgCloseNoticeTimeout){
            clearTimeout(hgCloseNoticeTimeout);
        }
        hgCloseNoticeTimeout = setTimeout(function(){
            hugeitMapsCloseNotice();
        },10000);

        hugeitMapsNoticeOptimize();
    },500);

}

function hugeitMapsCloseNotice(){
    jQuery(".hg_gmaps_map_notice_wrapper").fadeOut();
}

jQuery(document).ready(function(){
    jQuery(window).on("resize",hugeitMapsNoticeOptimize);
    jQuery(".hg_gmaps_map_notice_wrapper").on("click", hugeitMapsCloseNotice);
});