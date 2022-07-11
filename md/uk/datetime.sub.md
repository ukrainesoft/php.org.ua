- [« DateTime::setTimezone](datetime.settimezone.md)
- [DateTimeImmutable »](class.datetimeimmutable.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Віднімає задану кількість днів, місяців, років, годин, хвилин та
секунд з часу об'єкту DateTime

# DateTime::sub

# date_sub

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateTime::sub -- date_sub — Віднімає задану кількість днів, місяців,
років, годин, хвилин та секунд з часу об'єкту DateTime.

### Опис

Об'єктно-орієнтований стиль

public **DateTime::sub**([DateInterval](class.dateinterval.md)
`$interval`): [DateTime](class.datetime.md)

Процедурний стиль

[date_sub](function.date-sub.md)([DateTime](class.datetime.md)
`$object`, [DateInterval](class.dateinterval.md) `$interval`):
[DateTime](class.datetime.md)

Віднімає з часу об'єкта DateTime заданий інтервал
[DateInterval](class.dateinterval.md).

Подібний методу [DateTimeImmutable::sub()](datetimeimmutable.sub.md),
крім роботи з об'єктом [DateTime](class.datetime.md).

Процедурна версія приймає об'єкт [DateTime](class.datetime.md)
як перший аргумент.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`interval`
Об'єкт класу [DateInterval](class.dateinterval.md)

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для застосування в ланцюзі
методів або **`false`** у разі виникнення помилки.

### Дивіться також

- [DateTimeImmutable::sub()](datetimeimmutable.sub.md) - Віднімає
передана кількість днів, місяців, років, годин, хвилин та секунд
