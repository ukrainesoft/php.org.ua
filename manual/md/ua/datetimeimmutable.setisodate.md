- [« DateTimeImmutable::setDate](datetimeimmutable.setdate.md)
- [DateTimeImmutable::setTime »](datetimeimmutable.settime.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Встановлює дату у форматі ISO

# DateTimeImmutable::setISODate

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setISODate — Встановлює дату у форматі ISO

### Опис

public **DateTimeImmutable::setISODate**(int `$year`, int `$week`, int
`$dayOfWeek` u003d 1): [DateTimeImmutable](class.datetimeimmutable.md)

Повертає новий об'єкт DateTimeImmutable з датою, встановленою в
відповідно до стандарту ISO 8601 - з використанням зміщення тижнів та
днів, а чи не конкретних дат.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`year`
Рік дати.

`week`
Тиждень дати.

`dayOfWeek`
Зсув від першого дня тижня.

### Значення, що повертаються

Повертає новий модифікований об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DateTimeImmutable::setISODate()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable();$date->setISODate(2008, 2);echo $date->format('Y-m-d') . "
";$date->setISODate(2008, 2, 7);echo $date->format('Y-m-d') . "
";?> `

Процедурний стиль

` <?php$date u003d date_create();date_isodate_set($date, 2008, 2);echo date_format($date, 'Y-m-d') . "
";date_isodate_set($date, 2008, 2, 7);echo date_format($date, 'Y-m-d') . ""
";?> `

Результат виконання даних прикладів:

2008-01-07
2008-01-13

**Приклад #2 Значення, що виходять за межі діапазону, додаються до
своїм батьківським значенням**

` <?php$date u003d new DateTimeImmutable();$newDate u003d $date->setISODate(2008, 2, 7);echo $newDate->format('Y-m-d') . "
";$newDateu003du003d$date->setISODate(2008, 2, 8);echo $newDate->format('Y-m-d') . ""
";$newDateu003du003d$date->setISODate(2008, 53, 7);echo $newDate->format('Y-m-d') . "
";?> `

Результат виконання цього прикладу:

2008-01-13
2008-01-14
2009-01-04

**Приклад #3 Пошук місяця, в якому знаходиться тиждень**

` <?php$date u003d new DateTimeImmutable();$newDate u003d $date->setISODate(2008, 14);echo $newDate->format('n');?> `

Результат виконання даних прикладів:

3

### Дивіться також

- [DateTimeImmutable::setDate()](datetimeimmutable.setdate.md) -
Встановлює дату
- [DateTimeImmutable::setTime()](datetimeimmutable.settime.md) -
Встановлює час
