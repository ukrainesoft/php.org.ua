- [« parallel\Events::setBlocking](parallel-events.setblocking.md)
- [parallel\Events::setInput »](parallel-events.setinput.md)

- [PHP Manual](index.md)
- [parallel\Events](class.parallel-events.md)
-   Поведінка

# parallel\Events::setTimeout

(0.9.0)

parallel\Events::setTimeout — Поведінка

### Опис

За замовчуванням під час опитування подій відбувається блокування (на рівні PHP) до
доки не буде повернена перша подія: встановлення часу
очікування призводить до викидання винятків при перевищенні часу
очікування.

Відрізняється від установки режиму блокування в **`false`** за допомогою
[parallel\Events::setBlocking()](parallel-events.setblocking.md),
який не викидає виняток.

public **parallel\Events::setTimeout**(int `$timeout`): void

Встановлює час очікування у мікросекундах

### Помилки

**Увага**

Викидає parallel\Events\Error, якщо цикл не блокується.
