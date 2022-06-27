- [«
imap_rfc822_parse_adrlist](function.imap-rfc822-parse-adrlist.md)
- [imap_rfc822_write_address
»](function.imap-rfc822-write-address.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Розбір рядка заголовка листа

#imap_rfc822_parse_headers

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_rfc822_parse_headers — Розбір рядка заголовка листа

### Опис

**imap_rfc822_parse_headers**(string `$headers`, string
`$default_hostname` u003d "UNKNOWN"): stdClass

Виймає об'єкт різних елементів заголовка, аналогічно
[imap_header()](function.imap-header.md).

### Список параметрів

`headers`
Дані для розбору

`default_hostname`
Ім'я хоста за замовчуванням

### Значення, що повертаються

Повертає об'єкт, аналогічний функцією, що повертається
[imap_header()](function.imap-header.md), за винятком прапорів та
інших властивостей, отриманих із сервера IMAP.

### Дивіться також

- [imap_rfc822_parse_adrlist()](function.imap-rfc822-parse-adrlist.md) -
Розбір адресного рядка
