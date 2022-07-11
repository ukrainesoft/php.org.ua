- [« DateTime](class.datetime.md)
- [DateTime::\_\_construct »](datetime.construct.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Змінює об'єкт DateTime, додаючи кількість днів, місяців, років,
годин, хвилин та секунд

# DateTime::add

#date_add

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateTime::add -- date_add — Змінює об'єкт DateTime, додаючи
кількість днів, місяців, років, годин, хвилин та секунд

### Опис

Об'єктно-орієнтований стиль

public **DateTime::add**([DateInterval](class.dateinterval.md)
`$interval`): [DateTime](class.datetime.md)

Процедурний стиль

[date_add](function.date-add.md)([DateTime](class.datetime.md)
`$object`, [DateInterval](class.dateinterval.md) `$interval`):
[DateTime](class.datetime.md)

Додає заданий об'єкт [DateInterval](class.dateinterval.md) до
об'єкту [DateTime](class.datetime.md).

Подібний методу [DateTimeImmutable::add()](datetimeimmutable.add.md),
крім роботи з об'єктом [DateTime](class.datetime.md).

Процедурна версія приймає як перший аргумент об'єкт
[DateTime](class.datetime.md).

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`interval`
Об'єкт класу [DateInterval](class.dateinterval.md).

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для застосування в ланцюзі
методів або **`false`** у разі виникнення помилки.

### Дивіться також

- [DateTimeImmutable::add()](datetimeimmutable.add.md) - Повертає
новий об'єкт з доданою кількістю днів, місяців, років, годин,
хвилин та секунд
