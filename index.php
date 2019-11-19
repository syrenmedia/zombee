<?php

require_once __DIR__ . '/vendor/autoload.php';

$fb = new \Facebook\Facebook([
  'app_id' => '668135257012919',
  'app_secret' => '46ce206723d2218126bdd1d277a42d45',
  'default_graph_version' => 'v2.10',
]);

try {
  $response = $fb->get(
    '/295249638092541/opted_in_members',
    '668135257012919|jXzHcNNGgYtb6SEVdK2fMRo7sDA'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage() . "\n";
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage() . "\n";
  exit;
}
$graphNode = $response->getGraphNode();

