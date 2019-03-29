<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Shortcode
 */
class Hugeit_Maps_Shortcode {

	/**
	 * Hugeit_Maps_Shortcode constructor.
	 */
	public function __construct() {
		add_shortcode( 'huge_it_maps', array( $this, 'run_shortcode' ) );

		add_action( 'admin_footer', array( $this, 'inline_popup_content' ) );

		add_action( 'media_buttons_context', array( $this, 'add_editor_media_button' ) );

        add_filter( 'mce_external_plugins', array( $this, 'hugeit_maps_tinymce_shortcode_placeholder' ));

	}

	/**
	 * Run the shortcode on front-end
	 *
	 * @param $attrs
	 *
	 * @return string
	 * @throws Exception
	 */
	public function run_shortcode( $attrs ) {
		$attrs = shortcode_atts( array(
			'id' => false,
		), $attrs );

		if ( ! $attrs['id'] || absint( $attrs['id'] ) != $attrs['id'] ) {
			throw new Exception( '"id" parameter is required and must be not negative integer.' );
		}


		do_action( 'hugeit_maps_shortcode_scripts', $attrs['id'] );

		return $this->init_frontend( $attrs['id'] );
	}

	/**
	 * Initialize the front end
	 *
	 * @param $id int
	 *
	 * @return string
	 */
	private function init_frontend( $id ) {
		ob_start();

		$map = new Hugeit_Maps_Map( $id );

		Hugeit_Maps_Template_Loader::get_template( 'frontend/map.php', array( 'map' => $map ) );

		return ob_get_clean();
	}

	/**
	 * Add editor media button
	 *
	 * @param $context
	 *
	 * @return string
	 */
	public function add_editor_media_button( $context ) {
		$img          = untrailingslashit( Hugeit_Maps()->plugin_url() ) . "/assets/images/google-maps-20-x-20.png";
		$container_id = 'hugeit_maps';
		$title        = __( 'Select Huge IT Google Maps to insert into post', 'hg_gmaps' );
		$button_text  = __( 'Add Google Maps', 'hg_gmaps' );
		$context .= '<a class="button thickbox" title="' . $title . '"    href="#TB_inline?width=400&inlineId=' . $container_id . '">
		<span class="wp-media-buttons-icon" style="background: url(' . $img . '); background-repeat: no-repeat; background-position: left bottom;background-size: 18px 18px;"></span>' . $button_text . '</a>';

		return $context;
	}

	/**
     * Replase Shortcode with Image
	 * @param $plugins
     *
     * @return array $plugins
     *
	 */
    function hugeit_maps_tinymce_shortcode_placeholder($plugins)
    {
        $plugins['hg_maps_shortcode'] = untrailingslashit( Hugeit_Maps()->plugin_url() ) . "/assets/js/admin/shortcode-placeholder.js";
        return $plugins;
    }

	/**
	 * Inline popup contents
	 * todo: restrict to posts and pages
	 */
	public function inline_popup_content() {
		Hugeit_Maps_Template_Loader::get_template( 'admin/inline-popup.php' );
	}

}

