- [«
DateTimeImmutable::setTimestamp](datetimeimmutable.settimestamp.md)
- [DateTimeImmutable::sub »](datetimeimmutable.sub.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Встановлює часовий пояс

# DateTimeImmutable::setTimezone

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setTimezone — Встановлює часовий пояс

### Опис

public
**DateTimeImmutable::setTimezone**([DateTimeZone](class.datetimezone.md)
`$timezone`): [DateTimeImmutable](class.datetimeimmutable.md)

Повертає новий об'єкт DateTimeImmutable із встановленим новим вартовим
поясом.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`timezone`
Об'єкт [DateTimeZone](class.datetimezone.md), який представляє бажаний
часовий пояс.

### Значення, що повертаються

Повертає новий модифікований об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) для ланцюжка методів.

### Приклади

**Приклад #1 Приклад використання **DateTimeImmutable::setTimeZone()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable('2000-01-01', new DateTimeZone('Pacific/Nauru'));echo$date->format('Y-m-d H:i:sP') . "
";$newDate u003d $date->setTimezone(new DateTimeZone('Pacific/Chatham'));echo $newDate->format('Y-m-d H:i:sP') . ""
";?> `

Результат виконання даних прикладів:

2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45

### Дивіться також

- [DateTimeImmutable::getTimezone()](datetime.gettimezone.md) -
Повертає часовий пояс щодо поточного значення DateTime
- [DateTimeZone::\_\_construct()](datetimezone.construct.md) -
Створює новий об'єкт DateTimeZone
