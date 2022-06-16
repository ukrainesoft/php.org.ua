- [« DateTime::setISODate](datetime.setisodate.md)
- [DateTime::setTimestamp »](datetime.settimestamp.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Встановлює час

# DateTime::setTime

# date_time_set

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTime::setTime -- date_time_set — Встановлює час

### Опис

Об'єктно-орієнтований стиль

public **DateTime::setTime**(
int `$hour`,
int `$minute`,
int `$second` u003d 0,
int `$microsecond` u003d 0
): [DateTime](class.datetime.md)

Процедурний стиль

[date_time_set](function.date-time-set.md)(
[DateTime](class.datetime.md) `$object`,
int `$hour`,
int `$minute`,
int `$second` u003d 0,
int `$microsecond` u003d 0
): [DateTime](class.datetime.md)

Встановлює поточне значення часу об'єкта DateTime на нове
значення.

Подібний методу
[DateTimeImmutable::setTime()](datetimeimmutable.settime.md), за
виключення роботи з об'єктом [DateTime](class.datetime.md).

Процедурна версія приймає об'єкт [DateTime](class.datetime.md)
як перший аргумент.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`hour`
Час нового часу.

`minute`
Хвилі нового часу.

`second`
Секунди нового часу.

`microsecond`
Мікросекунди.

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для застосування в ланцюзі
методів або **`false`** у разі виникнення помилки.

### Дивіться також

- [DateTimeImmutable::setTime()](datetimeimmutable.settime.md) -
Встановлює час
