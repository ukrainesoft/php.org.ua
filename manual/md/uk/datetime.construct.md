- [« DateTime::add](datetime.add.md)
- [DateTime::createFromFormat »](datetime.createfromformat.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Конструктор класу DateTime

# DateTime::\_\_construct

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTime::\_\_construct - Конструктор класу DateTime

### Опис

public **DateTime::\_\_construct**(string `$datetime` u003d "now",
?[DateTimeZone](class.datetimezone.md) `$timezone` u003d **`null`**)

Подібний конструктору
[DateTimeImmutable::\_\_construct()](datetimeimmutable.construct.md),
крім роботи з об'єктом [DateTime](class.datetime.md). Замість
цього класу, розгляньте можливість використання класу
[DateTimeImmutable](class.datetimeimmutable.md).

Повертає новий об'єкт DateTime.

### Список параметрів

`datetime`
Рядок дати/часу. Пояснення коректних форматів наведено в розділі
[Формати дати та часу](datetime.formats.md).

Якщо використовується аргумент `$timezone`, то для отримання поточного
часу в новому об'єкті достатньо передати ``now'` як це
аргументу.

`timezone`
Об'єкт класу [DateTimeZone](class.datetimezone.md), що представляє
часовий пояс параметра $datetime.

Якщо аргумент $timezone не заданий або **null, буде використаний
поточний часовий пояс.

> **Примітка**:
>
> Значення аргументу `$timezone`, як і поточний часовий пояс
> будуть враховуватись, якщо в якості аргументу `$datetime` передається
> мітка часу UNIX (наприклад, `@946684800`) або час, в якому
> Часовий пояс вже міститься (наприклад, `2010-01-28T15:00:00+02:00`).

### Значення, що повертаються

Повертає створений об'єкт класу DateTime. Процедурний стиль
повертає **`false`** у разі виникнення помилки.

### Дивіться також

- [DateTimeImmutable::\_\_construct()](datetimeimmutable.construct.md) -
Повертає новий об'єкт DateTimeImmutable
