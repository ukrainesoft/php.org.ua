- [« EventBufferEvent::readBuffer](eventbufferevent.readbuffer.md)
- [EventBufferEvent::setPriority »](eventbufferevent.setpriority.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Призначає callback-функції для читання, запису та події (стану)

# EventBufferEvent::setCallbacks

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::setCallbacks — Призначає callback-функції для читання,
записи та події (стану)

### Опис

public **EventBufferEvent::setCallbacks**(
[callable](language.types.callable.md) `$readcb` ,
[callable](language.types.callable.md) `$writecb` ,
[callable](language.types.callable.md) `$eventcb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?
): void

Призначає callback-функції для читання, запису та події (стану).

### Список параметрів

`readcb`
Callback-функція читання. Дивіться докладніше [Про callback-функції
буферів](eventbufferevent.about.callbacks.md) .

`writecb`
Callback-функція запису. Дивіться докладніше [Про callback-функції
буферів](eventbufferevent.about.callbacks.md) .

`eventcb`
Callback – функція події зміни статусу. Дивіться докладніше [Про
callback-функціях буферів](eventbufferevent.about.callbacks.md) .

`arg`
Змінна, яка буде передана всім callback-функціям.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EventBufferEvent::\_\_construct()](eventbufferevent.construct.md) -
Створює об'єкт EventBufferEvent
