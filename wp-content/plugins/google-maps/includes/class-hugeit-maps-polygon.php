<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Polygon
 */
class Hugeit_Maps_Polygon implements Hugeit_Maps_Polygon_Interface {

	/**
	 * @var int Polygon ID
	 */
	private $id;

	/**
	 * Map ID in which current polygon is
	 *
	 * @var int
	 */
	private $map_id;

	/**
	 * Polygon's name
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Polygon data: coordinates on the map that form current polygon
	 * the pattern is:(lat1,lng1),(lat2,lng2),...,(latN,lngN)
	 *
	 * @var string
	 */
	private $data;

	/**
	 * Polygon's line opacity
	 *
	 * @var float
	 */
	private $line_opacity;

	/**
	 * Polygon's line color without hash( without # )
	 *
	 * @var string
	 */
	private $line_color;

	/**
	 * Polygon's fill transparency
	 *
	 * @var float
	 */
	private $fill_opacity;

	/**
	 * Polygon's fill color without hash( without # )
	 *
	 * @var string
	 */
	private $fill_color;

	/**
	 * Polygon's link URL
	 *
	 * @var string
	 */
	private $url;

	/**
	 * @var float
	 */
	private $hover_line_opacity;

	/**
	 * Polygon's line color when polygon is hovered, without hash( without # )
	 *
	 * @var string
	 */
	private $hover_line_color;

	/**
	 * Polygon's fill opacity when polygon is hovered
	 *
	 * @var float
	 */
	private $hover_fill_opacity;

	/**
	 * Polygon's fill color when polygon is hovered, without hash( without # )
	 *
	 * @var string
	 */
	private $hover_fill_color;

	/**
	 * Polygon's line width
	 *
	 * @var int
	 */
	private $line_width;

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
                FROM " . Hugeit_Maps()->get_table_name( 'polygons' ) . "
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

			$this->name = __( 'New Polygon', 'hg_gmaps' );

		}

	}

	/**
	 * When cloning an instance of Polygon id and map_id are changed to be null in order to have a clear copy of this polygon
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
		return $this->map_id;
	}

	/**
	 * @param int $map_id
	 *
	 * @return Hugeit_Maps_Polygon
	 * @throws Exception
	 */
	public function set_map_id( $map_id ) {

		if ( absint( $map_id ) != $map_id ) {

			throw new Exception( '"map_id" field must be not negative integer' );

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
	 * @return Hugeit_Maps_Polygon
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
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_data( $data ) {
		$this->data = $data;

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
	 * @return Hugeit_Maps_Polygon
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
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_line_color( $line_color ) {
		$this->line_color = sanitize_hex_color_no_hash( $line_color );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_fill_opacity() {
		return $this->fill_opacity;
	}

	/**
	 * @param float $fill_opacity
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_fill_opacity( $fill_opacity ) {
		$this->fill_opacity = number_format( floatval( $fill_opacity ), 1 );

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
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_fill_color( $fill_color ) {
		$this->fill_color = sanitize_hex_color_no_hash( $fill_color );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_url() {
		return esc_url( $this->url );
	}

	/**
	 * @param string $url
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_url( $url ) {
		$this->url = esc_url( $url );

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
	 * @return Hugeit_Maps_Polygon
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
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_line_color( $hover_line_color ) {
		$this->hover_line_color = sanitize_hex_color_no_hash( $hover_line_color );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_hover_fill_opacity() {
		return $this->hover_fill_opacity;
	}

	/**
	 * @param float $hover_fill_opacity
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_fill_opacity( $hover_fill_opacity ) {
		$this->hover_fill_opacity = number_format( floatval( $hover_fill_opacity ), 1 );

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
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_hover_fill_color( $hover_fill_color ) {
		$this->hover_fill_color = sanitize_hex_color_no_hash( $hover_fill_color );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_line_width() {
		return $this->line_width;
	}

	/**
	 * @param int $line_width
	 *
	 * @return Hugeit_Maps_Polygon
	 */
	public function set_line_width( $line_width ) {
		$this->line_width = absint( $line_width );

		return $this;
	}

	/**
	 * Delete a polygon
	 *
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id ) {
		global $wpdb;

		if ( absint( $id ) !== $id ) {

			throw new Exception( 'Trying to delete a Polygon with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'polygons' ) . " WHERE id =%d", $id ) );
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

		$polyline_data = array();

		$this->set_if_not_null( 'map_id', $this->map_id, $polyline_data );
		$this->set_if_not_null( 'name', $this->name, $polyline_data );
		$this->set_if_not_null( 'data', $this->data, $polyline_data );
		$this->set_if_not_null( 'line_opacity', $this->line_opacity, $polyline_data );
		$this->set_if_not_null( 'line_color', $this->line_color, $polyline_data );
		$this->set_if_not_null( 'fill_opacity', $this->fill_opacity, $polyline_data );
		$this->set_if_not_null( 'fill_color', $this->fill_color, $polyline_data );
		$this->set_if_not_null( 'url', $this->url, $polyline_data );
		$this->set_if_not_null( 'hover_line_opacity', $this->hover_line_opacity, $polyline_data );
		$this->set_if_not_null( 'hover_line_color', $this->hover_line_color, $polyline_data );
		$this->set_if_not_null( 'hover_fill_opacity', $this->hover_fill_opacity, $polyline_data );
		$this->set_if_not_null( 'hover_fill_color', $this->hover_fill_color, $polyline_data );
		$this->set_if_not_null( 'line_width', $this->line_width, $polyline_data );

		$success = is_null( $this->id )
			? $wpdb->insert( Hugeit_Maps()->get_table_name( 'polygons' ), $polyline_data )
			: $wpdb->update( Hugeit_Maps()->get_table_name( 'polygons' ), $polyline_data, array( 'id' => $this->id ) );

		if ( $success !== false && ! isset( $this->id ) ) {

			return $wpdb->insert_id;

		} elseif ( $success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}

	}

}