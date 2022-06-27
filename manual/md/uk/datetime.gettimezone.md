- [« DateTime::getTimestamp](datetime.gettimestamp.md)
- [DateTime::\_\_wakeup »](datetime.wakeup.md)

- [PHP Manual](index.md)
- [DateTimeInterface](class.datetimeinterface.md)
- Повертає часовий пояс щодо поточного значення DateTime

# DateTime::getTimezone

# DateTimeImmutable::getTimezone

# DateTimeInterface::getTimezone

# date_timezone_get

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8)

DateTime::getTimezone -- DateTimeImmutable::getTimezone --
DateTimeInterface::getTimezone -- date_timezone_get — Повертає вартовий
пояс щодо поточного значення DateTime

### Опис

Об'єктно-орієнтований стиль

public **DateTime::getTimezone**():
[DateTimeZone](class.datetimezone.md)\|false

public **DateTimeImmutable::getTimezone**():
[DateTimeZone](class.datetimezone.md)\|false

public **DateTimeInterface::getTimezone**():
[DateTimeZone](class.datetimezone.md)\|false

Процедурний стиль

[date_timezone_get](function.date-timezone-get.md)([DateTimeInterface](class.datetimeinterface.md)
`$object`): [DateTimeZone](class.datetimezone.md)\|false

Повертає часовий пояс щодо поточного значення DateTime.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md).

### Значення, що повертаються

Повертає об'єкт [DateTimeZone](class.datetimezone.md) у випадку
успішного виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DateTime::getTimezone()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTime(null, new DateTimeZone('Europe/London'));$tz u003d $date->getTimezone();echo $tz->getName();?> `

Процедурний стиль

` <?php$date u003d date_create(null, timezone_open('Europe/London'));$tz u003d date_timezone_get($date);echo timezone_name_get($tz);?> `

Результат виконання даних прикладів:

Europe/London

### Дивіться також

- [DateTime::setTimezone()](datetime.settimezone.md) - Встановлює
часовий пояс для об'єкту класу DateTime
