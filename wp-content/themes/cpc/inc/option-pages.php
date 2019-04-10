<?php
/**
 * Add option pages for CPTs
 *
 * @package cpc
 */

function add_option_sub_page( $name, $parent_slug = 'edit.php' ) {
	if( function_exists( 'acf_add_options_sub_page' ) ) {
		// add sub page
		acf_add_options_sub_page( array(
			'page_title' 	=> $name,
			'menu_slug'		=> strtolower( $name ) . '-settings',
			'parent_slug' => $parent_slug,
		) );
	
	}
}

function add_option_pages() {

	if( function_exists( 'acf_add_options_page' ) ) {
		acf_add_options_page( array(
			'page_title' => 'Company Settings',
			'menu_slug'	 => 'company-settings',
			'icon_url' 	 => 'dashicons-building',
			'position'	 => 75
		) );

		add_option_sub_page( 'Blog Archive' );
		add_option_sub_page( 'Event Archive', 'edit.php?post_type=cpc_event' );
		add_option_sub_page( 'Officer Archive', 'edit.php?post_type=cpc_officer' );
	
	}

}

add_action( 'acf/init', 'add_option_pages' );