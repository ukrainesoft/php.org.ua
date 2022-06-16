- [« Swoole\Event](class.swoole-event.md)
- [Swoole\Event::defer »](swoole-event.defer.md)

- [PHP Manual](index.md)
- [Swoole\Event](class.swoole-event.md)
- Додає нові callback-функції сокету до EventLoop

# Swoole\Event::add

(PECL swoole \>u003d 1.9.0)

Swoole\Event::add - Додає нові callback-функції сокету в EventLoop

### Опис

public static **Swoole\Event::add**(
int `$fd`,
[callable](language.types.callable.md) `$read_callback`,
[callable](language.types.callable.md) `$write_callback` u003d ?,
string `$events` u003d ?
): bool

### Список параметрів

`fd`

`read_callback`

`write_callback`

`events`

### Значення, що повертаються
