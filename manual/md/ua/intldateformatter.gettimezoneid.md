- [«
IntlDateFormatter::getTimeType](intldateformatter.gettimetype.md)
- [IntlDateFormatter::getCalendarObject
»](intldateformatter.getcalendarobject.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує ідентифікатор часового поясу, який використовується
IntlDateFormatter

# IntlDateFormatter::getTimeZoneId

# datefmt_get_timezone_id

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getTimeZoneId -- datefmt_get_timezone_id — Отримує
ідентифікатор часового поясу, який використовується IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getTimeZoneId**(): string\|false

Процедурний стиль

**datefmt_get_timezone_id**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): string\|false

Отримує ідентифікатор часового поясу, який використовується IntlDateFormatter.

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

Рядок ідентифікатора часового поясу, використовуваного цим засобом
форматування або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_timezone_id()****

`<?php$fmt u003d datefmt_create(   'en_US',   IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    America/Los_Angeles', | datefmt_get_timezone_id($fmt) . "
";datefmt_set_timezone($fmt, 'Europe/Madrid');echo 'Тепер timezone_id засоби форматування: ' . datefmt_get_timezone_id($fmt);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'timezone_id средства форматирования: ' . $fmt->getTimezoneId() . "
";$fmt->setTimezone('Europe/Madrid');echo 'Тепер timezone_id засоби форматування: ' . $fmt->getTimezoneId();?> `

Результат виконання цього прикладу:

timezone_id засоби форматування: America/Los_Angeles
Тепер timezone_id засоби форматування: Europe/Madrid

### Дивіться також

- [datefmt_set_timezone()](intldateformatter.settimezone.md) -
Встановлює часовий пояс засобу форматування
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
