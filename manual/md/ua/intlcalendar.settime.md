- [«
IntlCalendar::setSkippedWallTimeOption](intlcalendar.setskippedwalltimeoption.md)
- [IntlCalendar::setTimeZone »](intlcalendar.settimezone.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює календарний час у мілісекундах з початку епохи Unix

# IntlCalendar::setTime

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::setTime — Встановлює календарний час у мілісекундах
з початку епохи Unix

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::setTime**(float `$timestamp`): bool

Процедурний стиль

**intlcal_set_time**([IntlCalendar](class.intlcalendar.md)
`$calendar`, float `$timestamp`): bool

Встановлює момент, наданий об'єктом. Момент представлений числом
з плаваючою точкою (float), значення якого має бути цілим числом
мілісекунд, що пройшли з початку епохи Unix (1 січня 1970 00:00:00.000
UTC), без урахування додаткових секунд. Усі значення полів будуть
відповідно перераховані.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`timestamp`
Момент, представлений кількістю мілісекунд між цим моментом та
епохою Unix, без урахування додаткових секунд.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::setTime()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'fr_FR');$cal u003d new IntlGregorianCalendar(2013, 5 /* May */, 0, 0);echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "
";/* В Europe/Lisbon 27 жовтня 2013 року в 02:00 години перекладаються на одну годину назад,  а а годинний пояс - с UTC+0 C| 27 00:30:00 UTC') * 1000.);echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "
";$cal->setTime(strtotime('2013-10-27 01:30:00 UTC') * 1000.);echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "
";

Результат виконання цього прикладу:

samedi 1 juin 2013 12:00:00 heure avancée d’Europe de l’Ouest
dimanche 27 жовтня 2013 01:30:00 heure avancée d’Europe de l’Ouest
dimanche 27 жовтня 2013 01:30:00 heure normale d’Europe de l’Ouest
