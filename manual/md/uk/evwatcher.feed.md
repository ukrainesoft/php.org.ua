- [«EvWatcher::\_\_construct](evwatcher.construct.md)
- [EvWatcher::getLoop »](evwatcher.getloop.md)

- [PHP Manual](index.md)
- [EvWatcher](class.evwatcher.md)
- Подає зазначені події у цикл подій

# EvWatcher::feed

(PECL ev \>u003d 0.2.0)

EvWatcher::feed — Подає зазначені події у цикл подій

### Опис

public **EvWatcher::feed**( int `$revents` ): void

Подає вказані події у цикл подій, якби вказана подія
відбулося для спостерігача.

### Список параметрів

`revents`
Бітова маска спостерігача
подій](class.ev.md#ev.constants.watcher-revents) .

### Значення, що повертаються

Функція не повертає значення після виконання.
