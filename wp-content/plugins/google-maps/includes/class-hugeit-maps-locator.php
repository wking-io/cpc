<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hugeit_Maps_Locator
 */
class Hugeit_Maps_Locator implements Hugeit_Maps_Locator_Interface {

	/**
	 * Current Store Locator ID
	 *
	 * @var int
	 */
	private $id;

	/**
	 * Map ID that current locator belongs to
	 *
	 * @var int
	 */
	private $map_id;

	/**
	 * Current Store Locator name
	 *
	 * @var string
	 */
	private $name;

	/**
	 * Store Locator latitude
	 *
	 * @var float
	 */
	private $locator_lat;

	/**
	 * Store Locator longitude
	 *
	 * @var float
	 */
	private $locator_lng;

    /**
     * Store Locator address
     *
     * @var string
     */
    private $locator_addr;

    /**
     * Store Locator phone
     *
     * @var string
     */
    private $locator_phone;

    /**
     * Store Locator days
     *
     * @var string
     */
    private $locator_days;



	/**
	 * Hugeit_Maps_Locator constructor.
	 *
	 * @param null $id
	 *
	 * @throws Error
	 */
	public function __construct( $id = null ) {

		if ( $id !== null && absint( $id ) == $id ) {
			global $wpdb;

			$locator = $wpdb->get_row( $wpdb->prepare(
				"
                SELECT *
                FROM " . Hugeit_Maps()->get_table_name( 'stores' ) . "
                WHERE id=%d
                ",
				$id
			), ARRAY_A );

			if ( ! is_null( $locator ) ) {

				$this->id = $id;

				foreach ( $locator as $locator_option_name => $locator_option_value ) {

					$function_name = 'set_' . $locator_option_name;

					if ( method_exists( $this, $function_name ) ) {

						call_user_func( array( $this, $function_name ), $locator_option_value );

					}

				}

			}

		} else {

			$this->name = __( 'New Store Locator', 'hg_gmaps' );

		}

	}

	/**
	 * When cloning an instance of Locator id and map_id are changed to be null in order to have a clear copy of this locator
	 */
	public function __clone() {
		$this->id     = null;
		$this->map_id = null;
	}

	/**
	 * @return int
	 */
	public function get_id() {
		return (int) $this->id;
	}

	/**
	 * @return int
	 */
	public function get_map_id() {
		return (int) $this->map_id;
	}

	/**
	 * @param int $map_id
	 *
	 * @return Hugeit_Maps_Locator
	 * @throws Exception
	 */
	public function set_map_id( $map_id ) {

		if ( absint( $map_id ) != $map_id ) {
			throw new Exception( '"map_id" must be not negative integer.' );
		}

		$this->map_id = absint( $map_id );

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return (!empty($this->name) ? wp_unslash($this->name): __( '(no title)', 'hg_gmaps' ) );
	}

	/**
	 * @param string $name
	 *
	 * @return Hugeit_Maps_Locator
	 */
	public function set_name( $name ) {
		$this->name = sanitize_text_field( $name );

		return $this;
	}

	/**
	 * @return float
	 */
	public function get_locator_lat() {
		return (float) $this->locator_lat;
	}

	/**
	 * @param float $locator_lat
	 *
	 * @return Hugeit_Maps_Locator
	 */
	public function set_locator_lat( $locator_lat ) {
		$this->locator_lat = floatval( $locator_lat );

		return $this;
	}

    /**
     * @return string
     */
    public function get_locator_addr() {
        return (string) $this->locator_addr;
    }

    /**
     * @param string $locator_addr
     *
     * @return Hugeit_Maps_Locator
     */
    public function set_locator_addr( $locator_addr ) {
        $this->locator_addr = strval( $locator_addr );

        return $this;
    }

    /**
     * @return string
     */
    public function get_locator_phone() {
        return (string) $this->locator_phone;
    }

    /**
     * @param string $locator_phone
     *
     * @return Hugeit_Maps_Locator
     */
    public function set_locator_phone( $locator_phone ) {
        $this->locator_phone = strval( $locator_phone );

        return $this;
    }

    /**
     * @return string
     */
    public function get_locator_days() {
        return (string) $this->locator_days;
    }

    /**
     * @param string $locator_days
     *
     * @return Hugeit_Maps_Locator
     */
    public function set_locator_days( $locator_days ) {
        $this->locator_days = strval(stripslashes($locator_days));

        return $this;
    }

	/**
	 * @return float
	 */
	public function get_locator_lng() {
		return (float) $this->locator_lng;
	}

	/**
	 * @param float $locator_lng
	 *
	 * @return Hugeit_Maps_Locator
	 */
	public function set_locator_lng( $locator_lng ) {
		$this->locator_lng = floatval( $locator_lng );

		return $this;
	}

	/**
	 * @param $id
	 *
	 * @return false|int
	 * @throws Exception
	 */
	public static function delete( $id ) {
		global $wpdb;

		if ( absint( $id ) !== $id ) {

			throw new Exception( 'Trying to delete a Store Locator with wrong "id" parameter. Parameter "id" must be not negative integer.' );

		}

		return $wpdb->query( $wpdb->prepare( "DELETE FROM " . Hugeit_Maps()->get_table_name( 'stores' ) . " WHERE id =%d", $id ) );
	}

	/**
	 * Sets $array[$key] = $value if $value is not NULL.
	 *
	 * @param $key
	 * @param $value
	 * @param $array
	 */
	private function set_if_not_null( $key, $value, &$array ) {
		if ( $value !== null ) {
			$array[ $key ] = $value;
		}
	}

	/**
	 * Save locator data
	 */
	public function save() {
		global $wpdb;

		$locator_data = array();

		$this->set_if_not_null( 'map_id',       $this->map_id,       $locator_data );
		$this->set_if_not_null( 'name',         $this->name,         $locator_data );
		$this->set_if_not_null( 'locator_lat',  $this->locator_lat,  $locator_data );
		$this->set_if_not_null( 'locator_lng',  $this->locator_lng,  $locator_data );
        $this->set_if_not_null( 'locator_addr', $this->locator_addr, $locator_data );
        $this->set_if_not_null( 'locator_phone',$this->locator_phone,$locator_data );
        $this->set_if_not_null( 'locator_days', $this->locator_days, $locator_data );

		$success = is_null( $this->id )
			? $wpdb->insert( Hugeit_Maps()->get_table_name( 'stores' ), $locator_data )
			: $wpdb->update( Hugeit_Maps()->get_table_name( 'stores' ), $locator_data, array( 'id' => $this->id ) );

		if ( $success !== false && ! isset( $this->id ) ) {

			return $wpdb->insert_id;

		} elseif ( $success !== false && isset( $this->id ) ) {

			return $this->id;

		} else {

			return false;

		}


	}


}