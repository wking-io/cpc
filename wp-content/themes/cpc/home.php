<?php

get_header();

?>

<section class="wrapper md:mt-8 lg:mt-16 pt-nav pb-20">
  <h1 class="pt-12 text-4xl sm:text-5xl md:text-6xl blog-heading leading-none mb-3 font-bold max-w-md"><?php the_field( 'blog_heading', 'options' ); ?></h1>
  <h2 class="text-lg sm:text-xl md:text-2xl text-primary font-bold"><?php the_field( 'blog_subheading', 'options' ); ?></h2>

  <?php if ( have_posts() ) : ?>
    <ul class="py-20 flex flex-wrap -mx-4">
      <?php while ( have_posts() ) : the_post(); 
        $categories = wp_get_post_categories( get_the_ID(), array( 'fields' => 'names' ) );
      ?> 
        <li class="blog-item mx-4 mb-8 cursor-pointer shadow-lg hover:shadow-xl bg-white">
          <a class="cursor-pointer p-8 block" href="<?php the_permalink(); ?>">
            <p class="text-primary uppercase text-sm font-bold mb-2"><?php echo implode( ', ', $categories ); ?></p>
            <h3 class="text-2xl font-bold mb-2"><?php the_title(); ?></h3>
            <div class="flex items-center">
              <p class="text-sm mb-0"><?php the_field( 'blog_author' ); ?></p>
              <div class="h-px bg-black w-6 mx-2"></div>
              <p class="text-sm mb-0"><?php echo get_the_date( 'F j, Y' ); ?></p>
            </div>
          </a>
        </li>
      <?php endwhile; ?>
    </ul>
  <?php else: ?>
    <p>Sorry, no posts matched your criteria.</p>
  <?php endif; ?>
</section>

<?php get_footer();
