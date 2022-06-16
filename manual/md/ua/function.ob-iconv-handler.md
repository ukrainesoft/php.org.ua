- [« iconv](function.iconv.md)
- [intl »] (book.intl.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Перетворює символи з поточного кодування на кодування вихідного
буфера

#ob_iconv_handler

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

ob_iconv_handler — Перетворює символи з поточного кодування на кодування
вихідного буфера

### Опис

**ob_iconv_handler**(string `$contents`, int `$status`): string

Перетворює рядок, закодований в `internal_encoding`, у рядок,
закодовану в `output_encoding`.

`internal_encoding` та `output_encoding` повинні бути визначені в
`php.ini` або функцією
[iconv_set_encoding()](function.iconv-set-encoding.md).

### Список параметрів

Інформацію про аргументи цього обробника можна переглянути в описі
функції [ob_start()](function.ob-start.md).

### Значення, що повертаються

Інформацію про значення цього обробника, що повертаються, можна переглянути в
опису функції [ob_start()](function.ob-start.md).

### Приклади

**Приклад #1 Приклад використання **ob_iconv_handler()****

` <?phpiconv_set_encoding("internal_encoding", "UTF-8");iconv_set_encoding("output_encoding", "ISO-8859-1");ob_start("ob_iconv_handler"); // запуск буферизації висновку?> `

### Дивіться також

- [iconv_get_encoding()](function.iconv-get-encoding.md) - Отримує
поточне значення параметрів перетворення кодувань
- [iconv_set_encoding()](function.iconv-set-encoding.md) -
Встановлює поточні налаштування для перетворення символів
кодування
- [Функції контролю виведення](ref.outcontrol.md)
