<?php
/**
 * Template Name: Our Technology
 */
?>
<?php get_template_part( 'includes/top-navigation'); ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<span itemscope itemtype="https://data-vocabulary.org/Breadcrumb"><meta itemprop="title" content="Review Management" /><meta itemprop="url" content="https://doctorgenius.com/#review-management" /></span>
<span itemscope itemtype="https://data-vocabulary.org/Breadcrumb"><meta itemprop="title" content="Social Media" /><meta itemprop="url" content="https://doctorgenius.com/#social-media" /></span>


<style>
.sub-info img {
    margin: auto;
    width: 100%;
    position:relative;
    top:42px;
}
#page-header {
    background-color: #dbdde0;
    margin-top: -33px;
    padding-top: 80px;
    margin-bottom: 0;
}
#page-anchors span {
    float: none;
    color: #555;
}
#page-anchors a {
    display: inline-block;
    width: 13%;
    margin-auto;
    padding: 25px 0px;
  	vertical-align:top;
}
#page-header span {
    display: block;
    text-align: center;
    width: 100%;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    color: #4d4d4f!important;
}
#page-anchors span {
    float: none;
    color: #555;
    font-size: 13px;
    font-weight: 700;
    float: none;
    color: #333;
    font-weight: 700;
}
#page-anchors {
    background: #f7f7f7;
    border-bottom: #dadadc 1px solid;
    transition: ease 1s;
}
section#page-anchors i {
    display: block;
    background: #9E9E9E;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding-top: 9px;
    margin: 10px auto -15px auto;
    font-size: 30px;
}
section#page-anchors .row {
    margin-bottom: 0;
}
.sub-info h4,
h5 {
    margin: 7.5px 0;
}
.point {
    color: #26a69a;
    position: relative;
    top: 4px;
    border-radius: 50%;
    border: 3px solid rgba(158, 158, 158, 0.51);
    font-size: 19px;
    margin-right: 4px;
    padding: 3px;
}
.row-alt {
    background: #f7f7f7;
    border-bottom: #dadadc 1px solid;
    border-top: #dadadc 1px solid;
}
.topAnchor {
    position: fixed;
    width: 100%;
    z-index: 99;
    top: 65px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.28);
}
.padding0 {
    padding: 0;
}
.margin0 {
    margin: 0;
}
div#website-stack {
    position: relative;
}
div#website-stack img {
    position: absolute;
    left: 0;
}
div#website-stack #website-3 {
    top: 100px;
    z-index: 1;
}
div#website-stack #website-2 {
    top: 50px;
    z-index: 2;
}
div#website-stack #website-1 {
    z-index: 3;
}
#mega-contain div{
    width: 600px;
    max-width: 100%;
}
.delay1 {
    animation-delay: .2s;
}
.delay2 {
    animation-delay: .4s;
}
.delay3 {
    animation-delay: .5s;
}
.delay4 {
    animation-delay: .8s;
}
p.grey-text {
    margin-top: -5px;
    text-align: left;
}
div#website-stack {
    position: relative;
    top: -140px;
}
section#page-anchors.topAnchor i {
    font-size: 19px;
    width: 35px;
    height: 35px;
    margin-bottom: -21px;
}
section#page-anchors.topAnchor a {
    margin: 0;
    padding: 1px 0 10px 0;
}
.sp-divider {
    display: block;
    width: 2px;
    min-height: 320px;
    margin: auto;
}
.l-img {
    padding-top: 30px!important;
}
.text-content {
    padding-top: 30px!important;
}
.text-content .btn {
    float: left;
}
@media(max-width:1199px) {
    .text-content p i {
        float: left;
        margin-right: 15px;
        top: -6px!important;
    }
    .text-content p {
        border-bottom: 1px dashed #9E9E9E;
        padding: 10px 0;
    }
    .text-content .btn {
        width: 100%;
    }
}
@media(max-width:993px) {
    .sp-divider {
        display: none!important;
    }
}
@media(max-width:850px) {
    .l-img, .text-content {
        width: 100%!important;
    }
}
.sub-info .col{
  float:none;
  margin:auto -4px auto!important;
  display:inline-block;
  vertical-align:middle;
}
section#mobile-anchor a {
    text-align: center;
    color: #555;
    margin: auto;
    float: none;
}

