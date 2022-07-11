- [« Swoole\Client::connect](swoole-client.connect.md)
- [Swoole\Client::\_\_destruct »](swoole-client.destruct.md)

- [PHP Manual](index.md)
- [Swoole\Client](class.swoole-client.md)
- Створює синхронний або асинхронний TCP/UDP клієнт Swoole з
підтримкою SSL або без нього

# Swoole\Client::\_\_construct

(PECL swoole \>u003d 1.9.0)

Swoole\Client::\_\_construct — Створює синхронний або асинхронний
TCP/UDP клієнт Swoole за допомогою SSL або без нього

### Опис

public **Swoole\Client::\_\_construct**(int `$sock_type`, int
`$is_async` u003d ?)

### Список параметрів

`sock_type`
Тип сокету: SWOOLE_TCP, SWOOLE_UDP, SWOOLE_ASYNC, SWOOLE_SSL,
SWOOLE_KEEP.

`is_async`
Синхронний чи асинхронний клієнт.
