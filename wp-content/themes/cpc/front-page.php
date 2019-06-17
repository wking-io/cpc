<?php

get_header();

$hero       = get_field( 'home_hero' );
$image_key  = array_rand( $hero['images'] );
$cta        = get_field( 'home_cta' );
$events     = get_field( 'home_events' );
$learn_more = get_field( 'learn_more' );

$featured_event_query = new WP_Query( array(
  'post_type' => 'cpc_event',
  'posts_per_page' => 1,
  'meta_value' => date('Y-m-d H:i:s'),
  'meta_compare' => '>',
) );

$featured_event = array(
  'title' => $featured_event_query->post->post_title,
  'date'  => get_field( 'event_start', $featured_event_query->post->ID ),
  'img' => get_the_post_thumbnail_url( $featured_event_query->post->ID, 'medium_large' ),
  'link' => get_the_permalink( $featured_event_query->post->ID ),
);

$next_events = cpc_get_next_events();

?>

<section class="h-hero bg-black relative">
    <div class="absolute inset-0">
      <div class="hero-overlay absolute inset-0"></div>
      <img class="w-full h-full object-cover" src="<?php echo $hero['images'][$image_key]['image']['url']; ?>" alt="Covenant Worship">
    </div>
    <div class="wrapper flex flex-col-reverse md:flex-col items-end md:justify-end h-full pb-20 relative z-10">
      <div class="w-full pb-12 md:pb-8 up-1">
        <p class="hero-sunday-heading uppercase text-sm font-bold text-white mb-2">Sunday Schedule:</p>
        <p class="h-1px w-12 mb-4 md:mb-0 bg-white md:hidden"></p>
        <ul class="list-reset flex flex-col md:flex-row md:items-center">
          <li class="text-white text-sm lg:text-base xl:text-lg mb-2 md:mb-0"><?php echo $hero['schedule']['contemporary']; ?></li>
          <li class="mx-3 lg:mx-4 xl:mx-6 h-1px bg-white w-6 lg:w-12 xl:w-16 hidden md:block"></li>
          <li class="text-white text-sm lg:text-base xl:text-lg mb-2 md:mb-0"><?php echo $hero['schedule']['discipleship']; ?></li>
          <li class="mx-3 lg:mx-4 xl:mx-6 h-1px bg-white w-6 lg:w-12 xl:w-16 hidden md:block"></li>
          <li class="text-white text-sm lg:text-base xl:text-lg mb-2 md:mb-0"><?php echo $hero['schedule']['traditional']; ?></li>
        </ul>
      </div>
      <h2 class="w-full text-white uppercase font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-8 up-0"><?php echo $hero['heading']; ?></h2>
    </div>
</section>
<section class="wrapper -mt-20 md:mt-20 relative z-20 mb-20 flex flex-col md:flex-row-reverse md:items-center">
  <div class="cta-video relative aspect-16:9 w-full md:w-1/2 mb-12 md:mb-0 md:ml-8 overflow-hidden flex-shrink-0">
    <img class="w-full h-full absolute inset-0 object-cover" src="<?php echo $cta['video_thumb']['sizes']['large']; ?>" alt="Video Thumbnail">
    <button class="absolute inset-0 w-full h-full flex items-center justify-center" data-popup-action aria-controls="hero-video">
    <svg class="opacity-75 w-16 sm:w-20 md:w-12 lg:w-16 xl:w-20 h-auto" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41 20.5359C43.6667 22.0755 43.6667 25.9245 41 27.4641L6.5 47.3827C3.83333 48.9223 0.5 46.9978 0.5 43.9186V4.08141C0.5 1.00221 3.83333 -0.922287 6.5 0.617313L41 20.5359Z" fill="white"/>
    </svg>
    </button>
  </div>
  <div class="lg:pr-12 max-w-xl">
    <h2 class="cta-heading text-black flex flex-col font-bold uppercase mb-3 text-xl md:text-2xl xl:text-3xl"><?php echo $cta['heading']; ?></h2>
    <div class="text-black mb-5"><?php echo $cta['description']; ?></div>
    <p class=""><a class="cpc-button cpc-button--primary w-full text-center" href="<?php echo $cta['link_url']; ?>"><?php echo $cta['link_text']; ?></a></p>
  </div>
