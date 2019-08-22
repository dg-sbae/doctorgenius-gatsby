<?php
/**
 * Template Name: Event-2018-04-06
 */
?>
<!DOCTYPE html>

    <?php // Load custom post metadata and fw settings

        add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles' );

        $meta = get_post_meta_single( $post->ID );
        $fw_options = get_option( 'dg_admin_menu' );

        // Process meta array offsets into variables for use in template
        $featured_event = $meta['featured_event'];
        $event_title = $meta['event_title'];
        $event_subtitle = $meta['event_subtitle'];
        $event_strapline = $meta['event_strapline'];
        $event_subtitle_hide = $meta['event_subtitle_hide'];
        $event_strapline_hide = $meta['event_strapline_hide'];
        $company_name = $meta['company_name'];
        $event_date = $meta['event_date'];
        $start_time = $meta['start_time'];
        $end_time = $meta['end_time'];
        $register_url = $meta['register_url'];
        $archive_image = $meta['archive_image'];
        $main_header_image = $meta['main_header_image'];
        $timeline_image = $meta['timeline_image'];
        $webinar_url = $meta['webinar_url'];
        $sponsor_url = $meta['sponsor_url'];
        $webinar_url = $meta['webinar_url'];
        $speaker_name = $meta['speaker_name']; // Might need multiple
        $event_venue = $meta['event_venue'];
        $event_street_address = $meta['event_street_address'];
        $event_city = $meta['event_city'];
        $event_state = $meta['event_state'];
        $event_zip = $meta['event_zip'];
        $speaker_url = $meta['speaker_url'];
        $event_url = $meta['event_url'];
        $timeline_image = $meta['timeline_image'];
        $total_seats = $meta['total_seats'];
        $include_location = $meta['include_location'];
        $include_marketing = $meta['include_marketing'];
        $include_speakers = $meta['include_speakers'];
        $include_sponsors = $meta['include_sponsors'];
        $event_venue = $meta['event_venue'];
        $hero_sub_text = $meta['hero_sub_text'];
        $hero_sub_text_hide = $meta['hero_sub_text_hide'];
        $hero_bg_image = $meta['hero_bg_image'];
        $event_details_text = $meta['event_details_text'];
        $event_details_text_hide = $meta['event_details_text_hide'];
        $asterisk_detail = $meta['asterisk_detail'];
        $asterisk_detail_hide = $meta['asterisk_detail_hide'];
        $information_heading1 = $meta['information_heading1'];
        $information_h1_li_1 = $meta['information_h1_li_1'];
        $information_h1_li_2 = $meta['information_h1_li_2'];
        $information_h1_li_3 = $meta['information_h1_li_3'];
        $information_h1_li_4 = $meta['information_h1_li_4'];
        $information_h1_li_5 = $meta['information_h1_li_5'];
        $information_heading2 = $meta['information_heading2'];
        $information_h2_li_1 = $meta['information_h2_li_1'];
        $information_h2_li_2 = $meta['information_h2_li_2'];
        $information_h2_li_3 = $meta['information_h2_li_3'];
        $information_h2_li_4 = $meta['information_h2_li_4'];
        $information_h2_li_5 = $meta['information_h2_li_5'];
        $information_image = $meta['information_image'];
        $cta_bg_image = $meta['cta_bg_image'];
        $cta_title = $meta['cta_title'];
        $cta_subtitle = $meta['cta_subtitle'];
        $cta_phone_number = $meta['cta_phone_number'];
        $sponsor1_image = $meta['sponsor1_image'];
        $sponsor2_image = $meta['sponsor2_image'];
        $sponsor3_image = $meta['sponsor3_image'];
        $sponsor4_image = $meta['sponsor4_image'];
        $sponsor5_image = $meta['sponsor5_image'];
        $sponsor6_image = $meta['sponsor6_image'];
        $speaker_items = $meta['speaker_items'];
        $speaker_section_title = $meta['speaker_section_title'];
        $speaker_bg_image = $meta['speaker_bg_image'];
        $speaker_section_subtitle = $meta['speaker_section_subtitle'];
        $marketing_solutions_image = $meta['marketing_solutions_image'];

        $speaker_items = unserialize($speaker_items);

        $terms = get_the_terms( get_the_ID(), 'events-category' );
        $event_category = $terms[0]->name;
    ?>

