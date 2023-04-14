<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @since      1.0.0
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 */
class CovenantCore
{

  /**
   * The loader that's responsible for maintaining and registering all hooks that power
   * the plugin.
   *
   * @since    1.0.0
   * @access   protected
   * @var      CovenantCoreLoader   $loader    Maintains and registers all hooks for the plugin.
   */
  protected $loader;

  /**
   * The unique identifier of this plugin.
   *
   * @since    1.0.0
   * @access   protected
   * @var      string    $plugin_name    The string used to uniquely identify this plugin.
   */
  protected $plugin_name;

  /**
   * The current version of the plugin.
   *
   * @since    1.0.0
   * @access   protected
   * @var      string    $version    The current version of the plugin.
   */
  protected $version;

  /**
   * Define the core functionality of the plugin.
   *
   * Set the plugin name and the plugin version that can be used throughout the plugin.
   * Load the dependencies, define the locale, and set the hooks for the admin area and
   * the public-facing side of the site.
   *
   * @since    1.0.0
   */
  public function __construct()
  {

    $this->plugin_name = 'covenant-core';
    $this->version = '1.0.0';

    $this->load_dependencies();
    $this->register_admin_hooks();
    $this->register_public_hooks();

  }

  /**
   * Load the required dependencies for this plugin.
   *
   * Create an instance of the loader which will be used to register the hooks
   * with WordPress.
   *
   * @since    1.0.0
   * @access   private
   */
  private function load_dependencies()
  {
    /**
     * The class responsible for orchestrating the actions and filters of the
     * core plugin.
     */
    require_once plugin_dir_path(dirname(__FILE__)) . 'covenant-core/inc/covenant-core-loader.php';

    /**
     * The class responsible for orchestrating the actions and filters of the
     * core plugin.
     */
    require_once plugin_dir_path(dirname(__FILE__)) . 'covenant-core/inc/covenant-core-dynamic-blocks.php';

    /**
     * The class responsible for orchestrating the actions and filters of the
     * core plugin.
     */
    require_once plugin_dir_path(dirname(__FILE__)) . 'covenant-core/ui/ui.php';

    $this->loader = new CovenantCoreLoader();

  }

  private function get_asset_url($path)
  {
    return plugin_dir_url(dirname(__FILE__)) . 'covenant-core/build/' . $path;
  }

