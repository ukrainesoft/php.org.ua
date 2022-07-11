- [«Event::setPriority](event.setpriority.md)
- [Event::signal »](event.signal.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Переконфігурація події таймера

# Event::setTimer

(PECL event \>u003d 1.2.6-beta)

Event::setTimer — Переконфігурація події таймера

### Опис

public **Event::setTimer**( [EventBase](class.eventbase.md) `$base` ,
[callable](language.types.callable.md) `$cb` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?): bool

Переконфігурує подію таймера. Зверніть увагу, що ця функція не
викликає застарілу функцію `event_set` бібліотеки libevent. Замість
цього вона викликає `event_assign`.

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

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [Event::\_\_construct()](event.construct.md) - Конструктор об'єкта
Event
- [Event::timer()](event.timer.md) - Створити об'єкт події таймера
