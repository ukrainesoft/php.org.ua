- [«glob://](wrappers.glob.md)
- [ssh2://»](wrappers.ssh2.md)

- [PHP Manual](index.md)
- [Підтримувані протоколи та обгортки](wrappers.md)
- PHP-архів

# phar://

phar:// - PHP-архів

### Опис

Обгортка потоку `phar://`. Дивіться розділ [Обертка потоку
Phar](phar.using.stream.md) для більш детального опису.

### Використання

- `phar://`

### Опції

| Атрибут Підтримка
|------------------------------------------------- ----------------------------------------|--------- --|
| Обмеження на [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | Ні |
| Обмеження на [allow_url_include](filesystem.configuration.md#ini.allow-url-include) | Ні |
| Читання | Так |
| Запис | Так |
| Додавання | Ні |
| Одночасне читання та запис | Так |
| Підтримка [stat()](function.stat.md) | Так |
| Підтримка [unlink()](function.unlink.md) | Так |
| Підтримка [rename()](function.rename.md) | Так |
| Підтримка [mkdir()](function.mkdir.md) | Так |
| Підтримка [rmdir()](function.rmdir.md) | Так |

**Основна інформація**

### Дивіться також

- [Контекстні опції Phar](context.phar.md)
