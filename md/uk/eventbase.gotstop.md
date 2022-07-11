- [«EventBase::gotExit](eventbase.gotexit.md)
- [EventBase::loop »](eventbase.loop.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Перевіряє, чи був цикл обробки подій завершений

# EventBase::gotStop

(PECL event \>u003d 1.2.6-beta)

EventBase::gotStop — Перевіряє, чи цикл обробки подій завершено

### Опис

public **EventBase::gotStop**(): bool

Перевіряє, чи був цикл обробки подій завершено за допомогою
[EventBase::stop()](eventbase.stop.md) .

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цикл обробки подій був завершений з
[EventBase::stop()](eventbase.stop.md) . В іншому випадку -
**`false`**.

### Дивіться також

- [EventBase::exit()](eventbase.exit.md) - Припиняє надсилання
подій
- [EventBase::stop()](eventbase.stop.md) - Повідомляє event_base
припинити надсилання подій
- [EventBase::gotExit()](eventbase.gotexit.md) - Перевіряє, чи був він
цикл обробки подій завершено
