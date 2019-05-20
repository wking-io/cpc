<?php

/**
 * Template Name: Calendar Template
 */

get_header();
?>

<section>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <h1 class="mt-nav pt-20 pb-12 text-center uppercase font-bold text-2xl md:text-3xl lg:text-4xl"><?php the_title(); ?></h1>
    <div class="content w-full h-full">
      <?php the_content(); ?>
    </div>
  <?php endwhile; else: ?>
    <p>Sorry, no posts matched your criteria.</p>
  <?php endif; ?>
</section>

<?php get_footer();