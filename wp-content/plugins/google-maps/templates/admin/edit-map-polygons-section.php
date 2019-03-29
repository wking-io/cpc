<?php
/**
 * @var $map Hugeit_Maps_Map
 */

?>
<li class="editing_section">
    <div class="editing_heading">
        <span class="heading_icon"><img src="<?php echo HUGEIT_MAPS_IMAGES_URL.'menu-icons/polygon.svg'; ?>" width="20" /></span>
        <?php _e( 'Polygons', 'hg_gmaps' ); ?>
        <div class="help">?
            <div class="help-block">
                <span class="pnt"></span>
                <p><?php _e( 'Bounded highlighted area on the map, showing the specific range, limited with geometric figure. Right click on the map to add point. Hold pressed and drag to move it. Left click to remove it.', 'hg_gmaps' ); ?></p>
            </div>
        </div>
        <span class="heading_arrow"></span>
    </div>
    <div class="edit_content hide">
        <div id="g_map_polygone_options">
            <form action="" method="post">
                <a id="polygon_add_button" class="add_button clear" href="#">+<?php _e( 'Add New Polygon', 'hg_gmaps' ); ?></a>
                <div class="hidden_edit_content hide">
                    <a href="#" id="back_polygone" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
                    <ul>
                        <li class="has_background">
                            <label for="polygone_name"><?php _e( 'Name', 'hg_gmaps' ); ?></label>
                            <input type="text" name="polygone_name" id="polygone_name"/>
                        </li>
                        <li class="description_container">
                            <label for="polygone_coords">data</label>
                            <textarea id="polygone_coords" class="polycoords" name="polygone_coords" readonly="readonly" placeholder="<?php _e( 'Right click on the map to add point. Hold pressed and drag to move it. Left click to remove it.', 'hg_gmaps' ); ?>"></textarea>
                        </li>
                        <li>
                            <label for="polygone_line_opacity"><?php _e( 'Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px;">
                                <input type="text" name="polygone_line_opacity" id="polygone_line_opacity"
                                       class="polygone_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.9"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.9</span>
                            </div>
                        </li>

                        <li class="has_background">
                            <label for="polygone_line_color"><?php _e( 'Line Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor polygone_options_input" name="polygone_line_color" id="polygone_line_color" value="FF0F0F"/>
                        </li>
                        <li>
                            <label for="polygone_line_width"><?php _e( 'Line Width', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px;">
                                <input type="text" name="polygone_line_width" class="polygone_options_input" id="polygone_line_width"
                                       data-slider-highlight="true" data-slider-values="<?php echo implode( ',', range( 0, 50 ) ); ?>" data-slider="true" value="5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">5</span>
                            </div>
                        </li>
                        <li class="has_background">
                            <label for="polygone_fill_opacity"><?php _e( 'Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polygone_fill_opacity" id="polygone_fill_opacity"
                                       class="polygone_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.5</span>
                            </div>
                        </li>
                        <li>
                            <label for="polygone_fill_color"><?php _e( 'Fill Color', 'hg_gmaps' ); ?></label>
                            <input type="text" name="polygone_fill_color" id="polygone_fill_color"
                                   class="jscolor polygone_options_input" value="5DFF0D"/>
                        </li>
                        <li class="pro">
                            <label for="polygone_url"><?php _e( 'Link', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" name="polygone_url" id="polygone_url" placeholder="http://"/>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_fill_opacity"><?php _e( 'On-Hover Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div disabled="" class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="hover_polygone_fill_opacity" id="hover_polygone_fill_opacity"
                                       class="polygone_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.5</span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_fill_color"><?php _e( 'On-Hover Fill Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" name="hover_polygone_fill_color" id="hover_polygone_fill_color"
                                   class="jscolor polygone_options_input" value="75FF7E"/>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_line_opacity"><?php _e( 'On-Hover Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" name="hover_polygone_line_opacity" id="hover_polygone_line_opacity"
                                       class="polygone_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"
                                       value="0.5"/>
                                <span style="position:absolute; top: 4px;left: 160px;">0.5</span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_line_color"><?php _e( 'On-Hover Line Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" name="hover_polygone_line_color" id="hover_polygone_line_color"
                                   class="jscolor polygone_options_input" value="FF80B7"/>
                        </li>

                    </ul>
                    <div>
                        <span class="spinner"></span>
                        <input type="submit" class="button-primary" name="polygone_submit" id="polygone_submit" value="Save"/>
                        <a href="#" id="cancel_polygone" class="cancel"><?php _e( 'Cancel', 'hg_gmaps' ); ?></a>
                    </div>
                </div>
            </form>
            <div id="polygone_edit_exist_section">
                <div class="edit_list_heading">
                    <div class="list_number"><?php _e( 'ID', 'hg_gmaps' ); ?></div>
                    <div class="edit_list_item"><?php _e( 'Title', 'hg_gmaps' ); ?></div>
                    <div class="edit_list_delete"><?php _e( 'Action', 'hg_gmaps' ); ?></div>
                </div>

                <?php

                $polygons = Hugeit_Maps_Query::get_polygons( array( 'map_id' => $map->get_id() ) );

                if( $polygons ){
                    ?>
                    <ul class="list_exist" id="polygone_list_exist">
                        <?php
                        foreach( $polygons as $i=>$polygon ){
                            ?>
                            <li class="edit_list" data-list_id="<?php echo $polygon->get_id(); ?>">
                                <div class="list_number"><?php echo $i; ?></div>
                                <div class="edit_list_item"><?php echo $polygon->get_name(); ?></div>
                                <div class="edit_polygone_list_delete edit_list_delete">
                                    <form class="edit_list_delete_form" method="post" action="">
                                        <input type="submit" class="button edit_list_delete_submit" name="edit_list_delete_submit" value="x"/>
                                        <input type="hidden" class="edit_list_delete_type" name="edit_list_delete_type" value="polygone"/>
                                        <input type="hidden" class="edit_list_delete_table" value="hugeit_maps_polygons"/>
                                        <input type="hidden" name="delete_polygone_id" class="edit_list_delete_id" value="<?php echo $polygon->get_id(); ?>"/>
                                    </form>
                                    <a href="#" class="button edit_polygone_list_item"></a>
                                    <input type="hidden" class="polygone_edit_id" name="polygone_edit_id" value="<?php echo $polygon->get_id(); ?>"/>
                                </div>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                    <?php
                }else{
                    echo "<p class='empty_polygon'>".__( 'You have 0 polygones on this map', 'hg_gmaps' ) ."</p>";
                }
                ?>
            </div>
            <form action="" method="post">
                <input type="hidden" id="polygone_get_id" name="polygone_get_id"/>
                <div class="update_list_item hide">
                    <a href="#" id="back_edit_polygone" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
                    <ul>
                        <li class="has_background">
                            <label for="polygone_edit_name"><?php _e( 'Name', 'hg_gmaps' ); ?></label>
                            <input type="text" name="polygone_edit_name" id="polygone_edit_name"/>
                        </li>
                        <li class="description_container">
                            <label for="polygone_edit_coords">data</label>
                            <textarea id="polygone_edit_coords" class="polycoords" name="polygone_edit_coords" readonly="readonly"
                                      placeholder="<?php _e( 'Right click on the map to add point. Hold pressed and drag to move it. Left click to remove it.', 'hg_gmaps' ); ?>"></textarea>
                        </li>
                        <li>
                            <label for="polygone_edit_line_opacity"><?php _e( 'Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polygone_edit_line_opacity" id="polygone_edit_line_opacity"
                                       class="polygone_edit_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li class="has_background">
                            <label for="polygone_edit_line_color"><?php _e( 'Line Color', 'hg_gmaps' ); ?></label>
                            <input type="text" class="jscolor polygone_edit_options_input" name="polygone_edit_line_color"
                                   id="polygone_edit_line_color" value=""/>
                        </li>
                        <li>
                            <label for="polygone_edit_line_width"><?php _e( 'Line Width', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polygone_edit_line_width" class="polygone_edit_options_input"
                                       id="polygone_edit_line_width" data-slider-highlight="true"
                                       data-slider-values="<?php echo implode( ',', range( 0, 50 ) ); ?>" data-slider="true" value=""/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li class="has_background">
                            <label for="polygone_edit_fill_opacity"><?php _e( 'Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input type="text" name="polygone_edit_fill_opacity" id="polygone_edit_fill_opacity"
                                       class="polygone_edit_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li>
                            <label for="polygone_edit_fill_color"><?php _e( 'Fill Color', 'hg_gmaps' ); ?></label>
                            <input type="text" name="polygone_edit_fill_color" id="polygone_edit_fill_color"
                                   class="jscolor polygone_edit_options_input" value=""/>
                        </li>
                        <li class="pro">
                            <label for="polygone_edit_url"><?php _e( 'Link', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" name="polygone_edit_url" id="polygone_edit_url" placeholder="http://"/>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_edit_fill_opacity"><?php _e( 'On-Hover Fill Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" name="hover_polygone_edit_fill_opacity" id="hover_polygone_edit_fill_opacity"
                                       class="polygone_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_edit_fill_color"><?php _e( 'On-Hover Fill Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" name="hover_polygone_edit_fill_color" id="hover_polygone_edit_fill_color"
                                   class="jscolor polygone_options_input"/>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_edit_line_opacity"><?php _e( 'On-Hover Line Transparency', 'hg_gmaps' ); ?></label>
                            <div class="slider-container" style="float:left; width:55%; height:25px; ">
                                <input disabled type="text" name="hover_polygone_edit_line_opacity" id="hover_polygone_edit_line_opacity"
                                       class="polygone_options_input" data-slider-highlight="true"
                                       data-slider-values="0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1" data-slider="true"/>
                                <span style="position:absolute; top: 4px;left: 160px;"></span>
                            </div>
                        </li>
                        <li class="pro">
                            <label for="hover_polygone_edit_line_color"><?php _e( 'On-Hover Line Color', 'hg_gmaps' ); ?></label>
                            <input disabled type="text" name="hover_polygone_edit_line_color" id="hover_polygone_edit_line_color"
                                   class="jscolor polygone_options_input"/>
                        </li>

                    </ul>
                    <div>
                        <span class="spinner"></span>
                        <input type="submit" class="button-primary" name="polygone_edit_submit" id="polygone_edit_submit"
                               value="<?php _e( 'Save', 'hg_gmaps' ); ?>"/>
                        <a href="#" id="cancel_edit_polygone" class="cancel"><?php _e( 'Cancel', 'hg_gmaps' ); ?></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</li>
