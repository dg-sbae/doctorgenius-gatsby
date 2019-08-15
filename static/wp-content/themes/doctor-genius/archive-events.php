<?php
/**
 * Template Name: Events Category
 */

//add_action('init', 'archive_events_register_scripts');
add_action('wp_enqueue_scripts', 'archive_events_enqueue_scripts');

// Load custom post metadata and fw settings
//$meta = get_post_meta_single( $post->ID );
$fw_options = get_option( 'dg_admin_menu' );

$args = array(
        'post_type' => 'events'
);
$post_query = new WP_Query($args);
global $event_category;
// Loop through events to see which one is featured
// Get the meta tag names for the Featured Image

$timeline_date_array = array();
$timeline_start_array = array();

if ( $post_query->have_posts() ) {
    while ( $post_query->have_posts() ) {
        $post_query->the_post();
        $meta = get_post_meta_single( get_the_ID() );
        if ( $meta['featured_event'] == '1' ) {
            $terms = get_the_terms( get_the_ID(), 'events-category' );
            $event_category = $terms[0]->name;
            $post_url = get_the_permalink();
            $register_url = $meta['register_url'];
            $event_title = $meta['event_title'];
            $event_date = $meta['event_date'];
            $start_time = $meta['start_time'];
            $end_time = $meta['end_time'];

            $count_speakers = 0;
            $speaker_items = unserialize($meta['speaker_items']);
            foreach ( $speaker_items as $key => $item ) {
                $count_speakers++;
            }

            if ( $count_speakers == 0 || $meta['include_speakers'] == 0 )
                $total_speakers = 0;
            else
                $total_speakers = $count_speakers;
            $hide_hero = false;
            $total_seats = $meta['total_seats'];
            break;
        }
        $hide_hero = true; // If not selected hide the hero
    }
}



$timeline_posts = get_posts ( $args );

$event_venue = $meta['event_venue'];
$event_city = $meta['event_city'];
$event_state = $meta['event_state'];
$event_zip = $meta['event_zip'];
$company_name = $meta['company_name'];

?>
<?php get_template_part( 'includes/top-navigation'); ?>

    <section class="hero">
        <div class="container">
            <div class="row valign-wrapper">
                <div class="col s12 m12 l5">
                    <div class="sub-title">Doctor Genius Presents<span></span></div>
                    <h1 class="title"><?php echo strtoupper($event_category); ?></h1>
                    <p><?php echo $event_title ?></p>

                    <div class="btn-wrapper">
                        <a href="<?php echo $register_url ?>" target="_blank" class="btn-register hoverable z-depth-1">Register <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                        <span class="gap"></span>
                        <a href="<?php echo $post_url ?>" target="_blank" class="btn-view"><i class="fa fa-plus" aria-hidden="true"></i> View Info</a>
                    </div>

                </div>
                <div class="col s12 m12 l6 center">
                    <div class="countdown-wrapper">
                        <?php
                        $string_event_date = date('Y-m-d', strtotime($event_date));
                        $string_time_start = date('H:i:s', strtotime($start_time));
                        $string_full_event_date = $string_event_date . " " . $string_time_start;
                        ?>
                        <div class="countdown" data-event-date="<?php echo $string_full_event_date; ?>">
                            <div id="getting-started"></div>
                        </div>
                        <h2 class="location"><?php echo date('F j, Y', strtotime($event_date)) . " " . date('h:ia', strtotime($start_time)) . " - " . date('h:ia', strtotime($end_time)); ?></h2>

                        <div class="mid-block">
                            <div class="block valign-wrapper">
                                <?php if ($total_seats == 0) : ?>
