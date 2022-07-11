- [« zlib://](wrappers.compression.md)
- [glob://»](wrappers.glob.md)

- [PHP Manual](index.md)
- [Підтримувані протоколи та обгортки](wrappers.md)
- Схема Data (RFC 2397)

# data://

data:// - Схема Data (RFC 2397)

### Опис

`data:` ([»RFC 2397](http://www.faqs.org/rfcs/rfc2397)) - це обгортка
потоків.

### Використання

- `data://text/plain;base64,`

### Опції

| Атрибут Підтримка
|------------------------------------------------- ----------------------------------------|--------- --|
| Обмеження на [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | Так |
| Обмеження на [allow_url_include](filesystem.configuration.md#ini.allow-url-include) | Так |
| Читання | Так |
| Запис | Ні |
| Додавання | Ні |
| Читання та запис одночасно | Ні |
| Підтримка [stat()](function.stat.md) | Ні |
| Підтримка [unlink()](function.unlink.md) | Ні |
| Підтримка [rename()](function.rename.md) | Ні |
| Підтримка [mkdir()](function.mkdir.md) | Ні |
| Підтримка [rmdir()](function.rmdir.md) | Ні |

**Основна інформація**

### Приклади

**Приклад #1 Виведення вмісту data://**

`<?php// виводить "I love PHP"echo file_get_contents('data://text/plain;base64,SSBsb3ZlIFBIUAou003d');?> `

**Приклад #2 Отримання типу потоку**

` <?php$fp   u003d fopen('data://text/plain;base64,', 'r');$meta u003d stream_get_meta_data($fp);// виводить "text/plain"echo $meta['mediatype '];?> `
