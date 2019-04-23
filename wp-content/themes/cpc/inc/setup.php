<?php

if ( ! function_exists( 'cpc_setup' ) ) :

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function cpc_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on cpc, use a find and replace
	 * to change 'cpc' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'cpc', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-main' => esc_html__( 'Primary', THEME_NAME ),
		'menu-top' => esc_html__( 'Top', THEME_NAME ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'cpc_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
	add_theme_support( 'align-wide' );
	add_theme_support(
		'editor-color-palette', array(
			array(
				'name'  => esc_html__( 'Transparent', THEME_NAME ),
				'slug' => 'transparent',
				'color' => 'transparent',
			),
			array(
				'name'  => esc_html__( 'Black', THEME_NAME ),
				'slug' => 'black',
				'color' => '#03293b',
			),
			array(
				'name'  => esc_html__( 'Grey', THEME_NAME ),
				'slug' => 'grey',
				'color' => '#f2f4f5',
			),
			array(
				'name'  => esc_html__( 'White', THEME_NAME ),
				'slug' => 'white',
				'color' => '#ffffff',
			),
			array(
				'name'  => esc_html__( 'Primary', THEME_NAME ),
				'slug' => 'primary',
				'color' => '#5ba5bf',
			),
			array(
				'name'  => esc_html__( 'Primary Dark', THEME_NAME ),
				'slug' => 'primary-dark',
				'color' => '#436979',
			)
		)
	);

	// Turn off admin bar on Front End
	add_filter( 'show_admin_bar', '__return_false' );
}

endif;

add_action( 'after_setup_theme', 'cpc_setup' );