  public function register_blocks()
  {
    wp_register_style(
      'cpc_blocks_css',
      $this->get_asset_url('css/block-styles.css'),
      array('wp-editor'),
      null
    );

    // Register block editor script for backend.
    wp_register_script(
      'cpc_blocks_js',
      $this->get_asset_url('js/blocks.js'),
      array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
      null,
      true
    );

    // Register block editor styles for backend.
    wp_register_style(
      'cpc_blocks_editor_css',
      $this->get_asset_url('css/block-editors.css'),
      array('wp-edit-blocks'),
      null
    );

    /**
     * Register Gutenberg block on server-side.
     *
     * Register the block on server-side to ensure that the block
     * scripts and styles for both frontend and backend are
     * enqueued when the editor loads.
     *
     * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
     */
    register_block_type(
      'cpc/static-blocks',
      array(
        'style' => 'cpc_blocks_css',
        'editor_script' => 'cpc_blocks_js',
        'editor_style' => 'cpc_blocks_editor_css',
        'render_callback' => '',
      )
    );

    register_block_type(
      'cpc/upcoming-events',
      array(
        'render_callback' => 'cpc_render_upcoming_events',
      )
    );

  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  public function register_admin_styles()
  {
    wp_enqueue_style('cpc_admin', $this->get_asset_url('css/admin.css'), array(), '1.0.0');
  }

  public function allowed_blocks()
  {
    return array(
      'core/paragraph',
      'cpc/heading-one',
      'cpc/heading-two',
      'cpc/heading-three',
      'cpc/heading-four',
      'cpc/heading-five',
      'cpc/heading-six',
      'cpc/page-header',
      'cpc/quote',
      'core/table',
      'core/columns',
      'cpc/link-button',
      'cpc/split-panel',
      'cpc/wrapper',
      'cpc/drawer-list',
      'cpc/drawer',
      'cpc/upcoming-events',
      'core/image',
      'core/gallery',
      'core/shortcode',
      'core/list',
      'core/list-item',
      'core/video',
      'core/spacer',
      'core-embed/youtube',
      'core-embed/vimeo',
    );
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  public function register_admin_scripts()
  {
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  public function register_public_styles()
  {
    wp_register_style('cpc_blog', $this->get_asset_url('css/blog.css'), array(), '1.0.0');
    wp_register_style('cpc_blogs', $this->get_asset_url('css/blogs.css'), array(), '1.0.0');
    wp_register_style('cpc_event', $this->get_asset_url('css/event.css'), array(), '1.0.0');
    wp_register_style('cpc_events', $this->get_asset_url('css/events.css'), array(), '1.0.0');
    wp_register_style('cpc_giving', $this->get_asset_url('css/giving.css'), array(), '1.0.0');
    wp_register_style('cpc_group', $this->get_asset_url('css/group.css'), array(), '1.0.0');
    wp_register_style('cpc_groups', $this->get_asset_url('css/groups.css'), array(), '1.0.0');
    wp_register_style('cpc_home', $this->get_asset_url('css/home.css'), array(), '1.0.0');
    wp_register_style('cpc_main', $this->get_asset_url('css/main.css'), array(), '1.0.0');
    wp_register_style('cpc_officers', $this->get_asset_url('css/officers.css'), array(), '1.0.0');
    wp_register_style('cpc_sermon', $this->get_asset_url('css/sermon.css'), array(), '1.0.0');
    wp_register_style('cpc_sermons', $this->get_asset_url('css/sermons.css'), array(), '1.0.0');
    wp_register_style('cpc_staff', $this->get_asset_url('css/staff.css'), array(), '1.0.0');
    wp_register_style('cpc_sundays', $this->get_asset_url('css/sundays.css'), array(), '1.0.0');
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  public function register_public_scripts()
  {
    wp_register_script('cpc_blog', $this->get_asset_url('js/blog.js'), array(), '1.0.0', true);
    wp_register_script('cpc_blogs', $this->get_asset_url('js/blogs.js'), array(), '1.0.0', true);
    wp_register_script('cpc_event', $this->get_asset_url('js/event.js'), array(), '1.0.0', true);
    wp_register_script('cpc_events', $this->get_asset_url('js/events.js'), array(), '1.0.0', true);
    wp_register_script('cpc_giving', $this->get_asset_url('js/giving.js'), array(), '1.0.0', true);
    wp_register_script('cpc_group', $this->get_asset_url('js/group.js'), array(), '1.0.0', true);
    wp_register_script('cpc_groups', $this->get_asset_url('js/groups.js'), array(), '1.0.0', true);
    wp_register_script('cpc_home', $this->get_asset_url('js/home.js'), array(), '1.0.0', true);
    wp_register_script('cpc_main', $this->get_asset_url('js/main.js'), array(), '1.0.0', true);
    wp_register_script('cpc_officers', $this->get_asset_url('js/officers.js'), array(), '1.0.0', true);
    wp_register_script('cpc_staff', $this->get_asset_url('js/staff.js'), array(), '1.0.0', true);
    wp_register_script('cpc_sermon', $this->get_asset_url('js/sermon.js'), array(), '1.0.0', true);
    wp_register_script('cpc_sermons', $this->get_asset_url('js/sermons.js'), array(), '1.0.0', true);
    wp_register_script('cpc_sundays', $this->get_asset_url('js/sundays.js'), array(), '1.0.0', true);
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  private function register_admin_hooks()
  {
    $this->loader->add_action('init', $this, 'register_blocks', 0);
    $this->loader->add_action('admin_enqueue_scripts', $this, 'register_admin_styles', 0);
    $this->loader->add_action('admin_enqueue_scripts', $this, 'register_admin_scripts', 0);
    $this->loader->add_filter('allowed_block_types', $this, 'allowed_blocks');
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  private function register_public_hooks()
  {
    $this->loader->add_action('wp_enqueue_scripts', $this, 'register_public_styles', 0);
    $this->loader->add_action('wp_enqueue_scripts', $this, 'register_public_scripts', 0);
  }

  /**
   * Run the loader to execute all of the hooks with WordPress.
   *
   * @since    1.0.0
   */
  public function run()
  {
    $this->loader->run();
  }

  /**
   * The name of the plugin used to uniquely identify it within the context of
   * WordPress and to define internationalization functionality.
   *
   * @since     1.0.0
   * @return    string    The name of the plugin.
   */
  public function get_plugin_name()
  {
    return $this->plugin_name;
  }

  /**
   * The reference to the class that orchestrates the hooks with the plugin.
   *
   * @since     1.0.0
   * @return    CovenantCoreLoader    Orchestrates the hooks of the plugin.
   */
  public function get_loader()
  {
    return $this->loader;
  }

  /**
   * Retrieve the version number of the plugin.
   *
   * @since     1.0.0
   * @return    string    The version number of the plugin.
   */
  public function get_version()
  {
    return $this->version;
  }

}