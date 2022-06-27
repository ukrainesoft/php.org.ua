- [«
IntlCalendar::getFirstDayOfWeek](intlcalendar.getfirstdayofweek.md)
- [IntlCalendar::getKeywordValuesForLocale
»](intlcalendar.getkeywordvaluesforlocale.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує найбільше локальне мінімальне значення поля

# IntlCalendar::getGreatestMinimum

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getGreatestMinimum — Отримує найбільше локальне
мінімальне значення поля

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getGreatestMinimum**(int `$field`): int\|false

Процедурний стиль

**intlcal_get_greatest_minimum**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$field`): int\|false

Повертає найбільше локальне мінімальне значення поля. Це повинно
бути значення, більше або рівне значенню, що повертається
[IntlCalendar::getActualMinimum()](intlcalendar.getactualminimum.md),
яке, у свою чергу, більше або дорівнює значенню, що повертається
[IntlCalendar::getMinimum()](intlcalendar.getminimum.md). Усі ці три
функції повертають те саме значення для григоріанського календаря.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Ціле число (int), що представляє значення поля або **`false`** у разі
виникнення помилки.
