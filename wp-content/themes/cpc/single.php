<?php

get_header();
?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <section></section>
<?php endwhile; else: ?>
  <p>Sorry, no posts matched your criteria.</p>
<?php endif; ?>

<?php get_footer();