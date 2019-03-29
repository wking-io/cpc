<?php
/**
 * @var $map Hugeit_Maps_Map
 */

?>
<li class="editing_section">
    <div class="editing_heading">
        <span class="heading_icon"><img src="<?php echo HUGEIT_MAPS_IMAGES_URL.'menu-icons/styles.svg'; ?>" width="20" /></span>
        <?php _e( 'Map Styling', 'hg_gmaps' ); ?>
        <div class="help">?
            <div class="help-block">
                <span class="pnt"></span>
                <p><?php _e( 'Choose some color/tone for the current map', 'hg_gmaps' ); ?></p>
            </div>
        </div>
        <span class="heading_arrow"></span>
    </div>
    <div class="edit_content map_options hide">
        <form action="" method="post">
            <ul>
                <li class="pro">
                    <label for="g_map_styling_hue"><?php _e( 'Hue(color)', 'hg_gmaps' ); ?></label>
                    <input disabled type="text" class="jscolor map_styling_options_inputs" id="g_map_styling_hue" name="g_map_styling_hue"
                           value="<?php echo $map->get_styling_hue(); ?>"/>
                </li>
                <li class="pro">
                    <label for="g_map_styling_lightness"><?php _e( 'Lightness', 'hg_gmaps' ); ?></label>
                    <div class="slider-container" style="float:left; width:55%; height:25px; ">
                        <input disabled class="map_styling_options_inputs" name="g_map_styling_lightness" id="g_map_styling_lightness"
                               data-slider-highlight="true" data-slider-values="<?php echo implode( ',' , range( -100, 100 ) ); ?>" type="text" data-slider="true" value="<?php echo $map->get_styling_lightness(); ?>"/>
                        <span style="position:absolute; top: 4px;left: 160px;"><?php echo $map->get_styling_lightness(); ?></span>
                    </div>
                </li>
                <li class="pro">
                    <label for="g_map_styling_saturation"><?php _e( 'Saturation', 'hg_gmaps' ); ?></label>
                    <div class="slider-container" style="float:left; width:55%; height:25px; ">
                        <input disabled class="map_styling_options_inputs" name="g_map_styling_saturation" id="g_map_styling_saturation"
                               data-slider-highlight="true" data-slider-values="<?php echo implode( ',', range( -100, 100 ) ); ?>" type="text" data-slider="true" value="<?php echo $map->get_styling_saturation(); ?>"/>
                        <span style="position:absolute; top: 4px;left: 160px;"><?php echo $map->get_styling_saturation(); ?></span>
                    </div>
                </li>
                <li class="pro">
                    <label for="g_map_styling_gamma"><?php _e( 'Gamma', 'hg_gmaps' ); ?></label>
                    <div class="slider-container" style="float:left; width:55%; height:25px; ">
                        <input disabled class="map_styling_options_inputs" name="g_map_styling_gamma" id="g_map_styling_gamma"
                               data-slider-highlight="true" data-slider-values="<?php echo implode( ',', range( 1, 10 ) ); ?>" type="text" data-slider="true" value="<?php echo $map->get_styling_gamma(); ?>"/>
                        <span style="position:absolute; top: 4px;left: 160px;"><?php echo $map->get_styling_gamma(); ?></span>
                    </div>
                </li>
            </ul>
            <span class="spinner"></span>
            <input disabled type="submit" class="button-primary" id="styling_submit" name="styling_submit" value="<?php _e( 'Save', 'hg_gmaps' ); ?>"/>
            <input disabled type="button" class="button cancel_button" id="styling_set_default" value="<?php _e( 'Default', 'hg_gmaps' ); ?>"/>
        </form>
    </div>
</li>
