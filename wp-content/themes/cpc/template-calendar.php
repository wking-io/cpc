<?php

/**
 * Template Name: Calendar Template
 */

get_header();
?>

<section>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <h1><?php the_title(); ?></h1>
    <div class="aspect-3:4 md:aspect-4:3">
      <div class="content w-full h-full">
        <?php the_content(); ?>
      </div>
    </div>
  <?php endwhile; else: ?>
    <p>Sorry, no posts matched your criteria.</p>
  <?php endif; ?>
</section>

<?php get_footer();