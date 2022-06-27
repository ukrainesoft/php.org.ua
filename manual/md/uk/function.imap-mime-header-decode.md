- [« imap_mailboxmsginfo](function.imap-mailboxmsginfo.md)
- [imap_msgno »] (function.imap-msgno.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Декодувати елементи заголовка

#imap_mime_header_decode

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mime_header_decode — Декодувати елементи заголовка

### Опис

**imap_mime_header_decode**(string `$string`): array\|false

Декодує MIME-розширення заголовка, що не є текстом ASCII
(дивися [»RFC2047](http://www.faqs.org/rfcs/rfc2047)).

### Список параметрів

`string`
MIME-текст

### Значення, що повертаються

Декодовані елементи повертаються в масиві об'єктів, де кожен
об'єкт має дві властивості, `charset` та `text`.

Якщо елемент не був декодований, або, іншими словами, він є
текстом US-ASCII, властивість `charset` буде встановлено на значення
`default`.

Функція повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **imap_mime_header_decode()****

` <?php$text u003d "u003d?ISO-8859-1?Q?Keld_Ju003dF8rn_Simonsen?u003d <keld@example.com>";$elements u003d imap_mime_header_decode($text);for ($iu003d0; $i <count($elements); $i++) {    echo "Charset: {$elements[$i]->charset}
";   echo "Text: {$elements[$i]->text}

";}?> `

Результат виконання цього прикладу:

Charset: ISO-8859-1
Text: Keld Jørn Simonsen

Charset: default
Text: <keld@example.com>

У прикладі вище ми отримаємо два елементи, де перший елемент був раніше
закодований ISO-8859-1, а другий US-ASCII.

### Дивіться також

- [imap_utf8()](function.imap-utf8.md) - Перетворює
MIME-кодований текст у UTF-8