section#mobile-anchor i {
    color: white;
    padding: 15px;
}

section#mobile-anchor span {
    display: inline-block;
    margin-bottom: 0;
    font-size: 16px;
    color: white;
    position: relative;
    top: -7px;
}

section#mobile-anchor .col {
    text-align: left;
    padding-bottom: 0!important;
} 
@media(min-width:601px) and (max-width:991px){
  section#mobile-anchor .col {
    text-align: center;
}

section#mobile-anchor .col span {
    text-align: center;
    width: 100%;
    position: relative;
    top: -21px;
}

section#mobile-anchor .col i {
    text-align: center;
    margin: auto;
    float: none;
    width: 100%;
    position: relative;
    top: 9px;
}}  
.sub-info h5 i{
		position: relative; top: 6px;
}
#page-anchors .active {
    border-bottom: 5px solid #9E9E9E;
  	position:relative
}  
#page-anchors .active:before{
		bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #9e9e9e transparent;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}  
form input, form label {
    color: whitesmoke!important;
}

input[type=text] {
    border-bottom-color: white;
}
.anchor {
    position: relative;
    display: block;
    top: -150px;
}    

    /* Large Devices, Wide Screens */
	@media only screen and (min-width: 601px) {
		.padding-left { padding-left:80px!important; }
		.sub-info img { top:45px; }

	}

</style>

<!--
<div style="position:fixed;top:50%;left:0;right:0;bottom:0;margin:auto;z-index:999999999;"><hr style="margin:0;opacity:.5"/></div>
<hr style="position:fixed;top:0%;left:0%;right:0;bottom:0;margin:auto;z-index: 9999999999999999999;transform: rotate(90deg);opacity:.5"/>
-->


<section id="page-header" class="center">
	<div class="container">
		<div class="row" style="margin-bottom: 0;">
			<span class="s0 m0">
			<br/>
			</span>
			<h1 class="splash-text mid-light-font margin0 padding0">        
        <i class="large material-icons ">settings</i>
				<br/>
				<?php echo get_the_title();?>
			</h1><br/>
    	<h4 class="splash-text mid-light-font margin0 padding0">How we extend your reach</h4>
			<span class="l0">
			<br/>
			</span>
			<img class="img-responsive" src="/wp-content/uploads/2016/07/our-technology.jpg"/>
		</div>
	</div>
</section>
<div id="stripes" class="m0 l0">
	<div class="row" style="margin-bottom:0;">
		<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
		<div class="col s3 m3 l3 #9c27b0 purple"> </div>
		<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
		<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
	</div>
</div>
<section id="mobile-anchor" class="l0">
	<div class="row" style="margin-bottom: 0;">
		<div class="col s12 m6 teal lighten-1 waves-effect waves-green sL">
			<a href="#genius-portal" class="center">
				<i class="small material-icons">insert_chart</i>
				<div class="s0 m12"><br/></div>
				<span>Genius Portal</span>
			</a>
		</div>
		<div class="col s12 m6 #ff5252 red accent-2 waves-effect waves-red sL">
			<a href="#rank-reports" class="center">
				<i class="small material-icons">trending_up</i>
				<div class="s0 m12"><br/></div>
				<span>Rank Reports</span>  
			</a>
		</div>
		<div class="col s12 m6 #9c27b0 purple waves-effect waves-purple sL">
			<a href="#lead-tracking" class="center">
				<i class="small material-icons">assignment_ind</i>
				<div class="s0 m12"><br/></div>
				<span>Lead Tracking</span>
			</a>
		</div>
		<div class="col s12 m6 waves-effect waves-effect waves-light orange sL">
			<a href="#practice-promoter" class="center">
				<i class="small material-icons">thumb_up</i>
				<div class="s0 m12"><br/></div>
				<span>Practice Promoter</span>
			</a>
		</div>
		<div class="col s12 m4 #2979ff blue accent-3 sS waves-effect">
			<a href="#web-design" class="center">
				<i class="small material-icons">web</i>
				<div class="s0 m12"><br/></div>
				<span>Web Design</span>
			</a>
		</div>
		<div class="col s12 m4 #29b6f6 light-blue lighten-1 sS waves-effect">
			<a href="#hosting" class="center">
				<i class="small material-icons">language</i>
				<div class="s0 m12"><br/></div>
				<span>Hosting</span>
			</a>
		</div>
		<div class="col s12 m4 #43a047 green darken-1 sS waves-effect">
			<a href="#security" class="center">
				<i class="small material-icons">lock</i>
				<div class="s0 m12"><br/></div>
				<span>Security</span>
		</div>
		</a>
	</div>
