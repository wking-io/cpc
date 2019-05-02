<?php

/**
 * Add ministry taxonomy
 */
function add_taxonomies() {
		
	$ministry_labels = array(
		'name' => _x( 'Ministries', 'taxonomy general name', THEME_NAME ),
		'singular_name' => _x( 'Ministry', 'taxonomy singular name', THEME_NAME ),
		'search_items' =>  __( 'Search Ministries', THEME_NAME ),
		'all_items' => __( 'All Ministries', THEME_NAME ),
		'parent_item' => __( 'Parent Ministry', THEME_NAME ),
		'parent_item_colon' => __( 'Parent Ministry:', THEME_NAME ),
		'edit_item' => __( 'Edit Ministry', THEME_NAME ),
		'update_item' => __( 'Update Ministry', THEME_NAME ),
		'add_new_item' => __( 'Add New Ministry', THEME_NAME ),
		'new_item_name' => __( 'New Ministry', THEME_NAME ),
		'menu_name' => __( 'Ministries', THEME_NAME ),
	);

	$ministry_args = array(
		'hierarchical'      => true,
		'labels'            => $ministry_labels,
		'show_ui'           => true,
		'show_in_rest'      => true,
		'public'            => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'ministry' ),
	);

	register_taxonomy( 'cpc_ministry', array('cpc_event', 'cpc_group'), $ministry_args );

	$day_labels = array(
		'name' => _x( 'Days', 'taxonomy general name', THEME_NAME ),
		'singular_name' => _x( 'Day', 'taxonomy singular name', THEME_NAME ),
		'search_items' =>  __( 'Search Days', THEME_NAME ),
		'all_items' => __( 'All Days', THEME_NAME ),
		'parent_item' => __( 'Parent Day', THEME_NAME ),
		'parent_item_colon' => __( 'Parent Day:', THEME_NAME ),
		'edit_item' => __( 'Edit Day', THEME_NAME ),
		'update_item' => __( 'Update Day', THEME_NAME ),
		'add_new_item' => __( 'Add New Day', THEME_NAME ),
		'new_item_name' => __( 'New Day', THEME_NAME ),
		'menu_name' => __( 'Days', THEME_NAME ),
	);

	$day_args = array(
		'hierarchical'      => true,
		'labels'            => $day_labels,
		'show_ui'           => true,
		'show_in_rest'      => true,
		'public'            => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'day' ),
	);

	register_taxonomy( 'cpc_day', array('cpc_group'), $day_args );

	$group_type_labels = array(
		'name' => _x( 'Group Types', 'taxonomy general name', THEME_NAME ),
		'singular_name' => _x( 'Group Type', 'taxonomy singular name', THEME_NAME ),
		'search_items' =>  __( 'Search Group Types', THEME_NAME ),
		'all_items' => __( 'All Group Types', THEME_NAME ),
		'parent_item' => __( 'Parent Group Type', THEME_NAME ),
		'parent_item_colon' => __( 'Parent Group Type:', THEME_NAME ),
		'edit_item' => __( 'Edit Group Type', THEME_NAME ),
		'update_item' => __( 'Update Group Type', THEME_NAME ),
		'add_new_item' => __( 'Add New Group Type', THEME_NAME ),
		'new_item_name' => __( 'New Group Type', THEME_NAME ),
		'menu_name' => __( 'Group Types', THEME_NAME ),
	);

	$group_type_args = array(
		'hierarchical'      => true,
		'labels'            => $group_type_labels,
		'show_ui'           => true,
		'show_in_rest'      => true,
		'public'            => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'group-type' ),
	);

	register_taxonomy( 'cpc_group_type', array('cpc_group'), $group_type_args );

	$officer_title_labels = array(
		'name' => _x( 'Officer Titles', 'taxonomy general name', THEME_NAME ),
		'singular_name' => _x( 'Officer Title', 'taxonomy singular name', THEME_NAME ),
		'search_items' =>  __( 'Search Officer Titles', THEME_NAME ),
		'all_items' => __( 'All Officer Titles', THEME_NAME ),
		'parent_item' => __( 'Parent Officer Title', THEME_NAME ),
		'parent_item_colon' => __( 'Parent Officer Title:', THEME_NAME ),
		'edit_item' => __( 'Edit Officer Title', THEME_NAME ),
		'update_item' => __( 'Update Officer Title', THEME_NAME ),
		'add_new_item' => __( 'Add New Officer Title', THEME_NAME ),
		'new_item_name' => __( 'New Officer Title', THEME_NAME ),
		'menu_name' => __( 'Officer Titles', THEME_NAME ),
	);

	$officer_title_args = array(
		'hierarchical'      => true,
		'labels'            => $officer_title_labels,
		'show_ui'           => true,
		'show_in_rest'      => true,
		'public'            => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'officer-title' ),
	);

	register_taxonomy( 'officer_title', array('cpc_officer'), $officer_title_args );

	$page_nav_labels = array(
		'name' => _x( 'Nav Types', 'taxonomy general name', THEME_NAME ),
		'singular_name' => _x( 'Nav Type', 'taxonomy singular name', THEME_NAME ),
		'search_items' =>  __( 'Search Nav Types', THEME_NAME ),
		'all_items' => __( 'All Nav Types', THEME_NAME ),
		'parent_item' => __( 'Parent Nav Type', THEME_NAME ),
		'parent_item_colon' => __( 'Parent Nav Type:', THEME_NAME ),
		'edit_item' => __( 'Edit Nav Type', THEME_NAME ),
		'update_item' => __( 'Update Nav Type', THEME_NAME ),
		'add_new_item' => __( 'Add New Nav Type', THEME_NAME ),
		'new_item_name' => __( 'New Nav Type', THEME_NAME ),
		'menu_name' => __( 'Nav Types', THEME_NAME ),
	);

	$page_nav_args = array(
		'hierarchical'      => true,
		'labels'            => $page_nav_labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'nav-type' ),
	);

	register_taxonomy( 'nav_type', array('page'), $page_nav_args );
}

add_action( 'init', 'add_taxonomies', 0 );

function cpc_offset_query ( $query ) {
	if ( is_post_type_archive( 'cpc_sermon' ) && $query->is_main_query() ) :
		$per_page = 30;
		if ( ! $query->is_paged() ) :
			$query->set( 'offset', '1' );
		else :
			$query->set( 'offset', ( ( get_query_var('paged') - 1 ) * $per_page) + 1);
		endif;

		$query->set( 'posts_per_page', $per_page );
	endif;

	if ( is_post_type_archive( 'cpc_staff' ) && $query->is_main_query() ) :
		$per_page = 500;
		if ( ! $query->is_paged() ) :
			$query->set( 'offset', '1' );
		else :
			$query->set( 'offset', ( ( get_query_var('paged') - 1 ) * $per_page) + 1);
		endif;

		$query->set( 'posts_per_page', $per_page );
	endif;

	if ( is_post_type_archive( 'cpc_officer' ) && $query->is_main_query() ) :
		$per_page = 500;
		$query->set( 'posts_per_page', $per_page );
	endif;

}

add_action( 'pre_get_posts', 'cpc_offset_query' );

function posts_link_attributes() {
    return 'class="cpc-button cpc-button--outline"';
}


add_filter('next_posts_link_attributes', 'posts_link_attributes');
add_filter('previous_posts_link_attributes', 'posts_link_attributes');

function spinner_url( $image_src, $form ) {
    return home_url( '/wp-content/mu-plugins/covenant-core/build/images/spinner.png' );
}

add_filter( 'gform_ajax_spinner_url', 'spinner_url', 10, 2 );