- [«EventBase::loop](eventbase.loop.md)
- [EventBase::reInit »](eventbase.reinit.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Встановлює кількість пріоритетів на базі подій

# EventBase::priorityInit

(PECL event \>u003d 1.2.6-beta)

EventBase::priorityInit — Встановлює кількість пріоритетів на базу
подій

### Опис

public **EventBase::priorityInit**( int `$n_priorities` ): bool

Встановлює кількість пріоритетів на основі подій

### Список параметрів

`n_priorities`
Кількість пріоритетів з урахуванням подій.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [Event::setPriority()](event.setpriority.md) - Задати пріоритет
події
