<?php

get_header();

$post_id    = get_the_ID(); 
$ministry   = get_the_terms( $post_id, 'cpc_ministry' );
$day        = get_the_terms( $post_id, 'cpc_day' );
$group_type = get_the_terms( $post_id, 'cpc_group_type' );
$terms      = array();

error_log( print_r( $ministry, true ) );

if ( ! empty( $day ) ) :
  foreach ( $day as $val ) :
    $terms[] = $val->name;
  endforeach;
endif;

if ( ! empty( $ministry ) ) :
  foreach ( $ministry as $val ) :
    $terms[] = $val->name;
  endforeach;
endif;

if ( ! empty( $group_type ) ) :
  foreach ( $group_type as $val ) :
    $terms[] = $val->name;
  endforeach;
endif;

$directions_text = get_field( 'directions_link_url' );
$directions_url  = get_field( 'directions_link_text' );

?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <section class="wrapper min-h-screen flex lg:items-center mt-nav mb-20 py-20">
    <div class="w-full max-w-3xl lg:-mt-20">
      <?php if ( ! empty( $terms ) ) : ?>
        <div class="flex uppercase text-primary font-semibold text-sm sm:text-base md:text-lg">
          <?php foreach ( $terms as $key => $term ) : ?>
            <?php if ( $key > 0 ) : ?>
              <p class="mx-2">-</p>
            <?php endif; ?>
            <p class=""><?php echo $term; ?></p>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
      <h1 class="mb-4 md:mb-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"><?php the_title(); ?></h1>
      <div class="mb-12 flex">
        <p class="flex font-semibold items-center"><?php echo ui_icon( array( 'icon' => 'clock', 'color' => 'fill-primary', 'classes' => 'w-auto h-4' ) ); ?> <span class="ml-3"><?php the_field( 'group_time' ); ?></span></p>
        <p class="flex font-semibold items-center ml-8 sm:ml-16"><?php echo ui_icon( array( 'icon' => 'location', 'color' => 'fill-primary', 'classes' => 'w-auto h-4' ) ); ?> <span class="ml-3"><?php the_field( 'group_location' ); ?></span></p>
      </div>
      <div class="general-content mb-12"><?php the_content(); ?></div>
      <?php if ( ! empty( $directions_text ) && ! empty( $directions_url ) ) : ?>
        <p><a href="<?php the_field( 'directions_link_url' ); ?>" class="cpc-button cpc-button--outline w-full md:w-auto md:px-20"><?php the_field( 'directions_link_text' ); ?></a></p>
      <?php endif; ?>
    </div>
  </section>
<?php endwhile; else : ?>
  <p>Sorry, no posts matched your criteria.</p>
<?php endif; ?>

<?php get_footer();