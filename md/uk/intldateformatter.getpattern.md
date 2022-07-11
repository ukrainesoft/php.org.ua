- [« IntlDateFormatter::getLocale](intldateformatter.getlocale.md)
- [IntlDateFormatter::getTimeType
»](intldateformatter.gettimetype.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує шаблон, який використовується IntlDateFormatter

# IntlDateFormatter::getPattern

# datefmt_get_pattern

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getPattern -- datefmt_get_pattern — Отримує шаблон,
використовуваний IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getPattern**(): string\|false

Процедурний стиль

**datefmt_get_pattern**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): string\|false

Отримує шаблон, який використовується засобом форматування.

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

Рядок шаблону, який використовується для форматування/розбору або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_pattern()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo 'Шаблон средства форматирования : ' . datefmt_get_pattern($fmt);echo 'Перший відформатований висновок з шаблоном ' . datefmt_format($fmt, 0);datefmt_set_pattern($fmt,'yyyymmdd hh:mm:ss z');echo 'Тепер шаблон засобиформатування : ' . datefmt_get_pattern($fmt);echo 'Другий відформатований висновок з шаблоном ' . datefmt_format($fmt, 0);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo 'Шаблон средства форматирования : ' . $fmt->getPattern();echo 'Перший відформатований висновок з шаблоном ' . $fmt->format(0);$fmt->setPattern('yyyymmdd hh:mm:ss z');echo 'Тепер шаблон засоби форматування : ' . $fmt->getPattern();echo 'Другий відформатований висновок з шаблоном ' . $fmt->format(0);?> `

Результат виконання цього прикладу:

Шаблон засобу форматування: MM/dd/yyyy
Перший відформатований висновок із шаблоном 12/31/1969
Тепер шаблон засобу форматування: yyyymmdd hh:mm:ss z
Другий відформатований висновок із шаблоном 19690031 04:00:00 PST

### Дивіться також

- [datefmt_set_pattern()](intldateformatter.setpattern.md) -
Встановлює шаблон, який використовується IntlDateFormatter
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
