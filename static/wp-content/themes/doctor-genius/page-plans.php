<?php
/**
 * Template Name: Plans
 */
?>
<?php get_template_part( 'includes/top-navigation'); ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->



<style>


    @media (min-width: 993px) {
        .plan-wrapper { position:relative;top:-300px;margin-bottom:-250px; }

    }

    #page-header {
        background-color: #dbdde0;
        margin-top: -33px;
        padding-top: 80px;
        margin-bottom: 0;
        background-image: url(/wp-content/uploads/2016/08/plans.jpg);
        background-size: cover;
        height: 650px;
        background-position: top left;
        padding-top: 90px;
        overflow: hidden;
        position: relative;
    }

    #page-header .overlay {
        display: block;
        width: 100%;
        height: 800px;
        background-color: rgba(0, 0, 0, 0.54);
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    #page-header container{
        position:relative;
        z-index:1;
    }

    div.table {
        border: 0;
        background: transparent;
    }
    .card{
        background-color: #e7e7e8;
        padding:0;
        float:none;
        margin-auto;
    }
    .table-title {
        height: 90px;
    }

    .table ul li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.19);
        padding-top: 0;
    }
    .plan, .labels {
        padding: 50px 0 0 0!important;
        margin: 0!important;
    }

    #see-plans li {
        height: 65px;
    }

    #see-plans ul {
        margin: -10px 0 0 0;
    }

    .card {
        padding: 0!important;
    }

    .plan {
        border-left: 1px solid rgba(85, 85, 85, 0.26);
        box-shadow: 0 0 35px rgba(0, 0, 0, 0.07);
    }

    .labels p {
        padding-right: 35px!important;
        color: #616161;
        font-weight: 400!important;
    }
    .labels h5 {
        padding-right: 30px;
        margin-top: -1px;
        margin-bottom: 0;
    }
    .labels strong {
        color:#333;
    }
    #see-plans .row {
        margin-bottom: 0;
    }
    .price{
        color:#333;
        font-weight: 800;
    }
    .price em {
        font-size: 16px;
        font-weight: 400;
    }
    .table .btn {
        margin: 25px 0;
    }

    i.fa.fa-close {
        color: orangered;
    }
    #see-plans p {
        font-weight: 800;
        margin: 0;
        padding: 22px;
    }
    section#see-plans > .container {
        /* margin-top: -320px; */
        padding:0 5%;
    }
    span#recommended {
        display: block;
        position: absolute;
        width: 100px;
        height: 100px;
        background-image: url(/wp-content/uploads/2016/08/recommended.png);
        top: -69px;
        left: -3px;
    }
    .table-title {
        position: relative;
    }
    #see-plans li:nth-child(odd) {
        background: rgba(255, 255, 255, 0.51);
    }
    .table ul li:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.19);
    }
    .table-title + span a {
        margin-top: -15px!Important;
        margin-bottom: 35px!important;
    }
    @media (max-width: 991px){
        #see-plans p {
            float: right;
        }
        i.fa.fa-circle:after {
            content: 'Included';
            font-family: sans-serif;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 5px;
        }
        i.fa.fa-close:after {
            content: 'Not Included';
            font-family: sans-serif;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 5px;
        }
        .table-title + span, li + span {
            width: 100%;
            text-align: center;
            display: block;
            margin-top: 25px;
        }
        .table-title + span, li + span {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        li[data-title="Call Tracking Web Integration"],
        li[data-title="Customer Support"],
        li[data-title="Genius Framework Website"],
        li[data-title="Strategic Content Writing"],
        li[data-title="Search Engine Optimization"],
        li[data-title="Integrated Performance Reporting"],
        li[data-title="Social Media Promotion"],
        li[data-title="Paid Advertising Campaigns"],
        li[data-title="Traditional Marketing"],
        li[data-title="Call Tracking"]{
            display:none;
        }
        div#see-plans > div {
            background-color: #e7e7e8;
        }
        .tab {
            background: steelblue;
            color: white;
            border: 2px solid white;
        }

        .indicator {
            margin-top: 10px;
        }

        .tab a.active {
            background: #4CAF50;
        }

        .tab a {
            background: #3F51B5;
            color: white!important;
        }
        #page-header {
            background-color: #dbdde0;
            margin-top: -33px;
            padding-top: 80px;
            margin-bottom: 0;
            background-image: url(/wp-content/uploads/2016/08/plans.jpg);
            background-size: cover;
            height: 500px;
            background-position: 70% 50%;
            padding-top: 90px;
            overflow: hidden;
            position: relative;
        }




    }
    @media (min-width: 601px) and (max-width: 991px){
        .table li:before {
            content: attr(data-title);
            float: left;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            padding-left: 15px;
            padding-top: 23px;
        }

    }
    @media (max-width: 600px){
        .table li:before {
            content: attr(data-title-mobile);
            float: left;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            padding-left: 15px;
            padding-top: 23px;
        }
    }
    .tabs .indicator {
        top: 44px;
        background-color: #2196F3;
    }

    .tabs {
        overflow: inherit;
    }
    li[data-title="Customer Support"], li[data-title="Genius Framework Website"], li[data-title="Strategic Content Writing"], li[data-title="Search Engine Optimization"], li[data-title="Integrated Performance Reporting"], li[data-title="Social Media Promotion"], li[data-title="Paid Advertising Campaigns"], li[data-title="Traditional Marketing"], li[data-title="Call Tracking"] {
        background-color: #a6aabc!important;
        color: white!important;
    }
    @media(min-width:992px) and (max-width:1500px){
        section#see-plans .container, section#see-plans .container .card {
            width: 100%;
        }}
    #see-plans li.active {
        background: #b2dafa;
        cursor:pointer;
    }
