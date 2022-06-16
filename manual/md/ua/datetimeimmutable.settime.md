- [« DateTimeImmutable::setISODate](datetimeimmutable.setisodate.md)
- [DateTimeImmutable::setTimestamp
»](datetimeimmutable.settimestamp.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Встановлює час

# DateTimeImmutable::setTime

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setTime — Встановлює час

### Опис

public **DateTimeImmutable::setTime**(
int `$hour`,
int `$minute`,
int `$second` u003d 0,
int `$microsecond` u003d 0
): [DateTimeImmutable](class.datetimeimmutable.md)

Повертає новий об'єкт DateTimeImmutable з часом, встановленим на
заданий час.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`hour`
Час часу.

`minute`
Хвилина часу.

`second`
Час секунди.

`microsecond`
Мікросекунди часу.

### Значення, що повертаються

Повертає новий модифікований об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|----------------------------------|
| 7.1.0 | Доданий параметр `microsecond`. |

### Приклади

**Приклад #1 Приклад використання **DateTimeImmutable::setTime()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable('2001-01-01');$newDate u003d $date->setTime(14, 55);echo $date->format('Y-m-d H:i:s') . "
";$newDate u003d $date->setTime(14, 55, 24);echo $date->format('Y-m-d H:i:s') . "
";?> `

Результатом виконання даних прикладів буде щось подібне:

2001-01-01 14:55:00
2001-01-01 14:55:24

**Приклад #2 Значення, що виходять за межі діапазону, додаються до
своїм батьківським значенням**

` <?php$date u003d new DateTimeImmutable('2001-01-01');$newDate u003d $date->setTime(14, 55, 24);echo $newDate->format('Y-m-d H:i:s: ) . "
";$newDate u003d $date->setTime(14, 55, 65);echo $newDate->format('Y-m-d H:i:s') . "
";$newDate u003d $date->setTime(14, 65, 24);echo $newDate->format('Y-m-d H:i:s') . "
";$newDate u003d $date->setTime(25, 55, 24);echo $newDate->format('Y-m-d H:i:s') . "
";?> `

Результат виконання цього прикладу:

2001-01-01 14:55:24
2001-01-01 14:56:05
2001-01-01 15:05:24
2001-01-02 01:55:24

### Дивіться також

- [DateTimeImmutable::setDate()](datetimeimmutable.setdate.md) -
Встановлює дату
- [DateTimeImmutable::setISODate()](datetimeimmutable.setisodate.md) -
Встановлює дату у форматі ISO
