- [«EventHttp](class.eventhttp.md)
- [EventHttp::addServerAlias »](eventhttp.addserveralias.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Примушує HTTP-сервер приймати з'єднання із зазначеним потоком
сокету чи ресурсом

# EventHttp::accept

(PECL event \>u003d 1.2.6-beta)

EventHttp::accept — Примушує HTTP-сервер приймати з'єднання з
зазначеним потоком сокету чи ресурсом

### Опис

public **EventHttp::accept**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` ): bool

Примушує HTTP-сервер приймати з'єднання із зазначеним потоком сокету
чи ресурсом. Сокет повинен бути готовим до прийому з'єднань.

Може викликатися кілька разів, щоб приймати з'єднання на різних
сокетів.

> **Примітка**:
>
> Щоб зв'язати сокет, `прослухати` та `прийняти` з'єднання на сокеті в
> один виклик, використовуйте [EventHttp::bind()](eventhttp.bind.md).
> **EventHttp::accept()** потрібен лише в тому випадку, якщо в одного
> виклику вже є сокет, готовий до прийняття з'єднань.

### Список параметрів

`socket`
Ресурс сокету, потоковий або числовий дескриптор файлу
сокет, готовий приймати з'єднання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **EventHttp::accept()****

`<?php$base u003d new EventBase();$http u003d new EventHttp($base);$addresses u003d array (     8091 u003d> "127.0.0.1", u003d8                       | 0;$socket u003d array();foreach ($addresses as $port u003d> $ip) {   echo $ip, " ", $port, PHP_EOL; $socket[$i] u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP); if (!socket_bind($socket[$i], $ip, $port)) {        exit("помилка socket_bind
");   }                                                                 
";   exit(1);   }    ++$i;}$http->setCallback("/some-page", function() { echo "(some-page)
";   echo "URI: ", $req->getUri(), PHP_EOL;   $req->sendReply(200, "OK");    echo "OK
";});$http->setDefaultCallback(function($req) {   echo "URI: ", $req->getUri(), PHP_EOL;    $req->sendReply(200, oOK))|
";});$signal u003d Event::signal($base, SIGINT, function () use ($base) {    echo "Пійман SIGINT. Зупиняємо...
";    $base->stop();});$signal->add();$base->dispatch();echo "кінець
";// Ми не закривали сокети, так як Libevent// вже встановив прапори CLOSE_ON_FREE і CLOSE_ON_EXEC// в дескрипторе файлу, зв'язаному >»

Результатом виконання цього прикладу буде щось подібне:

Client:
$ nc 127.0.0.1 8091
GET /about HTTP/1.0
Connection: close

HTTP/1.0 200 OK
Content-Type: text/html; charsetu003dISO-8859-1
Connection: close

Server:
127.0.0.1 8091
127.0.0.2 8092
URI: /about
OK

### Дивіться також

- [EventHttp::bind()](eventhttp.bind.md) - Прив'язує HTTP-сервер до
вказаною адресою та портом
