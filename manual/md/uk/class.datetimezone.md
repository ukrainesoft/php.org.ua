- [« DateTime::\_\_wakeup](datetime.wakeup.md)
- [DateTimeZone::\_\_construct »](datetimezone.construct.md)

- [PHP Manual](index.md)
- [Дата/час](book.datetime.md)
- Клас DateTimeZone

# Клас DateTimeZone

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

## Вступ

Подання часового поясу.

## Огляд класів

class **DateTimeZone** {

/\* Константи \*/

const int `AFRICA` u003d 1;

const int `AMERICA` u003d 2;

const int `ANTARCTICA` u003d 4;

const int `ARCTIC` u003d 8;

const int `ASIA` u003d 16;

const int `ATLANTIC` u003d 32;

const int `AUSTRALIA` u003d 64;

const int `EUROPE` u003d 128;

const int `INDIAN` u003d 256;

const int `PACIFIC` u003d 512;

const int `UTC` u003d 1024;

const int `ALL` u003d 2047;

const int `ALL_WITH_BC` u003d 4095;

const int `PER_COUNTRY` u003d 4096;

/\* Методи \*/

public [\_\_construct](datetimezone.construct.md)(string `$timezone`)

public [getLocation](datetimezone.getlocation.md)(): array\|false

public [getName](datetimezone.getname.md)(): string

public
[getOffset](datetimezone.getoffset.md)([DateTimeInterface](class.datetimeinterface.md)
`$datetime`): int

public [getTransitions](datetimezone.gettransitions.md)(int
`$timestampBegin` u003d **`PHP_INT_MIN`**, int `$timestampEnd` u003d
**`PHP_INT_MAX`**): array\|false

public static
[listAbbreviations](datetimezone.listabbreviations.md)(): array

public static [listIdentifiers](datetimezone.listidentifiers.md)(int
`$timezoneGroup` u003d DateTimeZone::ALL, ?string `$countryCode` u003d
**`null`**): array

}

## Зумовлені константи

**`DateTimeZone::AFRICA`**
Часові пояси Африки.

**`DateTimeZone::AMERICA`**
Часові пояси Америки.

**`DateTimeZone::ANTARCTICA`**
Часові пояси Антарктики.

**`DateTimeZone::ARCTIC`**
Часові пояси Арктики.

**`DateTimeZone::ASIA`**
Часові пояси Азії.

**`DateTimeZone::ATLANTIC`**
Часові пояси Атлантики.

**`DateTimeZone::AUSTRALIA`**
Часові пояси Австралії.

**`DateTimeZone::EUROPE`**
Часові пояси Європи.

**`DateTimeZone::INDIAN`**
Часові пояси Індії.

**`DateTimeZone::PACIFIC`**
Часові пояси Тихого океану.

**`DateTimeZone::UTC`**
Часовий пояс UTC.

**`DateTimeZone::ALL`**
Усі часові пояси.

**`DateTimeZone::ALL_WITH_BC`**
Всі часові пояси, включаючи сумісні.

**`DateTimeZone::PER_COUNTRY`**
Число часових поясів на країну.

## Зміст

- [DateTimeZone::\_\_construct](datetimezone.construct.md) - Створює
новий об'єкт DateTimeZone
- [DateTimeZone::getLocation](datetimezone.getlocation.md) -
Повертає інформацію про місцезнаходження для часового поясу
- [DateTimeZone::getName](datetimezone.getname.md) — Повертає ім'я
часового поясу
- [DateTimeZone::getOffset](datetimezone.getoffset.md) — Повертає
зміщення часового поясу від UTC (GMT)
- [DateTimeZone::getTransitions](datetimezone.gettransitions.md) -
Повертає всі переходи для часового поясу
- [DateTimeZone::listAbbreviations](datetimezone.listabbreviations.md)
— Повертає асоціативний масив, який містить прапор переходу на
літній час, зсув та ім'я часового поясу
- [DateTimeZone::listIdentifiers](datetimezone.listidentifiers.md) -
Повертає чисельно індексований масив із усіма ідентифікаторами
часових поясів
