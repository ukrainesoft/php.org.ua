- [«NumberFormatter::parse](numberformatter.parse.md)
- [NumberFormatter::setPattern »](numberformatter.setpattern.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Встановлює атрибут

# NumberFormatter::setAttribute

#numfmt_set_attribute

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::setAttribute -- numfmt_set_attribute -- Встановлює
атрибут

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::setAttribute**(int `$attribute`, int\|float
`$value`): bool

Процедурний стиль

**numfmt_set_attribute**([NumberFormatter](class.numberformatter.md)
`$formatter`, int `$attribute`, int\|float `$value`): bool

Встановлює числовий атрибут, пов'язаний із засобом форматування.
Прикладом числового атрибуту є кількість цілих цифр, яка
видаватиме засіб форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`attribute`
Специфікатор атрибута - одна з констант [числового
атрибута](class.numberformatter.md#intl.numberformatter-constants.unumberformatattribute).

`value`
Значення атрибуту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_set_attribute()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo "Цифр: ".numfmt_get_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGI
";echo numfmt_format($fmt, 1234567.891234567890000)."
";numfmt_set_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS, 2);echo "Цифр: ".numfmt_get_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS)."
";echo numfmt_format($fmt, 1234567.891234567890000)."
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );echo "Цифр: ".$fmt->getAttribute(NumberFormatter::MAX_FRACTION_DIGITS)."
";echo $fmt->format(1234567.891234567890000)."
";$fmt->setAttribute(NumberFormatter::MAX_FRACTION_DIGITS, 2);echo "Цифр: ".$fmt->getAttribute(NumberFormatter::MAX_FRACTION_DIGITS)."
";echo $fmt->format(1234567.891234567890000)."
";?> `

Результат виконання цього прикладу:

Цифр: 3
1.234.567,891
Цифр: 2
1.234.567,89

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_get_attribute()](numberformatter.getattribute.md) -
Отримує атрибут
- [numfmt_set_text_attribute()](numberformatter.settextattribute.md) -
Встановлює текстовий атрибут
