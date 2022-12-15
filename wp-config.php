<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
//Using environment variables for DB connection information



// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */



$connectstr_dbhost = getenv('DATABASE_HOST');

$connectstr_dbname = getenv('DATABASE_NAME');

$connectstr_dbusername = getenv('DATABASE_USERNAME');

$connectstr_dbpassword = getenv('DATABASE_PASSWORD');




define('DATABASE_NAME', $connectstr_dbname);



/** MySQL database username */

define('DATABASE_USERNAME', $connectstr_dbusername);



/** MySQL database password */

define('DATABASE_PASSWORD',$connectstr_dbpassword);



/** MySQL hostname */

define('DATABASE_HOST', $connectstr_dbhost);



/** Database Charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );



/** The Database Collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'i-}Q_s@RA56*Dox$VRwuS>w+,@R]!O18i8QJ#5{ Buv1p$K~|X?1|ZT(*sKay/%R' );
define( 'SECURE_AUTH_KEY',  'q4YB[Wk7C]DVce7x8%WSmwxk}CG4C7Jbyrrf^K`QQo66Cu=VJU|MBOASk4[a7z!w' );
define( 'LOGGED_IN_KEY',    '}F<3[Y)XeZ0XGS3d8pM21I:]2u?u+HmuEI<vV7-aO>akelt3n<yeKo0AB[pWh2[q' );
define( 'NONCE_KEY',        'L[_QBm@s/:H.Z[mww~5C=_.&B(p?Cm9UcVF8-#&^J U1bcQ@YTYy|dp9T{niIC44' );
define( 'AUTH_SALT',        '>yY2-HH]?x/BR4:zwMerR C)`fKv+NbL^fA-ju=tUKBjW!Sq>n$A+EJukL>z;;_-' );
define( 'SECURE_AUTH_SALT', '5=)6S40%mb^e]xFtDU(}G2~`7{PECy4B*{E)0Z0,Xof0k M^%^]ZRzpC{wk:s##G' );
define( 'LOGGED_IN_SALT',   'd,DIS:RZ>XL#m%HM|t:~sYC=-M$N9}EC3>=Z6<2!W>aSJH5S9!.2`JybSz;Hl%tL' );
define( 'NONCE_SALT',       'wJ dQ@{;GGnOe?j=$W5RFY]=u&9>I6,tui(1a)Bru7M$^ntfJj12IBhLeHJ|<2(}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
