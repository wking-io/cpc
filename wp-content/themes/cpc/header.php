<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cpc
 */

$is_light = cpc_get_nav_type();

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta http-equiv="Content-Language" content="en">
		<meta name="google" content="notranslate">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">

		<?php if ( is_page( 'contact' ) ) :
			// gravity_form_enqueue_scripts( 1, false );
		endif; ?>

		<?php wp_head(); ?>
	</head>

<body <?php body_class( 'font-sans text-black' ); ?>>
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', THEME_NAME ); ?></a>

	<header id="masthead" class="header w-full flex justify-between items-center z-50 absolute top-0 inset-x-0 py-3 px-4 lg:py-4 lg:px-6" role="banner" data-menu-open="false" data-header-fixed="false">
		<h1 class="relative z-50 h-10">
			<a class="logo--sm block lg:hidden h-full" href="<?php echo home_url(); ?>"><?php echo ui_logo( array( 'type' => 'condensed', 'is_light' => $is_light ) ); ?></a>
			<a class="logo--lg absolute hidden lg:block top-0 left-0" href="<?php echo home_url(); ?>"><?php echo ui_logo( array( 'is_light' => $is_light ) ); ?></a>
			<span class="visually-hidden"><?php echo get_bloginfo( 'name' ); ?></span>
		</h1>

		<nav class="nav z-40 flex items-center" role="navigation">
			<?php wp_nav_menu( array(
				'theme_location' => 'menu-top',
				'menu_id' => 'top-menu',
				'menu_class' => 'top-menu hidden md:flex list-reset justify-end items-center p-0 m-0 z-40',
				'container' => false,
				'walker' => new Top_Menu()
			) ); ?>

			<button class="menu-toggle ml-12 z-40 relative cursor-pointer" aria-expanded="false" aria-controls="masthead">
				<span class="<?php echo $is_light ? 'bg-white' : 'bg-primary'?>"></span>
				<span class="<?php echo $is_light ? 'bg-white' : 'bg-primary'?>"></span>
			</button>
		
			<div class="menu-wrapper w-full h-screen fixed inset-0 bg-black p-6 text-white opacity-0 pt-20 overflow-scroll md:overflow-visible">
				<?php wp_nav_menu( array(
						'theme_location' => 'menu-main',
						'menu_id' => 'primary-menu',
						'menu_class' => 'list-reset flex flex-row flex-wrap lg:flex-no-wrap lg:justify-center w-full m-0 pt-4 lg:pt-16 max-w-5xl mx-auto',
						'container' => false,
						'walker' => new Primary_Menu()
					) ); ?>
			</div>

		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
