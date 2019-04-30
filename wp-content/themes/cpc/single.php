<?php

get_header();
?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
  $categories = wp_get_post_categories( get_the_ID(), array( 'fields' => 'names' ) );
?>
  <section class="wrapper-sm md:mt-8 lg:mt-16 pt-nav pb-20">
    <p class="pt-12 text-lg text-primary font-semibold uppercase mb-3"><?php echo implode( ', ', $categories ); ?></p>
    <h1 class="text-4xl sm:text-5xl md:text-6xl leading-none mb-3 font-bold"><?php the_title(); ?></h1>
    <div class="flex items-center mb-20">
      <p><?php the_field( 'blog_author' ); ?></p>
      <div class="h-px bg-black w-6 mx-2"></div>
      <p><?php echo get_the_date( 'F j, Y' ); ?></p>
    </div>
    <div class="general-content mb-12"><?php the_content(); ?></div>
    <p><a class="cpc-button cpc-button--outline px-12" href="<?php home_url('blog'); ?>">View Other Posts</a></p>
  </section>
<?php endwhile; else: ?>
  <p>Sorry, no posts matched your criteria.</p>
<?php endif; ?>

<?php get_footer();