- [« swoole_async_set](function.swoole-async-set.md)
- [swoole_async_writefile »](function.swoole-async-writefile.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Асинхронний запис даних у потік файлу

# swoole_async_write

(PECL swoole \>u003d 1.9.0)

swoole_async_write — Асинхронний запис даних до потоку файлу

### Опис

**swoole_async_write**(
string `$filename`,
string `$content`,
int `$offset` u003d ?,
[callable](language.types.callable.md) `$callback` u003d ?
): bool

### Список параметрів

`filename`
Ім'я файлу, в який буде зроблено запис

`content`
Вміст, що записується у файл.

`offset`
Зміщення.

`callback`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
