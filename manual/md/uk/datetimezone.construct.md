- [« DateTimeZone](class.datetimezone.md)
- [DateTimeZone::getLocation »](datetimezone.getlocation.md)

- [PHP Manual](index.md)
- [DateTimeZone](class.datetimezone.md)
- Створює новий об'єкт DateTimeZone

# DateTimeZone::\_\_construct

#timezone_open

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTimeZone::\_\_construct -- timezone_open — Створює новий об'єкт
DateTimeZone

### Опис

Об'єктно-орієнтований стиль

public **DateTimeZone::\_\_construct**(string `$timezone`)

Процедурний стиль

[timezone_open](function.timezone-open.md)(string `$timezone`):
[DateTimeZone](class.datetimezone.md)\|false

Створює новий об'єкт DateTimeZone.

Об'єкт DateTimeZone надає доступ до трьох різних типів правил.
тимчасових зон: Зміщення UTC (тип `1`), скорочення часового поясу (тип
`2`) та [ідентифікатори часових поясів](timezones.md), опубліковані в
базі даних часових поясів IANA (тип `3`).

Об'єкт DateTimeZone може бути приєднаний до об'єктів
[DateTime](class.datetime.md) та
[DateTimeImmutable](class.datetimeimmutable.md), щоб мати
можливість відображати часовий пояс, укладений у цих об'єктах
локальному часовому поясі.

### Список параметрів

`timezone`
Одне з підтримуваних [імен часових поясів](timezones.md) або
значення зсуву (+0200) або абревіатура часового поясу (BST).

### Значення, що повертаються

У разі успішного виконання повертає
[DateTimeZone](class.datetimezone.md). Процедурний стиль повертає
**`false`** у разі виникнення помилки.

### Помилки

Метод викидає виняток [Exception](class.exception.md), якщо
вказаний часовий пояс не розпізнаний як допустимий.

### Приклади

**Приклад #1 Створення та приєднання DateTimeZone до DateTimeImmutable**

` <?php$d u003d new DateTimeImmutable("2022-06-02 15:44:48 UTC");$timezones u003d [ 'Europe/London', 'GMT+04:45', '-06:00', 'CEST' ];foreach ($timezones as $tz) {    $tzo u003d new DateTimeZone($tz); $localu003du003d$d->setTimezone($tzo); echo $local->format(DateTimeInterface::RFC2822 . ' — e'), "
";}?> `

Результат виконання цього прикладу:


Thu, 02 Jun 2022 16:44:48 +0100 - Europe/London
Thu, 02 Jun 2022 20:29:48 +0445 - +04:45
Thu, 02 Jun 2022 09:44:48 -0600 - -06:00
Thu, 02 Jun 2022 17:44:48 +0200 - CEST

**Приклад #2 Перехоплення помилок при створенні екземпляра
[DateTimeZone](class.datetimezone.md)**

`<?php// Обробка помилок допомогою перехоплення виключень$timezones u003d array('Europe/London', 'Mars/Phobos', 'Jupiter/Europa');foreach ($timezones as           new DateTimeZone($tz); } catch(Exception $e) {        echo $e->getMessage() . '<br />'; }}?> `

Результат виконання цього прикладу:

DateTimeZone::__construct() [datetimezone.--construct]: Unknown or bad timezone (Mars/Phobos)
DateTimeZone::__construct() [datetimezone.--construct]: Unknown or bad timezone (Jupiter/Europa)
