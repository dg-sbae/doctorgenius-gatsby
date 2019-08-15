<?php
/**
 * Template Name: Study
 */
?>

<?php get_template_part( 'includes/top-navigation'); ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<span itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><meta itemprop="title" content="Hyper-Local" /><meta itemprop="url" content="https://doctorgenius.com/marketing-solutions/#hyper-local" /></span>
<span itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><meta itemprop="title" content="Digital Landscape" /><meta itemprop="url" content="https://doctorgenius.com/#digital-landscape" /></span>




<link href="/wp-content/themes/doctor-genius/assets/css/blog.css" type="text/css" rel="stylesheet" media="screen,projection"/>

<style>

/* common */
body {margin:0;padding:0; }
a { color:inherit; }
#Blog img { width:100%; }
#Blog .container { max-width:1280px!important; }
.pad-10 { padding:10px 0 0 0; }
.pad-25 { padding:25px 0 0 0; }
span.grey-icon { font-size:.7em;font-weight:bold;color:#000;background:#e5e5e5;padding:5px 15px;border-radius:10px;margin:0 0 0 10px; }
input.center { width:90%; }
.box-radius { border-radius:10px;border:10px solid #f1f0f0; }
.tabs a.active { background-color:#272d4e;color:#fff; }
.divider { margin-bottom:20px; }

/* base */
#Hero { margin:30px 0 0 0 ;}
#Hero .row { margin-bottom:5px; }

#TrendPost { margin-top:15px; }
#TrendPost span.grey-icon { display:inline-block;margin:10px 0 0 0;padding:4px 10px;  }
#TrendPost h2 {font-size:1.5em;font-weight:400;margin:.5rem 0;}

#RecentPost .post-date { font-size:.8em;color:#6b6b6b;display:inline-block; }
#RecentPost span.author { color:#000; }
#RecentPost span.category a { display:inline-block;font-size:.8em;font-weight:bold;margin:0;background:#e5e5e5;border-radius:20px;padding:5px 20px;margin-left:10px; }
#RecentPost .post-tag { font-size:.8em;margin:5px 0; }
#RecentPost .post-title { font-size:1.2em;width:95%; }
#RecentPost .post-thumbnail img { width:100%;height:auto;margin:0;padding:0; }
.post-snippet { font-size:14px;padding:0;margin:.5em 0; }
#RecentPost h2 {font-size:1.1em;font-weight:500;margin:.5em 0; }
#RecentPost .post-social ul { margin:.5rem 0 0 0;  }
#RecentPost .post-social li { display:inline-block;width:22px;height:22px;border-radius:10px;background:#ccc;margin-right:5px; }
#RecentPost .moretag { font-weight:bold;color:#ff5252; }
#RecentPost .prev-posts-link a, #RecentPost .next-posts-link a { text-decoration: none;color: #fff;background:#26a69a;text-align: center;letter-spacing: .5px;transition: .2s ease-out;cursor: pointer;border: none;          border-radius: 2px;display: inline-block;height: 36px;line-height: 36px;outline: 0;padding: 0 2rem;text-transform: uppercase;vertical-align: middle;-webkit-tap-highlight-color: transparent;box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); }

#RecentPost .prev-next-posts { border-top:1px solid #ccc;padding-top:15px;width:90%; }
#RecentPost .prev-posts-link, #RecentPost .next-posts-link { display:inline-block; }
#RecentPost .prev-posts-link { padding-right:10px; }

#PopularPost .post-date { font-size:10px;color:#ccc; }
#PopularPost .post-tag {font-size:10px;margin:5px 0; }
#PopularPost .post-title {font-size:18px;width:95%; }
#PopularPost .post-thumbnail { width:100%;height:150px;margin:0;padding:0;background:#e5e5e5; }
#PopularPost h2 {font-size:16px;margin:.5em 0 0 0; }
#PopularPost .post-social ul {  }
#PopularPost .post-social ul li { display:inline-block;width:22px;height:22px;border-radius:10px;background:#ccc; }

#SideBar h2 { font-size:18px;margin:10px 0;font-weight:500; }
#SideBar h3 { font-size:24px;font-weight:500;margin:5px 0; }
#SideBar h6 { margin:0;padding:0; }
#SideBar .newsletter { border-radius: 20px; }
#SideBar .ad-image { padding:0 5%; }
#SideBar .ad-image img { display:block;border:5px solid #f1f0f0;margin-top:12%;}
#SideBar .tags-label { margin:20px 0 0; }
#SideBar .archive li { border-bottom:1px dotted #ccc;color:#7b7b7b;font-weight:300;font-size:14px;list-style-type:none;padding:10px 0; }

nav.prev-next-posts { background-color:#fff;box-shadow:0 0; }
.prev-posts-link a, .next-posts-link a { color:inherit;padding:0 10px; }

/* pagination */
#RecentPost .pagination { background-color:transparent;box-shadow:none;border-top:1px solid #dedede;text-align:center; }
#RecentPost .pagination li a, .pagination li i, .pagination span.page-numbers .current { font-size:1em;color:#273580; }
#RecentPost .pagination .current { color:#ff5252;background:#f1f1f1;padding:5px 10px;border-radius:100px; }
#RecentPost ul.page-numbers { display:inline-block;margin:0 auto; }
#RecentPost nav i { height:auto; }
#RecentPost nav ul a:hover { color:#ff5252;background:transparent;padding:10px; }

 #_form_1_ { font-size:14px; line-height:1.6; font-family:arial, helvetica, sans-serif; margin:0; }
 #_form_1_ * { outline:0;text-align:center;color:#fff; }
 ._form_hide { display:none; visibility:hidden; }
 ._form_show { display:block; visibility:visible; }
 #_form_1_._form-top { top:0; }
 #_form_1_._form-bottom { bottom:0; }
 #_form_1_._form-left { left:0; }
 #_form_1_._form-right { right:0; }
 #_form_1_ input[type="text"],#_form_1_ input[type="date"],#_form_1_ textarea { padding:12px; height:auto;background-color:#fff;color:#000 !important; font-size:18px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; }
 #_form_1_ textarea { resize:none; }
 #_form_1_ ._submit { -webkit-appearance:none; cursor:pointer; font-family:arial, sans-serif; font-size:18px;text-align:center;border:0px !important; background:#ff5252 !important; border-radius:40px; -moz-border-radius:40px !important; -webkit-border-radius:40px !important; border-radius:40px !important; color:#fff !important; padding:8px 60px !important; }
 #_form_1_ ._close-icon { cursor:pointer; background-image:url('https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png'); background-repeat:no-repeat; background-size:14.2px 14.2px; position:absolute; display:block; top:11px; right:9px; overflow:hidden; width:16.2px; height:16.2px; }
 #_form_1_ ._close-icon:before { position:relative; }
 #_form_1_ ._form-body { margin-bottom:30px; }
 #_form_1_ ._form-image-left { width:150px; float:left; }
 #_form_1_ ._form-content-right { margin-left:164px; }
 #_form_1_ ._form-branding { color:#fff; font-size:10px; clear:both; text-align:left; margin-top:20px; font-weight:100; }
 #_form_1_ ._form-branding ._logo { display:block; width:130px; height:14px; margin:10px auto 0 auto; background-image:url('https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png'); background-size:130px auto; background-repeat:no-repeat;text-align:center; }
 #_form_1_ ._form-label,#_form_1_ ._form_element ._form-label { font-weight:400; margin-bottom:5px; display:block;color:#fff; }
 #_form_1_._dark ._form-branding { color:#333; }
 #_form_1_._dark ._form-branding ._logo { background-image:url('https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png'); }
 #_form_1_ ._form_element { position:relative; margin-bottom:10px; font-size:0; max-width:100%; }
 #_form_1_ ._form_element * { font-size:18px;line-height:22px;font-weight:100; margin-bottom:0;text-align:center;color:#cacaca;font-family:'Roboto'; }
 #_form_1_ ._form_element._clear { clear:both; width:100%; float:none; }
 #_form_1_ ._form_element._clear:after { clear:left; }
 #_form_1_ ._form_element input[type="text"],#_form_1_ ._form_element input[type="date"],#_form_1_ ._form_element select,#_form_1_ ._form_element textarea:not(.g-recaptcha-response) { display:block; width:100%; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; }
 #_form_1_ ._field-wrapper { position:relative;padding:10px 0; }
 #_form_1_ ._inline-style { width:100%;}
 #_form_1_ ._inline-style input[type="text"] { width:150px; }
 #_form_1_ ._inline-style:not(._clear) + ._inline-style:not(._clear) { margin-left:0px; }
 #_form_1_ ._form_element img._form-image { max-width:100%; }
 #_form_1_ ._clear-element { clear:left; }
 #_form_1_ ._full_width { width:100%;text-align:center; }
 #_form_1_ ._form_full_field { display:block; width:100%; margin-bottom:10px; }
 #_form_1_ input[type="text"]._has_error,#_form_1_ textarea._has_error { border:#f37c7b 1px solid; }
 #_form_1_ input[type="checkbox"]._has_error { outline:#f37c7b 1px solid; }
 #_form_1_ ._error { display:block; position:absolute; font-size:13px; z-index:10000001; }
 #_form_1_ ._error._above { padding-bottom:4px; top:-41px; right:0; }
 #_form_1_ ._error._below { padding-top:4px; top:100%; right:0; }
 #_form_1_ ._error._above ._error-arrow { bottom:0; right:15px; border-left:5px solid transparent; border-right:5px solid transparent; border-top:5px solid #f37c7b; }
 #_form_1_ ._error._below ._error-arrow { top:0; right:15px; border-left:5px solid transparent; border-right:5px solid transparent; border-bottom:5px solid #f37c7b; }
 #_form_1_ ._error-inner { padding:8px 12px; background-color:#f37c7b; font-size:13px; font-family:arial, sans-serif; color:#fff; text-align:center; text-decoration:none; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; }
 #_form_1_ ._error-inner._form_error { margin-bottom:5px; text-align:left; }
 #_form_1_ ._button-wrapper ._error-inner._form_error { position:static; }
 #_form_1_ ._error-inner._no_arrow { margin-bottom:10px; }
 #_form_1_ ._error-arrow { position:absolute; width:0; height:0; }
 #_form_1_ ._error-html { margin-bottom:10px; }
 .pika-single { z-index:10000001 !important; }
  #_form_1_ ._submit:hover { background:black; }
 
 @media all and (min-width:320px) and (max-width:667px) { ::-webkit-scrollbar { display:none; }
 #_form_1_ { margin:0; width:100%; min-width:100%; max-width:100%; box-sizing:border-box; }
 #_form_1_ * { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-size:1em; }
 #_form_1_ ._form-content { margin:0; width:100%; }
 #_form_1_ ._form-inner { display:block; min-width:100%; }
 #_form_1_ ._form-title,#_form_1_ ._inline-style { margin-top:0; margin-right:0; margin-left:0; }
 #_form_1_ ._form-title { font-size:1.2em; }
 #_form_1_ ._form_element { margin:0 0 20px; padding:0; width:100%; }
 #_form_1_ ._form-element,#_form_1_ ._inline-style,#_form_1_ input[type="text"],#_form_1_ label,#_form_1_ p,#_form_1_ textarea:not(.g-recaptcha-response) { float:none; display:block; width:100%; }
 #_form_1_ ._row,#_form_1_ p,#_form_1_ label { margin-bottom:0.7em; width:100%; }
 #_form_1_ ._row input[type="checkbox"],#_form_1_ ._row input[type="radio"] { margin:0 !important; vertical-align:middle !important; }
 #_form_1_ ._row input[type="checkbox"] + span label { display:inline; }
 #_form_1_ ._row span label { margin:0 !important; width:initial !important; vertical-align:middle !important; }
 #_form_1_ ._form-image { max-width:100%; height:auto !important; }
 #_form_1_ input[type="text"] { padding-left:10px; padding-right:10px; font-size:16px; line-height:1.3em; -webkit-appearance:none; }
 #_form_1_ input[type="radio"],#_form_1_ input[type="checkbox"] { display:inline-block; width:1.3em; height:1.3em; font-size:1em; margin:0 0.3em 0 0; vertical-align:baseline; }
 #_form_1_ button[type="submit"] { padding:20px; font-size:1.5em; }
 #_form_1_ ._inline-style { margin:20px 0 0 !important; }
 }
 #_form_1_ { position:relative; text-align:left; margin:25px auto 0; padding:20px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; *zoom:1; border-top:5px solid #f8981d !important; width:90%; -moz-border-radius:0px !important; -webkit-border-radius:0px !important; border-radius:0px !important; color:#000 !important;
background: rgb(62,70,124) !important;
background: -moz-linear-gradient(top, rgb(62,70,124) 1%, rgb(39,45,78) 100%) !important;
background: -webkit-linear-gradient(top, rgb(62,70,124) 1%,rgb(39,45,78) 100%) !important;
background: linear-gradient(to bottom, rgb(62,70,124) 1%,rgb(39,45,78) 100%) !important;
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e467c', endColorstr='#272d4e',GradientType=0 !important );
  }
 #_form_1_ ._form-title { font-size:34px; line-height:40px; font-weight:300; margin-bottom:0;text-align:center;color:#fff;font-family:'Roboto'; }
 #_form_1_:before,#_form_1_:after { content:" "; display:table; }
 #_form_1_:after { clear:both; }
 #_form_1_._inline-style { width:auto; display:inline-block; }
 #_form_1_._inline-style input[type="text"],#_form_1_._inline-style input[type="date"] { padding:15px 12px;width:100%; }
 #_form_1_._inline-style button._inline-style { position:relative; top:27px; }
 #_form_1_._inline-style p { margin:0; }
 #_form_1_._inline-style ._button-wrapper { position:relative; margin:20px 0 15px 0; }
 #_form_1_ ._form-thank-you { position:relative; left:0; right:0; text-align:center; font-size:18px; }
 @media all and (min-width:320px) and (max-width:667px) { #_form_1_._inline-form._inline-style ._inline-style._button-wrapper { margin-top:20px !important; margin-left:0 !important; }
 }


@media only screen and (max-width: 600px) {
  .container { width:95%!important; }
  #Hero { display:none; }
  #TrendPost { display:none; }
  #MobileTrendPost .container { width:100%!important; }
  #SideBar { margin-top:20px; }
  #RecentPost h2 {font-size:14px; }
  #RecentPost .post-snippet { display:none; }  
  #RecentPost .post-social ul li { width:20px;height:20px; } 
  #RecentPost span.author { display:none; }
  #RecentPost .prev-posts-link, #RecentPost .next-posts-link { display:inline-block; }
  #RecentPost .prev-next-posts { width:100%; }
  .row .col { padding:0 10px; }
  #RecentPost .prev-next-posts { text-align:center; }
  #RecentPost .prev-posts-link a, #RecentPost .next-posts-link a { padding:0 20px; }
  #RecentPost .post-date { font-size:1em; }
}

@media only screen and (min-width: 870px) {
  .tabs { width:35%!important;margin:0; }


}

@media only screen and (min-width: 600px) {
  #MobileTrendPost { display:none; }


}
  

</style>

<body>

 <div id="Blog">
      <div id="Hero">
         <div class="container">
            <div class="row">
               <div class="col s12 m12 l12 hero"><a href="/the-study/"><img src="/wp-content/uploads/2016/08/hero-01-image.jpg" class="z-depth-1" title="image" alt="image"></a></div>
            </div>
         </div>
      </div>   

      <div id="TrendPost" class="container">
         <div class="row">
            <div class="col s12 m4 l4">
               <a href="/category/digital-marketing/"><img src="/wp-content/uploads/2016/08/trend-01-image.jpg" class="z-depth-1" title="image" alt="image"></a>
               <!-- <span class="grey-icon">Products</span> -->
               <!-- <h2><a href="/learn-basic-seo/">Digital Marketing</a></h2> -->
            </div>
            <div class="col s12 m4 l4">
               <a href="/category/practice-management/"><img src="/wp-content/uploads/2016/08/trend-02-image.jpg" class="z-depth-1" title="image" alt="image"></a>
               <!-- <span class="grey-icon">Products</span> -->
               <!-- <h2><a href="/blog-heartbeat-site/">Practice Management</a></h2> -->           
            </div>
            <div class="col s12 m4 l4">
               <a href="/category/genius-lab/"><img src="/wp-content/uploads/2016/08/trend-03-image.jpg" class="z-depth-1" title="image" alt="image"></a>
               <!-- <span class="grey-icon">Products</span> -->
               <!-- <h2><a href="/category/practice-management/">Genius Lab</a></h2> -->
            </div>
        </div>
      </div>

      <div id="MobileTrendPost">
         <div class="container">
            <div class="row">
              <div class="slider">
                <ul class="slides">
                  <li>
                    <a href="/category/digital-marketing/"><img src="/wp-content/uploads/2016/08/trend-01-image.jpg" alt="image"></a>
                    <div class="caption center-align">
                      <a href="/category/digital-marketing/"></a>
                    </div>
                  </li>
                  <li>
                    <a href="/category/practice-management/"><img src="/wp-content/uploads/2016/08/trend-02-image.jpg"></a>
                    <div class="caption right-align">
                      <a href="/category/practice-management/"></a>
                    </div>
                  </li>
                  <li>
                    <a href="/category/genius-lab/"><img src="/wp-content/uploads/2016/08/trend-03-image.jpg"></a>
                    <div class="caption center-align">
                      <a href="/category/genius-lab/"></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
         </div>
      </div>
   <div class="container pad-25">
      <div class="row">
         <div class="col s12 m12 l8">
            <div class="row">
               <div class="col s12 m12 l11">
                  <ul class="tabs">
                     <li class="tab col s3"><a class="active" href="#RecentPost">Recent Post</a></li>
                     <!-- <li class="tab col s3"><a href="#PopularPost">Popular Post</a></li> -->
                  </ul>
               <div class="divider"></div>                  
               </div>

               <div id="RecentPost" class="col s12 m12 l12">
       
                              <?php
                              if ( get_query_var('paged') ) {
                                 $paged = get_query_var('paged');
                              } elseif ( get_query_var('page') ) { // 'page' is used instead of 'paged' on Static Front Page
                                 $paged = get_query_var('page');
                              } else {
                                 $paged = 1;
                              }
                               
                              $custom_query_args = array(
                                 'post_type' => 'post', 
                                 'posts_per_page' => get_option('posts_per_page'),
                                 'paged' => $paged,
                                 'post_status' => 'publish',
                                 'ignore_sticky_posts' => true,
                                 //'category_name' => 'custom-cat',
                                 'order' => 'DESC', // 'ASC'
                                 'orderby' => 'date' // modified | title | name | ID | rand
                              );
                              $custom_query = new WP_Query( $custom_query_args );
                               
                              if ( $custom_query->have_posts() ) :
                                 while( $custom_query->have_posts() ) : $custom_query->the_post(); ?>
                               
                               <article>
                                  <div class="row pad-10">
                                     <div class="col s6 m4 l4">
                                       <div class="post-thumbnail">
                                            <!--Featured Image -->
                                             <?php if ( has_post_thumbnail() ) : ?>
                                             <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                                             <img src="<?php the_post_thumbnail_url(); ?>"/></a>
                                             <?php endif; ?>
                                       </div>
                                     </div>
                                      <div class="col s6 m8 l7">
                                             <div class="post-date">

                                                <?php the_time( 'm-d-Y' ); ?> 
                                                <span class="author">by <?php the_author(); ?></span>
                                                <span class="category hide-on-small-only " target="_blank"><?php foreach((get_the_category()) as $category) {       
                                                echo '<a href="'. esc_url( get_category_link ( $category->cat_ID ) ) .'" title="'. $category->cat_name . '">'. $category->cat_name .'</a>';
                                                  } ?></span>

                                             </div>
                                             
                                             <div class="post-title"><h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2></div>
                                             <div class="post-snippet"><?php the_excerpt(); ?></div>
                                             <div class="post-social">
                                                <ul>
 <li class="waves-effect waves-light"><a href="https://www.facebook.com/DoctorGeniusMarketing" target="_blank"><img src="/wp-content/uploads/2016/08/icon-social-facebook.png" title="facebook" alt="facebook"></a></li>
 <li class="waves-effect waves-light"><a href="https://twitter.com/DoctorGeniusCA" target="_blank"><img src="/wp-content/uploads/2016/08/icon-social-twitter.png" title="twitter" alt="twitter"></a></li>
 <li class="waves-effect waves-light"><a href="https://plus.google.com/+DoctorGenius" target="_blank"><img src="/wp-content/uploads/2016/08/icon-social-googleplus.png" title="google plus" alt="google plus"></a></li>
 <li class="waves-effect waves-light"><a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos" target="_blank"><img src="/wp-content/uploads/2016/08/icon-social-youtube.png" title="youtube" alt="youtube"></a></li>
                                                </ul>
                                             </div>               
                                       </div>
                                   </div>
                              </article>

                                 <?php
                                 endwhile;
                                 ?>
                               
                                 <?php if ($custom_query->max_num_pages > 0) : // custom pagination  ?>
                                    <?php
                                    $orig_query = $wp_query; // fix for pagination to work
                                    $wp_query = $custom_query;
                                    ?>
                                    <?php numeric_pagination(); ?>
                                    <?php
                                    $wp_query = $orig_query; // fix for pagination to work
                                    ?>
                                 <?php endif; ?>
                               
                              <?php
                                 wp_reset_postdata(); // reset the query 
                              else:
                                 echo '<p>'.__('Sorry, no posts matched your criteria.').'</p>';
                              endif;
                              ?>


                  </div><!-- End Recent Post -->
                 <!-- Popular Post <div id="PopularPost" class="col s12 m12 l12"></div> -->
            </div>


         </div>
         
         <div id="SideBar" class="col s12 m12 l4">
            <!-- Newsletter
            
            <div class="row box-radius grey lighten-4 pad-25">
               <h3 class="center">Subscribe Our Newsletter!</h3>
               <h6 class="center">Get The Latest News, Deals, and More</h6>
               <div class="newsletter center">
                  <formm>
                    <input type="text" class="center" name="firstname" placeholder="Email Address:">
                    <button class="btn btn-large waves-effect waves-light" type="button" name="action">Submit</button>
                  </form>
               </div>
            </div>
            -->

            <div class="row">
  
              <div style="text-align: center;">
                <form method="POST" action="https://doctorgenius.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form _inline-style _dark" novalidate>
                  <input type="hidden" name="u" value="1" />
                  <input type="hidden" name="f" value="1" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <div class="_form-content">
                    <div class="_form_element _x77845562 _inline-style _clear" >
                      <div class="_form-title">
                        The Study Newsletter
                      </div>
                    </div>
                    <div class="_form_element _x12223833 _inline-style _clear" >
                      <div class="_html-code">
                        <p>
                          Subscribe to our email newsletter for useful tips and valuable resources.
                        </p>
                      </div>
                    </div>
                    <div class="_form_element _x38995159 _inline-style " >
                      <div class="_field-wrapper">
                        <input type="text" name="email" placeholder="Type your email" required/>
                      </div>
                    </div>
                    <div class="_button-wrapper _inline-style">
                      <button id="_form_1_submit" class="_submit waves-effect waves-light z-depth-1" type="submit">
                        Submit
                      </button>
                    </div>
                    <div class="_clear-element">
                    </div>
                  </div>
                  <div class="_form-thank-you" style="display:none;">
                  </div>
                </form>
              </div>
              <script type="text/javascript">
              window.cfields = [];
              window._show_thank_you = function(id, message, trackcmp_url) {
                var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
                form.querySelector('._form-content').style.display = 'none';
                thank_you.innerHTML = message;
                thank_you.style.display = 'block';
                if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                  // Site tracking URL to use after inline form submission.
                  _load_script(trackcmp_url);
                }
                if (typeof window._form_callback !== 'undefined') window._form_callback(id);
              };
              window._show_error = function(id, message, html) {
                var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
                if (old_error) old_error.parentNode.removeChild(old_error);
                err.innerHTML = message;
                err.className = '_error-inner _form_error _no_arrow';
                var wrapper = document.createElement('div');
                wrapper.className = '_form-inner';
                wrapper.appendChild(err);
                button.parentNode.insertBefore(wrapper, button);
                document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
                if (html) {
                  var div = document.createElement('div');
                  div.className = '_error-html';
                  div.innerHTML = html;
                  err.appendChild(div);
                }
              };
              window._load_script = function(url, callback) {
                  var head = document.querySelector('head'), script = document.createElement('script'), r = false;
                  script.type = 'text/javascript';
                  script.charset = 'utf-8';
                  script.src = url;
                  if (callback) {
                    script.onload = script.onreadystatechange = function() {
                    if (!r && (!this.readyState || this.readyState == 'complete')) {
                      r = true;
                      callback();
                      }
                    };
                  }
                  head.appendChild(script);
              };
              (function() {
                if (window.location.search.search("excludeform") !== -1) return false;
                var getCookie = function(name) {
                  var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
                  return match ? match[2] : null;
                }
                var setCookie = function(name, value) {
                  var now = new Date();
                  var time = now.getTime();
                  var expireTime = time + 1000 * 60 * 60 * 24 * 365;
                  now.setTime(expireTime);
                  document.cookie = name + '=' + value + '; expires=' + now + ';path=/';
                }
                    var addEvent = function(element, event, func) {
                  if (element.addEventListener) {
                    element.addEventListener(event, func);
                  } else {
                    var oldFunc = element['on' + event];
                    element['on' + event] = function() {
                      oldFunc.apply(this, arguments);
                      func.apply(this, arguments);
                    };
                  }
                }
                var _removed = false;
                var form_to_submit = document.getElementById('_form_1_');
                var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

                var getUrlParam = function(name) {
                  var regexStr = '[\?&]' + name + '=([^&#]*)';
                  var results = new RegExp(regexStr, 'i').exec(window.location.href);
                  return results != undefined ? decodeURIComponent(results[1]) : false;
                };

                for (var i = 0; i < allInputs.length; i++) {
                  var regexStr = "field\\[(\\d+)\\]";
                  var results = new RegExp(regexStr).exec(allInputs[i].name);
                  if (results != undefined) {
                    allInputs[i].dataset.name = window.cfields[results[1]];
                  } else {
                    allInputs[i].dataset.name = allInputs[i].name;
                  }
                  var fieldVal = getUrlParam(allInputs[i].dataset.name);

                  if (fieldVal) {
                    if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
                      if (allInputs[i].value == fieldVal) {
                        allInputs[i].checked = true;
                      }
                    } else {
                      allInputs[i].value = fieldVal;
                    }
                  }
                }

                var remove_tooltips = function() {
                  for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                  }
                    tooltips = [];
                };
                var remove_tooltip = function(elem) {
                  for (var i = 0; i < tooltips.length; i++) {
                    if (tooltips[i].elem === elem) {
                      tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                      tooltips.splice(i, 1);
                      return;
                    }
                  }
                };
                var create_tooltip = function(elem, text) {
                  var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
                  if (elem.type != 'radio' && elem.type != 'checkbox') {
                    tooltip.className = '_error';
                    arrow.className = '_error-arrow';
                    inner.className = '_error-inner';
                    inner.innerHTML = text;
                    tooltip.appendChild(arrow);
                    tooltip.appendChild(inner);
                    elem.parentNode.appendChild(tooltip);
                  } else {
                    tooltip.className = '_error-inner _no_arrow';
                    tooltip.innerHTML = text;
                    elem.parentNode.insertBefore(tooltip, elem);
                    new_tooltip.no_arrow = true;
                  }
                  new_tooltip.tip = tooltip;
                  new_tooltip.elem = elem;
                  tooltips.push(new_tooltip);
                  return new_tooltip;
                };
                var resize_tooltip = function(tooltip) {
                  var rect = tooltip.elem.getBoundingClientRect();
                  var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
                  if (scrollPosition < 40) {
                    tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
                  } else {
                    tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
                  }
                };
                var resize_tooltips = function() {
                  if (_removed) return;
                  for (var i = 0; i < tooltips.length; i++) {
                    if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
                  }
                };
                var validate_field = function(elem, remove) {
                  var tooltip = null, value = elem.value, no_error = true;
                  remove ? remove_tooltip(elem) : false;
                  if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
                  if (elem.getAttribute('required') !== null) {
                    if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
                      var elems = form_to_submit.elements[elem.name];
                      no_error = false;
                      for (var i = 0; i < elems.length; i++) {
                        if (elems[i].checked) no_error = true;
                      }
                      if (!no_error) {
                        tooltip = create_tooltip(elem, "Please select an option.");
                      }
                    } else if (elem.type =='checkbox') {
                      var elems = form_to_submit.elements[elem.name], found = false, err = [];
                      no_error = true;
                      for (var i = 0; i < elems.length; i++) {
                        if (elems[i].getAttribute('required') === null) continue;
                        if (!found && elems[i] !== elem) return true;
                        found = true;
                        elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
                        if (!elems[i].checked) {
                          no_error = false;
                          elems[i].className = elems[i].className + ' _has_error';
                          err.push("Checking %s is required".replace("%s", elems[i].value));
                        }
                      }
                      if (!no_error) {
                        tooltip = create_tooltip(elem, err.join('<br/>'));
                      }
                    } else if (elem.tagName == 'SELECT') {
                      var selected = true;
                      if (elem.multiple) {
                        selected = false;
                        for (var i = 0; i < elem.options.length; i++) {
                          if (elem.options[i].selected) {
                            selected = true;
                            break;
                          }
                        }
                      } else {
                        for (var i = 0; i < elem.options.length; i++) {
                          if (elem.options[i].selected && !elem.options[i].value) {
                            selected = false;
                          }
                        }
                      }
                      if (!selected) {
                        no_error = false;
                        tooltip = create_tooltip(elem, "Please select an option.");
                      }
                    } else if (value === undefined || value === null || value === '') {
                      elem.className = elem.className + ' _has_error';
                      no_error = false;
                      tooltip = create_tooltip(elem, "This field is required.");
                    }
                  }
                  if (no_error && elem.name == 'email') {
                    if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
                      elem.className = elem.className + ' _has_error';
                      no_error = false;
                      tooltip = create_tooltip(elem, "Enter a valid email address.");
                    }
                  }
                  if (no_error && /date_field/.test(elem.className)) {
                    if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
                      elem.className = elem.className + ' _has_error';
                      no_error = false;
                      tooltip = create_tooltip(elem, "Enter a valid date.");
                    }
                  }
                  tooltip ? resize_tooltip(tooltip) : false;
                  return no_error;
                };
                var needs_validate = function(el) {
                  return el.name == 'email' || el.getAttribute('required') !== null;
                };
                var validate_form = function(e) {
                  var err = form_to_submit.querySelector('._form_error'), no_error = true;
                  if (!submitted) {
                    submitted = true;
                    for (var i = 0, len = allInputs.length; i < len; i++) {
                      var input = allInputs[i];
                      if (needs_validate(input)) {
                        if (input.type == 'text') {
                          addEvent(input, 'blur', function() {
                            this.value = this.value.trim();
                            validate_field(this, true);
                          });
                          addEvent(input, 'input', function() {
                            validate_field(this, true);
                          });
                        } else if (input.type == 'radio' || input.type == 'checkbox') {
                          (function(el) {
                            var radios = form_to_submit.elements[el.name];
                            for (var i = 0; i < radios.length; i++) {
                              addEvent(radios[i], 'click', function() {
                                validate_field(el, true);
                              });
                            }
                          })(input);
                        } else if (input.tagName == 'SELECT') {
                          addEvent(input, 'change', function() {
                            validate_field(input, true);
                          });
                        }
                      }
                    }
                  }
                  remove_tooltips();
                  for (var i = 0, len = allInputs.length; i < len; i++) {
                    var elem = allInputs[i];
                    if (needs_validate(elem)) {
                      if (elem.tagName.toLowerCase() !== "select") {
                        elem.value = elem.value.trim();
                      }
                      validate_field(elem) ? true : no_error = false;
                    }
                  }
                  if (!no_error && e) {
                    e.preventDefault();
                  }
                  resize_tooltips();
                  return no_error;
                };
                addEvent(window, 'resize', resize_tooltips);
                addEvent(window, 'scroll', resize_tooltips);
                window._old_serialize = null;
                if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;
                _load_script("//d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function() {
                  window._form_serialize = window.serialize;
                  if (window._old_serialize) window.serialize = window._old_serialize;
                });
                var form_submit = function(e) {
                  e.preventDefault();
                  if (validate_form()) {
                    // use this trick to get the submit button & disable it using plain javascript
                    document.querySelector('[id^="_form"][id$="_submit"]').disabled = true;
                          var serialized = _form_serialize(document.getElementById('_form_1_'));
                    var err = form_to_submit.querySelector('._form_error');
                    err ? err.parentNode.removeChild(err) : false;
                    _load_script('https://doctorgenius.activehosted.com/proc.php?' + serialized + '&jsonp=true');
                  }
                  return false;
                };
                addEvent(form_to_submit, 'submit', form_submit);
              })();

              </script>

            </div>

            <div class="row center">
             <div class="ad-image waves-effect waves-light"><a href="/demo/" target="_blank"><img src="/wp-content/uploads/2016/08/ad-image-03.jpg" alt="Doctor Genius Request Free Consultation" title="ads"></a></div>
            </div>
           
            <!-- Popular Tags-->
               <!-- <div class="row">
                      <h2>Popular Tags</h2>
                        <div class="tags-label">
                             <div class="chip">SEO
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Marketing
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Branding
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Design
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Web
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Doctor Genius
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Social Network
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Reviews
                               <i class="close material-icons">close</i>
                             </div>
                             <div class="chip">Adwords
                               <i class="close material-icons">close</i>
                             </div>
                        </div>
                  </div>
             -->

            <div class="row">
               <!--
                 <div class="archive">
                    <h2>Archives</h2>
                    <?php wp_get_archives(); ?>
                 </div>
               -->
            </div>            
         </div>
      </div>
   </div>
</div>







      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="/wp-content/themes/doctor-genius/assets/js/materialize.min.js"></script>

     <script>
       $(document).ready(function(){
         $('.slider').slider({
          full_width: false,
          interval:5000,
          transition:800,
          height:250,
         });

        });
    </script>

      <?php get_footer();?><!--Footer-->

</body>