</section>
<section id="page-anchors" class="center s0">
	<div id="stripes">
		<div class="row">
			<div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
			<div class="col s3 m3 l3 #9c27b0 purple"> </div>
			<div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
			<div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col s0 m0 l12">
				<a id="aSection1" href="#genius-portal-1" class="center active">
				<i class="small material-icons teal lighten-1 waves-effect waves-green">insert_chart</i><br/>
				<span>Genius Portal</span>
				</a><a id="aSection2" href="#rank-reports-1" class="center">
				<i class="small material-icons #ff5252 red accent-2 waves-effect waves-red">trending_up</i><br/>
				<span>Rank Reports</span>
				</a><a id="aSection3" href="#lead-tracking-1" class="center">
				<i class="small material-icons #9c27b0 purple waves-effect waves-purple">assignment_ind</i><br/>
				<span>Lead Tracking</span>
				</a><a id="aSection4" href="#practice-promoter-1" class="center">
				<i class="small material-icons waves-effect waves-light orange">thumb_up</i><br/>
				<span><span class="m0">Practice</span> Promoter</span2>
				</a><a id="aSection5" href="#web-design-1" class="center">
				<i class="small material-icons #2979ff blue accent-3 waves-effect">web</i><br/>
				<span>Web Design</span>
				</a><a id="aSection6" href="#hosting-1" class="center">
				<i class="small material-icons #29b6f6 light-blue lighten-1 waves-effect">language</i><br/>
				<span>Hosting</span>
				</a><a id="aSection7" href="#security-1" class="center">
				<i class="small material-icons #43a047 green darken-1 waves-effect">lock</i><br/>
				<span>Security</span>
				</a>
			</div>
		</div>
	</div>
</section>


<div id="genius-portal-1" class="anchor"></div>  



<section id="genius-portal" class="tb-padding-75 center sub-info section" rel="aSection1">
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h5 class="teal-text">
					<i class="small material-icons">insert_chart</i>
					Genius Portal
				</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">Manage your Website, Contacts, & More</h4>
				<p class="lead col l8 m12 s12">Get the information you need about your website and performance in one easy to use dashboard. 
					Every Doctor Genius plan comes with access to our data packed platform.
				</p>
				<br/><br/>
			</div>
		</div>
		<div class="row align-center">
			<div class="col s12 m6 l5 l-img">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/portal-dashboard.png"/>
			</div>
			<div class="col s0 m0 l1">
				<div class="sp-divider s0 m0 teal lighten-1 waves-effect waves-green"></div>
			</div>
			<div class="col s12 m6 l5 text-content">
				<h4 class="align-left left-align grey-text text-darken-2 mid-light-font">Product Features</h4>
				<br/>        
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Monitor incoming webforms & calls
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Review ranking, traffic, and user demographic reports
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Manage Appointments & contacts
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Screen your online reputation through one portal
				</p>
				<br/>
				<a href="/demo/" class="btn btn-small">Start with a Portal Walkthrough</a>
			</div>
		</div>
	</div>
</section>






