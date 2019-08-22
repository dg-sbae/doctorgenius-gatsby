	<footer class="page-footer" style="padding-top:0; margin-top:0; background-color: #272D4E;">
		<div id="stripes">
			<div class="row">
				<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
				<div class="col s3 m3 l3 #9c27b0 purple"> </div>
				<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
				<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
			</div>
		</div>
		<div class="container tb-padding-50">
			<div class="row">
				<div class="col l5 s12 m7">
					<a href="/" class="f-logo"><img src= "<?php echo get_template_directory_uri() . '../../../uploads/2016/07/dg-white.png'; ?>" alt="Doctor Genius Logo" title="Doctor Genius Logo"/></a>
					
					<?php if(is_front_page()|is_page_template('page-marketing-solutions.php')|is_page_template('page-our-technology.php')|is_page_template('page-plans.php')|is_page_template('page-the-study.php')):?>
					<h1 class="title"><?php if(is_front_page()):?>High Conversion Dental Websites<?php endif;?>
						<?php if ( is_page_template( 'page-marketing-solutions.php')):?>Medical Digital Marketing Solutions<?php endif;?>
						<?php if ( is_page_template ( 'page-our-technology.php')):?>Healthcare Marketing Technology<?php endif;?>
						<?php if( is_page_template ( 'page-plans.php')):?>Healthcare Marketing Plans<?php endif;?>
						<?php if( is_page_template ( 'page-the-study.php')):?>Practice Management &amp; Digital Marketing<?php endif;?>						
					</h1>
					<?php endif;?>

 				    <p class="white-text f-info lead">Doctor Genius - The Educated Choice. We are in the business of making yours grow faster. 
		            <a href="/contact/"><span style="text-decoration:underline;">Contact us</span></a> today for a free consultation.</p>
		            <p class="add-phone">
            			Address: 2121 Alton Pkwy, Suite 150, Irvine, CA 92606<br/>
            			Phone: (877) 477-2311 - Hours: 7AM–5PM PST
		            </p>
    			</div>
				<div class="col l4 m5 s12">
					<div class="col l6 m6 s12">
						<h5>Get Started</h5>
						<ul>
							<li><a href="/our-technology/">Our Technology</a></li>
							<li><a href="/marketing-solutions/"> Marketing Solutions</a></li>
							<li><a href="/plans/"> Plans & Pricing</a></li>
							<li><a href="/the-study/"> The Study</a></li>
							<li><a href="/events/"> Events</a></li>
						</ul>
					</div>
	          
					<div class="col l6 m6 s12">
						<h5 class="white-text">&nbsp;</h5>
						<ul>
							<li><a target="_blank" href="/demo/">Request Demo</a></li>
							<li><a href="/contact/">Contact Us</a></li>            
							<li><a target="_blank" rel="nofollow" href="https://portal.doctorgenius.com/login">Portal Login</a></li>
						</ul>
					</div>
				</div>           
				<div class="col l3 m12 s12">
					<h5>Get Connected</h5>				
					<div class="footer-social">
						<ul>
							<li><a href="https://www.facebook.com/DoctorGeniusMarketing" target="_blank" class="white-text fa-2x"><i class="fa fa-facebook"></i></a></li>
							<li><a href="https://twitter.com/DoctorGeniusCA" target="_blank" class="white-text fa-2x"><i class="fa fa-twitter"></i></a></li>
							<li><a href="https://plus.google.com/+DoctorGenius" target="_blank" class="white-text fa-2x"><i class="fa fa fa-google-plus"></i></a></li>
							<li><a href="https://www.instagram.com/doctor.genius/" target="_blank" class="white-text fa-2x"><i class="fa fa-instagram"></i></a></li>							
						 	<li><a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos" target="_blank" class="white-text fa-2x"><i class="fa fa-youtube-play"></i></a></li>				 	
						</ul>
						<span class="badge-google"><a href=" https://www.google.com/partners/?hl=en-US#a_profile;idtf=7663494647" target="_blank"><img src="<?php echo get_template_directory_uri() . '../../../uploads/2016/07/badge-google-partner.png'; ?>"></a></span>
			       </div>  
				</div>          
			</div>
		</div>
		<div class="footer-copyright" style="background-color: rgba(0, 0, 0, 0.22)!important;">
			<div class="container">
		        <div class="row">
			        <div class="col s12 m6 l8">
						<div class="reserved">
							&copy;<?php echo date("Y");?> <a href="/">Doctor Genius</a>. All Rights Reserved.
						</div>
					</div>
			         <div class="col s12 m6 l4 social">
			          	<a class="policy" href="/privacy/">Privacy Policy | </a>  
			            <a class="terms" href="/terms-and-conditions/"> Terms and Conditions</a>
			         </div>
				</div>
			</div>
		</div>

	</footer>
    <?php wp_footer(); ?>
</body>


<!-- Compiled and minified JavaScript -->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="/wp-content/themes/doctor-genius/assets/js/materialize.js"></script>
  <script src="/wp-content/themes/doctor-genius/assets/js/init.js"></script>




<script defer>
(function($){
  
  function toggleVAlign(){
  
  if($(document).width() < 993 ){
    $('nav span#home').addClass('hide');                          
  	$('.offset-l1').removeClass('offset-l1').addClass('offset-l1-off');                              
  	$('.valign-wrapper').removeClass('valign-wrapper').addClass('valign-wrapper-off');
  	$('.valign').removeClass('valign').addClass('valign-off');
  }else{ 
    $('nav span#home').removeClass('hide');                                                        
  	$('.offset-l1-off').removeClass('offset-l1-off').addClass('offset-l1');                    
    $('.valign-wrapper-off').removeClass('valign-wrapper-off').addClass('valign-wrapper');
  	$('.valign-off').removeClass('valign-off').addClass('valign');                              
	};    
  };

  $(window).resize(function(){
                              
    toggleVAlign();  

  });
  
                              
    $(document).ready(function(){
                              
      $('.parallax').parallax();
      toggleVAlign();
      $(".button-collapse").sideNav();                        

     // Plugin initialization
    $('#testimonials .carousel').carousel({indicators:true});
    $('.scrollspy').scrollSpy();                           
                              

    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  });
               
                              
})(jQuery);

</script> 


<script type="text/javascript" defer>

  $('form input[type="submit"]').click(function() { 
  
  	$('.ajax-loader').addClass('is-active');
  
  });
  
var Sent = $('.wpcf7-mail-sent-ok').text();
  
  if(Sent == 'Thank you for your message. It has been sent.'){
  	window.location.href = "/thank-you";

  }
  
</script> 
  


<script defer>
function myFunction() {
    var x = document.getElementById('top-ban');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
</script>



  <script defer>
  $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#top-ban').fadeOut();
     }
    else
     {
      $('#top-ban').fadeIn();
     }
 });
</script>


