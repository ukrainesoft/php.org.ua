- [«
DateTimeImmutable::\_\_set_state](datetimeimmutable.set-state.md)
- [DateTimeImmutable::setISODate »](datetimeimmutable.setisodate.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Встановлює дату

# DateTimeImmutable::setDate

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setDate — Встановлює дату

### Опис

public **DateTimeImmutable::setDate**(int `$year`, int `$month`, int
`$day`): [DateTimeImmutable](class.datetimeimmutable.md)

Повертає новий об'єкт DateTimeImmutable з поточною датою об'єкта
DateTimeImmutable, встановлена на задану дату.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`year`
Рік дати.

`month`
Місяць дати.

`day`
День дати.

### Значення, що повертаються

Повертає новий модифікований об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DateTimeImmutable::setDate()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable();$newDate u003d $date->setDate(2001, 2, 3);echo $newDate->format('Y-m-d');?> `

Результат виконання даних прикладів:

2001-02-03

**Приклад #2 Значення, що виходять за межі діапазону, додаються до
своїм батьківським значенням**

` <?php$date u003d new DateTimeImmutable();$newDate u003d $date->setDate(2001, 2, 28);echo $newDate->format('Y-m-d') . "
";$newDateu003du003d$date->setDate(2001, 2, 29);echo $newDate->format('Y-m-d') . ""
";$newDateu003du003d$date->setDate(2001, 14, 3);echo $newDate->format('Y-m-d') . ""
";?> `

Результат виконання цього прикладу:

2001-02-28
2001-03-01
2002-02-03

### Дивіться також

- [DateTimeImmutable::setISODate()](datetimeimmutable.setisodate.md) -
Встановлює дату у форматі ISO
- [DateTimeImmutable::setTime()](datetimeimmutable.settime.md) -
Встановлює час