<!--                                    <div class="seats-detail">Seats<br><span>Sold Out</span></div>-->
                                <?php elseif ($total_seats == 1) : ?>
                                    <div class="seats-icon"><i class="fa fa-user fa-3x" aria-hidden="true"></i></div>
                                    <div class="seats-detail">Seats<br><span><?php echo $total_seats; ?> person</span></div>
                                <?php else : ?>
                                    <div class="seats-icon"><i class="fa fa-user fa-3x" aria-hidden="true"></i></div>
                                    <div class="seats-detail">Seats<br><span><?php echo $total_seats; ?> people</span></div>
                                <?php endif; ?>

                                <?php if ($total_speakers == 0) : ?>
<!--                                    <div class="speaker-detail">Speakers<br><span>No speaker</span></div>-->
                                <?php elseif ($total_speakers == 1) : ?>
                                    <div class="speaker-icon" <?php echo ( $total_seats == 0 ) ? 'style="border-left:none;"' : ''; ?>><i class="fa fa-microphone fa-3x" aria-hidden="true" <?php echo ( $total_seats == 0 ) ? 'style="margin-left:0;"' : ''; ?>></i></div>
                                    <div class="speaker-detail">Speakers<br><span><?php echo $total_speakers; ?> person</span></div>
                                <?php else : ?>
                                    <div class="speaker-icon" <?php echo ( $total_seats == 0 ) ? 'style="border-left:none;"' : ''; ?>><i class="fa fa-microphone fa-3x" aria-hidden="true" <?php echo ( $total_seats == 0 ) ? 'style="margin-left:0;"' : ''; ?>></i></div>
                                    <div class="speaker-detail">Speakers<br><span><?php echo $total_speakers; ?> people</span></div>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="sponsor">
                            <div class="sponsor-title">Sponsored By:</div>
                            <img src="https://doctorgenius.com/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/logo-header.png" width="300" alt="">
                        </div>
                        <div class="address">
                            <!--<i class="fa fa-map-marker" aria-hidden="true"></i> 25320 The Old Road, Santa Clarita, CA 91381-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="Events">
        <div class="container">
            <div class="row">
                <h3 class="title center">Upcoming Events<span></span></h3>
                <p>Below is information on our upcoming events that can cover a variety of topics about benefiting a private practice through online marketing. Each conference will have a unique focus and purpose, teaming up with successful professionals within the industry. For more information, follow the link to register.</p>
            </div>
            <div class="row upcoming_events_row">
                <?php
                    // Query to return posts in order of Event date, that come after the current date (in the future)
                    $upcoming_args = array (
                        'order'        => 'ASC',
                        'post_type'    => 'events',
                        'orderby'      => 'meta_value',
                        'meta_key'     => 'event_date',
                        'meta_value'   => date("Y-m-d"),
                        'meta_compare' => '>',
                    );

                    $upcoming_query = new WP_Query($upcoming_args);
                ?>
                <?php $upcoming_count = 0; ?>
                <!-- Events Loop -->
                <?php if ( $upcoming_query->have_posts() ) : while ( $upcoming_query->have_posts() ) : $upcoming_query->the_post(); ?>
                <?php
                    if ($upcoming_count == 4) {
                        break;
                    } else {
                        $upcoming_count++;
                    }
                    $meta = get_post_meta_single( $post->ID );
                    $event_title = $meta['event_title'];
                    $event_date = $meta['event_date'];
                    $event_venue = $meta['event_venue'];
                    $event_city = $meta['event_city'];
                    $event_state = $meta['event_state'];
                    $event_zip = $meta['event_zip'];
                    $terms = get_the_terms( get_the_ID(), 'events-category');
                    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
                        foreach ( $terms as $term ) {
                            ($term->name == 'Webinar') ? $exclude_location = true : $exclude_location = false; // set exclude variable to true if webinar
                        }
                    }
                    // Include "featured image" from admin panel IF image is selected, ELSE add the default image for particular category
                    if ( has_post_thumbnail( $post->ID ) ) {
                        $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' );
                    } else { // Could make this a default image in case one isn't selected
                        if ( $terms[0]->name == 'Webinar') {
                            $image[0] = get_template_directory_uri() . '/assets/events/template/img/upcoming-webinar.jpg';
                        } elseif ( $terms[0]->name == 'Tradeshow') {
                            $image[0] = get_template_directory_uri() . '/assets/events/template/img/upcoming-tradeshow.jpg';
                        } elseif ( $terms[0]->name == 'Speaker') {
                            $image[0] = get_template_directory_uri() . '/assets/events/template/img/upcoming-speaker.jpg';
                        }
                    }
                    ?>
                <div class="upcoming_event_item col s12 m6 l3">
                    <div class="hoverable z-depth-2">
                        <div class="image"><img width="100%" src="<?php echo $image[0] ?>" alt="<?php echo get_post_meta( get_post_thumbnail_id( $post->ID), '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( get_post_thumbnail_id( $post->ID )); ?>" /></div>
                        <div class="info-box center">
                            <div class="event-name"><?php echo $event_title; ?></div>
                            <?php if ( !$exclude_location) : ?>
                                <div class="location"><?php echo $event_city . ', ' . $event_state ?></div>
                            <?php else : ?>
                                <div class="location">&nbsp;</div>
                            <?php endif; ?>
                            <div class="date"><?php echo date('F j, Y', strtotime($event_date)); ?></div>
                            <a href="<?php the_permalink(); ?>" target="_blank" class="btn-view"><i class="fa fa-plus" aria-hidden="true"></i> View Info</a>
                        </div>
                    </div>
                </div>
            <?php //end the loop ?>
            <?php endwhile; else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
            </div>
        </div>
    </section>
    <section id="Newsletter">
        <div class="container">
            <div class="row valign-wrapper">
                <div class="col s12 m6 l6 center">
                    <div class="title">Join Our Newsletter</div>
                    <div class="description">Subscribe to our email newsletter for useful tips and valuable resources.</div>

                    <form method="POST" action="https://doctorgenius.activehosted.com/proc.php" id="_form_3_" class="_form _form_3 _inline-form  _dark" novalidate>
                        <input type="hidden" name="u" value="3" />
                        <input type="hidden" name="f" value="3" />
                        <input type="hidden" name="s" />
                        <input type="hidden" name="c" value="0" />
                        <input type="hidden" name="m" value="0" />
                        <input type="hidden" name="act" value="sub" />
                        <input type="hidden" name="v" value="2" />
                        <div class="_form-content">
                            <div class="_form_element _x23447700 _full_width " >
                                <label class="_form-label">
                                </label>
                                <div class="_field-wrapper">
                                    <input type="text" name="email" placeholder="Type your email" required/>
                                </div>
                            </div>
                            <div class="_button-wrapper _full_width">
                                <button id="_form_3_submit" class="_submit" type="submit">
                                    Submit
                                </button>
                            </div>
                            <div class="_clear-element">
                            </div>
                        </div>
                        <div class="_form-thank-you" style="display:none;">
                        </div>
                        <div class="_form-branding">
                            <div class="_marketing-by">
                                Marketing by
                            </div>
                            <a href="http://www.activecampaign.com" class="_logo"></a>
                        </div>
                    </form>
                </div>

                <div class="col s12 m6 l6 center">
                    <div class="quotes"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/quotes-left.png" alt="quotes"></div>
                    <div class="quotes-text">The Educated Choice in<br>Health Care Marketing</div>
                    <div class="quotes"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/quotes-right.png" alt="quotes"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="Timeline">
        <div class="container center">
            <h4>Past Events <span></span></h4>
            <p class="sub-title">At Doctor Genius, we understand that the digital marketing platform is always changing and therefore, offer events collaborating with other professionals in specific fields. Here is a timeline of past events that we have hosted on various topics pertaining to private practices.</p>
        </div>

        <section id="cd-timeline" class="cd-container">
            <?php
                // Query to return posts in order of Event date, that come before the current date (in the past)
                $timeline_args = array (
                    'post_type' => 'events',
                    'orderby'   => 'meta_value',
                    'meta_key'  => 'event_date',
                    'meta_value' => date("Y-m-d"),
                    'meta_compare' => '<',
                );

                $timeline_query = new WP_Query($timeline_args);
            ?>

            <!-- Timeline Events Loop -->
            <?php if ( $timeline_query->have_posts() ) : while ( $timeline_query->have_posts() ) : $timeline_query->the_post(); ?>
            <?php
                $count++;
                $meta = get_post_meta_single( $post->ID );

                $event_title = $meta['event_title'];
                $event_date = $meta['event_date'];
                $event_venue = $meta['event_venue'];
                $event_city = $meta['event_city'];
                $event_state = $meta['event_state'];
                $event_zip = $meta['event_zip'];
                $timeline_image = $meta['timeline_image'];
                $timeline_event_description = $meta['timeline_event_description'];

                $terms = get_the_terms( get_the_ID(), 'events-category'); ?>
                <?php if ($count % 2 == 1) : ?>
                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img  cd-bullets "></div> <!-- cd-timeline-img -->
                        <div class="cd-timeline-content">
                            <div class="row valign-wrapper">
                                <div class="cd-text-wrap right-align">
                                    <div class="date"><?php echo date('F j', strtotime($event_date)); ?></div>
                                    <div class="timeline-title"><?php echo $event_title; ?></div>
                                    <p><?php echo $timeline_event_description; ?></p>
                                </div>
                                <?php if ( $timeline_image == '' ) : ?>
                                    <div class="cd-event-img"><img class="hoverable z-depth-2" src="<?php echo get_template_directory_uri(). '/assets/events/template/img/location-default.jpg' ; ?>" alt="Timeline default location image of cityscape." title="Default Timeline Location Image" ></div>
                                <?php else : ?>
                                    <div class="cd-event-img"><img class="hoverable z-depth-2" src="<?php echo wp_get_attachment_image_url( $timeline_image, 'thumbnail' ); ?>" alt="<?php echo get_post_meta( $timeline_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title($timeline_image); ?>" ></div>
                                <?php endif; ?>
                            </div>
                        </div> <!-- cd-timeline-content -->
                    </div> <!-- cd-timeline-block -->
                <?php else : ?>
                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img  cd-bullets "></div> <!-- cd-timeline-img -->
                        <div class="cd-timeline-content">
                            <div class="row valign-wrapper">
                                <?php if ( $timeline_image == '' ) : ?>
                                    <div class="cd-event-img"><img class="hoverable z-depth-2" src="<?php echo get_template_directory_uri(). '/assets/events/template/img/location-default.jpg' ; ?>" alt="Timeline default location image of cityscape." title="Default Timeline Location Image" ></div>
                                <?php else : ?>
                                    <div class="cd-event-img"><img class="hoverable z-depth-2" src="<?php echo wp_get_attachment_image_url( $timeline_image, 'thumbnail' ); ?>" alt="<?php echo get_post_meta( $timeline_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title($timeline_image); ?>" ></div>
                                <?php endif; ?>
                                <div class="cd-text-wrap left-align">
                                    <div class="date"><?php echo date('F j', strtotime($event_date)); ?></div>
                                    <div class="timeline-title"><?php echo $event_title; ?></div>
                                    <p><?php echo $timeline_event_description; ?></p>
                                </div>
                            </div>
                        </div> <!-- cd-timeline-content -->
                    </div> <!-- cd-timeline-block -->
                <?php endif; ?>
            <?php endwhile; else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
        </section>

    </section>

    <section id="Sponsor">
        <div class="container">
            <div class="title">Featured Partners </div>
            <div class="row valign-wrapper">
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-bofa.png" alt=""></div>
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-burkhard.png" alt=""></div>
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-dentalpatterson.png" alt=""></div>
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-nickerson.png" alt=""></div>
            </div>
            <div class="row valign-wrapper">
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-revenue-well.png" alt="" ></div>
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-roi.png" alt="" style="max-width:200px;"></div>
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-hrhealth.png" alt="" style="max-width:150px;"></div>
                <div class="col s12 m6 l3"><img src="/wp-content/themes/doctor-genius/assets/events/template/img/logo-jll.png" alt="" style="max-width:200px;"></div>
            </div>
        </div>
    </section>

    <section id="Demo">
        <div class="container">
            <div class="row valign-wrapper">
                <div class="col s12 m12 l5 offset-l1">
                    <div class="title">Let's Talk<br>Partnership</div>
                    <p>By investing in Doctor Genius, you are investing in a partnership with a company that is always available to help with any issues you encounter. From the beginning, our client support team will take you through the process step by step to ensure that your website captures the goal and mission of your private practice. Even after we complete construction of the website, we will work with you whenever you need us. Call us or enter your contact information for more details today.</p>
                </div>
                <div class="col s12 m12 l5">
                    <div class="request-wrapper z-depth-1">
                        <img class="email" src="/wp-content/themes/doctor-genius/assets/events/template/img/icon-email.png">
                        <div class="form-title">Let us get to know each other</div>
                        <?php echo do_Shortcode('[contact-form-7 id="940" title="Request Form - Event Page"]');?>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!--    Remove hero section if no featured image selected-->
    <?php
        echo "<script type='text/javascript'>";
        if ($hide_hero) {
            echo "document.querySelector('.hero').classList.add('hidden')";
        } else {
            echo "document.querySelector('.hero').classList.remove('hidden')";
        }


        echo "</script>";
        ?>