</style>

<style>
    #Faqs { color:#fff;padding-bottom:60px; }
    #Faqs .row { padding:0; }
    #Faqs .row .col { padding:0 50px; }
    #Faqs .divider { height:3px;max-width:110px;width:100%;display:block;margin:15px auto 0;background:#03717b; }
    #Faqs img { max-width:100%; }
    #Faqs i.fa { display:block;text-align:center;padding-top:50px; }
    #Faqs .intro-wrap { background:#007a86;border-radius:8px;width:94%;padding:1%;margin:20px auto; }
    #Faqs .intro-wrap .heading { border:none; }
    #Faqs h3.title { text-align:center;font-size:3em;margin:0;padding:20px 0 0 0; }
    #Faqs .google-badge { display:block;margin:0 auto; }
    #Faqs .heading { font-size:1.5em;font-weight:300;line-height:1.1em;color:#fff;border-top:1px dotted #1e9fab;padding-top:20px; }
    #Faqs p { font-weight:300;margin:10px 0;color:#dcfcff; }

    @media only screen and (max-width: 600px) {
        #Faqs .row .col { padding:0 20px; }
        #Faqs .valign-wrapper { display:block; }
        #Faqs .google-badge { margin:20px auto; }
        #Faqs .heading { margin-top:20px; }
        #Faqs .intro-wrap .heading { border:none;margin-top:0;padding-top:0; }
        #Faqs .google-badge { margin:30px auto; }
    }
</style>



<!--
<div style="position:fixed;top:50%;left:0;right:0;bottom:0;margin:auto;z-index:999999999;"><hr style="margin:0;opacity:.5"/></div>
<hr style="position:fixed;top:0%;left:0%;right:0;bottom:0;margin:auto;z-index: 9999999999999999999;transform: rotate(90deg);opacity:.5"/>
-->


<section id="page-header" class="center tb-padding-75">
    <div class="overlay"></div>
    <div class="container">
        <div class="row" style="margin-top:0;margin-bottom: 0;position:relative;z-index:1;">
            <h1 class="white-text mid-light-font margin0 padding0 fadeIn wow">
                <i class="large material-icons ">business</i>
                <br/>
                Our <?php echo get_the_title();?>
            </h1>
            <h4 class="white-text mid-light-font margin0 padding0 fadeIn wow">How we answer your Practice's online marketing needs.</h4>
        </div>
    </div>
</section>
<div id="stripes">
    <div class="row" style="margin-bottom:0;">
        <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
        <div class="col s3 m3 l3 #9c27b0 purple"> </div>
        <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
        <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
    </div>
</div>



