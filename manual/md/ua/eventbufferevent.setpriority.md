- [«
EventBufferEvent::setCallbacks](eventbufferevent.setcallbacks.md)
- [EventBufferEvent::setTimeouts »](eventbufferevent.settimeouts.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Надає пріоритет bufferevent

# EventBufferEvent::setPriority

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::setPriority — Надає пріоритет bufferevent

### Опис

public **EventBufferEvent::setPriority**( int `$priority` ): bool

Надає пріоритет bufferevent

**Увага**

Підтримується лише для подій буфера сокету

### Список параметрів

`priority`
Значення пріоритету.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
