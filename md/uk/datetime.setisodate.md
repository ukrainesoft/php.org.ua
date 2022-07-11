- [« DateTime::setDate](datetime.setdate.md)
- [DateTime::setTime »](datetime.settime.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Встановлює дату у форматі ISO

# DateTime::setISODate

# date_isodate_set

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTime::setISODate -- date_isodate_set — Встановлює дату у форматі
ISO

### Опис

Об'єктно-орієнтований стиль

public **DateTime::setISODate**(int `$year`, int `$week`, int
`$dayOfWeek` u003d 1): [DateTime](class.datetime.md)

Процедурний стиль

[date_isodate_set](function.date-isodate-set.md)(
[DateTime](class.datetime.md) `$object`,
int `$year`,
int `$week`,
int `$dayOfWeek` u003d 1
): [DateTime](class.datetime.md)

Встановлення дати відповідно до стандарту ISO 8601, в якому
використання тижнів і зміщення днями переважніше вказівки дати.

Подібний методу
[DateTimeImmutable::setISODate()](datetimeimmutable.setisodate.md), за
виключення роботи з об'єктом [DateTime](class.datetime.md).

Процедурна версія приймає об'єкт [DateTime](class.datetime.md)
як перший аргумент.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`year`
Рік нової дати.

`week`
Тиждень нової дати.

`dayOfWeek`
Усунення щодо початку тижня.

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для застосування в ланцюзі
методів або **`false`** у разі виникнення помилки.

### Дивіться також

- [DateTimeImmutable::setISODate()](datetimeimmutable.setisodate.md) -
Встановлює дату у форматі ISO
