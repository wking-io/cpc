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

<section class="sundays-hero relative w-full lg:w-4/5 ml-auto flex flex-col lg:flex-row mt-nav lg:mt-0">
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

<?php get_footer();
