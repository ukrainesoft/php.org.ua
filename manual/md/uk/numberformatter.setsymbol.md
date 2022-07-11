- [«NumberFormatter::setPattern](numberformatter.setpattern.md)
- [NumberFormatter::setTextAttribute
»](numberformatter.settextattribute.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Встановлює значення символу

# NumberFormatter::setSymbol

#numfmt_set_symbol

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::setSymbol -- numfmt_set_symbol — Встановлює значення
символу

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::setSymbol**(int `$symbol`, string `$value`):
bool

Процедурний стиль

**numfmt_set_symbol**([NumberFormatter](class.numberformatter.md)
`$formatter`, int `$symbol`, string `$value`): bool

Встановлює символ, пов'язаний із засобом форматування. Засіб
форматування використовує символи для представлення спеціальних
символів, які залежать від мови, у числах, наприклад, знак відсотка. Цей
API не підтримується для форматування на основі правил.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`symbol`
Специфікатор символу, одна із констант [символу
форматирования](class.numberformatter.md#intl.numberformatter-constants.unumberformatsymbol).

`value`
Текст для символу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_set_symbol()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo "Розділювач: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPAR
";echo numfmt_format($fmt, 1234567.891234567890000)."
";numfmt_set_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");echo "Розділювач: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_MB
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
- [numfmt_get_symbol()](numberformatter.getsymbol.md) - Отримує
значення символу
