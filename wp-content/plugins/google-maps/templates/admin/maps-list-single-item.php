<?php
/**
 * Template for maps list single item
 *
 * @uses $map Hugeit_Maps_Map
 */

if( !isset( $map ) ){
	throw new Exception( '"map" variable is not reachable in maps-list-single-item template.' );
}

if( !( $map instanceof Hugeit_Maps_Map ) ){
	throw new Exception( '"map" variable must be instance of Hugeit_Maps_Map class.' );
}

$map_id = $map->get_id();

$edit_url = admin_url( 'admin.php?page=hugeit_maps&task=edit_map&id='.$map_id );

$edit_url = wp_nonce_url( $edit_url, 'hugeit_maps_edit_map_'.$map_id );

$remove_url = admin_url( 'admin.php?page=hugeit_maps&task=remove_map&id='.$map_id );

$remove_url = wp_nonce_url( $remove_url, 'hugeit_maps_remove_map_'.$map_id );

?>
<tr>
	<td class="map-id"><?php echo $map_id; ?></td>
	<td class="map-name"><a href="<?php echo $edit_url; ?>" ><?php echo esc_html( stripslashes( $map->get_name() ) ); ?></a></td>
	<td class="map-shortcode">[huge_it_maps id="<?php echo $map_id; ?>"]</td>
	<td class="map-delete"><a class="hugeit_maps_delete_map_from_list" href="<?php echo $remove_url; ?>" ><?php _e( 'Delete', 'hg_gmaps' ); ?></a></td>
</tr>
