- [« IntlCalendar](class.intlcalendar.md)
- [IntlCalendar::after »](intlcalendar.after.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Додає кількість (зі знаком) часу у полі

# IntlCalendar::add

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::add — Додає кількість (зі знаком) часу в поле

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::add**(int `$field`, int `$value`): bool

Процедурний стиль

**intlcal_add**([IntlCalendar](class.intlcalendar.md) `$calendar`, int
`$field`, int `$value`): bool

Додає кількість зі знаком у полі. Додавання позитивної суми
дозволяє просуватися в часі, навіть якщо числове значення поля
зменшується (наприклад, під час роботи з роками до нашої ери).

Інші поля можуть потребувати коригування, наприклад, додавання місяця
до 31 січня призведе до 28 (або 29) лютого. На відміну від
[IntlCalendar::roll()](intlcalendar.roll.md), коли значення
обертається, найважливіші поля можуть змінитися. Наприклад, додавання
1 день до 31 січня приведе до 1 лютого, а не до 1 січня.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

`value`
Кількість зі знаком, що додається до поточного поля. Якщо сума
позитивна, час буде переміщений вперед; якщо він
негативний, час буде переміщений у минуле. Одиниця неявно
пов'язана із типом поля. Наприклад, годинник для
**`IntlCalendar::FIELD_HOUR_OF_DAY`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::add()****

` <?phpini_set('intl.default_locale', 'fr_FR');ini_set('date.timezone', 'UTC');$cal u003d new IntlGregorianCalendar(2012, 0 /* January */, at: :formatObject($cal), "
";$cal->add(IntlCalendar::FIELD_MONTH, 1);echo IntlDateFormatter::formatObject($cal), "
";$cal->add(IntlCalendar::FIELD_DAY_OF_MONTH, 1);echo IntlDateFormatter::formatObject($cal), "
";

Результат виконання цього прикладу:

31 січня. 2012 00:00:00
29 февр. 2012 00:00:00
1 березня 2012 00:00:00
