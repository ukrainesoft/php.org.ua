- [« swoole_event_exit](function.swoole-event-exit.md)
- [swoole_event_wait »](function.swoole-event-wait.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Оновити callback-функції події сокету

# swoole_event_set

(PECL swoole \>u003d 1.9.0)

swoole_event_set — Оновити callback-функції події сокету

### Опис

**swoole_event_set**(
int `$fd`,
[callable](language.types.callable.md) `$read_callback` u003d ?,
[callable](language.types.callable.md) `$write_callback` u003d ?,
int `$events` u003d 0
): bool

### Список параметрів

`fd`

`read_callback`

`write_callback`

`events`

### Значення, що повертаються
