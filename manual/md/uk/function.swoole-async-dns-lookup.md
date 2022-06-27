- [« Функції Swoole](ref.swoole-funcs.md)
- [swoole_async_read »](function.swoole-async-read.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Асинхронний та неблокуючий пошук імені хоста або IP-адреси

# swoole_async_dns_lookup

(PECL swoole \>u003d 1.9.0)

swoole_async_dns_lookup — Асинхронний та неблокуючий пошук імені хоста
або IP-адреси

### Опис

**swoole_async_dns_lookup**(string `$hostname`,
[callable](language.types.callable.md) `$callback`): bool

### Список параметрів

`hostname`
Ім'я хоста.

`callback`
callback(string `$hostname`, string `$ip`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`hostname`
Ім'я хоста

`IP`
IP-адреса.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
