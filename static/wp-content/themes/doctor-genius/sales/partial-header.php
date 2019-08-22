<!DOCTYPE html>
<html>
	<head>
		<title> DG <?php echo $pageTitle ?> </title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta name="google" value="notranslate">
		<!--Import Google Icon Font-->
		<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<!--Import materialize.css-->
		<link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
		<!--Structure-->
		<link type="text/css" rel="stylesheet" href="css/sales.css" rel="stylesheet">
	</head>
	
	<body>
<?php 
global $post; 
$current_id = $post->ID;
$current_page = get_page( $current_id );

$whoweare_page = get_page_by_title( 'Who We Are' ); 
$track_page = get_page_by_title( 'Track Record' ); 
$practice_page = get_page_by_title( 'Getting To Know Your Practice' ); 
$practice_target_page = get_page_by_title( 'Target Patient' ); 
$practice_treatment_page = get_page_by_title( 'Popular Treatement' ); 
$practice_promotions_page = get_page_by_title( 'Special Promotions' ); 
$practice_goals_page = get_page_by_title( 'Achieving Goals' ); 
$practice_promotions_page = get_page_by_title( 'Special Promotions' ); 
$practice_goals_page = get_page_by_title( 'Achieving Goals' ); 
$digital_landscape_page = get_page_by_title( 'Digital Presence Landscape' ); 
$google_page = get_page_by_title( 'Google Structure Data' ); 
$security_page = get_page_by_title( 'Websites Security' ); 
$blog_page = get_page_by_title( 'Blog Content %amp; AMP page' ); 
$optimzation_page = get_page_by_title( 'Website Design And Optimization' ); 
$promoter_page = get_page_by_title( 'Practice Promoter' ); 
$setting_up_page = get_page_by_title( 'Websites Speed' ); 
$engagement_page = get_page_by_title( 'Practice Engagement' ); 
$data_page = get_page_by_title( 'Data/Report' ); 
$reporting_page = get_page_by_title( 'Doctor Genius Reporting' ); 
$report_portal_page = get_page_by_title( 'Call / Web Tracking Portal' ); 
$report_reputation_page = get_page_by_title( 'Reputation Management' ); 
$report_ranking_page = get_page_by_title( 'Ranking Reports' );
$report_google_page = get_page_by_title( 'Google Analytics Reporting' );
$case_study_page = get_page_by_title( 'Case Study' );
$prices_plans_page = get_page_by_title( 'Prices and Plans' );
?>


    <ul id="SideNav" class="side-nav fixed">
        <div class="nav-logo"><a href="#"><img src="img/logo.png" alt="logo"/></a></div>
        <li>
            <ul class="collapsible collapsible-accordion">
            <li class="<?php if($current_page == $whoweare_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/">Who We Are</a></li>
            <li class="<?php if($current_page == $track_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/track-record/">Track Record</a></li>
            <li class="<?php if($current_page == $practice_page || $current_page == $practice_target_page || $current_page == $practice_treatment_page || $current_page == $practice_promotions_page || $current_page == $practice_goals_page){echo 'highlight';}?>">
                <a href="https://doctorgenius.com/healthcare-marketing-presentation/practice/" class="collapsible-header <?php if($current_page == $practice_page){echo 'active';}?>">Getting To Know Your Practice</a>
                <div class="collapsible-body">
                    <ul>
                        <li class="<?php if($current_page == $practice_target_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/practice-target/">Target Patient</a></li>
                        <li class="<?php if($current_page == $practice_treatment_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/practice-treatment">Popular Treatment</a></li>
                        <li class="<?php if($current_page == $practice_promotions_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/practice-promotions">Special Promotions</a></li>
                        <li class="<?php if($current_page == $practice_goals_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/practice-goals">Achieving the Goals</a></li>
                    </ul>
                </div>
            </li>
            <li class="<?php if($current_page == $practice_patients_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/practice-patients">New Patients!</a></li> 
            <li class="<?php if($current_page == $digital_landscape_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/digital-landscape">Digital Presence Landscape</a></li>               
            <li class="<?php if($current_page == $google_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/google">Google Structured Data</a></li>
            <li class="<?php if($current_page == $speed_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/google">Website Speed</a></li>
            <li class="<?php if($current_page == $security_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/security">Website Security</a></li>             
            <li class="<?php if($current_page == $blog_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/blog">Blog Content &amp; AMP Pages</a></li>
            <li class="<?php if($current_page == $optmization_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/optimization">Website Design &amp; Optimization</a></li>
            <li class="<?php if($current_page == $promoter_page){echo 'highlight';}?>">
                <a href="https://doctorgenius.com/healthcare-marketing-presentation/promoter/" class="collapsible-header <?php if($current_page == $promoter_page){echo 'active';}?>">Practice Promoter</a>
                <div class="collapsible-body">
                    <ul>
                        <li class="<?php if($current_page == $setting_up_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/promoter-setting">Setting Up</a></li>
                        <li class="<?php if($current_page == $engagement_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/promoter-engagement">Engagement</a></li>
                        <li class="<?php if($current_page == $data_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/promoter-data">Data &amp; Report</a></li>
                    </ul>
                </div>
            </li>  
            <li class="<?php if($current_page == $reporting_page){echo 'highlight';}?>">
                <a href="https://doctorgenius.com/healthcare-marketing-presentation/reporting/" class="collapsible-header <?php if($current_page == $reporting_page){echo 'active';}?>">Doctor Genius Reporting</a>
                <div class="collapsible-body">
                    <ul>s
                        <li class="<?php if($current_page == $report_portal_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/reporting-portal">Call / Web Tracking Portal</a></li>
                        <li class="<?php if($current_page == $report_reputation_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/reporting-reputiation">Reputation Management</a></li>
                        <li class="<?php if($current_page == $report_ranking_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/reporting-ranking">Ranking Reports</a></li>
                        <li class="<?php if($current_page == $report_google_page){echo 'sub-highlight';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/reporting-analytics">Google Analytics Reporting</a></li>
                    </ulš
                </div>
            </li>
            <li class="<?php if($current_page == $case_study_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/case-study">Case Study</a></li>   
            <li class="<?php if($current_page == $prices_plans_page){echo 'active';}?>"><a href="https://doctorgenius.com/healthcare-marketing-presentation/plans-prices">Prices / Plans</a></li>
          </ul>
        </li>
    </ul>
    <a href="#" data-activates="SideNav" class="button-collapse hide-on-large-only"><i class="material-icons">menu</i></a>

