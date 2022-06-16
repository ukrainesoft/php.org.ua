- [« swoole_async_read](function.swoole-async-read.md)
- [swoole_async_set »](function.swoole-async-set.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Асинхронне читання файлу

# swoole_async_readfile

(PECL swoole \>u003d 1.9.0)

swoole_async_readfile - Асинхронне читання файлу

### Опис

**swoole_async_readfile**(string `$filename`,
[callable](language.types.callable.md) `$callback`): bool

### Список параметрів

`filename`
Ім'я файлу для читання.

`callback`
callback(string `$filename`, string `$content`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`filename`
Ім'я файлу.

`content`
Вміст з файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
