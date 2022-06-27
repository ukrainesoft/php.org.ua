- [« imap_utf8_to_mutf7](function.imap-utf8-to-mutf7.md)
- [IMAP\Connection »](class.imap-connection.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перетворює MIME-кодований текст на UTF-8

#imap_utf8

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_utf8 — Перетворює MIME-кодований текст на UTF-8

### Опис

**imap_utf8**(string `$mime_encoded_text`): string

Перетворює заданий `mime_encoded_text` на UTF-8, якщо заявлена
кодування відоме libc-client. Інакше цей текст
декодується, але не перетворюється на UTF-8.

### Список параметрів

`mime_encoded_text`
MIME-кодований рядок. Метод кодування MIME та специфікація UTF-8
описані в [»RFC2047](http://www.faqs.org/rfcs/rfc2047) та
[» RFC2044](http://www.faqs.org/rfcs/rfc2044) відповідно.

### Значення, що повертаються

Повертає декодований рядок, якщо можливо, перетворений на
UTF-8.

### Приклади

**Приклад #1 Базове використання **imap_utf8()****

` <?phpecho imap_utf8("Johannes u003d?ISO-8859-1?Q?Schlu003dFCter?u003d");?> `

Результатом виконання цього прикладу буде щось подібне:

Johannes Schlüter

### Дивіться також

- [imap_mime_header_decode()](function.imap-mime-header-decode.md) -
Декодувати елементи заголовка
