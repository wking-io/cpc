<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Marker
 */
interface Hugeit_Maps_Marker_Interface {
	/**
	 * Hugeit_Maps_Marker constructor.
	 *
	 * @param null $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null );

	/**
	 * @return int
	 */
	public function get_id();

	/**
	 * @return int
	 */
	public function get_map_id();

	/**
	 * @param $map_id
	 *
	 * @return $this
	 * @throws Exception
	 */
	public function set_map_id( $map_id );

	/**
	 * @return string
	 */
	public function get_name();

	/**
	 * @param string $name
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_name( $name );

	/**
	 * @return float
	 */
	public function get_lat();

	/**
	 * @param float $lat
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_lat( $lat );

	/**
	 * @return float
	 */
	public function get_lng();

	/**
	 * @param float $lng
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_lng( $lng );

	/**
	 * @return string
	 */
	public function get_animation();

	/**
	 * @param string $animation
	 *
	 * @return Hugeit_Maps_Marker
	 * @throws Exception
	 */
	public function set_animation( $animation );

	/**
	 * @return string
	 */
	public function get_description();

	/**
	 * @param string $description
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_description( $description );

	/**
	 * @return string
	 */
	public function get_img();

	/**
	 * @param string $img
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_img( $img );

	/**
	 * @return int
	 */
	public function get_size();

	/**
	 * @param int $size
	 *
	 * @return Hugeit_Maps_Marker
	 * @throws Exception
	 */
	public function set_size( $size );

	/**
	 * Delete a marker
	 *
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id );

	/**
	 * Save Marker data
	 *
	 * @return bool|int|null
	 */
	public function save();
}