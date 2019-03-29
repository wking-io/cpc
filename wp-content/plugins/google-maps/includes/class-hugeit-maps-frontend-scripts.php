<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Frontend_Scripts
 */
class Hugeit_Maps_Frontend_Scripts {

	/**
	 * Initializes scripts and styles for front end, this hook works only when a shortcode is attached to page
	 */
	public static function init() {
		add_action( 'hugeit_maps_shortcode_scripts', array( __CLASS__, 'add_scripts' ) );
		add_action( 'hugeit_maps_shortcode_scripts', array( __CLASS__, 'add_styles' ) );
		add_action( 'wp_head', array( __CLASS__, 'add_ajax_url_js' ) );
	}

	/**
	 * Add Scripts
	 *
	 * @param $map_id int
	 */
	public static function add_scripts( $map_id ) {

		$map = new Hugeit_Maps_Map( $map_id );

		$api_key = Hugeit_Maps()->get_api_key();

		$key_param = ( ! is_null( $api_key ) && $api_key != "" ) ? 'key=' . $api_key . '&' : '';


		wp_enqueue_script( 'hugeit-google-maps-api', 'https://maps.googleapis.com/maps/api/js?' . $key_param . 'libraries=places,geometry', false, null, true );

		wp_enqueue_script( 'hugeit_maps_frontend', Hugeit_Maps()->plugin_url() . '/assets/js/frontend/frontend.js', array(
			'hugeit-google-maps-api',
			'jquery'
		), false, true );

		wp_localize_script( 'hugeit_maps_frontend', 'mapFrontL10n', array(
			'draggable'          => $map->get_draggable(),
			'wheel_scroll'       => $map->get_wheel_scroll(),
			'center_lat'         => $map->get_center_lat(),
			'center_lng'         => $map->get_center_lng(),
			'styling_hue'        => $map->get_styling_hue(),
			'styling_saturation' => $map->get_styling_saturation(),
			'styling_lightness'  => $map->get_styling_lightness(),
			'styling_gamma'      => $map->get_styling_gamma()
		) );

        wp_localize_script( 'hugeit_maps_frontend', 'frontdir_options', array(
            'locator_enabled'      => $map->get_locator_enabled(),
            'imgurl'               => HUGEIT_MAPS_IMAGES_URL,
        ) );

	}

	/**
	 * Define the 'ajaxurl' JS variable, used by themes and plugins as an AJAX endpoint.
	 *
	 */
	public static function add_ajax_url_js() {
		?>

		<script
			type="text/javascript">var ajaxurl = '<?php echo admin_url( 'admin-ajax.php', is_ssl() ? 'admin' : 'http' ); ?>';</script>

		<?php
	}

	/**
	 * Add Styles
	 *
	 * @param $map_id int
	 */
	public static function add_styles( $map_id ) {
		wp_enqueue_style( 'hugeit_maps_frontend', Hugeit_Maps()->plugin_url() . '/assets/css/frontend.css' );
        wp_enqueue_style( 'hugeit_maps_store_locator', Hugeit_Maps()->plugin_url() . '/assets/css/store-locator.css' );
	}
}