<head>

    <title><?php echo $event_title; ?></title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta charset="UTF-8">
    <!--Import materialize.css-->
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-52SPGC');</script>
    <!-- End Google Tag Manager -->


    <!-- This site is optimized with the Yoast SEO plugin v4.3 - https://yoast.com/wordpress/plugins/seo/ -->
    <!-- Admin only notice: this page doesn't show a meta description because it doesn't have one, either write it for this page specifically or go into the SEO -> Titles menu and set up a template. -->
    <link rel="canonical" href="https://doctorgenius.com/events/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Henry Shein - Marketing to Millennials" />
    <meta property="og:description" content="This course is for individuals that are interested in either acquiring an existing practice or would like to start a new practice." />
    <meta property="og:url" content="https://doctorgenius.com/m2m/" />
    <meta property="og:image" content="https://doctorgenius.com/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/thumbnail.jpg" />
    <meta property="og:image:width" content="696" />
    <meta property="og:image:height" content="464" />
    <meta property="og:site_name" content="Doctor Genius" />
    <meta property="article:publisher" content="https://www.facebook.com/DoctorGeniusMarketing" />
    <meta property="article:tag" content="Digital Marketing" />
    <meta property="article:tag" content="Doctor Genius" />
    <meta property="article:tag" content="Genius Lab" />
    <meta property="article:tag" content="Patient Retention" />
    <meta property="article:tag" content="Practice Management" />
    <meta property="article:section" content="DoctorGenius" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="This course is for individuals that are interested in either acquiring an existing practice or would like to start a new practice." />
    <meta name="twitter:title" content="Henry Shein - Marketing to Millennials" />
    <meta name="twitter:site" content="@DoctorGeniusCA" />
    <meta name="twitter:image" content="https://doctorgenius.com/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/thumbnail.jpg" />
    <meta name="twitter:creator" content="@DoctorGeniusCA" />
    <!-- / Yoast SEO plugin. -->    
    <?php wp_head(); ?>
</head>

<body>


<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="GoTop" class="section scrollspy"></div>

<!--
<div id="Stripes" >
    <div class="row">
        <div class="col s12 m12 l12 grey lighten-1"></div>
    </div>
</div>
-->
<!------------------- Header Section ------------------->

    <header>
        <nav>
            <div class="container">
                <div class="row">
                    <div class="col s12 m4 l6">
                        <div class="logo"><a href="#GoTop"><img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/logo-header.png"></a></div>
                    </div>
                    <div class="col s12 m8 l6">
                        <div class="register"><span class="waves-effect waves-light hoverable z-depth-2"><a href="<?php echo $register_url; ?>" target="_blank">Register Now</a></span></div>
                        <a href="tel:8005982018"><div class="call"><span>Call Us! (800) 598-2018</span></div></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

<?php if ( $hero_bg_image == '') : ?>
    <div id="Hero">
<?php else : ?>
    <div id="Hero" class="overlay-green" style="background:linear-gradient(rgba(39, 46, 77, .65), rgba(39, 46, 77, 0.65) ), url('<?php echo wp_get_attachment_image_url( $hero_bg_image, "profile" ); ?>') no-repeat;background-color: black;background-position:100% 85%;-webkit-background-size: cover;-moz-background-size: cover;background-size: cover;-o-background-size: cover;">
<?php endif; ?>
        <div class="hero-container">
            <div class="content">
<!--                <span>- --><?php //echo $event_category; ?><!-- -</span>-->
                <?php if ( $event_strapline_hide != '1' && $event_strapline != '') : ?>
                    <h4><?php echo $event_strapline; ?></h4>
                <?php else : ?>
                    <h4></h4>
                <?php endif; ?>

                <h1><?php echo $event_title; ?></h1>

                <?php if ( $event_subtitle_hide != '1' && $event_subtitle != '') : ?>
                    <h2><?php echo $event_subtitle; ?></h2>
                <?php else : ?>
                    <h2></h2>
                <?php endif; ?>

                <h3><?php echo date('F j, Y', strtotime($event_date)) . " @ " . ( $include_location == '1' ? $event_venue : '' )?></h3>
                <h3><?php echo date('h:ia', strtotime($start_time)) . " - " . date('h:ia', strtotime($end_time)); ?></h3>
                <a href="<?php echo $register_url; ?>" target="_blank">
                    <button class="hoverable z-depth-2">Register Now</button>
                </a>
                <?php if ( $hero_sub_text_hide != '1' && $hero_sub_text != '' ) : ?>
                    <p><?php echo $hero_sub_text; ?></p>
                <?php else : ?>
                    <p></p>
                <?php endif; ?>

                <div class="scroll-wrap">
                    <p>Scroll</p>
                    <a href="#Millennials"><button class="hoverable z-depth-2"><i class="fa fa-angle-double-down bounce"></i></button></a>
                </div>
            </div>
        </div>
    </div>

