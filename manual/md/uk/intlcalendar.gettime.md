- [«
IntlCalendar::getSkippedWallTimeOption](intlcalendar.getskippedwalltimeoption.md)
- [IntlCalendar::getTimeZone »](intlcalendar.gettimezone.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує час, представлений на даний момент об'єктом

# IntlCalendar::getTime

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getTime — Отримує час, наданий в даний момент
об'єктом

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getTime**(): float\|false

Процедурний стиль

**intlcal_get_time**([IntlCalendar](class.intlcalendar.md)
`$calendar`): float\|false

Повертає час, пов'язаний з цим об'єктом, виражений у мілісекундах
від початку епохи Unix.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Число з плаваючою точкою (float), що представляє кількість мілісекунд,
що пройшли з початку епохи Unix (1 січня 1970 00:00:00 UTC) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getTime()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'en_US');$cal u003d new IntlGregorianCalendar(2013, 4 /* Май */, 0, 0);$time u003d $cal->getTime();var_dump($time, $time / 1000 u003du003d strtotime('2013-05-01 00:00:00')); // true `

Результат виконання цього прикладу:

float(1367362800000)
bool(true)

### Дивіться також

- [IntlCalendar::getNow()](intlcalendar.getnow.md) - Отримує число,
що представляє поточний час
