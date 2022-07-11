- [« Swoole\Async::set](swoole-async.set.md)
- [Swoole\Async::writeFile »](swoole-async.writefile.md)

- [PHP Manual](index.md)
- [Swoole\Async](class.swoole-async.md)
- Асинхронно записує дані у файловий потік

# Swoole\Async::write

(PECL swoole \>u003d 1.9.0)

Swoole\Async::write — Асинхронно записує дані у файловий потік

### Опис

public static **Swoole\Async::write**(
string `$filename`,
string `$content`,
int `$offset` u003d ?,
[callable](language.types.callable.md) `$callback` u003d ?
): void

### Список параметрів

`filename`
Назва файлу для запису.

`content`
Зміст для запису файлу.

`offset`
Зміщення.

`callback`