<div class="plan-wrapper">
    <section id="see-plans" class="tb-padding-100 center s0 m0">
        <div class="container ">
            <div class="row">
                <div class="col l12 card">
                    <div id="stripes">
                        <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                        <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                        <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                        <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
                    </div>
                    <div class="col s12 m12 l6 labels s0 m0">
                        <div class="table align-right right-align">
                            <div class="table-title grey-text text-darken-2 mid-light-font">
                                <br>
                            </div>
                            <h5>
                                <strong>
                                    Plan Features<br><br>
                                </strong>
                            </h5>
                            <ul id="x" style="padding-top:0;margin-top:0;">
                                <li data-title="Genius Framework Website" class="" data-title-mobile="Genius Framework Website">
                                    <p>
                                        <strong>
                                            <i class="fa fa-desktop" aria-hidden="true"></i>
                                            Genius Framework Website
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                    <p><span>High Performance Website</span></p>
                                </li>
                                <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                    <p><span>SEO Focused Domain Name (optional)</span></p>
                                </li>
                                <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                    <p><span>Secure Reliable Hosting</span></p>
                                </li>
                                <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                    <p><span>Migrated/Scraped Pages</span></p>
                                </li>
                                <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                    <p><span>Website Revisions</span></p>
                                </li>
                                <li data-title="Strategic Content Writing" class="" data-title-mobile="Strategic Content Writing">
                                    <p>
                                        <strong>
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                            Strategic Content Writing
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                    <p><span>Targeted Organic Keywords</span></p>
                                </li>
                                <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                    <p><span>Industry Related Service Page Content</span></p>
                                </li>
                                <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                    <p><span>Doctor &amp; Staff Page</span></p>
                                </li>
                                <li data-title="Call to Action Home Page Slides" data-title-mobile="Call to Action Home Page Slides">
                                    <p><span>Call to Action Home Page Slides</span></p>
                                </li>
                                <li data-title="PR Release" data-title-mobile="PR Release">
                                    <p><span>PR Release</span></p>
                                </li>
                                <li data-title="Search Engine Optimization" class="" data-title-mobile="Search Engine Optimization">
                                    <p>
                                        <strong>
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                            Search Engine Optimization
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                    <p><span>On-Site Optimization</span></p>
                                </li>
                                <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                    <p><span>Structured Data Markup</span></p>
                                </li>
                                <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                    <p><span>Monthly review from an SEO Analyst</span></p>
                                </li>
                                <li data-title="Integrated Performance Reporting" class="" data-title-mobile="Integrated Performance Reporting">
                                    <p>
                                        <strong>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                            Integrated Performance Reporting
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                    <p><span>Google Analytics Integration</span></p>
                                </li>
                                <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                    <p><span>Google Webmaster Integration</span></p>
                                </li>
                                <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                    <p><span>Google Ranking Reporting</span></p>
                                </li>
                                <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                    <p><span>Ranking Report Monthly Email</span></p>
                                </li>
                                <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                    <p><span>New Patient Inquiry Reporting</span></p>
                                </li>
                                <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                    <p><span>Call &amp; Web Submissions Tracking</span></p>
                                </li>
                                <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                    <p><span>Advanced Google Analytics Goal Setting</span></p>
                                </li>
                                <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                    <p><span>Appointment Request Integration</span></p>
                                </li>
                                <li data-title="Social Media Promotion" class="" data-title-mobile="Social Media Promotion">
                                    <p>
                                        <strong>
                                            <i class="fa fa-bullhorn" aria-hidden="true"></i>
                                            Social Media Promotion
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                    <p><span>Practice Promoter</span></p>
                                </li>
                                <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                    <p><span>Blog Posts</span></p>
                                </li>
                                <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                    <p><span>Social Media Syndication</span></p>
                                </li>
                                <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                    <p><span>Social Media Branding</span></p>
                                </li>
                                <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                    <p><span>Directory Submissions</span></p>
                                </li>
                                <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                    <p><span>Duplicate Suppression</span></p>
                                </li>
                                <li data-title="Paid Advertising Campaigns" class="" data-title-mobile="Paid Advertising Campaigns">
                                    <p>
                                        <strong>
                                            <i class="fa fa-bullhorn" aria-hidden="true"></i>
                                            Paid Advertising Campaigns
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                    <p><span>Google Search Display Banner Advertising</span></p>
                                </li>
                                <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                    <p><span>Google Re‐Marketing Advertising</span></p>
                                </li>
                                <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                    <p><span>Landing Pages on Sub Domains</span></p>
                                </li>
                                <li data-title="Traditional Marketing" class="" data-title-mobile="Traditional Marketing">
                                    <p>
                                        <strong>
                                            <i class="fa fa-bullseye" aria-hidden="true"></i>
                                            Traditional Marketing
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                    <p><span>Logo Creation or Enhancement</span></p>
                                </li>
                                <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                    <p><span>2,000 Branded Business Cards</span></p>
                                </li>
                                <li data-title="Call Tracking" class="" data-title-mobile="Call Tracking">
                                    <p>
                                        <strong>
                                            <i class="fa fa-mobile" aria-hidden="true"></i>
                                            Call Tracking
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                    <p><span>Call Tracking Phone Number</span></p>
                                </li>
                                <li data-title="Call Tracking Web Integration" data-title-mobile="Call Tracking Web Integration">
                                    <p><span>Call Tracking Web Integration</span></p>
                                </li>
                                <li data-title="Customer Support" class="" data-title-mobile="Customer Support">
                                    <p>
                                        <strong>
                                            <i class="fa fa-users" aria-hidden="true"></i>
                                            Customer Support
                                        </strong>
                                    </p>
                                </li>
                                <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                    <p><span>Dedicated Support Representative</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Tier 1 -->
                    <div class="col s12 m12 l2 plan">
                        <div class="table">
                            <div class="table-title grey-text text-darken-2 mid-light-font">
                                <h5 class="price">SILVER <span class="l0">PLAN</span><br> <em class="text-center">+ Website Fee</em> </h5>
                            </div>
                            <span style="height:70px;border:0;"> 
						<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a>
						</span>
                            <ul>
                                <li data-title="Genius Framework Website" class="" data-title-mobile="Genius Framework Website">
                                    <p></p>
                                </li>
                                <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                    <p>10 Pages</p>
                                </li>
                                <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                    <p>1 Round</p>
                                </li>
                                <li data-title="Strategic Content Writing" class="" data-title-mobile="Strategic Content Writing">
                                    <p></p>
                                </li>
                                <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                    <p>25 Keywords</p>
                                </li>
                                <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call to Action Home Page Slides" class="" data-title-mobile="Call to Action Home Page Slides">
                                    <p>3 CTA Slides</p>
                                </li>
                                <li data-title="PR Release" data-title-mobile="PR Release">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="Search Engine Optimization" class="" data-title-mobile="Search Engine Optimization">
                                    <p></p>
                                </li>
                                <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Integrated Performance Reporting" class="" data-title-mobile="Integrated Performance Reporting">
                                    <p></p>
                                </li>
                                <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Social Media Promotion" class="" data-title-mobile="Social Media Promotion">
                                    <p></p>
                                </li>
                                <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                    <p>120 Day Trial</p>
                                </li>
                                <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                    <p>1 Post / Mo</p>
                                </li>
                                <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Paid Advertising Campaigns" class="" data-title-mobile="Paid Advertising Campaigns">
                                    <p></p>
                                </li>
                                <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="Traditional Marketing" class="" data-title-mobile="Traditional Marketing">
                                    <p></p>
                                </li>
                                <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="Call Tracking" class="" data-title-mobile="Call Tracking">
                                    <p></p>
                                </li>
                                <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call Tracking Web Integration" data-title-mobile="Call Tracking Web Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Customer Support" class="" data-title-mobile="Customer Support">
                                    <p></p>
                                </li>
                                <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <span style="height:70px;border:0;"> 
							<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a></span>
                            </ul>
                        </div>
                    </div>
                    <!-- Tier 2 -->
                    <div class="col s12 m12 l2 plan">
                        <div class="table bump">
                            <div class="table-title grey-text text-darken-2 mid-light-font">
                                <span id="recommended" class="s0 m0"></span>
                                <h5 class="price">GOLD <span class="l0">PLAN</span><br>
                                    <em class="text-center">+ Website Fee</em>
                                </h5>
                            </div>
                            <span style="height:70px;border:0;"> 
						<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a>
						</span>
                            <ul>
                                <li data-title="Genius Framework Website" class="" data-title-mobile="Genius Framework Website">
                                    <p></p>
                                </li>
                                <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                    <p>20 Pages</p>
                                </li>
                                <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                    <p>3 Rounds</p>
                                </li>
                                <li data-title="Strategic Content Writing" class="" data-title-mobile="Strategic Content Writing">
                                    <p></p>
                                </li>
                                <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                    <p>35 Keywords</p>
                                </li>
                                <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call to Action Home Page Slides" class="" data-title-mobile="Call to Action Home Page Slides">
                                    <p>6 CTA Slides</p>
                                </li>
                                <li data-title="PR Release" data-title-mobile="PR Release">
                                    <p>Annually</p>
                                </li>
                                <li data-title="Search Engine Optimization" class="" data-title-mobile="Search Engine Optimization">
                                    <p></p>
                                </li>
                                <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Integrated Performance Reporting" class="" data-title-mobile="Integrated Performance Reporting">
                                    <p></p>
                                </li>
                                <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Social Media Promotion" class="" data-title-mobile="Social Media Promotion">
                                    <p></p>
                                </li>
                                <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i>
                                    </p>
                                </li>
                                <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                    <p>2 Posts / Mo</p>
                                </li>
                                <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Paid Advertising Campaigns" class="" data-title-mobile="Paid Advertising Campaigns">
                                    <p></p>
                                </li>
                                <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                    <p>2 Landing Pages</p>
                                </li>
                                <li data-title="Traditional Marketing" class="" data-title-mobile="Traditional Marketing">
                                    <p></p>
                                </li>
                                <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                    <p><i class="fa fa-close"></i></p>
                                </li>
                                <li data-title="Call Tracking" class="" data-title-mobile="Call Tracking">
                                    <p></p>
                                </li>
                                <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call Tracking Web Integration" data-title-mobile="Call Tracking Web Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Customer Support" class="" data-title-mobile="Customer Support">
                                    <p></p>
                                </li>
                                <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <span style="height:70px;border:0;"> 
							<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a></span>
                            </ul>
                        </div>
                    </div>
                    <!-- Tier 3 -->
                    <div class="col s12 m12 l2 plan">
                        <div class="table">
                            <div class="table-title grey-text text-darken-2 mid-light-font">
                                <h5 class="price">PLATINUM <span class="l0">PLAN</span><br>
                                    <em class="text-center">+ Website Fee</em>
                                </h5>
                            </div>
                            <span style="height:70px;border:0;"> 
						<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a>
						</span>
                            <ul>
                                <li data-title="Genius Framework Website" class="" data-title-mobile="Genius Framework Website">
                                    <p></p>
                                </li>
                                <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                    <p>50 Pages</p>
                                </li>
                                <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                    <p>4 Rounds</p>
                                </li>
                                <li data-title="Strategic Content Writing" class="" data-title-mobile="Strategic Content Writing">
                                    <p></p>
                                </li>
                                <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                    <p>55 Keywords</p>
                                </li>
                                <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call to Action Home Page Slides" class="" data-title-mobile="Call to Action Home Page Slides">
                                    <p>8 CTA Slides</p>
                                </li>
                                <li data-title="PR Release" data-title-mobile="PR Release">
                                    <p>Bi-Annually</p>
                                </li>
                                <li data-title="Search Engine Optimization" class="" data-title-mobile="Search Engine Optimization">
                                    <p></p>
                                </li>
                                <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Integrated Performance Reporting" class="" data-title-mobile="Integrated Performance Reporting">
                                    <p></p>
                                </li>
                                <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Social Media Promotion" class="" data-title-mobile="Social Media Promotion">
                                    <p></p>
                                </li>
                                <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                    <p>3 Posts / Mo</p>
                                </li>
                                <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Paid Advertising Campaigns" class="" data-title-mobile="Paid Advertising Campaigns">
                                    <p></p>
                                </li>
                                <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                    <p>4 Landing Pages</p>
                                </li>
                                <li data-title="Traditional Marketing" class="" data-title-mobile="Traditional Marketing">
                                    <p></p>
                                </li>
                                <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call Tracking" class="" data-title-mobile="Call Tracking">
                                    <p></p>
                                </li>
                                <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Call Tracking Web Integration" data-title-mobile="Call Tracking Web Integration">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <li data-title="Customer Support" class="" data-title-mobile="Customer Support">
                                    <p></p>
                                </li>
                                <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                    <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                                </li>
                                <span style="height:70px;border:0;"> 
							<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a></span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


