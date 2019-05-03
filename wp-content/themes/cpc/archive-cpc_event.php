<?php

get_header();

?>

<section class="flex flex-col md:flex-row relative">
  <div class="px-8 md:px-0 md:pl-16 md:pt-20 md:pr-12 flex-shrink-0 w-full md:max-w-lg md:h-screen relative md:fixed events-sidebar">
    <div class="events-underlay absolute bg-grey w-full h-40 md:w-4/5 top-0 left-0 md:h-full"></div>
    <h1 class="mb-8 mt-12 pt-20 text-5xl md:text-6xl uppercase font-bold leading-none"><?php the_field( 'event_heading', 'options' ); ?></h1>
    <div class="general-content mb-8 md:max-w-xs"><?php the_field( 'event_description', 'options' ); ?></div>
    <p class="hidden md:block"><a class="cpc-button cpc-button--outline" href="<?php echo home_url( 'calendar' ); ?>">View Full Calendar</a></p>
  </div>
  <div class="w-full md:py-20 flex">
    <div class="hidden md:block events-filler flex-shrink-0"></div>
    <?php if ( have_posts() ) : ?>
    <div class="w-full">
      <ul class="mx-auto w-full px-8 md:pl-12 xl:pl-8 max-w-2xl py-20 flex flex-col">
        <?php while ( have_posts() ) : the_post(); 
          $date = get_field( 'event_date' );
        ?> 
          <li class="event-item mx-4 mb-12">
              <div class="flex justify-between">
                <p><?php echo date('l - F j, Y', strtotime( $date ) ); ?></p>
                <p><?php echo date('g:i A', strtotime( $date ) ); ?></p>
              </div>
              <h3 class="text-2xl font-bold mb-2"></h3>
              <div class="aspect-5:3 mb-4"><a class="w-full h-full absolute top-0 left-0" href="<?php the_permalink(); ?>"><img class="w-full h-full object-cover" src="<?php echo the_post_thumbnail_url('medium_large'); ?>" alt="Event Preview"></a></div>
              <p><a class="font-semibold text-black underline hover:no-underline" href="<?php the_permalink(); ?>">Learn More & Register</a></p>
          </li>
        <?php endwhile; ?>
      </ul>
      <div class="post-nav flex items-center justify-center m-0 p-0">
        <?php next_posts_link( 'Next Groups' ); ?>
        <?php previous_posts_link( 'Previous Groups' ); ?>
      </div>
    </div>
    <?php else: ?>
      <p>Sorry, no posts matched your criteria.</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer();