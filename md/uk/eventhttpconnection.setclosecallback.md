- [«
EventHttpConnection::makeRequest](eventhttpconnection.makerequest.md)
- [EventHttpConnection::setLocalAddress
»](eventhttpconnection.setlocaladdress.md)

- [PHP Manual](index.md)
- [EventHttpConnection](class.eventhttpconnection.md)
- Встановлює callback-функцію при закритті з'єднання

# EventHttpConnection::setCloseCallback

(PECL event \>u003d 1.8.0)

EventHttpConnection::setCloseCallback — Встановлює callback-функцію
при закритті з'єднання

### Опис

public **EventHttpConnection::setCloseCallback**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?): void

Встановлює функцію callback при закритті з'єднання.

### Список параметрів

`callback`
Встановлює callback-функцію при закритті з'єднання, що має
відповідати прототипу:

**callback**( [EventHttpConnection](class.eventhttpconnection.md)
`$conn` u003d **`null`** ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**EventHttpConnection::setCloseCallback()****

`` <?php/* * Встановлюємо callback-функцію, при закритті з'єднання * * Скрипт обробляє закриті з'єднання, використовуючи HTTP API. * * Використання: * 1) Запустіть сервер: * $ php examples/http_closecb.php 4242 * * 2) Запустіть клієнта в другому терміналі. Наподобие Telnet * Сессия должна выглядеть следующим образом: * * $ nc -t 127.0.0.1 4242 * GET / HTTP/1.0 * Connection: close * * Сервер выведет что-то похожее на следующее: * * HTTP/1.0 200 OK * Content- Type: multipart/x-mixed-replace;boundaryu003dboundarydonotcross * Connection: close * * <html> * * 3) Завершіть з'єднання з клієнтом завершіть,про * | викликається або _close_callback. * Скрипт повинен вивести рядок "_close_callback" стандартним висновком. * * 5) Перевірте, не має або процесс сервера втрачених з'єднань, * наприклад з утилітою `lsof`. */function _close_callback($conn){    echo __FUNCTION__, PHP_EOL;}function _http_default($req, $dummy){    $conn u003d $req->getConnection(); $conn->setCloseCallback('_close_callback', NULL); /*    Включивши Event::READ, ми захищаємо сервер від незакритих з'єднань. Це особливість Libevent. Бібліотека відключає події Event::READ для поточного з'єднання і сервер не повідомляється про розірвані з'єднання. Таким чином, кожного разу, коли клієнт перериває з'єднання, ми отримуємо втрачене з'єднання. Наприклад, наступне є частиною `lsof -p $PID | grep TCP` после того,    как клиент разорвал соединение:    57-php     15057 ruslan  6u  unix 0xffff8802fb59c780   0t0  125187 socket    58:php     15057 ruslan  7u  IPv4             125189   0t0     TCP *:4242 (LISTEN)    59:php     15057 ruslan  8u  IPv4             124342   0t0     TCP localhost: 4242->localhost:37375 (CLOSE_WAIT)   де $PID – наш ID процесу. Наступний блок кода виправляє такі втрачені з'єднання. */   $bev u003d $req->getBufferEvent(); $bev->enable(Event::READ); // Ми маємо явно це звільнити. Дивіться ``

[EventHttpRequest::getConnection()](eventhttprequest.getconnection.md)

$bev->free(); // звільняємо   $req->addHeader(        'Content-Type',        'multipart/x-mixed-replace;boundaryu003dboundarydonotcross'   $bufu003du003dnew EventBuffer(); $buf->add('<html>'); $req->sendReply(200, "OK"); $req->sendReplyChunk($buf);}$port u003d 4242;if ($argc > 1) {    $port u003d (int) $argv[1];}if ($port <u003d 0 |||| ) {   exit("Invalid port");}$baseu003du003dnew EventBase();$http u003d new EventHttp($base);$http->setDefaultCallback("_http_default", NULL);$http->d .0.0", $port);$base->loop();?>`
