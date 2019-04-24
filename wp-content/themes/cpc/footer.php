<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cpc
 */

?>
	<footer id="footer" class="footer bg-primary" role="contentinfo">
		<div class="max-w-5xl mx-auto pt-16 px-6 sm:px-8">
			<div class="logo flex items-center justify-center">
				<a class="block h-full" href="<?php echo home_url(); ?>"><?php echo ui_logo( array( 'type' => 'vertical', 'is_light' => true ) ); ?></a>
			</div>
			<?php wp_nav_menu( array(
				'theme_location' => 'menu-main',
				'menu_id' => 'primary-menu',
				'menu_class' => 'list-reset flex flex-row flex-wrap lg:flex-no-wrap lg:justify-center w-full m-0 pt-16',
				'container' => false,
				'walker' => new Primary_Menu()
			) ); ?>
			<div class="flex flex-col items-center justify-center md:flex-row md:justify-between pt-3 pb-8">
				<p class="text-white pb-8 md:pb-0">&copy; <?php echo date('Y'); ?> All Rights Reserved.</p>
				<ul class="list-reset flex -mx-4">
					<li class="h-5 mx-2">
						<a class="h-full" href="<?php the_field('facebook_page', 'options'); ?>">
							<svg class="h-full" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.27537 6.57204H6.11039V4.49628C6.11039 3.71673 6.62706 3.53499 6.99096 3.53499C7.35403 3.53499 9.22445 3.53499 9.22445 3.53499V0.107953L6.14848 0.0959473C2.73387 0.0959473 1.9568 2.65194 1.9568 4.28763V6.57204H-0.0179443V10.1034H1.9568C1.9568 14.6354 1.9568 20.0959 1.9568 20.0959H6.11039C6.11039 20.0959 6.11039 14.5816 6.11039 10.1034H8.91313L9.27537 6.57204Z" fill="white"/>
							</svg>
						</a>
					</li>
					<li class="h-5 mx-4">
						<a class="h-full" href="<?php the_field('instagram_page', 'options'); ?>">
							<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 56.7">
								<path class="fill-white" d="M28.35,13.6A14.64,14.64,0,1,0,43,28.24,14.66,14.66,0,0,0,28.35,13.6Zm0,24a9.38,9.38,0,1,1,9.37-9.37A9.42,9.42,0,0,1,28.35,37.61Z"/>
								<circle class="fill-white" cx="43.55" cy="13.26" r="3.32"/>
								<path class="fill-white" d="M52.13,4.69A16.27,16.27,0,0,0,40.12,0H16.58C6.63,0,0,6.63,0,16.58V40A16.43,16.43,0,0,0,4.8,52.24,16.7,16.7,0,0,0,16.69,56.7H40a16.85,16.85,0,0,0,12-4.46c3.09-3,4.69-7.2,4.69-12.12V16.58A16.38,16.38,0,0,0,52.13,4.69Zm-.69,35.43c0,3.55-1,6.41-3.08,8.35a11.85,11.85,0,0,1-8.35,3H16.69a11.85,11.85,0,0,1-8.35-3A11.53,11.53,0,0,1,5.26,40V16.58A11.44,11.44,0,0,1,8.34,8.23a11.66,11.66,0,0,1,8.35-3H40.24a11.4,11.4,0,0,1,8.34,3.08,11.79,11.79,0,0,1,3.09,8.24V40.12Z"/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>
