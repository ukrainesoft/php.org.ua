- [«
IntlDateFormatter::formatObject](intldateformatter.formatobject.md)
- [IntlDateFormatter::getDateType
»](intldateformatter.getdatetype.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує тип календаря, який використовується IntlDateFormatter

# IntlDateFormatter::getCalendar

# datefmt_get_calendar

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getCalendar -- datefmt_get_calendar — Отримує тип
календаря, який використовується IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getCalendar**(): int\|false

Процедурний стиль

**datefmt_get_calendar**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): int\|false

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

[Тип
календаря](class.intldateformatter.md#intl.intldateformatter-constants.calendartypes),
використовуваний сервіс форматування. Або
**`IntlDateFormatter::TRADITIONAL`**, або
**`IntlDateFormatter::GREGORIAN`**. Повертає **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_calendar()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип календаря средства форматирования : ' . datefmt_get_calendar($fmt);datefmt_set_calendar($fmt, IntlDateFormatter::TRADITIONAL);echo 'Тепер тип календаря засоби форматування : ' . datefmt_get_calendar($fmt);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип календаря средства форматирования : ' . $fmt->getCalendar();$fmt->setCalendar(IntlDateFormatter::TRADITIONAL);echo 'Тепер тип календаря засоби форматування : ' . $fmt->getCalendar();?> `

Результат виконання цього прикладу:

Тип календаря Засоби форматування: 1
Тепер тип календаря засобу форматування: 0

### Дивіться також

- [datefmt_get_calendar_object()](intldateformatter.getcalendarobject.md) -
Отримує копію об'єкта календаря засобу форматування
- [datefmt_set_calendar()](intldateformatter.setcalendar.md) -
Встановлює тип календаря, який використовує засіб форматування
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