<!-- MOBILE VERSION -->
<section class="s12 m12 l0">
    <br/>
    <div class="row">
        <div class="col s12 center">
            <br/>
            <h5>Select a Plan to Learn More</h5><br/>
            <ul class="tabs">
                <li class="tab col s3"><a class="active" href="#test1">SILVER</a></li>
                <li class="tab col s3"><a href="#test2">GOLD</a></li>
                <li class="tab col s3"><a href="#test3">PLATINUM</a></li>
            </ul>
            <br/><br/>
        </div>
        <div id="test1" class="col s12">
            <div id="stripes">
                <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
            </div>
            <div id="see-plans">
                <div class="col s12 m12 l2 plan">
                    <div class="table">
                        <div class="table-title grey-text text-darken-2 mid-light-font center">
                            <h5 class="price">SILVER <span class="l0">PLAN</span><br> <em class="text-center">+ Website Fee</em> </h5>
                        </div>
                        <span style="height:70px;border:0; center"> 
						<a href="/demo/" class="btn btn-small green darken-1 center">Sign Up</a>
						</span>
                        <ul>
                            <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                <p>10 Pages</p>
                            </li>
                            <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                <p>1 Round</p>
                            </li>
                            <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                <p>25 Keywords</p>
                            </li>
                            <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call to Action Home Page Slides" class="" data-title-mobile="Call to Action Home Page Slides">
                                <p>3 CTA Slides</p>
                            </li>
                            <li data-title="PR Release" data-title-mobile="PR Release">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                <p>120 Day Trial</p>
                            </li>
                            <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                <p>1 Post / Mo</p>
                            </li>
                            <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <span style="height:70px;border:0;"> 
							<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a></span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="test2" class="col s12">
            <div id="stripes">
                <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
            </div>
            <div id="see-plans">
                <div class="col s12 m12 l2 plan">
                    <div class="table bump">
                        <div class="table-title grey-text text-darken-2 mid-light-font center">
                            <span id="recommended" class="s0 m0"></span>
                            <h5 class="price">GOLD <span class="l0">PLAN</span><br>
                                <em class="text-center">+ Website Fee</em>
                            </h5>
                        </div>
                        <span style="height:70px;border:0;"> 
						<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a>
						</span>
                        <ul>
                            <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                <p>20 Pages</p>
                            </li>
                            <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                <p>3 Rounds</p>
                            </li>
                            <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                <p>35 Keywords</p>
                            </li>
                            <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call to Action Home Page Slides" class="" data-title-mobile="Call to Action Home Page Slides">
                                <p>6 CTA Slides</p>
                            </li>
                            <li data-title="PR Release" data-title-mobile="PR Release">
                                <p>Annually</p>
                            </li>
                            <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                <p><i class="fa fa-circle green-text text-darken-1"></i>
                                </p>
                            </li>
                            <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                <p>2 Posts / Mo</p>
                            </li>
                            <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                <p>2 Landing Pages</p>
                            </li>
                            <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                <p><i class="fa fa-close"></i></p>
                            </li>
                            <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <span style="height:70px;border:0;"> 
							<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a></span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="test3" class="col s12">
            <div id="stripes">
                <div class="col s3 m3 l3 #1de9b6 teal accent-3"> </div>
                <div class="col s3 m3 l3 #9c27b0 purple"> </div>
                <div class="col s3 m3 l3 #ff5252 red accent-2"> </div>
                <div class="col s3 m3 l3 #ffc400 amber accent-3"> </div>
            </div>
            <div id="see-plans">
                <div class="col s12 m12 l2 plan">
                    <div class="table">
                        <div class="table-title grey-text text-darken-2 mid-light-font center">
                            <h5 class="price">PLATINUM <span class="l0">PLAN</span><br>
                                <em class="text-center">+ Website Fee</em>
                            </h5>
                        </div>
                        <span style="height:70px;border:0;"> 
						<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a>
						</span>
                        <ul>
                            <li data-title="High Performance Website" class="" data-title-mobile="High Performance Website">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="SEO Focused Domain Name" data-title-mobile="Domain Name">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Secure Reliable Hosting" class="" data-title-mobile="Secure Reliable Hosting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Migrated/Scraped Pages" class="" data-title-mobile="Migrated/Scraped Pages">
                                <p>50 Pages</p>
                            </li>
                            <li data-title="Website Revisions" data-title-mobile="Website Revisions">
                                <p>4 Rounds</p>
                            </li>
                            <li data-title="Targeted Organic Keywords" data-title-mobile="Targeted Organic Keywords">
                                <p>55 Keywords</p>
                            </li>
                            <li data-title="Industry Related Service Page Content" data-title-mobile="Industry Related Content">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Doctor &amp; Staff Page" data-title-mobile="Doctor &amp; Staff Page">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call to Action Home Page Slides" class="" data-title-mobile="Call to Action Home Page Slides">
                                <p>8 CTA Slides</p>
                            </li>
                            <li data-title="PR Release" data-title-mobile="PR Release">
                                <p>Bi-Annually</p>
                            </li>
                            <li data-title="On-Site Optimization" data-title-mobile="On-Site Optimization">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Structured Data Markup" data-title-mobile="Structured Data Markup">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Monthly review from an SEO Analyst" data-title-mobile="Monthly SEO Review">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Analytics Integration" data-title-mobile="Google Analytics Integration">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Webmaster Integration" data-title-mobile="Webmaster Tools">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Ranking Reporting" data-title-mobile="Rank Reporting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Ranking Report Monthly Email" data-title-mobile="Rank Report Monthly Email">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="New Patient Inquiry Reporting" data-title-mobile="New Patient Inquiry Reporting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call &amp; Web Submissions Tracking" data-title-mobile="Call &amp; Webform Tracking">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Advanced Google Analytics Goal Setting" data-title-mobile="Analytics Goal Setting">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Appointment Request Integration" data-title-mobile="Appointments Integration">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Practice Promoter" data-title-mobile="Practice Promoter">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Blog Posts" data-title-mobile="Blog Posts">
                                <p>3 Posts / Mo</p>
                            </li>
                            <li data-title="Social Media Syndication" data-title-mobile="Social Media Syndication">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Social Media Branding" data-title-mobile="Social Media Branding">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Directory Submissions" data-title-mobile="Directory Submissions">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Duplicate Suppression" data-title-mobile="Duplicate Suppression">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Search Display Banner Advertising" data-title-mobile="Google Sponsored Ads">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Google Re‐Marketing Advertising" data-title-mobile="Google Re‐Marketing">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Landing Pages on Sub Domains" data-title-mobile="Landing Pages">
                                <p>4 Landing Pages</p>
                            </li>
                            <li data-title="Logo Creation or Enhancement" data-title-mobile="Logo Creation">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="2,000 Branded Business Cards" data-title-mobile="2,000 Business Cards">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Call Tracking Phone Number" data-title-mobile="Call Tracking Number">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <li data-title="Dedicated Support Representative" data-title-mobile="Support Representative">
                                <p><i class="fa fa-circle green-text text-darken-1"></i></p>
                            </li>
                            <span style="height:70px;border:0;"> 
							<a href="/demo/" class="btn btn-small green darken-1">Sign Up</a></span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
