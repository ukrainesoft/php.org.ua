- [« Swoole\Async::read](swoole-async.read.md)
- [Swoole\Async::set »](swoole-async.set.md)

- [PHP Manual](index.md)
- [Swoole\Async](class.swoole-async.md)
- Асинхронне читання файлу

# Swoole\Async::readFile

(PECL swoole \>u003d 1.9.0)

Swoole\Async::readFile — Асинхронне читання файлу

### Опис

public static **Swoole\Async::readFile**(string `$filename`,
[callable](language.types.callable.md) `$callback`): void

### Список параметрів

`filename`
Ім'я файлу, що читається.

`callback`
callback(string `$filename`, string `$content`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`filename`
Ім'я файлу, що читається.

`content`
Зміст, прочитаний із файлу.
