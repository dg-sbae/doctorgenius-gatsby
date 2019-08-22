<?php

	//Confirmation

?>
<?php get_template_part( 'includes/top-navigation'); ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<style>
.sub-info img {
    margin: auto;
    width: 100%;
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
.overlay {
    display: block;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 0;
}  
</style>

<!--
<div style="position:fixed;top:50%;left:0;right:0;bottom:0;margin:auto;z-index:999999999;"><hr style="margin:0;opacity:.5"/></div>
<hr style="position:fixed;top:0%;left:0%;right:0;bottom:0;margin:auto;z-index: 9999999999999999999;transform: rotate(90deg);opacity:.5"/>
-->
<section class="blue" style="min-height: 75vh; background-image: url('/wp-content/uploads/2016/08/bg.jpg'); background-size: cover;overflow:hidden;position:relative;">
  <div class="overlay"></div>
  <div class="container tb-padding-100">
      <div class="row">
         <div class="col s12 m12 l5 offset-l3 center white z-depth-4" style="z-index:3;position:relative;">
            <div id="stripes">
               <div class="row" style="margin-bottom:0;">
                  <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                  <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                  <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                  <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
               </div>
            </div>
            <br/><br/>      
           <div class="col s12 m12 l12">
            <div class="circle green" style="width:75px;height:75px;border-radius:50%; margin:0px auto 10px auto;padding-top: 22px;"> <i class="material-icons small white-text">mail</i> </div>
            <br/>
            <h3 class="center grey-text text-darken-2 mid-light-font mid-light-font margin0 padding0 fadeIn wow">Message Sent</h3>
            <br/>
            <h5 class="grey-text text-darken-2 lh-150 mid-light-font">We have received your message and we will respond within 24 hours or less. 
               Don't hesitate to contact us directly via phone at (877) 477-2311 if you need immediate assistance.
            </h5>
            <br/>
            <a href="/" class="btn btn-large">Click here to go back to the Home Page</a>
            <div class="clearfix">
               <br/>
            </div>
            <br/><br/>

         </div>
            <div id="stripes">
               <div class="row" style="margin-bottom:0;">
                  <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                  <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                  <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                  <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
               </div>
            </div>      </div>
   </div>
</div>
</section>

<?php get_footer();?>



<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
<script>new WOW().init();</script>