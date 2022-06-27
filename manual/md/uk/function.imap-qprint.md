- [« imap_ping](function.imap-ping.md)
- [imap_rename »](function.imap-rename.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перетворити рядок з формату "quoted-printable" на 8-бітний рядок

#imap_qprint

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_qprint — Перетворити рядок із формату "quoted-printable" на
8-бітний рядок

### Опис

**imap_qprint**(string `$string`): string\|false

Перетворює рядок з формату "quoted-printable" на 8-бітний рядок на
відповідно до [»RFC2045](http://www.faqs.org/rfcs/rfc2045), секція
6.7.

### Список параметрів

`string`
Рядок у форматі "quoted-printable"

### Значення, що повертаються

Повертає 8-бітний рядок або **`false`** у разі виникнення
помилки.

### Дивіться також

- [imap_8bit()](function.imap-8bit.md) - Конвертує 8-бітну
рядок у рядок у форматі quoted-printable
