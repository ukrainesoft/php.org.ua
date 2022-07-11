- [« IntlCalendar::getMaximum](intlcalendar.getmaximum.md)
- [IntlCalendar::getMinimum »](intlcalendar.getminimum.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- отримує мінімальну кількість днів, яка може бути в першій
тижні на рік чи місяць

# IntlCalendar::getMinimalDaysInFirstWeek

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getMinimalDaysInFirstWeek — Отримує мінімальне
кількість днів, яка може бути в першому тижні на рік або місяць

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getMinimalDaysInFirstWeek**(): int\|false

Процедурний стиль

**intlcal_get_minimal_days_in_first_week**([IntlCalendar](class.intlcalendar.md)
`$calendar`): int\|false

Повертає найменшу кількість днів, які мають пройти в першу
тиждень року чи місяця у новому році чи місяці. Наприклад, в
григоріанському календарі, якщо це значення дорівнює 1, то перший тиждень
року обов'язково включатиме 1 січня, а якщо це значення дорівнює 7,
то тиждень з 1 січня буде першим тижнем року, лише якщо день тижня
1 січня збігається з днем тижня, що повертається
[IntlCalendar::getFirstDayOfWeek()](intlcalendar.getfirstdayofweek.md);
інакше це буде останній тиждень минулого року.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Ціле число (int, що представляє кількість днів або **`false`**)
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**IntlCalendar::getMinimalDaysInFirstWeek()****

` <?phpini_set('date.timezone', 'UTC');ini_set('intl.default_locale', 'en_US');$cal u003d new IntlGregorianCalendar(2013, 0 /* Січень */, at); ::formatObject($cal, 'cccc')); //Средаvar_dump($cal->getMinimalDaysInFirstWeek(), // 1$cal->getFirstDayofWeek()); // 1 (Неділя)// Перший тиждень 2013 годаvar_dump(IntlDateFormatter::formatObject($cal, "'Week 'w'ofof'Y"));$cal->setMinimalDaysInFirstWeek не3 не3 року (в 1-му тижні 5 днів у новому році) року var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y")); `

Результат виконання цього прикладу:

string(9) "Wednesday"
int(1)
int(1)
string(14) "Week 1 of 2013"
string(14) "Week 1 of 2013"
string(15) "Week 53 of 2012"
