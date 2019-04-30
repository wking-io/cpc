<?php
/**
 * Add all assets for theme
 *
 * @package cpc
 */

if ( ! function_exists( 'cpc_scripts' ) ) :

	function cpc_scripts() {
		wp_enqueue_script('jquery');

		if ( is_singular( 'post' ) ) :
			wp_enqueue_script( 'cpc_blog' );
		elseif ( is_home() ) :
			wp_enqueue_script( 'cpc_blogs' );
		elseif ( is_post_type_archive( 'cpc_event' ) ) :
			wp_enqueue_script( 'cpc_events' );
		elseif ( is_singular( 'cpc_event' ) ) :
			wp_enqueue_script( 'cpc_event' );
		elseif ( is_page_template( 'template-giving.php' ) ) :
			wp_enqueue_script( 'cpc_giving' );
		elseif ( is_post_type_archive( 'cpc_group' ) ) :
			wp_enqueue_script( 'cpc_groups' );
		elseif ( is_singular( 'cpc_group' ) ) :
			wp_enqueue_script( 'cpc_group' );
		elseif ( is_front_page() ) :
			wp_enqueue_script( 'cpc_home' );
		elseif ( is_post_type_archive( 'cpc_officer' ) ) :
			wp_enqueue_script( 'cpc_officers' );
		elseif ( is_post_type_archive( 'cpc_sermon' ) ) :
			wp_enqueue_script( 'cpc_sermons' );
		elseif ( is_singular( 'cpc_sermon' )) :
			wp_enqueue_script( 'cpc_sermon' );
		elseif ( is_post_type_archive( 'cpc_staff' ) ) :
			wp_enqueue_script( 'cpc_staff' );
		elseif ( is_page_template( 'template-sundays.php' ) ) :
			wp_enqueue_script( 'cpc_sundays' );
		else :
			wp_enqueue_script( 'cpc_main' );
		endif;
	}

endif;

add_action('wp_enqueue_scripts', 'cpc_scripts');

if ( ! function_exists( 'cpc_styles' ) ) :

	function cpc_styles() {

			if ( is_singular( 'post' ) ) :
				wp_enqueue_style( 'cpc_blog' );
			elseif ( is_home() ) :
				wp_enqueue_style( 'cpc_blogs' );
			elseif ( is_post_type_archive( 'cpc_event' ) ) :
				wp_enqueue_style( 'cpc_events' );
			elseif ( is_singular( 'cpc_event' ) ) :
				wp_enqueue_style( 'cpc_event' );
			elseif ( is_page_template( 'template-giving.php' ) ) :
				wp_enqueue_style( 'cpc_giving' );
			elseif ( is_post_type_archive( 'cpc_group' ) ) :
				wp_enqueue_style( 'cpc_groups' );
			elseif ( is_singular( 'cpc_group' ) ) :
				wp_enqueue_style( 'cpc_group' );
			elseif ( is_front_page() ) :
				wp_enqueue_style( 'cpc_home' );
			elseif ( is_post_type_archive( 'cpc_officer' ) ) :
				wp_enqueue_style( 'cpc_officers' );
			elseif ( is_post_type_archive( 'cpc_sermon' ) ) :
				wp_enqueue_style( 'cpc_sermons' );
			elseif ( is_singular( 'cpc_sermon' )) :
				wp_enqueue_style( 'cpc_sermon' );
			elseif ( is_post_type_archive( 'cpc_staff' ) ) :
				wp_enqueue_style( 'cpc_staff' );
			elseif ( is_page_template( 'template-sundays.php' ) ) :
				wp_enqueue_style( 'cpc_sundays' );
			else :
				wp_enqueue_style( 'cpc_main' );
			endif;
	}

endif;

add_action('wp_enqueue_scripts', 'cpc_styles');
