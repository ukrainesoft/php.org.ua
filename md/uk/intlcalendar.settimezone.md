- [« IntlCalendar::setTime](intlcalendar.settime.md)
- [IntlCalendar::toDateTime »](intlcalendar.todatetime.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює часовий пояс, що використовується календарем

# IntlCalendar::setTimeZone

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::setTimeZone — Встановлює часовий пояс, який використовується
календарем

### Опис

Об'єктно-орієнтований стиль

public
**IntlCalendar::setTimeZone**([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone`): bool

Процедурний стиль

**intlcal_set_time_zone**([IntlCalendar](class.intlcalendar.md)
`$calendar`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone`): bool

Визначає новий часовий пояс календаря. Час, представлений
об'єктом, що зберігається на шкоду значенням поля.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`timezone`
Новий часовий пояс, який використовуватиме календар. Його можна
вказати такими способами:

- Якщо **`null`**, то буде використаний часовий пояс за замовчуванням,
задана в ini-налаштування
[date.timezone](datetime.configuration.md#ini.date.timezone) або
за допомогою функції
[date_default_timezone_set()](function.date-default-timezone-set.md)
та повернена функцією
[date_default_timezone_get()](function.date-default-timezone-get.md).

- Об'єкт класу [IntlTimeZone](class.intltimezone.md).

- Об'єкт класу [DateTimeZone](class.datetimezone.md). Його
ідентифікатор буде вилучено і на його основі буде створено об'єкт
часового поясу ICU; часовий пояс буде збережено в базі даних ICU, а
не PHP.

- Рядок, що є коректним ідентифікатором часового поясу ICU.
Дивіться
[IntlTimeZone::createTimeZoneIDEnumeration()](intltimezone.createtimezoneidenumeration.md).
"Сирі" зсуви типу "GMT+08:30" також підтримуються.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::setTimeZone()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'es_ES');$cal u003d new IntlGregorianCalendar(2013, 5 /* May */, 0, 0);echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "
";echo "(instant {$cal->getTime()})
";$cal->setTimeZone(IntlTimeZone::getGMT());echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "
";echo "(instant {$cal->getTime()})
";$cal->setTimeZone('GMT+03:33');echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "
";echo "(instant {$cal->getTime()})
";

Результат виконання цього прикладу:

sábado, 1 de junio de 2013 12:00:00 Hora de verano de Europa occidental
(instant 1370084400000)
sábado, 1 de junio de 2013 11:00:00 GMT
(instant 1370084400000)
sábado, 1 de junio de 2013 14:33:00 GMT+03:33
(instant 1370084400000)
