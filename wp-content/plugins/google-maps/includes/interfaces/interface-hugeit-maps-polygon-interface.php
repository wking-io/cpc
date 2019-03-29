<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Polygon
 */
interface Hugeit_Maps_Polygon_Interface {
	/**
	 * Hugeit_Maps_Polygon constructor.
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
	 * @return Hugeit_Maps_Polygon
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
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_name( $name );

	/**
	 * @return string
	 */
	public function get_data();

	/**
	 * @param string $data
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_data( $data );

	/**
	 * @return float
	 */
	public function get_line_opacity();

	/**
	 * @param float $line_opacity
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_line_opacity( $line_opacity );

	/**
	 * @return string
	 */
	public function get_line_color();

	/**
	 * @param string $line_color
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_line_color( $line_color );

	/**
	 * @return float
	 */
	public function get_fill_opacity();

	/**
	 * @param float $fill_opacity
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_fill_opacity( $fill_opacity );

	/**
	 * @return string
	 */
	public function get_fill_color();

	/**
	 * @param string $fill_color
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_fill_color( $fill_color );

	/**
	 * @return string
	 */
	public function get_url();

	/**
	 * @param string $url
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_url( $url );

	/**
	 * @return float
	 */
	public function get_hover_line_opacity();

	/**
	 * @param float $hover_line_opacity
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_line_opacity( $hover_line_opacity );

	/**
	 * @return string
	 */
	public function get_hover_line_color();

	/**
	 * @param string $hover_line_color
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_line_color( $hover_line_color );

	/**
	 * @return float
	 */
	public function get_hover_fill_opacity();

	/**
	 * @param float $hover_fill_opacity
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_fill_opacity( $hover_fill_opacity );

	/**
	 * @return string
	 */
	public function get_hover_fill_color();

	/**
	 * @param string $hover_fill_color
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_fill_color( $hover_fill_color );

	/**
	 * @return int
	 */
	public function get_line_width();

	/**
	 * @param int $line_width
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_line_width( $line_width );

	/**
	 * Delete a polygon
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