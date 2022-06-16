- [«
NumberFormatter::getTextAttribute](numberformatter.gettextattribute.md)
- [NumberFormatter::parse »](numberformatter.parse.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- розбирає номер валюти

# NumberFormatter::parseCurrency

#numfmt_parse_currency

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::parseCurrency -- numfmt_parse_currency -- Розбирає
номер валюти

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::parseCurrency**(string `$string`, string
`&$currency`, int `&$offset` u003d **`null`**): float\|false

Процедурний стиль

**numfmt_parse_currency**(
[NumberFormatter](class.numberformatter.md) `$formatter`,
string `$string`,
string `&$currency`,
int `&$offset` u003d **`null`**
): float\|false

Розбирає рядок на число з плаваючою точкою та валюту за допомогою засобу
форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`currency`
Параметр для отримання назви валюти (трьохлітерний код валюти ISO
4217).

`offset`
Зміщення у рядку, з якого починається синтаксичний аналіз. При
поверніть це значення міститиме зсув, на якому закінчився
синтаксичний аналіз.

### Значення, що повертаються

Розібране числове значення або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_parse_currency()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::CURRENCY );$num u003d "1.234.567,89\xc2\xa0$";echo "У нас ".$$ curr)." в $curr
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::CURRENCY );$num u003d "1.234.567,89\xc2\xa0$";echo "У нас >$. , $curr)." в $curr
";?> `

Результат виконання цього прикладу:

У нас 1234567.89 в USD

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_parse()](numberformatter.parse.md) - Розбирає число
- [numfmt_format_currency()](numberformatter.formatcurrency.md) -
Форматує значення валюти
