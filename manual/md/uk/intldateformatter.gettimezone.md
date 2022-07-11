- [«
IntlDateFormatter::getCalendarObject](intldateformatter.getcalendarobject.md)
- [IntlDateFormatter::isLenient »](intldateformatter.islenient.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує часовий пояс засобу форматування

# IntlDateFormatter::getTimeZone

#datefmt_get_timezone

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL intl u003d 3.0.0)

IntlDateFormatter::getTimeZone -- datefmt_get_timezone — Отримує
часовий пояс засобу форматування

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getTimeZone**():
[IntlTimeZone](class.intltimezone.md)\|false

Процедурний стиль

**datefmt_get_timezone**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): [IntlTimeZone](class.intltimezone.md)\|false

Повертає об'єкт [IntlTimeZone](class.intltimezone.md),
представляє часовий пояс, який використовуватиметься цим об'єктом
для форматування дати та часу. При форматуванні об'єктів
[IntlCalendar](class.intlcalendar.md) та
[DateTime](class.datetime.md) за допомогою цього
[IntlDateFormatter](class.intldateformatter.md), використовуваний вартовий
пояс буде той, що повертається цим методом, а не той, що
пов'язаний з об'єктами, що форматуються.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Пов'язаний об'єкт [IntlTimeZone](class.intltimezone.md) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlDateFormatter::getTimeZone()****

` <?php$madrid u003d IntlDateFormatter::create(NULL, NULL, NULL, 'Europe/Madrid');$lisbon u003d IntlDateFormatter::create(NULL, NULL, NULL, 'Europe/Lisbon'); ->getTimezone());echo$madrid->getTimezone()->getDisplayName(        false, IntlTimeZone::DISPLAY_GENERIC_LOCATION, "en_US"), "
";echo $lisbon->getTimeZone()->getId(), "
";//Ідентифікатор також можна отримати з допомогою ->getTimezoneId()echo $lisbon->getTimeZoneId(), "
";

Результат виконання цього прикладу:

object(IntlTimeZone)#4 (4) {
["valid"]u003d>
bool(true)
["id"]u003d>
string(13) "Europe/Madrid"
["rawOffset"]u003d>
int(3600000)
["currentOffset"]u003d>
int(7200000)
}
Spain Time
Europe/Lisbon
Europe/Lisbon

### Дивіться також

- [IntlDateFormatter::getTimeZoneId()](intldateformatter.gettimezoneid.md) -
Отримує ідентифікатор часового поясу, який використовується
IntlDateFormatter
- [IntlDateFormatter::setTimeZone()](intldateformatter.settimezone.md) -
Встановлює часовий пояс засобу форматування
- [IntlTimeZone](class.intltimezone.md)
