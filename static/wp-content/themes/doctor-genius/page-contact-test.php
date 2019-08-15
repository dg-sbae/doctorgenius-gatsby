<?php
/**
 * Template Name: Contact Us Test
 */
?>
<?php get_template_part( 'includes/top-navigation'); ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<!-- UPDATE 09/05/2018 --->
<style>

section.hero { 
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#4d5f91+1,272d4e+100 */
background: #4d5f91; /* Old browsers */
background: -moz-linear-gradient(top, #43768f 1%, #053454 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #43768f 1%,#053454 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #43768f 1%,#053454 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d5f91', endColorstr='#272d4e',GradientType=0 ); /* IE6-9 */  
padding:50px 0 100px;
}

.hero i.material-icons { color:#fff; }
.hero h1 { color:#fff;line-height:.7em;font-weight:300; }
.hero h1 span { font-size:28px;font-weight:300; }

.cta .container { max-width:1200px!important; }
.cta .card { padding-top: 20px;display: block;position: relative;top: -115px; }
.cta i.material-icons {color: #ffffff;font-size: 42px;background: #2a5c77;border-radius: 100px;padding:  20px;margin: 0 0 14px;}
.cta h4 { font-size:2em;font-weight:300;margin:0 0 20px;color:#616161; }
.cta ul { display:table;margin:0 auto; }
.cta ul li { line-height:1.2em;margin-top:5px;font-weight:300;font-size:15px; }
.cta ul li span { font-size:14px;font-weight:600;color:#4d5f91; }
.cta iframe { display:table;padding:30px 0 0;}
.cta p { max-width:90%;line-height:1.2em;margin:0 auto 30px;font-weight:300; }
.cta .form-wrapper { padding: 0 40px 20px; }

.wpcf7-submit {color: #fff;border-radius: 60px;text-transform: capitalize;font-weight: 400;}
.input-field label { color:#30416f; }
.input-field label, input:not([type]), input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], textarea.materialize-textarea { font-size:14px; }

input:not([type]), input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], textarea.materialize-textarea { background:#f7f7f7;padding-left:8px; }

textarea { height:8em;font-size:14px; }

@media only screen and (max-width : 601px) {
    section.hero { padding:20px 0 85px; }
    i.large { font-size:4em; }
    .hero h1 { line-height: .9em;font-size: 40px;margin: 10px 0 25px; }
    .cta .container { width:90%; }
    .cta .form-wrapper { padding: 0 20px 20px; }
    .wpcf7-submit {  margin: 0 auto;text-align: center;display: block;width: 90%;font-size: 16px;}
}
</style>


<!--
<div style="position:fixed;top:50%;left:0;right:0;bottom:0;margin:auto;z-index:999999999;"><hr style="margin:0;opacity:.5"/></div>
<hr style="position:fixed;top:0%;left:0%;right:0;bottom:0;margin:auto;z-index: 9999999999999999999;transform: rotate(90deg);opacity:.5"/>
-->


<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l12">
                <div class="center">
                    <i class="large material-icons">business</i>
                    <h1><?php echo get_the_title();?><br><span>Get in Touch with us </span></h1>                    
                </div>
            </div>
        </div>
    </div>
</section>  
  
<section class="cta">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l6 push-l6">
                <div class="card z-depth-2">
                    <div class="col s12 m12 center">
                        <i class="material-icons z-depth-1">mail</i>
                        <h4>Send Us a Message</h4>
                        <p>Have a question? Need help? <br/>Use the form below to get directly in contact with our support staff.</p>
                    </div>                    
                    <div class="form-wrapper">
                        <?php echo do_Shortcode('[contact-form-7 id="1095" title="Contact Us"]');?>
                    </div>                    
                </div>
            </div>
            <div class="col s12 push m12 l6 pull-l6">
                <div class="card z-depth-2">
                    <div class="col s12 m12 center">
                        <i class="material-icons z-depth-1">store</i>
                        <h4>Our Locations</h4>
                        <ul>
                            <li><span>Address:</span><br>2121 Alton Pkwy, Suite 150<br> Irvine, CA 92606</li>
                            <li><span>Phone:</span><br>(877) 477-2311</li>
                            <li><span>Hours:</span><br>Monday - Friday 7am - 5pm</li>
                        </ul>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13278.228506422389!2d-117.839795!3d33.69453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9660a06c68c4bd1!2sDental+Genius!5e0!3m2!1sen!2sus!4v1470278651902" width="100%" height="396" frameborder="0" style="border:0" allowfullscreen></iframe>  
                </div>
            </div>            
        </div>
    </div>    
</section>
  
<style type='text/css'>
    .embeddedServiceHelpButton .helpButton .uiButton { background-color: #1296d6; font-family: "Salesforce Sans", sans-serif;border-radius:50px;padding:0 18px; }
    .embeddedServiceHelpButton .helpButton .uiButton:focus { outline: 1px solid #005290; }
    .embeddedServiceHelpButton .helpButton { position: fixed;bottom: 14px;right: 20px; }
    .embeddedServiceHelpButton .embeddedServiceIcon { margin-right:10px; }

    @media only screen and (max-width : 601px) {
    .embeddedServiceHelpButton .helpButton { right:0px;width:50px; }
    .embeddedServiceHelpButton .helpButton .uiButton { height:60px;padding:0 18px 0 15px;border-radius: 50px 0 20px 0;font-size:20px; }
    .embeddedServiceHelpButton .uiButton .helpButtonLabel { display:none; }
    .embeddedServiceHelpButton .embeddedServiceIcon { margin-right: 0px;margin-top: 10px;margin-left: 2px; }
    
    }

    @font-face {
    font-family: 'Salesforce Sans';
    src: url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff') format('woff'),
    url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf') format('truetype');
    }
</style>

<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
var initESW = function(gslbBaseURL) {
embedded_svc.settings.displayHelpButton = true; //Or false
embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

// Settings for Live Agent
//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
// Returns a valid button ID.
//};
//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

embedded_svc.settings.enabledFeatures = ['LiveAgent'];
embedded_svc.settings.entryFeature = 'LiveAgent';

embedded_svc.init('https://doctorgenius.my.salesforce.com', 'https://doctorgenius.secure.force.com/chat', gslbBaseURL, '00Df4000000nWNi', 'Doctor_Genius_Website_Chat', { baseLiveAgentContentURL: 'https://c.la4-c1-dfw.salesforceliveagent.com/content', deploymentId: '572f4000000Tlpk', buttonId: '573f4000000Tjy1', baseLiveAgentURL: 'https://d.la4-c1-dfw.salesforceliveagent.com/chat', eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04If4000000TRDCEA4_16586b7bf0c', isOfflineSupportEnabled: false}); };if (!window.embedded_svc) { var s = document.createElement('script'); s.setAttribute('src', 'https://doctorgenius.my.salesforce.com/embeddedservice/5.0/esw.min.js'); s.onload = function() { initESW(null); }; document.body.appendChild(s); } else { initESW('https://service.force.com'); }</script>  


<?php get_footer();?>

<script type="text/javascript">

  LssJM.init();

  var Sent = $('.wpcf7-mail-sent-ok').text();
  if(Sent == 'Thank you for your message. It has been sent.'){
  	window.location.href = "/confirmation"

}
  
  
</script> 


</html>