- [« imap_base64](function.imap-base64.md)
- [imap_body »](function.imap-body.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Конвертує 8-бітний рядок у рядок base64

#imap_binary

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_binary — Конвертує 8-бітний рядок у рядок base64

### Опис

**imap_binary**(string `$string`): string\|false

Конвертує 8-бітний рядок у рядок base64 відповідно до
[» RFC2045](http://www.faqs.org/rfcs/rfc2045), Секція 6.8.

### Список параметрів

`string`
8-бітний рядок

### Значення, що повертаються

Повертає рядок, кодований у base64 або **`false`** у разі
виникнення помилки.

### Дивіться також

- [imap_base64()](function.imap-base64.md) - Декодувати текст
закодований BASE64
