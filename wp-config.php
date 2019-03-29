<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fqmtXc4P7gj3z3v6UI+nYHh0eq0frcV1RmkQRueGQ1QuFA9QS18UnCelW+P9f913+qgJb54BGkrD4g2JleiFpw==');
define('SECURE_AUTH_KEY',  '4oJqiRmakx7MpiQqH5YrXN4G68LJb3UOlrpmHQR2tmStqQDfJ5zK4qkX84x51IiXsPgPEj98D1yOLlAf4bORnw==');
define('LOGGED_IN_KEY',    'sEOafOFB1DUZazjbN8nr3ZzdCSTt9E7hI6GdcccLsOOMw7u43aXrqTKMOLD8OOU5NE4JC+BM4OC0Ttq5CySipg==');
define('NONCE_KEY',        'IDoPUGmHiRasRZmGGK7X6K4tko4JBRKfxgYGSPQahAc0nNeyLxGctmzEraKVh71H1bHlWHMKP6D/KKDllaTrZw==');
define('AUTH_SALT',        'wsYyeyOpD6N+A2KvpnuM1nr8KeHOCmRUgFCBCFT/gQJlLTcnR4LumbIDlnsLbXtbl6ANl1yKJNNJCuLGs+qjdA==');
define('SECURE_AUTH_SALT', '+o4xq6VW09rY7hWGQxpzR1C+ipxtF38iv6gZ4nyPulF7CY26MCVDM9HozuHB0Kqxwg45ylvIwmEhK3c2VmhYsA==');
define('LOGGED_IN_SALT',   'b6hAH9sY1s3eAxHylw1r0GM0Fkju7h7NmDrDhTZDqmIL2UkVRRD2IbYnejOqD96uAl/kNAhAQIcWDQ/C6vM5YA==');
define('NONCE_SALT',       '+BLWKQpakjOgUDHRjpuyUy529hCjd4YxX4TsTosYAgp9ioIesc2nieANDMJpc4myHLc7RoEUO24gOio6vWVsKA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
