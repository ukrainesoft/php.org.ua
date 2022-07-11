- [«NumberFormatter::create](numberformatter.create.md)
- [NumberFormatter::format »](numberformatter.format.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Форматує значення валюти

# NumberFormatter::formatCurrency

#numfmt_format_currency

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::formatCurrency - numfmt_format_currency - Форматує
значення валюти

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::formatCurrency**(float `$amount`, string
`$currency`): string\|false

Процедурний стиль

**numfmt_format_currency**([NumberFormatter](class.numberformatter.md)
`$formatter`, float `$amount`, string `$currency`): string\|false

Форматує значення валюти відповідно до правил форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`amount`
Числове значення валюти.

`currency`
Трилітерний код валюти ISO 4217, що позначає валюту, що використовується.

### Значення, що повертаються

Рядок, що представляє форматоване значення валюти або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_format_currency()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::CURRENCY );echo numfmt_format_currency($fmt, 1234567.89123456789000,
";echo numfmt_format_currency($fmt, 1234567.891234567890000, "RUR")."
";$fmt u003dnumfmt_create( 'ru_RU', NumberFormatter::CURRENCY );echo numfmt_format_currency($fmt, 1234567.891234567890000, ""
";echo numfmt_format_currency($fmt, 1234567.891234567890000, "RUR")."
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::CURRENCY );echo $fmt->formatCurrency(1234567.891234567890000, ""EUR
";echo $fmt->formatCurrency(1234567.891234567890000, "RUR")."
";$fmt u003d new NumberFormatter( 'ru_RU', NumberFormatter::CURRENCY );echo $fmt->formatCurrency(1234567.891234567890000, "EUR").
";echo $fmt->formatCurrency(1234567.891234567890000, "RUR")."
";?> `

Результат виконання цього прикладу:

1.234.567,89 €
1.234.567,89 RUR
1 234 567,89 €
1 234 567,89 грн.

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_format()](numberformatter.format.md) - Форматує число
- [numfmt_parse_currency()](numberformatter.parsecurrency.md) -
Розбирає номер валюти
