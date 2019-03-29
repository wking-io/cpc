<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Handles the database refactoring
 *
 * Class Hugeit_Maps_DB_Refactor
 */
class Hugeit_Maps_DB_Refactor {

	/**
	 * Initialize the database refactoring
	 */
	public static function init() {
		global $wpdb;

		$old_api_key = get_option( 'hg_gmaps_api_key', null );

		if ( ! is_null( $old_api_key ) && $old_api_key != '' ) {

			delete_option( 'hg_gmaps_api_key' );

			update_option( 'hugeit_maps_api_key', $old_api_key );

		}

		self::refactor_maps();

		self::refactor_markers();

		self::refactor_polygons();

		self::refactor_polylines();

		self::refactor_circles();

		self::refactor_directions();

		$old_maps_count = count( $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_maps' ) );
		$new_maps_count = count( Hugeit_Maps_Query::get_maps() );

		if ( $old_maps_count === $new_maps_count ) {

            $wpdb->query( 'DROP TABLE `' . $wpdb->prefix . 'g_circles`, `' . $wpdb->prefix . 'g_directions`, `' . $wpdb->prefix . 'g_maps`, `' . $wpdb->prefix . 'g_markers`, `' . $wpdb->prefix . 'g_polygones`, `' . $wpdb->prefix . 'g_polylines`' );

		}


	}

	/**
	 * transfer all maps from old table into the new table
	 */
	public static function refactor_maps() {
		global $wpdb;

		$maps = $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_maps' );

		foreach ( $maps as $map ) {

			$new_map = new Hugeit_Maps_Map();

			$new_map
				->set_name( $map->name )
				->set_type( $map->type )
				->set_zoom( $map->zoom )
				->set_border_radius( $map->border_radius )
				->set_center_lat( $map->center_lat )
				->set_center_lng( $map->center_lng )
				->set_pan_controller( $map->pan_controller === 'true' )
				->set_zoom_controller( $map->zoom_controller === 'true' )
				->set_type_controller( $map->type_controller === 'true' )
				->set_scale_controller( $map->scale_controller === 'true' )
				->set_street_view_controller( $map->street_view_controller === 'true' )
				->set_overview_map_controller( $map->overview_map_controller === 'true' )
				->set_width( $map->width )
				->set_height( $map->height )
				->set_align( $map->align )
				->set_wheel_scroll( $map->wheel_scroll === 'true' )
				->set_draggable( $map->draggable )
				->set_language( $map->language )
				->set_min_zoom( $map->min_zoom )
				->set_max_zoom( $map->max_zoom )
				->set_info_type( $map->info_type )
				->set_traffic_layer( $map->traffic_layer )
				->set_bike_layer( $map->bike_layer === 'true' )
				->set_transit_layer( $map->transit_layer === 'true' )
				->set_styling_hue( $map->styling_hue )
				->set_styling_lightness( $map->styling_lightness )
				->set_styling_gamma( $map->styling_gamma )
				->set_styling_saturation( $map->styling_saturation )
				->set_animation( $map->animation );


			$new_map->save($map->id);

		}
	}

	/**
	 * transfer all markers from old table into the new table
	 */
	public static function refactor_markers() {
		global $wpdb;

		$markers = $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_markers' );

		foreach ( $markers as $marker ) {

			$new_marker = new Hugeit_Maps_Marker();

			$new_marker
				->set_map_id( $marker->map )
				->set_name( $marker->title )
				->set_lat( $marker->lat )
				->set_lng( $marker->lng )
				->set_animation( $marker->animation )
				->set_description( $marker->description )
				->set_img( $marker->img )
				->set_size( $marker->size );

			$new_marker->save();
		}
	}

	/**
	 * transfer all polygons from old table into the new table
	 */
	public static function refactor_polygons() {
		global $wpdb;

		$polygons = $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_polygones' );

		foreach ( $polygons as $polygon ) {

			$new_polygon = new Hugeit_Maps_Polygon();

			$new_polygon
				->set_map_id( $polygon->map )
				->set_name( $polygon->name )
				->set_data( $polygon->data )
				->set_line_opacity( $polygon->line_opacity )
				->set_line_color( $polygon->line_color )
				->set_fill_opacity( $polygon->fill_opacity )
				->set_fill_color( $polygon->fill_color )
				->set_url( $polygon->url )
				->set_hover_line_opacity( $polygon->hover_line_opacity )
				->set_hover_line_color( $polygon->hover_line_color )
				->set_hover_fill_opacity( $polygon->hover_fill_opacity )
				->set_hover_fill_color( $polygon->hover_fill_color )
				->set_line_width( $polygon->line_width );

			$new_polygon->save();

		}
	}

	/**
	 * transfer all polylines from old table into the new table
	 */
	public static function refactor_polylines() {
		global $wpdb;

		$polylines = $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_polylines' );

		foreach ( $polylines as $polyline ) {

			$new_polyline = new Hugeit_Maps_Polyline();

			$new_polyline
				->set_map_id( $polyline->map )
				->set_name( $polyline->name )
				->set_data( $polyline->data )
				->set_line_opacity( $polyline->line_opacity )
				->set_line_color( $polyline->line_color )
				->set_line_width( $polyline->line_width )
				->set_hover_line_color( $polyline->hover_line_color )
				->set_hover_line_opacity( $polyline->hover_line_opacity );

			$new_polyline->save();
		}
	}

	/**
	 * transfer all circles from old table into the new table
	 */
	public static function refactor_circles() {
		global $wpdb;

		$circles = $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_circles' );

		foreach ( $circles as $circle ) {

			$new_circle = new Hugeit_Maps_Circle();

			$new_circle
				->set_map_id( $circle->map )
				->set_name( $circle->name )
				->set_center_lat( $circle->center_lat )
				->set_center_lng( $circle->center_lng )
				->set_radius( $circle->radius )
				->set_line_width( $circle->line_width )
				->set_line_opacity( $circle->line_opacity )
				->set_line_color( $circle->line_color )
				->set_fill_color( $circle->fill_color )
				->set_fill_opacity( $circle->fill_opacity )
				->set_hover_line_opacity( $circle->hover_line_opacity )
				->set_hover_line_color( $circle->hover_line_color )
				->set_hover_fill_color( $circle->hover_fill_color )
				->set_hover_fill_opacity( $circle->hover_fill_opacity )
				->set_show_marker( $circle->show_marker == '1' );

			$new_circle->save();

		}
	}

	/**
	 * transfer all directions from old table into the new table
	 */
	public static function refactor_directions() {
		global $wpdb;

		$directions = $wpdb->get_results( 'SELECT * FROM ' . $wpdb->prefix . 'g_directions' );

		foreach ( $directions as $direction ) {

			$new_direction = new Hugeit_Maps_Direction();

			$new_direction
				->set_map_id( $direction->map )
				->set_name( $direction->name )
				->set_start_lat( $direction->start_lat )
				->set_start_lng( $direction->start_lng )
				->set_end_lat( $direction->end_lat )
				->set_end_lng( $direction->end_lng )
				->set_line_color( $direction->line_color )
				->set_line_width( $direction->line_width )
				->set_line_opacity( $direction->line_opacity )
				->set_show_steps( $direction->show_steps == 'yes' )
				->set_travel_mode( $direction->travel_mode );

			$new_direction->save();

		}
	}


}
