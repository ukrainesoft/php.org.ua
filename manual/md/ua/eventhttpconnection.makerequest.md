- [«EventHttpConnection::getPeer](eventhttpconnection.getpeer.md)
- [EventHttpConnection::setCloseCallback
»](eventhttpconnection.setclosecallback.md)

- [PHP Manual](index.md)
- [EventHttpConnection](class.eventhttpconnection.md)
- Робить HTTP-запит із зазначеного з'єднання

# EventHttpConnection::makeRequest

(PECL event \>u003d 1.4.0-beta)

EventHttpConnection::makeRequest — Робить HTTP-запит по вказаному
з'єднанню

### Опис

public **EventHttpConnection::makeRequest**(
[EventHttpRequest](class.eventhttprequest.md) `$req` , int `$type` ,
string `$uri`): bool

Робить HTTP-запит із зазначеного з'єднання. `type` одна з констант
`EventHttpRequest::CMD_*` .

### Список параметрів

`req`
Об'єкт підключення, через який надсилається запит.

`type`
одна з констант
[`EventHttpRequest::CMD_*`](class.eventhttprequest.md#eventhttprequest.constants)
.

`uri`
URI, пов'язаний із запитом.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**EventHttpConnection::makeRequest()****

` <?phpfunction _request_handler($req, $base) {   echo __FUNCTION__, PHP_EOL; if (is_null($req)) {        echo "Час вийшло
";  |                                             
";         } elseif ($response_code !u003d 200) {             echo "Несподівана відповідь: $response_code
";        } else {            echo "Успішно: $response_code
";             $buf u003d $req->getInputBuffer();            echo "Тіло відповіді:
";            while ($s u003d $buf->readLine(EventBuffer::EOL_ANY)) {                echo $s, PHP_EOL;            }        }    }    $base->exit(NULL);}$address u003d "127.0.0.1";$port u003d 80;$base u003d new EventBase();$conn u003d new EventHttpConnection($base, NULL, $address, $port);$conn->setTimeout(5);$req u003d new EventHttpRequest("_ );$req->addHeader("Host", $address, EventHttpRequest::OUTPUT_HEADER);$req->addHeader("Content-Length", "0", EventHttpRequest::OUTPUT_HEADER);$conn->ma req, EventHttpRequest::CMD_GET, "/index.cphp");$base->loop();?> `

Результатом виконання цього прикладу буде щось подібне:

_request_handler
Success: 200
Body:
PHP, date:
2013-03-13T20:27:52+05:00

### Дивіться також

- [EventHttpRequest::addHeader()](eventhttprequest.addheader.md) -
Додає заголовок HTTP до заголовків запиту
