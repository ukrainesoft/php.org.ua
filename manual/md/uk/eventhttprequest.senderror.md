- [«
EventHttpRequest::removeHeader](eventhttprequest.removeheader.md)
- [EventHttpRequest::sendReply »](eventhttprequest.sendreply.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Надсилає HTML-повідомлення про помилку клієнту

# EventHttpRequest::sendError

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::sendError — Надсилає HTML-повідомлення про помилку
клієнту

### Опис

public **EventHttpRequest::sendError**( int `$error` , string `$reason`
u003d **`null`** ): void

Надсилає HTML-повідомлення про помилку клієнта.

### Список параметрів

`error`
HTTP код помилки.

`reason`
Короткий опис помилки. Якщо **`null`**, буде використовуватись
стандартне значення коду помилки.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **EventHttpRequest::sendError()****

` <?phpfunction _http_400($req) {   $req->sendError(400);}$base u003d new EventBase();$http u003d neu EventHttp($base);$http->setCallback("/er _http_400");$http->bind("0.0.0.0", 8010);$base->loop();?> `

### Дивіться також

- [EventHttpRequest::sendReply()](eventhttprequest.sendreply.md) -
Відправляє HTML-відповідь клієнту
