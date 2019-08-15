<?php
/*
 Template Name: Contact
*/
?>
<?php get_header();?>
  
<?php get_template_part( 'includes/top-navigation'); ?>
<style>
  
  .row{
  	margin-bottom:0;
  }
	.overlay {
    width: 100%;
    height: 731px;
    z-index: 0;
    background: rgba(0, 0, 0, 0.32);
    top: 0;
    position: absolute;
	}  
	#main-header{
  	overflow:hidden;
  	display:block;
  	position:relative;    
  }
  #main-header .container{
  	position:relative;
  	z-index:2;
  }
</style>  
 
<section id="main-header" style="outline-offset: -3px; background-size:cover; background-image:url('http://dentalgenius.com/wp-content/uploads/dental-genius-contact-us.jpg');">
	<div class="overlay"></div>
	<div class="container tb-padding-100">
		<div class="row">
			<div class="col l12 center">
        
        <h1 class="white-text mid-light-font margin0 padding0 fadeIn wow" 
            style="visibility: visible; animation-name: fadeIn;">
        	<i class="large material-icons white-text">business</i><br/>
          <?php echo get_the_title();?>
        </h1>
			</div>
		</div>
		<!-- /End Row -->
	</div>
	<!-- /End Container -->
</section>


<!-- /End Hero Section -->
<div id="stripes">
	<div class="row">
		<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
		<div class="col s3 m3 l3 #9c27b0 purple"> </div>
		<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
		<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
	</div>
</div>



<section class="tb-padding-50 center">
    <div class="container left-align"> <br>
     <div class="row">                     


       <div class="col s12 m8 l9">
       <div class="col s12 m12 l12">
				<?php if (have_posts()) : while (have_posts()) : the_post();?>
				<?php the_content(); ?>
				<?php endwhile; endif; ?>
       </div>
       </div>
       
       <div class="col s0 m4 l3"><br/>
         <div class="card #5c6bc0 indigo lighten-1">
         	<div class="card-content white-text">
           <br/> 
           <img class="img-responsive" style="width:200px; max-width:100%;" src="/wp-content/uploads/2016/07/dg-white.png"/> <hr/><br/>
           <p><b>Address:</b><br/> 2121 Alton Pkwy, Irvine, CA 92606<br/><br/>
							<b>Phone:</b><br/> (877) 477-2311<br/><br/>
              <b>Hours:</b><br/> Open today · 8AM–5PM<br/><br/></p>
           </div>       
         </div>       
       </div>       
       
		</div>
	</div>     
</section>


<!-- =========================
	CTA SECTION
	============================== -->
<section id="cta1-1" class="center tb-padding-75" 
	style="background-color:whitesmoke; border-top:1px solid rgba(85, 85, 85, 0.21)">
	<div class="container">
		<div class="row">
			<div class="col l12 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
				<div class="text-center">
					<h5 class="teal-text">Call Us Today</h5>
					<h4 class="splash-text mid-light-font">1-(877)-477-2311</h4>
					<p class="p-opacity m-b-md">We provide live phone support for all of our clients. 
						<br/>You can call us Monday through Friday 8am to 5pm Pacific Time.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
    
    

          

  
  
<?php get_footer();?>