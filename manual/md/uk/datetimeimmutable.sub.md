- [«
DateTimeImmutable::setTimezone](datetimeimmutable.settimezone.md)
- [DateTimeInterface »](class.datetimeinterface.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Віднімає передану кількість днів, місяців, років, годин, хвилин та
секунд

# DateTimeImmutable::sub

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::sub — Віднімає передану кількість днів, місяців,
років, годин, хвилин та секунд

### Опис

public
**DateTimeImmutable::sub**([DateInterval](class.dateinterval.md)
`$interval`): [DateTimeImmutable](class.datetimeimmutable.md)

Повертає новий об'єкт DateTimeImmutable, в якому зазначений об'єкт
[DateInterval](class.dateinterval.md) віднімається із зазначеного об'єкта
DateTimeImmutable.

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

**Приклад #1 Приклад використання **DateTimeImmutable::sub()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable('2000-01-20');$newDate u003d $date->sub(new DateInterval('P10D'));echo $newDate->format('Y-m-d') . "
";?> `

Результат виконання даних прикладів:

2000-01-10

**Приклад #2 Додатковий приклад **DateTimeImmutable::sub()****

` <?php$date u003d new DateTimeImmutable('2000-01-20');$newDate u003d $date->sub(new DateInterval('PT10H30S'));echo $newDate->format('Y-m-:: s') . "
";$date u003d new DateTimeImmutable('2000-01-20');$newDate u003d $date->sub(new DateInterval('P7Y5M4DT4H3M2S'));echo $newDate->format('Y:': ) . "
";?> `

Результат виконання цього прикладу:

2000-01-19 13:59:30
1992-08-15 19:56:58

**Приклад #3 Будьте обережні при відніманні місяців**

` <?php$date u003d new DateTimeImmutable('2001-04-30');$interval u003d new DateInterval('P1M');$newDate1 u003d $date->sub($interval);echo $newDate1 'Y-m-d') . "
";$newDate2 u003d $newDate1->sub($interval);echo $newDate2->format('Y-m-d') . "
";?> `

Результат виконання цього прикладу:

2001-03-30
2001-03-02

### Дивіться також

- [DateTimeImmutable::add()](datetimeimmutable.add.md) - Повертає
новий об'єкт з доданою кількістю днів, місяців, років, годин,
хвилин та секунд
- [DateTimeImmutable::diff()](datetime.diff.md) - Повертає різницю
між двома об'єктами DateTime
- [DateTimeImmutable::modify()](datetimeimmutable.modify.md) -
Створює новий об'єкт із зміненою тимчасовою міткою
