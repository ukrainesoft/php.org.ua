- [« DateTime::\_\_construct](datetime.construct.md)
- [DateTime::createFromImmutable »](datetime.createfromimmutable.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Розбирає рядок з датою згідно з вказаним форматом

# DateTime::createFromFormat

# date_create_from_format

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateTime::createFromFormat -- date_create_from_format — Розбирає рядок
з датою згідно із зазначеним форматом

### Опис

Об'єктно-орієнтований стиль

public static **DateTime::createFromFormat**(string `$format`, string
`$datetime`, ?[DateTimeZone](class.datetimezone.md) `$timezone` u003d
**`null`**): [DateTime](class.datetime.md)\|false

Процедурний стиль

[date_create_from_format](function.date-create-from-format.md)(string
`$format`, string `$datetime`, ?[DateTimeZone](class.datetimezone.md)
`$timezone` u003d **`null`**): [DateTime](class.datetime.md)\|false

Повертає новий об'єкт DateTime, що представляє дату та час, задані
рядком `datetime`, який був відформатований у зазначеному `format`.

Подібний методу
[DateTimeImmutable::createFromFormat()](datetimeimmutable.createfromformat.md),
крім роботи з об'єктом [DateTime](class.datetime.md).

Процедурна версія приймає об'єкт [DateTime](class.datetime.md)
як перший аргумент.

### Список параметрів

Дивіться параметри та їх опис на сторінці методу
[DateTimeImmutable::createFromFormat](datetimeimmutable.createfromformat.md).

### Значення, що повертаються

Повертає створений екземпляр класу DateTime або **`false`** у разі
виникнення помилки.

### Дивіться також

- [DateTimeImmutable::createFromFormat()](datetimeimmutable.createfromformat.md) -
Розбирає рядок з датою згідно з вказаним форматом
