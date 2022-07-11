- [«EventBuffer::prepend](eventbuffer.prepend.md)
- [EventBuffer::pullup »](eventbuffer.pullup.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Переміщує всі дані з вихідного буфера на початок поточного буфера

# EventBuffer::prependBuffer

(PECL event \>u003d 1.2.6-beta)

EventBuffer::prependBuffer — Переміщує всі дані з вихідного буфера
початок поточного буфера

### Опис

public **EventBuffer::prependBuffer**(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

Поводиться як [EventBuffer::addBuffer()](eventbuffer.addbuffer.md) ,
крім того, що він переміщає дані на початок буфера.

### Список параметрів

`buf`
Початковий буфер.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::add()](eventbuffer.add.md) - Додає дані до
кінець буфера подій
- [EventBuffer::addBuffer()](eventbuffer.addbuffer.md) - Переміщує
всі дані з буфера екземпляру EventBuffer
- [EventBuffer::prepend()](eventbuffer.prepend.md) - Записує
дані на початок буфера
