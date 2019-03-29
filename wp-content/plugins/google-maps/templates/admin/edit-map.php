<?php
/**
 * Template for map editing
 *
 * @var $map Hugeit_Maps_Map
 */

if( !isset( $map ) ){
	throw new Exception( '"map" variable is not reachable in maps-list-single-item template.' );
}

if( !( $map instanceof Hugeit_Maps_Map ) ){
	throw new Exception( '"map" variable must be instance of Hugeit_Maps_Map class.' );
}

$map_id = $map->get_id();



Hugeit_Maps_Template_Loader::get_template( 'admin/api-key-form.php' );
?>
<form action="" method="post" name="adminform" id="adminform">

	<input type="hidden" name="map_id" id="map_id" value="<?php echo $map->get_id(); ?>"/>

	<div class="map_heading">

		<?php

		do_action( 'before_hugeit_maps_edit_map_header' );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-header-maps-list.php', array( 'map' => $map ) );

		do_action( 'after_hugeit_maps_edit_map_header' );

		?>

	</div>

</form>

<div class="admin_edit_section_container">
	<input type="hidden" id="map_id" name="map_id" value="<?php echo $map_id; ?>"/>
	<ul class="admin_edit_section">
		<?php

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-general-options.php', array( 'map'=>$map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-markers-section.php', array( 'map'=>$map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-polygons-section.php', array( 'map'=>$map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-polylines-section.php', array( 'map'=>$map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-directions-section.php', array( 'map'=>$map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-circles-section.php', array( 'map' => $map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-layers-section.php', array( 'map' => $map ) );

		Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-styling-section.php', array( 'map' => $map ) );

        Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-locator-section.php', array( 'map' => $map ) );

		?>
	</ul>
	<div id="g_maps" >
		<?php Hugeit_Maps_Template_Loader::get_template( 'admin/edit-map-layered-maps.php', array( 'map' => $map ) ); ?>

		<span class="hg_gmaps_map_notice_wrapper"><span class="hg_gmaps_map_notice"></span></span>
	</div>

	<div class="map_database_actions_section">
		<div class="button copy_map_button" data-map-id="<?php echo $map->get_id(); ?>"><?php _e( 'Create Copy Of This Map', 'hg_gmaps' ); ?></div>
		<div class="button extract_to_csv_button" data-map-id="<?php echo $map->get_id(); ?>"><?php _e( 'Export This Map To CSV', 'hg_gmaps' ); ?></div>
	</div>
	<div class="shortcode_containers">
		<div class="shortcode_container">
			<div class="shortcode_heading"><?php _e( 'Shortcode', 'hg_gmaps' ); ?></div>
			<p class="shortcode_description"><?php _e( 'Copy & paste the shortcode directly into any WordPress post or page.', 'hg_gmaps' ); ?></p>
			<div class="shortcode_view">[huge_it_maps id="<?php echo $map->get_id(); ?>"]</div>
		</div>
		<div class="shortcode_container">
			<div class="shortcode_heading"><?php _e( 'Template Include', 'hg_gmaps' ); ?></div>
			<p class="shortcode_description"><?php _e( 'Copy & paste this code into a template file to include the map within your theme.', 'hg_gmaps' ); ?></p>
			<div class="shortcode_view">&lt;?php echo do_shortcode("[huge_it_maps id='<?php echo $map->get_id(); ?>']"); ?&gt;</div>
		</div>
	</div>
</div>

