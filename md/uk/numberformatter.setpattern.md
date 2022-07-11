- [«NumberFormatter::setAttribute](numberformatter.setattribute.md)
- [NumberFormatter::setSymbol »](numberformatter.setsymbol.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Встановлює шаблон засобу форматування

# NumberFormatter::setPattern

#numfmt_set_pattern

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::setPattern -- numfmt_set_pattern — Встановлює шаблон
засоби форматування

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::setPattern**(string `$pattern`): bool

Процедурний стиль

**numfmt_set_pattern**([NumberFormatter](class.numberformatter.md)
`$formatter`, string `$pattern`): bool

Встановлює шаблон, який використовує засіб форматування. Не може
використовуватись у засобі форматування на основі правил.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`pattern`
Шаблон у синтаксисі, описаному в [» документації ICU
DecimalFormat](http://www.icu-project.org/apiref/icu4c/classDecimalFormat.md#details).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_set_pattern()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo "Шаблон: ".numfmt_get_pattern($fmt)."
";echo numfmt_format($fmt, 1234567.891234567890000)."
";numfmt_set_pattern($fmt, "#0.# kg");echo "Шаблон: ".numfmt_get_pattern($fmt)."
";echo numfmt_format($fmt, 1234567.891234567890000)."
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );echo "Шаблон: ".$fmt->getPattern()."
";echo $fmt->format(1234567.891234567890000)."
";$fmt->setPattern("#0.# kg");echo "Шаблон: ".$fmt->getPattern()."
";echo $fmt->format(1234567.891234567890000)."
";?> `

Результат виконання цього прикладу:

Шаблон: #,##0.###
1.234.567,891
Шаблон: #0.#kg
1234567,9 kg

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_create()](numberformatter.create.md) - Створює засіб
форматування чисел
- [numfmt_get_pattern()](numberformatter.getpattern.md) - Отримує
шаблон засобу форматування