<!-- RANK REPORTS -->
<div id="rank-reports-1" class="anchor"></div>  
<section id="rank-reports" class="tb-padding-75 center sub-info row-alt section" rel="aSection2">
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h5 class="red-text text-accent-2">        
					<i class="small material-icons">trending_up</i> Rank Reports
				</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">Identify your Patients and Valuable Keywords</h4>
				<p class="lead col l8 m12 s12">Narrow down what are your successful keywords, who is clicking on them, and which ones yield the highest number of new patient inquiries.</p>
				<br/><br/>
			</div>
		</div>
		<div class="row align-center">
			<div class="col s12 m6 l5 l-img">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/portal-charts.png"/>
			</div>
			<div class="col s0 m0 l1">
				<div class="sp-divider s0 m0 red accent-2"></div>
			</div>
			<div class="col s12 m6 l5 text-content">
				<h4 class="align-left left-align grey-text text-darken-2 mid-light-font">Product Features</h4>
				<br/>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Watch your targeted and matched keywords soar
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Review sessions, page views, users, & bounce rate
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Determine how long new users are viewing your website
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Get monthy updated reporting 
				</p>
				<br/>
				<a href="/demo/" class="btn btn-small red accent-2">Start with a Portal Walkthrough</a>
			</div>
		</div>
	</div>
</section>




<!-- LEAD TRACKING -->
<div id="lead-tracking-1" class="anchor"></div>  
<section id="lead-tracking" class="tb-padding-75 center sub-info section" rel="aSection3">
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h5 class="purple-text"><i class="small material-icons ">assignment_ind</i> Lead Tracking</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">Get to Know your Target Patient</h4>
				<p class="lead col l8 m12 s12">Get a detailed breakdown of your leads and their disposition. Know the outcome of each instance you recieve an incoming call by date, hour, and day.</p>
				<br/><br/>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m6 l5 l-img">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/lead-tracking.png"/>
			</div>
			<div class="col s0 m0 l1 center">
				<div class="sp-divider s0 m0 #9c27b0 purple waves-effect waves-purple"></div>
			</div>
			<div class="col s12 m6 l5 text-content">
				<h4 class="align-left left-align grey-text text-darken-2 mid-light-font">Product Features</h4>
				<br/>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Beautiful pie charts describe contact outcome
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Easily see if an appointment is booked during the call
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Distinguish existing patients from new
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Detailed filtering to identify patients vs telemarketers 
				</p>
				<br/>
				<a href="/demo/" class="btn btn-small #9c27b0 purple waves-effect waves-purple">See a Sample Report</a>
			</div>
		</div>
	</div>
</section>




<!-- PRACTICE PROMOTER -->
<div id="practice-promoter-1" class="anchor"></div>  
<section id="practice-promoter" class="tb-padding-75 center sub-info row-alt section" rel="aSection4">
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h5 class="orange-text"><i class="small material-icons">thumb_up</i> Practice Promoter</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">Quickly Grow your Practice's Online Reputation</h4>
				<p class="lead col l8 m12 s12">
					Get reviews from your existing patients fast with our streamlined contact process and form. 
					We direct your patients to your social profiles in a stepped out process that gets you reviews!
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m6 l5 l-img">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/practice-promoter.png"/>
			</div>
			<div class="col s0 m0 l1 center">
				<div class="sp-divider s0 m0 waves-effect waves-light orange"></div>
			</div>
			<div class="col s12 m6 l5 text-content">
				<h4 class="align-left left-align grey-text text-darken-2 mid-light-font">Product Features</h4>
				<br/>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Easily send your patients an SMS asking for an online review
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Get valuable feedback from patients about your practice
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Boost your online social profile interaction
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Build a positive online reputation
				</p>
				<br/>
				<a href="/demo/" class="btn btn-small waves-effect waves-light orange">Contact us to see it in action</a>
			</div>
		</div>
	</div>
</section>




