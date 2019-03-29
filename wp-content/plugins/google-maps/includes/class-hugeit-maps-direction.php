<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Direction
 */
class Hugeit_Maps_Direction implements Hugeit_Maps_Direction_Interface {

	/**
	 * Current Direction ID
	 *
	 * @var int
	 */
	private $id;

	/**
	 * Map ID that current direction belongs to
	 *
	 * @var int
	 */
	private $map_id;

	/**
	 * Current direction name
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Direction's starting point latitude
	 *
	 * @var float
	 */
	private $start_lat;

	/**
	 * Direction's starting point longitude
	 *
	 * @var float
	 */
	private $start_lng;

	/**
	 * Direction's ending point latitude
	 *
	 * @var float;
	 */
	private $end_lat;

	/**
	 * Direction's ending point longitude
	 *
	 * @var float
	 */
	private $end_lng;

	/**
	 * Line color of Direction
	 *
	 * @var string
	 */
	private $line_color;

	/**
	 * Line widtg of direction
	 *
	 * @var int
	 */
	private $line_width;

	/**
	 * Line opacity of direction
	 *
	 * @var float
	 */
	private $line_opacity;

	/**
	 * Whether to show steps on map or not
	 *
	 * @values [0,1]
	 * @var int
	 */
	private $show_steps;

	/**
	 * Travel mode of direction
	 *
	 * @values ['DRIVING','WALKING','BICYCLING','TRANSIT']
	 * @var string
	 */
	private $travel_mode;

	/**
	 * Hugeit_Maps_Polygon constructor.
	 *
	 * @param null $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null ) {

		if ( $id !== null && absint( $id ) == $id ) {
			global $wpdb;

			$polygon = $wpdb->get_row( $wpdb->prepare(
				"
                SELECT *
                FROM " . Hugeit_Maps()->get_table_name( 'directions' ) . "
                WHERE id=%d
                ",
				$id
			), ARRAY_A );

			if ( ! is_null( $polygon ) ) {

				$this->id = $id;

				foreach ( $polygon as $polygon_option_name => $polygon_option_value ) {

					$function_name = 'set_' . $polygon_option_name;

					if ( method_exists( $this, $function_name ) ) {

						call_user_func( array( $this, $function_name ), $polygon_option_value );

					}

				}

			}

		} else {

			$this->name = __( 'New Direction', 'hg_gmaps' );

		}

	}

	/**
	 * When cloning an instance of Direction id and map_id are changed to be null in order to have a clear copy of this direction
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
	 * @return Hugeit_Maps_Direction
	 * @throws Exception
	 */
	public function set_map_id( $map_id ) {

		if ( absint( $map_id ) != $map_id ) {
			throw new Exception( '"map_id" must be not negative integer.' );
		}

		$this->map_id = absint( $map_id );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return (!empty($this->name) ? wp_unslash($this->name) : __( '(no title)', 'hg_gmaps' ) );
	}

	/**
	 * @param string $name
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_name( $name ) {
		$this->name = sanitize_text_field( $name );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_start_lat() {
		return (float) $this->start_lat;
	}

	/**
	 * @param float $start_lat
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_start_lat( $start_lat ) {
		$this->start_lat = floatval( $start_lat );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_start_lng() {
		return (float) $this->start_lng;
	}

	/**
	 * @param float $start_lng
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_start_lng( $start_lng ) {
		$this->start_lng = floatval( $start_lng );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_end_lat() {
		return (float) $this->end_lat;
	}

	/**
	 * @param float $end_lat
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_end_lat( $end_lat ) {
		$this->end_lat = floatval( $end_lat );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_end_lng() {
		return (float) $this->end_lng;
	}

	/**
	 * @param float $end_lng
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_end_lng( $end_lng ) {
		$this->end_lng = floatval( $end_lng );

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
	 * @return Hugeit_Maps_Direction
	 */
	public function set_line_color( $line_color ) {
		$this->line_color = sanitize_hex_color_no_hash( $line_color );

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
	 * @return Hugeit_Maps_Direction
	 */
	public function set_line_width( $line_width ) {
		$this->line_width = absint( $line_width );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_line_opacity() {
		return $this->line_opacity;
	}

	/**
	 * @param float $line_opacity
	 *
	 * @return Hugeit_Maps_Direction
	 */
	public function set_line_opacity( $line_opacity ) {
		$this->line_opacity = number_format( floatval( $line_opacity ), 1 );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_show_steps() {
		return (int) $this->show_steps;
	}

	/**
	 * @param int $show_steps
	 *
	 * @return Hugeit_Maps_Direction
	 * @throws Exception
	 */
	public function set_show_steps( $show_steps ) {

		if ( ! in_array( $show_steps, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "show_steps" field' );
		}

		$this->show_steps = (int) $show_steps;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_travel_mode() {
		return $this->travel_mode;
	}

	/**
	 * @param string $travel_mode
	 *
	 * @return Hugeit_Maps_Direction
	 * @throws Exception
	 */
	public function set_travel_mode( $travel_mode ) {

		if ( is_null( $travel_mode ) || $travel_mode == '' || !$travel_mode ) {
			$travel_mode = 'DRIVING';
		}

		if ( ! in_array( $travel_mode, array( 'DRIVING', 'WALKING', 'BICYCLING', 'TRANSIT' ) ) ) {

			throw new Exception( 'Invalid value for "travel_mode" field' );

		}

		$this->travel_mode = $travel_mode;

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

			throw new Exception( 'Trying to delete a Direction with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'directions' ) . " WHERE id =%d", $id ) );
	}

	/**
	 * Sets $array[$key] = $value if $value is not NULL.
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
	 * Save direction data
	 */
	public function save() {
		global $wpdb;

		$direction_data = array();

		$this->set_if_not_null( 'map_id', $this->map_id, $direction_data );
		$this->set_if_not_null( 'name', $this->name, $direction_data );
		$this->set_if_not_null( 'start_lat', $this->start_lat, $direction_data );
		$this->set_if_not_null( 'start_lng', $this->start_lng, $direction_data );
		$this->set_if_not_null( 'end_lat', $this->end_lat, $direction_data );
		$this->set_if_not_null( 'end_lng', $this->end_lng, $direction_data );
		$this->set_if_not_null( 'line_color', $this->line_color, $direction_data );
		$this->set_if_not_null( 'line_width', $this->line_width, $direction_data );
		$this->set_if_not_null( 'line_opacity', $this->line_opacity, $direction_data );
		$this->set_if_not_null( 'show_steps', $this->show_steps, $direction_data );
		$this->set_if_not_null( 'travel_mode', $this->travel_mode, $direction_data );

		$success = is_null( $this->id )
			? $wpdb->insert( Hugeit_Maps()->get_table_name( 'directions' ), $direction_data )
			: $wpdb->update( Hugeit_Maps()->get_table_name( 'directions' ), $direction_data, array( 'id' => $this->id ) );

		if ( $success !== false && ! isset( $this->id ) ) {

			return $wpdb->insert_id;

		} elseif ( $success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}


	}


}