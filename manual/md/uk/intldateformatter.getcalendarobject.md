- [«
IntlDateFormatter::getTimeZoneId](intldateformatter.gettimezoneid.md)
- [IntlDateFormatter::getTimeZone
»](intldateformatter.gettimezone.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує копію об'єкта календаря засобу форматування

# IntlDateFormatter::getCalendarObject

# datefmt_get_calendar_object

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL intl u003d 3.0.0)

IntlDateFormatter::getCalendarObject -- datefmt_get_calendar_object --
Отримує копію об'єкта календаря засобу форматування

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getCalendarObject**():
[IntlCalendar](class.intlcalendar.md)\|false\|null

Процедурний стиль

**datefmt_get_calendar_object**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): [IntlCalendar](class.intlcalendar.md)\|false\|null

Отримує копію об'єкта календаря, який використовується для внутрішніх цілей
засобом форматування. Календар матиме тип (наприклад,
грегоріанський, японський, буддійський, рок, перська, ісламська і т.д.)
та часовий пояс, які відповідають типу та часовому поясу,
використовуваним засобом форматування. Дата та час об'єкта не вказано.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Копія внутрішнього об'єкта календаря, використовуваного засобом
форматування або **`null`**, якщо нічого не було встановлено або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**IntlDateFormatter::getCalendarObject()****

`<?php$formatteru003du003dIntlDateFormatter::create( | (   $cal->getType(),   $cal->getTimeZone(),   $cal->getLocale(Locale::VALID_LOCALE)); `

Результат виконання цього прикладу:

string(7) "islamic"
object(IntlTimeZone)#3 (4) {
["valid"]u003d>
bool(true)
["id"]u003d>
string(9) "GMT-01:00"
["rawOffset"]u003d>
int(-3600000)
["currentOffset"]u003d>
int(-3600000)
}
string(5) "fr_FR"

### Дивіться також

- [IntlDateFormatter::getCalendar()](intldateformatter.getcalendar.md) -
Отримує тип календаря, який використовується IntlDateFormatter
- [IntlDateFormatter::setCalendar()](intldateformatter.setcalendar.md) -
Встановлює тип календаря, який використовує засіб форматування
- [IntlCalendar](class.intlcalendar.md)
