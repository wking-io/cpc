<?php
/**
 * @var $map Hugeit_Maps_Map
 */

?>

<li class="markers_editor editing_section">
	<div class="editing_heading">
		<span class="heading_icon"><img src="<?php echo HUGEIT_MAPS_IMAGES_URL.'menu-icons/marker.svg'; ?>" width="20" /></span>
		<?php _e( 'Markers', 'hg_gmaps' ); ?>
		<div class="help">?
			<div class="help-block">
				<span class="pnt"></span>
				<p><?php _e( 'A marker identifies a location on a map. Right-Click on the map to add a Marker. Hold pressed and drag to move it', 'hg_gmaps' ); ?></p>
			</div>
		</div>
		<span class="heading_arrow"></span>
	</div>
	<div class="edit_content hide" id="g_map_marker_options">
		<form action="" method="post">
			<a class="add_button" id="marker_add_button" href="#">+<?php _e( 'Add New Marker', 'hg_gmaps' ); ?></a>
			<div class="hidden_edit_content hide">
				<a href="#" id="back_marker" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
				<ul>
					<li>
						<label for="marker_location"><?php _e( 'Address', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_location" name="marker_location"/>
					</li>
					<li>
						<label for="marker_location_lat"><?php _e( 'Latitude', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_location_lat" name="marker_location_lat"/>
					</li>
					<li>
						<label for="marker_location_lng"><?php _e( 'Longitude', 'hg_gmaps' ); ?> </label>
						<input type="text" id="marker_location_lng" name="marker_location_lng"/>
					</li>
					<li>
						<label for="marker_animation"><?php _e( 'Animation', 'hg_gmaps' ); ?></label>
						<select id="marker_animation" name="marker_animation">
							<option checked value="NONE">None</option>
							<option value="BOUNCE">Bounce</option>
							<option value="DROP">Drop</option>
						</select>
					</li>
					<li>
						<label for="marker_title"><?php _e( 'Title', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_title" name="marker_title"/>
					</li>
					<li class="description_container">
						<label for="marker_description"><?php _e( 'Description', 'hg_gmaps' ); ?><span class="pro_desc"><a href="http://huge-it.com/google-map" target="_blank"><?php _e( 'Go Pro', 'hg_gmaps' ); ?></a>  <?php _e( 'to enable HTML in description', 'hg_gmaps' ); ?></span></label>
						<textarea class="description" id="marker_description" name="marker_description"></textarea>
					</li>
					<li><?php _e( 'Choose Marker Icon', 'hg_gmaps' ); ?></li>
					<li class="marker_image_choose">
						<ul>
							<li>
								<div class="image_block">
									<img class="marker_icon" src="<?php echo HUGEIT_MAPS_IMAGES_URL.'default-icon.png'; ?>" alt=""/>
								</div>
							</li>
							<?php

							$icons = Hugeit_Maps_Marker::get_default_icons();

							foreach( $icons as $icon ){
								?>
								<li>
									<div class="image_block">
										<img class="marker_icon" src="<?php echo HUGEIT_MAPS_IMAGES_URL.'icons/'.$icon.'48.png'; ?>" />
									</div>
								</li>
								<?php
							}

							?>
						</ul>
					</li>
					<li class="pro">
						<label for="marker_image_size">Size of Icon</label>
						<select name="marker_image_size" id="marker_image_size" disabled>
							<?php
							$sizes = Hugeit_Maps_Marker::get_default_icon_sizes();

							foreach( $sizes as $size ){
								$selected = $size == 48 ? 'selected="selected"' : "";
								echo "<option value=\"$size\" $selected>{$size}x{$size}</option>";
							}
							?>
						</select>
					</li>
					<li class="pro">
						<label for="marker_pic"><?php _e( 'Custom Marker Icon', 'hg_gmaps' ); ?></label>
						<input type="text" disabled id="marker_pic" name="marker_pic" placeholder="http://" style="width:29%"/>
						<input type="hidden" id="marker_pic_name" name="marker_pic_name"/>
						<input type="hidden" id="marker_pic_url" name="marker_pic_url"/>
						<input type="button" disabled class="button" id="upload_marker_pic" value="upload image"/>
					</li>
					<div>
						<span class="spinner"></span>
						<input type="submit" class="button-primary" id="marker_submit" name="marker_submit" value="<?php _e( 'Save', 'hg_gmaps' ); ?>" style="width:23%"/>
						<a href="#" id="cancel_marker" class="cancel">cancel</a>
					</div>
				</ul>
			</div>
		</form>
		<div id="markers_edit_exist_section">
			<div class="edit_list_heading">
				<div class="list_number">ID</div>
				<div class="edit_list_item">Title</div>
				<div class="edit_list_delete">Action</div>
			</div>

			<?php

			$markers = Hugeit_Maps_Query::get_markers( array( 'map_id' => $map->get_id() ) );
			if( $markers ) {
				?>
				<ul class="list_exist" id="marker_list_exist">
					<?php
					foreach( $markers as $i=>$marker ){

						?>
						<li class="edit_list" data-list_id="<?php echo $marker->get_id(); ?>">
							<div class="list_number"><?php echo $i; ?></div>
							<div class="edit_list_item"><?php echo $marker->get_name(); ?></div>
							<div class="edit_marker_list_delete edit_list_delete">
								<form class="edit_list_delete_form" method="post" action="">
									<input type="submit" class="button edit_list_delete_submit" name="edit_list_delete_submit" value="x"/>
									<input type="hidden" class="edit_list_delete_type" name="edit_list_delete_type" value="marker"/>
									<input type="hidden" class="edit_list_delete_table" value="hugeit_maps_markers"/>
									<input type="hidden" name="delete_marker_id" class="edit_list_delete_id" value="<?php echo $marker->get_id(); ?>"/>
								</form>
								<a href="#" class="button edit_marker_list_item"></a>
								<input type="hidden" class="marker_edit_id" name="marker_edit_id" value="<?php echo $marker->get_id(); ?>"/>

							</div>
						</li>
						<?php
					}
					?>
				</ul>
				<?php
			}else{
				echo "<p class='empty_marker'>".__('You have 0 markers','hg_gmaps')."</p>";
			}

			?>

		</div>
		<form action="" method="post">
			<input type="hidden" id="marker_get_id" name="marker_get_id"/>

			<div class="update_list_item hide">
				<a href="#" id="back_edit_marker" class="cancel left">◄ <?php _e( 'Back', 'hg_gmaps' ); ?></a>
				<ul>
					<li>
						<label for="marker_edit_location"><?php _e( 'Address', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_edit_location" name="marker_edit_location"/>
					</li>
					<li>
						<label for="marker_edit_location_lat"><?php _e( 'Latitude', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_edit_location_lat" name="marker_edit_location_lat"/>
					</li>
					<li>
						<label for="marker_edit_location_lng"><?php _e( 'Longitude', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_edit_location_lng" name="marker_edit_location_lng"/>
					</li>
					<li>
						<label for="marker_edit_animation"><?php _e( 'Animation', 'hg_gmaps' ); ?></label>
						<select id="marker_edit_animation" name="marker_edit_animation">
							<option selected="selected" value="NONE"><?php _e( 'None', 'hg_gmaps' ); ?></option>
							<option value="BOUNCE">Bounce</option>
							<option value="DROP">Drop</option>
						</select>
					</li>
					<li>
						<label for="marker_edit_title"><?php _e( 'Title', 'hg_gmaps' ); ?></label>
						<input type="text" id="marker_edit_title" name="marker_edit_title"/>
					</li>
					<li class="description_container">
						<label for="marker_edit_description"><?php _e( 'Description', 'hg_gmaps' ); ?><span class="pro_desc"><a href="http://huge-it.com/google-map" target="_blank"><?php _e( 'Go Pro', 'hg_gmaps' ); ?></a>  <?php _e( 'to enable HTML in description', 'hg_gmaps' ); ?></span></label>
						<textarea class="description" id="marker_edit_description" name="marker_edit_description"></textarea>
					</li>
					<li><?php _e( 'Choose Marker Icon', 'hg_gmaps' ); ?></li>
					<li class="marker_image_choose">
						<ul>
							<li>
								<div class="image_block">
									<img class="marker_icon" src="<?php echo HUGEIT_MAPS_IMAGES_URL.'default-icon.png'; ?>" alt=""/>
								</div>
							</li>
							<?php
							$icons = Hugeit_Maps_Marker::get_default_icons();

							foreach( $icons as $icon ){
								?>
								<li>
									<div class="image_block">
										<img class="marker_icon" src="<?php echo HUGEIT_MAPS_IMAGES_URL.'icons/'.$icon.'48.png'; ?>" />
									</div>
								</li>
								<?php
							}
							?>
						</ul>
					</li>
					<li class="pro">
						<label for="marker_edit_image_size"><?php _e( 'Size of Icon', 'hg_gmaps' ); ?></label>
						<select disabled name="marker_edit_image_size" id="marker_edit_image_size">
							<?php
							$sizes = Hugeit_Maps_Marker::get_default_icon_sizes();

							foreach( $sizes as $size ){
								$selected = $size == 48 ? 'selected="selected"' : "";
								echo "<option value=\"$size\" $selected>{$size}x{$size}</option>";
							}
							?>
						</select>
					</li>
					<li class="pro">
						<label for="marker_edit_pic"><?php _e( 'Custom Marker Icon', 'hg_gmaps' ); ?></label>
						<input disabled style="width:29% !important" type="text" id="marker_edit_pic" name="marker_edit_pic"
						       placeholder="http://"/>
						<input type="hidden" id="marker_edit_pic_name" name="marker_edit_pic_name"/>
						<input type="hidden" id="marker_edit_pic_url" name="marker_edit_pic_url"/>
						<input disabled type="button" class="button" id="upload_edit_marker_pic" value="upload image"/>
					</li>
				</ul>
				<div>
					<span class="spinner"></span>
					<input type="submit" class="button-primary" name="marker_edit_submmit" id="marker_edit_submmit" value="Save"/>
					<a href="#" class="cancel" id="cancel_edit_marker">Cancel</a>
				</div>
			</div>
		</form>
	</div>
</li>
