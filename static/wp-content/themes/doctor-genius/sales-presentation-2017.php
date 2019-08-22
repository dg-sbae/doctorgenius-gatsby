<?php
/* 
Template Name: Sales Presentation 2017 Template
*/
?>

<?php get_header(); ?>

<head>
    <meta name="robots" content="noindex" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
   <div class="entry-content"><?php the_content();  ?></div>
<?php endwhile; else : ?>
   <?php echo 'Error: no post content found.'; ?>
<?php endif; ?>

<?php get_footer(); ?>