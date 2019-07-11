<?php

get_header();

$args = array(
  'posts_per_page' => '2',
  'post_type'      => 'cpc_staff',
  'offset'         => '0',
);

$first_query = new WP_Query( $args );
?>

<svg class="diamond-one" viewBox="0 0 520 1083" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 417.391L521.033 -209L1011 417.391L521.033 1083L0 417.391Z" fill="#F2F4F5" />
</svg>

<svg class="diamond-two" viewBox="0 0 570 1576" xmlns="http://www.w3.org/2000/svg">
  <path d="M-663 764.081L-27.5563 0L570 764.081L-27.5563 1576L-663 764.081Z" fill="#F2F4F5" />
</svg>



<?php if ( $first_query->have_posts() && ! is_paged() ) : ?>
  <section class="wrapper mt-nav mb-8 pt-4 lg:pt-12">
    <?php while ( $first_query->have_posts() ) : $first_query->the_post();
    ?>
      <div class="featured-staff flex flex-col md:flex-row md:space-between items-start py-16">
          <div class="aspect-3:4 w-full md:w-2/5 md:max-w-sm flex-shrink-0 mb-6 md:mb-0">
            <img class="w-full h-full object-cover absolute top-0 left-0" src="<?php echo the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title() . ' headshot'; ?>">
          </div>
          <div class="md:ml-16 flex-1">
            <h3 class="uppercase font-bold lg:pt-4 mb-0 text-3xl md:text-4xl"><?php the_title(); ?></h3>
            <h4 class="text-primary font-bold text-lg md:text-xl mb-4"><?php the_field( 'staff_position' ); ?></h4>
            <div class="general-content"><?php the_content(); ?></div>
          </div>
        </a>
      </div>
    <?php endwhile; ?>
  </section>
<?php endif; ?>

<?php if ( have_posts() ) : ?>
  <section class="wrapper mb-20 lg:pb-12">
    <h3 class="uppercase font-bold text-center mb-12 text-3xl md:text-4xl">The Covenant Staff</h3>
    <ul class="flex flex-col md:flex-row md:flex-wrap md:-mx-2 xl:-mx-4">
      <?php while ( have_posts() ) : the_post(); ?>
        <li class="staff-item md:mx-2 xl:mx-4 mb-8 md:mb-4 xl:mb-8">
            <div class="staff-image aspect-3:4 mb-4 w-full">
              <img class="w-full h-full object-cover absolute top-0 left-0" src="<?php echo the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title() . ' headshot'; ?>">
            </div>
              <h3 class="uppercase font-bold mb-1 text-2xl md:text-lg leading-none"><?php the_title(); ?></h3>
              <h4 class="text-base md:text-sm text-primary font-bold"><?php the_field( 'staff_position' ); ?></h4>
            </div>
        </li>
      <?php endwhile; ?>
    </ul>
  </section>
<?php endif; ?>

<?php get_footer();