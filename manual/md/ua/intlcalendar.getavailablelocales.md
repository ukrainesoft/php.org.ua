- [«
IntlCalendar::getActualMinimum](intlcalendar.getactualminimum.md)
- [IntlCalendar::getDayOfWeekType
»](intlcalendar.getdayofweektype.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- отримує масив мовних стандартів, для яких є дані

# IntlCalendar::getAvailableLocales

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getAvailableLocales — Отримує масив мовних стандартів,
для яких є дані

### Опис

Об'єктно-орієнтований стиль

public static **IntlCalendar::getAvailableLocales**(): array

Процедурний стиль

**intlcal_get_available_locales**(): array

Надає список мовних стандартів, для яких встановлено
календарів. Починаючи з ICU 51, це список усіх встановлених мовних
стандартів ICU.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) рядків (string), кожен з яких відповідає мовному
стандарту.

### Приклади

**Приклад #1 Приклад використання
**IntlCalendar::getAvailableLocales()****

` <?phpprint_r(IntlCalendar::getAvailableLocales()); `

Результат виконання цього прикладу:

Array
(
[0] u003d> af
[1] u003d> af_NA
[2] u003d> af_ZA
[3] u003d> agq
[4] u003d> agq_CM
[5] u003d> ak
[6] u003d> ak_GH
[7] u003d> am
[8] u003d> am_ET
[9] u003d> ar
[10] u003d> ar_001
[11] u003d> ar_AE
[12] u003d> ar_BH
[13] u003d> ar_DJ
… output abbreviated …
[595] u003d> zh_Hant_HK
[596] u003d> zh_Hant_MO
[597] u003d> zh_Hant_TW
[598] u003d> zu
[599] u003d> zu_ZA
)
