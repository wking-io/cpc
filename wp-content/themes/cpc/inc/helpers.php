<?php

function with_default( $default, $key, $array ) {
  return array_key_exists( $key, $array ) && ! empty( $array[$key] ) ? $array[$key] : $default;
}

function get_main_category( $id, $filter_category = '', $tax = 'category' ) {
  $categories = get_the_terms( $id, $tax );
  $result = '';
  if ( !empty( $categories ) ) {
    foreach ( $categories as $category ) {
      if ( 'parent-parties' !== $category->slug ) {
        $result = $category->name;
        break;
      }
    }
  }
  return $result;
}

function no_items( $name = 'items' ) {
  return sprintf( 'There were no %s found', $name );
}

function replace_space( $str ) {
  return str_replace( '-', ' ', $str );
}

function cpc_get_content_by_id ( $id = 0 ) {
  $the_post = get_post($id);
  $content = $the_post->post_content;
  $content = apply_filters('the_content', $content);
  $content = str_replace(']]>', ']]&gt;', $content);
  return $content;
}

function cpc_get_nav_type ( $is_light = false ) {

  if ( is_front_page() || is_post_type_archive( 'cpc_officer' ) || is_page_template( 'template-giving.php' ) || has_term( 'light', 'nav_type' ) ) :
    $is_light = true;
  endif;

  return $is_light;
}

function get_event_schedule( $start = '', $end = '' ) {
  if ( empty( $start ) ) :
    return '';
  endif;

  $start_date = date('m/d/Y', strtotime($start));
  $start_time = date('g:i A', strtotime($start));

  if ( ! empty( $end ) ) :
    $end_date = date('m/d/Y', strtotime($end));
    $end_time = date('g:i A', strtotime($end));
  endif;

  $date = $start_date;
  $time = $start_time;

  if ( ! empty( $end_date ) ) :
    if ( $start_date !== $end_date ) :
      $date = $start_date . ' - ' . $end_date;
      $time = $start_time;
    else :
      $date = $start_date;
      $time = $start_time . ' - ' . $end_time;
    endif;
  endif;

  return array(
    'date' => $date,
    'time' => $time,
  );
}