<!-- WEB DESIGN -->
<div id="web-design-1" class="anchor margin0 padding0"></div>  
<div class="section" rel="aSection5" style="padding:0;">
<section class="sub-info" style="overflow:hidden;">
	<div class="container l0" style="padding-top:100px">
		<div class="row" style="margin-bottom:0;">
			<div class="col s0 m1"><br/></div>
			<div class="col s12 m10 center l0">
				<h5 class="blue-text text-accent-3"><i class="small material-icons">web</i> Web Design</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">
					Beautiful High Performing Websites Built to Convert.
				</h4>
				<br/>
				<h5 class="grey-text text-darken-2 mid-light-font">
					Stun your viewers with exquisitely designed websites & attractive branding.                   
					Getting appointments has never been easier.
				</h5>
				<br/><br/>
				<a href="/demo/" class="btn btn-small #29b6f6 light-blue lighten-1">Get Started</a> 
			</div>
			<div class="col s12 m12">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/stack.jpg"/>
			</div>
		</div>
	</div>
	<div class="row s0 m0" style="min-height:800px;overflow:hidden;margin-bottom:0;">
		<div class="col s0 m12 l6">
			<div id="website-stack" class="col s12 m12 l13 push-l2">
				<img id="website-1" class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-websites-1-min.png"/>
				<img id="website-2" class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-websites-2-min.png"/>
				<img id="website-3" class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-websites-3-min.png"/>
			</div>
		</div>
		<div class="col s0 m0 l1"><br/></div>
		<div id="mega-contain" class="col s12 m12 l5 left-align valign">
			<div>
				<br/><br/><br/><br/><br/><br/><br/>
				<h5 class="blue-text text-accent-3"><i class="small material-icons">web</i> Web Design</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">
					Beautiful, High Performing Websites Built to Convert.
				</h4>
				<br/>
				<h5 class="grey-text text-darken-2 mid-light-font">
					Stun your viewers with exquisitely designed websites & attractive branding.                   
					Getting appointments has never been easier.
				</h5>
				<br/><br/>
				<a href="/demo/" class="btn btn-small #29b6f6 light-blue lighten-1">Get Started</a> 
			</div>
		</div>
	</div>
</section>
<section class="sub-info row-alt section" style="padding-top:50px;">
  
	<div class="container l0">
		<div class="row">
			<div class="col s12 m12 l5 center padding-left">
				<h5 class="blue-text text-accent-3"><i class="small material-icons">web</i> Mobile Design</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">User-Friendly <br/>Mobile Responsive Websites.</h4>
				<br/>
				<h5 class="grey-text text-darken-2 mid-light-font">
					Target mobile & tablet users on the go. Accept incoming appointments from any device!
				</h5>
				<br/><br/>
				<a href="/demo/" class="btn btn-small #29b6f6 light-blue lighten-1">Get Started</a>       
			</div>
			<div class="col s12 m12 center">
				<img class="img-responsive" style="width: 500px; margin: auto; max-width: 100%;" src="/wp-content/uploads/2016/07/doctor-genius-responsive-websites-min.png"/>
			</div>
		</div>
	</div>
  
  
	<div class="container s0 m0">
		<div class="row valign-wrapper">
			<div class="col s12 m12 l5 left-align valign">
				<h5 class="blue-text text-accent-3  padding-left"><i class="small material-icons">web</i> Mobile Design</h5>
				<h4 class="grey-text text-darken-2 mid-light-font padding-left">User-Friendly <br/>Mobile Responsive Websites.</h4>
				<br/>
				<h5 class="grey-text text-darken-2 mid-light-font padding-left">
					Target mobile & tablet users on the go. Accept incoming appointments from any device!
				</h5>
				<br/><br/>
				<div class="padding-left">
					<a href="/demo/" class="btn btn-small #29b6f6 light-blue lighten-1">Get Started</a>
				</div>    
			</div>
			<div class="col s12 m12 l1"><br/></div>
			<div class="col s12 m12 l5">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-responsive-websites-min.png"/>
			</div>
		</div>
	</div>
</section>
</div>





<!-- WEB HOSTING -->
<div id="hosting-1" class="anchor"></div>  
<section id="hosting" class="tb-padding-75 center sub-info section" rel="aSection6">
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h5 class="light-blue-text text-lighten-1"><i class="small material-icons">language</i> Hosting</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">
					Enterprise Power for Medical Practice Websites
				</h4>
				<p class="lead col l8 m12 s12">
					We’re always first in line when it comes to running the latest technology. In addition to our servers being in the best location possible, we’re also using the best software available.
				</p>
				<br/>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m6 l5 l-img">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/doctor-genius-web-hosting.png"/>
			</div>
			<div class="col s0 m0 l1 center">
				<div class="sp-divider s0 m0 #29b6f6 light-blue lighten-1"></div>
			</div>
			<div class="col s12 m6 l5 text-content">
				<h4 class="align-left left-align grey-text text-darken-2 mid-light-font">Product Features</h4>
				<br/>        
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Premium Domain Included in each Plan
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Worry Free Unlimited Web Hosting
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> 99.9% Website Uptime Guaranteed
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Turbo fast hosting speed for quick page downloading
				</p>
				<br/>
				<a href="/demo/" class="btn btn-small #29b6f6 light-blue lighten-1">Learn More</a>
			</div>
		</div>
	</div>
