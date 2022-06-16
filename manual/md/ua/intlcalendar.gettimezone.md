- [« IntlCalendar::getTime](intlcalendar.gettime.md)
- [IntlCalendar::getType »](intlcalendar.gettype.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує часовий пояс об'єкту

# IntlCalendar::getTimeZone

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getTimeZone — Отримує часовий пояс об'єкту

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getTimeZone**():
[IntlTimeZone](class.intltimezone.md)\|false

Процедурний стиль

**intlcal_get_time_zone**([IntlCalendar](class.intlcalendar.md)
`$calendar`): [IntlTimeZone](class.intltimezone.md)\|false

Повертає об'єкт [IntlTimeZone](class.intltimezone.md), пов'язаний з
календарем.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Об'єкт [IntlTimeZone](class.intltimezone.md), відповідний тому,
який використовується усередині об'єкта. Повертає **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getTimeZone()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'en_US');$cal u003d IntlCalendar::createInstance();print_r($cal->getTimeZone() );$cal->setTimeZone('UTC');print_r($cal->getTimeZone());$cal u003d IntlCalendar::fromDateTime('2012-01-01 00:00:00 GMT+03:33') ;print_r($cal->getTimeZone()); `

Результат виконання цього прикладу:

IntlTimeZone Object
(
[valid] u003d> 1
[id] u003d> Europe/Lisbon
[rawOffset] u003d> 0
[currentOffset] u003d> 3600000
)
IntlTimeZone Object
(
[valid] u003d> 1
[id] u003d> UTC
[rawOffset] u003d> 0
[currentOffset] u003d> 0
)
IntlTimeZone Object
(
[valid] u003d> 1
[id] u003d> GMT+03:33
[rawOffset] u003d> 12780000
[currentOffset] u003d> 12780000
)

### Дивіться також

- [IntlCalendar::setTimeZone()](intlcalendar.settimezone.md) -
Встановлює часовий пояс, який використовується календарем
- [IntlCalendar::createInstance()](intlcalendar.createinstance.md) -
Створює новий об'єкт IntlCalendar
- [IntlGregorianCalendar::\_\_construct()](intlgregoriancalendar.construct.md) -
Конструктор класу григоріанського календаря
