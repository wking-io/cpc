<?php
/**
 * Template for API Key form
 */

$api_key = Hugeit_Maps()->get_api_key();

?>
<form class="hg_gmaps_main_api_form <?php if ( is_null($api_key) || $api_key == '' ) { echo 'hide'; } ?>" action="" method="post">
	<label class="hg_mui_text">
		<span class="hg_mui_label mui_label_mt11"><?php _e( 'API KEY', 'hg_gmaps' ); ?></span>
		<div class="hg_mui_input_block">
			<input name="hg_gmaps_api_key_input" class="hg_gmaps_api_key_input" value="<?php echo $api_key; ?>"
			       required="required" type="text"><span class="control_title"><?php _e( 'Input the api key here', 'hg_gmaps' ); ?></span>
			<div class="hg_mui_bar"></div>
		</div>
	</label>
	<span class="hg_gmaps_apply_action"><button class="hg_gmaps_save_api_key_button hg_mui_btn hg_mui_btn_raised_green"><?php _e( 'Save', 'hg_gmaps' ); ?></button><span class="spinner"></span></span>
</form>
