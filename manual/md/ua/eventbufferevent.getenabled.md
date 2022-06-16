- [«
EventBufferEvent::getDnsErrorString](eventbufferevent.getdnserrorstring.md)
- [EventBufferEvent::getInput »](eventbufferevent.getinput.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає бітову маску подій, які зараз
активовані для буферної події

# EventBufferEvent::getEnabled

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::getEnabled — Повертає бітову маску подій, які
на даний момент активовано для буферної події

### Опис

public **EventBufferEvent::getEnabled**(): int

Повертає бітову маску подій, які на даний момент активовані
для буферної події

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ціле число, що представляє бітову маску подій, які в
На даний момент активовані для буферної події.

### Дивіться також

- [EventBufferEvent::enable()](eventbufferevent.enable.md) -
Включає читання, запис або те й інше в події буфера
- [EventBufferEvent::disable()](eventbufferevent.disable.md) -
Відключає читання, запис або те й інше у події буфера
