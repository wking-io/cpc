<?php
/**
 * Add all assets for theme
 *
 * @package cpc
 */

if ( ! function_exists( 'cpc_scripts' ) ) :

	function cpc_scripts() {

		wp_register_script( 'polyfill', get_template_directory_uri() . '/assets/js/polyfill.js', array(), '1.0.0', true );
		wp_enqueue_script( 'polyfill' );
		
		wp_register_script( 'main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
		wp_enqueue_script( 'main' );

	}

endif;

add_action('wp_enqueue_scripts', 'cpc_scripts');

if ( ! function_exists( 'cpc_styles' ) ) :

	function cpc_styles() {

	    wp_register_style( 'main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0', false );
	    wp_enqueue_style( 'main' );

	}

endif;

add_action('wp_enqueue_scripts', 'cpc_styles');

/**
* Dequeue jQuery Migrate script in WordPress.
*/
function cpc_remove_jquery( &$scripts) {
    if ( ! is_admin() ) {
        $scripts->remove( 'jquery');
        $scripts->add( 'jquery', false, array( 'jquery-core' ), '1.12.4' );
    }
}

add_filter( 'wp_default_scripts', 'cpc_remove_jquery' );
