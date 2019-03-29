<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Circle
 */
class Hugeit_Maps_Circle implements Hugeit_Maps_Circle_Interface {

	/**
	 * Current Circle ID
	 *
	 * @var int
	 */
	private $id;

	/**
	 * Map ID in which current circle is
	 *
	 * @var int
	 */
	private $map_id;

	/**
	 * Circle's name
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Latitude of circle's center
	 *
	 * @var float
	 */
	private $center_lat;

	/**
	 * Longitude of circle's center
	 *
	 * @var float
	 */
	private $center_lng;

	/**
	 * Circle's radius in meters (m)
	 *
	 * @var int
	 */
	private $radius;

	/**
	 * Line width of circle
	 *
	 * @var int
	 */
	private $line_width;

	/**
	 * Line opacity of circle
	 *
	 * @var float
	 */
	private $line_opacity;

	/**
	 * Line color of circle
	 *
	 * @var string
	 */
	private $line_color;

	/**
	 * Fill color of circle
	 *
	 * @var string
	 */
	private $fill_color;

	/**
	 * Fill transparency of circle
	 *
	 * @var float
	 */
	private $fill_opacity;

	/**
	 * Line transparency of circle when it is hovered
	 *
	 * @var float
	 */
	private $hover_line_opacity;

	/**
	 * Line color of circle when it is hovered
	 *
	 * @var string
	 */
	private $hover_line_color;

	/**
	 * Fill color of circle when it is hovered
	 *
	 * @var string
	 */
	private $hover_fill_color;

	/**
	 * Fill transparency of circle when it is hovered
	 *
	 * @var float
	 */
	private $hover_fill_opacity;

	/**
	 * Defines if the marker is shown in the center of circle
	 *
	 * @values [0,1]
	 * @var int
	 */
	private $show_marker;

	/**
	 * Hugeit_Maps_Circle constructor.
	 *
	 * @param null $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null ) {

		if ( $id !== null && absint( $id ) == $id ) {
			global $wpdb;

			$circle = $wpdb->get_row( $wpdb->prepare(
				"
                SELECT *
                FROM " . Hugeit_Maps()->get_table_name( 'circles' ) . "
                WHERE id=%d
                ",
				$id
			), ARRAY_A );

			if ( ! is_null( $circle ) ) {

				$this->id = $id;

				foreach ( $circle as $circle_option_name => $circle_option_value ) {

					$function_name = 'set_' . $circle_option_name;

					if ( method_exists( $this, $function_name ) ) {

						call_user_func( array( $this, $function_name ), $circle_option_value );

					}

				}

			}
		} else {

			$this->name = __( 'New Circle', 'hugeit-maps' );

		}

	}

	/**
	 * When cloning an instance of Circle id and map_id are changed to be null in order to have a clear copy of this circle
	 */
	public function __clone() {
		$this->id     = null;
		$this->map_id = null;
	}

	/**
	 * @return int
	 */
	public function get_id() {
		return (int) $this->id;
	}

	/**
	 * @return int
	 */
	public function get_map_id() {
		return (int) $this->map_id;
	}

	/**
	 * @param int $map_id
	 *
	 * @return Hugeit_Maps_Circle
	 * @throws Exception
	 */
	public function set_map_id( $map_id ) {

		if ( absint( $map_id ) != $map_id ) {
			throw new Exception( '"map_id" field must be not negative integer.' );
		}

		$this->map_id = $map_id;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return (!empty($this->name) ? wp_unslash($this->name) : __( '(no title)', 'hg_gmaps' ));
	}

