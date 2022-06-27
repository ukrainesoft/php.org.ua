- [«
EventHttpRequest::sendReplyEnd](eventhttprequest.sendreplyend.md)
- [EventListener »](class.eventlistener.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Ініціює фрагментарну відповідь

# EventHttpRequest::sendReplyStart

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::sendReplyStart — Ініціює фрагментарну відповідь

### Опис

public **EventHttpRequest::sendReplyStart**( int `$code` , string
`$reason` ): void

Ініціює відповідь, яку використовує `Transfer-Encoding` `chunked`.

Це дозволяє стороні передавати відповідь назад клієнту. Це
буде корисно, коли не всі дані відповіді доступні відразу, або при
надсилання дуже великих відповідей.

Викликаюча сторона повинна надати фрагменти даних за допомогою
[EventHttpRequest::sendReplyChunk()](eventhttprequest.sendreplychunk.md)
і завершити відповідь, викликавши
[EventHttpRequest::sendReplyEnd()](eventhttprequest.sendreplyend.md).

### Список параметрів

`code`
Код відповіді HTTP для надсилання.

`reason`
Коротке повідомлення, щоб надіслати код відповіді.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EventHttpRequest::sendReplyChunk()](eventhttprequest.sendreplychunk.md) -
Відправляє блок даних як частину поточної фрагментованої відповіді
- [EventHttpRequest::sendReplyEnd()](eventhttprequest.sendreplyend.md) -
Заповнює фрагментарну відповідь, звільняючи запит відповідним
чином
