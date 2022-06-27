- [« EventBufferEvent::sslSocket](eventbufferevent.sslsocket.md)
- [EventBufferEvent::writeBuffer »](eventbufferevent.writebuffer.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Додає дані до буфера виводу буферної події

# EventBufferEvent::write

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::write — Додає дані до буфера виводу буферного
події

### Опис

public **EventBufferEvent::write**( string `$data` ): bool

Додає `data` у буфер виводу буферної події

### Список параметрів

`data`
Дані для додавання до базового буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBufferEvent::writeBuffer()](eventbufferevent.writebuffer.md) -
Додає вміст буфера в буфер виводу буферної події
