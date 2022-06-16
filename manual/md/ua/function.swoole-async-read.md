- [« swoole_async_dns_lookup](function.swoole-async-dns-lookup.md)
- [swoole_async_readfile »](function.swoole-async-readfile.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Асинхронне читання потоку файлу

# swoole_async_read

(PECL swoole \>u003d 1.9.0)

swoole_async_read — Асинхронне читання потоку файлу

### Опис

**swoole_async_read**(
string `$filename`,
[callable](language.types.callable.md) `$callback`,
int `$chunk_size` u003d 65536,
int `$offset` u003d 0
): bool

### Список параметрів

`filename`
Ім'я файлу для читання.

`callback`
callback(string `$filename`, string `$content`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`filename`
Назва файлу.

`content`
Вміст з файлового потоку.

`chunk_size`
Довжина блоку.

`offset`
Зміщення.

### Значення, що повертаються

Чи було читання виконано успішно, чи виникла помилка.
