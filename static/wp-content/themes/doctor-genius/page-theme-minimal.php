<?php
/**
 * Template Name: Theme Minimal
 */
?>

<?php

add_action('wp_enqueue_scripts', 'minimal_enqueue_scripts');
$privacy_policy_page = get_page_by_title( 'Privacy Policy' );
$privacy_policy_page = $privacy_policy_page->ID;
$terms_of_service_page = get_page_by_title( 'Terms Of Service' );
$terms_of_service_page = $terms_of_service_page->ID;
$acceptable_use_policy = get_page_by_title( 'Electronic Communications and Acceptable Use Policy' );
$acceptable_use_policy = $acceptable_use_policy->ID;

?>


<?php global $post; ?>

<head>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <title>Doctor Genius | <?php echo the_title(); ?></title>
<!--    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>-->

    <meta charset="UTF-8">


    <!---------------------------------------- Begin Top Navigation Content ----------------------------------------------->
    <!--  @TODO All of this content is added from the top navigation page. This content needs to be put into it's own file in the future to be easier to maintain. -->
    <!-- Google Tag Manager -->
    <script defer>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-52SPGC');</script>
    <!-- End Google Tag Manager -->

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="googlebot" content="all" />
    <meta name="robots" content="index,follow" />
    <meta name="revisit-after" content="1 days">
    <meta http-equiv="Expires" content="0">

    <meta name="revised" content="<?php echo date('l');?>, <?php echo date('F');?> <?php echo date('d');?>, <?php echo date('Y');?>, <?php echo date('g');?>:<?php echo date('i');?> <?php echo date('A');?>" />

    <meta itemprop="name" content="Doctor Genius" />
    <meta itemprop="url" content="https://www.doctorgenius.com" />
    <meta name="identifier-URL" content="https://www.doctorgenius.com">

    <meta name="author" content="Doctor Genius">
    <meta property="og:locale" content="en_US" />
    <meta http-equiv="content-language" content="en" />
    <!--<meta name="keywords" content="Doctor Genius, Office, Developers, Google Certified Developer, Google Adwords Specialist">-->
    <meta name="subject" content="Online Marketing for Medical and Health Professionals">
    <meta name="copyright" content="Doctor Genius">
    <meta name="language" content="EN">
    <meta itemprop="logo" src="/wp-content/uploads/2016/07/doctor-genius.com-color.png" />

    <meta name="reply-to" content="support@doctorgenius.com">

    <meta itemprop="AddressLocality" content="2121 Alton Pkwy" />
    <meta itemprop="AddressLocality" content="Irvine" />
    <meta itemprop="addressRegion" content="CA" />
    <meta itemprop="postalCode" content="92606" />

    <meta itemprop="telephone" content="(877) 477-2311" />
    <meta itemprop="latitude" content="33.6945344" />
    <meta itemprop="longitude" content="117.841989" />
    <meta property="fb:page_id" content="1602017503374818" />

    <meta name="coverage" content="Worldwide">
    <meta name="distribution" content="Global">

    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo site_url(); ?>/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo site_url(); ?>/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo site_url(); ?>/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo site_url(); ?>/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo site_url(); ?>/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo site_url(); ?>/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo site_url(); ?>/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo site_url(); ?>/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo site_url(); ?>/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo site_url(); ?>/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo site_url(); ?>/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo site_url(); ?>/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo site_url(); ?>/favicon-16x16.png">

    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

