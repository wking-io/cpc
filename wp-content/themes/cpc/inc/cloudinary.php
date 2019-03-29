<?php

add_action( 'init', 'setup_cloudinary' );

function setup_cloudinary() {
  include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

  if ( is_plugin_active( 'cloudinary-image-management-and-manipulation-in-the-cloud-cdn/cloudinary.php' ) ) :

    $cloudinary_url_raw = get_option( 'cloudinary_url' );

    if ( false === $cloudinary_url_raw ) :
      error_log( 'No Cloudinary URL found in Options table.');
      return;
    endif;

    $cloudinary_info = parse_url( $cloudinary_url_raw );
    $name = $cloudinary_info['host'];
    $api =  $cloudinary_info['user'];
    $secret = $cloudinary_info['pass'];

    if ( ! empty( $name ) && ! empty( $api ) && ! empty( $secret ) ) :

      \Cloudinary::config(array( 
        "cloud_name" => $name, 
        "api_key" => $api, 
        "api_secret" => $secret, 
      ));

    else :

      error_log( 'Failed to parse Cloudinary URL.' );

    endif;
  endif;
}