</section>



<!--faqs-->
<section id="Faqs" class="#00bcd4 cyan darken-3">
    <div class="container">
        <div class="row">
            <i class="fa fa-globe fa-3x"></i>
            <h3 class="title">Frequently Asked Questions</h3>
            <div class="divider"></div>
        </div>
        <div class="valign-wrapper row intro-wrap">
            <div class="col s12 m12 l3">
                <img class="google-badge z-depth-1" src="https://doctorgenius.com/wp-content/uploads/2016/08/badge-google-partner.png" alt="google partner">
            </div>
            <div class="col s12 m12 l9">
                <div class="heading">What is a certified Google Partner?</div>
                <p>Google Certified Partners are agencies who have the qualifications needed to join the Google Engage Program. Our Google Certified AdWords specialists have the right skill set to manage any big or small PPC campaign to maximize any budget provided.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">Is there a long term agreement?</div>
                <p>No, our program is month to month. We believe that if we provide you with the most comprehensive marketing program to help grow your practice, then you will not want to cancel the services.</p>
            </div>
            <div class="col s12 m6 l6">
                <div class="heading">Do I immediately own the website after signing up with you?</div>
                <p>Yes, you will have full ownership of the website after 6 months of service.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">Why is a call tracking necessary for you online marketing package?</div>
                <p>Rankings are a Poor Metric for Overall Performance; rankings do not equal traffic. A great SEO campaign needs to be measured by the increase in search engine traffic and new Patient inquiries. Since search traffic is a sure sign that the marketing is working, the metric for success should always be traffic.</p>
            </div>
            <div class="col s12 m6 l6">
                <div class="heading">Can you use my main line for the call tracking number?</div>
                <p>No, but we can use your second line. For a small fee, we can port your second line and forward it to your main line.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">What do you do differently than other marketing companies?</div>
                <p>For starters, we do not outsource any of our services to others outside of our office. We focus on in-house development and support. This allows us to control and monitor all our partners to ensure the best online marketing strategy is in place, which will help to grow your practice.</p>
            </div>
            <div class="col s12 m6 l6">
                <div class="heading">What is the Review Promoter?</div>
                <p>The Review Promoter or Practice Promoter is a fully-integrated reputation management tool. The Practice Promoter allows our clients to send text and email messages to their patients, asking the patients to leave a review of the practice. If the patient selects "Yes," then the promoter directs the patient to the Google and Yelp listings of the practice. Patients who select "No," receive a form to privately provide feedback to the client. The client is the only one who will view the patient's feedback on the form and not have the review appear on the internet.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">Can I work with other SEO companies alongside Dental/Doctor Genius?</div>
                <p>We do not recommend that clients do this. Typically having a second SEO company involved will create conflicts. Additional websites, landing pages and directory listings created by the third party can damage the web presence of our client. Other optimizations or strategies by this third party can damage our client's web presence. In extreme circumstances, these third parties can even take actions that will cause our client to get black-listed.</p>
            </div>
            <div class="col s12 m6 l6">
                <div class="heading">I have domain name emails; will this affect the work you are doing?</div>
                <p>Dental Genius/Doctor Genius does not offer email support or setup. If we are transferring the domain name over to our account, then we can update mail records for you (MX records/TXT records).</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">What happens if I don't have a website?</div>
                <p>We can launch a temp mini-site until your new website is ready.</p>
            </div>
            <div class="col s12 m6 l6">
                <div class="heading">How long does it take to get started? What happens in the first two months?</div>
                <p>Upon signing up with us, you will receive an email that outlines our timeline. We work on your account right away, from keyword research to ordering call tracking numbers.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">When will I start seeing results?</div>
                <p>You will start to see results right away. Our support and web development teams start the work to help you gain ranking on Google as soon as we confirm your keywords, name, address and business information.</p>
            </div>
            <div class="col s12 m6 l6">
                <div class="heading">How many calls new customers or new patients should I get?</div>
                <p>Our Dental Genius program does not limit how many new patients you can get. We drive traffic to your office through search engine optimization, which is the process of having your site appear in highly-trafficked and geo- targeted keyword searches. With this process, we can display your business information in the relevant local markets. This process is similar to having a billboard or TV commercial, except that the cost will be much less and more efficiently productive.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="heading">What if there are any spelling and grammar errors on the new website?</div>
                <p>Since the priority is exact match keyword content and density, the website content may not always focus on being grammatically correct. Thus, the content we create is for the main purpose of communicating with Google to increase the visibility of your services.</p>
            </div>
        </div>
    </div>
