<?php

/**
 * Template Name: Giving Template
 */

get_header();

$hero = get_field( 'giving_hero' );
$planned = get_field( 'planned_giving' );

?>

<section class="relative pt-nav">
  <img class="giving-image absolute w-full h-full top-0 left-0 object-cover" src="<?php echo $hero['image']['url']; ?>" alt="Giving Background">
  <div class="giving-image-overlay"></div>
  <div class="wrapper pt-0 pb-20 md:py-20">
    <div class="max-w-4xl py-20">
      <h2 class="mb-8 text-4xl xl:text-5xl uppercase text-white font-bold leading-tight"><?php echo $hero['heading']; ?></h2>
      <div class="general-content pb-8 text-white"><?php echo $hero['description']; ?></div>
      <div class="flex flex-col md:flex-row">
        <p class="m-0 mb-4 md:mb-0 md:mr-4"><a href="<?php echo $hero['give_button_url']; ?>" class="cpc-button hover:bg-primary w-full sm:w-3/5 md:w-auto px-12"><?php echo $hero['give_button_text']; ?></a></p>
        <p class="m-0"><a href="<?php echo $hero['pledge_button_url']; ?>" class="cpc-button cpc-button--outline-dark w-full sm:w-3/5 md:w-auto px-12"><?php echo $hero['pledge_button_text']; ?></a></p>
      </div>
    </div>
  </div>
</section>

<section class="wrapper py-20">
  <h3 class="mb-8 text-4xl xl:text-5xl uppercase font-bold leading-tight"><?php echo $planned['heading']; ?></h3>
  <div class="flex flex-col md:flex-row md:space-between">
    <div class="general-content mb-8 md:w-3/5"><?php echo $planned['description']; ?></div>
    <?php if ( ! empty( $planned['docs_heading'] ) && ! empty( $planned['docs'] ) ) : ?>
      <div class="flex-no-shrink md:ml-12">
        <h4 class="text-base font-bold mb-8"><?php echo $planned['docs_heading']; ?></h4>
        <ul>
          <?php foreach ( $planned['docs'] as $doc ) : ?>
            <li class="flex items-center mb-4">
              <div class="h-4 mr-4"><?php echo ui_icon( array( 'icon' => 'file', 'color' => 'fill-primary' ) ); ?></div>
              <p>
              <a class="underline hover:no-underline" href="<?php echo $doc['file']; ?>"><?php echo $doc['name']; ?></a></p>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php get_footer();