<?php

/**
 * Template Name: Sundays Template
 */

get_header();

$hero = get_field( 'sundays_hero' );
$about = get_field( 'about' );
$parking = get_field( 'parking' );
$kids = get_field( 'kids_youth' );
$more = get_field( 'find_out_more' );
$groups = get_field( 'sundays_groups' );
$questions = get_field( 'questions' );

?>

<section class="sundays-hero relative flex flex-col lg:flex-row mt-nav lg:mt-0">
  <div class="absolute sundays-underlay"></div>
  <div class="flex flex-col flex-1">
    <div class="bg-primary lg:w-full pt-nav px-6 md:px-8 mr-16 lg:mr-0">
      <h2 class="text-xl md:text-2xl xl:text-3xl uppercase text-white font-bold max-w-2xl leading-tight lg:pt-6 pb-8"><?php echo $hero['heading']; ?></h2>
      <ul class="flex flex-col md:flex-row md:-mx-3 max-w-4xl mb-4">
        <?php foreach ( $hero['worship_times'] as $worship ) : ?>
          <li class="w-full md:w-1/3 text-sm xl-text-base md:mx-3">
            <p class="text-white"><?php echo $worship['time']; ?></p>
            <p class="text-white"><strong><?php echo $worship['title']; ?></strong></p>
            <div class="general-content text-white"><?php echo $worship['subtitle']; ?></div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
    <div class="sundays-video w-full overflow-hidden">
      <?php 
        echo cl_video_tag( $hero['video'], 
          array(
            "loop" => true,
            "autoplay" => true,
            "muted" => true,
            "preload" => true,
            "fallback_content" => "Your browser does not support HTML5 video tags",
            "width" => 900,
            "crop" => "fit",
          )
        ); 
      ?>
    </div>
  </div>
  <div class="w-full lg:max-w-xs p-8 py-12 text-white flex flex-col justify-end">
    <h3 class="text-xl md:text-2xl xl:text-3xl uppercase text-white font-bold pb-0 xl:pb-6"><?php echo $hero['what_to_expect']['heading']; ?></h3>
    <ul class="text-sm flex flex-col md:flex-row lg:flex-col mx-0 md:-mx-3 lg:mx-0">
      <?php foreach ( $hero['what_to_expect']['items'] as $expect ) : ?>
        <li class="pt-8 lg:pt-12 mx-0 md:mx-3 lg:mx-0">
          <p class="mb-2 lg:mb-4"><strong><?php echo $expect['title']; ?></strong></p>
          <p><?php echo $expect['description']; ?></p>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>

<section class="sundays-about flex items-center my-20 py-4">
  <h2 class="text-xl md:text-2xl xl:text-3xl uppercase font-bold max-w-sm mr-12 w-full"><?php echo $about['title']; ?></h2>
  <p class="flex-1"><?php echo $about['description']; ?></p>
</section>

<section class="cpc-split-panel flex-col md:flex-row-reverse bg-primary-dark">
  <div class="cpc-split-panel__img-wrapper">
    <?php echo do_shortcode("[huge_it_maps id='1']"); ?>
  </div>
  <div class="cpc-split-panel__content w-full md:w-1/2 p-8 py-12 md:py-8 text-white">
    <h3 class="text-xl md:text-2xl xl:text-3xl uppercase font-bold text-white text-center mb-3"><?php echo $parking['title']; ?></h3>
    <div class="general-content text-white text-center mb-4"><?php echo $parking['description']; ?></div>
    <p class="mb-3 text-center w-full"><a class="cpc-button hover:border-black w-4/5 mx-auto" href="<?php echo $parking['directions_link_url']; ?>"><?php echo $parking['directions_link_text']; ?></a></p>
    <p class="text-center w-full"><a class="cpc-button cpc-button--outline-white w-4/5 mx-auto" href="<?php echo $parking['map_link_url']; ?>"><?php echo $parking['map_link_text']; ?></a></p>
  </div>
</section>

