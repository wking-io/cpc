<?php

get_header(); ?>

<section>
  <div class="min-h-screen wrapper flex flex-col items-center justify-center" style="max-width: 600px;">
    <h1 class="text-5xl font-bold mb-4 text-primary">404</h1>
    <p class="leading-normal text-center font-medium text-md mb-8">You have found a page that doesn't exist! Use the link below to navigate back to the homepage of our site.</p>
    <a href="<?php echo home_url(); ?>" class="button">Home Page</a>
  </div>
</section>

<?php get_footer();