<?php if ($event_category == 'Webinar') : ?>

<?php elseif ( $event_category == 'Tradeshow' ) : ?>

<?php elseif ( $event_category == 'Speaker') : ?>

<?php endif ?>

<!---------------- End Header Section ---------------->

<!------------------- Sponsors Section ------------------->
<?php if ( $include_sponsors == '1' ) : add_image_size( 'sponsor-small-img', 180, 96, true ); //resize, crop in functions.php?>
    <section id="Sponsor" class="section scrollspy">
        <div class="container">
            <div class="row">
                <div class="col s4 m2 l2 center-align">
                    <?php if ( $sponsor1_image != '' ) : ?>
                        <img src="<?php echo wp_get_attachment_image_url( $sponsor1_image, 'sponsor-small-img' ); ?>" alt="<?php echo get_post_meta( $sponsor1_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $sponsor1_image ); ?>" >
                        <!--                <img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/sponsor-henry-schien.png" alt="image" title="image">-->
                    <?php endif; ?>
                </div>
                <div class="col s4 m2 l2 center-align">
                    <?php if ( $sponsor2_image != '' ) : ?>
                        <img src="<?php echo wp_get_attachment_image_url( $sponsor2_image, 'sponsor-small-img' ); ?>" alt="<?php echo get_post_meta( $sponsor2_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $sponsor2_image ); ?>" >
    <!--                <img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/sponsor-bofa.png" alt="image" title="image">-->
                    <?php endif; ?>
                </div>
                <div class="col s4 m2 l2 center-align">
                    <?php if ( $sponsor3_image != '' ) : ?>
                        <img src="<?php echo wp_get_attachment_image_url( $sponsor3_image, 'sponsor-small-img' ); ?>" alt="<?php echo get_post_meta( $sponsor3_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $sponsor3_image ); ?>" >
    <!--                <img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/sponsor-doctorgenius.png" alt="image" title="image">-->
                    <?php endif; ?>
                </div>
                <div class="col s4 m2 l2 center-align">
                    <?php if ( $sponsor4_image != '' ) : ?>
                        <img src="<?php echo wp_get_attachment_image_url( $sponsor4_image, 'sponsor-small-img' ); ?>" alt="<?php echo get_post_meta( $sponsor4_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $sponsor4_image ); ?>" >
    <!--                <img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/sponsor-nickerson.png" alt="image" title="image">-->
                    <?php endif; ?>
                </div>
                <div class="col s4 m2 l2 center-align">
                    <?php if ( $sponsor5_image != '' ) : ?>
                    <img src="<?php echo wp_get_attachment_image_url( $sponsor5_image, 'sponsor-small-img' ); ?>" alt="<?php echo get_post_meta( $sponsor5_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $sponsor5_image ); ?>" >
    <!--                <img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/sponsor-rw.png" alt="image" title="image">-->
                    <?php endif; ?>
                </div>
                <div class="col s4 m2 l2 center-align">
                    <?php if ( $sponsor6_image != '' ) : ?>
                        <img src="<?php echo wp_get_attachment_image_url( $sponsor6_image, 'sponsor-small-img' ); ?>" alt="<?php echo get_post_meta( $sponsor6_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $sponsor6_image ); ?>" >
    <!--                <img src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/img/sponsor-carr-realty.png" alt="image" title="image">-->
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>

<!----------------- End Sponsors Section ------------------>

<!---------------- Event Details Section ------------------>

<section id="Course" class="section scrollspy">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l12 center">
                <h3>Event Details</h3>
                <?php if ( $event_details_text_hide != '1' && $event_details_text != '' ) : ?>
                    <div class="description"><?php echo $event_details_text; ?></div>
                <?php else : ?>
                    <div class="description"> </div>
                <?php endif; ?>
                <div class="info-wrap">
                    <?php if ( $include_location == '1' ) : ?>
                        <div class="location"><b>Location:</b> <?php echo $event_street_address . ', ' . $event_city . ', ' . $event_state . ' ' . $event_zip; ?></div>
                    <?php endif; ?>
                    <div class="date"><b>Date/Time:</b> <?php echo date('F j, Y', strtotime($event_date)) . " at " . date('h:ia', strtotime($start_time)) . " - " . date('h:ia', strtotime($end_time)); ?></div>
                    <?php if ( $asterisk_detail_hide != '1' ) : ?>
                        <p><?php echo $asterisk_detail; ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-------------- End Event Details Section ---------------->

