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

	<header id="masthead" class="header w-full flex justify-between items-center z-50" role="banner" data-menu-open="false" data-header-fixed="false">
		<h1 class="branding relative z-50 h-6">
			<a class="flex items-center h-full" href="<?php echo home_url(); ?>">
			</a>
		</h1>

		<nav class="nav z-40" role="navigation">
			<button class="menu-toggle z-40 w-6 relative cursor-pointer lg:hidden" aria-expanded="false" aria-controls="masthead">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</button>
		
			<div class="menu-wrapper w-full flex flex-col lg:flex-row justify-end items-center fixed lg:static pin bg-black lg:bg-transparent p-8 lg:p-0 overflow-hidden lg:overflow-visible text-white lg:text-black text-right opacity-0 lg:opacity-100">
				<div class="menu-aside w-full text-white p-4 sm:p-6 m-0 lg:hidden">
					<p class="mb-4 leading-normal"></p>
					<p class="m-0"><strong></strong></p>
				</div>
			</div>

		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
