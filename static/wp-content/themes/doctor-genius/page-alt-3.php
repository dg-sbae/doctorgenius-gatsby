<?php
/**
 * Template Name: Alt 3
 */
?>
<head>
<!--Let browser know website is optimized for mobile-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<!--Import Google Icon Font-->
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">

<style>
li.ico i {
    display: inline-block;
}
li.ico span {
    display: inline-block;
    vertical-align: top;
}
	.splash-blue {
	    background-color: #272D4E;
	}
	.splash-text {
	    color: #272D4E;
	}
	#mega-section {
	    height: 55vh;
  		min-height:530px;
	    background-image: url('/wp-content/uploads/2016/07/dg-head.jpg');
	    background-repeat: no-repeat;
	    background-position: top left;
	    background-size: 100% auto;
	    background-attachment: fixed;
	}
  
@media(max-width:1750px){
div#mega-section {
    background-size: 130% auto;   
    background-position: top;
}

div#mega-section {
    padding-top: 110px;
}}   
  
@media(min-width:1500px) and (max-width:1749px){
div#mega-section {
    background-size: auto 100%;   
    background-position: top;
}}
@media(min-width:992px) and (max-width:1499px){
div#mega-section {
    background-size: auto 700px;
    background-position: top;
    height: 500px;
}}  
  
  
	a#logo-container img {
    height: 33px;
    padding-top: 4px;
	}
	a#logo-container {
	    padding: 12.5px 0;
	}
	#stripes div {
	    height: 2.5px;
	}
	@media(min-width:1600px) {
	    .container {
	        width: 1550px;
	        max-width: 100%;
	    }
	}
	h3.header.white-text {
	    margin-top: -40px;
	    margin-bottom: 0;
	}
	div#mega-section h4 {
	    margin-top: 10px;
	    margin-left: -9px;
	}
	div#mega-section a {
	    margin: 20px 0;
	}
	.tb-padding-50 {
	    padding-top: 50px;
	    padding-bottom: 50px;
	}
	.tb-padding-100 {
	    padding-top: 100px;
	    padding-bottom: 100px;
	}
	.lh-150 {
	    line-height: 150%;
	}
	@media (min-width: 1200px) {
	    html {
	        font-size: 17px;
	    }
	}
	.img-responsive {
	    max-width: 100%;
	}
	.square {
	    position: relative;
	    display: block;
      min-height: 280px;
	}
	.sqContent {
	    color: white;
	    padding: 10%;
	    width: 100%;
	}
.sqLink {
    padding: 0 15px 15px 0px;
    width: 100%;
    text-align: right;
    z-index: 1;
    display: block;
    color: white;
    font-size:13px;
}
.sqLink i {
    margin: -2px 0 0 7px;
}  
	.cluster {
	    padding: 0!important;
	}
	.blocks .row {
	    margin-bottom: 0;
	}
	nav i.material-icons.left {
	    line-height: 35px;
	    font-size: 23px;
	    margin-right: 7px;
	    margin-left: -8px;
	}
	p.lead {
	    font-size: 19px;
	}
	.parallax img {
	    opacity: .9;
	}
	.light-font {
	    font-weight: 400;
	}
	.parallax-container {
	    min-height: 600px;
	}
	.margin-0 {
	    margin: 0;
	}
	.mid-light-font {
	    font-weight: 300;
	}
	.tiny {
	    font-size: 1rem;
	}
	.small {
	    font-size: 2rem;
	}
	.medium {
	    font-size: 4rem;
	}
	.large {
	    font-size: 6rem;
	}
	.carousel .carousel-item {
	    width: 350px;
	    min-height: 350px;
	}
	.carousel .carousel-item img {
	    margin-bottom: 20px;
	}
	.card-panel span {
	    margin-bottom: 10px;
	}
	.collapsible i.material-icons {
	    background: #555;
	    color: white;
	    height: 52px;
	    width: 52px;
	    line-height: 49px;
	    margin: 0 15px 0 -17px;
	    font-size: 21px;
	}
	.collapsible-body {
	    background: #E3F2FD;
	}
	.collapsible-header {
	    height: 52px;
	    font-size: 16px;
	    line-height: 51px;
	    text-align: left;
	}
	.collapsible-body .row {
	    margin-bottom: 0;
	}
	.collapsible-body img {
	    width: 100%;
	}
	.collapsible-body {
	    text-align: left;
	}
  
	@media(max-width:1500px) {
	    .navbar-fixed .container {
	        width: 100%;
	        max-width: 100%;
	        padding-left: 15px;
	    }
	}
	.container {
	    max-width: 100%;
	    width: 95%!important;
	}
	@media(min-width:1600px) {
	    .container {
	        max-width: 1550px!important;
	    }
	}
	@media(max-width:600px) {
			footer .container div:nth-child(3), footer .container div:nth-child(4) {
    			display: none;
			}

			.footer-copyright {
    			padding-bottom: 100px;
			}  
			nav .button-collapse {
   				float: right;
			} 
			a#logo-container {
    		padding: 12.5px 0;
   			float: left;
    		left: 0;
    		transform: none;
			}  
  		footer{
  			text-align:center;
  		}
	    a#logo-container img {
	        height: 27px;
	        padding-top: 2px;
	    }
	    .collapsible.popout>li {
	        margin: 0;
	    }
	    .container {
	        max-width: 100%!important;
	        width: 85%!important;
	    }
	    .hide-s {
	        display: none!important;
	    }
	}
	@media(min-width:601px) and (max-width:991px) {
			nav .button-collapse {
   				float: right;
			} 
			a#logo-container {
    		padding: 12.5px 0;
   			float: left;
    		left: 0;
    		transform: none;
			}  
  		footer{
  			text-align:center;
  		}
	    a#logo-container img {
	        height: 27px;
	        padding-top: 2px;
	    }	
  		.hide-m {
	        display: none;
	    }
	}
	@media(min-width:992px) {
	    .hide-l {
	        display: none;
	    }
	}  
