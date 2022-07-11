- [«
IntlCalendar::getActualMaximum](intlcalendar.getactualmaximum.md)
- [IntlCalendar::getAvailableLocales
»](intlcalendar.getavailablelocales.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Мінімальне значення для поля з урахуванням поточного часу об'єкта

# IntlCalendar::getActualMinimum

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getActualMinimum — Мінімальне значення для поля з урахуванням
поточного часу об'єкту

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getActualMinimum**(int `$field`): int\|false

Процедурний стиль

**intlcal_get_actual_minimum**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$field`): int\|false

Повертає відносне мінімальне значення поля з урахуванням поточного
часу. Точна семантика залежить від поля, але загалом це
значення, яке можна було б отримати, якби встановити значення
поля на [найбільший відносний
мінімум](intlcalendar.getgreatestminimum.md) для поля та зменшувати його
доти, доки не буде досягнуто [глобальний
мінімум](intlcalendar.getminimum.md) або значення поля буде обернуто
навколо, в якому значення, що повертається, буде глобальним мінімумом або
значенням до перенесення відповідно.

Для григоріанського календаря це завжди те саме, що й
[IntlCalendar::getMinimum()](intlcalendar.getminimum.md).

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

### Дивіться також

- [IntlCalendar::getMinimum()](intlcalendar.getminimum.md) -
Отримує глобальне мінімальне значення поля
- [IntlCalendar::getGreatestMinimum()](intlcalendar.getgreatestminimum.md) -
Отримує найбільше локальне мінімальне значення поля
- [IntlCalendar::getActualMaximum()](intlcalendar.getactualmaximum.md) -
Максимальне значення для поля з урахуванням поточного часу об'єкта