	/**
	 * @param string $name
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_name( $name ) {
		$this->name = sanitize_text_field( $name );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_center_lat() {
		return (float) $this->center_lat;
	}

	/**
	 * @param float $center_lat
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_center_lat( $center_lat ) {
		$this->center_lat = floatval( $center_lat );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_center_lng() {
		return $this->center_lng;
	}

	/**
	 * @param float $center_lng
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_center_lng( $center_lng ) {
		$this->center_lng = floatval( $center_lng );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_radius() {
		return (int) $this->radius;
	}

	/**
	 * @param int $radius
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_radius( $radius ) {
		$this->radius = absint( $radius );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_line_width() {
		return (int) $this->line_width;
	}

	/**
	 * @param int $line_width
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_line_width( $line_width ) {
		$this->line_width = absint( $line_width );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_line_opacity() {
		return (float) $this->line_opacity;
	}

	/**
	 * @param float $line_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_line_opacity( $line_opacity ) {
		$this->line_opacity = number_format( floatval( $line_opacity ), 1 );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_line_color() {
		return $this->line_color;
	}

	/**
	 * @param string $line_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_line_color( $line_color ) {
		$this->line_color = sanitize_hex_color_no_hash( $line_color );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_fill_color() {
		return $this->fill_color;
	}

	/**
	 * @param string $fill_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_fill_color( $fill_color ) {
		$this->fill_color = sanitize_hex_color_no_hash( $fill_color );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_fill_opacity() {
		return (float) $this->fill_opacity;
	}

	/**
	 * @param float $fill_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_fill_opacity( $fill_opacity ) {
		$this->fill_opacity = number_format( floatval( $fill_opacity ), 1 );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_hover_line_opacity() {
		return (float) $this->hover_line_opacity;
	}

	/**
	 * @param float $hover_line_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_line_opacity( $hover_line_opacity ) {
		$this->hover_line_opacity = number_format( floatval( $hover_line_opacity ), 1 );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_hover_line_color() {
		return $this->hover_line_color;
	}

	/**
	 * @param string $hover_line_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_line_color( $hover_line_color ) {
		$this->hover_line_color = sanitize_hex_color_no_hash( $hover_line_color );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_hover_fill_color() {
		return $this->hover_fill_color;
	}

	/**
	 * @param string $hover_fill_color
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_fill_color( $hover_fill_color ) {
		$this->hover_fill_color = sanitize_hex_color_no_hash( $hover_fill_color );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_hover_fill_opacity() {
		return (float) $this->hover_fill_opacity;
	}

	/**
	 * @param float $hover_fill_opacity
	 *
	 * @return Hugeit_Maps_Circle
	 */
	public function set_hover_fill_opacity( $hover_fill_opacity ) {
		$this->hover_fill_opacity = number_format( floatval( $hover_fill_opacity ), 1 );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_show_marker() {
		return $this->show_marker;
	}

	/**
	 * @param int $show_marker
	 *
	 * @return Hugeit_Maps_Circle
	 * @throws Exception
	 */
	public function set_show_marker( $show_marker ) {
		if ( ! in_array( $show_marker, array( 0, 1 ) ) ) {

			throw new Exception( 'Invalid value for "show_marker" field' );

		}

		$this->show_marker = (int) $show_marker;

		return $this;
	}

	/**
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id ) {
		global $wpdb;

		if ( absint( $id ) !== $id ) {

			throw new Exception( 'Trying to delete a Circle with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'circles' ) . " WHERE id =%d", $id ) );
	}

	/**
	 * Sets $array[$key] = $value if $value is not NULL.
	 * This is used to
	 *
	 * @param $key
	 * @param $value
	 * @param $array
	 */
	private function set_if_not_null( $key, $value, &$array ) {
		if ( $value !== null ) {
			$array[ $key ] = $value;
		}
	}

	/**
	 * Save circle data
	 */
	public function save() {
		global $wpdb;

		$circle_data = array();

		$this->set_if_not_null( 'map_id', $this->map_id, $circle_data );
		$this->set_if_not_null( 'name', $this->name, $circle_data );
		$this->set_if_not_null( 'center_lat', $this->center_lat, $circle_data );
		$this->set_if_not_null( 'center_lng', $this->center_lng, $circle_data );
		$this->set_if_not_null( 'radius', $this->radius, $circle_data );
		$this->set_if_not_null( 'line_width', $this->line_width, $circle_data );
		$this->set_if_not_null( 'line_opacity', $this->line_opacity, $circle_data );
		$this->set_if_not_null( 'line_color', $this->line_color, $circle_data );
		$this->set_if_not_null( 'fill_color', $this->fill_color, $circle_data );
		$this->set_if_not_null( 'fill_opacity', $this->fill_opacity, $circle_data );
		$this->set_if_not_null( 'hover_line_opacity', $this->hover_line_opacity, $circle_data );
		$this->set_if_not_null( 'hover_line_color', $this->hover_line_color, $circle_data );
		$this->set_if_not_null( 'hover_fill_color', $this->hover_fill_color, $circle_data );
		$this->set_if_not_null( 'hover_fill_opacity', $this->hover_fill_opacity, $circle_data );
		$this->set_if_not_null( 'show_marker', $this->show_marker, $circle_data );

		$success = is_null( $this->id )
			? $wpdb->insert( Hugeit_Maps()->get_table_name( 'circles' ), $circle_data )
			: $wpdb->update( Hugeit_Maps()->get_table_name( 'circles' ), $circle_data, array( 'id' => $this->id ) );

		if ( $success !== false && ! isset( $this->id ) ) {

			return $wpdb->insert_id;

		} elseif ( $success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}
	}

}