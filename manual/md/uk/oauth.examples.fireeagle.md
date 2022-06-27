- [« Приклади](oauth.examples.md)
- [Функції OAuth »](ref.oauth.md)

- [PHP Manual](index.md)
- [Приклади](oauth.examples.md)
- FireEagle

## FireEagle

` <?php$req_url u003d 'https://fireeagle.yahooapis.com/oauth/request_token';$authurl u003d 'https://fireeagle.yahoo.net/oauth/authorize';$acc_url u003d 'https:// fireeagle.yahooapis.com/oauth/access_token';$api_urlu003du003d''https://fireeagle.yahooapis.com/api/0.1';$conskey u003d 'your_consumer_key';$conssec u003d 'your_consumer_sret/ При stateu003d1 наступний запит повинен включати oauth_token.// Якщо не включає, повертаємось к 0if(!isset($_GET['oauth_token']) && $_SESSION[' ] u003d 0;try { $oauth u003d new OAuth($conskey,$conssec,OAUTH_SIG_METHOD_HMACSHA1,OAUTH_AUTH_TYPE_URI); $oauth->enableDebug(); if(!isset($_GET['oauth_token']) && !$_SESSION['state']) {   $request_token_info u003d$oauth->getRequestToken($req_url); $_SESSION['secret'] u003d $request_token_info['oauth_token_secret']; $_SESSION['state'] u003d 1; header('Location: '.$authurl.'?oauth_tokenu003d'.$request_token_info['oauth_token']); exit; } else if($_SESSION['state']u003du003d1) {   $oauth->setToken($_GET['oauth_token'],$_SESSION['secret']); $access_token_infou003du003d$oauth->getAccessToken($acc_url); $_SESSION['state'] u003d 2; $_SESSION['token'] u003d $access_token_info['oauth_token']; $_SESSION['secret'] u003d $access_token_info['oauth_token_secret']; }  $oauth->setToken($_SESSION['token'],$_SESSION['secret']); $oauth->fetch("$api_url/user.json"); $jsonu003du003djson_decode($oauth->getLastResponse()); print_r($json);} catch(OAuthException $E) {  print_r($E);}?> `
