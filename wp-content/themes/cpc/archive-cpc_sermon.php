<?php

get_header();

function thumbnail($iframe)
{
  $id = '';
  // use preg_match to find iframe src
  preg_match('/src="(.+?)"/', $iframe, $matches);
  $src = wp_parse_url($matches[1]);

  if (!empty($src['path'])):
    $id = end(explode('/', $src['path']));
  endif;

  // echo $iframe
  echo 'http://img.youtube.com/vi/' . $id . '/maxresdefault.jpg';
}

$args = array(
  'posts_per_page' => '1',
  'post_type' => 'cpc_sermon',
  'offset' => '0',
  'orderby' => 'menu_order',
);

$first_query = new WP_Query($args);
?>


<?php if ($first_query->have_posts() && !is_paged()): ?>
<h2 class="mt-nav mb-8 pt-4 lg:pt-12 uppercase font-bold sermon-page-heading leading-tight">This Week's Sermon</h2>
<section class="wrapper">
    <?php while ($first_query->have_posts()):
        $first_query->the_post();
        $video = get_field('sermon_video');
        $scripture = get_field('sermon_scripture');
        $thumbnail = get_the_post_thumbnail_url();
        ?>
    <div class="featured-sermon relative text-white pt-16 mb-20">
        <a href="<?php echo the_permalink(); ?>">
            <div class="featured-sermon-image aspect-16:9 absolute top-0 left-0">
                <img class="w-full h-full object-cover absolute top-0 left-0"
                    src="<?php echo !empty($thumbnail) ? $thumbnail : thumbnail($video); ?>" alt="Sermon Thumbnail">
            </div>
            <div class="sm:ml-16 bg-primary">
                <div class="aspect-16:9"></div>
                <div class="px-8 pb-8 -mt-8">
                    <div class="flex justify-between mb-4">
                        <p><?php echo get_field('sermon_preacher'); ?></p>
                        <p><?php echo get_the_date('F j, Y'); ?></p>
                    </div>
                    <h4 class="uppercase font-bold mb-2 text-xl md:text-2xl"><?php the_title(); ?></h4>
                    <blockquote>
                        <p class="mb-2"><?php echo $scripture['text']; ?></p>
                        <p class="font-bold"><cite class="roman"><?php echo $scripture['verse']; ?></cite></p>
                    </blockquote>
                </div>
            </div>
        </a>
    </div>
    <?php endwhile; ?>
</section>
<?php endif; ?>

<?php if (have_posts()): ?>
<section class="wrapper<?php echo is_paged() ? ' mt-nav pt-12' : ''; ?>">
    <h3 class="uppercase font-bold text-center mb-12 text-3xl md:text-4xl">All Sermons</h3>
    <ul class="flex flex-col md:flex-row md:flex-wrap -mx-6">
        <?php while (have_posts()):
          the_post();
          $video = get_field('sermon_video');
          $thumbnail = get_the_post_thumbnail_url();
          ?>
        <li class="sermon-item relative text-white mx-6 mb-12 pt-6 md:pt-8">
            <a href="<?php the_permalink(); ?>">
                <div class="sermon-image aspect-16:9 absolute top-0 left-0">
                    <img class="w-full h-full object-cover absolute top-0 left-0"
                        src="<?php echo !empty($thumbnail) ? $thumbnail : thumbnail($video); ?>" alt="Sermon Thumbnail">
                </div>
                <div class="ml-6 md:ml-8 bg-primary">
                    <div class="aspect-16:9"></div>
                    <div class="px-4 pb-4 -mt-3 md:-mt-4">
                        <div class="flex justify-between mb-2 text-sm">
                            <p class="leading-none"><?php echo get_field('sermon_preacher'); ?></p>
                            <p class="leading-none"><?php echo get_the_date('F j, Y'); ?></p>
                        </div>
                        <h4 class="uppercase font-bold mb-0 text-lg leading-none"><?php the_title(); ?></h4>
                    </div>
                </div>
            </a>
        </li>
        <?php endwhile; ?>
    </ul>
    <div class="post-nav flex items-center justify-center m-0 p-0">
        <?php next_posts_link('Older Sermons'); ?>
        <?php previous_posts_link('Newer Sermons'); ?>
    </div>
</section>
<?php endif; ?>

<?php get_footer();