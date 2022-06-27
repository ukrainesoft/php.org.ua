- [«
IntlDateFormatter::getCalendar](intldateformatter.getcalendar.md)
- [IntlDateFormatter::getErrorCode
»](intldateformatter.geterrorcode.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує тип дати, що використовується IntlDateFormatter

# IntlDateFormatter::getDateType

# datefmt_get_datetype

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getDateType -- datefmt_get_datetype — Отримує тип
дати, що використовується IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getDateType**(): int\|false

Процедурний стиль

**datefmt_get_datetype**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): int\|false

Отримує тип дати, який використовується засобом форматування.

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

Значення поточного [типу
дати](class.intldateformatter.md#intl.intldateformatter-constants)
засоби форматування або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_datetype()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип даты средства форматирования : ' . datefmt_get_datetype($fmt);echo 'Перший відформатований висновок з типом дати ' . datefmt_format($fmt, 0);$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::SHORT,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Теперь тип даты средства форматирования : ' . datefmt_get_datetype($fmt);echo 'Другий відформатований висновок з типом дати ' . datefmt_format($fmt, 0);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип даты средства форматирования : ' . $fmt->getDateType();echo 'Перший відформатований висновок з типом дати ' . $fmt->format(0);$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::SHORT,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Теперь тип даты средства форматирования : ' . $fmt->getDateType();echo 'Другий відформатований висновок з типом дати ' . $fmt->format(0);?> `

Результат виконання цього прикладу:

Тип дати засобу форматування: 0
Перший відформатований висновок з типом дати Wednesday, December 31, 1969 4:00:00 PM PT
Тепер тип дати засобу форматування: 2
Другий відформатований висновок з типом дати 12/31/69 4:00:00 PM PT

### Дивіться також

- [datefmt_get_timetype()](intldateformatter.gettimetype.md) -
Отримує тип часу, який використовується IntlDateFormatter
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
