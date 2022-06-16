- [« Swoole\Async::dnsLookup](swoole-async.dnslookup.md)
- [Swoole\Async::readFile »](swoole-async.readfile.md)

- [PHP Manual](index.md)
- [Swoole\Async](class.swoole-async.md)
- Асинхронне читання файлового потоку

# Swoole\Async::read

(PECL swoole \>u003d 1.9.0)

Swoole\Async::read — Асинхронне читання файлового потоку

### Опис

public static **Swoole\Async::read**(
string `$filename`,
[callable](language.types.callable.md) `$callback`,
int `$chunk_size` u003d ?,
int `$offset` u003d ?
): bool

### Список параметрів

`filename`
Назва файлу.

`callback`
callback(string `$filename`, string `$content`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`filename`
Назва файлу.

`content`
Вміст, прочитаний із файлового потоку.

`chunk_size`
Довжина частини.

`offset`
Зміщення.

### Значення, що повертаються

Чи успішно прочитано.
