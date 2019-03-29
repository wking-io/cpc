<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Polyline
 */
class Hugeit_Maps_Polyline implements Hugeit_Maps_Polyline_Interface {

	/**
	 * Polyline ID
	 *
	 * @var int
	 */
	private $id;

	/**
	 * The map ID in which current polyline belongs to
	 *
	 * @var int
	 */
	private $map_id;

	/**
	 * Name of Polyline
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Polyline data: coordinates on the map that form current polygon
	 * the pattern is:(lat1,lng1),(lat2,lng2),...,(latN,lngN)
	 *
	 * @var string
	 */
	private $data;

	/**
	 * @var float
	 */
	private $line_opacity;

	/**
	 * Polyline line color, without hash ( without # )
	 *
	 * @var string
	 */
	private $line_color;

	/**
	 * Polyline line width
	 *
	 * @var int
	 */
	private $line_width;

	/**
	 * Polyline line color when polyline is hovered, without hash ( withour # )
	 *
	 * @var string
	 */
	private $hover_line_color;

	/**
	 * Polyline line transparancy when current polyline is hovered, without hash( without # )
	 *
	 * @var float
	 */
	private $hover_line_opacity;

	/**
	 * Hugeit_Maps_Polyline constructor.
	 *
	 * @param null $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null ) {

		if ( $id !== null && absint( $id ) == $id ) {
			global $wpdb;

			$polyline = $wpdb->get_row( $wpdb->prepare(
				"
                SELECT *
                FROM " . Hugeit_Maps()->get_table_name( 'polylines' ) . "
                WHERE id=%d
                ",
				$id
			), ARRAY_A );

			if ( ! is_null( $polyline ) ) {

				$this->id = $id;

				foreach ( $polyline as $polyline_option_name => $polyline_option_value ) {

					$function_name = 'set_' . $polyline_option_name;

					if ( method_exists( $this, $function_name ) ) {

						call_user_func( array( $this, $function_name ), $polyline_option_value );

					}

				}

			}
		} else {
			$this->name = __( 'New Polyline', 'hg_gmaps' );
		}

	}

	/**
	 * When cloning an instance of Polyline id and map_id are changed to be null in order to have a clear copy of this polyline
	 */
	public function __clone() {
		$this->id     = null;
		$this->map_id = null;
	}

	/**
	 * @return int
	 */
	public function get_id() {
		return $this->id;
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
	 * @return Hugeit_Maps_Polyline
	 * @throws Exception
	 */
	public function set_map_id( $map_id ) {
		if ( absint( $map_id ) != $map_id ) {
			throw new Exception( '"map_id" field needs to be not negative integer.' );
		}

		$this->map_id = absint( $map_id );

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
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_name( $name ) {
		$this->name = sanitize_text_field( $name );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_data() {
		return $this->data;
	}

	/**
	 * @param string $data
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_data( $data ) {
		$this->data = $data;

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
	 * @return Hugeit_Maps_Polyline
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
	 * @return Hugeit_Maps_Polyline
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
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_line_width( $line_width ) {
		$this->line_width = absint( $line_width );

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
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_hover_line_color( $hover_line_color ) {
		$this->hover_line_color = sanitize_hex_color_no_hash( $hover_line_color );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_hover_line_opacity() {
		return $this->hover_line_opacity;
	}

	/**
	 * @param float $hover_line_opacity
	 *
	 * @return Hugeit_Maps_Polyline
	 */
	public function set_hover_line_opacity( $hover_line_opacity ) {
		$this->hover_line_opacity = number_format( floatval( $hover_line_opacity ), 1 );

		return $this;
	}

	/**
	 * Delete a polyline
	 *
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id ) {
		global $wpdb;

		if ( absint( $id ) !== $id ) {

			throw new Exception( 'Trying to delete a polyline with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'polylines' ) . " WHERE id =%d", $id ) );
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
	 * Save Polygon data
	 *
	 * @return bool|int|null
	 */
	public function save() {
		global $wpdb;

		$polygon_data = array();

		$this->set_if_not_null( 'map_id', $this->map_id, $polygon_data );
		$this->set_if_not_null( 'name', $this->name, $polygon_data );
		$this->set_if_not_null( 'data', $this->data, $polygon_data );
		$this->set_if_not_null( 'line_opacity', $this->line_opacity, $polygon_data );
		$this->set_if_not_null( 'line_color', $this->line_color, $polygon_data );
		$this->set_if_not_null( 'hover_line_opacity', $this->hover_line_opacity, $polygon_data );
		$this->set_if_not_null( 'hover_line_color', $this->hover_line_color, $polygon_data );
		$this->set_if_not_null( 'line_width', $this->line_width, $polygon_data );

		$success = is_null( $this->id )
			? $wpdb->insert( Hugeit_Maps()->get_table_name( 'polylines' ), $polygon_data )
			: $wpdb->update( Hugeit_Maps()->get_table_name( 'polylines' ), $polygon_data, array( 'id' => $this->id ) );

		if ( $success !== false && ! isset( $this->id ) ) {

			return $wpdb->insert_id;

		} elseif ( $success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}

	}


}