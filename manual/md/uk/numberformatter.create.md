- [«NumberFormatter](class.numberformatter.md)
- [NumberFormatter::formatCurrency
»](numberformatter.formatcurrency.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Створює засіб форматування чисел

# NumberFormatter::create

#numfmt_create

# NumberFormatter::\_\_construct

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::create -- numfmt_create --
NumberFormatter::\_\_construct — Створює засіб форматування чисел

### Опис

Об'єктно-орієнтований стиль (метод)

public static **NumberFormatter::create**(string `$locale`, int
`$style`, ?string `$pattern` u003d **`null`**):
?[NumberFormatter](class.numberformatter.md)

Процедурний стиль

**numfmt_create**(string `$locale`, int `$style`, ?string `$pattern` u003d
**`null`**): ?[NumberFormatter](class.numberformatter.md)

Об'єктно-орієнтований стиль (конструктор):

public **NumberFormatter::\_\_construct**(string `$locale`, int
`$style`, ?string `$pattern` u003d **`null`**)

Створює засіб форматування чисел.

### Список параметрів

`locale`
Локаль, у якій буде відформатовано число (назва локалі, наприклад
en_CA).

`style`
Стиль форматування, одна із констант [стилю
форматування](class.numberformatter.md#intl.numberformatter-constants.unumberformatstyle).
Якщо передана **`NumberFormatter::PATTERN_DECIMAL`** або
**`NumberFormatter::PATTERN_RULEBASED`**, то формат числа відкривається з
використанням даного шаблону, який має відповідати
синтаксису, описаному в [»документації ICU
DecimalFormat](http://www.icu-project.org/apiref/icu4c/classDecimalFormat.md#details)
або [» документації ICU
RuleBasedNumberFormat](http://www.icu-project.org/apiref/icu4c/classRuleBasedNumberFormat.md#details),
відповідно.

`pattern`
Рядок шаблону, якщо для вибраного стилю потрібний шаблон.

### Значення, що повертаються

Повертає об'єкт [NumberFormatter](class.numberformatter.md) або
**`null`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---|
| 8.0.0 | pattern тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **numfmt_create()****

` <?php$fmtu003du003dnumfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo numfmt_format($fmt, 1234567.891234567890000)."
";$fmtu003du003dnumfmt_create( 'it', NumberFormatter::SPELLOUT );echo numfmt_format($fmt, 1142)."
";?> `

**Приклад #2 Приклад використання **NumberFormatter::create()****

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );echo $fmt->format(1234567.891234567890000)."
";$fmt u003d new NumberFormatter( 'it', NumberFormatter::SPELLOUT );echo $fmt->format(1142)."
";?> `

Результат виконання цього прикладу:

1.234.567,891
millicentoquarantadue

### Дивіться також

- [numfmt_format()](numberformatter.format.md) - Форматує число
- [numfmt_parse()](numberformatter.parse.md) - Розбирає число
