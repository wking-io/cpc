<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Template_Loader
 * This class is used to load views and templates into php files
 */
class Hugeit_Maps_Template_Loader {

	/**
	 * @param $template_name
	 * @param string $template_path
	 * @param string $default_path
	 *
	 * @return mixed|void
	 */
	private static function locate_template( $template_name, $template_path = '', $default_path = '' ) {
		if ( ! $template_path ) {
			$template_path = Hugeit_Maps()->template_path();
		}
		if ( ! $default_path ) {
			$default_path = Hugeit_Maps()->plugin_path() . '/templates/';
		}
		/**
		 * Look within passed path within the theme - this is priority.
		 */
		$template = locate_template(
			array(
				trailingslashit( $template_path ) . $template_name,
				$template_name
			)
		);
		/**
		 * Get default template
		 */
		if ( ! $template ) {
			$template = $default_path . $template_name;
		}

		/**
		 * Return what we found.
		 */
		return apply_filters( 'hugeit_maps_locate_template', $template, $template_name, $template_path );
	}

	/**
	 * @param $template_name
	 * @param array $args
	 * @param string $template_path
	 * @param string $default_path
	 */
	public static function get_template( $template_name, $args = array(), $template_path = '', $default_path = '' ) {
		if ( $args && is_array( $args ) ) {

			extract( $args );

		}

		$located = self::locate_template( $template_name, $template_path, $default_path );

		if ( ! file_exists( $located ) ) {

			_doing_it_wrong( __FUNCTION__, sprintf( '<code>%s</code> does not exist.', $located ), '2.2.0' );

			return;

		}

		// Allow 3rd party plugin filter template file from their plugin.
		$located = apply_filters( 'hugeit_maps_get_template', $located, $template_name, $args, $template_path, $default_path );

		do_action( 'hugeit_maps_before_template_part', $template_name, $template_path, $located, $args );

		include( $located );

		do_action( 'hugeit_maps_after_template_part', $template_name, $template_path, $located, $args );
	}

}