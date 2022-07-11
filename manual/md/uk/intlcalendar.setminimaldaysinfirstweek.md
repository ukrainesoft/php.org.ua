- [« IntlCalendar::setLenient](intlcalendar.setlenient.md)
- [IntlCalendar::setRepeatedWallTimeOption
»](intlcalendar.setrepeatedwalltimeoption.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює мінімальну кількість днів, яка може бути в
першому тижні на рік або місяць

# IntlCalendar::setMinimalDaysInFirstWeek

(PHP 5 \>u003d 5.5.1, PHP 7, PHP 8)

IntlCalendar::setMinimalDaysInFirstWeek — Встановлює мінімальне
кількість днів, яка може бути в першому тижні на рік або місяць

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::setMinimalDaysInFirstWeek**(int `$days`): bool

Процедурний стиль

**intlcal_set_minimal_days_in_first_week**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$days`): bool

Встановлює найменшу кількість днів, які мають пройти в першу
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

`days`
Кількість мінімальних днів, які необхідно встановити.

### Значення, що повертаються

**`true`** у разі успішного виконання, **`false`** у разі
виникнення помилки.
