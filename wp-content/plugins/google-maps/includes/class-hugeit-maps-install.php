<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


/**
 * Class Hugeit_Maps_Install
 */
class Hugeit_Maps_Install {

	/**
	 * If old tables exist will be true and we will need to run a database refactoring.
	 *
	 * @var bool
	 */
	private static $needs_refactoring;

	/**
	 * If plugin tables are created will be true, and default rows will be inserted, tables exist nothing will happen.
	 *
	 * @var bool
	 */
	private static $create_default_rows_and_set_options;

	/**
	 * Initialize
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'check_version' ), 5 );
	}

	/**
	 * Check Hugeit_Maps version and run the updater if required.
	 *
	 * This check is done on all requests and runs if the versions do not match.
	 */
	public static function check_version() {
		if ( get_option( 'hugeit_maps_version' ) !== Hugeit_Maps()->version ) {
			self::install();
			update_option( 'hugeit_maps_version', Hugeit_Maps()->version );
			do_action( 'hugeit_maps_version' );
		}
	}

	/**
	 * Install required items for plugin
	 */
	public static function install() {
		global $wpdb;

		wp_mkdir_p( 'huge-it-google-map-custom-icons' );

		/**
		 * Since version 2.2.0 database structure of this plugin is changed
		 * so we need to check if old tables exist
		 * and run refactoring of database otherwise we will run a simple installation
		 */
		$old_maps_table_exists = $wpdb->get_row( "SELECT * FROM information_schema.tables WHERE table_schema = '" . DB_NAME . "' AND table_name = '" . $wpdb->prefix . "g_maps' LIMIT 1;", ARRAY_A );

		self::$needs_refactoring = ! empty( $old_maps_table_exists );

		if ( self::$needs_refactoring ) {

			self::run_database_refactor();

		} else {

			self::create_tables();

		}

		if ( self::$create_default_rows_and_set_options ) {

			try {

				self::insert_default_rows();

			} catch ( Exception $e ) {

				echo '<strong>' . $e->getMessage() . '</strong>';

			}

		}

        $new_columns=array(
            Hugeit_Maps()->get_table_name( 'maps' )=>array(
                'locator_enabled'=>'INT DEFAULT 0',
                'locator_default_address'=> 'text DEFAULT NULL',
            ),
            Hugeit_Maps()->get_table_name( 'stores' )=>array(
                'locator_phone'=>'VARCHAR(80) NOT NULL',
                'locator_days' =>'TEXT NOT NULL',
            )
        );
        foreach ($new_columns as $table=>$columns){
            foreach($columns as $column=>$type){
                $column_exists=$wpdb->get_var(" SELECT count('COLUMN_TYPE') FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = '" . $wpdb->dbname . "' AND table_name = '".$table."' AND column_name = '".$column."' ");

                if(!$column_exists){
                    $wpdb->query("ALTER TABLE $table ADD $column $type");
                }
            }
        }

	}

	/**
	 * Create new tables and run database refactoring
	 */
	private static function run_database_refactor() {
		global $wpdb;

		/**
		 * First We need to create new tables
		 */
		self::create_tables();

		Hugeit_Maps_DB_Refactor::init();

	}

