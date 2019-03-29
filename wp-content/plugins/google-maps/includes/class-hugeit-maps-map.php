<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Map
 */
class Hugeit_Maps_Map implements Hugeit_Maps_Map_Interface {

	/**
	 * Map ID
	 *
	 * @var int
	 */
	private $id;
	
	/**
	 * Map Name
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Map type
	 *
	 * @values ['ROADMAP', 'SATELLITE', 'HYBRID', 'TERRAIN']
	 * @var string
	 */
	private $type;


    /**
     * Enable Frontend Store Locator for map
     *
     * @values [1,0]
     * @var  int
     */
    private $locator_enabled;

    /**
     * Default Location of Locator Search Box
     *
     * @var  string
     */
    private $locator_default_address;

	/**
	 * Map Default Zoom that displays on page load
	 *
	 * @var  int
	 */
	private $zoom;

	/**
	 * Minimal zoom value that user can manually apply
	 *
	 * @var  int
	 */
	private $min_zoom;

	/**
	 * Maximal zoom value that user can manually apply
	 *
	 * @var  int
	 */
	private $max_zoom;

	/**
	 * Map's border radius, can be used to make map look round
	 *
	 * @var  int
	 */
	private $border_radius;

	/**
	 * Map center latitude
	 *
	 * @var  float
	 */
	private $center_lat;

	/**
	 * Map center longitude
	 *
	 * @var  float
	 */
	private $center_lng;

	/**
	 * Enable Pan controller for map
	 *
	 * @values [1,0]
	 * @var  int
	 */
	private $pan_controller;

	/**
	 * Enable Zoom controller for map
	 *
	 * @values [1,0]
	 * @var  int
	 */
	private $zoom_controller;

	/**
	 * Enable Type controller for map
	 *
	 * @values [1,0]
	 * @var  int
	 */
	private $type_controller;

	/**
	 * Enable Scale controller for map
	 *
	 * @values [1,0]
	 * @var  int
	 */
	private $scale_controller;

	/**
	 * Enable Street-View controller for map
	 *
	 * @values [1,0]
	 * @var  int
	 */
	private $street_view_controller;

	/**
	 * Enable Overview-Map controller for map
	 *
	 * @values [1,0]
	 * @var  int
	 */
	private $overview_map_controller;

	/**
	 * Map width in percents
	 *
	 * @var  int
	 */
	private $width;

	/**
	 * Map height in pixels
	 *
	 * @var  int
	 */
	private $height;

	/**
	 * Map alignment
	 *
	 * @values ['left','right','center']
	 * @var string
	 */
	private $align;

	/**
	 * Map marker infowindow type
	 *
	 * @values ['click','hover']
	 * @var string
	 */
	private $info_type;

    /**
     * Open infowindows onload or not
     *
     * @values [1,0]
     * @var int
     */
    private $open_infowindows_onload;

	/**
	 * Map animation on page load
	 *
	 * @var string
	 */
	private $animation;

	/**
	 * Map language
	 *
	 * @var string
	 */
	private $language;

	/**
	 * Whether the map will be draggable or not
	 *
	 * @values [1,0]
	 * @var int
	 */
	private $draggable;

	/**
	 * Whether the map will be scrollable or not
	 *
	 * @values [1,0]
	 * @var int
	 */
	private $wheel_scroll;

	/**
	 * Enable traffic layer
	 *
	 * @values [1,0]
	 * @var int
	 */
	private $traffic_layer;

	/**
	 * Enable bicycling layer
	 *
	 * @values [1,0]
	 * @var int
	 */
	private $bike_layer;

	/**
	 * Enable transit layer
	 *
	 * @values [1,0]
	 * @var int
	 */
	private $transit_layer;

	/**
	 * Map hue color without hash ( without # )
	 *
	 * @var string
	 */
	private $styling_hue;

	/**
	 * Map lightness
	 *
	 * @var int
	 */
	private $styling_lightness;

