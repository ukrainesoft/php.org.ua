- [«EventHttpRequest::getUri](eventhttprequest.geturi.md)
- [EventHttpRequest::sendError »](eventhttprequest.senderror.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Видаляє заголовок HTTP із заголовків запиту

# EventHttpRequest::removeHeader

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::removeHeader — Видаляє заголовок HTTP із заголовків
запиту

### Опис

public **EventHttpRequest::removeHeader**( string `$key` , string
`$type` ): void

Видаляє заголовок HTTP із заголовків запиту.

### Список параметрів

`key`
Назва заголовка.

`type`
`type` одна із констант `EventHttpRequest::*_HEADER` .

### Значення, що повертаються

Видаляє заголовок HTTP із заголовків запиту.

### Дивіться також

- [EventHttpRequest::addHeader()](eventhttprequest.addheader.md) -
Додає заголовок HTTP до заголовків запиту
