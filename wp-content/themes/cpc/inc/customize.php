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
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'ministry' ),
	);

	register_taxonomy( 'ministry', array('event', 'group'), $ministry_args );

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
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'day' ),
	);

	register_taxonomy( 'day', array('group'), $day_args );

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
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'group-type' ),
	);

	register_taxonomy( 'group_type', array('group'), $group_type_args );

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
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'officer-title' ),
	);

	register_taxonomy( 'officer_title', array('officer'), $officer_title_args );
}
add_action( 'init', 'add_taxonomies', 0 );