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
        $startDate = date( 'm/d/Y', strtotime( $event->start->dateTime ) );
        $startTime = date( 'g:i A', strtotime( $event->start->dateTime ) );
      else :
        $startDate = date( 'm/d/Y', strtotime( $event->start->date ) );
      endif;

      if ( ! empty( $event->end->dateTime ) ) :
        $endDate = date( 'm/d/Y', strtotime( $event->end->dateTime ) );
        $endTime = date( 'g:i A', strtotime( $event->end->dateTime ) );
      else :
        $endDate = date( 'm/d/Y', strtotime( $event->end->date ) );
      endif;

      if ( ! empty( $startDate ) ) :
        $filtered_events[$key]['date'] = $startDate;
      endif;

      if ( !empty( $startDate ) && ! empty( $endDate ) && $endDate !== $startDate ) :
        $filtered_events[$key]['date'] .= ' - ' . $endDate;
      endif;

      if ( ! empty( $startTime ) ) :
        $filtered_events[$key]['time'] = $startTime;
      endif;

      if ( ! empty( $startTime ) && ! empty( $endTime ) ) :
        $filtered_events[$key]['endTime'] .= ' - ' . $endTime;
      endif;

      $filtered_events[$key]['title'] = $event->summary;
      $filtered_events[$key]['url']   = $event->htmlLink;
    endforeach;
  endif;

  return $filtered_events;
}