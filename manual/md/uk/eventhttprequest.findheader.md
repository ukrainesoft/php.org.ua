- [«EventHttpRequest::\_\_construct](eventhttprequest.construct.md)
- [EventHttpRequest::free »](eventhttprequest.free.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Отримує значення заголовка

# EventHttpRequest::findHeader

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::findHeader — Отримує значення заголовка

### Опис

public **EventHttpRequest::findHeader**( string `$key` , string `$type`
): void

Отримує значення заголовка

### Список параметрів

`key`
Назва заголовка.

`type`
Одна з констант
[`EventHttpRequest::*_HEADER`](class.eventhttprequest.md#eventhttprequest.constants)
.

### Значення, що повертаються

Повертає **`null`**, якщо заголовок не знайдено.

### Дивіться також

- [EventHttpRequest::addHeader()](eventhttprequest.addheader.md) -
Додає заголовок HTTP до заголовків запиту