<?php
    //Register all functionality needed for this
    function archive_events_register_scripts() {
        /**
         * Hook 'archive_events_register_scripts'
         *
         * Used to register additional styles or scripts for child themes
         */
        do_action('archive_events_register_scripts');
    }

    function archive_events_enqueue_scripts() {
        wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/events/template/js/jquery.js', '', false, true);
        wp_enqueue_script('archive_events_materialize', get_template_directory_uri() . '/assets/events/template/js/materialize.min.js', array('jquery'), false, true);
        wp_enqueue_script('archive_events_plugins', get_template_directory_uri() . '/assets/events/template/js/dg_plugins.js', array('jquery'), false, true);
        wp_enqueue_script('archive_events_countdown', get_template_directory_uri() . '/assets/events/template/js/dg_jquery.countdown.min.js', array('jquery'), false, true);
        wp_enqueue_script('archive_events_main', get_template_directory_uri() . '/assets/events/template/js/dg_main.js', array('archive_events_countdown'), false, false);
        wp_enqueue_script('archive_events_newsletter', get_template_directory_uri() . '/assets/events/template/js/newsletter.js', array('jquery'), false, true);

        wp_register_style('archive_events_fa_css', get_template_directory_uri() . '/assets/events/template/css/font-awesome.css' );
        wp_register_style('archive_events_materialize_css', get_template_directory_uri() . '/assets/events/template/css/materialize.min.css');
        wp_register_style('archive_events_timeline_css', get_template_directory_uri() . '/assets/events/template/css/dg_timeline.css');
        wp_register_style('archive_events_events_css', get_template_directory_uri() . '/assets/events/template/css/dg_events.css');
        wp_register_style('archive_events_loader_css', get_template_directory_uri() . '/assets/events/template/css/dg_loader.css');

        wp_enqueue_style('archive_events_fa_css');
        wp_enqueue_style('archive_events_materialize_css');
        wp_enqueue_style('archive_events_timeline_css');
        wp_enqueue_style('archive_events_events_css');
        wp_enqueue_style('archive_events_loader_css');

        /**
         * Hook 'archive_events_enqueue_scripts'
         *
         * Used to enqueue additional styles or scripts for child themes
         */
        do_action('archive_events_enqueue_scripts');
    }
?>

<?php get_footer(); ?>
