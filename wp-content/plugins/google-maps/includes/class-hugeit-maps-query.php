<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Query handler for Huge-IT Google Maps
 */
class Hugeit_Maps_Query {

	/**
	 * Returns maps by arguments
	 *
	 * @param $args
	 *
	 * @return Hugeit_Maps_Map[]
	 */
	public static function get_maps( $args = array() ) {
		global $wpdb;

		$maps_array = array();

		$args = wp_parse_args(
			$args,
			array(
				'search'  => '',
				'orderby' => 'id',
				'order'   => 'ASC'
			)
		);

		$search_str = ! empty( $args['search'] ) ? "WHERE name LIKE '%{$args['search']}%'" : "";

		$ordering = "ORDER BY {$args['orderby']} {$args['order']}";

		$query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'maps' ) . " {$search_str} {$ordering}";

		$maps = $wpdb->get_results( $query );

		foreach ( $maps as $map ) {

			$maps_array[] = new Hugeit_Maps_Map( $map->id );

		}

		return $maps_array;
	}

	/**
	 * Returns markers by arguments
	 *
	 * @param $args
	 *
	 * @return Hugeit_Maps_Marker[]
	 */
	public static function get_markers( $args = array() ) {
		global $wpdb;

		$items = array();

		$args = wp_parse_args(
			$args,
			array(
				'search'  => '',
				'orderby' => 'id',
				'order'   => 'ASC',
				'map_id'  => 0,
			)
		);

		$query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'markers' );

		$where = array();

		if ( ! empty( $args['search'] ) ) {
			$where[] = "name LIKE '%{$args['search']}%'";
		}

		if ( $args['map_id'] ) {
			$where[] = "map_id={$args['map_id']}";
		}

		if ( ! empty( $where ) ) {

			$where_str = implode( $where, ' AND ' );

			$query .= " WHERE " . $where_str;
		}

		$query_items = $wpdb->get_results( $query );

		foreach ( $query_items as $query_item ) {

			$items[] = new Hugeit_Maps_Marker( $query_item->id );

		}

		return $items;

	}

	/**
	 * Returns polygons by arguments
	 *
	 * @param $args
	 *
	 * @return Hugeit_Maps_Polygon[]
	 */
	public static function get_polygons( $args = array() ) {
		global $wpdb;

		$items = array();

		$args = wp_parse_args(
			$args,
			array(
				'search'  => '',
				'orderby' => 'id',
				'order'   => 'ASC',
				'map_id'  => 0,
			)
		);

		$query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'polygons' );

		$where = array();

		if ( ! empty( $args['search'] ) ) {
			$where[] = "name LIKE '%{$args['search']}%'";
		}

		if ( $args['map_id'] ) {
			$where[] = "map_id={$args['map_id']}";
		}

		if ( ! empty( $where ) ) {

			$where_str = implode( $where, ' AND ' );

			$query .= " WHERE " . $where_str;
		}

		$query_items = $wpdb->get_results( $query );

		foreach ( $query_items as $query_item ) {

			$items[] = new Hugeit_Maps_Polygon( $query_item->id );

		}

		return $items;

	}

	/**
	 * Returns polylines by arguments
	 *
	 * @param $args
	 *
	 * @return Hugeit_Maps_Polyline[]
	 */
	public static function get_polylines( $args = array() ) {
		global $wpdb;

		$items = array();

		$args = wp_parse_args(
			$args,
			array(
				'search'  => '',
				'orderby' => 'id',
				'order'   => 'ASC',
				'map_id'  => 0,
			)
		);

		$query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'polylines' );

		$where = array();

		if ( ! empty( $args['search'] ) ) {
			$where[] = "name LIKE '%{$args['search']}%'";
		}

		if ( $args['map_id'] ) {
			$where[] = "map_id={$args['map_id']}";
		}

		if ( ! empty( $where ) ) {

			$where_str = implode( $where, ' AND ' );

			$query .= " WHERE " . $where_str;
		}

		$query_items = $wpdb->get_results( $query );

		foreach ( $query_items as $query_item ) {

			$items[] = new Hugeit_Maps_Polyline( $query_item->id );

		}

		return $items;

	}

	/**
	 * Returns circles by arguments
	 *
	 * @param $args
	 *
	 * @return Hugeit_Maps_Circle[]
	 */
	public static function get_circles( $args = array() ) {
		global $wpdb;

		$items = array();

		$args = wp_parse_args(
			$args,
			array(
				'search'  => '',
				'orderby' => 'id',
				'order'   => 'ASC',
				'map_id'  => 0,
			)
		);

		$query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'circles' );

		$where = array();

		if ( ! empty( $args['search'] ) ) {
			$where[] = "name LIKE '%{$args['search']}%'";
		}

		if ( $args['map_id'] ) {
			$where[] = "map_id={$args['map_id']}";
		}

		if ( ! empty( $where ) ) {

			$where_str = implode( $where, ' AND ' );

			$query .= " WHERE " . $where_str;
		}

		$query_items = $wpdb->get_results( $query );

		foreach ( $query_items as $query_item ) {

			$items[] = new Hugeit_Maps_Circle( $query_item->id );

		}

		return $items;

	}

	/**
	 * Returns directions by arguments
	 *
	 * @param $args
	 *
	 * @return Hugeit_Maps_Direction[]
	 */
	public static function get_directions( $args = array() ) {
		global $wpdb;

		$items = array();

		$args = wp_parse_args(
			$args,
			array(
				'search'  => '',
				'orderby' => 'id',
				'order'   => 'ASC',
				'map_id'  => 0,
			)
		);

		$query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'directions' );

		$where = array();

		if ( ! empty( $args['search'] ) ) {
			$where[] = "name LIKE '%{$args['search']}%'";
		}

		if ( $args['map_id'] ) {
			$where[] = "map_id={$args['map_id']}";
		}

		if ( ! empty( $where ) ) {

			$where_str = implode( $where, ' AND ' );

			$query .= " WHERE " . $where_str;
		}

		$query_items = $wpdb->get_results( $query );

		foreach ( $query_items as $query_item ) {

			$items[] = new Hugeit_Maps_Direction( $query_item->id );

		}

		return $items;

	}

    /**
     * Returns locators by arguments
     *
     * @param $args
     *
     * @return Hugeit_Maps_Locator[]
     */
    public static function get_locator( $args = array() ) {
        global $wpdb;

        $items = array();

        $args = wp_parse_args(
            $args,
            array(
                'search'  => '',
                'orderby' => 'id',
                'order'   => 'ASC',
                'map_id'  => 0,
            )
        );

        $query = "SELECT id FROM " . Hugeit_Maps()->get_table_name( 'stores' );

        $where = array();

        if ( ! empty( $args['search'] ) ) {
            $where[] = "name LIKE '%{$args['search']}%'";
        }

        if ( $args['map_id'] ) {
            $where[] = "map_id={$args['map_id']}";
        }

        if ( ! empty( $where ) ) {

            $where_str = implode( $where, ' AND ' );

            $query .= " WHERE " . $where_str;
        }

        $query_items = $wpdb->get_results( $query );

        foreach ( $query_items as $query_item ) {

            $items[] = new Hugeit_Maps_Locator( $query_item->id );

        }

        return $items;

    }

}