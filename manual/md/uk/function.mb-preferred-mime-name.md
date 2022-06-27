- [«mb_parse_str](function.mb-parse-str.md)
- [mb_regex_encoding »](function.mb-regex-encoding.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Отримання набору символів MIME

#mb_preferred_mime_name

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_preferred_mime_name — Отримання набору символів MIME

### Опис

**mb_preferred_mime_name**(string `$encoding`): string\|false

Отримує рядок набору символів MIME для заданого кодування.

### Список параметрів

`encoding`
Кодування, для якого вибирається набір символів.

### Значення, що повертаються

MIME-набір символів `charset` у вигляді рядка (string) для кодування
`encoding` або **`false`**, якщо для заданого кодування `encoding` немає
переважного набору символів.

### Приклади

**Приклад #1 Приклад використання **mb_preferred_mime_name()****

` <?php$outputenc u003d "sjis-win";mb_http_output($outputenc);ob_start("mb_output_handler");header("Content-Type: text/html; charsetu003d" . mb_preferred_mime_name($outputenc));?> `
