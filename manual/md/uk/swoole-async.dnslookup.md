- [« Swoole\Async](class.swoole-async.md)
- [Swoole\Async::read »](swoole-async.read.md)

- [PHP Manual](index.md)
- [Swoole\Async](class.swoole-async.md)
- Асинхронний та неблокуючий пошук IP на ім'я хоста

# Swoole\Async::dnsLookup

(PECL swoole \>u003d 1.9.0)

Swoole\Async::dnsLookup — Асинхронний та неблокуючий пошук IP на ім'я
хоста

### Опис

public static **Swoole\Async::dnsLookup**(string `$hostname`,
[callable](language.types.callable.md) `$callback`): void

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`hostname`
Ім'я хоста.

`callback`
callback(string `$hostname`, string `$ip`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`hostname`
Ім'я хоста.

`IP`
IP-адреса.
