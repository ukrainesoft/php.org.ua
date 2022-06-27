- [« IntlCalendar::add](intlcalendar.add.md)
- [IntlCalendar::before »](intlcalendar.before.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає, час цього об'єкта пізніше часу переданого об'єкту

# IntlCalendar::after

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::after — Визначає час цього об'єкта пізніше часу
переданого об'єкту

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::after**([IntlCalendar](class.intlcalendar.md)
`$other`): bool

Процедурний стиль

**intlcal_after**([IntlCalendar](class.intlcalendar.md) `$calendar`,
[IntlCalendar](class.intlcalendar.md) `$other`): bool

Повертає, чи відповідає час об'єкта часу аргументу.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`other`
Календар, час якого порівнюватиметься з часом основного
об'єкт.

### Значення, що повертаються

Повертає **`true`**, якщо поточний час цього об'єкта пізніше часу
аргументу `calendar`. Інакше повертає **`false`**.

У разі виникнення помилки також повертається **`false`**. Для
виявлення умов помилки використовуйте
[intl_get_error_code()](function.intl-get-error-code.md) або налаштуйте
викидання
[виключень](intl.configuration.md#ini.intl.use-exceptions) в Intl.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::after()****

` <?php$cal1 u003d IntlCalendar::createInstance();$cal2 u003d clone $cal1;var_dump($cal1->after($cal2), //false        $cal2->after($cal1)); //false$cal1->roll(IntlCalendar::FIELD_MILLISECOND, true);var_dump($cal1->after($cal2), //true        $cal2->after($cal1)); // False `
