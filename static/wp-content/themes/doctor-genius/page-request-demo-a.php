<?php
/**
 * Template Name: Request Demo A
 */
?><!DOCTYPE html>
<html>
<head>
    <title>Get a Free Demo of the Doctor Genius Marketing Software | Doctor Genius</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="/wp-content/themes/doctor-genius/assets/request-demo/css/materialize.min.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="/wp-content/themes/doctor-genius/assets/request-demo/css/request-style.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="/wp-content/themes/doctor-genius/v1.custom.css" media="screen,projection"/>
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/doctor-genius/assets/request-demo/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/doctor-genius/assets/request-demo/css/slick-theme.css"/>

    <style>
        #Main p.disclaimer,  #Main p.disclaimer  a {font-size: 13px;color: white;text-align:center;line-height:1.2em;margin-bottom:16px; }
        #Main p.disclaimer  a { text-decoration:underline; }

        .modal-content p.disclaimer,  .modal-content p.disclaimer  a {font-size: 13px;color: white;text-align:center;line-height:1.2em;margin-bottom:16px; }
        .modal-content p.disclaimer  a { text-decoration:underline; }
        .modal-content .input-field.contact-submit { height:45px; }

        span.wpcf7-not-valid-tip {background:#efefef;padding:10px;display:block;margin:0;position: relative;top:-20px;color: #ff0505;text-align: center;  }
        input:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {
            background: white;
            color: black!important;
            border-radius: 2px;
            margin: 5px auto;
            text-indent: 15px;
        }

        .input-field { height:auto;margin:0;padding:0; }
        .input-field label { display:none;}
        .input-field input { border-bottom-color: white; }
        .wpcf7-submit { font-family: 'Montserrat', sans-serif;background:#f05454;border:0;color:#fff;padding:10px 30px;margin:10px auto 0;display: block;border-radius: 4px;font-size: 1.3em;
            box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
            -webkit-transition: background-color .6s ease-out;
            -moz-transition: background-color .6s ease-out;
            -o-transition: background-color .6s ease-out;
            transition: background-color .6s ease-out;
        } f

          .wpcf7-submit:hover { background:#ef9422; }

        /* initial inpute */
        input::-webkit-input-placeholder { font-weight:300;color:#A5A0A0; }
        input:-moz-placeholder { /* Firefox 18- */ font-weight:300;color:#A5A0A0;  }
        input::-moz-placeholder {  /* Firefox 19+ */ font-weight:300;color:#A5A0A0;  }
        input:-ms-input-placeholder { font-weight:300;color:#A5A0A0;  }

        /* clear when input is added */
        input:focus::-webkit-input-placeholder { color:transparent; }
        input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
        input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
        input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */

        .screen-reader-response { display:none; }
        .wpcf7-validation-errors { display:none; }
        .wpcf7-response-output { display:none }
    </style>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-52SPGC');</script>
    <!-- End Google Tag Manager -->

    <?php wp_head(); ?>
</head>
<body <?php body_class('thetop'); ?>>

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SPGC" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="border">
    <div class="color1"></div><div class="color2"></div><div class="color3"></div><div class="color4"></div><div class="color5"></div>
</div>

<section id="Hero">
    <div class="container">
        <div class="row">
            <div class="col s6 m6 l6">
                <div class="logo">
                    <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/logo.png">
                </div>
            </div>
            <div class="col s6 m6 l6">
                <div class="icon-mobile">
                    <a href="tel:+18774772311"><i class="fa fa-phone hide-on-med-and-up" aria-hidden="true"></i> </a>
                </div>
                <div class="phone hide-on-small-only">
                    <a href="tel:+18774772311">Call Us (877) 477-2311</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="Main">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l8">
                <h1>Experience The Solution for Optimal Practice Growth</h1>
                <h2 class="hide-on-small-only">Need help with new patient acquisitions, patient reminders, and retention? Sign up for our demo to learn how you can have predictable practice growth with Doctor Genius.</h2>

                <div class="row">
                    <!-- mobile -->
                    <div class="col s12 m12 l4 hide-on-large-only">
                        <div class="contact-wrapper z-depth-2">
                            <img class="email" src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-email.png">
                            <div class="form-title">Contact us now for a <span>FREE</span> consultation</div>
                            <?php echo do_Shortcode('[contact-form-7 id="1093" title="Request Demo B"]');?>
                            <p class="disclaimer">*By registering I confirm that I have read and agree to the <a href="https://doctorgenius.com/privacy" target=_blank">Privacy Statement</a>.</p>

                            <!-- Begin DigiCert site seal HTML and JavaScript -->
                            <div id="DigiCertClickID_GjmThC2F" data-language="en">
                                <a href="https://www.digicert.com/ssl-certificate/"></a>
                            </div>
                            <script type="text/javascript">
                                var __dcid = __dcid || [];__dcid.push(["DigiCertClickID_GjmThC2F", "11", "s", "white", "GjmThC2F"]);(function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
                            </script>
                            <!-- End DigiCert site seal HTML and JavaScript -->

                            <!--<div class="geotrust">
                                <table width="135" border="0" cellpadding="2" cellspacing="0" title="Click to Verify - This site chose GeoTrust SSL for secure e-commerce and confidential communications.">
                                    <tr>
                                        <td width="135" align="center" valign="top"><script type="text/javascript" src="https://seal.geotrust.com/getgeotrustsslseal?host_name=doctorgenius.com&amp;size=S&amp;lang=en"></script><br />
                                            <a href="http://www.geotrust.com/ssl/" target="_blank"  style="color:#000000; text-decoration:none; font:bold 7px verdana,sans-serif; letter-spacing:.5px; text-align:center; margin:0px; padding:0px;"></a></td>
                                    </tr>
                                </table>
                            </div>-->
                        </div>
                    </div>
                    <!-- mobile -->



                    <div class="col s12 m12 l5">
                        <div class="title-box">
                            <div class="title">Our Plans</div>
                            <p>We created 3 individual packages that will take your practice to the next level. Our tiers have unique plan features to meet your practice needs.</p>
                        </div>
                    </div>
                    <div class="col s12 push-m2 m7 l7">
                        <div class="plan-box">
                            <div class="none">
                                <div class="left-box">
                                    <div class="title">Silver Plan</div>
                                    <div class="sub-heading">The Starter Package</div>
                                </div>
                                <div class="divide-teal"></div>
                                <div class="right-box">
                                    <div class="number-patient"><sup>*</sup>20<span>+</span></div>
                                    <div class="text">New Patients</div>
                                </div>
                            </div>
                            <div class="divider-plan"></div>
                            <div class="none">
                                <div class="left-box">
                                    <div class="title">Gold Plan</div>
                                    <div class="sub-heading">Boost Your Online Presence</div>
                                </div>
                                <div class="divide-purple"></div>
                                <div class="right-box">
                                    <div class="number-patient"><sup>*</sup>35<span>+</span></div>
                                    <div class="text">New Patients</div>
                                </div>
                            </div>
                            <div class="divider-plan"></div>
                            <div class="none">
                                <div class="left-box">
                                    <div class="title">Platinum Plan</div>
                                    <div class="sub-heading">Maximize Your Practice Potential</div>
                                </div>
                                <div class="divide-red"></div>
                                <div class="right-box">
                                    <div class="number-patient"><sup>*</sup>45<span>+</span></div>
                                    <div class="text">New Patients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="disclose">*Estimated new patients vary by industry, location, and population.</div>
                    </div>
                </div>
            </div>

            <div class="col s12 m12 l4 hide-on-med-and-down">
                <div class="contact-wrapper z-depth-2">
                    <img class="email" src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-email.png">
                    <div class="form-title">Contact us now for a <span>FREE</span> consultation</div>
                    <?php echo do_Shortcode('[contact-form-7 id="1093" title="Request Demo B"]');?>
                    <p class="disclaimer">*By registering I confirm that I have read and agree to the <a href="https://doctorgenius.com/privacy" target=_blank">Privacy Statement</a>.</p>

                    <!-- Begin DigiCert site seal HTML and JavaScript -->
                    <style>div#DigiCertClickID_GjmThC2F > span > a { display: none !important; }</style>
                    <div id="DigiCertClickID_GjmThC2F" data-language="en">

                    </div>
                    <script type="text/javascript">
                        var __dcid = __dcid || [];__dcid.push(["DigiCertClickID_GjmThC2F", "11", "s", "white", "GjmThC2F"]);(function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
                    </script>
                    <!-- End DigiCert site seal HTML and JavaScript -->

                    <!--<div class="geotrust">
                        <table width="135" border="0" cellpadding="2" cellspacing="0" title="Click to Verify - This site chose GeoTrust SSL for secure e-commerce and confidential communications.">
                            <tr>
                                <td width="135" align="center" valign="top"><script type="text/javascript" src="https://seal.geotrust.com/getgeotrustsslseal?host_name=doctorgenius.com&amp;size=S&amp;lang=en"></script><br />
                                    <a href="http://www.geotrust.com/ssl/" target="_blank"  style="color:#000000; text-decoration:none; font:bold 7px verdana,sans-serif; letter-spacing:.5px; text-align:center; margin:0px; padding:0px;"></a></td>
                            </tr>
                        </table>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</section>

<section id="Service">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 15">
                <div class="review">
                    <div class="title-review center-align">What Our Clients Are Saying!</div>
                    <div class="divider"></div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-dennis-baik.jpg" alt="Dennis Baik"></div>
                                <div class="name">Dennis Baik</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>11 months ago</span>
                                    </div>
                                    <p>Dr. Genius and its team delivers what they promise. It has been about two years since I signed up with their Silver Plan. Since then, my dental practice has grown with more phone calls that were referred from online and SEO marketing (more so within last one year). Previously, I have used Prosites for my website and separate social media managing company but never had much of response. Dr. Genius is the only marketing company that I currently work with and my dental practice is doing better than ever. I am even considering to upgrade my marketing plan with them to a more premium plan (Gold or Platinum).<br><br> I am not sure however, if my current Silver Plan with Dr. Genius has turned into 20+ additional new patients per month (as it is advertised on their website). Nevertheless, I truly believe that working with Dr. Genius has been a success with great return on investment (ROI).  Particularly, Shawn and Shanyn have been great. Dr. Genius and its team (especially Shawn) have undoubtedly been instrumental to my marketing success. Thanks guys!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-taylor-dental-care.jpg" alt="Taylor Dental Care"></div>
                                <div class="name">Taylor Dental Care</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>2 months ago</span>
                                    </div>
                                    <p>I have worked with Francesco at 3 separate dental offices over the course of 8 years. If that doesn't tell you that their program works, I don't know what will. Francesco has great customer service and follows up throughout the set up to make sure things are going well. If I ever have issues, I can contact him or email their customer support team and my questions or website changes are handled quickly.<br><br>Their contract is lengthy, and a little complicated, so read it well to make sure you understand what you are signing. Your "online" phone number will change for their tracking purposes, you'll have a little recorded message at the beginning of patient calls saying that call will be recorded, and your website will have copy and pasted material as another reviewer said. But that matters little when the new patients call after having been engaged on your website.<br><br>We have been consistently getting heavy web traffic (this is tracked and they'll show you the metrics -- it' not just a verbal monthly follow up like I had previously had with SEO companies), and more new patients since the website launched. We are getting what we paid for, and will continue to utilize their services. They are up to date on all the google algorithms, and gave us ideas to keep the "freshness" up on our website, our google business listing and social media. I highly recommend their services!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-daniel-savarino.jpg" alt="Daniel Savarino"></div>
                                <div class="name">Daniel Savarino</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>6 months ago</span>
                                    </div>
                                    <p>I have been working with doctor genius for about 6 months. I opened my sports medicine practice back in July. I found doctor genius on Facebook and spoke with Francesco. He went over my current site and discussed how he could help improve my Google ranking. What I really liked about them was they were not trying to push their most expensive package, in fact they were stressing to start with the basics and upgrade gradually as I grow.  Whenever I have a question, if I send an email I always get an immediate call back from Francesco, which I find amazing as most other companies I work with take days to respond if at all. Most of the website work has been with Shanyn who has also been great. She is responsive and listens to my suggestions. I have the blogs set so I can review them before they go up which I like because I like to have my own spin put in as well. I recently upgraded to the Gold package and I am looking forward to seeing how much more business we get!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-christina-guilin.jpg" alt="Christina Guilin"></div>
                                <div class="name">Christina Guilin</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>2 months ago</span>
                                    </div>
                                    <p>I have just recently started working with Doctor Genius, specifically with Dartangnan Johnson and my experience so far has been nothing but stellar! We had a lot of turnover with our marketing the last 1-2 years, and were struggling to find a team who really understood our needs and expectations. We really hit it out of the park being connected to Dartangan and Doctor Genius, because their experience and knowledge with Google is what sets them apart from other marketers. The resources provided to clients are wonderful tools to stay on top of your practice and numbers. Thank you Dartangan, our future looks bright with you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-erika-rodriguez.jpg" alt="Erika Rodriguez"></div>
                                <div class="name">Erika Rodriguez</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>3 weeks ago</span>
                                    </div>
                                    <p>I have been working with Doctor Genius for sometime now and can honestly say this is by far, the BEST team to have by your side. Besides increasing our numbers, they have always put our needs and wants first. Doctor Genius has educated us through out our entire journey together and we are a better company because of it. A special recognition goes to Mr. Shawn S. who has gone above and beyond for us and helped us see the light at the end of a dark,dark tunnel. And for that, Thank you Shawn for helping us show the world who we are. Blessings!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-roberto-bellegarrigue.jpg" alt="Roberto Bellegarrigue"></div>
                                <div class="name">Roberto Bellegarrigue</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>2 months ago</span>
                                    </div>
                                    <p>Been working with them for 2 years now. My web visibility has increased and my new patients have doubled as a result. They're always available to talk if you have any issues or questions. Two thumbs up!! Just ask for Francesco, he's my account manager and he'll take good care of you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-justine-schepis.jpg" alt="Justine Schepis"></div>
                                <div class="name">Justine Schepis</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>10 months ago</span>
                                    </div>
                                    <p>I started using Doctor Genius to improve my google presence and increase my monthly number of new patients. They told me it would take 3-4 months to see results. Its been about 2 now that my google presence has been cleaned up and my website is up and running and I am starting to see people come in the door who found us solely on google.<br><br>We are happy and have now upgraded our package with them.The team is really nice and caring and good with following up and explaining everything to you. Francesco was the first person I worked with and he is wonderful. He really took the time to explain everything. Although it is early in the process, what he said would happen after cleaning up our internet presence is starting to unfold.  I have also worked with Brandon, Shawn, Victoria, and Kylie, all of which have been a pleasure to work with.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-alexandra-ramasahai.jpg" alt="Alexandra Ramsahai D.M.D"></div>
                                <div class="name">Alexandra Ramsahai D.M.D</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>5 months ago</span>
                                    </div>
                                    <p>The customer service is awesome! We have had a great start and we continue to grow and develop. Thanks francesco and everyone at DocGenius that make communication a breeze.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review-section">
                        <div class="row valign-wrapper">
                            <div class="col s12 m2 l2 center-align">
                                <div class="icon"><img src="https://doctorgenius.com/wp-content/uploads/demo/b/icon-diamond-head-dental-care.jpg" alt="Diamond Head Dental Care"></div>
                                <div class="name">Diamond Head Dental Care</div>
                            </div>
                            <div class="col s12 m10 l10">
                                <div class="info">
                                    <div class="stars">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <img src="https://doctorgenius.com/wp-content/uploads/demo/b/stars.png" alt="">
                                        <span>11 months ago</span>
                                    </div>
                                    <p>Doctor Genius was a game changer for our office, we saw a SIGNIFICANT increase in new patient counts and online search results. We doubled our new patient counts within a few months of starting with Doctor Genius, with half of the credit due to their online optimization and service. Shawn Stiffler has been an excellent guiding force as we ramped up this service and when we decided to upgrade the service after one year with them. Thank you! Krista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="features">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l12">
                <div class="title feature-title">Featured Services</div>
                <div class="divider"></div>
                <p>Get the information you need about our service and see how our performance is an easy-to-use platform. Every Doctor Genius plan comes with access to our data platform.</p>
                <div class="service-wrapper">
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-patient.png" alt="">
                        <div class="title">Patient Inquiry Tracking</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-call-tracking.png" alt="">
                        <div class="title">Call Tracking</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-targeting.png" alt="">
                        <div class="title">Hyper-Local Targeting</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-boost-ranking.png" alt="">
                        <div class="title">Boost Ranking</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-review-management.png" alt="">
                        <div class="title">Review Management</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-responsive.png" alt="">
                        <div class="title">Responsive Design</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-branding.png" alt="">
                        <div class="title">Branding</div>
                    </div>
                    <div class="col s6 m3 l3">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-social-media.png" alt="">
                        <div class="title">Social Media</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
<!-- 
<footer>
    <div class="border">
        <div class="color1"></div><div class="color2"></div><div class="color3"></div><div class="color4"></div><div class="color5"></div>
    </div>
    <div class="footer-wrap">
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l6">
                    <div class="logo">
                        <img src="/wp-content/themes/doctor-genius/assets/request-demo/img/logo.png" alt="Doctor Genius">
                        <p class="info">Doctor Genius - The Educated Choice. We are in the business of making yours grow faster. <a href="https://doctorgenius.com/contact/">Contact us</a> today for a free consultation.</p>
                    </div>
                </div>
                <div class="col s12 m12 l6">
                    <div class="title">Stay Connected:</div>
                    <ul class="social-media">
                        <li><a href="https://www.facebook.com/DoctorGeniusMarketing"><img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-facebook.png"/></a></li>
                        <li><a href="https://twitter.com/DoctorGeniusCA"><img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-twitter.png"/></a></li>
                        <li><a href="https://plus.google.com/+DoctorGenius"><img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-google.png"/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos"><img src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-youtube.png"/></a></li>
                    </ul>
                    <p class="address">Address: 2121 Alton Pkwy, Suite 150, Irvine, CA 92606<br>Phone: (877) 477-2311 - Hours: 7AM–5PM PST</p>
                </div>
            </div>
        </div>
    </div>
    <div class="sub-footer">
        <div class="container">
            <div class="row">
                <div class="col s12 m6 l6">
                    <div class="copyright">©2018 Doctor Genius. All Rights Reserved.</div>

                </div>
                <div class="col s12 m6 l6">
                    <div class="policy"><a href="https://doctorgenius.com/privacy" target="_blank">Privacy Policy</a> • <a href="https://doctorgenius.com/terms-and-conditions/" target="_blank">Terms and Conditions</a></div>
                </div>
            </div>
        </div>
    </div>
</footer>
-->

<div class="sticky-footer valign-wrapper">
    <div class="container">
        <div class="row">
            <div class="center-align">
                <!-- Modal Forms Trigger -->
                <a class="btn btn-cta-01 waves-effect modal-trigger" href="#modal1"><i class="fa fa-calendar" aria-hidden="true"></i>Request Demo</a>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div id="modal1" class="modal">
    <div class="modal-content">

        <div class="contact-wrapper z-depth-2">
            <img class="email" src="/wp-content/themes/doctor-genius/assets/request-demo/img/icon-email.png">
            <div class="form-title">Contact us now for a <span>FREE</span> consultation</div>
            <?php echo do_Shortcode('[contact-form-7 id="1093" title="Request Demo B"]');?>
            <p class="disclaimer">*By registering I confirm that I have read and agree to the <a href="https://doctorgenius.com/privacy" target=_blank">Privacy Statement</a>.</p>

            <!-- Begin DigiCert site seal HTML and JavaScript -->
            <style>div#DigiCertClickID_GjmThC2F > span > a { display: none !important; }</style>
            <div id="DigiCertClickID_GjmThC2F" data-language="en" style="padding-bottom:20px;">

            </div>
            <script type="text/javascript">
                var __dcid = __dcid || [];__dcid.push(["DigiCertClickID_GjmThC2F", "11", "s", "white", "GjmThC2F"]);(function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
            </script>
        </div>

    </div>
</div>

<div class='scrolltop'>
    <div class='scroll icon'><i class="fa fa-4x fa-angle-up"></i></div>
</div>



<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="/wp-content/themes/doctor-genius/assets/request-demo/js/materialize.min.js"></script>
<script src="/wp-content/themes/doctor-genius/assets/request-demo/js/slick.js" type="text/javascript" charset="utf-8"></script>
<script>
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
</script>

<script>
    $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .7, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%' // Ending top style attribute
        }
    );
</script>

<script>
    $(function(){
        $(window).scroll(function() {
            if($(document).scrollTop() > 200)
            {
                $('.sticky-footer').addClass("show");
            }
            else
            {
                $('.sticky-footer').removeClass("show");
            }
        });
    })
</script>

<?php wp_footer(); ?>

</body>

</html>
