- [« IntlCalendar::getErrorMessage](intlcalendar.geterrormessage.md)
- [IntlCalendar::getGreatestMinimum
»](intlcalendar.getgreatestminimum.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- отримує перший день тижня для мовного стандарту календаря

# IntlCalendar::getFirstDayOfWeek

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getFirstDayOfWeek — Отримує перший день тижня для
мовного стандарту календаря

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getFirstDayOfWeek**(): int\|false

Процедурний стиль

**intlcal_get_first_day_of_week**([IntlCalendar](class.intlcalendar.md)
`$calendar`): int\|false

День тижня, який вважається початком тижня: або значення по
замовчуванням для цього мовного стандарту, або значення, встановлене з
допомогою
[IntlCalendar::setFirstDayOfWeek()](intlcalendar.setfirstdayofweek.md).

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Одна з констант: **`IntlCalendar::DOW_SUNDAY`**,
**`IntlCalendar::DOW_MONDAY`**, …, **`IntlCalendar::DOW_SATURDAY`** або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getFirstDayOfWeek()****

` <?phpini_set('date.timezone', 'UTC');$cal1 u003d IntlCalendar::createInstance(NULL, 'es_ES');var_dump($cal1->getFirstDayOfWeek()); // Понеділок$cal1->set(2013, 1 /* Лютий */, 3); // Неділяvar_dump($cal1->get(IntlCalendar::FIELD_WEEK_OF_YEAR)); // 5$cal2 u003d IntlCalendar::createInstance(NULL, 'en_US');var_dump($cal2->getFirstDayOfWeek()); // Неділя$cal2->set(2013, 1 /* Лютий */, 3); // Неділяvar_dump($cal2->get(IntlCalendar::FIELD_WEEK_OF_YEAR)); // 6`

Результат виконання цього прикладу:

int(2)
int(5)
int(1)
int(6)

### Дивіться також

- [IntlCalendar::setFirstDayOfWeek()](intlcalendar.setfirstdayofweek.md) -
Встановлює день, який є початком тижня
