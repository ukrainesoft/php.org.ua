- [« DateTime::setTimestamp](datetime.settimestamp.md)
- [DateTime::sub »](datetime.sub.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Встановлює часовий пояс для об'єкта класу DateTime

# DateTime::setTimezone

# date_timezone_set

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTime::setTimezone -- date_timezone_set — Встановлює часовий пояс
для об'єкту класу DateTime

### Опис

Об'єктно-орієнтований стиль

public **DateTime::setTimezone**([DateTimeZone](class.datetimezone.md)
`$timezone`): [DateTime](class.datetime.md)

Процедурний стиль

[date_timezone_set](function.date-timezone-set.md)([DateTime](class.datetime.md)
`$object`, [DateTimeZone](class.datetimezone.md) `$timezone`):
[DateTime](class.datetime.md)

Встановлює новий часовий пояс для [DateTime](class.datetime.md)
object.

Подібний методу
[DateTimeImmutable::setTimezone()](datetimeimmutable.settimezone.md),
крім роботи з об'єктом [DateTime](class.datetime.md).

Процедурна версія приймає об'єкт [DateTime](class.datetime.md)
як перший аргумент.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`timezone`
Об'єкт класу [DateTimeZone](class.datetimezone.md), що представляє
потрібний часовий пояс.

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для зв'язування
методів.

### Приклади

**Приклад #1 Приклад використання **DateTime::setTimeZone()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTime('2000-01-01', new DateTimeZone('Pacific/Nauru'));echo $date->format('Y-m-d H:i:sP') . "
";$date->setTimezone(new DateTimeZone('Pacific/Chatham'));echo $date->format('Y-m-d H:i:sP') . "
";?> `

Процедурний стиль

` <?php$date u003d date_create('2000-01-01', timezone_open('Pacific/Nauru'));echo date_format($date, 'Y-m-d H:i:sP') . "
";date_timezone_set($date, timezone_open('Pacific/Chatham'));echo date_format($date, 'Y-m-d H:i:sP') . "
";?> `

Результат виконання даних прикладів:

2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45

### Дивіться також

- [DateTimeImmutable::setTimezone()](datetimeimmutable.settimezone.md) -
Встановлює часовий пояс
- [DateTime::getTimezone()](datetime.gettimezone.md) - Повертає
часовий пояс щодо поточного значення DateTime
- [DateTimeZone::\_\_construct()](datetimezone.construct.md) -
Створює новий об'єкт DateTimeZone
