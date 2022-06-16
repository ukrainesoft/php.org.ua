- [« DateTimeInterface](class.datetimeinterface.md)
- [DateTime::format »](datetime.format.md)

- [PHP Manual](index.md)
- [DateTimeInterface](class.datetimeinterface.md)
- Повертає різницю між двома об'єктами DateTime

# DateTime::diff

# DateTimeImmutable::diff

# DateTimeInterface::diff

#date_diff

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateTime::diff -- DateTimeImmutable::diff -- DateTimeInterface::diff --
date_diff — Повертає різницю між двома об'єктами DateTime

### Опис

Об'єктно-орієнтований стиль

public
**DateTime::diff**([DateTimeInterface](class.datetimeinterface.md)
`$targetObject`, bool `$absolute` u003d **`false`**):
[DateInterval](class.dateinterval.md)

public
**DateTimeImmutable::diff**([DateTimeInterface](class.datetimeinterface.md)
`$targetObject`, bool `$absolute` u003d **`false`**):
[DateInterval](class.dateinterval.md)

public
**DateTimeInterface::diff**([DateTimeInterface](class.datetimeinterface.md)
`$targetObject`, bool `$absolute` u003d **`false`**):
[DateInterval](class.dateinterval.md)

Процедурний стиль

[date_diff](function.date-diff.md)([DateTimeInterface](class.datetimeinterface.md)
`$baseObject`, [DateTimeInterface](class.datetimeinterface.md)
`$targetObject`, bool `$absolute` u003d **`false`**):
[DateInterval](class.dateinterval.md)

Повертає різницю між двома об'єктами
[DateTimeInterface](class.datetimeinterface.md).

### Список параметрів

`datetime`
Дата та час для порівняння.

`absolute`
Використовується, щоб відновити абсолютну різницю.

### Значення, що повертаються

[DateInterval](class.dateinterval.md) об'єкт представляє різницю
між двома датами або **`false`** у разі виникнення помилки.

Значення, що повертається, більш конкретно представляє інтервал для
застосування до вихідного об'єкта (`$this` або `$originObject`), щоб
прийти до $targetObject. Цей процес не завжди оборотний.

### Приклади

**Приклад #1 Приклад використання **DateTime::diff()****

Об'єктно-орієнтований стиль

` <?php$origin u003d new DateTime('2009-10-11');$target u003d new DateTime('2009-10-13');$interval u003d $origin->diff($target);echo $interval ->format('%R%a днів');?> `

Процедурний стиль

` <?php$origin u003d date_create('2009-10-11');$target u003d date_create('2009-10-13');$interval u003d date_diff($origin, $target);echo $interval->format ('%R%a днів');?> `

Результат виконання даних прикладів:

+2 дні

**Приклад #2 Порівняння об'єктів [DateTime](class.datetime.md)**

> **Примітка**:
>
> Об'єкти DateTime можуть порівнюватися за допомогою [операторів
> порівняння](language.operators.comparison.md).

` <?php$date1 u003d new DateTime("now");$date2 u003d new DateTime("tomorrow");var_dump($date1 u003du003d $date2);var_dump($date1 < $date2);var_dump> $date2);?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)

### Дивіться також

- [DateInterval::format()](dateinterval.format.md) - Форматує
інтервал
- [DateTime::add()](datetime.add.md) - Змінює об'єкт DateTime,
додаючи кількість днів, місяців, років, годин, хвилин та секунд
- [DateTime::sub()](datetime.sub.md) - Віднімає задану кількість
днів, місяців, років, годин, хвилин та секунд з часу об'єкту
DateTime
