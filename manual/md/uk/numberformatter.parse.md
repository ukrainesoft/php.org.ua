- [«
NumberFormatter::parseCurrency](numberformatter.parsecurrency.md)
- [NumberFormatter::setAttribute »](numberformatter.setattribute.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Розбирає число

# NumberFormatter::parse

#numfmt_parse

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::parse -- numfmt_parse — Розбирає число

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::parse**(string `$string`, int `$type` u003d
NumberFormatter::TYPE_DOUBLE, int `&$offset` u003d **`null`**):
int\|float\|false

Процедурний стиль

**numfmt_parse**(
[NumberFormatter](class.numberformatter.md) `$formatter`,
string `$string`,
int `$type` u003d NumberFormatter::TYPE_DOUBLE,
int `&$offset` u003d **`null`**
): int\|float\|false

Перетворює рядок на число, використовуючи правила засобу форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`string`
Рядок для розбору числа.

`type`
Використовуваний [тип
форматирования](class.numberformatter.md#intl.numberformatter-constants.types).
За промовчанням використовується **`NumberFormatter::TYPE_DOUBLE`**.

`offset`
Зміщення у рядку, з якого починається синтаксичний аналіз. При
поверніть це значення міститиме зсув, на якому закінчився
синтаксичний аналіз.

### Значення, що повертаються

Значення аналізованого числа або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_parse()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );$num u003d "1.234.567,891";echo numfmt_parse($fmt, $num).
";echo numfmt_parse($fmt, $num, NumberFormatter::TYPE_INT32)."
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );$num u003d "1.234.567,891";echo $fmt->parse($num)."
";echo $fmt->parse($num, NumberFormatter::TYPE_INT32)."
";?> `

Результат виконання цього прикладу:

1234567.891
1234567

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_format()](numberformatter.format.md) - Форматує число
- [numfmt_parse_currency()](numberformatter.parsecurrency.md) -
Розбирає номер валюти
