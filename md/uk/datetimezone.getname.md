- [« DateTimeZone::getLocation](datetimezone.getlocation.md)
- [DateTimeZone::getOffset »](datetimezone.getoffset.md)

- [PHP Manual](index.md)
- [DateTimeZone](class.datetimezone.md)
- Повертає ім'я часового поясу

# DateTimeZone::getName

#timezone_name_get

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTimeZone::getName -- timezone_name_get — Повертає ім'я вартового
пояси

### Опис

Об'єктно-орієнтований стиль

public **DateTimeZone::getName**(): string

Процедурний стиль

[timezone_name_get](function.timezone-name-get.md)([DateTimeZone](class.datetimezone.md)
`$object`): string

Повертає ім'я часового поясу.

### Список параметрів

`object`
Об'єкт класу [DateTimeZone](class.datetimezone.md), для якого
потрібно отримати ім'я.

### Значення, що повертаються

Одне з імен часового поясу в [Списку часових поясів](timezones.md).
