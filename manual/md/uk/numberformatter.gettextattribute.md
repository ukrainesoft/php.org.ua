- [«NumberFormatter::getSymbol](numberformatter.getsymbol.md)
- [NumberFormatter::parseCurrency
»](numberformatter.parsecurrency.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Отримує текстовий атрибут

# NumberFormatter::getTextAttribute

#numfmt_get_text_attribute

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::getTextAttribute -- numfmt_get_text_attribute --
Отримує текстовий атрибут

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::getTextAttribute**(int `$attribute`):
string\|false

Процедурний стиль

**numfmt_get_text_attribute**([NumberFormatter](class.numberformatter.md)
`$formatter`, int `$attribute`): string\|false

Отримує текстовий атрибут, пов'язаний із засобом форматування.
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

### Значення, що повертаються

Повертає значення атрибута у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_get_text_attribute()****

` <?php$fmt u003d numfmt_create( 'de_DE', NumberFormatter::DECIMAL );echo "Prefix: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX
";echo numfmt_format($fmt, -1234567.891234567890000)."
";numfmt_set_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX, "MINUS");echo "Prefix: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX)
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
- [numfmt_get_attribute()](numberformatter.getattribute.md) -
Отримує атрибут
- [numfmt_set_text_attribute()](numberformatter.settextattribute.md) -
Встановлює текстовий атрибут
