- [«EventHttpRequest::sendError](eventhttprequest.senderror.md)
- [EventHttpRequest::sendReplyChunk
»](eventhttprequest.sendreplychunk.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Відправляє HTML-відповідь клієнту

# EventHttpRequest::sendReply

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::sendReply — Відправляє HTML-відповідь клієнту

### Опис

public **EventHttpRequest::sendReply**( int `$code` , string `$reason` ,
[EventBuffer](class.eventbuffer.md) `$buf` u003d ?): void

Відправляє HTML0відповідь клієнту. Тіло відповіді складається з даних у
необов'язковому параметрі `buf`.

### Список параметрів

`code`
Код відповіді HTTP для надсилання.

`reason`
Коротке повідомлення, щоб надіслати код відповіді.

`buf`
Тіло відповіді.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EventHttpRequest::sendError()](eventhttprequest.senderror.md) -
Надсилає HTML-повідомлення про помилку клієнту
- [EventHttpRequest::sendReplyChunk()](eventhttprequest.sendreplychunk.md) -
Відправляє блок даних як частину поточної фрагментованої відповіді
