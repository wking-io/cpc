<?php

get_header();

?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
  $mp3    = get_field( 'sermon_mp3' );
  $itunes = get_field( 'sermon_itunes');
  $scripture = get_field( 'sermon_scripture' );
?>
  <section class="wrapper md:mt-8 lg:mt-16 pt-nav pb-20">
    <div class="aspect-5:3 w-wide md:relative md:left-0 md:top-0 md:mx-auto md:w-full mb-8">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title() . 'Thumnail'; ?>">
    </div>
    <div class="flex items-end mb-4">
      <p class="text-sm md:text-base mr-4"><?php echo get_the_date( 'F j, Y' ); ?></p>
      <p class="text-sm md:text-base"><?php echo get_field( 'sermon_preacher' ); ?></p>
      <div class="hidden md:flex items-center justify-end flex-1">
        <?php if ( ! empty( $mp3 ) ) : ?>
          <a class="cpc-button cpc-button--sm cpc-button--outline normal-case flex items-center ml-3" href="<?php echo $mp3; ?>"><?php echo ui_icon( array( 'icon' => 'mp3', 'classes' => 'h-3 w-auto' ) ); ?> <span class="ml-2">Download MP3</a>
        <?php endif; ?>
        <?php if ( ! empty ( $itunes ) ) : ?>
          <a class="cpc-button cpc-button--sm cpc-button--outline normal-case flex items-center ml-3" href="<?php echo $itunes; ?>"><?php echo ui_icon( array( 'icon' => 'itunes', 'classes' => 'h-3 w-auto' ) ); ?> <span class="ml-2">Listen On iTunes</a>
        <?php endif; ?>
        <a class="cpc-button cpc-button--sm cpc-button--outline normal-case flex items-center ml-3" href="<?php echo 'https://www.facebook.com/sharer/sharer.php?u=' . get_permalink(); ?>"><?php echo ui_icon( array( 'icon' => 'facebook', 'classes' => 'h-3 w-auto' ) ); ?> <span class="ml-2"></span>Share On Facebook</a>
      </div>
    </div>
    <h2 class="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl mb-8"><?php the_title(); ?></h2>
    <blockquote class="cpc-quote border-primary mb-8 max-w-5xl">
      <p class="cpc-quote__content md:text-xl"><?php echo $scripture['text']; ?></p>
      <p class="cpc-quote__source md:text-lg"><cite><?php echo $scripture['verse']; ?></cite></p>
    </blockquote>
    <div class="flex flex-col md:hidden flex-1">
      <?php if ( ! empty( $mp3 ) ) : ?>
        <a class="w-full cpc-button cpc-button--outline normal-case flex justify-center items-center mb-3" href="<?php echo $mp3; ?>"><?php echo ui_icon( array( 'icon' => 'mp3', 'classes' => 'h-3 w-auto' ) ); ?> <span class="ml-2">Download MP3</a>
      <?php endif; ?>
      <?php if ( ! empty ( $itunes ) ) : ?>
        <a class="w-full cpc-button cpc-button--outline normal-case flex justify-center items-center mb-3" href="<?php echo $itunes; ?>"><?php echo ui_icon( array( 'icon' => 'itunes', 'classes' => 'h-3 w-auto' ) ); ?> <span class="ml-2">Listen On iTunes</a>
      <?php endif; ?>
      <a class="w-full cpc-button cpc-button--outline normal-case flex justify-center items-center mb-3" href="<?php echo 'https://www.facebook.com/sharer/sharer.php?u=' . get_permalink(); ?>"><?php echo ui_icon( array( 'icon' => 'facebook', 'classes' => 'h-3 w-auto' ) ); ?> <span class="ml-2"></span>Share On Facebook</a>
    </div>
    <p><a class="cpc-button cpc-button--primary w-full md:w-auto" href="<?php echo home_url( '/sermons' ); ?>">Back to all Sermons</a></p>
  </section>
<?php endwhile; else : ?>
  <p>Sorry no content for this post!</p>
<?php endif; ?>

<?php get_footer();