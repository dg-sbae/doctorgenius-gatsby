<?php

// Custom Post Types brainstorm:
// Events

/* Load all our theme's custom post types */
$dg_cpt_includes = array(
    get_template_directory() . '/lib/admin/custom-post-types/events/events-cpt.php',
);

foreach( $dg_cpt_includes as $file){
    require_once $file;
}
unset($file, $filepath);