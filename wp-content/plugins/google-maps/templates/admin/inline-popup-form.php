<?php
/**
 * @var $maps Hugeit_Maps_Map[]
 */

$first_map = $maps[0];
?>

<form method="post" action="" >
    <h3>Select The Map</h3>

    <select id="huge_it_map_select" >
    <?php
        foreach ( $maps as $map ) {
            ?>
            <option value="<?php echo $map->get_id(); ?>"><?php echo $map->get_name(); ?></option>
            <?php
        }
    ?>
    </select>
    <button class='button primary' id='hugeitmapinsert'><?php _e( 'Insert Map', 'hg_gmaps' ); ?></button>
    <ul class="tb_popup_form">
        <li class="has_background">
            <label for="map_name"><?php _e( 'Map name', 'hg_gmaps' ); ?></label>
            <input type="text" name="map_name" id="map_name" value="<?php echo $first_map->get_name(); ?>"/>
        </li>
        <li>
            <label for="map_type"><?php _e( 'Map type', 'hg_gmaps' ); ?></label>
            <?php $type = $first_map->get_type(); ?>
            <select id="map_type" name="map_type">
                <option value="ROADMAP" <?php if ( $type == "ROADMAP" ) {
                    echo "selected";
                } ?> >Roadmap
                </option>
                <option value="SATELLITE" <?php if ( $type == "SATELLITE" ) {
                    echo "selected";
                } ?> >Satellite
                </option>
                <option value="HYBRID" <?php if ( $type == "HYBRID" ) {
                    echo "selected";
                } ?> >Hybrid
                </option>
                <option value="TERRAIN" <?php if ( $type == "TERRAIN" ) {
                    echo "selected";
                } ?> >Terrain
                </option>
            </select>
        </li>

        <li class="has_background">
            <label for="map_width"><?php _e( 'Map width', 'hg_gmaps' ); ?></label>
            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                <input name="map_width" id="map_width" data-slider-highlight="true"
                       data-slider-values="0,10,20,30,40,50,60,70,80,90,100" type="text" data-slider="true"
                       value="<?php echo $first_map->get_width(); ?>"/>
                <span style="position:absolute; top: -1px; right: 0;"><?php echo $first_map->get_width(); ?>%</span>
            </div>
        </li>
        <li>
            <label for="map_height"><?php _e( 'Map height', 'hg_gmaps' ); ?></label>
            <input type="text" name="map_height" id="map_height" value="<?php echo $first_map->get_height(); ?>"/>
        </li>
        <li class="has_background">
            <label for="map_align"><?php _e( 'Map align', 'hg_gmaps' ); ?></label>
            <select name="map_align" id="map_align">
                <option value="left" <?php if ( $first_map->get_align() == 'left' ) {
                    echo 'selected';
                }; ?>>left
                </option>
                <option value="center" <?php if ( $first_map->get_align() == 'center' ) {
                    echo 'selected';
                }; ?>>center
                </option>
                <option value="right" <?php if ( $first_map->get_align() == 'right' ) {
                    echo 'selected';
                }; ?>>right
                </option>
            </select>
        </li>
        <li>
            <label for="map_border_radius"><?php _e( 'Border radius', 'hg_gmaps' ); ?></label>
            <input type="text" name="map_border_radius" id="map_border_radius"
                   value="<?php echo $first_map->get_border_radius(); ?>"/>
        </li>
    </ul>
</form>
