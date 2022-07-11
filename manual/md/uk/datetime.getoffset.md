- [« DateTime::format](datetime.format.md)
- [DateTime::getTimestamp »](datetime.gettimestamp.md)

- [PHP Manual](index.md)
- [DateTimeInterface](class.datetimeinterface.md)
- Повертає усунення часового поясу

# DateTime::getOffset

# DateTimeImmutable::getOffset

# DateTimeInterface::getOffset

# date_offset_get

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8)

DateTime::getOffset -- DateTimeImmutable::getOffset --
DateTimeInterface::getOffset -- date_offset_get — Повертає зсув
часового поясу

### Опис

Об'єктно-орієнтований стиль

public **DateTime::getOffset**(): int

public **DateTimeImmutable::getOffset**(): int

public **DateTimeInterface::getOffset**(): int

Процедурний стиль

[date_offset_get](function.date-offset-get.md)([DateTimeInterface](class.datetimeinterface.md)
`$object`): int

Повертає усунення часового поясу.

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md).

### Значення, що повертаються

У разі успішного виконання повертає зсув часового поясу
щодо UTC за секунди.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------|
| 8.0.0 | До цієї версії, у разі виникнення помилки поверталося **`false`**. |

### Приклади

**Приклад #1 Приклад використання **DateTime::getOffset()****

Об'єктно-орієнтований стиль

` <?php$winter u003d new DateTime('2010-12-21', new DateTimeZone('America/New_York'));$summer u003d neu DateTime('2008-06-21', new '));echo $winter->getOffset() . "
";echo $summer->getOffset() . "
";?> `

Процедурний стиль

` <?php$winteru003du003ddate_create('2010-12-21', timezone_open('America/New_York'));$summeru003du003ddate_create('2008-06-21', timezone_open('America/' echo date_offset_get($winter) . "
";echo date_offset_get($summer) . "
";?> `

Результат виконання даних прикладів:

-18000
-14400

Зауваження: -18000u003d-5 годин, -14400u003d-4 години.
