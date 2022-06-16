- [«
NumberFormatter::formatCurrency](numberformatter.formatcurrency.md)
- [NumberFormatter::getAttribute »](numberformatter.getattribute.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Форматує число

# NumberFormatter::format

#numfmt_format

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::format -- numfmt_format — Форматує число

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::format**(int\|float `$num`, int `$type` u003d
NumberFormatter::TYPE_DEFAULT): string\|false

Процедурний стиль

**numfmt_format**([NumberFormatter](class.numberformatter.md)
`$formatter`, int\|float `$num`, int `$type` u003d
NumberFormatter::TYPE_DEFAULT): string\|false

Форматує числове значення відповідно до правил засобу
форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`num`
Значення форматування. Може бути цілим числом (int) або числом з
плаваючою точкою (float), інші типи будуть перетворені на числове
значення.

`type`
Використовуваний [тип
форматирования](class.numberformatter.md#intl.numberformatter-constants.types).

### Значення, що повертаються

Повертає рядок, що містить форматоване значення або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_format()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );$data u003d numfmt_format($fmt, 1234567.891234567890000);if(intl_is_failure(numfmt_format($fmt))) {    report_error("Formatter error"); }?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );$fmt->format(1234567.891234567890000);if(intl_is_failure$ ;}?> `

Результат виконання цього прикладу:

1.234.567,891

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_format_currency()](numberformatter.formatcurrency.md) -
Форматує значення валюти
- [numfmt_parse()](numberformatter.parse.md) - Розбирає число
