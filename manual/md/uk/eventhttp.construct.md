- [«EventHttp::bind](eventhttp.bind.md)
- [EventHttp::removeServerAlias »](eventhttp.removeserveralias.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Створює об'єкт EventHttp (HTTP-сервер)

# EventHttp::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventHttp::\_\_construct — Створює об'єкт EventHttp (HTTP-сервер)

### Опис

public **EventHttp::\_\_construct**( [EventBase](class.eventbase.md)
`$base` , [EventSslContext](class.eventsslcontext.md) `$ctx` u003d
**`null`** )

Створює об'єкт сервера HTTP.

### Список параметрів

`base`
Пов'язана основа подій.

`ctx`
Об'єкт класу [EventSslContext](class.eventsslcontext.md). Перетворює
простий HTTP-сервер у HTTPS-сервері. Це означає, що якщо `ctx` налаштований
правильно, основні події буфера будуть засновані на сокетах OpenSSL.
Таким чином, весь трафік проходитиме через SSL або TLS.

> **Примітка**:
>
> Цей параметр доступний, тільки якщо `Event` скомпільовано за допомогою
> OpenSSL і тільки з `Libevent 2.1.0-alpha` та вище.

### Значення, що повертаються

Повертає об'єкт [EventHttp](class.eventhttp.md).

### Список змін

| Версія | Опис |
|------------------|------------------------------ --------|
| PECL event 1.9.0 | Додано підтримку OpenSSL (`ctx`). |

### Приклади

**Приклад #1 Простий HTTP-сервер**

`<?php/* * Простий HTTP-сервер. * * Чтобы проверить: * 1) Запустите его на выбранном вами порту, например: * $ php examples/http.php 8010 * 2) В другом терминале подключитесь к какому-либо адресу на этом порту * и сделайте запрос GET или POST (другие тут відключені), наприклад: * $ nc -t 127.0.0.1 8010 * POST /about HTTP/1.0 * Content-Type: text/plain * Content-Length: *       * au003d12 * HTTP/1.0 200 OK * Content-Type:text/html; charsetu003dISO-8859-1 * Connection: close * * $ nc -t 127.0.0.1 8010 * GET/dump HTTP/1.0 * Content-Type: text/plain   press Enter) * * Буде виведено: * HTTP/1.0 200 OK * Content-Type: text/html; charsetu003dISO-8859-1 * Connection: close * (press Enter) * * $ nc -t 127.0.0.1 8010 * GET /unknown HTTP/1.0 <          -Type: text/html; charsetu003dISO-8859-1 * Connection: close * * 3)Погляньте,що сервер виводить в попередньому вікнітермінала. */function _http_dump($req, $data) {   static $counter      u003d 0; static $max_requests u003d 2; if (++$counter >u003d $max_requests)  {        echo "Лічильник досяг максимальних запитів $max_requests. Виходимо
";        exit();   }}    echo __METHOD__, "called
";   echo "запит:"; var_dump($req);    echo "дані:"; var_dump($data);   echo "
u003du003du003du003du003d DUMP u003du003du003du003du003d
";   echo "Команда:", $req->getCommand(), PHP_EOL;   echo "URI:", $req->getUri(), PHP_EOL;    echo "Заголовки| );   echo "Вихідні заголовки:"; var_dump($req->getOutputHeaders());   echo "
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

HTTP/1.0 200 OK
Content-Type: text/html; charsetu003dISO-8859-1
Connection: close
(press Enter)

HTTP/1.0 200 OK
Content-Type: text/html; charsetu003dISO-8859-1
Connection: close
