- [« DateTimeImmutable](class.datetimeimmutable.md)
- [DateTimeImmutable::\_\_construct
»](datetimeimmutable.construct.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Повертає новий об'єкт із доданою кількістю днів, місяців,
років, годин, хвилин та секунд

# DateTimeImmutable::add

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::add — Повертає новий об'єкт із доданим
кількістю днів, місяців, років, годин, хвилин та секунд

### Опис

public
**DateTimeImmutable::add**([DateInterval](class.dateinterval.md)
`$interval`): [DateTimeImmutable](class.datetimeimmutable.md)

Додає зазначений об'єкт [DateInterval](class.dateinterval.md) до
вказаному об'єкту [DateTime](class.datetime.md) і повертає новий
об'єкт [DateTimeImmutable](class.datetimeimmutable.md) для
уявлення цього нового стану.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`interval`
Об'єкт [DateInterval](class.dateinterval.md).

### Значення, що повертаються

Повертає новий модифікований об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DateTimeImmutable::add()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable('2000-01-01');$newDate u003d $date->add(new DateInterval('P10D'));echo $newDate->format('Y-m-d') . "
";?> `

**Приклад #2 Додатковий приклад використання
**DateTimeImmutable::add()****

` <?php$date u003d new DateTimeImmutable('2000-01-01');$newDate u003d $date->add(new DateInterval('PT10H30S'));echo $newDate->format('Y-m-:: s') . "
";$date u003d new DateTimeImmutable('2000-01-01');$newDate u003d $date->add(new DateInterval('P7Y5M4DT4H3M2S'));echo $newDate->format('Y:': ) . "
";?> `

Результат виконання цього прикладу:

2000-01-01 10:00:30
2007-06-05 04:03:02

**Приклад #3 Будьте обережні при додаванні місяців**

` <?php$date u003d new DateTimeImmutable('2000-12-31');$interval u003d new DateInterval('P1M');$newDate1 u003d $date->add($interval);echo $newDate1 'Y-m-d') . "
";$newDate2 u003d $newDate1->add($interval);echo $newDate2->format('Y-m-d') . "
";?> `

Результат виконання цього прикладу:

2001-01-31
2001-03-03

### Дивіться також

- [DateTimeImmutable::sub()](datetimeimmutable.sub.md) - Віднімає
передана кількість днів, місяців, років, годин, хвилин та секунд
- [DateTimeImmutable::diff()](datetime.diff.md) - Повертає різницю
між двома об'єктами DateTime
- [DateTimeImmutable::modify()](datetimeimmutable.modify.md) -
Створює новий об'єкт із зміненою тимчасовою міткою