</section>

<!-- SECURITY -->
<div id="security-1" class="anchor"></div>  
<section id="security" class="tb-padding-75 center sub-info row-alt section" rel="aSection7">
	<div class="container">
		<div class="row">
			<div class="col s12 m12 l12">
				<h5 class="green-text text-darken-1"><i class="small material-icons">lock</i> Security</h5>
				<h4 class="grey-text text-darken-2 mid-light-font">Highly Available and Completely Secure</h4>
				<p class="lead col l8 m12 s12">
					Nothing matters more than your practice's website reliability,
					so our team watches over your website 24 hours a day, seven days a week. 
				</p>
				<br/>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m6 l5 l-img">
				<img class="img-responsive" src="/wp-content/uploads/2016/07/secure-hosting.png"/>
			</div>
			<div class="col s0 m0 l1 center">
				<div class="sp-divider s0 m0 #43a047 green darken-1"></div>
			</div>
			<div class="col s12 m6 l5 text-content">
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Daily Website Backups 
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Consistent server maintenance
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Closed vulnerability with Secure File Transfer Protocol 
				</p>
				<p class="grey-text text-darken-2 mid-light-font">
					<i class="material-icons point">done</i> Dedicated IT staff monitoring our systems
				</p>
				<br/>
				<a href="/demo/" class="btn btn-small #43a047 green darken-1">Learn More</a>
			</div>
		</div>
	</div>