@media(max-width:600px){  
	#extra-sq{display:none}  
}  
img#sb-logo {
    max-width: 100%;
    padding: 25px 0;
}
ul#nav-mobile a {
    color: white;
}
ul#nav-mobile {
    background: #35407b;
}

ul#nav-mobile li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.55);
}
.card-panel{
    border-radius: 10px;
    min-height:550px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.42);
}
.carousel .carousel-item {
    width: 400px;
    margin-top: -100px;
}
.carousel-item .material-icons{color:goldenrod}
ul#nav-mobile > a {border-bottom: 1px solid rgba(255, 255, 255, 0.55);padding-bottom: -6px;display: block;height: auto;}  
  
/*SQUARE RE ADJUST ON MD*/  
@media (min-width:601px) and (max-width:991px){
  .md-pull-l{float:left!important}
  .md-pull-r{float:right!important}
}  
  
@media (max-width:991px){
 section#blocks-1{
  	padding-bottom:0!important;
  } 
}  
  
body{
	overflow-x:hidden;
}
.input-field label {
    color: #9e9e9e;
    position: absolute;
    top: -1.2rem;
    left: 0.75rem;
    font-size: 1rem;
    cursor: text;
    transition: .2s ease-out;
}  
input[type="submit"] {
    -webkit-appearance: inherit;
    padding: 17px 30px;
    display: block;
    width: 100%;
}
.screen-reader-response {
    display: none;
}

span.wpcf7-not-valid-tip {
    color: orangered;
    margin-bottom: 35px;
    display: block;
} 
  
.wpcf7-validation-errors {
    display: block;
    padding: 15px;
    color: white;
    background: #FF5722;
    margin-bottom: 45px;
    text-align: center;
}
  
.wpcf7-submit {
    padding: 0;
}
.wpcf7-mail-sent-ok {
    display: block;
    padding: 15px;
    color: white;
    background: #4CAF50;
    margin-bottom: 45px;
    text-align: center;
}  
  
@media(max-width:991px){
.navbar-fixed .container{
  padding: 0 20px;
  }  
a#logo-container {
    margin-left: 20px;
}}  
  
@media(min-width:992px){
main {
    padding-left: 240px;
}
.side-nav {
  	margin-top: 64px;
}
a#logo-container {
    margin-left: 30px;
}}    
li#search-bar input[type="text"] {
    background: white;
    padding: 3px 10px!important;
    height: 40px;
    margin-top: 9px;
    display: inline-block;
} 
  
  
div#sb-foot {
    position: fixed;
    bottom: 0;
  	left:0;
    z-index: 999;
    width: 240px;
    text-align: center;
    padding: 20px 15px;
}

