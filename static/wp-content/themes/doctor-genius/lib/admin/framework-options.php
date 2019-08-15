<?php

add_action( 'admin_menu', 'dg_admin_menu' );
function dg_admin_menu() {
    add_menu_page(
        'Events Setup',
        'Events',
        'manage_options',
        //'dg-framework',
        'edit.php?post_type=events',
        NULL, // NULL because we want WP to use the default output for CPTs
        'dashicons-calendar-alt',
        6
    );
}

function dg_options_page() {
    ?>

    <?php
}