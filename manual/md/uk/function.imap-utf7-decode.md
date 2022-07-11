- [« imap_unsubscribe](function.imap-unsubscribe.md)
- [imap_utf7_encode »](function.imap-utf7-encode.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Декодує рядок із модифікованого кодування UTF-7

#imap_utf7_decode

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_utf7_decode — Декодує рядок із модифікованого кодування UTF-7

### Опис

**imap_utf7_decode**(string `$string`): string\|false

Декодує `string` з модифікованого кодування UTF-7 ISO-8859-1.

Це потрібно для декодування імен поштових скриньок, що містять ім'я
символи, що не входять до друкованого діапазону ASCII.

### Список параметрів

`string`
Текст у модифікованому кодуванні UTF-7, як визначено в [» RFC
2060](http://www.faqs.org/rfcs/rfc2060), розділ 5.1.3.

### Значення, що повертаються

Повертає рядок у кодуванні ISO-8859-1, який містить той самий
послідовність символів, що і `string`, або **`false`**, якщо
`string` містить некоректні символи або якщо `string` містить
символи, що не входять до набору символів ISO-8859-1.

### Дивіться також

- [imap_utf7_encode()](function.imap-utf7-encode.md) - Перетворює
рядок ISO-8859-1 модифікований UTF-7