</section>




  	<section id="testimonials" class="tb-padding-100 white-text #2979ff blue accent-3 hide-s">
			<div class="container center">
				<div class="row">
					<div class="col s12 l10 offset-l1">
						<div class="img-circle white waves-effect" 
							style="width:75px;height:75px;border-radius:50%; margin:20px auto 0 auto;padding-top: 22px;"> <i class="material-icons small blue-text text-accent-3">comment</i> </div>
						<h3 class="light-font">See what our clients say about us.</h3>
						<div class="carousel" style="height: 780px; margin-top:-30px;">
							<div id="carousel-1" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img src="https://lh5.googleusercontent.com/-OJJmAN_QsWg/UehkpaUG0jI/AAAAAAAAAIg/-YRfsc-YXZkhAtv3HrsFR-3aVXwaX2unwCL0B/w1118-h1117-no/PICTURE%2BOF%2BDADOR.JPG" alt="" class="circle responsive-img"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											We absolutely love our website through Doctor Genius. We get a lot of compliments and new patients have been calling us regularly. We work with Francesco on a monthly basis and he is always wonderful to work with and very knowledgeable. We would highly recommend Doctor Genius to any office. Thanks so much! <br/><br/><b>- Tim Hubbs, DDS</b>
											</span>
											<br/><br/>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-2" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img src="https://lh4.googleusercontent.com/-EX4v5gcg9Vk/VdZSUIZPz4I/AAAAAAAAABE/bRIIuob8yXY7a1nupuPACKa_uRX1XIFNwCL0B/s654-no/IMG_1525.jpg" alt="" class="circle responsive-img"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											I just don't know where to begin, Doctor Genius is everything a dental practice needs, this is the best investment our office has ever made when it comes to online marketing and search engine optimization. John Rallis and his team are effective and efficient. Our new website is absolutely perfect, we couldn't be happier, we get a lot of compliments. in the last past 6 months, our new patients acquisition has tripled. It is a real pleasure to work with John, thank you so much for making this happen.
											<br/><br/><b>- Nadege Daddio</b>
											</span>
											<br/><br/>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-3" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img src="/wp-content/uploads/2016/07/joshua-hudson-dds.jpg" alt="Joshua Hudson" class="circle responsive-img"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											Have been with Doctor Genius for three years now and have been satisfied with result. They handle social, SEO and build my website for my office. I have constantly stated at #1 or 2 on the google search under multiple search titles. They seem to stay ahead of the curve when google changes.<br/><br/><b>- Joshua Hudson</b>
											<br/><br/>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-4" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img src="/wp-content/uploads/2016/07/mohammed-hassan.jpg" alt="Mohammed Hassan" class="circle responsive-img"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											Francesco and Doctor Genius have made our marketing experience easy and effective. We were skeptical that we would see a return on investment but we were so pleased that we have continued business with the company for many years now! Francesco makes customer service a great experience.<br/><br/><b>- Mohammed Hassan</b>
											<br/><br/>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-5" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img src="https://lh3.googleusercontent.com/-B2wHzul2HNM/T2UUud80dlI/AAAAAAAAADk/r0sP7_DaanMrLH29bcZ3c5vex1I3RmN6gCL0B/s370-no/pop.jpg" alt="" class="circle responsive-img"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											Doctor Genius has provided my practice with more than I have expected. I have been working with John, and he has been on top of everything. He is always following up with me to make sure everything I've requested is done perfectly. Doctor Genius does more than just help you create a website and marketing, they truly care for the services they do. I have already been seeing positive changes and growth to my practice since I joined with Doctor Genius. I cannot wait to see where Doctor Genius takes my practice within the next year.											
											<br/><br/><b>- Artashes Avakian</b>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-6" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img class="circle" src="https://www.sheltondentistry.com/wp-content/uploads/Dr-Robert-Shelton-DDS.jpg" alt="" class="circle responsive-img"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											I am a 65 year old gray haired dentist who hates all things "computers". My son encouraged me to have a website. So three years ago we had Doctor Genius build our new website. I have been greatly helped by the crew at Doctor Genius. I probably have talked mainly with Francesco and Martin, but everybody that I have dealt with have been super helpful and friendly. They walked me thru it and helped me put my best "look" forward in the website world. More than pleased and highly recommend them. We are beginning our fourth year together.											
											<br/><br/><b>- Robert Shelton</b>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-7" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img class="circle" src="https://lh6.googleusercontent.com/-ekIdkiPdqPA/VBHij0ob66I/AAAAAAAAAG0/9tTuVnPBbPMSSH_NYPwr6eJXqnW4cnZNACL0B/w1070-h1072-no/IMG_4331.JPG"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											Signing on with Doctor Genius has been a game changer for my dental office. My office went from having no online presence to appearing regularly on relevant searches in a matter of three months! I am confident that my rankings will get stronger and stronger as I continue working with this great company!										
											<br/><br/><b>- Kyle Thompson</b>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-8" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img class="circle" src="https://lh5.googleusercontent.com/-Dlud-nzWuVM/UbYMGykMVxI/AAAAAAAAADc/ovtd1-flXmk9YyipRR3RKWwGTMhHHhG0gCL0B/w718-h720-no/julia.png"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											Doctor Genius has greatly increased our exposure on Google (which has now cascaded to a prominent position on Yahoo and Bing), and have built us a very nice website to go along with it. Martin Graham and Damon have responded quickly and effectively to my needs, concerns, and demands. I would highly recommend using Doctor Genius for both website management and SEO needs.									
											<br/><br/><b>- Julia Neuls</b>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-9" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img class="circle" src="https://lh4.googleusercontent.com/-sXMcuKBLLtc/U54kdJRa6OI/AAAAAAAAAP8/PMHOfazQQl8K_vJ1mCLlSTG6EAmM0YW7QCL0B/s329-no/Sam%2527s%2Bphoto-zan.jpg"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											I have been working with Doctor Genius for almost a year now and I couldn't be more satisfied. Damion and the enitre crew have been absolutely amazing. They deliver what they promise hands down. Thank you Doctor Genius.									
											<br/><br/><b>- Sam Suliman</b>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
							<div id="carousel-10" class="carousel-item">
								<div class="card-panel grey lighten-5 z-depth-1">
									<div class="row">
										<div class="col s12 l6 offset-l3">
											<img class="circle" src="https://lh6.googleusercontent.com/-Chv-No4Fxf4/UpEK0OIYjDI/AAAAAAAAALU/cKGkmvM8MXA-fZuWZz8xY1hwHMKM5VoKwCL0B/w1200-h1204-no/IMG_5443.JPG"> 
										</div>
										<div class="col s12 l12 center">
											<span class="black-text left">
											These guys have changed my online presence in a dramatic way, and more patients are finding and calling us as a result of their work. Their team is friendly and responsive, and I'd definitely recommend them to my colleagues.									
											<br/><br/><b>- Dr James Helmy</b>
											</span>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
											<i class="material-icons">star</i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div id="carousel-indicators" class="col s6 offset-s3"></div>
					</div>
					<br/>
					<a class="btn-large waves-effect waves-light splash-blue" href="https://www.google.com/search?q=Doctor%20Genius&ludocid=677239818183003089#lrd=0x0:0x9660a06c68c4bd1,1" target="_blank"> Read all <span class="hide-s">of our </span>Reviews on Google+ </a>      
				</div>
			</div>
		</section>







