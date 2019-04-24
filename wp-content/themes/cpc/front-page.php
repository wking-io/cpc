<?php

get_header();

$hero       = get_field( 'home_hero' );
$cta        = get_field( 'home_cta' );
$events     = get_field( 'home_events' );
$learn_more = get_field( 'learn_more' );

?>

<section class="h-screen bg-black"></section>
<section class="h-screen"></section>

<?php get_footer();