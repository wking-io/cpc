<?php
/**
 * Add all assets for theme
 *
 * @package cpc
 */

if ( ! function_exists( 'cpc_scripts' ) ) :

	function cpc_scripts() {
		wp_enqueue_script('jquery');
		wp_enqueue_script( 'cpc_main' );
	}

endif;

add_action('wp_enqueue_scripts', 'cpc_scripts');

if ( ! function_exists( 'cpc_styles' ) ) :

	function cpc_styles() {
	    wp_enqueue_style( 'cpc_main' );
	}

endif;

add_action('wp_enqueue_scripts', 'cpc_styles');
