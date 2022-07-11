- [«EventHttp::setAllowedMethods](eventhttp.setallowedmethods.md)
- [EventHttp::setDefaultCallback »](eventhttp.setdefaultcallback.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Встановлює callback-функцію для зазначеного URI

# EventHttp::setCallback

(PECL event \>u003d 1.4.0-beta)

EventHttp::setCallback — Встановлює callback-функцію для зазначеного
URI

### Опис

public **EventHttp::setCallback**( string `$path` , string `$cb` ,
string `$arg` u003d ?): void

Встановлює функцію callback для зазначеного URI.

### Список параметрів

`path`
Шлях для виклику callback-функції.

`cb`
Callback-функція [callable](language.types.callable.md), яка
викликається за запитаним `path`. Повинна відповідати наступному
прототипу:

**callback**( [EventHttpRequest](class.eventhttprequest.md) `$req` u003d
NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d NULL ): void

`req`
Об'єкт [EventHttpRequest](class.eventhttprequest.md).

`arg`
Дані користувача.

`arg`
Дані користувача.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **EventHttp::setCallback()****

`<?php/* * Простий HTTP-сервер. * * Чтобы проверить: * 1) Запустите его на выбранном вами порту, например: * $ php examples/http.php 8010 * 2) В другом терминале подключитесь к какому-либо адресу на этом порту * и сделайте запрос GET или POST (другие тут відключені), наприклад: * $ nc -t 127.0.0.1 8010 * POST /about HTTP/1.0 * Content-Type: text/plain * Content-Length: *    au003d12 * HTTP/1.0 200 OK * Content-Type:text/html; charsetu003dISO-8859-1 * Connection: close * * 3)Погляньте,що сервер виводить в попередньому вікнітермінала. */function _http_dump($req, $data) {   static $counter      u003d 0; static $max_requests u003d 2; if (++$counter >u003d $max_requests)  {        echo "Лічильник досяг максимальних запитів $max_requests. Виходимо
";        exit();   }}    echo __METHOD__, "called
";   echo "запит:"; var_dump($req);    echo "дані:"; var_dump($data);   echo "
u003du003du003du003du003d DUMP u003du003du003du003du003d
";   echo "команда:", $req->getCommand(), PHP_EOL;   echo "URI:", $req->getUri(), PHP_EOL;    echo "Заголовки| );   echo "Вихідні заголовки:"; var_dump($req->getOutputHeaders());   echo "
>> Відправка відповіді ...";    $req->sendReply(200, "OK");   echo "OK
";    echo "
>> Читання вхідного буфера ...
";|                               
";}function _http_about($req) {    echo __METHOD__, PHP_EOL;   echo "URI: ", $req->getUri(), PHP_EOL;   ech
>> Відправка відповіді ...";    $req->sendReply(200, "OK");   echo "OK
";}function _http_default($req, $data) {   echo __METHOD__, PHP_EOL;    echo "URI: ", $req->getUri(), PHP_EOL;    
>> Відправка відповіді ...";    $req->sendReply(200, "OK");   echo "OK
";}$port u003d 8010;if ($argc > 1) {    $port u003d (int) $argv[1];}if ($port <u003d 0 || $port > 65535)   );}$base u003d new EventBase();$http u003d new EventHttp($base);$http->setAllowedMethods(EventHttpRequest::CMD_GET | EventHttpRequest::CMD_POST);$http->setCallback("" _http_dump", array(4, 8));$http->setCallback("/about", "_http_about");$http->setDefaultCallback("_http_default", "користувацькі дані");$http->bind(" 0.0.0.0", 8010);$base->loop();?> `

Результатом виконання цього прикладу буде щось подібне:

au003d12
HTTP/1.0 200 OK
Content-Type: text/html; charsetu003dISO-8859-1
Connection: close

### Дивіться також

- [EventHttp::setDefaultCallback()](eventhttp.setdefaultcallback.md) -
Встановлює callback-функцію за замовчуванням для обробки запитів,
які не перехоплюються конкретними callback-функціями