<!----------------- Information Section ----------------->

<section id="Millennials">
    <div class="container">
        <div class="row valign-wrapper">
            <div class="col s12 m12 l6">
                <div class="title">
                    <?php if ( $event_strapline_hide != '1' && $event_strapline != '') : ?>
                        <span><?php echo $event_strapline; ?></span><br>
                    <?php else : ?>
                        <span> </span><br>
                    <?php endif; ?>
                    <?php echo $event_title; ?></div>
                <div class="divider-02"></div>
                <div class="content-wrap">
                    <h3><?php echo $information_heading1; ?></h3>
                    <ul>
                        <?php if ( $information_h1_li_1 != '') : ?>
                            <li><?php echo $information_h1_li_1; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h1_li_2 != '') : ?>
                            <li><?php echo $information_h1_li_2; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h1_li_3 != '') : ?>
                            <li><?php echo $information_h1_li_3; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h1_li_4 != '') : ?>
                            <li><?php echo $information_h1_li_4; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h1_li_5 != '') : ?>
                            <li><?php echo $information_h1_li_5; ?></li>
                        <?php endif; ?>
                    </ul>
                    <h3><?php echo $information_heading2; ?></h3>
                    <ul>
                        <?php if ( $information_h2_li_1 != '') : ?>
                            <li><?php echo $information_h2_li_1; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h2_li_2 != '') : ?>
                            <li><?php echo $information_h2_li_2; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h2_li_3 != '') : ?>
                            <li><?php echo $information_h2_li_3; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h2_li_4 != '') : ?>
                            <li><?php echo $information_h2_li_4; ?></li>
                        <?php endif; ?>
                        <?php if ( $information_h2_li_5 != '') : ?>
                            <li><?php echo $information_h2_li_5; ?></li>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>
            <div class="col s12 m12 l6">
                <img src="<?php echo wp_get_attachment_image_url( $information_image, 'profile' ); ?>" alt="<?php echo get_post_meta( $information_image, '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( $information_image ); ?>" >
            </div>
        </div>
    </div>
</section>

<!---------------- End Information Section ------------------>

<!----------------- Marketing Solutions Section ----------------->

<?php if ( $include_marketing == '1' ) : ?>
    <?php if ( $marketing_solutions_image == '' ) : ?>
        <section id="Solutions">
    <?php else : ?>
        <section id="Solutions" style="background: url('<?php echo wp_get_attachment_image_url( $marketing_solutions_image, "profile" ); ?>') no-repeat; background-size:100%;padding-top:90px;margin-top:50px;">
    <?php endif; ?>
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l12 center">
                    <h3>Doctor Genius:<br><span>Marketing Solutions</span></h3>
                </div>
            </div>

            <div class="row">
                <div class="col s12 m6 l6">
                    <ul>
                        <li>
                            <div class="title">Website</div>
                            <p>Our websites are power-packed with fresh and unique content tailored to your practice and services</p>
                        </li>
                        <li>
                            <div class="title">Branding</div>
                            <p>Delivering effective brand strategies that gives practices a major edge in competitive markets</p>
                        </li>
                        <li>
                            <div class="title">Social Media</div>
                            <p>Original patient education content is posted to your social media profiles to generate general interest in your medical treatments and services</p>
                        </li>
                        <li>
                            <div class="title">Search Marketing</div>
                            <p>Narrow down your successful keywords, who is clicking on them, and which keywords yield the highest number of new patient inquiries</p>
                        </li>
                        <li>
                            <div class="title">Hyper-Local Targeting</div>
                            <p>We increase the focus of who we are targeting to a small geographic region near your practice</p>
                        </li>
                        <li>
                            <div class="title">Lead Tracking</div>
                            <p>Get a detailed breakdown of your patient inquiries and their disposition. Determine new or returning patients to better track your Return On Investment (ROI)</p>
                        </li>
                        <li>
                            <div class="title">Security</div>
                            <p>We are always first in line when it comes to running the latest technology. In addition to our servers being in the best location possible, we are also using the best software available</p>
                        </li>
                    </ul>
                </div>
                <div class="col s12 m6 l6">
                    <ul>
                        <li>
                            <div class="title">Genius Portal</div>
                            <p>Get the information you need about your website and performance in one easy-to-use dashboard</p>
                        </li>
                        <li>
                            <div class="title">Rank Report</div>
                            <p>We provide reporting and analytics to keep you up-to-date on your first page placement for targeted keywords</p>
                        </li>
                        <li>
                            <div class="title">Review Management</div>
                            <p>9 out of 10 customers read reviews before making a purchasing decision. Stay informed of what patients are saying about your practice</p>
                        </li>
                        <li>
                            <div class="title">Hosting</div>
                            <p>Get reviews from your existing patients fast with our streamlined SMS and email services</p>
                        </li>
                        <li>
                            <div class="title">Practice Promoter</div>
                            <p>Get reviews from existing patients fast with your streamlined SMS and e-mail services</p>
                        </li>
                        <li>
                            <div class="title">Recall</div>
                            <p>We have knowledge of each practice, which involves the clear understanding of their industry and answering the questions of their patient needs</p>
                        </li>
                        <li>
                            <div class="title">Retention</div>
                            <p>Our goal is to help health practices retain as many customers as possible, often through customer loyalty and brand loyalty initiatives</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>
