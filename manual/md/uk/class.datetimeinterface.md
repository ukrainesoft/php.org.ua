- [« DateTimeImmutable::sub](datetimeimmutable.sub.md)
- [DateTime::diff »](datetime.diff.md)

- [PHP Manual](index.md)
- [Дата/час](book.datetime.md)
- Інтерфейс DateTimeInterface

# Інтерфейс DateTimeInterface

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

## Вступ

Інтерфейс **DateTimeInterface** узагальнює роботу
[DateTime](class.datetime.md) або
[DateTimeImmutable](class.datetimeimmutable.md). Неможливо
реалізувати цей інтерфейс з класом користувача.

## Огляд інтерфейсів

interface **DateTimeInterface** {

/\* Константи \*/

const string `ATOM` u003d "Y-m-d\TH:i:sP";

const string `COOKIE` u003d "l, d-M-Y H: i: s T";

const string `ISO8601` u003d "Y-m-d\TH:i:sO";

const string `RFC822` u003d "D, d M y H: i: s O";

const string `RFC850` u003d "l, d-M-y H: i: s T";

const string `RFC1036` u003d "D, d M y H: i: s O";

const string `RFC1123` u003d "D, d MY H:i:s O";

const string `RFC7231` u003d "D, d M Y H:i:s \G\M\T";

const string `RFC2822` u003d "D, d MY H:i:s O";

const string `RFC3339` u003d "Y-m-d\TH:i:sP";

const string `RFC3339_EXTENDED` u003d "Y-m-d\TH:i:s.vP";

const string `RSS` u003d "D, d MY H:i:s O";

const string `W3C` u003d "Y-m-d\TH:i:sP";

/\* Методи \*/

public
[diff](datetime.diff.md)([DateTimeInterface](class.datetimeinterface.md)
`$targetObject`, bool `$absolute` u003d **`false`**):
[DateInterval](class.dateinterval.md)

public [format](datetime.format.md)(string `$format`): string

public [getOffset](datetime.getoffset.md)(): int

public [getTimestamp](datetime.gettimestamp.md)(): int

public [getTimezone](datetime.gettimezone.md)():
[DateTimeZone](class.datetimezone.md)\|false

public [\_\_wakeup](datetime.wakeup.md)(): void

}

## Зумовлені константи

**`DateTime::ATOM`**
**`DATE_ATOM`**
Atom (приклад: 2005-08-15T15:52:01+00:00)

**`DateTime::COOKIE`**
**`DATE_COOKIE`**
HTTP Cookies (приклад: Monday, 15-Aug-05 15:52:01 UTC)

**`DateTime::ISO8601`**
**`DATE_ISO8601`**
ISO-8601 (приклад: 2005-08-15T15:52:01+0000)

> **Примітка**: Цей формат не сумісний із ISO-8601, але залишається для
> зворотної сумісності. Замість нього використовуйте **`DateTime::ATOM`**
> або **`DATE_ATOM`** для сумісності з ISO-8601.

**`DateTime::RFC822`**
**`DATE_RFC822`**
RFC 822 (приклад: Mon, 15 Aug 05 15:52:01 +0000)

**`DateTime::RFC850`**
**`DATE_RFC850`**
RFC 850 (приклад: Monday, 15-Aug-05 15:52:01 UTC)

**`DateTime::RFC1036`**
**`DATE_RFC1036`**
RFC 1036 (приклад: Mon, 15 Aug 05 15:52:01 +0000)

**`DateTime::RFC1123`**
**`DATE_RFC1123`**
RFC 1123 (приклад: Mon, 15 Aug 2005 15:52:01 +0000)

**`DateTimeInterface::RFC7231`**
**`DATE_RFC7231`**
RFC 7231 (з версії PHP 7.0.19 та 7.1.5) (приклад: Sat, 30 Apr 2016
17:52:13 GMT)

**`DateTime::RFC2822`**
**`DATE_RFC2822`**
RFC 2822 (приклад: Mon, 15 Aug 2005 15:52:01 +0000)

**`DateTime::RFC3339`**
**`DATE_RFC3339`**
Теж, що і **`DATE_ATOM`**

**`DateTime::RFC3339_EXTENDED`**
**`DATE_RFC3339_EXTENDED`**
Формат RFC 3339 EXTENDED (приклад: 2005-08-15T15:52:01.000+00:00)

**`DateTime::RSS`**
**`DATE_RSS`**
RSS (приклад: Mon, 15 Aug 2005 15:52:01 +0000)

**`DateTime::W3C`**
**`DATE_W3C`**
World Wide Web Consortium (приклад: 2005-08-15T15:52:01+00:00)

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---|
| 7.2.0 | Константи класу тепер [DateTime](class.datetime.md) визначені у **DateTimeInterface**. |

## Зміст

- [DateTime::diff](datetime.diff.md) — Повертає різницю між
двома об'єктами DateTime
- [DateTime::format](datetime.format.md) — Повертає дату,
відформатовану згідно з переданим форматом
- [DateTime::getOffset](datetime.getoffset.md) — Повертає зсув
часового поясу
- [DateTime::getTimestamp](datetime.gettimestamp.md) — Повертає
тимчасову мітку Unix
- [DateTime::getTimezone](datetime.gettimezone.md) — Повертає
часовий пояс щодо поточного значення DateTime
- [DateTime::\_\_wakeup](datetime.wakeup.md) - Обробник \_\_wakeup
