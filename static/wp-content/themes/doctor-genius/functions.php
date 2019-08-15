<?php 
global $wp;
$initial_query = $_SERVER['REQUEST_URI'];

add_action( 'wp_footer', 'dg_cf7_redirect' );
 
function dg_cf7_redirect() {
?>
<script type="text/javascript">
document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log( 'Redirecting to Thank You page.' );
  window.location = '/thank-you/';
}, false );
</script>
<?php
}


add_action( 'admin_notices', 'CF_DEV' );
function CF_DEV() {
    ?>
    <div class="notice error CF_DEV" >
        <p>Please <a href="/wp-admin/admin.php?page=w3tc_extensions&extension=cloudflare&action=view#general">Enable CloudFlare Dev Mode</a> before making changes. When done please <a href="<?php echo wp_nonce_url( network_admin_url('admin.php?page=w3tc_dashboard&amp;w3tc_flush_all' ),'w3tc' ); ?>">Clear Cache</a> <a href="/wp-admin/admin.php?page=w3tc_extensions&extension=cloudflare&action=view#general">Disable CloudFlare Dev Mode</a> and <a href="<?php echo wp_logout_url(wp_nonce_url(network_admin_url(
'admin.php?page=w3tc_dashboard&amp;w3tc_flush_all' ),'w3tc' )); ?>">Logout</a>. Then scan site with Screaming Frog for CloudFlare to re-Cache site.</p>
    </div>
    <?php
}





/** ---------------------------- BLOG SUBTITLE ---------------------------- **/
/**
 * Add Subtitle meta box
 */
function add_blog_subtitle_meta( $post ){
	add_meta_box( 'blog_subtitle', 'Blog Post Subtitle (optional)', 'blog_subtitle_meta_markup', NULL , 'normal', 'high' );
}
add_action( 'add_meta_boxes_post', 'add_blog_subtitle_meta' );


/**
 * Markup for the meta field
 */
function blog_subtitle_meta_markup( $post ) {
	wp_nonce_field( basename( __FILE__ ), 'blog_subtitle_meta_box_nonce' );

  $current_blog_subtitle = get_post_meta( $post->ID, 'blog_subtitle', true );

  ?>
  <div class='inside'>
    <i>Enter a subtitle to be displayed below the main post title:</i>
    <p>
      <input type="text" name="blog_subtitle" size="30" value="<?php echo $current_blog_subtitle; ?>" style="width:100%"/> 
    </p>
  </div>
  <?php  
}


/**
 * Store blog_subtitle meta data
 */
function store_blog_subtitle_meta_data( $post_id ){

  // Check the nonce to verify instruction is coming from our admin
  if ( !isset( $_POST['blog_subtitle_meta_box_nonce'] ) || !wp_verify_nonce( $_POST['blog_subtitle_meta_box_nonce'], basename( __FILE__ ) ) ){
    return;
  }
  // We don't need to update this on autosaves
  if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ){
    return;
  }
  // Verify access
  if ( ! current_user_can( 'edit_post', $post_id ) ){
    return;
  }

  //Sanitize & save
  if ( isset( $_REQUEST['blog_subtitle'] ) ) {
    update_post_meta( $post_id, 'blog_subtitle', sanitize_text_field( $_POST['blog_subtitle'] ) );
  }
}
add_action( 'save_post', 'store_blog_subtitle_meta_data', 10, 2 );

/** ------------------------- END BLOG SUBTITLE ---------------------------- **/



/** ---------------------------- RSS IMAGES ------------------------------- **/
// Custom image size for display on the RSS feed
// Fixed 177px width with proportional height, soft crop
add_image_size( 'rss-featured-image', 177, NULL, FALSE ); // width, height, crop

// Testing medium hard crop
add_image_size( 'medium-square', 480, 480, TRUE );

// Register the three useful image sizes for use in Add Media modal
add_filter( 'image_size_names_choose', 'dg_custom_sizes' );
function dg_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'rss-featured-image' => __( 'RSS Featured Image' ),
        'medium-square' => __( 'Square Hard Crop' )
    ) );
}
/** -------------------------END RSS IMAGES ------------------------------- **/


function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'extra-menu' => __( 'Extra Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

add_theme_support( 'post-thumbnails' );

add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );


/**
 * Filter the except length to 20 characters.
 *
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 */
function wpdocs_custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

// Replaces the excerpt "Read More" text by a link
function new_excerpt_more($more) {
       global $post;
  return '<a class="moretag" href="'. get_permalink($post->ID) . '"> [ More.. ]</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');


function the_breadcrumb() {
	if (!is_home()) {
		echo '<a href="';
		echo get_option('home');
		echo '">';
		bloginfo('name');
		echo "</a>  ";
		if (is_category() || is_single()) {
			the_category('title_li=');
			if (is_single()) {
				echo "  ";
				the_title();
			}
		} elseif (is_page()) {
			echo the_title();
		}
	}
}


// Numeric Page Navi (built into the theme by default)
function numeric_pagination() {
  global $wp_query, $paged;
  $bignum = 2;
  if ( $wp_query->max_num_pages <= 1 )
    return;
  echo '<nav class="pagination">';
  echo paginate_links( array(
    'base'         => str_replace( $bignum, '%#%', esc_url( get_pagenum_link($bignum) ) ),
    'format'       => '',
    'current'      => max( 1, get_query_var('paged') ),
    'total'        => $wp_query->max_num_pages,
    'prev_text'    => '<i class="fa fa-chevron-left"></i>',
    'next_text'    => '<i class="fa fa-chevron-right"></i>',
    'type'         => 'list',
    'end_size'     => 3,
    'mid_size'     => 3
  ) );
  echo '</nav>';
} /* end page navi */

/* NEW SECTION */
add_action('after_setup_theme', 'dg_custom_post_types_setup');
function dg_custom_post_types_setup() {
    /* Load all our theme library files */
    $dg_theme_includes = array(
        '/lib/helper-functions.php',                            // Basic reusable functions
        '/lib/admin/custom-post-types/custom-post-types.php',   // Manage Framework-level custom post types
        '/lib/admin/framework-options.php',                     // Create our global options panel
    );

    foreach( $dg_theme_includes as $file){
        if( !$filepath = locate_template($file) ) {
            trigger_error("Error locating `$file` for inclusion!", E_USER_ERROR);
        }

        require_once $filepath;
    }
    unset($file, $filepath);
}

add_action('pre_get_posts', 'my_filter');

function my_filter( $query ){
    global $post;
    if ( 'events' === $post->post_type ) {
        $query->set('posts_per_page', 200);
        return $query;
    }
}

if ( !is_page_template('slide-show.php') ) {
    remove_filter('the_content', 'wpautop');
}

function register_cs_slideshow_menu() {
    register_nav_menu('cs-slideshow',__( 'CS SlideShow' ));
}
add_action( 'init', 'register_cs_slideshow_menu' );

function add_taxonomies_to_pages() {
    register_taxonomy_for_object_type( 'post_tag', 'page' );
    register_taxonomy_for_object_type( 'category', 'page' );
}
add_action( 'init', 'add_taxonomies_to_pages' );

