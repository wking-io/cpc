tinymce.PluginManager.add('hg_maps_shortcode', function(editor, url) {
    // Add a button that opens a window
    function popup(  ){
        tb_show("Shortcode Editor", "#TB_inline?width=960&height=800&inlineId=hugeit_maps");
    }

    editor.on('BeforeSetcontent', function(event){
        event.content = replaceShortcodes( event.content );
    });

    //replace from placeholder image to shortcode
    editor.on('GetContent', function(event){
        event.content = restoreShortcodes(event.content);
    });

    //open popup on placeholder double click
    editor.on('click',function(e) {
        var className  = e.target.className.indexOf('hg_maps_shortcode');
        if ( e.target.nodeName == 'IMG' && e.target.className.indexOf('hg_maps_shortcode') > -1 ) {
            var title = e.target.attributes['data-sh-attr'].value;
            title = window.decodeURIComponent(title);

            var content = e.target.attributes['data-sh-content'].value;
            content = window.decodeURIComponent(content);

            var id = getAttr(title,"id");

            popup();
            jQuery("#huge_it_map_select").val(id).trigger('change');

        }
    });

    function getAttr(s, n) {
        n = new RegExp(n + '=\"([^\"]+)\"', 'g').exec(s);
        return n ?  window.decodeURIComponent(n[1]) : '';
    };

    function html( className,data ,con){
        var placeholder = url + '/../../images/google-maps-20-x-20.png';
        data = window.encodeURIComponent( data );
        content = window.encodeURIComponent( con );
        return '<img  src="' + placeholder + '" onmousedown="popup()" class="mceItem ' + className + '" ' + 'data-sh-attr="' + data + '" data-sh-content="'+ content+'" data-mce-resize="false" data-mce-placeholder="1" style="cursor:pointer" />';
    }

    function replaceShortcodes(content){
        return content.replace(/\[huge_it_maps([^\]]*)\]/g, function(all,attr,element) {
            return html( 'hg_maps_shortcode',attr, element);
        });
    }

    var gmap_sh_tag = 'huge_it_maps';

    function restoreShortcodes(content) {
        return content.replace( /(?:<p(?: [^>]+)?>)*(<img [^>]+(hg_maps_shortcode)+[^>]+>)(?:<\/p>)*/g,function(match,image){
            var data = getAttr( image, 'data-sh-attr' );
            var con = getAttr( image, 'data-sh-content' );

            if(data){
                return '<p>[' + gmap_sh_tag + data + ']</p>';
            }
            return match;
        });
    }
});