<!---------------- End Marketing Solutions Section ------------------>

<!---------------- Speakers Section ------------------>

<?php if ( $include_speakers == '1' ) : ?>
    <?php if ( $marketing_solutions_image == '' ) : ?>
        <section id="Speakers">
    <?php else : ?>
        <section id="Speakers" style="background: url('<?php echo wp_get_attachment_image_url( $speaker_bg_image, "profile" ); ?>') no-repeat; background-size:100%;padding-top:90px;margin-top:50px;">
    <?php endif; ?>
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l12 center">
                    <h3><?php echo $speaker_section_title; ?>:</br><?php echo $speaker_section_subtitle; ?></h3>
                </div>
                <?php $speaker_count = count($speaker_items % 2) == 1 ? (count($speaker_items) / 2) + 1 : (count($speaker_items) / 2); ?>
                <div class="speaker-row-outer">
                <?php foreach ( $speaker_items as $key => $item  ) : ?>
                    <?php if ( $key == 0 ) : ?>

                    <?php else : ?>
    <!--                    --><?php //if ($key % 2 == 0 ) : ?>
    <!---->
    <!--                    --><?php //endif; ?>
                        <?php if ( $speaker_items[$key]['speaker_name'] != '' ) : ?>
                            <div class="col s12 m6 l6">
                                <div class="speaker-wrap">
                                    <?php if ( $speaker_items[$key]['speaker_profile_image'] == '') : ?>
                                        <img src="<?php echo get_template_directory_uri() . '/assets/events/template/img/blue_background.png'; ?>" height="166" width="166" alt="Speaker profile pic blue background." title="Blue Background Image" class="z-depth-2">
                                    <?php else : ?>
                                        <img src="<?php echo wp_get_attachment_image_url( $speaker_items[$key]['speaker_profile_image'], 'thumbnail' ); ?>" alt="<?php echo get_post_meta( $speaker_items[$key]['speaker_profile_image'], '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title($speaker_items[$key]['speaker_profile_image']); ?>" class="z-depth-2">
                                    <?php endif; ?>
                                    <div class="info-wrap">
                                        <span class="name"><?php echo $speaker_items[$key]['speaker_name']; ?></span><br>
                                        <span class="position"><?php echo $speaker_items[$key]['speaker_position']; ?></span><br>
                                        <span class="company"><?php echo $speaker_items[$key]['speaker_company']; ?></span>
                                    </div>
    <!--                                <div class="bio">--><?php //echo $speaker_items[$key]['speaker_bio']; ?><!--</div>-->
                                </div>
                            </div>
                        <?php endif; ?>
                        <?php if ( $key % 2 == 0 ) : ?>
                            </div>
                            <div class="speaker-row-outer">
                        <?php endif; ?>
                    <?php endif; ?>

                <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>

