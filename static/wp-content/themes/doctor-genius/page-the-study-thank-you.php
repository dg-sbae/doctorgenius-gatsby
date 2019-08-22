<?php
/**
 * Template Name: Home v2
 */
?>
<?php get_template_part( 'includes/top-navigation'); ?>


<head>
	<title>Doctor Genius | Thank You!</title>
</head>

<style>
body { background: url('/wp-content/themes/doctor-genius/assets/thankyou/img/bg-confimation.jpg') no-repeat center center fixed; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover; background-size: cover; }
#Confirm { padding:150px 0; }
#Confirm h2 a { color:#29bbad;  }
#Confirm .logo img { max-width:23%; }
#Confirm h1 { font-size:4em;font-weight:300;margin-bottom:10px;letter-spacing:-2px; }
#Confirm h2 { font-size:1.6em;font-weight:300;color:#808080;max-width:70%;margin:0 auto 20px auto;line-height:1.2em; }
#Confirm h3 { font-size:1em;font-weight:400;margin:0 auto 10px auto;color:#808080; }
#Confirm button { font-size:1.2em;font-weight:300;background:#29bbad;color:#fff;border:none;border-radius:30px;padding:5px 30px;margin-top:2%; }
#Confirm button a { color:#fff; }
#Confirm button:hover { background:#17a093; }
#Confirm .social-icons { margin-top:5%; }
#Confirm .social-icons a { font-size:2em;display:inline-block;color:rgba(76, 78, 136, 0.46);margin:0 18px; }
#Confirm .social-icons a:hover { color:rgba(76, 78, 136, 1) }


/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
#Confirm { padding:80px 0; }
#Confirm .logo img { max-width:60%; }
#Confirm h2 { max-width:100%; }

}
	
</style>

<body>

<section id="Confirm">  
  <div class="container">
    <div class="row center">
        <div class="logo"><img src="/wp-content/themes/doctor-genius/assets/thankyou/img/dg-main-logo.png"></div>
        <h1>Thank you for your interest.</h1>
        <h2>You’ll receive an email confirmation shortly. In the meantime, feel free to view our <a href="/marketing-solutions/" target="_blank">Marketing Solutions</a> and <a href="/plans/" target="_blank">Plans</a>. </h2>
        <button class="waves-effect z-depth-1"><a href="/the-study">Go back Home</a></button>
        <div class="social-icons">
           <h3>Get Connected:</h3>
           <a href="https://www.facebook.com/DoctorGeniusMarketing/" class="waves-effect"><i class="fa fa-facebook fa-lg"></i></a>
           <a href="https://twitter.com/DoctorGeniusCA" class="waves-effect"><i class="fa fa-twitter fa-lg"></i></a>
           <a href="https://plus.google.com/+doctorgenius" class="waves-effect"><i class="fa fa-google-plus fa-lg"></i></a>
           <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA" class="waves-effect"><i class="fa fa-youtube fa-lg"></i></a>  
        </div>
    </div>
  </div>
</section>

	
</body>



<?php get_footer();?>