div#sb-foot a {
    color: white;
}
div#sb-foot p {
    opacity: .8;
    font-size: 16px;
}
div#sb-foot #sb-social {
    padding: 15px;
    font-size: 23px;
}  
  
a.sb-consult {
    font-size: 21px;
}
div#sb-social i {
    font-size: 2rem;
    margin: 5px;
}  
@media(max-width:991px){
  #jm-button, div#sb-foot{display:none;}
}      
</style>
</head>
<body>
  <div id="sb-foot">
  <p class="white-text">2121 Alton Pkwy, <br/>Irvine, CA 92606 <br/>(877) 477-2311<br/><br/></p>
    <a href="/demo/" class="sb-consult">FREE CONSULTATION</a><br/>
    <div id="sb-social">
      
    	<a href="http://www.facebook.com" target="_blank">
        <i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      
    	<a href="https://plus.google.com/+Dentalseosites/about" target="_blank">
        <i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
      
    </div>
  
  </div>
  
	<div class="navbar-fixed">
		<nav class="splash-blue" role="navigation">
			<div class="nav-wrapper container" style="width:100%!important; max-width:100%!important;">
				<a id="logo-container" href="#" class="brand-logo"> <img src="/wp-content/uploads/2016/07/dg-white.png"/> </a>
				<ul class="right hide-on-med-and-down">
          <li class="ico"><a href="/contact/"><i class="material-icons">mail</i></a> <span>Contact</span></li>
        	<li class="ico"><a alt="Login to Our Technology" href="http://our-technology.dentalgenius.com">
            <i class="material-icons">person_pin</i> <span>Login</span></a>
          </li>
					<li><a class="#ff5252 red accent-2 waves-effect waves-red btn"><i class="material-icons left">call</i> 1-877-477-2311</a></li>
				</ul>
				<ul id="nav-mobile" class="side-nav hide-l">
					<li class="hide-l"><a href="/">
						<img id="sb-logo" class="img-responsive" 
							src="/wp-content/uploads/2016/07/dg-white.png"/></a>
					</li>
					<li class="hide-l"><a class="#ff5252 waves-effect waves-green btn">1-877-477-2311</a></li>
					<li><a style="border-left:5px solid #1de9b6;" class="waves-blue waves-effect" href="/">Home</a></li>
					<li><a style="border-left:5px solid #9c27b0;" href="/our-technology/">Our Technology</a></li>
					<li><a style="border-left:5px solid #FF5252;" href="/marketing-solutions/">Marketing Solutions</a></li>
					<li><a style="border-left:5px solid #ffc400;" href="/plans/">Plans</a></li>
					<li><a style="border-left:5px solid #1E88E5;" href="/demo/">Request Demo</a></li>
				</ul>
				<ul id="nav-mobile" class="side-nav fixed hide-s hide-m" >
					<li class="hide-l"><a href="/">
						<img id="sb-logo" class="img-responsive" 
							src="/wp-content/uploads/2016/07/dg-white.png"/></a>
					</li>
					<li class="hide-l"><a class="#ff5252 waves-effect waves-green btn">1-877-477-2311</a></li>
					<li><a style="border-left:3px solid #1de9b6;" class="waves-blue waves-effect" href="/">Home</a></li>
					<li><a style="border-left:3px solid #9c27b0;" href="/our-technology/">Our Technology</a></li>
					<li><a style="border-left:3px solid #FF5252;" href="/marketing-solutions/">Marketing Solutions</a></li>
					<li><a style="border-left:3px solid #ffc400;" href="/plans/">Plans</a></li>
					<li><a style="border-left:3px solid #1E88E5;" href="/demo/">Request Demo</a></li>
				</ul>
				<a href="#" data-activates="nav-mobile" class="button-collapse">
				<i class="material-icons">menu</i></a> 
			</div>
		</nav>
	</div>
	<img class="img-responsive hide-l" style="width:100%;" alt="Doctor Genius Medical Marketing" src="/wp-content/uploads/2016/07/mobile-header.jpg"/>  
	<div id="stripes" class="hide-l">
		<div class="row" style="margin-bottom:0;">
			<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
			<div class="col s3 m3 l3 #9c27b0 purple"> </div>
			<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
			<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
		</div>
	</div>
	<!-- MOBILE CTA HEADER !-->  
	<div id="mobile-header" class="section tb-padding-50 valign-wrapper hide-l #1e88e5 blue darken-1">
		<div class="container valign">
			<div class="row">
				<div class="col s12 m12 center">
					<br/><br/><br/>
					<h3 class="header white-text light-font">The Educated Choice<sup><small>&trade;</small></sup></h3>
					<br/>
					<h5 class="header col s12 light white-text mid-light-font lh-150" style="padding-left:0;"> White Coat Service with 1st Class Results. <br class="hide-s"/>Discover The Engine that Drives Profits. <br/><br/>
					</h5>
					<a href="#" id="download-button" class="btn-large waves-effect waves-light orange" style="margin-left:0px;"> Request Free Consultation <i class="material-icons right">send</i></a> 
				</div>
			</div>
		</div>
	</div>
	<main>
		<div id="mega-section" class="section no-pad-bot valign-wrapper hide-s hide-m">
			<div class="container valign">
				<div class="row">
					<div class="col s12 m8 l9">
						<h3 class="header white-text light-font">The Educated Choice<sup><small>&trade;</small></sup></h3>
						<h5 class="header col s12 light white-text mid-light-font lh-150" style="padding-left:0;"> White Coat Service with 1st Class Results. <br/>
							Discover The Engine that Drives Profits. 
						</h5>
						<a href="#" id="download-button" class="btn-large waves-effect waves-light orange" style="margin-left:0px;"> Request Free Consultation <i class="material-icons right">send</i></a> 
					</div>
				</div>
			</div>
		</div>
		<div id="stripes">
			<div class="row">
				<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
				<div class="col s3 m3 l3 #9c27b0 purple"> </div>
				<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
				<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
			</div>
		</div>
		</div>
		<section class="section tb-padding-50 center">
			<div class="container">
				<div class="row">
					<div class="col s12 m12 l8 offset-l2">
						<div class="circle #ff5252 red accent-2 waves-effect waves-red" style="width:75px;height:75px;border-radius:50%; margin:0px auto 20px auto;padding-top: 18px;"> <i class="material-icons small white-text">trending_up</i> </div>
						<h3 class="indigo-text text-darken-3 light-font">The Profits Start Right Here.</h3>
						<h5 class="grey-text text-darken-2 lh-150 mid-light-font"> Master the digital landscape with Doctor Genius to reach, engage, and convert more patients to your practice doorstep. 
							Move forward with an experienced team led by industry experts who know how to get you the results you want. 
						</h5>
						<br/>
						<a href="#" id="download-button" class="btn-large waves-effect waves-light #1e88e5 blue darken-1"> Start with a Product Walkthrough <i class="material-icons right">perm_camera_mic</i> <br/>
						<br/>
						</a> 
					</div>
				</div>
		</section>
		<section id="building-practices" class=" margin-0">
		<div id="stripes">
		<div class="row" style="margin-bottom:0px;">
		<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
		<div class="col s3 m3 l3 #9c27b0 purple"> </div>
		<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
		<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
		</div>
		</div>
		<img class="img-responsive hide-l" style="width:100%;" src="/wp-content/uploads/2016/07/trust.jpg"> 
		<div class="section tb-padding-50 hide-l #ab47bc purple lighten-1 valign-wrapper-off"> 
		<div class="container">
		<div class="row">
		<div class="col s12 m12 center">
		<h3 class="white-text light-font">Effective Online Marketing <br/>
		You Can Trust.</h3>
		<h5 class="white-text lh-150 mid-light-font"> We don’t simply connect doctors with New Patients. 
		We create trustworthy connections that serve as the ladder to sustainable practice growth. 
		We believe trust gives you the freedom to move forward knowing your team is working for you.</h5>
		<br/>
		<a href="#" id="download-button" class="btn-large waves-effect waves-light orange" style="margin-left:0px;"> Request Free Consultation <i class="material-icons right">send</i></a><br/>
		<br/>
		</div>
		</div>
		</div>  
		</div>      
		<div class="parallax-container valign-wrapper hide-s hide-m">
		<div class="container">
		<div class="row">
		<div class="col s12 m12 l6 valign">
		<h3 class="indigo-text text-darken-3 light-font">Effective Online Marketing <br/>
		You Can Trust.</h3>
		<h5 class="grey-text text-darken-2 lh-150 mid-light-font"> We don’t simply connect doctors with New Patients. 
		We create trustworthy connections that serve as the ladder to sustainable practice growth. 
		We believe trust gives you the freedom to move forward knowing your team is working for you.</h5>
		<br/>
		<a href="#" id="download-button" class="btn-large waves-effect waves-light orange" style="margin-left:0px;"> Request Free Consultation <i class="material-icons right">send</i></a><br/>
		<br/>
		</div>
		</div>
		</div>
		<div class="parallax"><img src="/wp-content/uploads/2016/07/doctor-genius-building-trust.jpg"></div>
		</div>
		<div id="stripes">
		<div class="row" style="margin-bottom:0px;">
		<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
		<div class="col s3 m3 l3 #9c27b0 purple"> </div>
		<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
		<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
		</div>
		</div>
		</section>
		<section class="section tb-padding-50 grey lighten-4">
		<div class="clearfix">
		<div class="container">
		<div class="row">
		<div class="col s12 m12 l12 center valign-wrapper">
		<div class="col s12 m12 l6 valign center">
		<div class="#9c27b0 purple waves-effect waves-purple" style="width:75px;height:75px;border-radius:50%; margin:20px auto;padding-top: 18px;"> <i class="material-icons small white-text">store</i> </div>
		<h2 class="h1 indigo-text text-darken-3 light-font">How we build practices</h2>
		<h5 class="grey-text text-darken-2 lh-150 mid-light-font"> We are the engine that drives profits. 
		We offer high-end web marketing services to medical & health professionals throughout the United States. Learn how we funnel traffic from search engines and social media directly to your practice. <br/>
		<br/>
		</h5>
		<a class="btn-large waves-effect waves-light"> <span class="hide-s">Explore our</span> Marketing Services <i class="material-icons right">search</i></a> <br/><br/></div><div class="col s12 m12 l1"><br/></div>
		<div class="col s12 m12 l5 valign" style="padding:0;"> 
		<ul class="collapsible popout" data-collapsible="accordion">
		<li>
		<div class="collapsible-header active"><i class="material-icons teal lighten-1">group</i>Building Practice Awareness</div>
		<div class="collapsible-body">
		<img class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-social-media-management.jpg"/> 
		<p>Original patient education content is posted to your social media profiles to generate general interest in your medical treatments and services. We build an organic social media following that begins to funnel traffic to your website.</p>
		</div>
		</li>
		<li>
		<div class="collapsible-header"><i class="material-icons #9c27b0 purple">search</i>
		<span class="hide-s">Improved</span> Search Engine Placement</div>
		<div class="collapsible-body">
		<img class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-search-engine-optimization.jpg"/>
		<p>Search Engine Optimized meta tags are used to boost the chances of your practice's website to placing high on Google Keyword searches. Patients searching Google for conditions or doctors in their area find you at the top of their search results.</p></div>
		</li>
		<li>
		<div class="collapsible-header"><i class="material-icons red accent-2">stars</i><span class="hide-s">Increased Quantity of </span>Google+ Reviews</div>
		<div class="collapsible-body">    
		<img classs="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-google-reviews.jpg"/>   
		<p>Often positive Google+ reviews become a main source of reassurement that a Patient is making the right choice when selecting a doctor or health professional. Google+ reviews have never been easier to aquire with our Practice Promoter.</p></div>
		</li>
		<li>
		<div class="collapsible-header"><i class="material-icons #ffc400 amber accent-3">assignment_ind</i>
		<span class="hide-s">Simplified</span> Appointment Scheduling</div>
		<div class="collapsible-body">
		<img class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-appointment-scheduling.jpg"/>    
		<p>Know the day and service your New Patient is interested in scheduling an appointment for, all while collecting contact information to build your network. Begin here to evaluate the effectiveness of your digital presence.</p></div>
		</li>
		<li>
		<div class="collapsible-header"><i class="material-icons #2979ff blue accent-3">location_on</i>
		Navigation Enabled Practice</div>
		<div class="collapsible-body">
		<img class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-navigation-google-maps.jpg"/>  
		<p>Simply typing your practice name into the Google Maps app from a smartphone directs patients from their home directly to your practice. Whether an existing patient ready to drive to you, or reverse searching for a service, you will be pinpointed on the map.</p></div>
		</li>        
		</ul>             
		</div>          
		</div>
		</div>
		</div>
		</div>
		</div>
		</section>
		<div id="stripes">
			<div class="row" style="margin-bottom:0px;">
				<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
				<div class="col s3 m3 l3 #9c27b0 purple"> </div>
				<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
				<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
			</div>
		</div>
		<section id="blocks-1" class="blocks lh-150 tb-padding-100" style="background-image:url('/wp-content/uploads/2016/07/doctor-genius-medical-marketing-2.jpg');background-size:cover;background-repeat:no-repeat;background-position:bottom right;background-attachment: fixed;">
			<div class="container">
				<div class="row">
					<div class="col s12 m12 l8 offset-l2">
						<div class="col s12 m12 l12 center">
							<img class="img-responsive" style="width:275px;max-width:100%;" src="/wp-content/uploads/2016/07/doctor-genius.com-color.png">
							<h2 class="indigo-text text-darken-3 light-font">Our Web Marketing Solutions</h2>
							<h5 class="grey-text text-darken-2 lh-150 mid-light-font"> Doctor Genius provides more than SEO. 
								Doctor Genius builds dependable Practice Intelligence via modern web 
								technology services delivered through an exclusive performance reporting portal. <br>
								<br/>
							</h5>
							<a class="btn-large waves-effect waves-light splash-blue"> Make the Educated Choice <span class="hide-s">for Your Practice</span> <i class="material-icons right">trending_up</i></a> <br/>
							<br/>
							<br/>
							<br/>
						</div>
					</div>
					<div class="z-depth-2 clearfix col s12 m12 l12" style="padding:0;">
						<div class="cluster col s12 m12 l12">
							<a class="col s12 m6 l3 square teal lighten-1 waves-effect waves-green">
								<div class="sqContent">
									<h5>Unique Patient Education Content</h5>
									<p>Give your website a pulse</p>
								</div>
								<div class="sqLink"> EXPECT MORE FROM SEO <i class="material-icons right">play_circle_outline</i> </div>
							</a>
							<div class="col s12 m6 l3 square waves-effect waves-green" 
								style="background-image:url('/wp-content/uploads/2016/07/doctor-genius-websites.jpg');background-size:cover;background-position:top right;"> <br/>
							</div>
							<a class="col s12 m6 l3 square #ab47bc purple lighten-1 md-pull-r waves-effect waves-purple">
								<div class="sqContent">
									<h5>Generate Reviews on Social Profiles</h5>
									<p>Build integrity and a reputation online</p>
								</div>
								<div class="sqLink"> GAIN FEEDBACK <i class="material-icons right">play_circle_outline</i> </div>
							</a>
							<div id="extra-sq" class="col m6 l3 square waves-effect waves-purple" 
								style="background-image:url('/wp-content/uploads/2016/07/doctor-genius-seo.jpg');background-size:cover;background-position:top left;"> <br/>
							</div>
						</div>
						<div class="cluster col s12 m12 l12">
							<div class="col s12 m6 l3 square waves-effect waves-red md-pull-r" 
								style="background-image:url('/wp-content/uploads/2016/07/doctor-genius-content-writing.jpg');background-size:cover;background-position:top right;"> <br/>
							</div>
							<a class="col s12 m6 l3 square #ff5252 red accent-2 waves-effect waves-red">
								<div class="sqContent">
									<h5>Hyper-Local Google Maps Navigation</h5>
									<p>Take advantage of the possibilities of Google Maps</p>
								</div>
								<div class="sqLink"> TAP INTO MAPS <i class="material-icons right">play_circle_outline</i> </div>
							</a>
							<div class="col s12 m6 l3 square  waves-effect waves-yellow" 
								style="background-image:url('/wp-content/uploads/2016/07/doctor-genius-marketing.jpg');background-size:cover;background-position:top right;"> <br/>
							</div>
							<a class="col s12 m6 l3 square #ffc400 amber accent-4 waves-effect waves-yellow">
								<div class="sqContent">
									<h5>Informed Monthly Performance Reporting</h5>
									<p>Discover who is interested in your practice</p>
								</div>
								<div class="sqLink"> FIND MEANING IN YOUR DATA <i class="material-icons right">play_circle_outline</i> </div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

  
  
  
  <?php get_template_part( 'includes/testimonials-carousel'); ?>

  
  
  
  
		<img class="img-responsive hide-l" style="width:100%;" src="/wp-content/uploads/2016/07/profits.jpg"> 
		<div class="section tb-padding-50 hide-l teal lighten-1 waves-effect waves-green">
			<div class="container">
				<div class="row">
					<div class="col s12 m12 center">
						<h3 class="white-text light-font">Transforming Great Ideas into Profits.</h3>
						<h5 class="white-text lh-150 mid-light-font">We differentiate the channels which you are contacted from, letting you know what is working, and what isn't. Our solutions go well beyond just simply a website- we connect the dots and show you the path to new patient growth.</h5>
						<br/>
						<a href="#" id="download-button" class="btn-large waves-effect waves-light orange" style="margin-left:0px;"> Request Free Consultation <i class="material-icons right">send</i></a><br/>
						<br/>
					</div>
				</div>
			</div>
		</div>
		<section id="building-practices" class=" margin-0">
			<div class="parallax-container valign-wrapper hide-s hide-m">
				<div class="container">
					<div class="row">
						<div class="col s12 m12 l5 valign">
							<h3 class="indigo-text text-darken-3 light-font">Transforming Great <br/>
								Ideas into Profits.
							</h3>
							<h5 class="grey-text text-darken-2 lh-150 mid-light-font"> We differentiate the channels which you are contacted from, letting you know what is working, and what isn't. 
								Our solutions go well beyond just simply a website- we connect the dots and show you the path to new patient growth. 
							</h5>
							<br/>
							<a href="#" id="download-button" class="btn-large waves-effect waves-light orange" style="margin-left:0px;"> Request Free Consultation <i class="material-icons right">send</i></a><br/>
							<br/>
						</div>
					</div>
				</div>
				<div class="parallax"><img src="/wp-content/uploads/2016/07/doctor-genius-building-practices.jpg"></div>
			</div>
			<div id="stripes">
				<div class="row" style="margin-bottom:0px;">
					<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
					<div class="col s3 m3 l3 #9c27b0 purple"> </div>
					<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
					<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
				</div>
			</div>
		</section>
		<section id="opt-in" class="white tb-padding-100">
			<div class="container">
				<div class="row valign-wrapper">
					<div class="col s12 m12 l6 valign offset-l3">
						<div class="row">
							<div class="col s12 center">
								<div class="img-circle teal lighten-1 waves-effect waves-green center" 
									style="width:75px;height:75px;border-radius:50%; margin:20px auto;padding-top: 18px;"> <i class="material-icons small white-text center">email</i> </div>
								<h3 class="indigo-text text-darken-3 light-font">Sign up for a demo today.</h3>
								<h5 class="grey-text text-darken-2 lh-150 mid-light-font"> Take a closer look at the Doctor Genius Marketing Platform 
									by contacting us for a FREE demonstration & consultation.<br/>
									<br/>
								</h5>
							</div>
							<div class="col s12">
								<?php echo do_Shortcode('[contact-form-7 id="76" title="Sign up for a demo today"]');?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<?php get_footer();?>
	</main>
  
<!-- Compiled and minified JavaScript -->
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>



<script>
(function($){
  
  function toggleVAlign(){
  
  if($(document).width() < 992 ){
  	$('.valign-wrapper').removeClass('valign-wrapper').addClass('valign-wrapper-off');
  	$('.valign').removeClass('valign').addClass('valign-off');
  }else{    
    $('.valign-wrapper-off').removeClass('valign-wrapper-off').addClass('valign-wrapper');
  	$('.valign-off').removeClass('valign-off').addClass('valign');                              
	}};

  function makeSquare(){
  
    $('.square').height($('.square').width());
  
  };

  $(window).resize(function(){
                              
    toggleVAlign();  
  	makeSquare();
  
  });
  
                              
    $(document).ready(function(){
                              
      $('.parallax').parallax();
      toggleVAlign();
  	  makeSquare();  
      $(".button-collapse").sideNav();                        

     // Plugin initialization
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy();                           
                              

    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  });
               
                              
})(jQuery);

</script> 
  
<script src="http://setup.localseosites.com/js/joinme/join-me-init.js" type="text/javascript"></script>
<link href="http://setup.localseosites.com/js/joinme/join-me-init.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript">

      LssJM.init();

</script>  
  