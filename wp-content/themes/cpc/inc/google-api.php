<?php 

require_once __DIR__ . '/google-api/vendor/autoload.php';

function cpc_get_next_events() {
  $client = new Google_Client();
  $client->setDeveloperKey('AIzaSyCLeVp62GHs-dhQZrkh8pu8kOHlmhrnNag');
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
  // error_log( print_r( $events, true ) );
  $filtered_events = array();


  if ( ! empty( $events ) ) :
    foreach ($events as $key => $event ) :
      $filtered_events[$key]['start'] = $event->start->dateTime;
      $filtered_events[$key]['title'] = $event->summary;
      $filtered_events[$key]['url']   = '';
    endforeach;
  endif;

  return $filtered_events;
}