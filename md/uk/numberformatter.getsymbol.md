- [«NumberFormatter::getPattern](numberformatter.getpattern.md)
- [NumberFormatter::getTextAttribute
»](numberformatter.gettextattribute.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Отримує значення символу

# NumberFormatter::getSymbol

#numfmt_get_symbol

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::getSymbol -- numfmt_get_symbol — Отримує значення
символу

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::getSymbol**(int `$symbol`): string\|false

Процедурний стиль

**numfmt_get_symbol**([NumberFormatter](class.numberformatter.md)
`$formatter`, int `$symbol`): string\|false

Отримує символ, пов'язаний із засобом форматування. Засіб
форматування використовує символи для представлення спеціальних
символів, які залежать від мови, у числах, наприклад, знак відсотка. Цей
API не підтримується для форматування на основі правил.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`symbol`
Специфікатор символу, одна із констант [символів
форматирования](class.numberformatter.md#intl.numberformatter-constants.unumberformatsymbol).

### Значення, що повертаються

Рядок символу або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_get_symbol()****

` <?php$fmtu003du003dnumfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo "Sep: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_)
";echo numfmt_format($fmt, 1234567.891234567890000)."
";numfmt_set_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");echo "Sep: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPAR)
";echo numfmt_format($fmt, 1234567.891234567890000)."
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );echo "Розділювач: ".$fmt->getSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL
";echo $fmt->format(1234567.891234567890000)."
";$fmt->setSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");echo "Розділювач: ".$fmt->getSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."
";echo $fmt->format(1234567.891234567890000)."
";?> `

Результат виконання цього прикладу:

Розділювач: .
1.234.567,891
Розділювач: *
1*234*567,891

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_set_symbol()](numberformatter.setsymbol.md) -
Встановлює значення символу
