- [«EvWatcher::getLoop](evwatcher.getloop.md)
- [EvWatcher::keepalive »](evwatcher.keepalive.md)

- [PHP Manual](index.md)
- [EvWatcher](class.evwatcher.md)
- Викликає callback-функцію спостерігача із заданою бітовою маскою
прийнятих подій

# EvWatcher::invoke

(PECL ev \>u003d 0.2.0)

EvWatcher::invoke — Викликає callback-функцію спостерігача із заданою
бітовою маскою прийнятих подій

### Опис

public **EvWatcher::invoke**( int `$revents` ): void

Викликає callback-функцію спостерігача із заданою бітовою маскою прийнятих
подій.

### Список параметрів

`revents`
Бітова маска спостерігача
подій](class.ev.md#ev.constants.watcher-revents).

### Значення, що повертаються

Функція не повертає значення після виконання.
