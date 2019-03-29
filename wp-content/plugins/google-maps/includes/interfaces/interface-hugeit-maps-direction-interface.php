<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 10/31/2016
 * Time: 7:43 PM
 */

/**
 * Class Hugeit_Maps_Direction
 */
interface Hugeit_Maps_Direction_Interface {
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
	 * @return Hugeit_Maps_Direction
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
	 * @return Hugeit_Maps_Direction
	 */
	public function set_name( $name );

	/**
	 * @return float
	 */
	public function get_start_lat();

	/**
	 * @param float $start_lat
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_start_lat( $start_lat );

	/**
	 * @return float
	 */
	public function get_start_lng();

	/**
	 * @param float $start_lng
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_start_lng( $start_lng );

	/**
	 * @return float
	 */
	public function get_end_lat();

	/**
	 * @param float $end_lat
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_end_lat( $end_lat );

	/**
	 * @return float
	 */
	public function get_end_lng();

	/**
	 * @param float $end_lng
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_end_lng( $end_lng );

	/**
	 * @return string
	 */
	public function get_line_color();

	/**
	 * @param string $line_color
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_line_color( $line_color );

	/**
	 * @return int
	 */
	public function get_line_width();

	/**
	 * @param int $line_width
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_line_width( $line_width );

	/**
	 * @return float
	 */
	public function get_line_opacity();

	/**
	 * @param float $line_opacity
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_line_opacity( $line_opacity );

	/**
	 * @return int
	 */
	public function get_show_steps();

	/**
	 * @param int $show_steps
	 *
	 * @return Hugeit_Maps_Direction
	 * @throws Exception
	 */
	public function set_show_steps( $show_steps );

	/**
	 * @return string
	 */
	public function get_travel_mode();

	/**
	 * @param string $travel_mode
	 *
	 * @return Hugeit_Maps_Direction
	 * @throws Exception
	 */
	public function set_travel_mode( $travel_mode );
}