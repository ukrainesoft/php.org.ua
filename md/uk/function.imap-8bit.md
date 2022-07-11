- [« Функції IMAP](ref.imap.md)
- [imap_alerts »](function.imap-alerts.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Конвертує 8-бітний рядок у рядок у форматі quoted-printable

#imap_8bit

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_8bit — Конвертує 8-бітний рядок у рядок у форматі
quoted-printable

### Опис

**imap_8bit**(string `$string`): string\|false

Конвертує 8-бітний рядок у рядок, закодований механізмом
quoted-printable (відповідно до
[»RFC2045](http://www.faqs.org/rfcs/rfc2045), розділ 6.7).

### Список параметрів

`string`
8-бітний рядок для конвертації

### Значення, що повертаються

Повертає рядок формату quoted-printable або **`false`** у разі
виникнення помилки.

### Дивіться також

- [imap_qprint()](function.imap-qprint.md) - Перетворити рядок з
формату "quoted-printable" у 8-бітний рядок
