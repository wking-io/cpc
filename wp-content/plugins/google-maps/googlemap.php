<?php
/*
Plugin Name: Huge IT Google Map
Plugin URI: https://huge-it.com/google-map
Description: This easy to use Google Map plugin gives you opportunity to show anything on the map with fantastic tools of Google Maps.
Version: 2.2.9
Author: Huge-IT
Author URI: https://huge-it.com
License: GNU/GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
Domain Path: /languages
Text Domain: hg_gmaps
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

require( plugin_dir_path(__FILE__) . '/config.php');

if( ! class_exists( 'Hugeit_Maps' ) ):
	/**
	 * Main Huge-IT Google Maps Class
	 */
	final class Hugeit_Maps {

		/**
		 * Version of plugin
		 * @var string
		 */
		public $version = '2.2.9';

		/**
		 * Google Maps API Key
		 *
		 * @var string
		 */
		private $api_key;

		/**
		 * Instance of Hugeit_Maps_Admin class to manage admin
		 * @var Hugeit_Maps_Admin instance
		 */
		public $admin = null;

		/**
		 * Instance of Hugeit_Maps_Template_Loader class to manage admin
		 * @var Hugeit_Maps_Template_Loader instance
		 */
		public $template_loader = null;

		/**
		 * The single instance of the class.
		 *
		 * @var Hugeit_Maps
		 */
		protected static $_instance = null;

		/**
		 * Main Hugeit_Maps Instance.
		 *
		 * Ensures only one instance of Hugeit_Maps is loaded or can be loaded.
		 *
		 * @static
		 * @see Hugeit_Maps()
		 * @return Hugeit_Maps - Main instance.
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		/**
		 * Do not let to make clones of this class
		 */
		private function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'hugeit-maps' ), '2.2.0' );
		}

		/**
		 * Unserializing instances of this class is forbidden.
		 */
		private function __wakeup() {
			_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'hugeit-maps' ), '2.2.0' );
		}

		/**
		 * Hugeit_Maps Constructor.
		 */
		private function __construct() {
			$this->define_constants();
			$this->init_hooks();
			do_action( 'hugeit_maps_loaded' );
		}

		/**
		 * Hook into actions and filters.
		 */
		private function init_hooks() {
			register_activation_hook( __FILE__, array( 'Hugeit_Maps_Install', 'install' ) );
			add_action( 'init', array( $this, 'init' ), 0 );
            add_action( 'widgets_init', array( 'Hugeit_Maps_Widgets', 'init' ) );
        }

		/**
		 * Define Portfolio Gallery Constants.
		 */
		private function define_constants() {
			$this->define( 'HUGEIT_MAPS_PLUGIN_FILE', __FILE__ );
			$this->define( 'HUGEIT_MAPS_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
			$this->define( 'HUGEIT_MAPS_VERSION', $this->version );
			$this->define( 'HUGEIT_MAPS_IMAGES_PATH', $this->plugin_path() . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR );
			$this->define( 'HUGEIT_MAPS_IMAGES_URL', untrailingslashit($this->plugin_url() ) . '/assets/images/');
			$this->define( 'HUGEIT_MAPS_TEMPLATES_PATH', $this->plugin_path() . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR);
			$this->define( 'HUGEIT_MAPS_TEMPLATES_URL', untrailingslashit($this->plugin_url()) . '/templates/');
		}

		/**
		 * Define constant if not already set.
		 *
		 * @param  string $name
		 * @param  string|bool $value
		 */
		private function define( $name, $value ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * What type of request is this?
		 * string $type ajax, frontend or admin.
		 *
		 * @return bool
		 */
		private function is_request( $type ) {
			switch ( $type ) {
				case 'admin' :
					return is_admin();
				case 'ajax' :
					return defined( 'DOING_AJAX' );
				case 'cron' :
					return defined( 'DOING_CRON' );
				case 'frontend' :
					return  ! is_admin() && ! defined( 'DOING_CRON' );
			}
		}

		/**
		 *
		 */
		public function init(){

			$this->api_key = get_option( 'hugeit_maps_api_key', null );

            new Hugeit_Maps_Shortcode();

            Hugeit_Maps_Install::init();

            Hugeit_Maps_Ajax::init();


			if( $this->is_request( 'admin' ) ){

				$this->admin = new Hugeit_Maps_Admin();
                Hugeit_Maps_Admin_Assets::init();

			}

			if( $this->is_request( 'frontend' ) ){

                Hugeit_Maps_Frontend_Scripts::init();

            }

		}

        /**
         * Returns database table names
         * @param $which
         * @return string
         * @throws Exception
         */
		public function get_table_name( $which ){
			$table_name = '';

			switch( $which ){

				case 'maps':

					$table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_maps";

					break;
				case 'markers':

					$table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_markers";

					break;
				case 'polygons':

					$table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_polygons";

					break;
				case 'polylines':

					$table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_polylines";

					break;
				case 'circles':

					$table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_circles";

					break;
				case 'directions':

					$table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_directions";

					break;

                case 'stores':

                    $table_name = $GLOBALS['wpdb']->prefix . "hugeit_maps_stores";

                    break;

			}

			if( !$table_name ){

				throw new Exception( 'Trying to access a non existing database table "'. $which .'"' );

			}

			return $table_name;

		}

		/**
		 * Get the template path.
		 * @return string
		 */
		public function template_path() {
			return apply_filters( 'hugeit_maps_template_path', 'hugeit_maps/' );
		}

		/**
		 * Get the plugin url.
		 * @return string
		 */
		public function plugin_url() {
			return untrailingslashit( plugins_url( '/', __FILE__ ) );
		}
		/**
		 * Get the plugin path.
		 * @return string
		 */
		public function plugin_path() {
			return untrailingslashit( plugin_dir_path( __FILE__ ) );
		}

		/**
		 * Returns Google Maps API key
		 *
		 * @return string
		 */
		public function get_api_key(){
			return $this->api_key;
		}

	}

endif;

/**
 * @return Hugeit_Maps
 */
function Hugeit_Maps(){
	return Hugeit_Maps::instance();
}

$GLOBALS['hugeit_maps']  = Hugeit_Maps();