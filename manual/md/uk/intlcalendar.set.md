- [« IntlCalendar::roll](intlcalendar.roll.md)
- [IntlCalendar::setFirstDayOfWeek
»](intlcalendar.setfirstdayofweek.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює поле часу або одразу кілька спільних полів

# IntlCalendar::set

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::set — Встановлює поле часу або одразу кілька загальних
полів

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::set**(int `$field`, int `$value`): bool

public **IntlCalendar::set**(
int `$year`,
int `$month`,
int `$dayOfMonth` u003d NULL,
int `$hour` u003d NULL,
int `$minute` u003d NULL,
int `$second` u003d NULL
): bool

Процедурний стиль

**intlcal_set**([IntlCalendar](class.intlcalendar.md) `$cal`, int
`$field`, int `$value`): bool

**intlcal_set**(
[IntlCalendar](class.intlcalendar.md) `$cal`,
int `$year`,
int `$month`,
int `$dayOfMonth` u003d NULL,
int `$hour` u003d NULL,
int `$minute` u003d NULL,
int `$second` u003d NULL
): bool

Встановлює або конкретне поле на задане значення, або
встановлює одразу кілька загальних полів. Діапазон допустимих значень
залежить від того, чи використовує календар [м'який
режим](intlcalendar.setlenient.md).

Для полів, які конфліктують, поля, які встановлюються пізніше,
мають пріоритет.

Цей метод не можна викликати рівно із чотирма аргументами.

### Список параметрів

`cal`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

`value`
Нове значення вказаного поля.

`year`
Нове значення для **`IntlCalendar::FIELD_YEAR`**.

`month`
Нове значення для **`IntlCalendar::FIELD_MONTH`**. Послідовність
місяців відраховується з нуля, тобто. січень представлений 0, лютий - 1,
..., грудень – 11, а Тринадцятий місяць (якщо у календарі) – 12.

`dayOfMonth`
Нове значення для **`IntlCalendar::FIELD_DAY_OF_MONTH`**.

`hour`
Нове значення для **`IntlCalendar::FIELD_HOUR_OF_DAY`**.

`minute`
Нове значення для **`IntlCalendar::FIELD_MINUTE`**.

`second`
Нове значення для **`IntlCalendar::FIELD_SECOND`**.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::set()****

`<?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'pt_PT'); Липень */, 1);$cal->set(IntlCalendar::FIELD_YEAR, 2012);$cal->set(IntlCalendar::FIELD_EXTENDED_YEAR, 2011);var_dump(IntlDateFormatter::formatObject($cal) new IntlGregorianCalendar(2013, 6 /* Липень */, 1);$cal->set(IntlCalendar::FIELD_YEAR, 2012);$cal->set(IntlCalendar::FIELD_EXTENDED_YEAR, не| Якщо ми очистимо EXTENDED_YEAR,// буде використаний попередній рік. `

Результат виконання цього прикладу:

string(20) "01/07/2011, 00:00:00"
string(20) "01/07/2012, 00:00:00"

### Дивіться також

- [IntlCalendar::get()](intlcalendar.get.md) - Отримує значення
поля
- [IntlCalendar::add()](intlcalendar.add.md) - Додає кількість
(зі знаком) часу в полі
- [IntlCalendar::roll()](intlcalendar.roll.md) - Додає значення
у полі без перенесення до найважливіших полів
