- [«EventBufferEvent::disable](eventbufferevent.disable.md)
- [EventBufferEvent::free »](eventbufferevent.free.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Включає читання, запис або те й інше в події буфера

# EventBufferEvent::enable

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::enable — Включає читання, запис або і те, й інше
події буфера

### Опис

public **EventBufferEvent::enable**( int `$events` ): bool

Включає події **`Event::READ`**, **`Event::WRITE`**, або
**`Event::READ`** `|` **`Event::WRITE`** у події буфера.

### Список параметрів

`events`
**`Event::READ`**, **`Event::WRITE`**, або **`Event::READ`** `|`
**`Event::WRITE`** у події буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBufferEvent::disable()](eventbufferevent.disable.md) -
Відключає читання, запис або те й інше у події буфера
