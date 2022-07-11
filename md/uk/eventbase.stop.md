- [«EventBase::reInit](eventbase.reinit.md)
- [EventBuffer »](class.eventbuffer.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Повідомляє event_base припинити надсилання подій

# EventBase::stop

(PECL event \>u003d 1.2.6-beta)

EventBase::stop — Повідомляє event_base припинити надсилання подій

### Опис

public **EventBase::stop**(): bool

Повідомляє event_base припинити надсилання подій

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBase::exit()](eventbase.exit.md) - Припиняє надсилання
подій
- [EventBase::gotStop()](eventbase.gotstop.md) - Перевіряє, чи був він
цикл обробки подій завершено
