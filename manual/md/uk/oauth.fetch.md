- [« OAuth::enableSSLChecks](oauth.enablesslchecks.md)
- [OAuth::generateSignature »](oauth.generatesignature.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Витягти захищений ресурс OAuth

# OAuth::fetch

(PECL OAuth u003d 0.99.1)

OAuth::fetch — Витягти захищений ресурс OAuth

### Опис

public **OAuth::fetch**(
string `$protected_resource_url`,
array `$extra_parameters` u003d ?,
string `$http_method` u003d ?,
array `$http_headers` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Витягти ресурс.

### Список параметрів

`protected_resource_url`
URL захищеного ресурсу OAuth.

`extra_parameters`
Додаткові опції запиту ресурсу.

`http_method`
Один із методів **`OAUTH_HTTP_METHOD_*`**. Дивіться [константи
OAUTH](oauth.constants.md), які включають GET, POST, PUT, HEAD та
DELETE.

HEAD (**`OAUTH_HTTP_METHOD_HEAD`**) може бути корисним для вивчення
інформації перед виконанням запиту (якщо облікові дані OAuth в
заголовку `Authorization`).

`http_headers`
Клієнтські заголовки HTTP (такі як User-Agent, Accept тощо)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------------|----------------------------- -------------------------------------------------- --|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |
| PECL oauth 0.99.5 | Доданий параметр `http_method` |
| PECL oauth 0.99.8 | Доданий параметр `http_headers` |

### Приклади

**Приклад #1 Приклад використання **OAuth::fetch()****

` <?phptry {|   $oauth u003d new OAuth("consumer_key","consumer_secret",OAUTH_SIG_METHOD_HMACSHA1,OAUTH_AUTH_TYPE_AUTHORIZATION); $oauth->setToken("access_token","access_token_secret"); $oauth->fetch("http://photos.example.net/photo?fileu003dvacation.jpg"); $response_infou003du003d$oauth->getLastResponseInfo(); header("Content-Type: {$response_info["content_type"]}"); echo $oauth->getLastResponse();} catch(OAuthException $E) {   echo "Впіймали виняток!
";   echo "Відповідь: ". $E->lastResponse . "
";}?> `

### Дивіться також

- [OAuth::getLastResponse()](oauth.getlastresponse.md) - Отримати
остання відповідь
- [OAuth::getLastResponseInfo()](oauth.getlastresponseinfo.md) -
Отримати HTTP-інформацію про останню відповідь
- [OAuth::setToken()](oauth.settoken.md) - Задати токен та його пароль