<section class="wrapper my-20 pt-4 md:pt-8 lg:pt-12">
  <div class="w-full h-56 mb-6"><img class="w-full h-full object-cover" src="<?php echo $kids['image']['sizes']['medium_large']; ?>" alt="Kids & Youth"></div>
  <h2 class="text-2xl md:text-3xl xl:text-4xl uppercase font-bold mb-4"><?php echo $kids['title']; ?></h2>
  <div class="general-content mb-12 lg:w-4/5"><?php echo $kids['description']; ?></div>
  <ul class="list-reset flex flex-wrap lg:flex-no-wrap -mx-4">
    <?php foreach ( $kids['groups'] as $item ) : ?>
      <li class="sunday-group mx-4 mb-4 lg:mb-0">
        <h3 class="md:text-lg font-bold mb-3"><?php echo $item['title']; ?></h3>
        <div class="general-content text-sm"><?php echo $item['description']; ?></div>
      </li>
    <?php endforeach; ?>
  </ul>
</section>

<section class="cpc-split-panel flex-col md:flex-row bg-primary">
  <div class="cpc-split-panel__img-wrapper aspect-4:3 w-full md:w-1/2 overflow-hidden">
    <img class="w-full h-full object-cover absolute top-0" src="<?php echo $more['image']['sizes']['large']; ?>" alt="Learn More">
  </div>
  <div class="cpc-split-panel__content w-full md:w-1/2 p-8 py-12 md:py-8 text-white">
    <h3 class="text-xl md:text-2xl xl:text-3xl uppercase font-bold text-white text-center mb-3"><?php echo $more['title']; ?></h3>
    <div class="general-content text-white text-center mb-4"><?php echo $more['description']; ?></div>
    <p class="text-center"><a class="cpc-button px-12" href="<?php echo $more['link_url']; ?>"><?php echo $more['link_text']; ?></a></p>
  </div>
</section>

<section class="wrapper my-20 pt-4 md:pt-8 lg:pt-12">
  <div class="w-full h-56 mb-6"><img class="w-full h-full object-cover" src="<?php echo $groups['image']['sizes']['medium_large']; ?>" alt="Kids & Youth"></div>
  <div class="flex items-end mb-4">
    <h2 class="flex-1 text-2xl md:text-3xl xl:text-4xl uppercase font-bold m-0"><?php echo $groups['title']; ?></h2>
    <p><a href="<?php echo get_post_type_archive_link( 'cpc_group' ); ?>" class="text-sm uppercase text-primary underline hover:no-underline font-semibold">View All Groups</a></p>
  </div>
  <div class="general-content mb-12 lg:w-4/5"><?php echo $groups['description']; ?></div>
  <ul class="list-reset flex flex-wrap md:flex-no-wrap -mx-4">
    <?php foreach ( $groups['filters'] as $item ) : ?>
      <li class="sunday-group mx-4 mb-4 lg:mb-0">
        <h3 class="md:text-lg font-bold mb-3"><?php echo $item['title']; ?></h3>
        <div class="general-content text-sm"><?php echo $item['description']; ?></div>
      </li>
    <?php endforeach; ?>
  </ul>
</section>

<section class="cpc-split-panel flex-col md:flex-row-reverse bg-black">
  <div class="cpc-split-panel__img-wrapper aspect-4:3 w-full md:w-1/2 overflow-hidden">
    <img class="w-full h-full object-cover absolute top-0" src="<?php echo $questions['image']['sizes']['large']; ?>" alt="Learn More">
  </div>
  <div class="cpc-split-panel__content w-full md:w-1/2 p-8 py-12 md:py-8 text-white">
    <h3 class="text-xl md:text-2xl xl:text-3xl uppercase font-bold text-white text-center mb-3"><?php echo $questions['title']; ?></h3>
    <div class="general-content text-white text-center mb-4"><?php echo $questions['description']; ?></div>
    <button class="cpc-button cpc-button--primary px-12" data-popup-action aria-controls="sundays-question"><?php echo $questions['link_text']; ?></button>
  </div>
</section>

<aside class="cpc-popup" id="sundays-question" data-popup-hidden="true">
  <div class="cpc-popup__underlay" data-popup-action aria-controls="sundays-question"></div>
  <div class="cpc-popup__content bg-primary p-8 md:p-16 form--dark-button">
    <h3 class="text-center text-xl md:text-2xl xl:text-3xl uppercase font-bold text-white mb-3">Any Questions For Us?</h3>
    <?php echo do_shortcode('[gravityform id=2 title=false description=false ajax=true]'); ?>
  </div>
</aside>

<?php get_footer();
