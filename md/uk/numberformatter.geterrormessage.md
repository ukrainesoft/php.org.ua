- [«NumberFormatter::getErrorCode](numberformatter.geterrorcode.md)
- [NumberFormatter::getLocale »](numberformatter.getlocale.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Отримує останнє повідомлення про помилку засобу форматування

# NumberFormatter::getErrorMessage

#numfmt_get_error_message

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::getErrorMessage -- numfmt_get_error_message -- Отримує
останнє повідомлення про помилку засобу форматування

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::getErrorMessage**(): string

Процедурний стиль

**numfmt_get_error_message**([NumberFormatter](class.numberformatter.md)
`$formatter`): string

Отримує повідомлення про помилку від останньої функції, виконаної засобом
форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

### Значення, що повертаються

Повертає повідомлення про помилку з останнього виклику засобу
форматування.

### Приклади

**Приклад #1 Приклад використання **numfmt_get_error_message()****

`<?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );$data u003d numfmt_format($fmt, 1234567.891234567890000)

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );$fmt->format(1234567.891234567890000);var_dump(numfmt_get'?'

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
