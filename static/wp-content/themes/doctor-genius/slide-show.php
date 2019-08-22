<?php
/**
 * Template Name: Slide Show Template
 * Template Post Type: page
 */

    global $post;
    add_action('wp_enqueue_scripts', 'slide_show_enqueue_scripts');

    $current_page_title = get_the_title($post->ID);
    $current_page_id = $post->ID;
    $active_parent_post = $post->post_parent;
    $active_grandparent_post = get_post($active_parent_post)->post_parent;

    if ( get_the_title($post->ID) == 'Boosted Content' || get_the_title($post->ID) == 'Pricing' || get_the_title($post->ID) == 'Why Your Customers Need Us' || get_the_title($post->ID) == 'Why We&#8217;re Different' ) {
        wp_redirect( get_permalink(get_next_post()->ID) );
        exit();
    }

    $term_category = get_the_category($current_page_id);

    if ( $term_category[0]->name == 'CS Slideshow' ) {
        $term = get_term_by('name', 'CS SlideShow', 'nav_menu');
    } else if ( $term_category[0]->name == 'Partnership Slideshow' ) {
        $term = get_term_by('name', 'Partnership Slideshow', 'nav_menu');
    }
    $menu_id = $term->term_id;
    $menu_items = wp_get_nav_menu_items($menu_id);

?>

<head>
    <title>Doctor Genius | Who We Are</title>
    <meta name="robots" content="noindex" />
    <?php wp_head(); ?>
</head>

<body>
    <div class="border-top">
        <div class="color01"></div>
        <div class="color02"></div>
        <div class="color03"></div>
        <div class="color04"></div>
        <div class="color05"></div>
    </div>

    <nav id="SideNav" class="side-nav fixed">
        <div class="nav-logo"><a href="#"><img src="<?php echo get_template_directory_uri() . '/assets/img/slide-show/logo-nav.png'?>" alt=""/></a></div>
        <ul class="collapsible collapsible-accordion">
            <?php $submenu = false; $count = 0;?>

            <?php foreach ( $menu_items as $item ) : ?>
                <?php if ( !$item->menu_item_parent ) : $parent_id = $item->ID; ?> <!-- This is a parent -->
                    <?php if ( $submenu == true ) : $submenu = false; ?>
                        </ul>
                    <?php endif; ?>
            <li <?php if ( $current_page_id == get_post_meta( $item->ID, '_menu_item_object_id', true ) ) { echo 'class="active"'; } ?>><a href="<?php echo $item->url; ?>"><?php echo $item->title; ?></a></li>
                     <?php if ( ( get_post_meta( $menu_items[ $count + 1 ]->menu_item_parent, '_menu_item_object_id', true ) == $active_parent_post ) ||
                     ( get_post_meta( $menu_items[ $count + 1 ]->menu_item_parent, '_menu_item_object_id', true ) == $current_page_id ) ||
                     ( get_post_meta( $item->ID, '_menu_item_object_id', true ) == $current_page_id ) ) : $submenu = true; ?>
                         <ul class="nav-sub-pages">
                     <?php endif; ?>
                <?php else : ?>

                     <?php if ( $post->post_parent ==  get_post_meta( $item->menu_item_parent, '_menu_item_object_id', true ) ||
                     $current_page_id ==  get_post_meta( $item->menu_item_parent, '_menu_item_object_id', true )) : ?> <!-- As long as it's a subpage for current parent -->

                        <li <?php if ( $current_page_id == get_post_meta( $item->ID, '_menu_item_object_id', true ) ) { echo 'class="active"'; } ?>><a href="<?php echo $item->url; ?>"><?php echo $item->title; ?></a>
                     <?php endif; ?>
                <?php endif; ?>
                <?php $count++; ?>
            <?php endforeach; ?>
        </ul>
        <a href="#" data-activates="SideNav" class="button-collapse hide-on-large-only"><i class="material-icons">menu</i></a>
    </nav>

    <section id="content-section">
        <div class="top-bar">
            <?php if ( $term_category[0]->name == 'CS Slideshow' ) : ?>
                <div class="top-logo center"><h4><?php if ( get_the_title( $post->ID ) != 'Home' ) : ?>Doctor Genius | Client Success<?php endif; ?></h4></div>
            <?php elseif ( $term_category[0]->name == 'Partnership Slideshow' ) : ?>
                <div class="top-logo center"><h4><?php if ( get_the_title( $post->ID ) != 'Home' ) : ?>Doctor Genius | Client Partnership<?php endif; ?></h4></div>
            <?php endif; ?>


            <div class="top-btn-wrapper">
                <?php global $post;
                      $prevPost = get_previous_post();
                      $nextPost = get_next_post();
                      $next_post_parent_id = $nextPost->post_parent;
                      $next_post_grandparent_id = get_post($next_post_parent_id)->post_parent;
                      ?>
                <?php if ( ($nextPost != '') &&
                    (( get_the_title($active_grandparent_post) == 'Home' ) ||
                        ( get_the_title($active_parent_post) == 'Home' )) &&
                            (( get_the_title($next_post_parent_id) == 'Home') || ( get_the_title(get_post($next_post_grandparent_id) == 'Home'))) ) : ?>
                    <a href="<?php echo get_permalink( $nextPost->ID ); ?>" class="btn-next hoverable">next</a>
                <?php endif; ?>
                <?php if ( get_the_title( $post->ID ) != 'Home' ) : ?>
                    <a href="<?php echo get_permalink( $prevPost->ID ); ?>" class="btn-next hoverable">previous</a>
                <?php endif; ?>
            </div>
        </div>

        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="entry-content"><?php the_content(); ?></div>
        <?php endwhile; else : ?>
            <?php echo 'Error: no post content found.'; ?>
        <?php endif; ?>
    </section>
</body>

<?php wp_footer(); ?>

<?php function slide_show_enqueue_scripts() {

    global $post;
    $parent_post = $post->post_parent;
    wp_register_script('archive_events_jquery', get_template_directory_uri() . '/assets/events/template/js/jquery.js', '', false, true);
//    wp_register_script('archive_events_materialize', get_template_directory_uri() . '/assets/events/template/js/materialize.min.js', '', false, true);

    wp_register_style('slide_show_css', get_template_directory_uri() . '/slide-show/css/slide-show.css');
    wp_register_style('materialize_css', get_template_directory_uri() . '/assets/events/template/css/materialize.css');
    wp_register_style('google_fonts_css', 'https://fonts.googleapis.com/css?family=Nunito:400,700');

    wp_enqueue_script('archive_events_jquery', '' , '', '', true);


    wp_enqueue_style('slide_show_css');
    wp_enqueue_style('materialize_css');
    wp_enqueue_style('google_fonts_css');

    if ( get_the_title( $parent_post ) == 'Expectations' ) {
        wp_register_script('highcharts_js', 'https://code.highcharts.com/highcharts.js', '', false, true);
        wp_register_script('highcharts_more_js', 'https://code.highcharts.com/highcharts-more.js', '', false, true);
//        wp_register_script('highcharts_exporting_js', 'https://code.highcharts.com/modules/exporting.js', '', false, true);
        wp_register_script('slide_show_js', get_template_directory_uri() . '/slide-show/js/slide-show.js', '', false, true);

        wp_enqueue_script('highcharts_js', '' , '', '', true);
        wp_enqueue_script('highcharts_more_js', '' , '', '', true);
        wp_enqueue_script('slide_show_js', '' , '', '', true);
    }

    /**
    * Hook 'archive_events_enqueue_scripts'
    *
    * Used to enqueue additional styles or scripts for child themes
    */
    do_action('slide_show_enqueue_scripts');
} ?>
