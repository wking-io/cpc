<?php
/**
 * @var $map Hugeit_Maps_Map
 */

?>

<li class="editing_section">
    <div class="editing_heading">
        <span class="heading_icon"><img src="<?php echo HUGEIT_MAPS_IMAGES_URL.'menu-icons/polyline.svg'; ?>" width="20" /></span>
        <?php _e( 'Polylines', 'hg_gmaps' ); ?>
        <div class="help">?
            <div class="help-block">
                <span class="pnt"></span>
                <p><?php _e( 'Continuous line composed of one or more line segments, which creates specific track. Right click on the map to add point. Hold pressed and drag to move it. Left click to remove it.', 'hg_gmaps' ); ?></p>
            </div>
        </div>
        <span class="heading_arrow"></span>
    </div>
    <div class="edit_content hide">
        <div id="g_map_polyline_options">
            <form action="" method="post">
                <a id="polyline_add_button" class="add_button" href="#">+<?php _e( 'Add New Polyline', 'hg_gmaps' ); ?></a>
                <div class="hidden_edit_content hide">
                    <a href="#" id="back_polyline" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
                    <ul>
                        <li>
                            <label for="polyline_name"><?php _e( 'Name', 'hg_gmaps' ); ?></label>
                            <input type="text" id="polyline_name" name="polyline_name"/>
                        </li>
                        <li>
                            <label for="polyline_coords"><?php _e( 'data', 'hg_gmaps' ); ?></label>
                            <textarea id="polyline_coords" class="polycoords" name="polyline_coords" readonly="readonly"
                                      placeholder="<?php _e( 'Right click on the map to add point. Hold pressed and drag to move it. Left click to remove it.', 'hg_gmaps' ); ?>"></textarea>
                        </li>
                        <li>
                            <label for="polyline_line_opacity"><?php _e( 'Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polyline_line_opacity" id="polyline_line_opacity"
                                       class="polyline_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.9"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.9</span>
                            </div>
                        </li>
                        <li>
                            <label for="polyline_line_color"><?php _e( 'Line Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor polyline_options_input" name="polyline_line_color"
                                   id="polyline_line_color" value="18A326"/>
                        </li>
                        <li>
                            <label for="polyline_line_width"><?php _e( 'Line Width', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polyline_line_width" class="polyline_options_input " id="polyline_line_width"
                                       data-slider-highlight="true" data-slider-values="<?php echo implode( ',', range( 0, 50 ) ); ?>" data-slider="true" value="5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">5</span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_polyline_line_color"><?php _e( 'On-Hover Line Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" class="jscolor polyline_options_input" name="hover_polyline_line_color"
                                   id="hover_polyline_line_color" value="11A000"/>
                        </li>
                        <li class="pro">
                            <label for="hover_polyline_line_opacity"><?php _e( 'On-Hover Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" name="hover_polyline_line_opacity" class="polyline_options_input "
                                       id="hover_polyline_line_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.5</span>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <span class="spinner"></span>
                        <input type="submit" class="button-primary" id="polyline_submit" name="polyline_submit" value="<?php _e( 'Save', 'hg_gmaps' ); ?>"/>
                        <a href="#" id="cancel_polyline" class="cancel"><?php _e( 'Cancel', 'hg_gmaps' ); ?></a>
                    </div>
                </div>
            </form>
            <div id="polyline_edit_exist_section">
                <div class="edit_list_heading">
                    <div class="list_number"><?php _e( 'ID', 'hg_gmaps' ); ?></div>
                    <div class="edit_list_item"><?php _e( 'Title', 'hg_gmaps' ); ?></div>
                    <div class="edit_list_delete"><?php _e( 'Action', 'hg_gmaps' ); ?></div>
                </div>
                <?php

                $polylines = Hugeit_Maps_Query::get_polylines( array( 'map_id' => $map->get_id() ) );

                if( $polylines ){
                    ?>
                    <ul class="list_exist" id="polyline_list_exist">
                        <?php
                        foreach( $polylines as $i=>$polyline ){
                            ?>
                            <li class="edit_list" data-list_id="<?php echo $polyline->get_id(); ?>">
                                <div class="list_number"><?php echo $i; ?></div>
                                <div class="edit_list_item"><?php echo $polyline->get_name(); ?></div>
                                <div class="edit_polyline_list_delete edit_list_delete">
                                    <form class="edit_list_delete_form" method="post" action="">
                                        <input type="submit" class="button edit_list_delete_submit" name="edit_list_delete_submit"
                                               value="x"/>
                                        <input type="hidden" class="edit_list_delete_type" name="edit_list_delete_type"
                                               value="polyline"/>
                                        <input type="hidden" class="edit_list_delete_table" value="hugeit_maps_polylines"/>
                                        <input type="hidden" name="delete_polyline_id" class="edit_list_delete_id"
                                               value="<?php echo $polyline->get_id() ?>"/>
                                    </form>
                                    <a href="#" class="button edit_polyline_list_item"></a>
                                    <input type="hidden" class="polyline_edit_id" name="polyline_edit_id" value="<?php echo $polyline->get_id(); ?>" />
                                </div>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                    <?php
                }else{
                    echo "<p class='empty_polyline'>".__('You have 0 polylines on this map','hg_gmaps')."</p>";
                }
                ?>
            </div>
            <form action="" method="post">
                <input type="hidden" id="polyline_get_id" name="polyline_get_id"/>
                <div class="update_list_item hide">
                    <a href="#" id="back_edit_polyline" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
                    <ul>
                        <li>
                            <label for="polyline_edit_name"><?php _e( 'Name', 'hg_gmaps' ); ?></label>
                            <input type="text" id="polyline_edit_name" name="polyline_edit_name"/>
                        </li>
                        <li>
                            <label for="polyline_edit_coords"><?php _e( 'data', 'hg_gmaps' ); ?></label>
                            <textarea id="polyline_edit_coords" class="polycoords" name="polyline_edit_coords" readonly="readonly"
                                      placeholder="<?php _e( 'Right click on the map to add point. Hold pressed and drag to move it. Left click to remove it.', 'hg_gmaps' ); ?>"></textarea>
                        </li>
                        <li>
                            <label for="polyline_edit_line_opacity"><?php _e( 'Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polyline_edit_line_opacity" id="polyline_edit_line_opacity"
                                       class="polyline_edit_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.9"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.9</span>
                            </div>
                        </li>
                        <li>
                            <label for="polyline_edit_line_color"><?php _e( 'Line Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor polyline_edit_options_input" name="polyline_edit_line_color"
                                   id="polyline_edit_line_color" value="FF0F0F"/>
                        </li>
                        <li>
                            <label for="polyline_edit_line_width"><?php _e( 'Line Width', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polyline_edit_line_width" class="polyline_edit_options_input "
                                       id="polyline_edit_line_width" data-slider-highlight="true"
                                       data-slider-values="<?php echo implode( ',', range( 0, 50 ) ); ?>" data-slider="true" value="5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">5</span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_polyline_edit_line_color"><?php _e( 'On-Hover Line Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" class="jscolor polyline_options_input" name="hover_polyline_edit_line_color"
                                   id="hover_polyline_edit_line_color"/>
                        </li>
                        <li class="pro">
                            <label for="hover_polyline_edit_line_opacity"><?php _e( 'On-Hover Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" name="hover_polyline_edit_line_opacity" class="polyline_options_input "
                                       id="hover_polyline_edit_line_opacity" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <span class="spinner"></span>
                        <input type="submit" class="button-primary" id="polyline_edit_submit" name="polyline_edit_submit" value="<?php _e( 'Save', 'hg_gmaps' ); ?>"/>
                        <a href="#" id="cancel_edit_polyline" class="cancel"><?php _e( 'Cancel', 'hg_gmaps' ); ?></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</li>
