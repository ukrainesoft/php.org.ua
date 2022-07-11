- [«
IntlCalendar::getAvailableLocales](intlcalendar.getavailablelocales.md)
- [IntlCalendar::getErrorCode »](intlcalendar.geterrorcode.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Повідомляє, чи є день буднім, вихідним чи днем із переходом
між ними

# IntlCalendar::getDayOfWeekType

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getDayOfWeekType — Повідомляє, чи день буде буднім,
вихідним або днем із переходом між ними

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getDayOfWeekType**(int `$dayOfWeek`): int\|false

Процедурний стиль

**intlcal_get_day_of_week_type**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$dayOfWeek`): int\|false

Повертає, чи вказаний день є робочим днем
(**`IntlCalendar::DOW_TYPE_WEEKDAY`**), вихідним днем
(**`IntlCalendar::DOW_TYPE_WEEKEND`**), днем, протягом якого
відбувається перехід у вихідні
(**`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`**) або день, протягом
якого припиняються вихідні
(**`IntlCalendar::DOW_TYPE_WEEKEND_CEASE`**).

Якщо повернення або **`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`**, або
**`IntlCalendar::DOW_TYPE_WEEKEND_CEASE`**, потім можна викликати
[IntlCalendar::getWeekendTransition()](intlcalendar.getweekendtransition.md)
для отримання часу переходу.

Для цієї функції потрібний ICU 4.4 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`dayOfWeek`
Одна з констант: **`IntlCalendar::DOW_SUNDAY`**,
**`IntlCalendar::DOW_MONDAY`**, ..., **`IntlCalendar::DOW_SATURDAY`**.

### Значення, що повертаються

Повертає одну з констант: **`IntlCalendar::DOW_TYPE_WEEKDAY`**,
**`IntlCalendar::DOW_TYPE_WEEKEND`**,
**`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`** або
**`IntlCalendar::DOW_TYPE_WEEKEND_CEASE`** або **`false`** у випадку
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getDayOfWeekType()****

` <?phpforeach (array('en_US', 'ar_SA') as $locale) {    echo "Мовний стандарт: ", Locale::getDisplayName($locale, "en_US"), "
";|   $cal u003d IntlCalendar::createInstance('UTC', $locale);   for ($i u003d IntlCalendar::DOW_SUNDAY; $i <u003d IntlCalendar::DOW_SA    | $i);        $transition u003d ($type !u003du003d IntlCalendar::DOW_TYPE_WEEKDAY)            ? $cal->getWeekendTransition($i)            : '';        echo $i, " ", $type, " ", $transition, "
";    }    echo "
";}?> `

Результат виконання цього прикладу:

Мовний стандарт: English (United States)
1 1 86400000
2 0
3 0
4 0
5 0
6 0
7 1 0

Мовний стандарт: Arabic (Saudi Arabia)
1 0
2 0
3 0
4 0
5 0
6 1 0
7 1 86400000
