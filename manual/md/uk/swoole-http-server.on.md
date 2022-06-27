- [« Swoole\Http\Server](class.swoole-http-server.md)
- [Swoole\Http\Server::start »](swoole-http-server.start.md)

- [PHP Manual](index.md)
- [Swoole\Http\Server](class.swoole-http-server.md)
- Прив'язує callback-функцію до HTTP-сервера на ім'я події

# Swoole\Http\Server::on

(PECL swoole \>u003d 1.9.0)

Swoole\Http\Server::on — Прив'язує callback-функцію до HTTP-сервера за
імені події

### Опис

public **Swoole\Http\Server::on**(string `$event_name`,
[callable](language.types.callable.md) `$callback`): void

Прив'язує callback-функцію до HTTP-серверу на ім'я події.

### Список параметрів

`event_name`

`callback`

### Значення, що повертаються
