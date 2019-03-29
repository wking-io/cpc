<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Marker
 */
class Hugeit_Maps_Marker implements Hugeit_Maps_Marker_Interface {

	/**
	 * Marker ID
	 *
	 * @var int
	 */
	private $id;

	/**
	 * Map ID that current marker belongs to
	 *
	 * @var int
	 */
	private $map_id;

	/**
	 * Marker name
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Marker latitude
	 *
	 * @var float
	 */
	private $lat;

	/**
	 * Marker longitude
	 *
	 * @var float
	 */
	private $lng;

	/**
	 * Marker animation
	 *
	 * @values ['BOUNCE','DROP','NONE']
	 * @var string
	 */
	private $animation;

	/**
	 * Marker description
	 *
	 * @var string
	 */
	private $description;

	/**
	 * Marker image
	 *
	 * @todo Image behavior in this plugin is very questionable
	 * @var string URL of marker icon
	 */
	private $img;

	/**
	 * Marker image size
	 *
	 * @values [16,24,48,64,256]
	 * @var int
	 */
	private $size;

	/**
	 * Hugeit_Maps_Marker constructor.
	 *
	 * @param null $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null ) {

		if ( $id !== null && absint( $id ) == $id ) {
			global $wpdb;

			$marker = $wpdb->get_row( $wpdb->prepare(
				"
                SELECT *
                FROM " . Hugeit_Maps()->get_table_name( 'markers' ) . "
                WHERE id=%d
                ",
				$id
			), ARRAY_A );

			if ( ! is_null( $marker ) ) {

				$this->id = $id;

				foreach ( $marker as $marker_option_name => $marker_option_value ) {

					$function_name = 'set_' . $marker_option_name;

					if ( method_exists( $this, $function_name ) ) {

						call_user_func( array( $this, $function_name ), $marker_option_value );

					}

				}

			}
		} else {
			$this->name = __( 'New Marker', 'hg_gmaps' );
		}

	}

	/**
	 * When cloning an instance of Marker id and map_id are changed to be null in order to have a clear copy of this marker
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
	 * @param $map_id
	 *
	 * @return $this
	 * @throws Exception
	 */
	public function set_map_id( $map_id ) {
		$map_id = absint( $map_id );

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
		return ( !empty($this->name) ? wp_unslash($this->name) : __( '(no title)', 'hg_gmaps' ) );
	}

	/**
	 * @param string $name
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_name( $name ) {
		$this->name = sanitize_text_field( $name );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_lat() {
		return $this->lat;
	}

	/**
	 * @param float $lat
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_lat( $lat ) {
		$this->lat = floatval( $lat );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_lng() {
		return $this->lng;
	}

	/**
	 * @param float $lng
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_lng( $lng ) {
		$this->lng = floatval( $lng );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_animation() {
		return $this->animation;
	}

	/**
	 * @param string $animation
	 *
	 * @return Hugeit_Maps_Marker
	 * @throws Exception
	 */
	public function set_animation( $animation ) {

		if ( is_null( $animation ) || $animation === '' || !$animation ) {
			$animation = 'NONE';
		}

		if ( ! in_array( $animation, array( 'BOUNCE', 'DROP', 'NONE' ) ) ) {
			throw new Exception( 'Invalid value for "animation" field' );
		}

		$this->animation = $animation;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_description() {
		return htmlspecialchars($this->description);
	}

	/**
	 * @param string $description
	 * todo: check wp_kses functionality
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_description( $description ) {
		$allowedtags = wp_kses_allowed_html( 'post' );

		$this->description = wp_kses( $description, $allowedtags );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_img() {
		return esc_url( $this->img );
	}

	/**
	 * Even though in  this method we need santization but WordPress Core developers decided that URL Santization and escaping are the same thing
	 *
	 * @param string $img
	 *
	 * @return Hugeit_Maps_Marker
	 */
	public function set_img( $img ) {
		$this->img = esc_url( $img );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_size() {
		return $this->size;
	}

	/**
	 * @param int $size
	 *
	 * @return Hugeit_Maps_Marker
	 * @throws Exception
	 */
	public function set_size( $size ) {

		if ( ! in_array( $size, array( '', 16, 24, 48, 64, 96, 128, 192, 256 ) ) ) {
			throw new Exception( 'Invalid value for "size" field' );
		}

		$this->size = $size;

		return $this;
	}

	public static function get_default_icon_sizes() {
		return apply_filters( 'hugeit_maps_default_marker_icon_sizes', array( 16, 24, 48, 64, 96, 128, 192, 256 ) );
	}

	/**
	 * returns default icon names
	 *
	 * @return mixed|void
	 */
	public static function get_default_icons() {
		return apply_filters( 'hugeit_maps_default_marker_icons',
			array(
				'azuremarker',
				'baseflag',
				'blackmarker',
				'blueflag',
				'bluemarker',
				'flagleft',
				'flagright',
				'greenflag',
				'greenmarker',
				'marker',
				'paperflag',
				'pinkflag',
				'pinkgreen',
				'pinkleft',
				'pinkright',
				'pinleft',
				'pinpink',
				'pinright',
				'pointcenter',
				'pointer',
				'pointleft',
				'pointright',
				'redflag',
				'redmarker',
				'shopmarker',
				'star',
				'starmarker',
				'toyflag'
			)
		);
	}

	/**
	 * Delete a marker
	 *
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id ) {
		global $wpdb;

		if ( absint( $id ) !== $id ) {

			throw new Exception( 'Trying to delete a Marker with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'markers' ) . " WHERE id =%d", $id ) );
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
	 * Save Marker data
	 *
	 * @return bool|int|null
	 */
	public function save() {
		global $wpdb;

		$marker_data = array();

		$this->set_if_not_null( 'map_id', $this->map_id, $marker_data );
		$this->set_if_not_null( 'name', $this->name, $marker_data );
		$this->set_if_not_null( 'lat', $this->lat, $marker_data );
		$this->set_if_not_null( 'lng', $this->lng, $marker_data );
		$this->set_if_not_null( 'animation', $this->animation, $marker_data );
		$this->set_if_not_null( 'description', $this->description, $marker_data );
		$this->set_if_not_null( 'img', $this->img, $marker_data );

		$success = is_null( $this->id )
			? $wpdb->insert( Hugeit_Maps()->get_table_name( 'markers' ), $marker_data )
			: $wpdb->update( Hugeit_Maps()->get_table_name( 'markers' ), $marker_data, array( 'id' => $this->id ) );

		if ( $success !== false && ! isset( $this->id ) ) {

			return $wpdb->insert_id;

		} elseif ( $success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}

	}
}