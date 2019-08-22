<?php
/* Global */
add_action( 'init', 'events_register_post_type' );
add_action( 'add_meta_boxes', 'events_register_meta_boxes' );
add_action( 'init', 'events_register_taxonomy_category' );
add_action( 'save_post', 'events_save_meta_boxes' ,  10, 2 );

// Admin Only
if ( is_admin() ) {
    add_action( 'admin_init', 'events_register_admin_styles' );
    add_action( 'admin_enqueue_scripts', 'events_enqueue_scripts' );
}

/**
 * Register events Custom Post Type
 */
function events_register_post_type() {
    $labels = array(
        'name'               => 'Events',
        'singular_name'      => 'Event',
        'add_new'            => 'Add Event',
        'add_new_item'       => 'Add New Event',
        'edit_item'          => 'Edit Event',
        'new_item'           => 'New Event',
        'view_item'          => 'View Event',
        'search_items'       => 'Search Events',
        'not_found'          => 'No Events found',
        'not_found_in_trash' => 'No Events in the trash',
    );

    $supports = array(
        'title',
        'thumbnail',
        'revisions',
    );

    $args = array(
        'labels'            => $labels,
        'supports'          => $supports,
        'public'            => TRUE,
        'show_in_menu'      => FALSE,
        'show_in_nav_menus' => FALSE,
        'capability_type'   => 'post',
        'rewrite'           => array( 'slug' => 'events', ), // Permalinks format
        'menu_position'     => 0,
        'menu_icon'         => 'dashicons-slide',
        'has_archive'       => TRUE,
        'show_in_rest'      => TRUE
        //'taxonomies'        => array( 'category' ),
    );

    /**
     * Hook 'events_post_type_args'
     *
     * Filters the array of args creating the events Post Type
     */
    $args = apply_filters( 'events_post_type_args', $args );

    // Actually register it
    register_post_type( 'events', $args );

}

