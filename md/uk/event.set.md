- [«Event::pending](event.pending.md)
- [Event::setPriority »](event.setpriority.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Переконфігурувати подію

# Event::set

(PECL event \>u003d 1.2.6-beta)

Event::set — Переконфігурувати подію

### Опис

public **Event::set**(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$what` u003d ?,
[callable](language.types.callable.md) `$cb` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?
): bool

Переконфігурує подію. Зверніть увагу, що ця функція не
Викликає застарілу функцію event_set бібліотеки libevent. Замість цього
вона викликає event_assign.

### Список параметрів

`base`
Події, до якої необхідно прив'язати подію.

`fd`
Потік, сокет чи числовий дескриптор файлу. Для подій таймера вкажіть
**`-1`**, а для подій сигналу - номер сигналу, наприклад **`SIGHUP`**.

`what`
Дивіться [Прапори подій](event.flags.md) .

`cb`
Функція зворотного дзвінка. Дивіться [Функції зворотного дзвінка для
подій](event.callbacks.md) .

`arg`
Ці дані, пов'язані з подією. Вони будуть передані в
функцію зворотного виклику, коли відбудеться подія.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
