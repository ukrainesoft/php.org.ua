- [« Swoole\Table::valid](swoole-table.valid.md)
- [Swoole\Timer::after »](swoole-timer.after.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Timer

# Клас Swoole\Timer

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Timer** {

/\* Методи \*/

public static [after](swoole-timer.after.md)(int `$after_time_ms`,
[callable](language.types.callable.md) `$callback`): void

public static [clear](swoole-timer.clear.md)(int `$timer_id`): void

public static [exists](swoole-timer.exists.md)(int `$timer_id`): bool

public static [tick](swoole-timer.tick.md)(int `$interval_ms`,
[callable](language.types.callable.md) `$callback`, string `$param` u003d
?): void

}

## Зміст

- [Swoole\Timer::after](swoole-timer.after.md) - Запускає
callback-функцію через певний проміжок часу
- [Swoole\Timer::clear](swoole-timer.clear.md) — Видаляє таймер за
ідентифікатору
- [Swoole\Timer::exists](swoole-timer.exists.md) — Перевіряє,
чи існує таймер
- [Swoole\Timer::tick](swoole-timer.tick.md) - Повторює цю
функцію у кожний заданий інтервал часу
