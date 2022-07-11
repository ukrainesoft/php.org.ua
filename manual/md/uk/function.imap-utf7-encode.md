- [« imap_utf7_decode](function.imap-utf7-decode.md)
- [imap_utf8_to_mutf7 »](function.imap-utf8-to-mutf7.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перетворює рядок ISO-8859-1 на модифіковану UTF-7

#imap_utf7_encode

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_utf7_encode — Перетворює рядок ISO-8859-1 на модифікований
UTF-7

### Опис

**imap_utf7_encode**(string `$string`): string

Перетворює `string` на текст у модифікованому кодуванні UTF-7.

Це потрібно для кодування імен поштових скриньок, що містять ім'я
символи, що не входять до друкованого діапазону ASCII.

### Список параметрів

`string`
Рядок у кодуванні ISO-8859-1.

### Значення, що повертаються

Повертає дані `string` кодовані у модифікованому кодуванні
UTF-7, як визначено в [»RFC 2060](http://www.faqs.org/rfcs/rfc2060),
Розділ 5.1.3.

### Дивіться також

- [imap_utf7_decode()](function.imap-utf7-decode.md) - Декодує
рядок із модифікованого кодування UTF-7
