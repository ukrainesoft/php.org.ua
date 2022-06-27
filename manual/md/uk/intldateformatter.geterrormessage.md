- [«
IntlDateFormatter::getErrorCode](intldateformatter.geterrorcode.md)
- [IntlDateFormatter::getLocale »](intldateformatter.getlocale.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує текст помилки останньої операції

# IntlDateFormatter::getErrorMessage

# datefmt_get_error_message

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getErrorMessage -- datefmt_get_error_message --
Отримує текст помилки останньої операції

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getErrorMessage**(): string

Процедурний стиль

**datefmt_get_error_message**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): string

Отримує текст помилки останньої операції.

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

Опис останньої помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_error_message()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);$str u003d datefmt_format($fmt);if (!$str) {    printf(        ""ПОМИЛКА: %s(%d)
",         datefmt_get_error_message($fmt),        datefmt_get_error_code($fmt)    );}?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?php$fmt u003d new IntlDateFormatter(   IntlDateFormatter::FULL,    IntlDateFormatter::FULL,     'America/Los_Ang| $str) {   printf(         "ПОМИЛКА: %s (%d)
",        $fmt->getErrorMessage(),        $fmt->getErrorCode()    );}?> `

Результат виконання цього прикладу:

ПОМИЛКА: U_ZERO_ERROR (0)

### Дивіться також

- [datefmt_get_error_code()](intldateformatter.geterrorcode.md) -
Отримує код помилки останньої операції
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
