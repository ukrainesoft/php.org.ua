- [« imap_append](function.imap-append.md)
- [imap_binary »](function.imap-binary.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Декодувати текст закодований BASE64

#imap_base64

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_base64 — Декодувати текст закодований BASE64

### Опис

**imap_base64**(string `$string`): string\|false

Декодує текст `string`, закодований BASE64.

### Список параметрів

`string`
Закодований текст

### Значення, що повертаються

Повертає рядок із декодованим повідомленням або **`false`** у разі
виникнення помилки.

### Дивіться також

- [imap_binary()](function.imap-binary.md) - Конвертує 8-бітну
рядок у рядок base64
- [base64_encode()](function.base64-encode.md) - Кодує дані в
формат MIME base64
- [base64_decode()](function.base64-decode.md) - Декодує дані,
закодовані MIME base64
- [»RFC2045](http://www.faqs.org/rfcs/rfc2045), секція 6.8
