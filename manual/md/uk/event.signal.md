- [«Event::setTimer](event.settimer.md)
- [Event::timer »](event.timer.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Створити об'єкт події сигналу

# Event::signal

(PECL event \>u003d 1.2.6-beta)

Event::signal — Створити об'єкт події сигналу

### Опис

public static **Event::signal**(
[EventBase](class.eventbase.md) `$base` ,
int `$signum` ,
[callable](language.types.callable.md) `$cb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?
): [Event](class.event.md)

Створює об'єкт сигналу. Це полегшений метод для створення
події сигналу. Зверніть увагу, що штатний конструктор
[Event::\_\_construct()](event.construct.md) також може створювати
події сигналу.

### Список параметрів

`base`
Події, до якої необхідно прив'язати подію.

`signum`
Номер сигналу.

`cb`
Функція зворотного дзвінка події сигналу. Дивіться [Функції зворотного
виклику для подій](event.callbacks.md) .

`arg`
Ці дані, пов'язані з подією. Вони будуть передані в
функцію зворотного виклику, коли відбудеться подія.

### Значення, що повертаються

Повертає об'єкт Event. У разі виникнення помилки повертає
**`false`**.

### Дивіться також

- [Створення подій сигналу](event.constructing.signal.events.md)
