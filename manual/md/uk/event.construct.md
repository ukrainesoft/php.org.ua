- [«Event::addTimer](event.addtimer.md)
- [Event::del »](event.del.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Конструктор об'єкту Event

# Event::\_\_construct

(PECL event \>u003d 1.2.6-beta)

Event::\_\_construct - Конструктор об'єкта Event

### Опис

public **Event::\_\_construct**(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$what` ,
[callable](language.types.callable.md) `$cb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
$arg u003d NULL
)

Створює об'єкт Event.

### Список параметрів

`base`
Події, до якої необхідно прив'язати подію.

`fd`
Ресурс потоку, сокету чи числовий дескриптор файлу. Для подій таймера
вкажіть **`-1`**. Для події сигналу задайте його номер, наприклад
**`SIGHUP`**.

`what`
Дивіться [Прапори подій](event.flags.md) .

`cb`
Функція зворотного дзвінка. Дивіться [Функції зворотного дзвінка для
подій](event.callbacks.md) .

`arg`
Ці дані, пов'язані з подією. Якщо задані, то вони будуть
передані у функцію зворотного виклику, коли відбудеться подія.

### Значення, що повертаються

Повертає об'єкт Event.

### Дивіться також

- [Event::signal()](event.signal.md) - Створити об'єкт події
сигналу
- [Event::timer()](event.timer.md) - Створити об'єкт події таймера