	/**
	 * Map gamma
	 *
	 * @var int
	 */
	private $styling_gamma;

	/**
	 * Map saturation
	 *
	 * @var int
	 */
	private $styling_saturation;

	/**
	 * Markers that belong to current map
	 * Array of Hugeit_Maps_Marker instances
	 *
	 * @var array
	 */
	private $markers;

    /**
     * Locators that belong to current map
     * Array of Hugeit_Maps_Locator instances
     * @var array
     */
    private $locators;

	/**
	 * Polygons that belong to current map
	 * Array of Hugeit_Maps_Polygon instances
	 * @var array
	 */
	private $polygons;

	/**
	 * Polylines that belong to current map
	 * Array of Hugeit_Maps_Polyline instances
	 * @var array
	 */
	private $polylines;

	/**
	 * Circles that belong to current map
	 * Array of Hugeit_Maps_Circle instances
	 * @var array
	 */
	private $circles;

	/**
	 * Directions that belong to current map
	 * Array of Hugeit_Maps_Direction instances
	 * @var array
	 */
	private $directions;

	/**
	 * Hugeit_Maps_Map constructor.
	 *
	 * @param null|int $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null ) {

		if ( $id !== null && absint( $id ) == $id ) {
			global $wpdb;

			$map = $wpdb->get_row( $wpdb->prepare(
				"
                SELECT *
                FROM " . Hugeit_Maps()->get_table_name( 'maps' ) . "
                WHERE id=%d
                ",
				$id
			), ARRAY_A );

			if ( ! is_null( $map ) ) {

				$this->id = $id;

				foreach ( $map as $map_option_name => $map_option_value ) {

					$function_name = 'set_' . $map_option_name;

					if ( method_exists( $this, $function_name ) ) {

						call_user_func( array( $this, $function_name ), $map_option_value );

					}

				}

			}

			$this->markers    = Hugeit_Maps_Query::get_markers( array( 'map_id' => $this->id ) );
			$this->polygons   = Hugeit_Maps_Query::get_polygons( array( 'map_id' => $this->id ) );
			$this->polylines  = Hugeit_Maps_Query::get_polylines( array( 'map_id' => $this->id ) );
			$this->circles    = Hugeit_Maps_Query::get_circles( array( 'map_id' => $this->id ) );
			$this->directions = Hugeit_Maps_Query::get_directions( array( 'map_id' => $this->id ) );
            $this->locators   = Hugeit_Maps_Query::get_locator( array( 'map_id' => $this->id ) );

		} else {

			$this->name = __( 'New Map', 'hg_gmaps' );

		}

	}

	/**
	 * When cloning an instance of Map id is changed to be null in order to have a clear copy of this map
	 */
	public function __clone() {
		$this->id = null;
	}

