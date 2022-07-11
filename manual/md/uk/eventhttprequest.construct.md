- [«
EventHttpRequest::closeConnection](eventhttprequest.closeconnection.md)
- [EventHttpRequest::findHeader »](eventhttprequest.findheader.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Конструктор об'єкту EventHttpRequest

# EventHttpRequest::\_\_construct

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::\_\_construct — Конструктор об'єкта EventHttpRequest

### Опис

public **EventHttpRequest::\_\_construct**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** )

Конструктор об'єкта EventHttpRequest.

### Список параметрів

`callback`
Викликається за запитом шляху. Повинен відповідати наступному
прототипу:

**callback**( [EventHttpRequest](class.eventhttprequest.md) `$req` u003d
**`null`** ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

`data`
Користувальницькі дані, що передаються в callback-функцію.

### Значення, що повертаються

Повертає об'єкт EventHttpRequest.

### Приклади

**Приклад #1 Приклад **EventHttpRequest::\_\_construct()****

` <?phpfunction _request_handler($req, $base) {   echo __FUNCTION__, PHP_EOL; if (is_null($req)) {        echo "Час вийшло
";  |                                             
";         } elseif ($response_code !u003d 200) {             echo "Несподівана відповідь: $response_code
";        } else {            echo "Успішно: $response_code
";             $buf u003d $req->getInputBuffer();            echo "Тіло відповіді:
";            while ($s u003d $buf->readLine(EventBuffer::EOL_ANY)) {                echo $s, PHP_EOL;            }        }    }    $base->exit(NULL);}$address u003d "127.0.0.1";$port u003d 80;$base u003d new EventBase();$conn u003d new EventHttpConnection($base, NULL, $address, $port);$conn->setTimeout(5);$req u003d new EventHttpRequest("_ );$req->addHeader("Host", $address, EventHttpRequest::OUTPUT_HEADER);$req->addHeader("Content-Length", "0", EventHttpRequest::OUTPUT_HEADER);$conn->ma req, EventHttpRequest::CMD_GET, "/index.cphp");$base->loop();?> `

### Дивіться також

- [EventHttpRequest::cancel()](eventhttprequest.cancel.md) -
Скасує очікування HTTP-запиту
- [EventHttpRequest::addHeader()](eventhttprequest.addheader.md) -
Додає заголовок HTTP до заголовків запиту
