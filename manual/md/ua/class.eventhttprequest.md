- [«
EventHttpConnection::setTimeout](eventhttpconnection.settimeout.md)
- [EventHttpRequest::addHeader »](eventhttprequest.addheader.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventHttpRequest

# Клас EventHttpRequest

(PECL event \>u003d 1.4.0-beta)

## Вступ

Надає HTTP-запит.

## Огляд класів

class **EventHttpRequest** {

/\* Константи \*/

const int `CMD_GET` u003d 1;

const int `CMD_POST` u003d 2;

const int `CMD_HEAD` u003d 4;

const int `CMD_PUT` u003d 8;

const int `CMD_DELETE` u003d 16;

const int `CMD_OPTIONS` u003d 32;

const int `CMD_TRACE` u003d 64;

const int `CMD_CONNECT` u003d 128;

const int `CMD_PATCH` u003d 256;

const int `INPUT_HEADER` u003d 1;

const int `OUTPUT_HEADER` u003d 2;

/\* Методи \*/

public [addHeader](eventhttprequest.addheader.md)( string `$key` ,
string `$value` , int `$type` ): bool

public [cancel](eventhttprequest.cancel.md)(): void

public [clearHeaders](eventhttprequest.clearheaders.md)(): void

public [closeConnection](eventhttprequest.closeconnection.md)(): void

public [\_\_construct](eventhttprequest.construct.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** )

public [findHeader](eventhttprequest.findheader.md)( string `$key` ,
string `$type`): void

public [free](eventhttprequest.free.md)(): void

public [closeConnection](eventhttprequest.closeconnection.md)():
[EventBufferEvent](class.eventbufferevent.md)

public [getCommand](eventhttprequest.getcommand.md)(): void

public [closeConnection](eventhttprequest.closeconnection.md)():
[EventHttpConnection](class.eventhttpconnection.md)

public [getHost](eventhttprequest.gethost.md)(): string

public [getInputBuffer](eventhttprequest.getinputbuffer.md)():
[EventBuffer](class.eventbuffer.md)

public [getInputHeaders](eventhttprequest.getinputheaders.md)(): array

public [getOutputBuffer](eventhttprequest.getoutputbuffer.md)():
[EventBuffer](class.eventbuffer.md)

public [getOutputHeaders](eventhttprequest.getoutputheaders.md)():
void

public [getResponseCode](eventhttprequest.getresponsecode.md)(): int

public [getUri](eventhttprequest.geturi.md)(): string

public [removeHeader](eventhttprequest.removeheader.md)( string `$key`
, string `$type` ): void

public [sendError](eventhttprequest.senderror.md)( int `$error` ,
string `$reason` u003d **`null`** ): void

public [sendReply](eventhttprequest.sendreply.md)( int `$code` ,
string `$reason` , [EventBuffer](class.eventbuffer.md) `$buf` u003d ?):
void

public [sendReplyChunk](eventhttprequest.sendreplychunk.md)(
[EventBuffer](class.eventbuffer.md) `$buf`): void

public [sendReplyEnd](eventhttprequest.sendreplyend.md)(): void

public [sendReplyStart](eventhttprequest.sendreplystart.md)( int
`$code`, string `$reason`): void

}

## Зумовлені константи

**`EventHttpRequest::CMD_GET`**
Метод GET (команда)

**`EventHttpRequest::CMD_POST`**
Метод POST (команда)

**`EventHttpRequest::CMD_HEAD`**
Метод HEAD (команда)

**`EventHttpRequest::CMD_PUT`**
Метод PUT (команда)

**`EventHttpRequest::CMD_DELETE`**
Метод DELETE (команда)

**`EventHttpRequest::CMD_OPTIONS`**
Метод OPTIONS (команда)

**`EventHttpRequest::CMD_TRACE`**
Метод TRACE (команда)

**`EventHttpRequest::CMD_CONNECT`**
Метод CONNECT (команда)

**`EventHttpRequest::CMD_PATCH`**
Метод PATCH (команда)

**`EventHttpRequest::INPUT_HEADER`**
Тип вхідного заголовка запиту.

**`EventHttpRequest::OUTPUT_HEADER`**
Тип вихідного заголовка запиту.

## Зміст

- [EventHttpRequest::addHeader](eventhttprequest.addheader.md) -
Додає заголовок HTTP до заголовків запиту
- [EventHttpRequest::cancel](eventhttprequest.cancel.md) — Скасує
чекаючий HTTP-запит
- [EventHttpRequest::clearHeaders](eventhttprequest.clearheaders.md)
— Видаляє всі вихідні заголовки зі списку заголовків запиту
- [EventHttpRequest::closeConnection](eventhttprequest.closeconnection.md)
— Закриває зв'язане з'єднання HTTP
- [EventHttpRequest::\_\_construct](eventhttprequest.construct.md) -
Конструктор об'єкту EventHttpRequest
- [EventHttpRequest::findHeader](eventhttprequest.findheader.md) -
Отримує значення заголовка
- [EventHttpRequest::free](eventhttprequest.free.md) - Звільняє
об'єкт та видаляє пов'язані події
- [EventHttpRequest::getBufferEvent](eventhttprequest.getbufferevent.md)
— Повертає об'єкт EventBufferEvent
- [EventHttpRequest::getCommand](eventhttprequest.getcommand.md) -
Повертає команду запиту (метод)
- [EventHttpRequest::getConnection](eventhttprequest.getconnection.md)
— Повертає об'єкт EventHttpConnection
- [EventHttpRequest::getHost](eventhttprequest.gethost.md) -
Повертає хост запиту
- [EventHttpRequest::getInputBuffer](eventhttprequest.getinputbuffer.md)
- Повертає вхідний буфер
- [EventHttpRequest::getInputHeaders](eventhttprequest.getinputheaders.md)
- Повертає асоціативний масив вхідних заголовків
- [EventHttpRequest::getOutputBuffer](eventhttprequest.getoutputbuffer.md)
— Повертає вихідний буфер запиту
- [EventHttpRequest::getOutputHeaders](eventhttprequest.getoutputheaders.md)
— Повертає асоціативний масив вихідних заголовків
- [EventHttpRequest::getResponseCode](eventhttprequest.getresponsecode.md)
- Повертає код відповіді
- [EventHttpRequest::getUri](eventhttprequest.geturi.md) -
Повертає URI запиту
- [EventHttpRequest::removeHeader](eventhttprequest.removeheader.md)
— Видаляє заголовок HTTP із заголовків запиту
- [EventHttpRequest::sendError](eventhttprequest.senderror.md) -
Надсилає HTML-повідомлення про помилку клієнту
- [EventHttpRequest::sendReply](eventhttprequest.sendreply.md) -
Відправляє HTML-відповідь клієнту
- [EventHttpRequest::sendReplyChunk](eventhttprequest.sendreplychunk.md)
— Відправляє блок даних як частину поточного фрагментованого
відповіді
- [EventHttpRequest::sendReplyEnd](eventhttprequest.sendreplyend.md)
— Заповнює фрагментарну відповідь, звільняючи запит відповідним
чином
- [EventHttpRequest::sendReplyStart](eventhttprequest.sendreplystart.md)
— Ініціює фрагментарну відповідь
