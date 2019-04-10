<?php
/**
 * Plugin Name: CPC Blocks
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: All blocks setup for use in the editors.
 * Author: William King
 * Author URI: https://wking.io/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