	/**
	 * @return mixed
	 */
	public function get_id() {
		return $this->id;
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
	 * @return Hugeit_Maps_Map
	 */
	public function set_name( $name ) {
		$this->name = sanitize_text_field( $name );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_type() {
		return $this->type;
	}

	/**
	 * @param $type
	 *
	 * @return $this
	 * @throws Exception
	 */
	public function set_type( $type ) {

		if ( is_null( $type ) || $type == '' || !$type ) {
			$type = 'ROADMAP';
		}

		if ( ! in_array( $type, array( 'ROADMAP', 'SATELLITE', 'HYBRID', 'TERRAIN' ) ) ) {
			throw new Exception( 'Invalid value for "type" field.' );
		}

		$this->type = $type;

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_zoom() {
		return $this->zoom;
	}

	/**
	 * @param int $zoom
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_zoom( $zoom ) {
		$this->zoom = absint( $zoom );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_min_zoom() {
		return $this->min_zoom;
	}

	/**
	 * @param int $min_zoom
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_min_zoom( $min_zoom ) {
		$this->min_zoom = absint( $min_zoom );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_max_zoom() {
		return $this->max_zoom;
	}

	/**
	 * @param int $max_zoom
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_max_zoom( $max_zoom ) {
		$this->max_zoom = absint( $max_zoom );

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_border_radius() {
		return $this->border_radius;
	}

	/**
	 * @param int $border_radius
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_border_radius( $border_radius ) {
		$this->border_radius = intval( $border_radius );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_center_lat() {
		return $this->center_lat;
	}

	/**
	 * @param float $center_lat
	 *
	 * @return Hugeit_Maps_Map
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
	 * @return Hugeit_Maps_Map
	 */
	public function set_center_lng( $center_lng ) {
		$this->center_lng = floatval( $center_lng );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_pan_controller() {
		return $this->pan_controller;
	}

	/**
	 * @param int $pan_controller
	 *
	 * @return $this
	 * @throws Exception
	 */
	public function set_pan_controller( $pan_controller ) {

		if ( ! in_array( $pan_controller, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "pan_controller" field' );
		}

		$this->pan_controller = (int) $pan_controller;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_zoom_controller() {
		return $this->zoom_controller;
	}

	/**
	 * @param int $zoom_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_zoom_controller( $zoom_controller ) {
		if ( ! in_array( $zoom_controller, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "pan_controller" field' );
		}

		$this->zoom_controller = (int) $zoom_controller;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_type_controller() {
		return $this->type_controller;
	}

	/**
	 * @param int $type_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_type_controller( $type_controller ) {
		if ( ! in_array( $type_controller, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "type_controller" field' );
		}

		$this->type_controller = (int) $type_controller;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_scale_controller() {
		return $this->scale_controller;
	}

	/**
	 * @param int $scale_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_scale_controller( $scale_controller ) {
		if ( ! in_array( $scale_controller, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "scale_controller" field' );
		}

		$this->scale_controller = (int) $scale_controller;

		return $this;
	}

    /**
     * @return int
     */
    public function get_locator_enabled() {
        return $this->locator_enabled;
    }

	/**
	 * @return string
	 */
	public function get_street_view_controller() {
		return $this->street_view_controller;
	}

	/**
	 * @param int $street_view_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_street_view_controller( $street_view_controller ) {
		if ( ! in_array( $street_view_controller, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "street_view_controller" field' );
		}

		$this->street_view_controller = (int) $street_view_controller;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_overview_map_controller() {
		return $this->overview_map_controller;
	}

	/**
	 * @param int $overview_map_controller
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_overview_map_controller( $overview_map_controller ) {
		if ( ! in_array( $overview_map_controller, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "overview_map_controller" field' );
		}

		$this->overview_map_controller = (int) $overview_map_controller;

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_width() {
		return $this->width;
	}

	/**
	 * @param int $width
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_width( $width ) {
		$width = absint( $width );

		if ( ! $width ) {
			throw new Exception( '"width" field must be not negative integer' );
		}

		$this->width = $width;

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_height() {
		return $this->height;
	}

	/**
	 * @param int $height
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_height( $height ) {
		$height = absint( $height );

		if ( ! $height ) {
			throw new Exception( '"height" field must be not negative integer ' );
		}

		$this->height = $height;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_align() {
		return $this->align;
	}

	/**
	 * @param string $align
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_align( $align ) {
		if ( is_null( $align ) || $align == '' || !$align ) {
			$align = 'left';
		}

		if ( ! in_array( $align, array( 'left', 'right', 'center' ) ) ) {
			throw new Exception( 'Invalid value for "align" field' );
		}

		$this->align = $align;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_info_type() {
		return $this->info_type;
	}

	/**
	 * @param string $info_type
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_info_type( $info_type ) {

		if ( is_null( $info_type ) || $info_type == '' || $info_type == 0 ) {
			$info_type = 'click';
		}

		if ( ! in_array( $info_type, array( 'click', 'hover' ) ) ) {
			throw new Exception( 'Invalid value for "info_type" field' );
		}

		$this->info_type = $info_type;

		return $this;
	}

    /**
     * @return int
     */
    public function get_open_infowindows_onload(){
        return (int) $this->open_infowindows_onload;
    }

    /**
     * @param int $open_infowindows_onload
     * @return Hugeit_Maps_Map
     * @throws Exception
     */
    public function set_open_infowindows_onload($open_infowindows_onload){

        if( !in_array( $open_infowindows_onload, array( 0, 1 ) ) ){
            throw new Exception( 'Invalid value for "open_infowindows_onload" field' );
        }

        $this->open_infowindows_onload = (int) $open_infowindows_onload;

        return $this;
    }

    /**
     * @param int $locator_enabled
     * @return Hugeit_Maps_Map
     * @throws Exception
     */
    public function set_locator_enabled( $locator_enabled ) {
        if ( ! in_array( $locator_enabled, array( 0, 1 ) ) ) {
            throw new Exception( 'Invalid value for "locator_enabled" field' );
        }

        $this->locator_enabled = (int) $locator_enabled;

        return $this;
    }

    /**
     * @return string
     */
    public function get_locator_default_address() {
        return $this->locator_default_address;
    }

    /**
     * @param string $value
     * @return Hugeit_Maps_Map
     * @throws Exception
     */
    public function set_locator_default_address( $value ) {

        $this->locator_default_address = sanitize_text_field($value);

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
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_animation( $animation ) {
		if ( is_null( $animation ) || $animation == '' || !$animation ) {
			$animation = 'none';
		}

		$available_animations = $this->get_available_animations();

		if ( ! in_array( $animation, $available_animations ) ) {
			throw new Exception( 'Invalid value for "animation" field' );
		}

		$this->animation = $animation;

		return $this;
	}

	/**
	 * Get all available animations for map in single array.
	 *
	 * @param bool|string $group
	 *
	 * @return array
	 */
	public static function get_available_animations( $group = false ) {
		$all = array( 'none' );

		$attention_seekers = array(
			'bounce',
			'flash',
			'pulse',
			'rubberBand',
			'shake',
			'swing',
			'tada',
			'wobble',
			'jello',
			'rollIn'
		);

		$bouncing_entrances = array( 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp' );

		$fading_entrances = array(
			'fadeIn',
			'fadeInDown',
			'fadeInDownBig',
			'fadeInLeft',
			'fadeInLeftBig',
			'fadeInRight',
			'fadeInRightBig',
			'fadeInUp',
			'fadeInUpBig'
		);

		$flippers = array( 'flip', 'flipInX', 'flipInY' );

		$rotating_entrances = array(
			'lightSpeedIn',
			'rotateIn',
			'rotateInDownLeft',
			'rotateInDownRight',
			'rotateInUpLeft',
			'rotateInUpRight'
		);

		$sliding_entrances = array( 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight' );

		$zooming_entrances = array( 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp' );

		$all = array_merge( $all, $attention_seekers, $bouncing_entrances, $fading_entrances, $flippers, $rotating_entrances, $sliding_entrances, $zooming_entrances );

		if ( ! $group ) {

			return $all;

		}

		switch ( $group ) {
			case 'attention_seekers':

				return $attention_seekers;

				break;
			case 'bouncing_entrances':

				return $bouncing_entrances;

				break;
			case 'fading_entrances':

				return $fading_entrances;

				break;
			case 'flippers':

				return $flippers;

				break;
			case 'rotating_entrances':

				return $rotating_entrances;

				break;
			case 'sliding_entrances':

				return $sliding_entrances;

				break;
			case 'zooming_entrances':

				return $zooming_entrances;

				break;
			default:

				return $all;

				break;

		}

	}

	/**
	 * @return string
	 */
	public function get_language() {
		return $this->language;
	}

	/**
	 * @param string $language
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_language( $language ) {
		if ( is_null( $language ) || $language == '' || !$language ) {
			$language = 'location based';
		}
		$available_languages = $this->get_available_languages();

		if ( ! in_array( $language, $available_languages ) ) {
			throw new Exception( 'Invalid value for "language" field.' );
		}

		$this->language = $language;

		return $this;
	}

	/**
	 * Get all available languages in single array.
	 *
	 * @return array
	 */
	public static function get_available_languages() {
		return array(
			'location based',
			'ar',
			'bg',
			'bn',
			'ca',
			'cs',
			'da',
			'de',
			'el',
			'en',
			'en-AU',
			'en-GB',
			'es',
			'eu',
			'fa',
			'fi',
			'fil',
			'fr',
			'gl',
			'gu',
			'hi',
			'hr',
			'hu',
			'id',
			'it',
			'iw',
			'ja',
			'kn',
			'ko',
			'lt',
			'lv',
			'ml',
			'mr',
			'nl',
			'no',
			'pl',
			'pt',
			'pt-BR',
			'pt-PT',
			'ro',
			'ru',
			'sk',
			'sl',
			'sr',
			'sv',
			'ta',
			'te',
			'th',
			'tl',
			'tr',
			'uk',
			'vi',
			'zh-CN',
			'zh-TW',
		);
	}

	/**
	 * @return string
	 */
	public function get_draggable() {
		return $this->draggable;
	}

	/**
	 * @param int $draggable
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_draggable( $draggable ) {
		if ( ! in_array( $draggable, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "draggable" field.' );
		}

		$this->draggable = (int) $draggable;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_wheel_scroll() {
		return $this->wheel_scroll;
	}

	/**
	 * @param int $wheel_scroll
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_wheel_scroll( $wheel_scroll ) {
		if ( ! in_array( $wheel_scroll, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "wheel_scroll" field.' );
		}

		$this->wheel_scroll = (int) $wheel_scroll;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_traffic_layer() {
		return $this->traffic_layer;
	}

	/**
	 * @param int $traffic_layer
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_traffic_layer( $traffic_layer ) {
		if ( ! in_array( $traffic_layer, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "traffic_layer" field.' );
		}

		$this->traffic_layer = (int) $traffic_layer;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_bike_layer() {
		return $this->bike_layer;
	}

	/**
	 * @param int $bike_layer
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_bike_layer( $bike_layer ) {
		if ( ! in_array( $bike_layer, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "bike_layer" field.' );
		}

		$this->bike_layer = (int) $bike_layer;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_transit_layer() {
		return $this->transit_layer;
	}

	/**
	 * @param int $transit_layer
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_transit_layer( $transit_layer ) {
		if ( ! in_array( $transit_layer, array( 0, 1 ) ) ) {
			throw new Exception( 'Invalid value for "transit_layer" field.' );
		}

		$this->transit_layer = (int) $transit_layer;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_styling_hue() {
		return $this->styling_hue;
	}

	/**
	 * @param string $styling_hue
	 *
	 * @return Hugeit_Maps_Map
	 */
	public function set_styling_hue( $styling_hue ) {
		$styling_hue = sanitize_hex_color_no_hash( $styling_hue );

		if ( is_null( $styling_hue ) ) {
			$styling_hue = '';
		}

		$this->styling_hue = $styling_hue;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_styling_lightness() {
		return $this->styling_lightness;
	}

	/**
	 * @param string $styling_lightness
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_styling_lightness( $styling_lightness ) {
		$styling_lightness = intval( $styling_lightness );

		if ( $styling_lightness < - 100 || $styling_lightness > 100 ) {
			throw new Exception( 'Invalid value for "styling_lightness" field.' );
		}

		$this->styling_lightness = $styling_lightness;

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_styling_gamma() {
		return $this->styling_gamma;
	}

	/**
	 * @param int $styling_gamma
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_styling_gamma( $styling_gamma ) {
		$styling_gamma = intval( $styling_gamma );

		if ( $styling_gamma < 1 || $styling_gamma > 10 ) {
			throw new Exception( 'Invalid value for "styling_gamma" field.' );
		}

		$this->styling_gamma = $styling_gamma;

		return $this;
	}

	/**
	 * @return int
	 */
	public function get_styling_saturation() {
		return $this->styling_saturation;
	}

	/**
	 * @param int $styling_saturation
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_styling_saturation( $styling_saturation ) {
		$styling_saturation = intval( $styling_saturation );

		if ( $styling_saturation < - 100 || $styling_saturation > 100 ) {
			throw new Exception( 'Invalid value for "styling_saturation" field.' );
		}

		$this->styling_saturation = $styling_saturation;

		return $this;
	}

	/**
	 * @return Hugeit_Maps_Marker[]
	 */
	public function get_markers() {
		return $this->markers;
	}

	/**
	 * @param Hugeit_Maps_Marker[] $markers
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_markers( $markers ) {
		foreach ( $markers as $marker ) {

			if ( ! ( $marker instanceof Hugeit_Maps_Marker ) ) {
				throw new Exception( 'Marker must be an instance of Hugeit_Maps_Marker class.' );
			}

		}

		$this->markers = $markers;

		return $this;
	}

	/**
	 * @return Hugeit_Maps_Polygon[]
	 */
	public function get_polygons() {
		return $this->polygons;
	}

	/**
	 * @param Hugeit_Maps_Polygon[] $polygons
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_polygons( $polygons ) {
		foreach ( $polygons as $polygon ) {

			if ( ! ( $polygon instanceof Hugeit_Maps_Polygon ) ) {
				throw new Exception( 'Polygon must be an instance of Hugeit_Maps_Polygon class.' );
			}

		}

		$this->polygons = $polygons;

		return $this;
	}

	/**
	 * @return Hugeit_Maps_Polyline[]
	 */
	public function get_polylines() {
		return $this->polylines;
	}

	/**
	 * @param Hugeit_Maps_Polyline[] $polylines
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_polylines( $polylines ) {
		foreach ( $polylines as $polyline ) {

			if ( ! ( $polyline instanceof Hugeit_Maps_Polyline ) ) {
				throw new Exception( 'Polyline must be an instance of Hugeit_Maps_Polyline class.' );
			}

		}

		$this->polylines = $polylines;

		return $this;
	}

	/**
	 * @return Hugeit_Maps_Circle[]
	 */
	public function get_circles() {
		return $this->circles;
	}

    /**
     * @return Hugeit_Maps_Locator[]
     */
    public function get_locator() {
        return $this->locators;
    }

    /**
     * @param Hugeit_Maps_Locator[] $locators
     *
     * @return Hugeit_Maps_Map
     * @throws Exception
     */
    public function set_locators( $locators ) {
        foreach ( $locators as $locator ) {

            if ( ! ( $locator instanceof Hugeit_Maps_Locator ) ) {
                throw new Exception( 'Locator must be an instance of Hugeit_Maps_Locator class.' );
            }

        }
        $this->locators = $locators;

        return $this;
    }

	/**
	 * @param Hugeit_Maps_Circle[] $circles
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_circles( $circles ) {
		foreach ( $circles as $circle ) {

			if ( ! ( $circle instanceof Hugeit_Maps_Circle ) ) {
				throw new Exception( 'Circle must be an instance of Hugeit_Maps_Circle class.' );
			}

		}

		$this->circles = $circles;

		return $this;
	}

	/**
	 * @return Hugeit_Maps_Direction[]
	 */
	public function get_directions() {
		return $this->directions;
	}

	/**
	 * @param Hugeit_Maps_Direction[] $directions
	 *
	 * @return Hugeit_Maps_Map
	 * @throws Exception
	 */
	public function set_directions( $directions ) {
		foreach ( $directions as $direction ) {

			if ( ! ( $direction instanceof Hugeit_Maps_Direction ) ) {
				throw new Exception( 'Direction must be an instance of Hugeit_Maps_Direction class.' );
			}

		}
		$this->directions = $directions;

		return $this;
	}

	/**
	 * Edit link for current map
	 */
	public function get_edit_link() {

		if ( is_null( $this->id ) ) {
			return false;
		}

		$link = admin_url( 'admin.php?page=hugeit_maps&task=edit_map&id=' . $this->id );

		$link = wp_nonce_url( $link, 'hugeit_maps_edit_map_' . $this->id );

		$link = html_entity_decode( $link );

		return $link;

	}

	/**
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id ) {
		global $wpdb;

		if ( absint( $id ) != $id ) {

			throw new Exception( 'Trying to delete a Map with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'maps' ) . " WHERE id =%d", $id ) );
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
	 * Save map data, does not save markers,polygons,polylines,circles and directions
	 */
	public function save($map_id=null) {
		global $wpdb;

		$map_data = array();

		$this->set_if_not_null( 'name', $this->name, $map_data );
		$this->set_if_not_null( 'type', $this->type, $map_data );
		$this->set_if_not_null( 'zoom', $this->zoom, $map_data );
		$this->set_if_not_null( 'border_radius', $this->border_radius, $map_data );
		$this->set_if_not_null( 'center_lat', $this->center_lat, $map_data );
		$this->set_if_not_null( 'center_lng', $this->center_lng, $map_data );
		$this->set_if_not_null( 'pan_controller', $this->pan_controller, $map_data );
		$this->set_if_not_null( 'zoom_controller', $this->zoom_controller, $map_data );
		$this->set_if_not_null( 'type_controller', $this->type_controller, $map_data );
		$this->set_if_not_null( 'scale_controller', $this->scale_controller, $map_data );
		$this->set_if_not_null( 'street_view_controller', $this->street_view_controller, $map_data );
		$this->set_if_not_null( 'overview_map_controller', $this->overview_map_controller, $map_data );
		$this->set_if_not_null( 'width', $this->width, $map_data );
		$this->set_if_not_null( 'height', $this->height, $map_data );
		$this->set_if_not_null( 'align', $this->align, $map_data );
		$this->set_if_not_null( 'wheel_scroll', $this->wheel_scroll, $map_data );
		$this->set_if_not_null( 'draggable', $this->draggable, $map_data );
		$this->set_if_not_null( 'language', $this->language, $map_data );
		$this->set_if_not_null( 'min_zoom', $this->min_zoom, $map_data );
		$this->set_if_not_null( 'max_zoom', $this->max_zoom, $map_data );
		$this->set_if_not_null( 'info_type', $this->info_type, $map_data );
		$this->set_if_not_null( 'open_infowindows_onload', $this->open_infowindows_onload, $map_data );
		$this->set_if_not_null( 'traffic_layer', $this->traffic_layer, $map_data );
		$this->set_if_not_null( 'bike_layer', $this->bike_layer, $map_data );
		$this->set_if_not_null( 'transit_layer', $this->transit_layer, $map_data );
		$this->set_if_not_null( 'styling_hue', $this->styling_hue, $map_data );
		$this->set_if_not_null( 'styling_lightness', $this->styling_lightness, $map_data );
		$this->set_if_not_null( 'styling_gamma', $this->styling_gamma, $map_data );
        $this->set_if_not_null( 'locator_enabled', $this->locator_enabled, $map_data );
        $this->set_if_not_null( 'locator_default_address', $this->locator_default_address, $map_data );
		$this->set_if_not_null( 'styling_saturation', $this->styling_saturation, $map_data );
		$this->set_if_not_null( 'animation', $this->animation, $map_data );



        $this->set_if_not_null( 'id', $map_id, $map_data );

        $map_success = is_null( $this->id )
            ? $wpdb->insert( Hugeit_Maps()->get_table_name( 'maps' ), $map_data )
            : $wpdb->update( Hugeit_Maps()->get_table_name( 'maps' ), $map_data, array( 'id' => $this->id ) );



		if ( $map_success !== false && ! isset( $this->id ) ) {
			$this->id = $wpdb->insert_id;

			return $this->id;

		} elseif ( $map_success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}
	}
}
