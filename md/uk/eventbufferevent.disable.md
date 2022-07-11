- [«EventBufferEvent::createPair](eventbufferevent.createpair.md)
- [EventBufferEvent::enable »](eventbufferevent.enable.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Вимикає читання, запис або те, й інше у події буфера

# EventBufferEvent::disable

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::disable — Вимикає читання, запис або те й інше
у події буфера

### Опис

public **EventBufferEvent::disable**( int `$events` ): bool

Відключає події **`Event::READ`**, **`Event::WRITE`**, або
**`Event::READ`** `|` **`Event::WRITE`** у події буфера.

### Список параметрів

`events`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBufferEvent::enable()](eventbufferevent.enable.md) -
Включає читання, запис або те й інше в події буфера