<!---------------- End Speakers Section ------------------>
<!--'url(--><?php //echo wp_get_attachment_image_url( $cta_bg_image, 'profile' ); ?><!--)'-->
<!--linear-gradient(rgba(0, 96, 160, 0.69), rgba(4, 74, 121, 0.92) ),-->
<!---------------- CTA Section ------------------>
<?php if ( $cta_bg_image == '' ) : ?>
    <section id="Credits">
<?php else : ?>
    <section id="Credits" style="background: linear-gradient(rgba(0, 96, 160, 0.69), rgba(4, 74, 121, 0.92) ), url('<?php echo wp_get_attachment_image_url( $cta_bg_image, "profile" ); ?>') no-repeat center; background-size: cover;" >
<?php endif; ?>
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l12">
                <h5><span><?php echo $cta_title; ?></span><br><?php echo $cta_subtitle; ?></h5>
                <a href="<?php echo $register_url; ?>" target="_blank"><button class="z-depth-2 hoverable">Register Now</button></a>
                <?php if ( $cta_phone_number != '' ) : ?>
                    <div class="call"><span><a href="tel:8005982018">Call Us! <?php echo $cta_phone_number; ?></a></span></div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<!---------------- End CTA Section ------------------>

<?php if ($event_category == 'Webinar') : ?>

<?php elseif ( $event_category == 'Tradeshow' ) : ?>

<?php elseif ( $event_category == 'Speaker') : ?>

<?php endif ?>

<?php get_footer(); ?>
<!-- 
<footer class="center-align">
    <ul>
        <li><a href="https://www.facebook.com/DoctorGeniusMarketing" target="_blank"><i class="fa fa-facebook-square fa-2x"></i></a></li>
        <li><a href="https://twitter.com/DoctorGeniusCA" target="_blank"><i class="fa fa fa-twitter-square fa-2x"></i></a></li>
        <li><a href="https://plus.google.com/+DoctorGenius" target="_blank"><i class="fa fa-google-plus-square fa-2x"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos" target="_blank"><i class="fa fa-youtube-square fa-2x"></i></a></li>
    </ul>
    <a href="https://doctorgenius.com/events/"><img src="/wp-content/uploads/events/091817/logo-header.png"></a>
    <div class="copyright">&copy;2017 Doctor Genius. All Rights Reserved.</div>
</footer>
-->

<?php
    function add_scripts_and_styles() {
        wp_enqueue_script('jquery');
        wp_enqueue_script('archive_events_materialize', get_template_directory_uri() . '/assets/events/template/js/materialize.min.js', array('jquery'), false, false);
//      wp_enqueue_script('archive_events_plugins', get_template_directory_uri() . '/assets/events/template/js/dg_plugins.js', array('jquery'), false, true);

        wp_enqueue_style('materialize_css', get_template_directory_uri() . '/assets/events/2018-03-01/css/materialize.css');
        wp_enqueue_style('fontawesome_css', get_template_directory_uri() . '/assets/burkhart/font-awesome.css');
        wp_enqueue_style('stylesheet_css', get_template_directory_uri() . '/assets/events/2018-03-01/css/style.css');
        wp_enqueue_style('footer_stylesheet_css', get_template_directory_uri() . '/style.css');
        wp_enqueue_style('footer_style_css', get_template_directory_uri() . '/v1.custom.css');

//    <link type="text/css" rel="stylesheet" href="/wp-content/themes/doctor-genius/assets/events/2018-03-01/css/materialize.css"  media="screen,projection"/>
//    <link type="text/css" rel="stylesheet" href="/wp-content/themes/doctor-genius/assets/burkhart/font-awesome.css"  media="screen,projection"/>
//    <link type="text/css" rel="stylesheet" href="/wp-content/themes/doctor-genius/assets/events/2018-03-01/css/style.css"  media="screen,projection"/>

    }
?>

<!--Import jQuery before materialize.js-->
<!--<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>-->
<!--<script type="text/javascript" src="/wp-content/themes/doctor-genius/assets/events/2018-03-01/js/materialize.js"></script>-->

<script>
    jQuery(document).ready(function($) {
        $(document).on("scroll", function(){
            if
            ($(document).scrollTop() > 100){
                $("header").addClass("shrink");
            }
            else
            {
                $("header").removeClass("shrink");
            }
        });

        $('.scrollspy').scrollSpy();
    });
</script>


<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '104636126629005');
    fbq('track', 'PageView');
</script>
<noscript>
    <img height="1" width="1"
         src="https://www.facebook.com/tr?id=104636126629005&ev=PageView
        &noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
</body>
</html>