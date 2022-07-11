- [« DateTime::\_\_set_state](datetime.set-state.md)
- [DateTime::setISODate »](datetime.setisodate.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Встановлює дату

# DateTime::setDate

# date_date_set

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTime::setDate -- date_date_set — Встановлює дату

### Опис

Об'єктно-орієнтований стиль

public **DateTime::setDate**(int `$year`, int `$month`, int `$day`):
[DateTime](class.datetime.md)

Процедурний стиль

[date_date_set](function.date-date-set.md)(
[DateTime](class.datetime.md) `$object`,
int `$year`,
int `$month`,
int `$day`
): [DateTime](class.datetime.md)

Встановлює поточне значення дати об'єкта DateTime на нове
значення.

Подібний методу
[DateTimeImmutable::setDate()](datetimeimmutable.setdate.md), за
винятком роботи з об'єктом [DateTime](class.datetime.md) та
зміною наявного об'єкта.

Процедурна версія приймає об'єкт [DateTime](class.datetime.md)
як перший аргумент.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`year`
Рік нової дати.

`month`
Місяць нової дати.

`day`
День нової дати.

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для застосування в ланцюзі
методів або **`false`** у разі виникнення помилки.

### Дивіться також

- [DateTimeImmutable::setDate()](datetimeimmutable.setdate.md) -
Встановлює дату