	/**
	 * @todo end this
	 * Create Tables
	 */
	private static function create_tables() {
		global $wpdb;

		if ( ! self::$needs_refactoring ) {

			$hugeit_maps_maps_exists = $wpdb->get_row( "SELECT * FROM information_schema.tables WHERE table_schema = '" . DB_NAME . "' AND table_name = '" . $wpdb->prefix . "hugeit_maps_maps' LIMIT 1;", ARRAY_A );

			self::$create_default_rows_and_set_options = empty( $hugeit_maps_maps_exists );

		}


		$collate = '';

		if ( $wpdb->has_cap( 'collation' ) ) {

			$collate = $wpdb->get_charset_collate();

		}

		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_maps(
				id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
				name text DEFAULT NULL,
				type enum('ROADMAP','SATELLITE','HYBRID','TERRAIN') NOT NULL DEFAULT 'ROADMAP',
				zoom int(2) NOT NULL DEFAULT '2',
				border_radius int(2) NOT NULL DEFAULT '0',
				center_lat varchar(255) NOT NULL DEFAULT '0',
				center_lng varchar(255) NOT NULL DEFAULT '0',
				pan_controller int(1) UNSIGNED NOT NULL DEFAULT '1',
				zoom_controller int(1) UNSIGNED NOT NULL DEFAULT '1',
				type_controller int(1) UNSIGNED NOT NULL DEFAULT '1',
				scale_controller int(1) UNSIGNED NOT NULL DEFAULT '1',
				street_view_controller int(1) UNSIGNED NOT NULL DEFAULT '1',
				overview_map_controller int(1) UNSIGNED NOT NULL DEFAULT '1',
				width int(3) NOT NULL DEFAULT 100,
				height int(3) NOT NULL DEFAULT 450,
				align enum('left','right','center') NOT NULL DEFAULT 'left',
				wheel_scroll int(1) UNSIGNED NOT NULL DEFAULT '1',
				draggable int(1) UNSIGNED NOT NULL DEFAULT '1',
				language text DEFAULT NULL,
				min_zoom int(2) NOT NULL DEFAULT 0,
				max_zoom int(2) NOT NULL DEFAULT 22,
				info_type enum('click','hover') NOT NULL DEFAULT 'click',
				open_infowindows_onload int(1) UNSIGNED NOT NULL DEFAULT '0',
				traffic_layer int(1) UNSIGNED NOT NULL DEFAULT '0',
				bike_layer int(1) UNSIGNED NOT NULL DEFAULT '0',
				transit_layer int(1) UNSIGNED NOT NULL DEFAULT '0',
				styling_hue varchar(7) DEFAULT NULL,
				styling_lightness int(3) NOT NULL DEFAULT '0',
				styling_gamma int(2) UNSIGNED NOT NULL DEFAULT '1',
				styling_saturation int(3) NOT NULL DEFAULT '0',
				animation varchar(100) NOT NULL DEFAULT 'none',
				locator_enabled int(2) NOT NULL DEFAULT '0',
				locator_default_address text DEFAULT NULL,

				PRIMARY KEY (id)
			) {$collate}"
		);

		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_markers(
                id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
                map_id int(11) UNSIGNED DEFAULT NULL,
                name text DEFAULT NULL,
                lat varchar(255) NOT NULL DEFAULT 0,
                lng varchar(255) NOT NULL DEFAULT 0,
                animation enum('BOUNCE','DROP','NONE') NOT NULL DEFAULT 'NONE' NOT NULL,
                description text DEFAULT NULL,
                img text DEFAULT NULL,
                size int(3),
                
                PRIMARY KEY (id)
            ){$collate}"
		);

		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_polygons(
                id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
                map_id int(11) UNSIGNED NOT NULL,
                name text DEFAULT NULL,
                data longtext DEFAULT NULL,
                line_opacity varchar(3) NOT NULL DEFAULT '0.9',
                line_color varchar(6) NOT NULL DEFAULT 'FF0F0F',
                fill_opacity varchar(3) NOT NULL DEFAULT '0.5',
                fill_color varchar(6) NOT NULL DEFAULT '5DFF0D',
                url text DEFAULT NULL,
                hover_line_opacity varchar(3) NOT NULL DEFAULT '0.5',
                hover_line_color varchar(7) NOT NULL DEFAULT 'FF80B7',
                hover_fill_opacity varchar(3) NOT NULL DEFAULT '0.5',
                hover_fill_color varchar(7) NOT NULL DEFAULT '75FF7E',
                line_width int(2) NOT NULL DEFAULT '5',
                
                PRIMARY KEY (id)
            ){$collate}"
		);

		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_polylines(
                id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
                map_id int(11) UNSIGNED NOT NULL,
                name text DEFAULT NULL,
                data text DEFAULT NULL,
                line_opacity varchar(5) NOT NULL DEFAULT '0.9',
                line_color varchar(7) NOT NULL DEFAULT '18A326',
                line_width varchar(2) NOT NULL DEFAULT '5',
                hover_line_color varchar(7) NOT NULL DEFAULT '11A000',
                hover_line_opacity float(2) NOT NULL DEFAULT '0.5',
                
                PRIMARY KEY (id)
            ){$collate}"
		);

		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_circles(
                id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
                map_id int(11) DEFAULT NULL,
                name text DEFAULT NULL,
                center_lat varchar(255) NOT NULL DEFAULT '0',
                center_lng varchar(255) NOT NULL DEFAULT '0',
                radius int(50) NOT NULL DEFAULT '50000',
                line_width int(3) NOT NULL DEFAULT '5',
                line_opacity float(2) NOT NULL DEFAULT '0.8',
                line_color varchar(7) NOT NULL DEFAULT 'FF2B39',
                fill_color varchar(7) NOT NULL DEFAULT '4FFF72',
                fill_opacity float(2) NOT NULL DEFAULT '0.4',
                hover_line_opacity float(2) NOT NULL DEFAULT '0.6',
                hover_line_color varchar(7) NOT NULL DEFAULT 'FF5C5C',
                hover_fill_color varchar(7) NOT NULL DEFAULT '96FFA1',
                hover_fill_opacity float(2) NOT NULL DEFAULT '0.3',
                show_marker int(1) NOT NULL DEFAULT '0',
                
                PRIMARY KEY (id)
            ){$collate}"
		);

		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_directions(
                id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
                map_id int(11) DEFAULT NULL,
                name text DEFAULT NULL,
                start_lat varchar(255) DEFAULT NULL,
                start_lng varchar(255) DEFAULT NULL,
                end_lat varchar(255) DEFAULT NULL,
                end_lng varchar(255) DEFAULT NULL,
                line_color varchar(7) NOT NULL DEFAULT 'FF0F0F',
                line_width int(2) NOT NULL DEFAULT '5',
                line_opacity float(2) NOT NULL DEFAULT '0.9',
                show_steps int(1) NOT NULL DEFAULT '0',
                travel_mode enum('DRIVING','WALKING','BICYCLING','TRANSIT') NOT NULL DEFAULT 'DRIVING',
                
                PRIMARY KEY (id)
            ){$collate}"
		);

        $wpdb->query(
            "CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "hugeit_maps_stores(
                id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
                map_id int(11) UNSIGNED DEFAULT NULL,
                name varchar(60) NOT NULL,
                locator_addr varchar(80) NOT NULL,
                locator_phone varchar(80) NOT NULL,
                locator_days TEXT NOT NULL,
                locator_lat float(10,6) NOT NULL,
                locator_lng float(10,6) NOT NULL,
                
                PRIMARY KEY (id)
            ){$collate}"
        );


        self::alter_tables();

	}

	private static function alter_tables(){
        global $wpdb;
        $maps_table = Hugeit_Maps()->get_table_name( 'maps' );

        if( !self::table_row_exists( $maps_table, 'open_infowindows_onload' ) ){

            $wpdb->query( "ALTER TABLE ".$maps_table." ADD open_infowindows_onload int(1) UNSIGNED NOT NULL DEFAULT '0' AFTER info_type" );

        }

    }


    /**
     * Check if table row exists
     *
     * @param null $table_name
     * @param null $column_name
     * @return bool
     */
    private static function table_row_exists( $table_name = null, $column_name = null ){
        global $wpdb;
        $sql    = $wpdb->get_results( "SHOW columns FROM ".$table_name."" );
        $exists = false;

        foreach ( $sql as $a ) {

            if ( $a->Field == $column_name ) {

                $exists = true;

            }

        }

        return $exists;
    }


    /**
     * Handle the default raws
     */
	private static function insert_default_rows() {

        $map = self::insert_default_map();

        self::insert_default_markers( $map );

        self::insert_default_polygon( $map );

        self::insert_default_polyline( $map );

        self::insert_default_circle( $map );

	}

    /**
     * Insert a default map
     *
     * @return bool|int|null
     */
	private static function insert_default_map(){
        $map = new Hugeit_Maps_Map();

        $map
            ->set_name( __( 'My First Map', 'hugeit-maps' ) )
            ->set_info_type( 'click' )
            ->set_type( 'ROADMAP' )
            ->set_zoom( 7 )
            ->set_center_lat( 40.7127837 )
            ->set_center_lng( - 74.00594130000002 )
            ->set_width( 100 )
            ->set_height( 300 )
            ->set_align( 'center' )
            ->set_border_radius( 0 )
            ->set_language( 'location based' )
            ->set_animation( 'none' )
            ->set_locator_enabled(0)
            ->set_locator_default_address('');

        $saved_map = $map->save();

        return $saved_map;
    }

    /**
     * insert default markers
     *
     * @param $map int
     */
    private static function insert_default_markers( $map ){
        $marker1 = new Hugeit_Maps_Marker();

        $marker1
            ->set_map_id( $map )
            ->set_name( __('New York','hg_gmaps') )
            ->set_lat( 40.7127837 )
            ->set_lng( -74.00594130000002 )
            ->set_animation( 'BOUNCE' )
            ->set_description( __( 'New York City', 'hg_gmaps' ) );

        $marker1->save();


        $marker2 = new Hugeit_Maps_Marker();

        $marker2
            ->set_map_id( $map )
            ->set_name( __( 'Delaver', 'hg_gmaps' ) )
            ->set_lat( 39.189690821096804 )
            ->set_lng( -75.7562255859375 )
            ->set_animation( 'DROP' )
            ->set_description( __( 'Delaver', 'hg_gmaps' ) );

        $marker2->save();
    }

    /**
     * Insert default polygon
     *
     * @param $map int
     */
    private static function insert_default_polygon( $map ){
        $polygon = new Hugeit_Maps_Polygon();

        $polygon
            ->set_map_id($map)
            ->set_url( 'http://www.huge-it.com' )
            ->set_name( __( 'My First Polygon', 'hg_gmaps' ) )
            ->set_data( '(40.538851525354666, -74.3060302734375),(40.16208338164619, -73.9764404296875),(39.40224434029277, -74.3499755859375),(38.950865400920016, -74.8883056640625),(39.13858199058352, -75.0091552734375),(39.46164364205549, -75.5035400390625),(39.774769485295465, -75.4815673828125),(39.86758762451019, -75.0201416015625)' )
            ->set_hover_line_opacity( 0.8 )
            ->set_hover_line_color('FF80B7')
            ->set_hover_fill_opacity( 0.5 )
            ->set_hover_fill_color( '75FF7E' )
            ->set_line_opacity( 0.9 )
            ->set_line_color( 'E2574C' )
            ->set_fill_opacity( 0.5 )
            ->set_fill_color( 'F6C37A' )
            ->set_line_width( 5 );

        $polygon->save();
    }

    /**
     * insert default polyline
     *
     * @param $map int
     */
    private static function insert_default_polyline( $map ){
        $polyline = new Hugeit_Maps_Polyline();

        $polyline
            ->set_map_id( $map )
            ->set_name( __( 'My First Polyline', 'hg_gmaps' ) )
            ->set_hover_line_opacity( 0.5 )
            ->set_hover_line_color( '11A000' )
            ->set_line_opacity( 0.9 )
            ->set_line_color( '18A326' )
            ->set_line_width( 4 )
            ->set_data( '(42.24071874922666, -71.81488037109375),(42.1532233123986, -71.95770263671875),(42.13082130188811, -72.06207275390625),(42.14507804381756, -72.125244140625),(42.18579390537848, -72.2186279296875),(42.16340342422401, -72.2845458984375),(42.1837587346522, -72.3175048828125),(42.1552594657786, -72.36968994140625),(42.169510705216595, -72.4822998046875),(42.157295553651636, -72.630615234375),(42.13896840458089, -72.72674560546875),(42.165439250064324, -72.850341796875),(42.173581898327754, -72.92312622070312),(42.2366518803206, -73.00277709960938),(42.24478535602799, -73.10714721679688),(42.30169032824452, -73.17306518554688),(42.3016903282445, -73.34884643554688),(42.37883631647602, -73.45596313476562),(42.41940144722477, -73.54385375976562),(42.47209690919285, -73.63174438476562),(42.482225570025925, -73.67294311523438),(42.50652766705062, -73.78005981445312),(42.34027515373573, -73.85421752929688),(42.173581898327754, -73.93112182617188),(41.9921602333763, -73.99703979492188),(41.91249742196845, -74.04098510742188),(41.83682786072714, -74.17831420898438),(41.79179268262892, -74.23599243164062),(41.75492216766298, -74.36782836914062),(41.70777900286713, -74.38430786132812),(41.582579601430346, -74.48318481445312),(41.36238012945534, -74.70291137695312)' );

        $polyline->save();
    }

    /**
     * Insert default circle
     *
     * @param $map int
     */
    private static function insert_default_circle( $map ){
        $circle = new Hugeit_Maps_Circle();

        $circle
            ->set_map_id( $map )
            ->set_name( __( 'My First Circle', 'hg_gmaps' ) )
            ->set_hover_fill_color( '96FFA1' )
            ->set_hover_fill_opacity( 0.3 )
            ->set_hover_line_color( 'FF5C5C' )
            ->set_hover_line_opacity( 0.6 )
            ->set_center_lat( 40.805493843894155 )
            ->set_center_lng( -76.3165283203125 )
            ->set_radius( 50000 )
            ->set_line_width( 5 )
            ->set_line_opacity( 0.8 )
            ->set_line_color( 'FF2B39' )
            ->set_fill_color( '4FFF72' )
            ->set_fill_opacity( 0.4 )
            ->set_show_marker( 0 );

        $circle->save();
    }
}

