<?php

get_header();

$category = get_queried_object();

?>

<?php if ( have_posts() ) : ?>
  <section></section>
<?php else: ?>
  <p>Sorry, no posts matched your criteria.</p>
<?php endif; ?>

<?php get_footer();