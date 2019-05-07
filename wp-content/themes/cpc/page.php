<?php

get_header();

if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <main class="general-content wrapper-sm">
    <?php the_content(); ?>
  </main>
<?php endwhile; endif;

get_footer();