- [« swoole_async_write](function.swoole-async-write.md)
- [swoole_clear_error »](function.swoole-clear-error.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Асинхронний запис даних у файл

# swoole_async_writefile

(PECL swoole \>u003d 1.9.0)

swoole_async_writefile — Асинхронний запис даних у файл

### Опис

**swoole_async_writefile**(
string `$filename`,
string `$content`,
[callable](language.types.callable.md) `$callback` u003d ?,
int `$flags` u003d 0
): bool

### Список параметрів

`filename`
Ім'я файлу, в який буде зроблено запис.

`content`
Вміст, що записується у файл.

`callback`

`flags`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
