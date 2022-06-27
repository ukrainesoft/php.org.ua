- [«NumberFormatter::getLocale](numberformatter.getlocale.md)
- [NumberFormatter::getSymbol »](numberformatter.getsymbol.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Отримує шаблон засобу форматування

# NumberFormatter::getPattern

#numfmt_get_pattern

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::getPattern -- numfmt_get_pattern — Отримує шаблон
засоби форматування

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::getPattern**(): string\|false

Процедурний стиль

**numfmt_get_pattern**([NumberFormatter](class.numberformatter.md)
`$formatter`): string\|false

Витягує шаблон, який використовується засобом форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

### Значення, що повертаються

Рядок (string) шаблону, використовуваного засобом форматування або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_get_pattern()****

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
- [numfmt_set_pattern()](numberformatter.setpattern.md) -
Встановлює шаблон засобу форматування
- [numfmt_create()](numberformatter.create.md) - Створює засіб
форматування чисел
