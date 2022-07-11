- [«
IntlCalendar::getMinimalDaysInFirstWeek](intlcalendar.getminimaldaysinfirstweek.md)
- [IntlCalendar::getNow »](intlcalendar.getnow.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує глобальне мінімальне значення поля

# IntlCalendar::getMinimum

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getMinimum — Отримує глобальне мінімальне значення поля

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getMinimum**(int `$field`): int\|false

Процедурний стиль

**intlcal_get_minimum**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$field`): int\|false

Отримує глобальне мінімальне значення поля у цьому конкретному
календарі. Це значення менше або дорівнює значенню, що повертається
[IntlCalendar::getActualMinimum()](intlcalendar.getactualminimum.md),
яке, у свою чергу, менше або дорівнює значенню, що повертається
[IntlCalendar::getGreatestMinimum()](intlcalendar.getgreatestminimum.md).
Для григоріанського календаря ці три функції завжди повертають одне і те
значення (для кожного поля).

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Ціле число (int), що має значення для даного поля або
**`false`** у разі виникнення помилки.
