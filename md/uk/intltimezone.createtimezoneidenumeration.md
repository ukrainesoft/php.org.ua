- [« IntlTimeZone::createTimeZone](intltimezone.createtimezone.md)
- [IntlTimeZone::fromDateTimeZone
»](intltimezone.fromdatetimezone.md)

- [PHP Manual](index.md)
- [IntlTimeZone](class.intltimezone.md)
- Отримати перерахування з ідентифікаторів системних часових поясів за
заданим умовам фільтрації

# IntlTimeZone::createTimeZoneIDEnumeration

# intltz_create_time_zone_id_enumeration

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

IntlTimeZone::createTimeZoneIDEnumeration --
intltz_create_time_zone_id_enumeration — Отримати перелік з
ідентифікаторів системних часових поясів за умовами фільтрації

### Опис

Об'єктно-орієнтований стиль (метод):

public static **IntlTimeZone::createTimeZoneIDEnumeration**(int `$type`,
?string `$region` u003d **`null`**, ?int `$rawOffset` u003d **`null`**):
[IntlIterator](class.intliterator.md)\|false

Процедурний стиль:

**intltz_create_time_zone_id_enumeration**(int `$type`, ?string
`$region` u003d **`null`**, ?int `$rawOffset` u003d **`null`**):
[IntlIterator](class.intliterator.md)\|false

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`type`

`region`

`rawOffset`

### Значення, що повертаються

Повертає [IntlIterator](class.intliterator.md) або **`false`**
у разі виникнення помилки.
