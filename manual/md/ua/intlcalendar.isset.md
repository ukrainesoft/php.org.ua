- [« IntlCalendar::isLenient](intlcalendar.islenient.md)
- [IntlCalendar::isWeekend »](intlcalendar.isweekend.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає, чи встановлено поле

# IntlCalendar::isSet

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::isSet — Визначає, чи встановлено поле

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::isSet**(int `$field`): bool

Процедурний стиль

**intlcal_is_set**([IntlCalendar](class.intlcalendar.md) `$calendar`,
int `$field`): bool

Повертає, чи встановлено поле (на відміну від
[clear](intlcalendar.clear.md)) Встановлені поля пріоритетніші
невстановлених полів та їх значень за умовчанням при обчисленні дати та
часу. Поля, встановлені пізніше пріоритетнішими за полі, встановлені
раніше.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

У разі відсутності помилок аргумент повертає **`true`**, якщо поле
встановлено.

### Приклади

Дивіться приклад в описі методу
[IntlCalendar::clear()](intlcalendar.clear.md).

### Дивіться також

- [IntlCalendar::clear()](intlcalendar.clear.md) - Очищає поле або
всі поля
- [IntlCalendar::set()](intlcalendar.set.md) - Встановлює поле
часу або відразу кілька спільних полів
