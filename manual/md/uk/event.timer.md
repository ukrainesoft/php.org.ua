- [«Event::signal](event.signal.md)
- [EventBase »](class.eventbase.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Створити об'єкт події таймера

# Event::timer

(PECL event \>u003d 1.2.6-beta)

Event::timer — Створити об'єкт події таймера

### Опис

public static **Event::timer**( [EventBase](class.eventbase.md)
`$base` , [callable](language.types.callable.md) `$cb` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?): [Event](class.event.md)

Створює об'єкт таймера. Це полегшений метод для створення
події сигналу. Зверніть увагу, що штатний конструктор
[Event::\_\_construct()](event.construct.md) також може створювати
таймер події.

### Список параметрів

`base`
Події, до якої необхідно прив'язати подію.

`cb`
Функція зворотного дзвінка події таймера. Дивіться [Функції зворотного
виклику для подій](event.callbacks.md) .

`arg`
Ці дані, пов'язані з подією. Вони будуть передані в
функцію зворотного виклику, коли відбудеться подія.

### Значення, що повертаються

Повертає об'єкт Event. У разі виникнення помилки повертає
**`false`**.
