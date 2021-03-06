<?php

get_header();

$start = get_field( 'event_start' );
$end = get_field( 'event_end' );
$schedule = get_event_schedule($start, $end);
$event_link_url = get_field( 'event_link_url' );
$event_link_text = get_field( 'event_link_text' );

?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <section class="lg:h-screen relative pt-nav pb-20 lg:flex lg:items-center lg:justify-center">
    <div class="event-underlay bg-grey w-full h-64 lg:h-full lg:w-2/5 absolute top-0 left-0"></div>
    <div class="relative flex flex-col lg:flex-row lg:justify-between lg:items-center wrapper max-w-2xl mx-auto md:max-w-full">
      <div class="mt-12 lg:mt-0 mb-8 lg:mb-0 aspect-5:3 w-full lg:w-3/5 lg:mr-12 flex-shrink-0">
        <img class="w-full h-full absolute top-0 left-0" src="<?php echo the_post_thumbnail_url('large');; ?>" alt="<?php echo get_the_title() . 'Preview'; ?>">
      </div>
      <div class="w-full lg:max-w-md">
        <div class="flex justify-between mb-3 text-sm md:text-base">
          <p><?php echo $schedule['date']; ?></p>
          <p><?php echo $schedule['time']; ?></p>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold leading-tight mb-4"><?php the_title(); ?></h1>
        <div class="general-content mb-6"><?php the_content(); ?></div>
          <p>
            <?php if ( ! empty( $event_link_url ) && ! empty( $event_link_text ) ) : ?>
              <a class="cpc-button cpc-button--primary mr-4 mb-4 inline-block" href="<?php echo $event_link_url; ?>"><?php echo $event_link_text; ?></a>
            <?php endif; ?>
              <a class="cpc-button cpc-button--outline" href="<?php echo home_url('/events'); ?>">Back to events</a>
          </p>
      </div>
    </div>
  </section>
<?php endwhile; else : ?>
  <p>Sorry, no posts matched your criteria.</p>
<?php endif; ?>

<?php get_footer();