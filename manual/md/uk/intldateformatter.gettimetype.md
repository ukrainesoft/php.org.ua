- [« IntlDateFormatter::getPattern](intldateformatter.getpattern.md)
- [IntlDateFormatter::getTimeZoneId
»](intldateformatter.gettimezoneid.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує тип часу, який використовується IntlDateFormatter

# IntlDateFormatter::getTimeType

# datefmt_get_timetype

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getTimeType -- datefmt_get_timetype — Отримує тип
часу, що використовується IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getTimeType**(): int\|false

Процедурний стиль

**datefmt_get_timetype**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): int\|false

Повертає тип часу, який використовується засобом форматування.

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

Значення поточного [типу
дати](class.intldateformatter.md#intl.intldateformatter-constants)
засоби форматування або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_timetype()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип времени средства форматирования : ' . datefmt_get_timetype($fmt);echo 'Перший відформатований висновок ' . datefmt_format($fmt, 0);$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::SHORT,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Теперь тип времени средства форматирования : ' . datefmt_get_timetype($fmt);echo 'Другий відформатований висновок ' . datefmt_format($fmt, 0);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип времени средства форматирования : ' . $fmt->getTimeType();echo 'Перший відформатований висновок ' . $fmt->format(0);$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::SHORT,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Теперь тип времени средства форматирования : ' . $fmt->getTimeType();echo 'Другий відформатований висновок ' . $fmt->format(0);?> `

Результат виконання цього прикладу:

Тип часу засобу форматування: 0
Перший відформатований висновок Wednesday, December 31, 1969 4:00:00 PM PT
Тепер тип часу засобу форматування: 3
Другий відформатований висновок Wednesday, December 31, 1969 4:00 PM

### Дивіться також

- [datefmt_get_datetype()](intldateformatter.getdatetype.md) -
Отримує тип дати, який використовується IntlDateFormatter
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
