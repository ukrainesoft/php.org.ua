- [« EventBase::getTimeOfDayCached](eventbase.gettimeofdaycached.md)
- [EventBase::gotStop »](eventbase.gotstop.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Перевіряє, чи був цикл обробки подій завершений

# EventBase::gotExit

(PECL event \>u003d 1.2.6-beta)

EventBase::gotExit — Перевіряє, чи завершився цикл обробки подій.

### Опис

public **EventBase::gotExit**(): bool

Перевіряє, чи був цикл обробки подій завершено за допомогою
[EventBase::exit()](eventbase.exit.md) .

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цикл обробки подій завершено за допомогою
[EventBase::exit()](eventbase.exit.md) . В інших випадках - "false".

### Дивіться також

- [EventBase::exit()](eventbase.exit.md) - Припиняє надсилання
подій
- [EventBase::stop()](eventbase.stop.md) - Повідомляє event_base
припинити надсилання подій
- [EventBase::gotStop()](eventbase.gotstop.md) - Перевіряє, чи був він
цикл обробки подій завершено
