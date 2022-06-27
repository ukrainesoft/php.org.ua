- [«EventHttpRequest](class.eventhttprequest.md)
- [EventHttpRequest::cancel »](eventhttprequest.cancel.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Додає заголовок HTTP до заголовків запиту

# EventHttpRequest::addHeader

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::addHeader — Додає заголовок HTTP до заголовків
запиту

### Опис

public **EventHttpRequest::addHeader**( string `$key` , string `$value`
, int `$type` ): bool

Додає заголовок HTTP до заголовків запиту.

### Список параметрів

`key`
Назва заголовка.

`value`
Значення заголовка.

`type`
Одна з констант
[`EventHttpRequest::*_HEADER`](class.eventhttprequest.md#eventhttprequest.constants)
.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventHttpRequest::removeHeader()](eventhttprequest.removeheader.md) -
Видаляє заголовок HTTP із заголовків запиту
