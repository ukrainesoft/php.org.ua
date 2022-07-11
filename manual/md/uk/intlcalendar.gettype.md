- [« IntlCalendar::getTimeZone](intlcalendar.gettimezone.md)
- [IntlCalendar::getWeekendTransition
»](intlcalendar.getweekendtransition.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує тип календаря

# IntlCalendar::getType

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getType — Отримує тип календаря

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getType**(): string

Процедурний стиль

**intlcal_get_type**([IntlCalendar](class.intlcalendar.md)
`$calendar`): string

Рядок, що описує тип календаря. Одне з [припустимих
значень](intlcalendar.getkeywordvaluesforlocale.md) для значення
ключового слова календаря ``calendar'`.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Рядок (string), що представляє тип календаря, наприклад, gregorian,
''islamic'' і т.д.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getType()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'en_US');$cal u003d IntlCalendar::createInstance(NULL, '@calendaru003dethiopic-amete-alem ');var_dump($cal->getType());$cal u003d new IntlGregorianCalendar();var_dump($cal->getType()); `

Результат виконання цього прикладу:

string(19) "ethiopic-amete-alem"
string(9) "gregorian"
