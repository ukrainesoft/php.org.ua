- [« IntlCalendar::fromDateTime](intlcalendar.fromdatetime.md)
- [IntlCalendar::getActualMaximum
»](intlcalendar.getactualmaximum.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує значення поля

# IntlCalendar::get

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::get — Отримує значення поля

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::get**(int `$field`): int\|false

Процедурний стиль

**intlcal_get**([IntlCalendar](class.intlcalendar.md) `$calendar`, int
`$field`): int\|false

Отримує значення певного поля.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Ціле число із значенням поля часу.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::get()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'en_US');$class u003d new ReflectionClass('IntlCalendar');$fields u003d array();foreach ($class->getConstants() as $name u003d> $val) {    if (strpos($name, 'FIELD_') !u003du003d 0 || $val > 22)         | $fields[$val] u003d $name;}$cal u003d IntlCalendar::createInstance(); // current timevar_dump(IntlDateFormatter::formatObject($cal));foreach ($fields as $val u003d> $name) {    echo "$val ($name)", "
", $cal->get($val), "
";} `

Результат виконання цього прикладу:

string(23) "Jul 1, 2013, 4:44:44 AM"
0 (FIELD_ERA)
1
1 (FIELD_YEAR)
2013
2 (FIELD_MONTH)
6
3 (FIELD_WEEK_OF_YEAR)
27
4 (FIELD_WEEK_OF_MONTH)
1
5 (FIELD_DAY_OF_MONTH)
1
6 (FIELD_DAY_OF_YEAR)
182
7 (FIELD_DAY_OF_WEEK)
2
8 (FIELD_DAY_OF_WEEK_IN_MONTH)
1
9 (FIELD_AM_PM)
        0
10 (FIELD_HOUR)
4
11 (FIELD_HOUR_OF_DAY)
4
12 (FIELD_MINUTE)
44
13 (FIELD_SECOND)
44
14 (FIELD_MILLISECOND)
551
15 (FIELD_ZONE_OFFSET)
        0
16 (FIELD_DST_OFFSET)
3600000
17 (FIELD_YEAR_WOY)
2013
18 (FIELD_DOW_LOCAL)
2
19 (FIELD_EXTENDED_YEAR)
2013
20 (FIELD_JULIAN_DAY)
2456475
21 (FIELD_MILLISECONDS_IN_DAY)
17084551
22 (FIELD_IS_LEAP_MONTH)
        0
