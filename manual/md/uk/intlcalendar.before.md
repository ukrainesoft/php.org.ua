- [« IntlCalendar::after](intlcalendar.after.md)
- [IntlCalendar::clear »](intlcalendar.clear.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає час цього об'єкта раніше часу переданого об'єкта

# IntlCalendar::before

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::before — Визначає час цього об'єкта раніше часу
переданого об'єкту

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::before**([IntlCalendar](class.intlcalendar.md)
`$other`): bool

Процедурний стиль

**intlcal_before**([IntlCalendar](class.intlcalendar.md) `$calendar`,
[IntlCalendar](class.intlcalendar.md) `$other`): bool

Повертає, чи передує час об'єкта часу аргументу.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`other`
Календар, час якого порівнюватиметься з часом основного
об'єкт.

### Значення, що повертаються

Повертає **`true`**, якщо поточний час цього об'єкта завчасно
аргументу `calendar`. Інакше повертає **`false`**.

У разі виникнення помилки також повертається **`false`**. Для
виявлення умов помилки використовуйте
[intl_get_error_code()](function.intl-get-error-code.md) або налаштуйте
викидання
[виключень](intl.configuration.md#ini.intl.use-exceptions) в Intl.
