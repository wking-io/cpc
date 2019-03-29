<?php
/**
 * Template for API key notice
 */

?>
<div id="hg_gmaps_no_api_key_big_notice" class="error">
	<p class="hg_mui_heading"><?php _e( 'Attention!', 'hg_gmaps' ); ?></br><?php _e( 'Before you begin using Google Map plugin, please note that All Google Maps users now required to have an API key to function. You can read more about that', 'hg_gmaps' ); ?> <a href="https://googlegeodevelopers.blogspot.am/2016/06/building-for-scale-updates-to-google.html" target="_blank"><?php _e( 'here.', 'hg_gmaps' ); ?></a></p>
	<div><a class="hg_mui_btn hg_mui_btn_raised_blue" target="_blank" href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&keyType=CLIENT_SIDE&reusekey=true"><?php _e( 'Register for Google Maps API now', 'hg_gmaps' ); ?></a></div>
	<p class="hg_mui_heading">Once registered, simply paste your API key here and press the save button. It will activate in 5-10 minutes.</p>
	<div>
		<form action="" method="post">
			<label class="hg_mui_text">
				<span class="hg_mui_label mui_label_mt11">API KEY</span>
				<div class="hg_mui_input_block">
					<input name="hg_gmaps_api_key_input" class="hg_gmaps_api_key_input" value="" required="required" type="text"><span class="control_title">Input the api key here</span>
					<div class="hg_mui_bar"></div>
				</div>
			</label>
			<div class="hg_gmaps_apply_action"><button class="hg_gmaps_save_api_key_button hg_mui_btn hg_mui_btn_raised_green">Save</button><span class="spinner"></span></div>
		</form>
	</div>
	<p class="hg_mui_heading">Need help? <a href="http://huge-it.com/contact-us/" target="_blank">Contact Us</a> and we will help you with installation.</p>
</div>
