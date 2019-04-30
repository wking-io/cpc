<?php

get_header();

$header = get_field( 'officer_header', 'options' );
$contact = get_field( 'officer_contact', 'options' );

$officers = array();
$forms = array(
  'elder' => 5,
  'deacon' => 3,
  'trustee' => 4
);

if ( have_posts() ) : while ( have_posts() ) : the_post();
  $terms = get_the_terms( get_the_ID(), 'officer_title' );

  if ( ! empty( $terms ) ) :
    $officers[$terms[0]->slug][] = array(
      'img' => get_the_post_thumbnail_url(),
      'name' => get_the_title(),
      'title' => get_the_content(),
    );
  endif;
    
endwhile; endif;

?>

<section class="page-header">
  <img class="page-header__img" src="<?php echo $header['image']['url']; ?>" alt="Officer Page Header" />
  <div class="page-header__overlay" />
  <h1 class="page-header__heading"><?php echo $header['heading']; ?></h1>
</section>

<section id="officer-tabs" data-active-tab="tab:elder">
  <div class="wrapper py-12 flex items-center justify-center sm:justify-start" role="tablist">
    <button class="tab:elder cpc-button cpc-button--outline py-2 text-xs sm:text-sm" role="tab" id="tab:elder" aria-controls="officer-tabs">Elders</button>
    <button class="tab:deacon cpc-button cpc-button--outline ml-2 sm:ml-4 py-2 text-xs sm:text-sm" role="tab" id="tab:deacon" aria-controls="officer-tabs">Deacons</button>
    <button class="tab:trustee cpc-button cpc-button--outline ml-2 sm:ml-4 py-2 text-xs sm:text-sm" role="tab" id="tab:trustee" aria-controls="officer-tabs">Trustees</button>
  </div>
  <div>
    <?php foreach ( $officers as $title => $data ) : ?>
      <div class="hidden panel:<?php echo $title; ?>" role="tabpanel" aria-labelledby="tab:<?php echo $title; ?>" id="panel:<?php echo $title; ?>">
        <div class="wrapper pb-12">
          <h2 class="text-center sm:text-left uppercase font-bold lg:pt-4 mb-0 text-2xl md:text-3xl mb-6">The Board Of <?php echo $title; ?>s</h2>
          <ul class="flex flex-wrap items-center justify-center sm:justify-between w--full sm:-mx-4">
            <?php foreach ( $data as $officer ) : ?>
              <li class="officer-item flex items-center sm:mx-4 mb-8">
                <div class="aspect-3:4 w-20 flex-no-shrink"><img class="w-full h-full object-cover absolute top-0 left-0" src="<?php echo $officer['img']; ?>" alt="<?php echo $officer['name'] . ' Headshot'; ?>"></div>
                <div class="flex-1 ml-6">
                  <h4 class="uppercase font-bold"><?php echo $officer['name']; ?></h4>
                  <div class="text-primary font-bold"><?php echo $officer['title']; ?></div>
                </div>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
        <div class="bg-black py-20">
          <div class="wrapper flex flex-col items-center justify-center text-white max-w-xl text-center">
            <h2 class="uppercase font-bold lg:pt-4 mb-0 text-2xl md:text-3xl mb-4"><?php echo str_replace('_officer_title_', $title, $contact['heading'] ) . 's'; ?></h2>
            <div class="mb-8"><?php echo $contact['description']; ?></div>
            <button data-popup-action aria-controls="<?php echo $title; ?>-question" class="cpc-button cpc-button--outline-light">Contact The <?php echo $title; ?>s</button>
          </div>
        </div>
      </div>
      <aside class="cpc-popup" id="<?php echo $title; ?>-question" data-popup-hidden="true">
        <div class="cpc-popup__underlay" data-popup-action aria-controls="<?php echo $title; ?>-question"></div>
        <div class="cpc-popup__content bg-primary p-8 md:p-16 form--dark-button">
          <h3 class="text-center text-xl md:text-2xl xl:text-3xl uppercase font-bold text-white mb-3">Any Questions For Our <?php echo $title; ?>s</h3>
          <?php echo do_shortcode('[gravityform id=' . $forms[$title] . ' title=false description=false ajax=true]'); ?>
        </div>
      </aside>
    <?php endforeach; ?>
  </div>
</section>

<?php get_footer();
