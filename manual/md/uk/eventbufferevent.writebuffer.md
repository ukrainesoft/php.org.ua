- [« EventBufferEvent::write](eventbufferevent.write.md)
- [Про callback-функції подійного буфера
»](eventbufferevent.about.callbacks.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Додає вміст всього буфера до буфера виводу буферної події

# EventBufferEvent::writeBuffer

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::writeBuffer — Додає вміст всього буфера в
буфер виведення буферної події

### Опис

public **EventBufferEvent::writeBuffer**(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

Додає вміст буфера в буфер виведення буферної події.

### Список параметрів

`buf`
Вихідний об'єкт [EventBuffer](class.eventbuffer.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBufferEvent::write()](eventbufferevent.write.md) - Додає
дані у буфер виведення буферної події
