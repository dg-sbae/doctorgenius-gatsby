<?php
/**
 * Template Name: tag
 */
?>

<?php get_template_part( 'includes/top-navigation'); ?>

<link href="/wp-content/themes/doctor-genius/assets/css/blog.css" type="text/css" rel="stylesheet" media="screen,projection"/>

<style>

/* common */
body {margin:0;padding:0; }
a { color:inherit; }
#Blog img { width:100%; }
#Blog .container { max-width:1280px!important; }
.pad-10 { padding:10px 0; }
.pad-25 { padding:25px 0; }
span.grey-icon { font-size:.7em;font-weight:bold;color:#000;background:#e5e5e5;padding:5px 15px;border-radius:10px;margin:0 0 0 10px; }
input.center { width:90%; }
.box-radius { border-radius:10px;border:10px solid #f1f0f0; }
.tabs a.active { background-color:#3e4161;color:#fff; }
.tabs .tab a { color:; }

/* base */
#Hero { margin:10px 0;}

#TrendPost span.grey-icon { display:inline-block;margin:10px 0 0 0;padding:4px 10px;  }
#TrendPost h2 {font-size:1.5em;font-weight:400;margin:.5rem 0;}

#RecentPost .post-date { font-size:.8em;color:#6b6b6b;display:inline-block; }
#RecentPost span.category a{ display:inline-block;font-size:.8em;font-weight:bold;margin:0;background:#e5e5e5;border-radius:20px;padding:5px 20px;margin-left:10px; }
#RecentPost .post-tag { font-size:.8em;margin:5px 0; }
#RecentPost .post-title { font-size:1.2em;width:95%; }
#RecentPost .post-thumbnail img { width:100%;height:auto;margin:0;padding:0; }
#RecentPost .post-snippet p { font-size:14px;padding:0;margin:.5em 0; }
#RecentPost h2 {font-size:1.1em;font-weight:500;margin:.5em 0; }
#RecentPost .post-social ul { margin:.5rem 0 0 0;  }
#RecentPost .post-social ul li { display:inline-block;width:22px;height:22px;border-radius:10px;background:#ccc; }
#RecentPost .moretag { font-weight:bold;color:#ff5252; }
span.category-title { font-weight:300;text-transform:capitalize; }

#PopularPost .post-date { font-size:10px;color:#ccc; }
#PopularPost .post-tag {font-size:10px;margin:5px 0; }
#PopularPost .post-title {font-size:18px;width:95%; }
#PopularPost .post-thumbnail { width:100%;height:150px;margin:0;padding:0;background:#e5e5e5; }
#PopularPost h2 {font-size:16px;margin:.5em 0 0 0; }
#PopularPost .post-social ul li { display:inline-block;width:22px;height:22px;border-radius:10px;background:#ccc; }

#SideBar h2 { font-size:18px;margin:10px 0;font-weight:500; }
#SideBar h3 { font-size:24px;font-weight:500;margin:5px 0; }
#SideBar h6 { margin:0;padding:0; }
#SideBar .newsletter { border-radius: 20px; }
#SideBar .ad-image img { display:block;border:10px solid #f1f0f0;margin:6% 0;}
#SideBar .tags-label { margin:20px 0 0; }
#SideBar .archive li { border-bottom:1px dotted #ccc;color:#000;font-weight:500;font-size:12px;list-style-type:none;padding:10px 0; }

nav.prev-next-posts { background-color:#fff;box-shadow:0 0; }
.prev-posts-link a, .next-posts-link a { color:inherit; }

@media only screen and (max-width: 600px) {
  #Hero { display:none; }
  #TrendPost { display:none; }
  #MobileTrendPost .container { width:100%!important; }
  #SideBar { margin-top:20px; }
  #RecentPost h2 {font-size:14px; }
  #RecentPost .post-snippet { display:none; }  
  #RecentPost .post-social ul li { width:20px;height:20px; } 
  #RecentPost span.author { display:none; }

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
               <h2><a href="/category/digital-marketing/">Digital Marketing</a></h2>
            </div>
            <div class="col s12 m4 l4">
               <a href="/category/practice-management/"><img src="/wp-content/uploads/2016/08/trend-02-image.jpg" class="z-depth-1" title="image" alt="image"></a>
               <!-- <span class="grey-icon">Products</span> -->
               <h2><a href="/category/practice-management/">Practice Management</a></h2>            
            </div>
            <div class="col s12 m4 l4">
               <a href="/category/genius-lab/"><img src="/wp-content/uploads/2016/08/trend-03-image.jpg" class="z-depth-1" title="image" alt="image"></a>
               <!-- <span class="grey-icon">Products</span> -->
               <h2><a href="/category/genius-lab/">Genius Lab</a></h2>
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
                      <a href="/category/digital-marketing/"><h3>Learn the Basic Components of SEO</h3></a>
                    </div>
                  </li><!--
                  <li>
                    <a href="/blog-heartbeat-site/"><img src="/wp-content/uploads/2016/08/trend-02-image.jpg"></a>
                    <div class="caption left-align">
                      <a href="/blog-heartbeat-site/"><h3>A Blog is the Heartbeat of a Company Website</h3></a>
                    </div>
                  </li>-->
                  <li>
                    <a href="/category/practice-management/"><img src="/wp-content/uploads/2016/08/trend-03-image.jpg"></a>
                    <div class="caption right-align">
                      <a href="/category/practice-management/"><h3>What You Should Know About Call Tracking and SEO</h3></a>
                    </div>
                  </li>
                  <li>
                    <a href="/category/genius-lab/"><img src="/wp-content/uploads/2016/08/trend-04-image.jpg"></a>
                    <div class="caption center-align">
                      <a href="/category/genius-lab/"><h3>Local Searches Are on the Rise</h3></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
         </div>
      </div>


   <div class="container pad-25">
      <div class="row">
         <div class="col s12 m8 l8">
            <div class="row">
               <div class="col s12 m11 l11">
                  <ul class="tabs">
                     <li class="tab col s3"><a class="active" href="#RecentPost"><span class="category-title"></span> <?php single_cat_title(); ?></a></li>
                     <!-- <li class="tab col s3"><a href="#PopularPost">Popular Post</a></li> -->
                  </ul>
               <div class="divider"></div>                  
               </div>

               <div id="RecentPost" class="col s12 m12 l12">
       
                              <?php /*
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
                               */ ?>

                          <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                               
                               </article>
                                  <div class="row pad-25">
                                     <div class="col s6 m4 l4">
                                       <div class="post-thumbnail">
                                            <!--Featured Image -->
                                             <?php if ( has_post_thumbnail() ) : ?>
                                             <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                                             <img src="<?php the_post_thumbnail_url(); ?>"/></a>
                                             <?php endif; ?>
                                       </div>
                                     </div>
                                      <div class="col s6 m6 l7">
                                             <div class="post-date">

                                                <?php the_time( 'm.d.Y' ); ?> 
                                                <span class="author">by <?php the_author(); ?></span>
                                                <span class="category" target="_blank"><?php foreach((get_the_category()) as $category) {       
                                                echo '<a href="'. esc_url( get_category_link ( $category->cat_ID ) ) .'" title="'. $category->cat_name . '">'. $category->cat_name .'</a>';
                                                  } ?></span>

                                             </div>
                                             
                                             <div class="post-title"><h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2></div>
                                             <div class="post-snippet"><?php the_excerpt(); ?></div>
                                             <div class="post-social">
                                                <ul>
                                                   <li class="waves-effect waves-light"><a href="https://www.facebook.com/dentalgenius/"><img src="/wp-content/uploads/2016/08/icon-social-facebook.png" title="facebook" alt="facebook"></a></li>
                                                   <li class="waves-effect waves-light"><a href="https://twitter.com/DoctorGeniusCA"><img src="/wp-content/uploads/2016/08/icon-social-twitter.png" title="twitter" alt="twitter"></a></li>
                                                   <li class="waves-effect waves-light"><a href="https://plus.google.com/+DoctorGenius"><img src="/wp-content/uploads/2016/08/icon-social-googleplus.png" title="google plus" alt="google plus"></a></li>                                                   
                                                   <li class="waves-effect waves-light"><a href="https://www.youtube.com/channel/UC45xhqBrSlGgB0VAMr5Z0hQ"><img src="/wp-content/uploads/2016/08/icon-social-youtube.png" title="youtube" alt="youtube"></a></li> 
                                                </ul>
                                             </div>               
                                       </div>
                                   </div>
                              <article>
                               
                                 <?php
                                 endwhile;
                                 ?>
                               
                                 <?php if ($custom_query->max_num_pages > 1) : // custom pagination  ?>
                                    <?php
                                    $orig_query = $wp_query; // fix for pagination to work
                                    $wp_query = $custom_query;
                                    ?>
                                    <nav class="prev-next-posts">
                                       <div class="prev-posts-link waves-effect waves-light btn">
                                          <?php echo get_next_posts_link( 'Older Entries', $custom_query->max_num_pages ); ?>
                                       </div>
                                       <div class="next-posts-link waves-effect waves-light btn">
                                          <?php echo get_previous_posts_link( 'Newer Entries' ); ?>
                                       </div>
                                    </nav>
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

                  <div id="PopularPost" class="col s12 m12 l12">


               </div>

            </div>


         </div>
         
         <div id="SideBar" class="col s12 m4 l4">
            <!--
            <div class="row box-radius grey lighten-4 pad-25">
               <h3 class="center">Subscribe Our Newsletter!</h3>
               <h6 class="center">Get The Latest News, Deals, and More</h6>
               <div class="newsletter center">
                  <form>
                    <input type="text" class="center" name="firstname" placeholder="Email Address:">
                    <button class="btn btn-large waves-effect waves-light" type="button" name="action">Submit</button>
                  </form>
               </div>
            </div>
            -->
            <div class="row">
               <div class="ad-image waves-effect waves-light"><img src="/wp-content/uploads/2016/08/ad-image-01.jpg" alt="image"></div>
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
      <!--
            <div class="row">
               <div class="archive">
                  <h2>Archives</h2>
                  <?php wp_get_archives(); ?>
               </div>
            </div>
            -->           
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