/*Functions to register image URL's to the rest API */
function ws_register_images_field() {
    register_rest_field( 
        'events',
        'featured_image',
        array(
            'get_callback'    => 'ws_get_images_urls',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

add_action( 'rest_api_init', 'ws_register_images_field' );

function ws_get_images_urls( $object, $field_name, $request ) {
    $featured_image_thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $object->id ), 'thumbnail' );
    $thumbnail_url = $featured_image_thumbnail['0'];

    $featured_image_large = wp_get_attachment_image_src( get_post_thumbnail_id( $object->id ), 'large' );
    $large_url = $featured_image_large['0'];

    return array(
        'featured_image_thumbnail' => $thumbnail_url,
        'featured_image_large'  => $large_url,
    );
}

function jay_register_images_field() {
    register_rest_field( 
        'events',
        'information_image_url',
        array(
            'get_callback'    => 'jay_get_images_urls',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

add_action( 'rest_api_init', 'jay_register_images_field' );

function jay_get_images_urls( $object, $field_name, $request ) {
    $information_image_id = get_post_field('information_image');
    $info_image_id = $information_img_id;

    $information_image_url = wp_get_attachment_image_src( $information_image_id, 'full' );
    $info_image = $information_image_url['0'];

    return $info_image;
}


/**
 *  This is the register_api_field route
 */
// This expects an array, not an object
function dg_get_post_meta_callback( $objectArray, $field_name, $request ) {
    error_log(  print_r( $objectArray, TRUE ) );
    error_log(  print_r( $field_name, TRUE ) );
    
    if ( $val = get_post_meta( $objectArray[ 'id' ], $field_name ) ) {
        return $val; 
    }
    else { 
        return NULL;
    }
    //return get_post_meta( '10626', $field_name );
}
// This expects an object, not an array
function dg_update_post_meta_callback( $value, $object, $field_name ) {
    error_log( 'Updating: ' . print_r( $value, TRUE ) . ' $field_name: ' . $field_name . ' $object->id: ' . $object->ID );
    
    if ( $val = update_post_meta( $object->ID, $field_name, $value ) ) {
        return $val;
    }
    else {
        return NULL;
    }
    
    
    //update_post_meta( $object->ID, 'main_section_intro_heading', 'Updated via hardcode 3' );
    
    //error_log( print_r( $status, TRUE) );
    
}

add_action( 'rest_api_init', 'include_event_meta_in_api_response' ); 
    
    
function include_event_meta_in_api_response() {
    $meta_fields = array();
    //Whitelisted fields for all REST queried post objects
    //Whitelisted fields for all REST queried page objects
    $meta_fields['events'] = array( 
        'featured_event',
        'event_title',
        'event_strapline',
        'event_subtitle',
        'register_url',
        'event_details_text',
        'event_date',
        'start_time',
        'end_time',
        'include_location',
        'event_venue',
        'event_street_address',
        'event_city',
        'event_state',
        'event_zip',
        'information_heading1',
        'information_h1_li_1',
        'information_h1_li_2',
        'information_h1_li_3',
        'information_h1_li_4',
        'information_heading2',
        'information_h2_li_1',
        'information_h2_li_2',
        'information_h2_li_3',
        'information_h2_li_4',
        'include_marketing',
        'information_image',
        'include_speakers',
        'speaker_section_title',
        'speaker_section_subtitle',
        'speaker_items'

    );
    foreach( $meta_fields as $obj_type => $meta_keys ) {
        
        foreach( $meta_keys as $meta_key ){
            register_rest_field( $obj_type, $meta_key, array(
                'get_callback' => 'dg_get_post_meta_callback',
                'update_callback' => 'dg_update_post_meta_callback',
                'schema' => NULL
            ) );
            
        } 
        
    }
    
};

/**
 * Register a taxonomy (categories) for Events post types.
 */
function events_register_taxonomy_category() {
    $labels = array(
        'name'                       => 'Event Categories',
        'singular_name'              => 'Event Member Category',
        'menu_name'                  => 'Event Member Categories',
        'edit_item'                  => 'Edit Event Member Category',
        'update_item'                => 'Update Event Member Category',
        'add_new_item'               => 'Add New Event Member Category',
        'new_item_name'              => 'New Event Member Category Name',
        'parent_item'                => 'Parent Event Member Category',
        'parent_item_colon'          => 'Parent Event Member Category:',
        'all_items'                  => 'All Event Categories',
        'search_items'               => 'Search Event Categories',
        'popular_items'              => 'Popular Event Categories',
        'separate_items_with_commas' => 'Separate Event categories with commas',
        'add_or_remove_items'        => 'Add or remove Event categories',
        'choose_from_most_used'      => 'Choose from the most used Event categories',
        'not_found'                  => 'No Event categories found.',
    );

    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'show_in_nav_menus' => true,
        'show_ui'           => true,
        'show_tagcloud'     => true,
        'hierarchical'      => true,
        'rewrite'           => array( 'slug' => 'events-category' ),
        'show_admin_column' => true,
        'query_var'         => true,
    );

    /**
     * Hook 'events_post_type_category_args'
     *
     * Filters the array of args creating the Staff Post Type categories
     */
    $args = apply_filters( 'events_post_type_category_args', $args );

    register_taxonomy( 'events-category', 'events', $args );
    //register_taxonomy_for_object_type( 'events-category', 'events' );
    //if( !function_exists('wp_create_category') ) { include_once( ABSPATH . 'wp-admin/includes/taxonomy.php' ); } // ensure is_plugin_active() exists (not on frontend)
    //wp_create_category( 'webinar', 'events' );
}

// Metabox options managed here (and sanitization type):
function get_events_cpt_meta_options_list() {
    $meta_options_list = array(

        'event_title'        => 'text',
        'event_subtitle'     => 'text',
        'event_strapline'    => 'text',
        'event_subtitle_hide'   => 'text',
        'event_strapline_hide'  => 'text',
        'company_name'       => 'text',
        'event_date'         => 'text',
        'start_time'         => 'text',
        'end_time'           => 'text',
        'register_url'       => 'text',
        'archive_image'      => 'text',
        'main_header_image'  => 'text',
        'timeline_image'     => 'text',
        'sponsor_url'        => 'text',
        'webinar_url'        => 'text',
        'speaker_url'        => 'text',
        'event_url'          => 'text',
        'timeline_event_description' => 'textarea',
        'timeline_image'       => 'text',
        'event_venue'          => 'text',
        'event_street_address' => 'text',
        'event_city'           => 'text',
        'event_state'          => 'text',
        'event_zip'            => 'text',
        'total_seats'          => 'text',
        'button_color'         => 'text',
        'text_secondary_color' => 'text',
        'include_location'     => 'text',
        'hero_sub_text'        => 'text',
        'hero_sub_text_hide'   => 'text',
        'hero_bg_image'        => 'text',
        'asterisk_detail'      => 'text',
        'asterisk_detail_hide' => 'text',
        'event_details_text'        => 'text',
        'event_details_text_hide'   => 'text',
        'marketing_solutions_image' => 'text',
        'include_marketing'     => 'text',
        'information_h2_li_1'   => 'text',
        'information_h2_li_2'   => 'text',
        'information_h2_li_3'   => 'text',
        'information_h2_li_4'   => 'text',
        'information_h2_li_5'   => 'text',
        'information_heading2'  => 'text',
        'information_h1_li_1'   => 'text',
        'information_h1_li_2'   => 'text',
        'information_h1_li_3'   => 'text',
        'information_h1_li_4'   => 'text',
        'information_h1_li_5'   => 'text',
        'information_heading1'  => 'text',
        'information_image'     => 'text',
        'include_speakers'      => 'text',
        'cta_bg_image'          => 'text',
        'cta_title'             => 'text',
        'cta_subtitle'          => 'text',
        'cta_phone_number'      => 'text',
        'cta_bg_image'          => 'text',
        'include_sponsors'      => 'text',
        'sponsor1_image'        => 'text',
        'sponsor2_image'        => 'text',
        'sponsor3_image'        => 'text',
        'sponsor4_image'        => 'text',
        'sponsor5_image'        => 'text',
        'sponsor6_image'        => 'text',
        'speaker_section_title' => 'text',
        'speaker_section_subtitle' => 'text',
        'speaker_bg_image'         => 'text',
        'speaker_items'            => 'array',
        'featured_event'     => 'checkbox',

    );
    return $meta_options_list;
}

/**
 * Register all meta boxes
 */
function events_register_meta_boxes() {

    global $post;
    global $pagenow;

    $term_check = array('Webinar', 'Tradeshow', 'Speaker');
    $events_category = array();
    // Custom Categories are stored as terms
    if ( !empty($post) ) {
        // Get the terms for the 'events-category' that we made
        $terms = get_the_terms( get_the_ID(), 'events-category');
        $current_screen = get_current_screen();

        if ( 'post.php' == $pagenow && $current_screen->post_type == 'events' ) {
            if ( empty( $terms ) ) {
                // Display error message letting user know they can only select either Tradeshow or Webinar
                function category_none_selected() {
                    $class = 'notice notice-error is-dismissible';
                    $message = __( 'Please select atleast ONE of the following categories: Speaker, Tradeshow, Webinar.', 'sample-text-domain' );

                    printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
                }
                add_action( 'admin_notices', 'category_none_selected' );
            } else if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
                if ( count($terms) > 1 ) { // Check to see if more than one category is selected
//            if ( has_term( $term_check[0], 'events-category', $post ) && has_term( $term_check[1], 'events-category', $post ) ) {
                    // Remove categories if more than one is selected since they can't be selected at the same time
                    wp_remove_object_terms( $post->ID, $term_check, 'events-category' );
                    // Display error message letting user know they can only select either Tradeshow or Webinar
                    function category_admin_notice__error() {
                        $class = 'notice notice-error is-dismissible';
                        $message = __( 'Please select only ONE of the following categories: Speaker, Tradeshow, Webinar.', 'sample-text-domain' );

                        printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
                    }
                    add_action( 'admin_notices', 'category_admin_notice__error' );
                } else {
                    foreach ( $terms as $term ) {
                        if ($term->name == 'Webinar') { // Show meta fields specific to Webinar
                            $events_category[] = 'webinar';
                        } else if ($term->name == 'Tradeshow') { // Show meta fields specific to Tradeshow
                            $events_category[] = 'tradeshow';
                        } else if ($term->name == 'Speaker') { // Show meta fields specific to Speaker
                            $events_category[] = 'speaker';
                        }
                    }
                }
            }
        }

    }

    add_meta_box(
        'events_fields',
        'Event Fields',
        'events_render_meta_boxes',
        'events',
        'normal',
        'high',
        $events_category
    );

    /**
     * Hook 'events_register_meta_boxes'
     *
     * Allows additional metaboxes to be added via child theme
     */
    do_action( 'events_register_meta_boxes' );
}

// Register all styling and functionality in the Admin side
function events_register_admin_styles() {

    //Slides post edit scripts & styles
    wp_register_script(
        'events_admin_edit_script',
        get_template_directory_uri() . '/lib/admin/custom-post-types/events/events-meta-scripts.js', array( 'jquery' )
        //array(  ),
        //false,
        //false
    );

    wp_register_style(
        'events_admin_edit_stylesheet',
        get_template_directory_uri() . '/lib/admin/custom-post-types/events/events-meta-scripts.css',
        array(),
        false
    );

    /**
     * Hook 'events_register_admin_styles'
     *
     * Used to register additional styles or scripts for child themes
     */
    do_action( 'events_register_admin_styles' );
}

/**
 * Conditionally enqueue scripts and styles specifically for this template
 */
function events_enqueue_scripts($hook) {
    global $post;

    if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
        if ( 'events' === $post->post_type ) {
            wp_enqueue_script(  'events_admin_edit_script' );
            wp_enqueue_style(  'events_admin_edit_stylesheet' );

            do_action( 'events_enqueue_scripts' );
        }
    }
}

function insert_open_form_tags () {
    return '<div class="wrap dg-options-page framework-options">
    <form action="options.php" method="POST">
        <!-- NEW SECTION -->
        <div class="dg-options-page custom-post-type">
           <table class="form-table">';
}

function insert_end_form_tags () {
    return '<!-- </table> -->
        </div><!-- /.dg-options-page -->
            </form>
        </div>';
}

/**
 * Render the metaboxes' markup
 */
function events_render_meta_boxes( $post, $callback_args ) {
    //echo "<script>console.log( 'Inside of render box: " . $callback_args['args'][0] . "' );</script>";
    // Load CPT postmeta
    $meta = get_post_meta_single( $post->ID );

    if ( $meta ) { extract( $meta ); }

    wp_nonce_field( basename( __FILE__ ), 'events_fields' );
    $output = insert_open_form_tags();
    ob_start();

    require_once get_template_directory() . '/lib/admin/custom-post-types/events/events-meta-form.php';
    $output = $output . ob_get_contents();
    ob_clean();
//    if ($callback_args['args'][0] == 'tradeshow') {
//        require_once get_template_directory() . '/lib/admin/custom-post-types/events/tradeshow-meta-form.php';
//        $output = $output . ob_get_contents();
//    } else if ($callback_args['args'][0] == 'webinar') {
//        require_once get_template_directory() . '/lib/admin/custom-post-types/events/webinar-meta-form.php';
//        $output = $output . ob_get_contents();
//    } else if ($callback_args['args'][0] == 'speaker') {
//        require_once get_template_directory() . '/lib/admin/custom-post-types/events/speaker-meta-form.php';
//        $output = $output . ob_get_contents();
//    }
    ob_end_clean();
    $output = $output . insert_end_form_tags();

    /**
     * Hook 'events_render_post_meta_markup'
     *
     * Allows for filtering or adding new postmeta via child theme
     */
    $output = apply_filters( 'events_render_post_meta_markup', $output );

    echo $output;

}

/**
 * Save the metaboxes' values
 */
function events_save_meta_boxes( $post_id ) {

    global $post;

    // Verify nonce
    if ( !isset( $_POST['events_fields'] ) || !wp_verify_nonce( $_POST['events_fields'], basename(__FILE__) ) ) {
        return $post_id;
    }

    // Check Autosave
    if ( (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) || ( defined('DOING_AJAX') && DOING_AJAX) || isset($_REQUEST['bulk_edit']) ) {
        return $post_id;
    }

    // Don't save if only a revision
    if ( isset( $post->post_type ) && $post->post_type == 'revision' ) {
        return $post_id;
    }

    // Check permissions
    if ( !current_user_can( 'edit_post', $post->ID ) ) {
        return $post_id;
    }

    $meta_options_list = get_events_cpt_meta_options_list();

    // Save each piece of post meta, filtering via the input_type, and sanitizing as appropriate
    foreach ( $meta_options_list as $option => $input_type ) {
        switch ($input_type) {
            case 'text' :
                update_post_meta( $post->ID, $option, isset( $_POST[$option] ) ? $_POST[$option] : '' );
                break;

            case 'checkbox' :

                // Loop through events to see which one is featured
                // Get the meta tag names for the Featured Image
                // Check to see if another featured_event checkbox needs to be removed
                if ( $option == 'featured_event') {
                    $args = array(
                        'post_type' => 'events'
                    );
                    $post_query = new WP_Query($args);
                    global $event_category;
                    if ( $post_query->have_posts() ) {
                        while ( $post_query->have_posts() ) {
                            $post_query->the_post();
                            $meta = get_post_meta_single(get_the_ID());
                            if ($meta['featured_event'] == '1') {
                                if ( get_the_ID() != $post_id ) {
                                    update_post_meta( get_the_ID(), $option, '0' );
                                }
                            }
                        }
                    }
                    update_post_meta( $post_id, $option, $_POST[$option] ? '1' : '0' );

                } else {

                    update_post_meta( $post->ID, $option, $_POST[$option] ? '1' : '0' );
                }

                break;

            case 'textarea' :
                update_post_meta( $post->ID, $option, isset( $_POST[$option] ) ? $_POST[$option] : '' );
                break;

            case 'array' :

                if ( empty($_POST['speaker_items']) ) {
                    $speaker_items[0] = array();
                    update_post_meta( $post->ID, 'speaker_items',  $speaker_items );
                    break;
                }

                foreach ( $_POST['speaker_items'] as $key => $item ) {

                    $speaker_items[$key] = array();
                    foreach( get_speaker_items_meta_options_list() as $opt => $validation ) {
                        $speaker_items[$key][$opt] = isset( $_POST['speaker_items'][$key][$opt] ) ? $_POST['speaker_items'][$key][$opt] : '';
                    }
                    update_post_meta( $post->ID, 'speaker_items',  $speaker_items );
                }

                break;

        }

    }


//    delete_post_meta( $post->ID, 'speaker_items' );

    /**
     * Hook 'events_save_meta_boxes'
     *
     * Allows additional processing on postmeta via child
     */
    do_action( 'events_save_meta_boxes' );

    return TRUE;

}
// List the labels for the meta field values associated with the speaker
function get_speaker_items_meta_options_list() {
    return array(
        'speaker_profile_image'    => 'text',
        'speaker_profile_image_url' => 'text',
//        'speaker_bg_image'         => 'text',
        'speaker_name'             => 'text',
        'speaker_position'         => 'text',
        'speaker_company'          => 'text',
        'speaker_bio'              => 'text',
    );
}


/* Add the Copy Events Post row action */
add_action( 'post_row_actions', 'add_duplicate_link', 10, 2 );

function add_duplicate_link( $actions, $post ) {

    if ( get_post_type() === "events") {
        $actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce' ) . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
    }

    return $actions;

}

add_action( 'admin_action_duplicate_post_as_draft', 'duplicate_post_as_draft' );

/* Create post duplicate as a draft and redirect to that edit page screen. */
function duplicate_post_as_draft () {

    global $wpdb;
    if (! ( isset( $_GET['post']) || isset( $_POST['post']) || ( isset($_REQUEST['action']) && 'duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
        wp_die('No post to duplicate has been supplied!');
    }

    /*
     * Nonce verification
     */
    if ( !isset( $_GET['duplicate_nonce'] ) || !wp_verify_nonce( $_GET['duplicate_nonce'], basename( __FILE__ ) ) )
        return;

    /*
     * get the original post id
     */
    $post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );
    /*
     * and all the original post data then
     */
    $post = get_post( $post_id );

    /*
     * if you don't want current user to be the new post author,
     * then change next couple of lines to this: $new_post_author = $post->post_author;
     */
    $current_user = wp_get_current_user();
    $new_post_author = $current_user->ID;

    /*
     * if post data exists, create the post duplicate
     */
    if (isset( $post ) && $post != null) {

        /*
         * new post data array
         */
        $args = array(
            'comment_status' => $post->comment_status,
            'ping_status'    => $post->ping_status,
            'post_author'    => $new_post_author,
            'post_content'   => $post->post_content,
            'post_excerpt'   => $post->post_excerpt,
            'post_name'      => $post->post_name,
            'post_parent'    => $post->post_parent,
            'post_password'  => $post->post_password,
            'post_status'    => 'draft',
            'post_title'     => $post->post_title . ' (Copy)',
            'post_type'      => $post->post_type,
            'to_ping'        => $post->to_ping,
            'menu_order'     => $post->menu_order
        );

        /*
         * insert the post by wp_insert_post() function
         */
        $new_post_id = wp_insert_post( $args );

        /*
         * get all current post terms and set them to the new post draft
         */
        $taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
        foreach ($taxonomies as $taxonomy) {
            $post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
            wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
        }

        /*
         * duplicate all post meta just in two SQL queries
         */
        $post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
        if (count($post_meta_infos)!=0) {
            $sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
            foreach ($post_meta_infos as $meta_info) {
                $meta_key = $meta_info->meta_key;
                if( $meta_key == '_wp_old_slug' ) continue;
                $meta_value = addslashes($meta_info->meta_value);
                $sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
            }
            $sql_query.= implode(" UNION ALL ", $sql_query_sel);
            $wpdb->query($sql_query);
        }


        /*
         * finally, redirect to the edit post screen for the new draft
         */
        wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
        exit;
    } else {
        wp_die('Post creation failed, could not find original post: ' . $post_id);
    }

}

