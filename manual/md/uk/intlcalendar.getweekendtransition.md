- [« IntlCalendar::getType](intlcalendar.gettype.md)
- [IntlCalendar::inDaylightTime »](intlcalendar.indaylighttime.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує час дня, коли вихідні починаються або закінчуються

# IntlCalendar::getWeekendTransition

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getWeekendTransition — Отримує час, коли вихідні
починаються або закінчуються

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getWeekendTransition**(int `$dayOfWeek`):
int\|false

Процедурний стиль

**intlcal_get_weekend_transition**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$dayOfWeek`): int\|false

Повертає кількість мілісекунд після опівночі, коли вихідні
починаються чи закінчуються.

Застосовується тільки для днів тижня, для яких
[IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md)
повертає або **`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`**, або
**`IntlCalendar::DOW_TYPE_WEEKEND_CEASE`**. Виклик цієї функції для
інших днів тижня помилка.

Для цієї функції потрібний ICU 4.4 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`dayOfWeek`
Одна з констант: **`IntlCalendar::DOW_SUNDAY`**,
**`IntlCalendar::DOW_MONDAY`**, …, **`IntlCalendar::DOW_SATURDAY`**.

### Значення, що повертаються

Кількість мілісекунд після опівночі, коли вихідні починаються або
закінчуються або **`false`** у разі виникнення помилки.

### Приклади

Приклади дивіться у описі функції
[IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md).
