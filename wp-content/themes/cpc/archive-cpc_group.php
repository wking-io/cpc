<?php

get_header();

$days = get_terms( 'cpc_day' );
$ministries = get_terms( 'cpc_ministry' );
$types = get_terms( 'cpc_group_type' );

?>

<section class="wrapper my-20 py-20">
  <p class="text-primary font-semibold mb-0">Covenant Presbyterian</p>
  <h1 class="uppercase leading-tight text-4xl md:text-5xl font-bold mt-0 mb-12">Discipleship Groups</h1>
  <form class="filter-form flex flex-col md:flex-row space-between">
    <?php if ( ! empty( $days ) ) : ?>
      <div class="cpc-select mb-4 md:mb-0 md:mr-4 w-full">
        <select class="" name="filter-day" id="filter-day">
          <option selected value="any">Filter By Day</option>
          <?php foreach ( $days as $day ) : ?>
            <option value="<?php echo $day->slug; ?>"><?php echo $day->name; ?></option>
          <?php endforeach; ?>
        </select>
      </div>
    <?php endif; ?>
    <?php if ( ! empty( $ministries ) ) : ?>
      <div class="cpc-select mb-4 md:mb-0 md:mr-4 w-full">
        <select class="" name="filter-ministry" id="filter-ministry">
          <option selected value="any">Filter By Ministry</option>
          <?php foreach ( $ministries as $ministry ) : ?>
            <option value="<?php echo $ministry->slug; ?>"><?php echo $ministry->name; ?></option>
          <?php endforeach; ?>
        </select>
      </div>
    <?php endif; ?>
    <?php if ( ! empty( $days ) ) : ?>
      <div class="cpc-select mb-4 md:mb-0 md:mr-4 w-full">
        <select class="" name="filter-type" id="filter-type">
          <option selected value="any">Filter By Type</option>
          <?php foreach ( $types as $type ) : ?>
            <option value="<?php echo $type->slug; ?>"><?php echo $type->name; ?></option>
          <?php endforeach; ?>
        </select>
      </div>
    <?php endif; ?>
    <button type="submit" id="filter-submit" class="cpc-button cpc-button--primary px-4 py-3 md:p-4 flex items-center justify-center"><?php echo ui_icon( array( 'icon' => 'search', 'color' => 'fill-white', 'classes' => 'w-4' ) ); ?> <span class="ml-4 md:hidden">Filter Groups</span></button>
  </form>
  <?php if ( have_posts() ) : ?>
    <ul class="group-list py-16">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php echo ui_group( array(
          'post_id' => get_the_ID(),
        ) ); ?>
      <?php endwhile; ?>
    </ul>
    <div class="post-nav flex items-center justify-center m-0 p-0">
      <?php next_posts_link( 'Next Groups' ); ?>
      <?php previous_posts_link( 'Previous Groups' ); ?>
    </div>
  <?php else: ?>
    <p>Sorry, no groups matched your criteria.</p>
  <?php endif; ?>
</section>

<?php get_footer();