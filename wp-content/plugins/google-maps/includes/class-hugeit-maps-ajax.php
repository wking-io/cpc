<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Hugeit_Maps_Ajax {

	public static function init() {
		add_action( 'wp_ajax_hugeit_maps_get_info', array( __CLASS__, 'get_info' ) );
		add_action( 'wp_ajax_nopriv_hugeit_maps_get_info', array( __CLASS__, 'get_info' ) );


		add_action( 'wp_ajax_hugeit_maps_save_map', array( __CLASS__, 'save_map' ) );
		add_action( 'wp_ajax_hugeit_maps_copy_map', array( __CLASS__, 'copy_map' ) );
		add_action( 'wp_ajax_hugeit_maps_export_to_csv', array( __CLASS__, 'export_to_csv' ) );
        add_action( 'wp_ajax_hugeit_maps_save_locator', array( __CLASS__, 'save_locator' ) );

		add_action( 'wp_ajax_hugeit_maps_save_marker', array( __CLASS__, 'save_marker' ) );
		add_action( 'wp_ajax_hugeit_maps_edit_marker', array( __CLASS__, 'edit_marker' ) );


		add_action( 'wp_ajax_hugeit_maps_save_polygon', array( __CLASS__, 'save_polygon' ) );
		add_action( 'wp_ajax_hugeit_maps_edit_polygon', array( __CLASS__, 'edit_polygon' ) );


		add_action( 'wp_ajax_hugeit_maps_save_polyline', array( __CLASS__, 'save_polyline' ) );
		add_action( 'wp_ajax_hugeit_maps_edit_polyline', array( __CLASS__, 'edit_polyline' ) );


		add_action( 'wp_ajax_hugeit_maps_save_circle', array( __CLASS__, 'save_circle' ) );
		add_action( 'wp_ajax_hugeit_maps_edit_circle', array( __CLASS__, 'edit_circle' ) );

        add_action( 'wp_ajax_hugeit_maps_edit_locator', array( __CLASS__, 'edit_locator' ) );
        add_action( 'wp_ajax_hugeit_maps_save_new_locator', array( __CLASS__, 'save_new_locator' ) );

		add_action( 'wp_ajax_hugeit_maps_delete_item', array( __CLASS__, 'delete_item' ) );


		add_action( 'wp_ajax_hugeit_maps_change_map_name', array( __CLASS__, 'change_map_name' ) );
		add_action( 'wp_ajax_hugeit_maps_save_api_key', array( __CLASS__, 'save_api_key' ) );
		add_action( 'wp_ajax_hugeit_maps_save_shortcode_options', array( __CLASS__, 'save_shortcode_options' ) );
		add_action( 'wp_ajax_hugeit_maps_shortcode_change_map', array( __CLASS__, 'shortcode_change_map' ) );
		add_action( 'wp_ajax_hugeit_maps_upload_image', array( __CLASS__, 'upload_image' ) );

	}

	/**
	 * Handle the marker image upload with given size
	 * the image is stored inside admin directory in a folder called huge-it-google-map-custom-icons
	 */
	public static function upload_image() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_marker' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		$filename = $_POST['filename'];

		$size = $_POST['size'];

		$url = $_POST['url'];

		$image = wp_get_image_editor( $url );

		$ext = pathinfo( $url, PATHINFO_EXTENSION );

		$image->resize( $size, $size, true );

		$filenameimage = $image->save( 'huge-it-google-map-custom-icons/' . $filename . "" . $size . "." . $ext );

		echo json_encode( array( "success" => $filenameimage['path'] ) );
		die();
	}

	/**
	 * While inserting a shortcode when the map is changed we need to get the current map's info
	 */
	public static function shortcode_change_map() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_save_shortcode_options' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$map = new Hugeit_Maps_Map( $map_id );

		if ( $map ) {
			echo json_encode( array(
				"success"       => 1,
				"name"          => $map->get_name(),
				"type"          => $map->get_type(),
				"width"         => $map->get_width(),
				"height"        => $map->get_height(),
				"align"         => $map->get_align(),
				"border_radius" => $map->get_border_radius(),
			) );
			die();
		}
	}

	/**
	 * Save shortcode options from inline popup
	 */
	public static function save_shortcode_options() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_save_shortcode_options' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$map = new Hugeit_Maps_Map( $map_id );

		try {
			$map
				->set_name( $_REQUEST['name'] )
				->set_type( $_REQUEST['type'] )
				->set_width( $_REQUEST['width'] )
				->set_height( $_REQUEST['height'] )
				->set_align( $_REQUEST['align'] )
				->set_name( $_REQUEST['name'] )
				->set_name( $_REQUEST['name'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $map->save();

		if ( $saved ) {
			echo json_encode( array( "success" => 1 ) );
			die();
		}
	}

	/**
	 * Save styling options
	 */
	public static function save_stylings() {

		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-styling-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$map = new Hugeit_Maps_Map( $map_id );

		$map
			->set_styling_lightness( $_REQUEST['map_lightness'] )
			->set_styling_hue( $_REQUEST['map_hue'] )
			->set_styling_gamma( $_REQUEST['map_gamma'] )
			->set_styling_saturation( $_REQUEST['map_saturation'] );

		$saved = $map->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}
	}

	/**
	 * Save editing circle data
	 */
	public function edit_circle() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-circle-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['id'] ) ) {
			wp_die( __( 'missing "id" parameter', 'hg_gmaps' ) );
		}

		$id = $_REQUEST['id'];

		if ( absint( $id ) != $id ) {
			wp_die( __( '"id" parameter must be non negative integer', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$circle = new Hugeit_Maps_Circle( $id );

		try {
			$circle
				->set_name( $_REQUEST['circle_edit_name'] )
				->set_center_lat( $_REQUEST['circle_edit_center_lat'] )
				->set_center_lng( $_REQUEST['circle_edit_center_lng'] )
				->set_show_marker( $_REQUEST['circle_edit_marker_show'] )
				->set_radius( $_REQUEST['circle_edit_radius'] )
				->set_line_width( $_REQUEST['circle_edit_line_width'] )
				->set_line_color( $_REQUEST['circle_edit_line_color'] )
				->set_line_opacity( $_REQUEST['circle_edit_line_opacity'] )
				->set_fill_color( $_REQUEST['circle_edit_fill_color'] )
				->set_fill_opacity( $_REQUEST['circle_edit_fill_opacity'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $circle->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

	/**
	 * Save new circle data
	 */
	public function save_circle() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-circle-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$circle = new Hugeit_Maps_Circle();

		try {
			$circle
				->set_map_id( $map_id )
				->set_name( $_REQUEST['circle_name'] )
				->set_center_lat( $_REQUEST['circle_center_lat'] )
				->set_center_lng( $_REQUEST['circle_center_lng'] )
				->set_show_marker( $_REQUEST['circle_marker_show'] )
				->set_radius( $_REQUEST['circle_radius'] )
				->set_line_width( $_REQUEST['circle_line_width'] )
				->set_line_color( $_REQUEST['circle_line_color'] )
				->set_line_opacity( $_REQUEST['circle_line_opacity'] )
				->set_fill_color( $_REQUEST['circle_fill_color'] )
				->set_fill_opacity( $_REQUEST['circle_fill_opacity'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $circle->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
				'last_id'    => $saved,
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

	/**
	 * Save polyline editing data
	 */
	public static function edit_polyline() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-polyline-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['id'] ) ) {
			wp_die( __( 'missing "id" parameter', 'hg_gmaps' ) );
		}

		$id = $_REQUEST['id'];

		if ( absint( $id ) != $id ) {
			wp_die( __( '"id" parameter must be non negative integer', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$polyline = new Hugeit_Maps_Polyline( $id );

		try {
			$polyline
				->set_name( $_REQUEST['polyline_edit_name'] )
				->set_data( $_REQUEST['polyline_edit_coords'] )
				->set_line_opacity( $_REQUEST['polyline_edit_line_opacity'] )
				->set_line_color( $_REQUEST['polyline_edit_line_color'] )
				->set_line_width( $_REQUEST['polyline_edit_line_width'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $polyline->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

	/**
	 * Save polyline data
	 */
	public static function save_polyline() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-polyline-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$polyline = new Hugeit_Maps_Polyline();

		try {

			$polyline
				->set_map_id( $map_id )
				->set_name( $_REQUEST['polyline_name'] )
				->set_data( $_REQUEST['polyline_coords'] )
				->set_line_opacity( $_REQUEST['polyline_line_opacity'] )
				->set_line_color( $_REQUEST['polyline_line_color'] )
				->set_line_width( $_REQUEST['polyline_line_width'] );

		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $polyline->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
				'last_id'    => $saved,
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

	/**
	 * Save polygon editing data
	 */
	public static function edit_polygon() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-polygon-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['id'] ) ) {
			wp_die( __( 'missing "id" parameter', 'hg_gmaps' ) );
		}

		$id = $_REQUEST['id'];

		if ( absint( $id ) != $id ) {
			wp_die( __( '"id" parameter must be non negative integer', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$polygon = new Hugeit_Maps_Polygon( $id );

		try {
			$polygon
				->set_name( $_REQUEST['polygone_edit_name'] )
				->set_data( $_REQUEST['polygone_edit_coords'] )
				->set_line_opacity( $_REQUEST['polygone_edit_line_opacity'] )
				->set_line_color( $_REQUEST['polygone_edit_line_color'] )
				->set_line_width( $_REQUEST['polygone_edit_line_width'] )
				->set_fill_opacity( $_REQUEST['polygone_edit_fill_opacity'] )
				->set_fill_color( $_REQUEST['polygone_edit_fill_color'] )
				->set_line_color( $_REQUEST['hover_polygone_edit_line_color'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $polygon->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

    /**
     * Save Front End Locator data
     */
    public static function save_locator() {

        if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-map-save' ) ) {
            wp_die( __( 'Security check failed', 'hg_gmaps' ) );
        }

        if ( ! isset( $_REQUEST['map_id'] ) ) {
            wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
        }

        $map_id = absint( $_REQUEST['map_id'] );

        $map = new Hugeit_Maps_Map( $map_id );

        $map
            ->set_locator_enabled( (int)$_REQUEST['locator_enabled'] )
            ->set_locator_default_address($_REQUEST['locator_default_address']);

        $saved = $map->save();

        if ( $saved ) {

            $map = new Hugeit_Maps_Map( $map_id );

            echo json_encode( array(
                "success"    => 1,
                "hue"        => $map->get_styling_hue(),
                "saturation" => $map->get_styling_saturation(),
                "lightness"  => $map->get_styling_lightness(),
                "gamma"      => $map->get_styling_gamma(),
                "zoom"       => $map->get_zoom(),
                "type"       => $map->get_type(),
                "bike"       => $map->get_bike_layer(),
                "traffic"    => $map->get_traffic_layer(),
                "transit"    => $map->get_transit_layer(),
                "animation"  => $map->get_animation(),
            ) );
            die();
        }
    }

    /**
     * Save locator info
     */
    public static function save_new_locator() {
        if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-locator-save' ) ) {
            wp_die( __( 'Security check failed', 'hg_gmaps' ) );
        }

        if ( ! isset( $_REQUEST['map_id'] ) ) {
            wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
        }

        $map_id = absint( $_REQUEST['map_id'] );

        $locator = new Hugeit_Maps_Locator();

        $locator
            ->set_map_id( $map_id )
            ->set_name( $_REQUEST['name'] )
            ->set_locator_lat( $_REQUEST['locatorLat'] )
            ->set_locator_lng( $_REQUEST['locatorLng'] )
            ->set_locator_addr( $_REQUEST['locatorAddr'] )
            ->set_locator_phone($_REQUEST['locatorPhone'])
            ->set_locator_days($_REQUEST['locatorDays']);

        $saved = $locator->save();

        if ( $saved ) {

            $map = new Hugeit_Maps_Map( $map_id );

            echo json_encode( array(
                "success"    => 1,
                "hue"        => $map->get_styling_hue(),
                "saturation" => $map->get_styling_saturation(),
                "lightness"  => $map->get_styling_lightness(),
                "gamma"      => $map->get_styling_gamma(),
                "zoom"       => $map->get_zoom(),
                "type"       => $map->get_type(),
                "bike"       => $map->get_bike_layer(),
                "traffic"    => $map->get_traffic_layer(),
                "transit"    => $map->get_transit_layer(),
                "animation"  => $map->get_animation(),
                'last_id'    => $saved,
            ) );
            die();

        }

    }

    public static function edit_locator() {

        if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-locator-save' ) ) {
            wp_die( __( 'Security check failed', 'hg_gmaps' ) );
        }

        if ( ! isset( $_REQUEST['id'] ) ) {
            wp_die( __( 'missing "id" parameter', 'hg_gmaps' ) );
        }

        $id = $_REQUEST['id'];

        if ( absint( $id ) != $id ) {
            wp_die( __( '"id" parameter must be non negative integer', 'hg_gmaps' ) );
        }

        if ( ! isset( $_REQUEST['map_id'] ) ) {
            wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
        }

        $map_id = absint( $_REQUEST['map_id'] );

        $locator = new Hugeit_Maps_Locator( absint( $id ) );

        $locator
            ->set_name( $_REQUEST['name'] )
            ->set_locator_lat( $_REQUEST['locatorLat'] )
            ->set_locator_lng( $_REQUEST['locatorLng'] )
            ->set_locator_addr( $_REQUEST['locatorAddr'] )
            ->set_locator_phone($_REQUEST['locatorPhone'])
            ->set_locator_days($_REQUEST['locatorDays']);

        $saved = $locator->save();

        if ( $saved ) {

            $map = new Hugeit_Maps_Map( $map_id );

            echo json_encode( array(
                "success"    => 1,
                "hue"        => $map->get_styling_hue(),
                "saturation" => $map->get_styling_saturation(),
                "lightness"  => $map->get_styling_lightness(),
                "gamma"      => $map->get_styling_gamma(),
                "zoom"       => $map->get_zoom(),
                "type"       => $map->get_type(),
                "bike"       => $map->get_bike_layer(),
                "traffic"    => $map->get_traffic_layer(),
                "transit"    => $map->get_transit_layer(),
                "animation"  => $map->get_animation(),
            ) );
            die();

        }

    }

    /**
	 * Save polygon data
	 */
	public static function save_polygon() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-polygon-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$polygon = new Hugeit_Maps_Polygon();
		try {
			$polygon
				->set_map_id( $_REQUEST['map_id'] )
				->set_name( $_REQUEST['polygon_name'] )
				->set_url( $_REQUEST['polygon_url'] )
				->set_data( $_REQUEST['polygon_coords'] )
				->set_line_opacity( $_REQUEST['polygon_line_opacity'] )
				->set_line_color( $_REQUEST['polygon_line_color'] )
				->set_line_width( $_REQUEST['polygon_line_width'] )
				->set_fill_opacity( $_REQUEST['polygon_fill_opacity'] )
				->set_fill_color( $_REQUEST['polygon_fill_color'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $polygon->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
				'last_id'    => $saved,
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}


	}

	/**
	 * Save marker editing data
	 */
	public static function edit_marker() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-marker-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['id'] ) ) {
			wp_die( __( 'missing "id" parameter', 'hg_gmaps' ) );
		}

		$id = $_REQUEST['id'];

		if ( absint( $id ) != $id ) {
			wp_die( __( '"id" parameter must be non negative integer', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$marker = new Hugeit_Maps_Marker( $id );

		try {
			$marker
				->set_lat( $_REQUEST['marker_edit_location_lat'] )
				->set_lng( $_REQUEST['marker_edit_location_lng'] )
				->set_animation( $_REQUEST['marker_edit_animation'] )
				->set_name( $_REQUEST['marker_edit_title'] )
				->set_description( $_REQUEST['marker_edit_description'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $marker->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

	/**
	 * Save marker data
	 */
	public static function save_marker() {

		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-marker-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];

		$marker = new Hugeit_Maps_Marker();

		try {
			$marker
				->set_map_id( $map_id )
				->set_lat( $_REQUEST['marker_location_lat'] )
				->set_lng( $_REQUEST['marker_location_lng'] )
				->set_animation( $_REQUEST['marker_animation'] )
				->set_name( $_REQUEST['marker_title'] )
				->set_description( $_REQUEST['marker_description'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $marker->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
				'last_id'    => $saved,
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}

	}

	/**
	 * Save map data
	 */
	public static function save_map() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit-maps-map-save' ) ) {
			wp_die( __( 'Security check failed', 'hg_gmaps' ) );
		}

		if ( ! isset( $_REQUEST['map_id'] ) ) {
			wp_die( __( 'missing "map_id" parameter', 'hg_gmaps' ) );
		}

		$map_id = $_REQUEST['map_id'];


		$map = new Hugeit_Maps_Map( $map_id );

		try {
			$map
				->set_name( $_REQUEST['map_name'] )
				->set_pan_controller( $_REQUEST['map_controller_pan'] )
				->set_zoom_controller( $_REQUEST['map_controller_zoom'] )
				->set_type_controller( $_REQUEST['map_controller_type'] )
				->set_scale_controller( $_REQUEST['map_controller_scale'] )
				->set_street_view_controller( $_REQUEST['map_controller_street_view'] )
				->set_overview_map_controller( $_REQUEST['map_controller_overview'] )
				->set_zoom( $_REQUEST['map_zoom'] )
				->set_min_zoom( $_REQUEST['min_zoom'] )
				->set_max_zoom( $_REQUEST['max_zoom'] )
				->set_center_lat( $_REQUEST['map_center_lat'] )
				->set_center_lng( $_REQUEST['map_center_lng'] )
				->set_width( $_REQUEST['map_width'] )
				->set_height( $_REQUEST['map_height'] )
				->set_align( $_REQUEST['map_align'] )
				->set_border_radius( $_REQUEST['map_border_radius'] )
				->set_open_infowindows_onload( $_REQUEST['open_infowindows_onload'] );
		} catch ( Exception $e ) {
			die( $e->getMessage() );
		}

		$saved = $map->save();

		if ( $saved ) {

			$map = new Hugeit_Maps_Map( $map_id );

			echo json_encode( array(
				"success"    => 1,
				"hue"        => $map->get_styling_hue(),
				"saturation" => $map->get_styling_saturation(),
				"lightness"  => $map->get_styling_lightness(),
				"gamma"      => $map->get_styling_gamma(),
				"zoom"       => $map->get_zoom(),
				"type"       => $map->get_type(),
				"bike"       => $map->get_bike_layer(),
				"traffic"    => $map->get_traffic_layer(),
				"transit"    => $map->get_transit_layer(),
				"animation"  => $map->get_animation(),
                "draggable"    => $map->get_draggable(),
                "wheel_scroll" => $map->get_wheel_scroll(),
			) );
			die();

		} else {
			wp_die( 'something went wrong' );
		}
	}

	/**
	 * Get info about current map
	 */
	public static function get_info() {

		if ( ! isset( $_REQUEST['map_id'] ) || absint( $_REQUEST['map_id'] ) != $_REQUEST['map_id'] ) {
			die( 0 );
		}

		$id = $_REQUEST['map_id'];

		$response = array(
			'maps'       => array(),
			'markers'    => array(),
			'polygons'   => array(),
			'polylines'  => array(),
			'circles'    => array(),
			'directions' => array(),
            'locators'   => array(),
		);


		$map = new Hugeit_Maps_Map( (int) $id );

		if ( $map ) {
			$response['maps'][] = array(
				'name'                    => $map->get_name(),
				'info_type'               => $map->get_info_type(),
				'pan_controller'          => $map->get_pan_controller(),
				'zoom_controller'         => $map->get_zoom_controller(),
				'type_controller'         => $map->get_type_controller(),
				'scale_controller'        => $map->get_scale_controller(),
				'street_view_controller'  => $map->get_street_view_controller(),
				'overview_map_controller' => $map->get_overview_map_controller(),
				'type'                    => $map->get_type(),
				'zoom'                    => $map->get_zoom(),
				'center_lat'              => $map->get_center_lat(),
				'center_lng'              => $map->get_center_lng(),
                'draggable'               => $map->get_draggable(),
                'wheel_scroll'            => $map->get_wheel_scroll()
			);
		}

		$markers = Hugeit_Maps_Query::get_markers( array( 'map_id' => $id ) );

		foreach ( $markers as $marker ) {
			$response['markers'][] = array(
				'id'          => $marker->get_id(),
				'size'        => $marker->get_size(),
				'name'        => $marker->get_name(),
				'animation'   => $marker->get_animation(),
				'lat'         => $marker->get_lat(),
				'lng'         => $marker->get_lng(),
				'description' => $marker->get_description(),
				'img'         => $marker->get_img(),
			);
		}

		$polygons = Hugeit_Maps_Query::get_polygons( array( 'map_id' => $id ) );

		foreach ( $polygons as $i => $polygon ) {

			$response['polygons'][ $i ] = array(
				'id'                 => $polygon->get_id(),
				'name'               => $polygon->get_name(),
				'url'                => $polygon->get_url(),
				'line_width'         => $polygon->get_line_width(),
				'line_opacity'       => $polygon->get_line_opacity(),
				'line_color'         => $polygon->get_line_color(),
				'fill_opacity'       => $polygon->get_fill_opacity(),
				'fill_color'         => $polygon->get_fill_color(),
				'hover_line_color'   => $polygon->get_hover_line_color(),
				'hover_line_opacity' => $polygon->get_hover_line_opacity(),
				'hover_fill_color'   => $polygon->get_hover_fill_color(),
				'hover_fill_opacity' => $polygon->get_hover_fill_opacity(),
				'latlng'             => array(),
			);
			/* splits the string by brackets */
			preg_match_all( '/\(([^\)]*)\)/', $polygon->get_data(), $matches );
			foreach ( $matches[1] as $latlng ) {
				/* splits the comma separated strings */
				preg_match_all( "/[^,]*[\d+][.?][\d+]*/", $latlng, $results );
				foreach ( $results as $result ) {
					$response['polygons'][ $i ]['latlng'][] = array(
						'lat' => $result[0],
						'lng' => $result[1]
					);
				}
			}
		}


		$polylines = Hugeit_Maps_Query::get_polylines( array( 'map_id' => $id ) );

		foreach ( $polylines as $i => $polyline ) {
			$response['polylines'][ $i ] = array(
				'id'                 => $polyline->get_id(),
				'name'               => $polyline->get_name(),
				'line_width'         => $polyline->get_line_width(),
				'line_opacity'       => $polyline->get_line_opacity(),
				'line_color'         => $polyline->get_line_color(),
				'hover_line_color'   => $polyline->get_hover_line_color(),
				'hover_line_opacity' => $polyline->get_hover_line_opacity(),
				'latlng'             => array(),
			);
			/* splits the string by brackets */
			preg_match_all( '/\(([^\)]*)\)/', $polyline->get_data(), $matches );
			foreach ( $matches[1] as $latlng ) {
				/* splits the comma separated strings */
				preg_match_all( "/[^,]*[\d+][.?][\d+]*/", $latlng, $results );
				foreach ( $results as $result ) {
					$response['polylines'][ $i ]['latlng'][] = array(
						'lat' => $result[0],
						'lng' => $result[1]
					);
				}
			}
		}

		$circles = Hugeit_Maps_Query::get_circles( array( 'map_id' => $id ) );

		foreach ( $circles as $circle ) {
			$response['circles'][] = array(
				'id'                 => $circle->get_id(),
				'name'               => $circle->get_name(),
				'center_lat'         => $circle->get_center_lat(),
				'center_lng'         => $circle->get_center_lng(),
				'radius'             => $circle->get_radius(),
				'hover_fill_color'   => $circle->get_hover_fill_color(),
				'hover_fill_opacity' => $circle->get_hover_fill_opacity(),
				'hover_line_color'   => $circle->get_hover_line_color(),
				'hover_line_opacity' => $circle->get_hover_line_opacity(),
				'line_width'         => $circle->get_line_width(),
				'line_color'         => $circle->get_line_color(),
				'line_opacity'       => $circle->get_line_opacity(),
				'fill_color'         => $circle->get_fill_color(),
				'fill_opacity'       => $circle->get_fill_opacity(),
				'show_marker'        => $circle->get_show_marker(),
			);
		}

        $locators = Hugeit_Maps_Query::get_locator( array( 'map_id' => $id ) );

        foreach ( $locators as $locator ) {
            $response['locators'][] = array(
                'id'            => $locator->get_id(),
                'name'          => $locator->get_name(),
                'locator_lat'   => $locator->get_locator_lat(),
                'locator_lng'   => $locator->get_locator_lng(),
                'locator_addr'  => $locator->get_locator_addr(),
                'locator_phone' => $locator->get_locator_phone(),
                'locator_days' => $locator->get_locator_days(),
            );
        }

		$directions = Hugeit_Maps_Query::get_directions( array( 'map_id' => $id ) );

		foreach ( $directions as $direction ) {
			$response['directions'][] = array(
				'id'           => $direction->get_id(),
				'name'         => $direction->get_name(),
				'start_lat'    => $direction->get_start_lat(),
				'start_lng'    => $direction->get_start_lng(),
				'end_lat'      => $direction->get_end_lat(),
				'end_lng'      => $direction->get_end_lng(),
				'show_steps'   => $direction->get_show_steps(),
				'travel_mode'  => $direction->get_travel_mode(),
				'line_width'   => $direction->get_line_width(),
				'line_color'   => $direction->get_line_color(),
				'line_opacity' => $direction->get_line_opacity(),
			);
		}

		echo json_encode( array( "success" => $response ) );
		die();


	}

	/**
	 * Save API key
	 */
	public static function save_api_key() {
		if ( isset( $_REQUEST['nonce'] ) && ! empty( $_REQUEST['nonce'] ) && wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_save_api_key' ) && isset( $_REQUEST['api_key'] ) && ! empty( $_REQUEST['api_key'] ) ) {
			update_option( 'hugeit_maps_api_key', $_REQUEST['api_key'] );
			echo json_encode( array( "success" => 1 ) );
			die();
		}
		die( 0 );
	}

	/**
	 * Delete an item from table
	 * todo
	 */
	public static function delete_item() {

		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_delete_item' ) ) {
			die( 'security check failed' );
		}

		global $wpdb;
		$table = $_POST['table'];
		if ( $table == "hugeit_maps_markers" || $table == "hugeit_maps_polygons" || $table == "hugeit_maps_polylines" || $table == "hugeit_maps_circles" || $table == "hugeit_maps_directions" || $table == "hugeit_maps_stores" ) {
			$table_name = $wpdb->prefix . $table;
			$sql        = $wpdb->prepare( "DELETE FROM %s WHERE id=%d", $table_name, $_POST['id'] );
			$sql        = str_replace( "'", "", $sql );
			if ( $wpdb->query( $sql ) ) {
				echo json_encode( array( "success" => 1 ) );
				die();
			} else {
				echo json_encode( array( "error" => $wpdb->last_error . "        " . $sql ) );
				die();
			}
		} else {
			echo json_encode( array( "error" => "wrong table name" ) );
			die();
		}

	}

	public static function change_map_name() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_save_map' ) ) {
			die( 'security check failed' );
		}

		$name = $_REQUEST['name'];
		$id   = $_REQUEST['id'];

		$map = new Hugeit_Maps_Map( $id );

		$map->set_name( $name );

		$saved = $map->save();

		if ( $saved ) {
			echo json_encode( array( "success" => 1 ) );
			die();
		} else {
			die( 'something went wrong' );
		}

	}

	/**
	 * Export current map to CSV Format
	 * todo: create import functionality
	 */
	public static function export_to_csv() {
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'hugeit_maps_extract_to_csv' ) ) {
			die( 'security check failed' );
		}

		global $wpdb;
		$id = $_POST['map_id'];

		$map = new Hugeit_Maps_Map( $id );

		$map_array = array(
			'Map ID:' . $id,
			'name:' . $map->get_name() . ', type :' . $map->get_type() . ', zoom: ' . $map->get_zoom() . ', border radius: ' . $map->get_border_radius() . ', center latitude: ' . $map->get_center_lat() . ', center longitude: ' . $map->get_center_lng() . ', width: ' . $map->get_width() . '%, height: ' . $map->get_height() . 'px, align:' . $map->get_align() . ', wheel scroll:' . $map->get_wheel_scroll() . ', draggable: ' . $map->get_draggable() . ', language:' . $map->get_language() . ', minimum zoom: ' . $map->get_min_zoom() . ', max_zoom:' . $map->get_max_zoom() . ', info_type: ' . $map->get_info_type(),
		);

		$markers = $map->get_markers();
		if ( $markers ) {
			array_push( $map_array, 'Markers' );
			foreach ( $markers as $marker ) {
				array_push( $map_array, 'ID: ' . $marker->get_id() . ', title: ' . $marker->get_name() . ', latitude: ' . $marker->get_lat() . ', longitude:' . $marker->get_lng() . ', animation:' . $marker->get_animation() . ', description:' . $marker->get_description() . ', image:' . $marker->get_img() );
			}
		}

		$polygons = $map->get_polygons();

		if ( $polygons ) {
			array_push( $map_array, 'Polygons' );
			foreach ( $polygons as $polygon ) {
				array_push( $map_array, 'name :' . $polygon->get_name() . ', data :' . $polygon->get_data() . ', line transparency :' . $polygon->get_line_opacity() . ', line color :' . $polygon->get_line_color() . ', fill transparency:' . $polygon->get_fill_opacity() . ', fill color :' . $polygon->get_fill_color() . ', link :' . $polygon->get_url() . ', hover line transparency :' . $polygon->get_hover_line_opacity() . ', hover line color :' . $polygon->get_hover_line_color() . ', hover fill transparency :' . $polygon->get_fill_opacity() . ', hover line color :' . $polygon->get_hover_line_color() . ', line width :' . $polygon->get_line_width() );
			}
		}

		$polylines = $map->get_polylines();

		if ( $polylines ) {
			array_push( $map_array, 'Polylines' );
			foreach ( $polylines as $polyline ) {
				array_push( $map_array, 'name :' . $polyline->get_name() . ', data :' . $polyline->get_data() . ', line transparency :' . $polyline->get_line_opacity() . ', line color :' . $polyline->get_line_color() . ', line width :' . $polyline->get_line_width() . ', hover line color :' . $polyline->get_hover_line_color() . ', hover line transparency :' . $polyline->get_name() );
			}
		}

		$circles = $map->get_circles();

		if ( $circles ) {
			array_push( $map_array, 'Circles' );
			foreach ( $circles as $circle ) {
				array_push( $map_array, 'name:' . $circle->get_name() . ', center latitude:' . $circle->get_center_lat() . ', center longitude:' . $circle->get_center_lng() . ', radius:' . $circle->get_radius() . ', line width:' . $circle->get_line_width() . ', line transparency:' . $circle->get_line_opacity() . ', line color:' . $circle->get_line_color() . ', fill color:' . $circle->get_fill_color() . ', fill transparency:' . $circle->get_fill_opacity() . ', hover line transparency:"' . $circle->get_hover_line_opacity() . ', hover line color:' . $circle->get_hover_line_color() . ', hover fill color:' . $circle->get_hover_fill_color() . ', hover fill transparency:' . $circle->get_fill_opacity() . ', show marker(0/1=off/on):' . $circle->get_show_marker() );
			}
		}

        $locators = $map->get_locator();

        if ( $locators ) {
            array_push( $map_array, 'Locators' );
            foreach ( $locators as $locator ) {
                array_push( $map_array, 'name:' . $locator->get_name() . ', locator latitude: ' . $locator->get_locator_lat() . ', locator longitude: ' . $locator->get_locator_lng() . ', locator address: ' . $locator->get_locator_addr() . ', locator phone: ' . $locator->get_locator_phone() . ', locator days: ' . $locator->get_locator_days());
            }
        }

		$directions = $map->get_directions();

		if ( $directions ) {
			array_push( $map_array, 'Directions' );
			foreach ( $directions as $direction ) {
				array_push( $map_array, 'name:' . $direction->get_name() . ', starting point latitude: ' . $direction->get_start_lat() . ', starting point longitude: ' . $direction->get_start_lng() . ', ending point latitude' . $direction->get_end_lat() . ', ending point longitude: ' . $direction->get_end_lng() . ', line color: ' . $direction->get_line_color() . ', line width: ' . $direction->get_line_width() . ', line opacity: ' . $direction->get_line_opacity() . ', show steps(1/0=on/off): ' . $direction->get_show_steps() . ', travel mode: ' . $direction->get_travel_mode() );
			}
		}

		echo json_encode( array( "success" => 1, "string" => $map_array, "map_name" => $map->get_name() ) );
		die();
	}

	public static function copy_map() {
		$id = intval( $_POST['map_id'] );
		if ( ! $id ) {
			die( '"id" parameter must be not negative integer.' );
		}

		$map = new Hugeit_Maps_Map( $id );

		$new_map = clone $map;

		$new_map->set_name( 'Copy of ' . $new_map->get_name() );

		$new_map->save();

		$markers = Hugeit_Maps_Query::get_markers( array( 'map_id' => $map->get_id() ) );

		if ( $markers ) {
			foreach ( $markers as $marker ) {
				$new_marker = clone $marker;

				$new_marker->set_map_id( $new_map->get_id() );

				$new_marker->save();

			}
		}

		$polygons = Hugeit_Maps_Query::get_polygons( array( 'map_id' => $map->get_id() ) );

		if ( $polygons ) {
			foreach ( $polygons as $polygon ) {
				$new_polygon = clone $polygon;

				$new_polygon->set_map_id( $new_map->get_id() );

				$new_polygon->save();

			}
		}

		$polylines = Hugeit_Maps_Query::get_polylines( array( 'map_id' => $map->get_id() ) );

		if ( $polylines ) {
			foreach ( $polylines as $polyline ) {
				$new_polyline = clone $polyline;

				$new_polyline->set_map_id( $new_map->get_id() );

				$new_polyline->save();

			}
		}

		$circles = Hugeit_Maps_Query::get_circles( array( 'map_id' => $map->get_id() ) );

		if ( $circles ) {
			foreach ( $circles as $circle ) {
				$new_circle = clone $circle;

				$new_circle->set_map_id( $new_map->get_id() );

				$new_circle->save();

			}
		}

		$directions = Hugeit_Maps_Query::get_directions( array( 'map_id' => $map->get_id() ) );

		if ( $directions ) {
			foreach ( $directions as $direction ) {
				$new_direction = clone $direction;

				$new_direction->set_map_id( $new_map->get_id() );

				$new_direction->save();

			}
		}

        $locators = Hugeit_Maps_Query::get_locator( array( 'map_id' => $map->get_id() ) );

        if ( $locators ) {
            foreach ( $locators as $locator ) {
                $new_locator = clone $locator;

                $new_locator->set_map_id( $new_map->get_id() );

                $new_locator->save();

            }
        }


		echo json_encode( array( "success"           => 1,
		                         'new_map_id'        => $new_map->get_id(),
		                         "new_map_edit_link" => $new_map->get_edit_link()
		) );
		die();
	}

}
