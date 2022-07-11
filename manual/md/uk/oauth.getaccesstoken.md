- [« OAuth::generateSignature](oauth.generatesignature.md)
- [OAuth::getCAPath »](oauth.getcapath.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Отримати токен доступу

# OAuth::getAccessToken

(PECL OAuth u003d 0.99.1)

OAuth::getAccessToken — Отримати токен доступу

### Опис

public **OAuth::getAccessToken**(
string `$access_token_url`,
string `$auth_session_handle` u003d ?,
string `$verifier_token` u003d ?,
string `$http_method` u003d ?
): array

Отримує токен доступу, його пароль та всі додаткові параметри відповіді
від постачальника послуг.

### Список параметрів

`access_token_url`
URL до API видачі токена доступу.

`auth_session_handle`
Обробник сесії авторизації. Цей параметр не описується в
специфікації OAuth 1.0, але безліччю провайдерів реалізується. Більше
докладно читайте за посиланням
[»ScalableOAuth](http://oauth.pbwiki.com/ScalableOAuth/).

`verifier_token`
Для провайдерів з підтримкою 1.0a параметр `verifier_token` повинен бути
заданий при обміні токена запиту на токен доступу. Якщо `verifier_token`
присутній в `$_GET` або `$_POST`, то він буде заданий автоматично та
зухвалій стороні не потрібно явно його задавати в параметрі
`verifier_token` (звичайно якщо токен доступу обмінюється за допомогою
oauth_callback URL). Докладніше читайте за посиланням
[»ScalableOAuth](http://oauth.pbwiki.com/ScalableOAuth/).

`http_method`
Метод HTTP. Наприклад `GET` або `POST`.

### Значення, що повертаються

Повертає масив із розібраною відповіддю OAuth, або **`false`**.

### Список змін

| Версія | Опис |
|-------------------|----------------------------- -------------------------------------------------- --|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |
| PECL oauth 0.99.9 | Доданий параметр `verifier_token` |

### Приклади

**Приклад #1 Приклад використання **OAuth::getAccessToken()****

` <?phptry {|   $oauth u003d new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET); $oauth->setToken($request_token, $request_token_secret); $access_token_infou003du003d$oauth->getAccessToken("https://example.com/oauth/access_token"); if(!empty($access_token_info)) {         print_r($access_token_info); } else {        print "Не удалося отримати токен доступу, відповідь був: " . $oauth->getLastResponse(); }} catch(OAuthException $E) {   echo "Відповідь: ". $E->lastResponse . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[oauth_token] u003d> some_token
[oauth_token_secret] u003d> some_token_secret
)

### Дивіться також

- [OAuth::getLastResponse()](oauth.getlastresponse.md) - Отримати
остання відповідь
- [OAuth::getLastResponseInfo()](oauth.getlastresponseinfo.md) -
Отримати HTTP-інформацію про останню відповідь
- [OAuth::setToken()](oauth.settoken.md) - Задати токен та його пароль
