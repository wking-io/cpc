<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Interface Hugeit_Maps_Map_Interface
 */
interface Hugeit_Maps_Map_Interface {

	/**
	 * Hugeit_Maps_Map_Interface constructor.
	 *
	 * @param $id
	 */
	public function __construct($id = null);

	/**
	 * @return int
	 */
	public function get_id();

	/**
	 * @return string
	 */
	public function get_name();

	/**
	 * @param string $name
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_name( $name );

	/**
	 * @return string
	 */
	public function get_type();

	/**
	 * @param $type
	 *
	 * @return $this
	 * @throws Exception
	 */
	public function set_type( $type );

	/**
	 * @return int
	 */
	public function get_zoom();

	/**
	 * @param int $zoom
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_zoom( $zoom );

	/**
	 * @return int
	 */
	public function get_min_zoom();

	/**
	 * @param int $min_zoom
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_min_zoom( $min_zoom );

	/**
	 * @return int
	 */
	public function get_max_zoom();

	/**
	 * @param int $max_zoom
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_max_zoom( $max_zoom );

	/**
	 * @return int
	 */
	public function get_border_radius();

	/**
	 * @param int $border_radius
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_border_radius( $border_radius );

	/**
	 * @return float
	 */
	public function get_center_lat();

	/**
	 * @param float $center_lat
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_center_lat( $center_lat );

	/**
	 * @return float
	 */
	public function get_center_lng();

	/**
	 * @param float $center_lng
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_center_lng( $center_lng );

	/**
	 * @return string
	 */
	public function get_pan_controller();

	/**
	 * @param int $pan_controller
	 *
	 * @return $this
	 * @throws Exception
	 */
	public function set_pan_controller( $pan_controller );

    /**
     * @param int $locator_enabled
     * @return Hugeit_Maps_Map
     * @throws Exception
     */
    public function set_locator_enabled( $locator_enabled );

	/**
	 * @return string
	 */
	public function get_zoom_controller();

	/**
	 * @param int $zoom_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_zoom_controller( $zoom_controller );

	/**
	 * @return string
	 */
	public function get_type_controller();

	/**
	 * @param int $type_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_type_controller( $type_controller );

	/**
	 * @return string
	 */
	public function get_scale_controller();

	/**
	 * @param int $scale_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_scale_controller( $scale_controller );

	/**
	 * @return string
	 */
	public function get_street_view_controller();

	/**
	 * @param int $street_view_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_street_view_controller( $street_view_controller );

	/**
	 * @return string
	 */
	public function get_overview_map_controller();

	/**
	 * @param int $overview_map_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_overview_map_controller( $overview_map_controller );

	/**
	 * @return int
	 */
	public function get_width();

	/**
	 * @param int $width
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_width( $width );

	/**
	 * @return int
	 */
	public function get_height();

	/**
	 * @param int $height
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_height( $height );

	/**
	 * @return string
	 */
	public function get_align();

	/**
	 * @param string $align
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_align( $align );

	/**
	 * @return string
	 */
	public function get_info_type();

	/**
	 * @param string $info_type
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_info_type( $info_type );

    /**
     * @return int
     */
    public function get_open_infowindows_onload();

    /**
     * @param int $open_infowindows_onload
     * @return Hugeit_Maps_Map
     * @throws Exception
     */
    public function set_open_infowindows_onload($open_infowindows_onload);

	/**
	 * @return string
	 */
	public function get_animation();

	/**
	 * @param string $animation
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_animation( $animation );

	/**
	 * @return string
	 */
	public function get_language();

	/**
	 * @param string $language
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_language( $language );

	/**
	 * @return string
	 */
	public function get_draggable();

	/**
	 * @param int $draggable
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_draggable( $draggable );

	/**
	 * @return string
	 */
	public function get_wheel_scroll();

	/**
	 * @param int $wheel_scroll
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_wheel_scroll( $wheel_scroll );

	/**
	 * @return string
	 */
	public function get_traffic_layer();

	/**
	 * @param int $traffic_layer
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_traffic_layer( $traffic_layer );

	/**
	 * @return string
	 */
	public function get_bike_layer();

	/**
	 * @param int $bike_layer
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_bike_layer( $bike_layer );

	/**
	 * @return string
	 */
	public function get_transit_layer();

	/**
	 * @param int $transit_layer
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_transit_layer( $transit_layer );

	/**
	 * @return string
	 */
	public function get_styling_hue();

	/**
	 * @param string $styling_hue
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_styling_hue( $styling_hue );

	/**
	 * @return string
	 */
	public function get_styling_lightness();

	/**
	 * @param string $styling_lightness
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_styling_lightness( $styling_lightness );

	/**
	 * @return int
	 */
	public function get_styling_gamma();

	/**
	 * @param int $styling_gamma
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_styling_gamma( $styling_gamma );

	/**
	 * @return int
	 */
	public function get_styling_saturation();

	/**
	 * @param int $styling_saturation
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_styling_saturation( $styling_saturation );

	/**
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id );

	/**
	 * Save map data
	 */
	public function save($id=null);


}
