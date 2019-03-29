<?php
/**
 *
 */

$new_map_link = admin_url( 'admin.php?page=hugeit_maps&task=create_new_map' );

$new_map_link = wp_nonce_url( $new_map_link, 'hugeit_maps_create_new_map' );
?>
<ul class="maps_list">
			<?php

			$all_maps = Hugeit_Maps_Query::get_maps();

			foreach( $all_maps as $single_map ){

				if( $single_map->get_id() === $map->get_id() ){
					?>
					<li class="active">
						<input type="text" name="map_name_tab" maxlength="250" id="map_name_tab" value="<?php echo $single_map->get_name(); ?>"/>
					</li>
					<?php
				}else{
					?>
					<li>
						<a href="<?php echo $single_map->get_edit_link(); ?>"><?php echo $single_map->get_name(); ?></a>
					</li>
					<?php
				}

			}

			?>
		<li>
			<a class="new_map_button" href="<?php echo $new_map_link ?>">+</a>
		</li>
</ul>