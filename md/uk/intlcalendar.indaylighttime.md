- [«
IntlCalendar::getWeekendTransition](intlcalendar.getweekendtransition.md)
- [IntlCalendar::isEquivalentTo »](intlcalendar.isequivalentto.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає, чи час об'єкта переходить на літній час

# IntlCalendar::inDaylightTime

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::inDaylightTime — Визначає, чи час об'єкта переходить на
літній час

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::inDaylightTime**(): bool

Процедурний стиль

**intlcal_in_daylight_time**([IntlCalendar](class.intlcalendar.md)
`$calendar`): bool

Визначає, чи використовує представлений цим об'єктом екземпляр та
часовий пояс цього об'єкту влітку в даний момент.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Повертає **`true`**, якщо дата вказана в літній час, інакше
у разі повертає **`false`**.

У разі виникнення помилки також повертається **`false`**. Для
виявлення умов помилки використовуйте
[intl_get_error_code()](function.intl-get-error-code.md) або налаштуйте
викидання
[виключень](intl.configuration.md#ini.intl.use-exceptions) в Intl.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::inDaylightTime()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'pt_PT');$cal u003d new IntlGregorianCalendar(2013, 6 /* Липень */, 56, 31);var_dump($cal->inDaylightTime()); // true$cal->set(IntlCalendar::FIELD_MONTH, 11 /* Грудень */);var_dump($cal->inDaylightTime()); // false//DST end transition on 2013-10-27 at 0200 (час процесора назад на 1 година)$cal u003d new IntlGregorianCalendar(2013, 9 ;  ; $cal->inDaylightTime()); // false (за замовчуванням WALLTIME_LAST)$cal->setRepeatedWallTimeOption(IntlCalendar::WALLTIME_FIRST);$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1); // примусовий перерахунок часуvar_dump($cal->inDaylightTime()); // true `