<!-- FOOTER CTA -->
<section class="tb-padding-100 teal lighten-1">
	<div class="container center">
		<div class="row">
			<div class="col s12">
				<div class="img-circle white waves-effect" style="width:75px;height:75px;border-radius:50%; margin:20px auto 0 auto;padding-top: 22px;"> <i class="material-icons small teal-text text-lighten-1">mail</i> </div>
				<br/>
				<h4 class="white-text center mid-light-font">Love what you see?</h4>
				<h5 class="white-text mid-light-font">Contact us now for a FREE consultation & product walkthrough. </h5>
				<br/>
				<br/>
				<br/>
			</div>
			<div class="col s12 m12 l2"><br/></div>
			<div class="col s12 m12 l8">
				<?php echo do_Shortcode('[contact-form-7 id="109" title="Consultation Request"]');?>
			</div>
		</div>
	</div>
</section>


<?php get_footer();?>

<script>
$(function() {
  
  
$(document).ready(function(){
    $(this).scrollTop(0);
    $('#page-anchors').css('visibility','visible');
});  
  
$(document).ready(function(){
  
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});  

 			$('#page-anchors a').click(function(){
  			$('#page-anchors a.active').removeClass('active');
  			$(this).addClass('active');
  		});
  	
  
  
  
  	function navSq(){
  
		if($(window).width() > 600 || $(window).width() > 992){
      $('section#mobile-anchor .sL').css('height','50vw');  
      $('section#mobile-anchor .sL').css('padding-top', $('section#mobile-anchor .sL').height() / 2.5);                          
      $('section#mobile-anchor .sS').css('height','33.3vw');  
      $('section#mobile-anchor .sS').css('padding-top', $('section#mobile-anchor .sS').height() / 2.5);
  	}
  	else{
  		$('section#mobile-anchor .col').css('padding-top','0px');
  		$('section#mobile-anchor .col').css('height','auto');
  	}};
  
		
  	navSq();
  
                                  
    $(window).resize(function(){
    	navSq();                              
    });                              
                                  
                                  
    $('#tech-slide.carousel').carousel({indicators:true, full_width:true});
	
  	$(window).scroll(function(){
  
  			var headerHeight = $('#page-header').height() - 80;
  	
        if ($(window).scrollTop() > headerHeight){
            $('#page-anchors').addClass('topAnchor');
        }else{
            $('#page-anchors').removeClass('topAnchor');  
  			}
  
  	});
});          
  
</script>
<script type="text/javascript">
            $(window).scroll(function () {
  
                var scrollOffset = 300;
                var scrollPos = $(window).scrollTop() + scrollOffset;
                $('#page-anchors a').removeClass('active');
                
                $('.section').each(function () {                
                    if (scrollPos > $(this).offset().top && scrollPos < ($(this).offset().top + $(this).height())) {
                        $('#' + $(this).attr('rel')).addClass('active');
                    }
                });
            });
                                                                                             
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
<script>new WOW().init();</script>
</html>