</section>
<section class="my-20 wrapper">
  <h2 class="uppercase text-2xl md:text-3xl xl:text-4xl font-bold text-center lg:pt-12 mb-8"><?php echo $events['title']; ?></h2>
  <div class="flex flex-col md:flex-row md:justify-between md:items-center md:mb-16">
    <div class="featured-event relative aspect-4:3 md:h-full w-full md:w-1/2 shadow-lg hover:shadow-xl mb-8 md:mb-0 md:mr-16">
      <a class="content" href="<?php echo $featured_event['link']; ?>">
        <img src="<?php echo $featured_event['img']; ?>" alt="Event Image" class="w-full h-full object-cover">
        <div class="featured-event-content absolute inset-0 p-6 flex flex-col justify-end">
          <p class="text-white text-sm ld:text-base"><?php echo date( 'm/d/Y - g:i A', strtotime( $featured_event['date'] ) ); ?></p>
          <h3 class="text-white text-xl md:text-2xl xl:text-3xl font-bold uppercase"><?php echo $featured_event['title']; ?></h3>
        </div>
      </a>
    </div>
    <ul id="upcoming-events" class="list-reset flex flex-col mb-8 md:mb-0 md:flex-1">
      <?php foreach ( $next_events as $key => $event ) : ?>
        <?php echo 0 === $key ? ui_event( $event, true ) : ui_event( $event ); ?>
      <?php endforeach; ?>
    </ul>
  </div>
  <p class="text-center">
    <a href="<?php echo home_url('/events'); ?>" class="cpc-button cpc-button--primary w-full md:w-1/3 mb-4 md:mb-4 md:mr-4">View Featured Events</a>
    <a href="<?php echo home_url('/calendar'); ?>" class="cpc-button cpc-button--outline w-full md:w-1/3"><?php echo $events['link_text']; ?></a>
  </p>
</section>
<section class="bg-black">
  <div class="arrow arrow-top"></div>
  <div class="wrapper flex flex-col md:flex-row items-center justify-between pt-20 pb-20">
    <div class="flex-1 mb-12 mx-auto md:mb-0 md:ml-0 md:mr-4 lg:pr-8 text-center md:text-left max-w-xl">
      <h2 class="text-white uppercase bold text-2xl sm:text-3xl xl:text-4xl mb-4 mt-0 font-bold leading-tight"><?php echo $learn_more['title']; ?></h2>
      <div class="general-content text-sm sm:text-base text-white mb-8"><?php echo $learn_more['description']; ?></div>
      <p><a class="cpc-button cpc-button--outline-light w-full md:w-auto" href="<?php echo home_url('blog'); ?>"><?php echo $learn_more['link_text']; ?></a></p>
    </div>
    <div class="w-full flex-1 md:ml-4"><?php echo do_shortcode('[gravityform id=1 title=false description=false ajax=true]'); ?></div>
  </div>
  <div class="arrow arrow-bottom"></div>
</section>

<aside class="cpc-popup" id="hero-video" data-popup-hidden="true">
  <div class="cpc-popup__underlay" data-popup-action aria-controls="hero-video"></div>
  <div class="cpc-popup__content bg-black p-0 overflow-hidden">
    <?php 
      echo cl_video_tag( $cta['video'], 
        array(
          "controls" => true,
          "preload" => true,
          "fallback_content" => "Your browser does not support HTML5 video tags",
          "width" => 800,
          "crop" => "fit",
          "class" => "cpc-popup__video",
        )
      ); 
    ?>
  </div>
</aside>

<?php get_footer();