<!--    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>-->

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!--    <link href="/wp-content/themes/doctor-genius/assets/css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>-->
    <link href="<?php echo get_template_directory_uri() . '/style.css'; ?>" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="<?php echo get_template_directory_uri() . '/v1.custom.css'; ?>" type="text/css" rel="stylesheet" media="screen,projection"/>


    <style>
        nav { background-color:#009688; }
        #top-ban { background:#009688;color: white;padding: 10px 15px;line-height: 16.8px;font-size:16px;font-weight:300;font-family:"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif; }
        #top-ban b { font-weight:500; }
        i.fa.fa-calendar-check-o { margin-right:12px;height:20px; }
        i.fa.fa-times { float:right; }
        .hide { display: none!important; }

        @media (max-width:600px){
            .s0{display:none!important;}
        }
        @media (min-width:601px) and (max-width:991px){
            .m0{display:none!important;}
            span#home{display:none;}
        }
        @media (min-width:992px){
            .l0{display:none!important;}
        }
    </style>
    <!---------------------------------------- End Top Navigation Content ----------------------------------------------->

    <?php wp_head(); ?>
</head>

<body>
<!--------------------------------------- Start of Top Navigation body content --------------------------------------------->
<!----- @TODO all of this content needs to be separated into it's own file. It's taken from includes/top-navigation.php ----->
<div class="navbar-fixed">
    <nav>
        <!--
         <div id="top-ban">
           <div class="container center-align">
              <a href="https://doctorgenius.com/events/business-dentistry-2017-08-04/">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i><b><span style="text-transform:uppercase;color:yellow;">Attention</span> So Cal Dental Professionals!</b>  Attend Our Dental Mastermind's "Business of Dentistry" and Earn 7 CE Credits. Learn More...</a>
                  <a href="#" onclick="myFunction()"><i class="fa fa-times" ></i></a>
             </div>
         </div>
       -->
        <div class="nav-wrapper">
            <div class="container-MainNav">
                <div class="logo">
                    <a href="/"><img src="<?php echo get_template_directory_uri() . '../../../uploads/2016/07/logo-doctorgenius.png'; ?>" title="Doctor Genius Home" alt="Doctor Genius Home"></a>
                </div>
                <a href="#" data-activates="mobile-demo" class="right button-collapse-MainNav"><i class="material-icons">menu</i></a>
                <ul class="main-nav right hide-on-med-and-down-MainNav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/marketing-solutions/">Marketing Solutions</a></li>
                    <li><a href="/our-technology/">Our Technology</a></li>
                    <li><a href="/plans/">Plans</a></li>
                    <li><a href="/the-study/">The Study</a></li>
                    <li><a href="/demo/" target="_blank">Request Demo</a></li>
                    <li>
                        <a href="tel:+1-877-477-2311" class="main-btn red accent-2 waves-effect waves-red btn hoverable"><i class="material-icons left">call</i>(877) 477-2311</a>
                    </li>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <li class="side-nav-logo"><img src="/wp-content/uploads/2016/07/logo-doctorgenius.png" title="Doctor Genius Home" alt="Doctor Genius Home"></li>
                    <li>
                        <a href="tel:+1-877-477-2311" class="red accent-2 waves-effect waves-red btn"><i class="material-icons white-text left">call</i>(877) 477-2311</a>
                    </li>
                    <!--
                    <li class="side-nav-teal"><a href="/">Home</a></li>
                    <li class="side-nav-red"><a href="/marketing-solutions/">Marketing Solutions</a></li>
                    <li class="side-nav-purple"><a href="/our-technology/">Our Technology</a></li>
                    <li class="side-nav-yellow"><a href="/plans/">Plans</a></li>
                    <li class="side-nav-green"><a href="/the-study/">The Study</a></li>
                    <li class="side-nav-blue"><a href="/demo/" target="_blank">Request Demo</a></li>

                    -->
                    <li><a href="/">Home</a></li>
                    <li><a href="/marketing-solutions/">Marketing Solutions</a></li>
                    <li><a href="/our-technology/">Our Technology</a></li>
                    <li><a href="/plans/">Plans</a></li>
                    <li><a href="/the-study/">The Study</a></li>
                    <li><a href="/demo/" target="_blank">Request Demo</a></li>

                </ul>
            </div>
        </div>
        <div class="stripes">
            <div class="row">
                <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
            </div>
        </div>
    </nav>
</div>

<section class="hero center">
    <div class="container">
        <!--        TODO Grab this from the featured image     -->
        <?php if ( has_post_thumbnail( $post->ID ) ) {
            $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' );
        } else { // Could make this a default image in case one isn't selected
            $image[0] = get_template_directory_uri() . '/assets/img/legal/hero-private-policy.jpg';
        } ?>

        <img src="<?php echo $image[0] ?>" alt="<?php echo get_post_meta( get_post_thumbnail_id( $post->ID), '_wp_attachment_image_alt', true); ?>" title="<?php echo get_the_title( get_post_thumbnail_id( $post->ID )); ?>" />
        <!--            <img src="img/hero-private-policy.jpg" alt="">-->
        <h1>
            <?php the_title(); ?>
<!--            --><?php //if ( is_page( $privacy_policy_page ) || is_page( $terms_of_service_page ) || is_page( $acceptable_use_policy )) : ?><!--<br><span>Effective Date: October 24, 2018</span>--><?php //endif; ?>
            <br><span>Effective Date: October 26, 2018</span>
        </h1>

    </div>
</section>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php the_content(); ?>
<?php endwhile; else : ?>
    <?php echo 'Error: no post content found.'; ?>
<?php endif; ?>

</body>

<?php get_footer();?>

<?php function minimal_enqueue_scripts () {
    wp_register_style('materialize_css', get_template_directory_uri() . '/assets/events/template/css/materialize.css');
    wp_register_style('theme_min_css', get_template_directory_uri() . '/assets/css/legal/theme-min.css', array('materialize_css'));

    wp_enqueue_style('materialize_css');
    wp_enqueue_style('theme_min_css');
}
?>
