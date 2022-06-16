- [«EventBufferEvent::\_\_construct](eventbufferevent.construct.md)
- [EventBufferEvent::disable »](eventbufferevent.disable.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Створює дві буферні події, пов'язані один з одним

# EventBufferEvent::createPair

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::createPair — Створює дві буферні події, пов'язані
один з одним

### Опис

public static **EventBufferEvent::createPair**(
[EventBase](class.eventbase.md) `$base` , int `$options` u003d 0 : array

Повертає масив із двох об'єктів
[EventBufferEvent](class.eventbufferevent.md), пов'язаних один з
другом. Підтримуються всі звичайні параметри, крім
**`EventBufferEvent::OPT_CLOSE_ON_FREE`**, який не діє, та
**`EventBufferEvent::OPT_DEFER_CALLBACKS`**, який завжди включений.

### Список параметрів

`base`
Пов'язана основа подій.

`options`
[Константи EventBufferEvent::OPT\_\*]() у поєднанні з побітовим АБО
(`OR`).

### Значення, що повертаються

Повертає масив із двох об'єктів
[EventBufferEvent](class.eventbufferevent.md), пов'язаних один з
другом.

### Список змін

| Версія | Опис |
|------------------|-------------------------|
| PECL event 1.9.0 | Метод став статичним. |
