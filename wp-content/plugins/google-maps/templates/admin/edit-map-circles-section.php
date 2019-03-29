<?php
/**
 * @var $map Hugeit_Maps_Map
 */

?>

<li class="editing_section">
    <div class="editing_heading">
        <span class="heading_icon"><img src="<?php echo HUGEIT_MAPS_IMAGES_URL.'menu-icons/circle.svg'; ?>" width="20" /></span>
        <?php _e( 'Circles', 'hg_gmaps' ); ?>
        <div class="help">?
            <div class="help-block">
                <span class="pnt"></span>
                <p><?php _e( 'Round area, showing the specific range. Right click on map wherever you need to place the circle’s center. Hold pressed and drag to move it', 'hg_gmaps' ); ?></p>
            </div>
        </div>
        <span class="heading_arrow"></span>
    </div>
    <div class="edit_content hide">
        <div id="g_map_circle_options">
            <form action="" method="post">
                <a id="circle_add_button" class="add_button" href="#">+<?php _e( 'Add New Circles', 'hg_gmaps' ); ?></a>
                <div class="hidden_edit_content hide">
                    <a href="#" id="back_circle" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
                    <ul>
                        <li class="has_background">
                            <label for="circle_name"><?php _e( 'Name', 'hg_gmaps' ); ?></label>
                            <input type="text" id="circle_name" name="circle_name" class="circle_options_input"/>
                        </li>
                        <li>
                            <label for="circle_center_addr"><?php _e( 'Center Address', 'hg_gmaps' ); ?></label>
                            <input type="text" class="circle_options_input" id="circle_center_addr" name="circle_center_addr"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_center_lat"><?php _e( 'Center Latitude', 'hg_gmaps' ); ?></label>
                            <input type="text" class="circle_options_input" id="circle_center_lat" name="circle_center_lat"/>
                        </li>
                        <li>
                            <label for="circle_center_lng"><?php _e( 'Center Longitude', 'hg_gmaps' ); ?></label>
                            <input type="text" class="circle_options_input" id="circle_center_lng" name="circle_center_lng"/>
                        </li>

                        <li class="has_background">
                            <label><?php _e( 'Show Marker?', 'hg_gmaps' ); ?></label>
                            <label class="radio_label" for="circle_marker_show"><?php _e( 'YES', 'hg_gmaps' ); ?></label>
                            <input type="radio" class="radio circle_marker_show" id="circle_marker_show" name="circle_marker_show"
                                   value="1"/>
                            <label class="radio_label" for="circle_marker_show"><?php _e( 'NO', 'hg_gmaps' ); ?></label>
                            <input type="radio" class="radio circle_marker_show" id="circle_marker_not_show" name="circle_marker_show"
                                   value="0" checked/>
                        </li>
                        <li>
                            <label for="circle_radius"><?php _e( 'Radius(meter)', 'hg_gmaps' ); ?></label>
                            <input type="number" class="circle_options_input" id="circle_radius" name="circle_radius" value="50000"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_line_width"><?php _e( 'Line Width', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" class="circle_options_input" id="circle_line_width" name="circle_line_width"
                                       data-slider-highlight="true" data-slider-values="<?php echo implode( ',', range( 0, 50) ); ?>" data-slider="true" value="5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">5</span>
                            </div>
                        </li>
                        <li>
                            <label for="circle_line_color"><?php _e( 'Line Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor circle_options_input" id="circle_line_color" name="circle_line_color"
                                   value="FF2B39"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_line_opacity"><?php _e( 'Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" class="circle_options_input" id="circle_line_opacity" name="circle_line_opacity"
                                       data-slider-highlight="true" data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true" value="0.8"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.8</span>
                            </div>
                        </li>
                        <li>
                            <label for="circle_fill_color"><?php _e( 'Fill Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor circle_options_input" id="circle_fill_color" name="circle_fill_color"
                                   value="4FFF72"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_fill_opacity"><?php _e( 'Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px;">
                                <input class="circle_options_input" id="circle_fill_opacity" name="circle_fill_opacity"
                                       data-slider-highlight="true" data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1"
                                       type="text" data-slider="true" value="0.4"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.4</span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_fill_color"><?php _e( 'On-Hover Fill Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" class="jscolor circle_options_input" id="hover_circle_fill_color"
                                   name="hover_circle_fill_color" value="96FFA1"/>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_fill_opacity"><?php _e( 'On-Hover Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px;">
                                <input disabled class="circle_options_input" id="hover_circle_fill_opacity" name="hover_circle_fill_opacity"
                                       data-slider-highlight="true" data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1"
                                       type="text" data-slider="true" value="0.3"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.3</span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_line_color"><?php _e( 'On-Hover Line Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" class="jscolor circle_options_input" id="hover_circle_line_color"
                                   name="hover_circle_line_color" value="FF5C5C"/>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_line_opacity"><?php _e( 'On-Hover Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" class="circle_options_input" id="hover_circle_line_opacity"
                                       name="hover_circle_line_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.6"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.6</span>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <span class="spinner"></span>
                        <input type="submit" class="button-primary" id="circle_submit" name="circle_submit" value="<?php _e( 'Save', 'hg_gmaps' ); ?>"/>

                        <a href="#" id="cancel_circle" class="cancel"><?php _e( 'Cancel', 'hg_gmaps' ); ?></a>
                    </div>
                </div>
            </form>
            <div id="circle_edit_exist_section">
                <div class="edit_list_heading">
                    <div class="list_number"><?php _e( 'ID', 'hg_gmaps' ); ?></div>
                    <div class="edit_list_item"><?php _e( 'Title', 'hg_gmaps' ); ?></div>
                    <div class="edit_list_delete"><?php _e( 'Action', 'hg_gmaps' ); ?></div>
                </div>

                <?php

                $circles = Hugeit_Maps_Query::get_circles( array( 'map_id' => $map->get_id() ) );

                if( $circles ){
                ?>
                <ul class="list_exist" id="circle_list_exist">
                    <?php

                    foreach( $circles as $i=>$circle ){
                        ?>
                        <li class="edit_list" data-list_id="<?php echo $circle->get_id(); ?>">
                            <div class="list_number"><?php echo $i; ?></div>
                            <div class="edit_list_item"><?php echo $circle->get_name(); ?></div>
                            <div class="edit_circle_list_delete edit_list_delete">
                                <form class="edit_list_delete_form" method="post" action="">
                                    <input type="submit" class="button edit_list_delete_submit" name="edit_list_delete_submit"
                                           value="x"/>
                                    <input type="hidden" class="edit_list_delete_type" name="edit_list_delete_type"
                                           value="circle"/>
                                    <input type="hidden" class="edit_list_delete_table" value="hugeit_maps_circles"/>
                                    <input type="hidden" name="delete_circle_id" class="edit_list_delete_id"
                                           value="<?php echo $circle->get_id(); ?>"/>
                                </form>
                                <a href="#" class="button edit_circle_list_item"></a>
                                <input type="hidden" class="circle_edit_id" name="circle_edit_id" value="<?php echo $circle->get_id(); ?>"/>
                            </div>
                        </li>
                        <?php
                    }

                    ?>
                </ul>
                <?php
                }else{
                    echo "<p class='empty_circle'>".__('you have 0 circles on this map','hg_gmaps')."</p>";
                }
                ?>
            </div>
            <form action="" method="post">
                <input type="hidden" id="circle_get_id" name="circle_get_id"/>
                <div class="update_list_item hide">
                    <a href="#" id="back_edit_circle" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
                    <ul>
                        <li class="has_background">
                            <label for="circle_edit_name"><?php _e( 'Name', 'hg_gmaps' ); ?></label>
                            <input type="text" id="circle_edit_name" name="circle_edit_name" class="circle_edit_options_input"/>
                        </li>
                        <li>
                            <label for="circle_edit_center_addr"><?php _e( 'Center Address', 'hg_gmaps' ); ?></label>
                            <input type="text" class="circle_edit_options_input" id="circle_edit_center_addr"
                                   name="circle_edit_center_addr"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_edit_center_lat"><?php _e( 'Center Latitude', 'hg_gmaps' ); ?></label>
                            <input type="text" class="circle_edit_options_input" id="circle_edit_center_lat"
                                   name="circle_edit_center_lat"/>
                        </li>
                        <li>
                            <label for="circle_edit_center_lng"><?php _e( 'Center Longitude', 'hg_gmaps' ); ?></label>
                            <input type="text" class="circle_edit_options_input" id="circle_edit_center_lng"
                                   name="circle_edit_center_lng"/>
                        </li>

                        <li class="has_background">
                            <label><?php _e( 'Show Marker?', 'hg_gmaps' ); ?></label>
                            <label class="radio_label" for="circle_edit_marker_show_true"><?php _e( 'YES', 'hg_gmaps' ); ?></label>
                            <input type="radio" class="radio circle_edit_marker_show" name="circle_edit_marker_show"
                                   id="circle_edit_marker_show_true" value="1">
                            <label class="radio_label" for="circle_edit_marker_show_false"><?php _e( 'NO', 'hg_gmaps' ); ?></label>
                            <input type="radio" class="radio circle_edit_marker_show" name="circle_edit_marker_show"
                                   id="circle_edit_marker_show_false" value="0">
                        </li>
                        <li>
                            <label for="circle_edit_radius"><?php _e( 'Radius(meter)', 'hg_gmaps' ); ?></label>
                            <input type="number" class="circle_edit_options_input" id="circle_edit_radius" name="circle_edit_radius"
                                   value="1000000"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_edit_line_width"><?php _e( 'Line Width', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" class="circle_edit_options_input" id="circle_edit_line_width"
                                       name="circle_edit_line_width" data-slider-highlight="true"
                                       data-slider-values="<?php echo implode( ',', range( 0, 50 ) ); ?>" data-slider="true" value=""/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li>
                            <label for="circle_edit_line_color"><?php _e( 'Line Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor circle_edit_options_input" id="circle_edit_line_color"
                                   name="circle_edit_line_color" value="FF0000"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_edit_line_opacity"><?php _e( 'Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" class="circle_edit_options_input" id="circle_edit_line_opacity"
                                       name="circle_edit_line_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value=""/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li>
                            <label for="circle_edit_fill_color"><?php _e( 'Fill Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor circle_edit_options_input" id="circle_edit_fill_color"
                                   name="circle_edit_fill_color" value="00FF00"/>
                        </li>
                        <li class="has_background">
                            <label for="circle_edit_fill_opacity"><?php _e( 'Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" class="circle_edit_options_input" id="circle_edit_fill_opacity"
                                       name="circle_edit_fill_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value=""/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_edit_fill_color"><?php _e( 'On-Hover Fill Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" class="jscolor circle_options_input" id="hover_circle_edit_fill_color"
                                   name="hover_circle_edit_fill_color"/>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_edit_fill_opacity"><?php _e( 'On-Hover Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px;">
                                <input disabled class="circle_options_input" id="hover_circle_edit_fill_opacity"
                                       name="hover_circle_edit_fill_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" type="text" data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_edit_line_color"><?php _e( 'On-Hover Line Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" class="jscolor circle_options_input" id="hover_circle_edit_line_color"
                                   name="hover_circle_edit_line_color"/>
                        </li>
                        <li class="pro">
                            <label for="hover_circle_edit_line_opacity"><?php _e( 'On-Hover Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" class="circle_options_input" id="hover_circle_edit_line_opacity"
                                       name="hover_circle_edit_line_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1"  data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <span class="spinner"></span>
                        <input type="submit" class="button-primary" id="circle_edit_submit" name="circle_edit_submit" value="<?php _e( 'Save', 'hg_gmaps' ); ?>"/>

                        <a href="#" id="cancel_edit_circle" class="cancel"><?php _e( 'Cancel', 'hg_gmaps' ); ?></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</li>
