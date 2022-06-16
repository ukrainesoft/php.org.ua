- [« DateTimeZone::getName](datetimezone.getname.md)
- [DateTimeZone::getTransitions »](datetimezone.gettransitions.md)

- [PHP Manual](index.md)
- [DateTimeZone](class.datetimezone.md)
- Повертає зсув часового поясу від UTC (GMT)

# DateTimeZone::getOffset

#timezone_offset_get

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTimeZone::getOffset -- timezone_offset_get — Повертає зсув
часового поясу від UTC (GMT)

### Опис

Об'єктно-орієнтований стиль

public
**DateTimeZone::getOffset**([DateTimeInterface](class.datetimeinterface.md)
`$datetime`): int

Процедурний стиль

[timezone_offset_get](function.timezone-offset-get.md)([DateTimeZone](class.datetimezone.md)
`$object`, [DateTimeInterface](class.datetimeinterface.md)
`$datetime`): int

Ця функція повертає зсув від GMT для дати/часу, зазначених у
параметрі `datetime`. GMT-зміщення розраховується за допомогою інформації про
часовому поясі, що міститься у об'єкті DateTimeZone.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт
[DateTimeZone](class.datetimezone.md), що повертається
[timezone_open()](function.timezone-open.md).

`datetime`
DateTime, що містить дату/час, щодо яких обчислюється
усунення.

### Значення, що повертаються

Повертає зсув часового поясу за секунди.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------|
| 8.0.0 | До цієї версії, у разі виникнення помилки поверталося **`false`**. |

### Приклади

**Приклад #1 Приклад використання **DateTimeZone::getOffset()****

`<?php// Створення двох об'єктів timezone, один для Тайбей (Тайвань) і один для// Токіо (Японія)$dateTimeZoneTaipei u003d new DateTime );// Создание двух объектов DateTime, которые будут содержать одинаковые метки времени Unix, но// имеющих различные часовые пояса.$dateTimeTaipei u003d new DateTime("now", $dateTimeZoneTaipei);$dateTimeJapan u003d new DateTime("now", $ dateTimeZoneJapan);// Вычисление смещения от GMT для даты/времени, содержащихся в объекте $dateTimeTaipei,// но с использованием правил часового пояса, определённых для Токио// ($dateTimeZoneJapan).$timeOffset u003d $dateTimeZoneJapan->getOffset($dateTimeTaipei );// Повинен показати int(32400) (для дат після Sat Sep 8 01:00:00 1951 JST).var_dump($timeOffset);?> `
