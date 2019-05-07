<?php

function cpc_render_upcoming_events( $attributes ) {
  $next_events = cpc_get_next_events();

  ob_start(); ?>
    <ul id="upcoming-events" class="list-reset flex flex-col m-0">
      <?php foreach ( $next_events as $key => $event ) :
        echo 0 === $key ? ui_event( $event, true ) : ui_event( $event );
      endforeach; ?>
    </ul>
  <?php return ob_get_clean();
}