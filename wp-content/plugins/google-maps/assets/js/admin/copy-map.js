jQuery(document).ready(function(){
    jQuery(".copy_map_button").on("click",function(){
        var map_id=jQuery(this).data("map-id");
        var data={
            action:"hugeit_maps_copy_map",
            map_id:map_id
        };
        jQuery.post(ajaxurl,data,function(response){
            if(response.success){
                window.location.replace (response.new_map_edit_link) ;
                return false;
            }
        },"json");
        return false;
    });
});