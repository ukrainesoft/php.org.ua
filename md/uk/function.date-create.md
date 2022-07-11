- [« date_create_immutable](function.date-create-immutable.md)
- [date_date_set »](function.date-date-set.md)

- [PHP Manual](index.md)
- [Функції дати та часу](ref.datetime.md)
- Створює новий об'єкт DateTime

#date_create

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

date_create — Створює новий об'єкт [DateTime](class.datetime.md)

### Опис

**date_create**(string `$datetime` u003d "now",
?[DateTimeZone](class.datetimezone.md) `$timezone` u003d **`null`**):
[DateTime](class.datetime.md)\|false

Це процедурна версія методу
[DateTime::\_\_construct()](datetime.construct.md).

На відміну від конструктора [DateTime](class.datetime.md), функція
повертає **`false`** замість винятку, якщо передана у параметр
'datetime' рядок неприпустимий.

### Список параметрів

Дивіться
[DateTimeImmutable::\_\_construct](datetimeimmutable.construct.md).

### Значення, що повертаються

Повертає новий екземпляр DateTime. Процедурний стиль повертає
**`false`** у разі виникнення помилки.

### Дивіться також

- [DateTime::\_\_construct()](datetime.construct.md) - Конструктор
класу DateTime
- [DateTimeImmutable::\_\_construct()](datetimeimmutable.construct.md) -
Повертає новий об'єкт DateTimeImmutable
