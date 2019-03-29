function hugeitMapsJSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    /*If JSONData is not an object then JSON.parse will parse the JSON string in an Object*/
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';
    /*Set Report title in first row or line*/
    CSV += ReportTitle + '\r\n\n';
    /*This condition will generate the Label/Header*/
    if (ShowLabel) {
        var row = "";
        /*This loop will extract the label from 1st index of on array*/
        for (var index in arrData[0]) {
            /*Now convert each value to string and comma-seprated*/
            row += index + ',';
        }
        row = row.slice(0, -1);
        /*append Label row with line break*/
        CSV += row + '\r\n';
    }
    /*1st loop is to extract each row*/
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        row=arrData[i];
        /*2nd loop will extract each column and convert it in string comma-seprated*/
        row.slice(0, row.length - 1);
        /*add a line break after each row*/
        CSV += row + '\r\n';
    }
    if (CSV == '') {
        alert("Invalid data");
        return;
    }
    var fileName = "";
    fileName += ReportTitle.replace(/ /g,"_");
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

jQuery(document).ready(function(){
    jQuery(".extract_to_csv_button").on("click",function(){
        var map_id=jQuery(this).data("map-id"),
            data = {
                action:"hugeit_maps_export_to_csv",
                nonce: extractCSVL10n.nonce,
                map_id:map_id
            };

        jQuery.post(ajaxurl,data,function(response){
            if(response.success){
                var name="";
                if(response.map_name!=""){
                    name=response.map_name;
                }else{
                    name=map_id
                }
                hugeitMapsJSONToCSVConvertor(response.string, "Map Info_"+name, false);
            }

        },'json');
    });
});