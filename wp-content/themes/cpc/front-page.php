<?php

get_header();

$hero       = get_field( 'home_hero' );
$cta        = get_field( 'home_cta' );
$events     = get_field( 'home_events' );
$learn_more = get_field( 'learn_more' );

?>

<section class="h-hero bg-black relative">
    <div class="absolute inset-0">
      <div class="hero-overlay absolute inset-0"></div>
      <img class="w-full h-full object-cover" src="<?php echo $hero['image']['url']; ?>" alt="Covenant Worship">
    </div>
    <div class="wrapper flex flex-col-reverse md:flex-col items-end md:justify-end h-full pb-20 relative z-10">
      <div class="w-full pb-12 md:pb-8">
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
      <h2 class="w-full text-white uppercase font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-8"><?php echo $hero['heading']; ?></h2>
    </div>
</section>
<section class=""></section>

<?php get_footer();