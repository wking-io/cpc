<?php
/**
 * Shortcodes
 *
 * @package cpc
 */

// add_shortcode( 'name', 'cpc_name_shortcode');

function cpc_name_shortcode( $atts = array() ) {

	$a = shortcode_atts( array(
		'classname' => '',
		'full' => true,
	), $atts );

	$is_full = $a['full'] == 'true';

	ob_start(); ?>

	<div class="<?php echo $a['classname']; ?>">
		<h1 class="visually-hidden">Covenant Presbyterian Church</h1>
		<?php if ( $is_full ) : ?>
		<?php else : ?>
		<?php endif; ?>
	</div>
		
	<?php return ob_get_clean();
}

// add_shortcode( 'logo', 'cpc_logo_shortcode');

function cpc_logo_shortcode( $atts = array() ) {
	$a = shortcode_atts( array(
		'classname' => '',
	), $atts );

	ob_start(); ?>
		
	<?php return ob_get_clean();
}

// add_shortcode( 'loader', 'cpc_loader_shortcode');

function cpc_loader_shortcode( $atts = array() ) {
	$a = shortcode_atts( array(
		'dark' => 'false',
	), $atts );

	
	$color = $a['dark'] === 'true' ? '#3F4243' : '#FFFFFF';

	ob_start(); ?>

	<svg class="loader" width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="<?php echo $color; ?>">
			<g fill="none" fill-rule="evenodd">
					<g transform="translate(1 1)" stroke-width="2">
							<circle cx="5" cy="50" r="5">
									<animate attributeName="cy"
											begin="0s" dur="2.2s"
											values="50;5;50;50"
											calcMode="linear"
											repeatCount="indefinite" />
									<animate attributeName="cx"
											begin="0s" dur="2.2s"
											values="5;27;49;5"
											calcMode="linear"
											repeatCount="indefinite" />
							</circle>
							<circle cx="27" cy="5" r="5">
									<animate attributeName="cy"
											begin="0s" dur="2.2s"
											from="5" to="5"
											values="5;50;50;5"
											calcMode="linear"
											repeatCount="indefinite" />
									<animate attributeName="cx"
											begin="0s" dur="2.2s"
											from="27" to="27"
											values="27;49;5;27"
											calcMode="linear"
											repeatCount="indefinite" />
							</circle>
							<circle cx="49" cy="50" r="5">
									<animate attributeName="cy"
											begin="0s" dur="2.2s"
											values="50;50;5;50"
											calcMode="linear"
											repeatCount="indefinite" />
									<animate attributeName="cx"
											from="49" to="49"
											begin="0s" dur="2.2s"
											values="49;5;27;49"
											calcMode="linear"
											repeatCount="indefinite" />
							</circle>
					</g>
			</g>
	</svg>
		
	<?php return ob_get_clean();
}