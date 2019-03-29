<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 10/31/2016
 * Time: 7:17 PM
 */

/**
 * Class Hugeit_Maps_Circle
 */
interface Hugeit_Maps_Circle_Interface {
	/**
	 * Hugeit_Maps_Circle constructor.
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
	 * @return Hugeit_Maps_Circle
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
	 * @return Hugeit_Maps_Circle
	 */
	public function set_name( $name );

	/**
	 * @return float
	 */
	public function get_center_lat();

	/**
	 * @param float $center_lat
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_center_lat( $center_lat );

	/**
	 * @return float
	 */
	public function get_center_lng();

	/**
	 * @param float $center_lng
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_center_lng( $center_lng );

	/**
	 * @return int
	 */
	public function get_radius();

	/**
	 * @param int $radius
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_radius( $radius );

	/**
	 * @return int
	 */
	public function get_line_width();

	/**
	 * @param int $line_width
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_line_width( $line_width );

	/**
	 * @return float
	 */
	public function get_line_opacity();

	/**
	 * @param float $line_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_line_opacity( $line_opacity );

	/**
	 * @return string
	 */
	public function get_line_color();

	/**
	 * @param string $line_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_line_color( $line_color );

	/**
	 * @return string
	 */
	public function get_fill_color();

	/**
	 * @param string $fill_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_fill_color( $fill_color );

	/**
	 * @return float
	 */
	public function get_fill_opacity();

	/**
	 * @param float $fill_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_fill_opacity( $fill_opacity );

	/**
	 * @return float
	 */
	public function get_hover_line_opacity();

	/**
	 * @param float $hover_line_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_line_opacity( $hover_line_opacity );

	/**
	 * @return string
	 */
	public function get_hover_line_color();

	/**
	 * @param string $hover_line_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_line_color( $hover_line_color );

	/**
	 * @return string
	 */
	public function get_hover_fill_color();

	/**
	 * @param string $hover_fill_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_fill_color( $hover_fill_color );

	/**
	 * @return float
	 */
	public function get_hover_fill_opacity();

	/**
	 * @param float $hover_fill_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_fill_opacity( $hover_fill_opacity );

	/**
	 * @return int
	 */
	public function get_show_marker();

	/**
	 * @param int $show_marker
	 *
	 * @return Hugeit_Maps_Circle
	 * @throws Exception
	 */
	public function set_show_marker( $show_marker );

	/**
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id );

	/**
	 * Save circle data
	 */
	public function save();
}