</section>











<!-- Modal Structure -->
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
        <a href="#!" style="margin-right:15px;" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
</div>




<?php get_footer();?>

<script>
    $(document).ready(function(){
        $('ul.tabs').tabs();


        $('#see-plans li').mouseover(function(){

            var title = $(this).attr('data-title');

            $('#see-plans li').removeClass('active');

            $('li[data-title="'+ title +'"]').addClass('active');

        });




        $('.table li').click(function(){

            var title = $(this).attr('data-title');
            if($(this).attr('data-title') == "Genius Framework Website"){
                return false;
            };
            if($(this).attr('data-title') == "High Performance Website"){
                var text="Our Genius frameworks perfectly pair aesthetics with generating new patient inquiry conversions. Our Genius frameworks are constantly updated with the latest back-end technology ensuring your practice only has the best. If Einstein had a website, it would be on a Genius framework.";
            };
            if($(this).attr('data-title') == "SEO Focused Domain Name"){
                var text="Optimize your site inside and out. We’ll make your site look great and perform even better. If you do not own a domain name, we will help you choose a top tier .COM that is easy to remember, makes sense, and is relevant to your practice’s brand image.";
            };
            if($(this).attr('data-title') == "Secure Reliable Hosting"){
                var text="Our server security ensures your website is always up and running fast. Doctor Genius uses CloudFlare. CloudFlare protects and accelerates any website online. Your web pages are optimized so your visitors get the fastest page load times and best performance. CloudFlare also blocks threats. The result: CloudFlare-powered websites see a significant improvement in performance and a decrease in spam and other attacks.";
            };
            if($(this).attr('data-title') == "Migrated/Scraped Pages"){
                var text="If you already have a website and want to migrate old content onto your new website, we can carry over the quantity of pages that your chosen plan allows.";
            };
            if($(this).attr('data-title') == "Website Revisions"){
                var text="We allow for fine tuning of your website after our initial showcase. Each plan comes with its own quantity of revisions that give you the level of customization you are looking for.";
            };
            if($(this).attr('data-title') == "Strategic Content Writing"){
                return false;
            };
            if($(this).attr('data-title') == "Targeted Organic Keywords"){
                var text="Optimize your site inside and out. We’ll make your site look great and perform even better. Targeted Keywords maximize traffic driven through your site. We’ll analyze your competition and research keywords that will set you apart from them. We focus on promoting your top 25 keyword choices, and write content including them which increases the chances of a new patient finding you searching for one. Successful keywords help localize your online marketing campaign to nearby Google searchers looking for your specific services. We use your keyword selections in social media posts that link directly back to your blog. Not only does your content rank on Google, but also within searches in the social media networks we post on.";
            };
            if($(this).attr('data-title') == "Industry Related Service Page Content"){
                var text="Word of mouth extends into the internet. Let our in-house content writers help you be found. With a constant addition of new content added to your website and social media profiles each month, you can ensure that the outreach to new patients is being made. We inform patients on your practice, health, and more!";
            };
            if($(this).attr('data-title') == "Doctor & Staff Page"){
                var text="Doctor & Staff Bio pages attractively introduce your team, while increasing keywords that may help your website appear on a Google Search. Show off your Practice and let your users learn more about your doctors and staff.";
            };
            if($(this).attr('data-title') == "Call to Action Home Page Slides"){
                var text="Showcase promotions, unique sales propositions, and attractive branding images in a prominent slider on your homepage. Add a headline, subtext, and use a call to action to link to the appropriate content, promotion, or service.";
            };
            if($(this).attr('data-title') == "PR Release"){
                var text="Word of mouth extends into the internet. Let our PR services help you be heard. We will provide quality press releases that will benefit your practice by getting your services the public recognition you deserve.";
            };
            if($(this).attr('data-title') == "Search Engine Optimization"){
                return false;
            };
            if($(this).attr('data-title') == "On-Site Optimization"){
                var text="Search Engine Optimization includes an array of adjustments and additions to your website. Meta tags, rich snippets, keyword rich content and image titles are just some of the points we address when building your site. SEO helps your website rank higher on Google, Bing, and other search engines. We monitor how effective each targeted keyword is, and track where users click to next. Increasing download speeds, SEO, and structuring your website code to perform faster and lighter are included in this service. We run your site through a number of Google tests, including Mobile Friendly tests, Structured Data, etc.";
            };
            if($(this).attr('data-title') == "Structured Data Markup"){
                var text="Structured data markup is a text-based organization of data that is included in a file and served from the web. It typically uses the schema.org vocabulary—an open community effort to promote standard structured data in a variety of online applications.";
            };
            if($(this).attr('data-title') == "Monthly review from an SEO Analyst"){
                var text="Our Search Engine Optimization specialists review your website performance reports each month and fine tune verbiage, code, and delivery of your target keyword content to ensure you are ranking for your core services.";
            };
            if($(this).attr('data-title') == "Integrated Performance Reporting"){
                return false;
            };
            if($(this).attr('data-title') == "Google Analytics Integration"){
                var text="Google Analytics is a powerful reporting tool that captures your users’ behavior on your website. Every website comes with Google Analytics installed ready to report the amount of visitors who have visited your site, how they found your page, and how long they stay on.";
            };
            if($(this).attr('data-title') == "Google Webmaster Integration"){
                var text="You want to be found on the web. We want to help. Interested in owning a site that is great for users and shows up well in search results? We track your site’s search performance with Google Search Console, which comes standard with our high-quality and search-friendly sites.";
            };
            if($(this).attr('data-title') == "Google Ranking Reporting"){
                var text="Google Analytics is a powerful reporting tool that captures which keywords users find your website with. See the changes in how you rank per keyword with our Ranking Reports sent to you each month. Our helpful Support Team can answer any questions you have about how to read the report, and how to improve your results from month to month.";
            };
            if($(this).attr('data-title') == "Ranking Report Monthly Email"){
                var text="Each month you will receive an attractive performance report on your keyword ranking, site performance, and data breakdowns on users who have visited your site.";
            };
            if($(this).attr('data-title') == "New Patient Inquiry Reporting"){
                var text="Track and monitor the quantity of New Patients and how they are contacting your Practice. Are New Patients contacting you by webforms, or phone calls? Which day is your busiest day on the phone and for online inquiries? Does it match up with your paid advertising attempts? Get the answers with our fully responsive New Patient Inquiries report.";
            };
            if($(this).attr('data-title') == "Call & Web Submissions Tracking"){
                var text="Track your incoming calls and messages with New Patient Reports Track and monitor the quantity of New Patients and how they are contacting your Practice. Are New Patients contacting you by webforms, or phone calls? Which day is your busiest day on the phone and for online inquiries? Does it match up with your paid advertising attempts? Get the answers with our fully responsive New Patient Inquiries report.";
            };
            if($(this).attr('data-title') == "Advanced Google Analytics Goal Setting"){
                var text="There are quite a few tracking features in Google Analytics that take tracking to a whole new level. The goal is a feature in which you can track one of the following things: how many people reach a designated page, how many people stay on your site for a minimum amount of time, how many people have viewed a minimum of pages on your website, and how many people have triggered an event (such as watching a video).";
            };
            if($(this).attr('data-title') == "Appointment Request Integration"){
                var text="Forms that your patients use to book with you tie directly onto your calendar visible on your Genius Portal Dashboard.";
            };
            if($(this).attr('data-title') == "Social Media Promotion"){
                return false;
            };
            if($(this).attr('data-title') == "Practice Promoter"){
                var text="Attract new patients by building a good reputation on social media. Getting more reviews on Google and Yelp are a great way to attract new patients. With our Review Promoter we will ask patients you chose to write a Google/Yelp review with one easy step.";
            };
            if($(this).attr('data-title') == "Blog Posts"){
                var text="We write original and unique blog content based on subjects you request. Often content focuses on your core services, boosting your chances of appearing on Google for a searched keyword.";
            };
            if($(this).attr('data-title') == "Social Media Syndication"){
                var text="Not only do we promote your Social Profiles with our Practice Promoter, we create unique and original content 1, 2, or 3 times a month and post it directly to attract more audiences."
            };
            if($(this).attr('data-title') == "Social Media Branding"){
                var text="This service includes attractive banners, icons, and avatar creation.";
            };
            if($(this).attr('data-title') == "Directory Submissions"){
                var text="Get found quickly by your customers and major search engines. We will submit your website into various directories that will both index your website and drive organic traffic your way. Our strategies will guarantee top of the tier Google “Maps” rankings.";
            };
            if($(this).attr('data-title') == "Duplicate Suppression"){
                var text="Duplicate Suppression is a revolutionary new PowerListings feature that lets you easily suppress duplicate local business listings on leading local search apps. For the first time ever, you can instantly see automatically suggested duplicate listings and instruct a publisher directly to redirect or suppress it.";
            };
            if($(this).attr('data-title') == "Paid Advertising Campaigns"){
                return false;
            };
            if($(this).attr('data-title') == "Google Search Display Banner Advertising"){
                var text="Display advertising lets you create all types of ads - text, image, interactive and video ads. We place those ads on websites that are relevant to what you’re selling and show those ads to the people that are likely to be most interested. We manage and track your budget, campaigns and results as you go.";
            };
            if($(this).attr('data-title') == "Google Re‐Marketing Advertising"){
                var text="Remarketing lets you show ads to people who've visited your website or used your mobile app. When people leave your website without buying anything, for example, remarketing helps you reconnect with them by showing relevant ads as they browse the web, as they use mobile apps, or as they search on Google.";
            };
            if($(this).attr('data-title') == "Landing Pages on Sub Domains"){
                var text="We create sub domains and place landing pages on them, feeding traffic from paid search campaigns to a more streamlined appointment booking system that maximizes conversion.";
            };
            if($(this).attr('data-title') == "Traditional Marketing"){
                return false;
            };
            if($(this).attr('data-title') == "Logo Creation or Enhancement"){
                var text="Original branding and logo artwork created for your practice.";
            };
            if($(this).attr('data-title') == "2,000 Branded Business Cards"){
                var text="We print and mail business cards created by our inhouse designers directly to your practice for a consistent brand message.";
            };
            if($(this).attr('data-title') == "Call Tracking"){
                return false;
            };
            if($(this).attr('data-title') == "Call Tracking Phone Number"){
                var text="We issue a phone number to your practice that tracks meta data for easy call disposition reporting.";
            };
            if($(this).attr('data-title') == "Call Tracking Web Integration"){
                var text="Track and monitor the quantity of New Patients and how they are contacting your Practice. Are New Patients contacting you by webforms, or phone calls? Which day is your busiest day on the phone and for online inquiries? Does it match up with your paid advertising attempts? Get the answers with our fully responsive New Patient Inquiries report.";
            };
            if($(this).attr('data-title') == "Customer Support"){
                return false;
            };
            if($(this).attr('data-title') == "Dedicated Support Representative"){
                var text="Our in-house Irvine, California based Support Managers make working with us easy! Manage one Doctor Genius contact, and eliminate the frustrations of contacting an over-sized support staff to answer only a few questions. Let our knowledgeable and friendly Support Team guide you every step of the way towards your online marketing success. Once you’ve signed up for a plan, we will assign a Support Manager to work with your practice exclusively.";};


            $('#modal1').openModal();
            $('#modal1 h4').text(title);
            $('#modal1 p').text(text);
        });


    });
</script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
<script>new WOW().init();</script>
</html>
