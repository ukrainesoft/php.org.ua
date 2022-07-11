- [« IntlCalendar::set](intlcalendar.set.md)
- [IntlCalendar::setLenient »](intlcalendar.setlenient.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює день, який є початком тижня

# IntlCalendar::setFirstDayOfWeek

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::setFirstDayOfWeek — Встановлює день, який є
початком тижня

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::setFirstDayOfWeek**(int `$dayOfWeek`): bool

Процедурний стиль

**intlcal_set_first_day_of_week**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$dayOfWeek`): bool

Визначає день тижня, що вважається початком тижня. Це впливає на
поведінка полів, які залежать від концепції початку та кінця тижня,
наприклад: **`IntlCalendar::FIELD_WEEK_OF_YEAR`** та
**`IntlCalendar::FIELD_YEAR_WOY`**.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`dayOfWeek`
Одна з констант **`IntlCalendar::DOW_SUNDAY`**,
**`IntlCalendar::DOW_MONDAY`**, …, **`IntlCalendar::DOW_SATURDAY`**.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::setFirstDayOfWeek()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'es_ES');$cal u003d IntlCalendar::createInstance();$cal->set(2013, 5 /* Червень */, 30); // Неділяvar_dump($cal->getFirstDayOfWeek()); // 2 (Понеділок)echo IntlDateFormatter::formatObject($cal, <<<EOD'місний день тижня: 'cc'тиждень місяця    : 'W'тиждень року      :
";$cal->setFirstDayOfWeek(IntlCalendar::DOW_SUNDAY);echo IntlDateFormatter::formatObject($cal, <<<EOD'місний день тижня: 'cc'тиждень місяця               
";

Результат виконання цього прикладу:

int(2)
місцевий день тижня: 7
тиждень місяця: 4
тиждень року: 26
місцевий день тижня: 1
тиждень місяця: 5
тиждень року: 27
