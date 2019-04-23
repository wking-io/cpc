<?php

class Primary_Menu extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0 , $args=array(), $id = 0 ) {

    $id                  = $item->ID;
		$title               = $item->title;
    $permalink           = $item->url;
    $classes             = empty( $item->classes ) ? array() : (array) $item->classes;
    $parent_item_classes = array( 'menu-item--parent', 'pb-4', 'mb-6' );
    $parent_link_classes = array( 'menu-item-link--parent', 'text-white', 'no-underline', 'uppercase', 'font-bold', 'pb-2', 'mb-4', 'block', 'leading-none', 'tracking-wide' );
    $child_item_classes  = array( 'mb-2', 'text-sm' );
    $child_link_classes  = array( 'text-white', 'hover:text-primary', 'no-underline', 'block' );
    
    if ( 0 == $depth && in_array( 'menu-item-has-children', $classes ) ) :
      $output .= '<li id="menu-item-' . esc_attr( $id ) . '" class="' . implode(" ", array_merge( $parent_item_classes, $classes ) ) . '">';
      $output .= '<span class="' . implode(" ", $parent_link_classes) . '">';
    else :
      $output .= '<li id="menu-item-' . esc_attr( $id ) . '" class="' . implode(" ", array_merge( $child_item_classes, $classes ) ) . '">';
      $output .= '<a class="' . implode(" ", $child_link_classes) . '" id="menu-item-' . esc_attr( $id ) . '-link" href="' . esc_attr( $permalink ) . '">';
    endif;
		
		$output .= $title;

		if( 0 == $depth && in_array( 'menu-item-has-children', $classes ) ) :
			$output .= '</span>';
		else :
			$output .= '</a>';
    endif;

	}

	function end_el(&$output, $item, $depth = 0 , $args=array(), $id = 0 ) {
			$output .= '</li>';
	}
}

class Top_Menu extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0 , $args=array(), $id = 0 ) {

    $id = $item->ID;
		$title = $item->title;
    $permalink = $item->url;
    $classes = empty( $item->classes ) ? array() : (array) $item->classes;
    $item_classes = array( 'pl-8' );
    $link_color =
      cpc_get_nav_type() ?
        array('text-white', 'hover:text-primary') :
        array('text-black', 'hover:text-primary');

    $link_classes = array_merge( $link_color, array( 'menu-item-link', 'uppercase', 'font-medium', 'text-xs', 'xl:text-sm' ) );

    $output .= '<li id="menu-item-' . esc_attr( $id ) . '" class="' . implode( " ", array_merge( $item_classes, $classes ) ) . '">';
    $output .= '<a class="' . implode( " ", $link_classes ) . '" id="menu-item-' . esc_attr( $id ) . '-link" href="' . esc_attr( $permalink ) . '">';
		$output .= $title;
    $output .= '</a>';
	}

	function end_el(&$output, $item, $depth = 0 , $args=array(), $id = 0 ) {
			$output .= '</li>';
	}
}