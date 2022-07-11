- [«EventBuffer::lock](eventbuffer.lock.md)
- [EventBuffer::prependBuffer »](eventbuffer.prependbuffer.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Записує дані на початок буфера

# EventBuffer::prepend

(PECL event \>u003d 1.2.6-beta)

EventBuffer::prepend — Записує дані на початок буфера

### Опис

public **EventBuffer::prepend**( string `$data` ): bool

Записує дані на початок буфера.

### Список параметрів

`data`
Рядок, який буде додано на початок буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::prependBuffer()](eventbuffer.prependbuffer.md) -
Переміщує всі дані з вихідного буфера на початок поточного буфера
- [EventBuffer::add()](eventbuffer.add.md) - Додає дані до
кінець буфера подій
- [EventBuffer::addBuffer()](eventbuffer.addbuffer.md) - Переміщує
всі дані з буфера екземпляру EventBuffer
