- [«EventBase::dispatch](eventbase.dispatch.md)
- [EventBase::free »](eventbase.free.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Припиняє надсилання подій

# EventBase::exit

(PECL event \>u003d 1.2.6-beta)

EventBase::exit — Припиняє надсилання подій

### Опис

public **EventBase::exit**( float `$timeout` u003d ?): bool

Повідомляє, що база подій має припинити відправку подій через
кількість секунд.

### Список параметрів

`timeout`
Необов'язковий параметр. Кількість секунд, після якого база подій
має припинити відправлення подій.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBase::stop()](eventbase.stop.md) - Повідомляє event_base
припинити надсилання подій
