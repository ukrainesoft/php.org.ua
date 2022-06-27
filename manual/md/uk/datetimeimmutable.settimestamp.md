- [« DateTimeImmutable::setTime](datetimeimmutable.settime.md)
- [DateTimeImmutable::setTimezone
»](datetimeimmutable.settimezone.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Встановлює дату та час на основі мітки часу Unix

# DateTimeImmutable::setTimestamp

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setTimestamp — Встановлює дату та час на основі
мітки часу Unix

### Опис

public **DateTimeImmutable::setTimestamp**(int `$timestamp`):
[DateTimeImmutable](class.datetimeimmutable.md)

Повертає новий об'єкт DateTimeImmutable з датою та часом,
встановленими на основі мітки часу Unix.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`timestamp`
Мітка часу Unix представляє дату. Встановлення міток часу поза
діапазону цілого числа (int) можлива при використанні методу
[DateTimeImmutable::modify()](datetimeimmutable.modify.md) з форматом
`@`.

### Значення, що повертаються

Повертає новий модифікований об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DateTimeImmutable::setTimestamp()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTimeImmutable();echo $date->format('U u003d Y-m-d H:i:s') . "
";$newDate u003d $date->setTimestamp(1171502725);echo $newDate->format('U u003d Y-m-d H:i:s') . "
";?> `

Результатом виконання даних прикладів буде щось подібне:

1272508903 u003d 2010-04-28 22:41:43
1171502725 u003d 2007-02-14 20:25:25

### Дивіться також

- [DateTimeImmutable::getTimestamp()](datetime.gettimestamp.md) -
Повертає тимчасову мітку Unix
