- [«NumberFormatter::getAttribute](numberformatter.getattribute.md)
- [NumberFormatter::getErrorMessage
»](numberformatter.geterrormessage.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Отримує останній код помилки засобу форматування

# NumberFormatter::getErrorCode

#numfmt_get_error_code

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::getErrorCode -- numfmt_get_error_code -- Отримує
останній код помилки засобу форматування

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::getErrorCode**(): int

Процедурний стиль

**numfmt_get_error_code**([NumberFormatter](class.numberformatter.md)
`$formatter`): int

Отримує код помилки з останньої функції, виконаної засобом
форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

### Значення, що повертаються

Повернення коду помилки з останнього виклику засобу форматування.

### Приклади

**Приклад #1 Приклад використання **numfmt_get_error_code()****

` <?php$fmt  u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );$data u003d numfmt_format($fmt, 1234567.891234567890000);if(intl_is_failure(numfmt_get_error_code($fmt))) {    report_error("Formatter error"); }?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );$fmt->format(1234567.891234567890000);if(intl_is_failure$ ;}?> `

### Дивіться також

- [numfmt_get_error_message()](numberformatter.geterrormessage.md) -
Отримує останнє повідомлення про помилку засобу форматування
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
