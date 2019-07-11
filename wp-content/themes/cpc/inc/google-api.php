<?php 


require_once __DIR__ . '/google-api/vendor/autoload.php';

function cpc_get_next_events( $filtered_events = array() ) {
  $google_api = get_field( 'cpc_google_api', 'options' );

  if ( empty( $google_api ) ) :
    return $filtered_events;
  endif;

  $client = new Google_Client();
  $client->setDeveloperKey($google_api);
  $service = new Google_Service_Calendar($client);

  $calendar_id = 'alice.searcy@covhsv.org';
  $params      = array(
    'maxResults'   => 5,
    'orderBy'      => 'startTime',
    'singleEvents' => true,
    'timeMin'      => date( 'c', strtotime('now') ),
  );
  $results     = $service->events->listEvents($calendar_id, $params);
  $events      = $results->getItems();
  
  if ( ! empty( $events ) ) :
    foreach ($events as $key => $event ) :
      if ( ! empty( $event->start->dateTime ) ) :
        $raw_start = new DateTime($event->start->dateTime, new DateTimeZone('UTC'));
        $raw_start->setTimezone(new DateTimeZone('America/Chicago'));
        $start_date = date_format( $raw_start, 'm/d/Y' );
        $start_time = date_format( $raw_start, 'g:i A' );
      else :
        $raw_start = new DateTime($event->start->date, new DateTimeZone('UTC'));
        $raw_start->setTimezone(new DateTimeZone('America/Chicago'));
        $startDate = date_format( $raw_start, 'm/d/Y' );
      endif;

      if ( ! empty( $event->end->dateTime ) ) :
        $raw_end = new DateTime($event->end->dateTime, new DateTimeZone('UTC'));
        $raw_end->setTimezone(new DateTimeZone('America/Chicago'));
        $end_date = date_format( $raw_end, 'm/d/Y' );
        $end_time = date_format( $raw_end, 'g:i A' );
      else :
        $raw_end = new DateTime($event->end->date, new DateTimeZone('UTC'));
        $raw_end->setTimezone(new DateTimeZone('America/Chicago'));
        $end_date = date_format( $raw_end, 'm/d/Y' );
      endif;

      if ( ! empty( $start_date ) ) :
        $filtered_events[$key]['date'] = $start_date;
      endif;

      if ( !empty( $start_date ) && ! empty( $end_date ) && $end_date !== $start_date ) :
        $filtered_events[$key]['date'] .= ' - ' . $end_date;
      endif;

      if ( ! empty( $start_time ) ) :
        $filtered_events[$key]['time'] = $start_time;
      endif;

      if ( ! empty( $start_time ) && ! empty( $end_time ) ) :
        $filtered_events[$key]['time'] .= ' - ' . $end_time;
      endif;

      $filtered_events[$key]['title'] = $event->summary;
      $filtered_events[$key]['url']   = $event->htmlLink;
    endforeach;
  endif;

  return $filtered_events;
}