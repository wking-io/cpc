<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Polyline
 */
interface Hugeit_Maps_Polyline_Interface {
	/**
	 * Hugeit_Maps_Polyline constructor.
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
	 * @param int $map_id
	 *
	 * @return Hugeit_Maps_Polyline
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
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_name( $name );

	/**
	 * @return string
	 */
	public function get_data();

	/**
	 * @param string $data
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_data( $data );

	/**
	 * @return float
	 */
	public function get_line_opacity();

	/**
	 * @param float $line_opacity
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_line_opacity( $line_opacity );

	/**
	 * @return string
	 */
	public function get_line_color();

	/**
	 * @param string $line_color
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_line_color( $line_color );

	/**
	 * @return int
	 */
	public function get_line_width();

	/**
	 * @param int $line_width
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_line_width( $line_width );

	/**
	 * @return string
	 */
	public function get_hover_line_color();

	/**
	 * @param string $hover_line_color
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_hover_line_color( $hover_line_color );

	/**
	 * @return float
	 */
	public function get_hover_line_opacity();

	/**
	 * @param float $hover_line_opacity
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_hover_line_opacity( $hover_line_opacity );

	/**
	 * Delete a polyline
	 *
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id );

	/**
	 * Save Polygon data
	 *
	 * @return bool|int|null
	 */
	public function save();
}