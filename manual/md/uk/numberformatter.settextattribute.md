- [«NumberFormatter::setSymbol](numberformatter.setsymbol.md)
- [Locale »](class.locale.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Встановлює текстовий атрибут

# NumberFormatter::setTextAttribute

#numfmt_set_text_attribute

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::setTextAttribute -- numfmt_set_text_attribute --
Встановлює текстовий атрибут

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::setTextAttribute**(int `$attribute`, string
`$value`): bool

Процедурний стиль

**numfmt_set_text_attribute**([NumberFormatter](class.numberformatter.md)
`$formatter`, int `$attribute`, string `$value`): bool

Встановлює текстовий атрибут, пов'язаний із засобом форматування.
Приклад текстового атрибута є суфікс для позитивних чисел.
Якщо засіб форматування не розуміє атрибут, видається помилка
**`U_UNSUPPORTED_ERROR`**. Засоби форматування на основі правил
розуміють тільки **`NumberFormatter::DEFAULT_RULESET`** та
**`NumberFormatter::PUBLIC_RULESETS`**.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`attribute`
Специфікатор атрибута - одна із констант [текстового
атрибута](class.numberformatter.md#intl.numberformatter-constants.unumberformattextattribute).

`value`
Текст значення атрибута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_set_text_attribute()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo "Префікс: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PR
";echo numfmt_format($fmt, -1234567.891234567890000)."
";numfmt_set_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX, "MINUS");echo "Префікс: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREF
";echo numfmt_format($fmt, -1234567.891234567890000)."
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );echo "Префікс: ".$fmt->getTextAttribute(NumberFormatter::NEGATIVE_PREFIX)."
";echo $fmt->format(-1234567.891234567890000)."
";$fmt->setTextAttribute(NumberFormatter::NEGATIVE_PREFIX, "MINUS");echo "Префікс: ".$fmt->getTextAttribute(NumberFormatter::NEGATIVE_PREFIX)."
";echo $fmt->format(-1234567.891234567890000)."
";?> `

Результат виконання цього прикладу:

Префікс: -
-1.234.567,891
Префікс: MINUS
MINUS1.234.567,891

### Дивіться також

- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
- [numfmt_get_text_attribute()](numberformatter.gettextattribute.md) -
Отримує текстовий атрибут
- [numfmt_set_attribute()](numberformatter.setattribute.md) -
Встановлює атрибут
