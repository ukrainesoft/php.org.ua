- [« IntlCalendar::get](intlcalendar.get.md)
- [IntlCalendar::getActualMinimum
»](intlcalendar.getactualminimum.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Максимальне значення для поля з урахуванням поточного часу об'єкта

# IntlCalendar::getActualMaximum

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getActualMaximum — Максимальне значення для поля з урахуванням
поточного часу об'єкту

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getActualMaximum**(int `$field`): int\|false

Процедурний стиль

**intlcal_get_actual_maximum**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$field`): int\|false

Повертає відносне максимальне значення поля для поточного
часу. Точна семантика залежить від поля, але загалом це
значення, яке було б отримано, якщо встановити значення поля на
[найменший відносний максимум](intlcalendar.getleastmaximum.md) та
збільшувати його доти, доки не буде досягнуто [глобальний
максимум](intlcalendar.getmaximum.md), щоб обернути значення поля,
якому повертається значення буде глобальним максимумом або значенням
до перенесення, відповідно.

Наприклад, у григоріанському календарі фактичне максимальне значення
для [дня
місяця](class.intlcalendar.md#intlcalendar.constants.field-day-of-month)
буде варіюватися від `28` до `31`, залежно від місяця та року
поточного часу.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Ціле число (int), що становить максимальне значення в одиницях
вимірювання, пов'язане з даними `field` або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getActualMaximum()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');$cal u003d IntlCalendar::fromDateTime('2013-02-15');var_dump($cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MON) //28$cal->add(IntlCalendar::FIELD_EXTENDED_YEAR, -1);var_dump($cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)); //29 `

Результат виконання цього прикладу:

int(28)
int(29)

### Дивіться також

- [IntlCalendar::getMaximum()](intlcalendar.getmaximum.md) -
Отримує глобальне максимальне значення поля
- [IntlCalendar::getLeastMaximum()](intlcalendar.getleastmaximum.md) -
Отримує найменший локальний максимум для поля
- [IntlCalendar::getActualMinimum()](intlcalendar.getactualminimum.md) -
Мінімальне значення для поля з урахуванням поточного часу об'єкта
