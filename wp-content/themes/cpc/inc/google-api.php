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
      $filtered_events[$key]['start'] = $event->start->dateTime;
      $filtered_events[$key]['title'] = $event->summary;
      $filtered_events[$key]['url']   = $event->htmlLink;
    endforeach;
  endif;

  return $filtered_events;
}