- [« DateTime::getOffset](datetime.getoffset.md)
- [DateTime::getTimezone »](datetime.gettimezone.md)

- [PHP Manual](index.md)
- [DateTimeInterface](class.datetimeinterface.md)
- Повертає тимчасову мітку Unix

# DateTime::getTimestamp

# DateTimeImmutable::getTimestamp

# DateTimeInterface::getTimestamp

# date_timestamp_get

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateTime::getTimestamp -- DateTimeImmutable::getTimestamp --
DateTimeInterface::getTimestamp -- date_timestamp_get -- Повертає
тимчасову мітку Unix

### Опис

Об'єктно-орієнтований стиль

public **DateTime::getTimestamp**(): int

public **DateTimeImmutable::getTimestamp**(): int

public **DateTimeInterface::getTimestamp**(): int

Процедурний стиль

[date_timestamp_get](function.date-timestamp-get.md)([DateTimeInterface](class.datetimeinterface.md)
`$object`): int

Повертає тимчасову мітку Unix.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає тимчасову позначку Unix для вказаної дати.

### Помилки

Якщо тимчасова мітка не може бути представлена як ціле число (int),
викидається [ValueError](class.valueerror.md). До PHP 8.0.0 у цьому
у разі поверталося **`false`**. Тим не менш, мітку часу можна
отримати як рядок (string) за допомогою
[DateTimeInterface::format()](datetime.format.md) з форматом `U`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------|
| 8.0.0 | Функції більше не повертають **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Приклад використання **DateTime::getTimestamp()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTime();echo $date->getTimestamp();?> `

Процедурний стиль

` <?php$date u003d date_create();echo date_timestamp_get($date);?> `

Результатом виконання даних прикладів буде щось подібне:

1272509157

### Дивіться також

- [DateTime::setTimestamp()](datetime.settimestamp.md) -
Встановлює дату та час на основі мітки часу Unix
- [DateTime::format()](datetime.format.md) - Повертає дату,
відформатовану згідно з переданим форматом
