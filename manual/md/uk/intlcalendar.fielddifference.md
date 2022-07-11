- [« IntlCalendar::equals](intlcalendar.equals.md)
- [IntlCalendar::fromDateTime »](intlcalendar.fromdatetime.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- обчислює різницю між заданим часом та часом об'єкта

# IntlCalendar::fieldDifference

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::fieldDifference — Обчислює різницю між заданим
часом та часом об'єкту

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::fieldDifference**(float `$timestamp`, int
`$field`): int\|false

Процедурний стиль

**intlcal_field_difference**([IntlCalendar](class.intlcalendar.md)
`$calendar`, float `$timestamp`, int `$field`): int\|false

Повертає різницю між заданим часом та часом, встановленим для
об'єкта щодо кількості, вказаної в параметрі `field`.

Метод призначений для послідовного виклику, спочатку від найбільш
значною областю інтересів до менш значної області. В якості
побічного ефекту, значення календаря для вказаного поля збільшується
на повернену суму.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`timestamp`
Час, з яким порівнюється кількість, представлена `field`. Щоб
результат був позитивним, час, зазначений у цьому параметрі
випереджати час об'єкта, якого викликається метод.

`field`
Поле, що становить кількість, що порівнюється.

Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Повертає різницю часу (зі знаком) в одиницях виміру, пов'язаних
із зазначеним полем або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::fieldDifference()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'fr_FR');$cal1 u003d IntlCalendar::fromDateTime('2012-02-29 09:00:1 ');$cal2 u003d IntlCalendar::fromDateTime('2013-03-01 09:19:29');$time u003d $cal2->getTime();echo "Час до: ", IntlDateFormatter::formatObject$ ), "
";printf(    "Різниця в часі: %d рік(років), %d місяць(ів), "  . "%d день(днів), %d годин(ів) і %d хвилин(хвилин)
",   $cal1->fieldDifference($time, IntlCalendar::FIELD_YEAR),   $cal1->fieldDifference($time, IntlCalendar::FIELD_MONTH),    $cal1->fieldDifference$| >fieldDifference($time, IntlCalendar::FIELD_HOUR_OF_DAY),    $cal1->fieldDifference($time, IntlCalendar::FIELD_MINUTE)); "Час після: ", IntlDateFormatter::formatObject($cal1), "
";

Результат виконання цього прикладу:

Час до: 29 févr. 2012 09:00:11
Різниця в часі: 1 рік(років), 0 місяць(ів), 1 день(днів), 0 годин(ів) and 19 хвилину(хвилин)
Час після: 1 mars 2013 09:19:11
