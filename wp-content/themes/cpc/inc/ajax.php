<?php

function cpc_group_filter() {
  if ( empty( $_GET['nonce'] ) || ! wp_verify_nonce( $_GET['nonce'], 'filter-group' ) ) :
    return wp_send_json_error( array( 'message' => 'Nonce is invalid' ) );
  endif;

  $args = array(
    'post_type' => 'cpc_group',
    'post_per_page' => 500,
  );
  $data = '';

  if ( ! empty( $_GET['day'] ) && $_GET['day'] != 'any' ) :
    $args['tax_query'][] = array(
      'taxonomy' => 'cpc_day',
      'field'    => 'slug',
      'terms'    => $_GET['day'],
    );
  endif;

  if ( ! empty( $_GET['ministry'] ) && $_GET['ministry'] != 'any' ) :
    $args['tax_query'][] = array(
      'taxonomy' => 'cpc_ministry',
      'field'    => 'slug',
      'terms'    => $_GET['ministry'],
    );
  endif;

  if ( ! empty( $_GET['groupType'] ) && $_GET['groupType'] != 'any' ) :
    $args['tax_query'][] = array(
      'taxonomy' => 'cpc_group_type',
      'field'    => 'slug',
      'terms'    => $_GET['groupType'],
    );
  endif;

  $result = new WP_Query( $args );

  
  if ( ! empty ( $result->posts ) ) : foreach ( $result->posts as $post ) :
    error_log( print_r( $post, true ) );
    $data .= ui_group( array(
      'post_id' => $post->ID,
    ) );
  endforeach; else:
    $data = '<p>Sorry, no groups matched your criteria.</p>';
  endif;

  return wp_send_json_success( array( 'data' => $data ) );
}

// Setting up AJAX actions for group filter
add_action( 'wp_ajax_cpc_filter_groups', 'cpc_group_filter', 1);
add_action( 'wp_ajax_nopriv_cpc_filter_groups', 'cpc_group_filter', 1);