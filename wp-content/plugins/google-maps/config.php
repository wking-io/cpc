<?php
/**
 * Plugin configurations
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$GLOBALS['hugeit_maps_aliases'] = array(
    'Hugeit_Maps_Map_Interface' => 'includes/interfaces/interface-hugeit-maps-map-interface',
    'Hugeit_Maps_Marker_Interface' => 'includes/interfaces/interface-hugeit-maps-marker-interface',
    'Hugeit_Maps_Polygon_Interface' => 'includes/interfaces/interface-hugeit-maps-polygon-interface',
    'Hugeit_Maps_Polyline_Interface' => 'includes/interfaces/interface-hugeit-maps-polyline-interface',
    'Hugeit_Maps_Circle_Interface' => 'includes/interfaces/interface-hugeit-maps-circle-interface',
    'Hugeit_Maps_Direction_Interface' => 'includes/interfaces/interface-hugeit-maps-direction-interface',
    'Hugeit_Maps_Locator_Interface' => 'includes/interfaces/interface-hugeit-maps-locator-interface',
    'Hugeit_Maps_Query' => 'includes/class-hugeit-maps-query',
    'Hugeit_Maps_Template_Loader' => 'includes/class-hugeit-maps-template-loader',
    'Hugeit_Maps_Map' => 'includes/class-hugeit-maps-map',
    'Hugeit_Maps_Marker' => 'includes/class-hugeit-maps-marker',
    'Hugeit_Maps_Polygon' => 'includes/class-hugeit-maps-polygon',
    'Hugeit_Maps_Polyline' => 'includes/class-hugeit-maps-polyline',
    'Hugeit_Maps_Circle' => 'includes/class-hugeit-maps-circle',
    'Hugeit_Maps_Direction' => 'includes/class-hugeit-maps-direction',
    'Hugeit_Maps_Locator' => 'includes/class-hugeit-maps-locator',
    'Hugeit_Maps_Install' => 'includes/class-hugeit-maps-install',
    'Hugeit_Maps_DB_Refactor' => 'includes/class-hugeit-maps-db-refactor',
    'Hugeit_Maps_Shortcode' => 'includes/class-hugeit-maps-shortcode',
    'Hugeit_Maps_Frontend_Scripts' => 'includes/class-hugeit-maps-frontend-scripts',
    'Hugeit_Maps_Admin' => 'includes/admin/class-hugeit-maps-admin',
    'Hugeit_Maps_Admin_Assets' => 'includes/admin/class-hugeit-maps-admin-assets',
    'Hugeit_Maps_Ajax' => 'includes/class-hugeit-maps-ajax',
    'Hugeit_Maps_Widgets' => 'includes/class-hugeit-maps-widgets',
    'Hugeit_Maps_Widget' => 'includes/class-hugeit-maps-widget',
);

/**
 * @param $classname
 * @throws Exception
 */
function hugeit_maps_autoload( $classname ){
    global $hugeit_maps_aliases;

    /**
     * We do not touch classes that are not related to us
     */
    if( !strstr( $classname, 'Hugeit_Maps_' ) ){
        return;
    }

    if( ! key_exists( $classname, $hugeit_maps_aliases ) ){
        throw new Exception( 'trying to load "'.$classname.'" class that is not registered in config file.' );
    }

    $path = Hugeit_Maps()->plugin_path().'/'.$hugeit_maps_aliases[$classname].'.php';

    if( !file_exists( $path ) ){

        throw new Exception( 'the given path for class "'.$classname.'" is wrong, trying to load from '.$path );

    }

    require $path;

    if( !interface_exists( $classname ) && !class_exists( $classname ) ){

        throw new Exception( 'The class "'.$classname.'" is not declared in "'.$path.'" file.' );

    }
}



if( function_exists( 'spl_autoload_register' ) ){

    spl_autoload_register( 'hugeit_maps_autoload' );

}elseif( isset( $GLOBALS['_wp_spl_autoloaders'] ) ){

    array_push($GLOBALS['_wp_spl_autoloaders'], 'hugeit_maps_autoload');

}else{

    throw new Exception( 'Something went wrong, looks like your server does not support autoload functionality, please check your php version and upgrade WordPress to the latest version.' );

}



