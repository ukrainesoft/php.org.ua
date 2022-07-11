- [«EventHttp::addServerAlias](eventhttp.addserveralias.md)
- [EventHttp::\_\_construct »](eventhttp.construct.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Прив'язує HTTP-сервер до вказаної адреси та порту

# EventHttp::bind

(PECL event \>u003d 1.2.6-beta)

EventHttp::bind — Прив'язує HTTP-сервер до вказаної адреси та порту

### Опис

public **EventHttp::bind**( string `$address` , int `$port` ): void

Прив'язує HTTP-сервер до вказаної адреси та порту.

Може викликатися кілька разів для прив'язки того самого
HTTP-сервера до кількох різних портів.

### Список параметрів

`address`
Рядок, що містить IP-адресу для `прослуховування(2)`.

`port`
Номер порту для прослуховування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **EventHttp::bind()****

` <?php$base u003d new EventBase();$http u003d neu EventHttp($base);$socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if (!$http->bind("128.8)" )) {   exit("зв'язати(1) не вдалося"
");};if (!$http->bind("127.0.0.1", 8089)) {    exit("зв'язати(2) не удалося
");};$http->setCallback("/about", function($req) {    echo "URI: ", $req->getUri(), PHP_EOL;    $req->sendReply(200, ;   echo "OK
";});$base->dispatch();?> `

Результатом виконання цього прикладу буде щось подібне:

Client:

$ nc 127.0.0.1 8088
GET /about HTTP/1.0
Connection: close

HTTP/1.0 200 OK
Content-Type: text/html; charsetu003dISO-8859-1
Connection: close

$ nc 127.0.0.1 8089
GET /unknown HTTP/1.0
Connection: close

HTTP/1.1 404 Not Found
Content-Type: text/html
Date: Wed, 13 Mar 2013 04:14:41 GMT
Content-Length: 149
Connection: close

<html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL /unknown was not found on this server.</p> ></body></html>

Server:
URI: /about
OK

### Дивіться також

- [EventHttp::accept()](eventhttp.accept.md) - Примушує
HTTP-сервер приймати з'єднання із зазначеним потоком сокету або
ресурсом
