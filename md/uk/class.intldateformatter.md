- [« IntlTimeZone::useDaylightTime](intltimezone.usedaylighttime.md)
- [IntlDateFormatter::create »](intldateformatter.create.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlDateFormatter

# Клас IntlDateFormatter

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

## Вступ

Це клас, який дозволяє форматувати/розбирати дати у відповідності з
налаштуваннями локалі, використовуючи рядкові та/або бібліотечні шаблони.

Клас надає функціональність форматування дат ICU. Він
дозволяє користувачам відображати дати у форматі, прийнятому в їхній локалі.
Або розбирати значення дат використовуючи рядкові та/або бібліотечні
шаблонів.

## Синопсис класу

class **IntlDateFormatter** {

/\* Методи \*/

public [\_\_construct](intldateformatter.create.md)(
?string `$locale`,
int `$dateType`,
int `$timeType`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**,
[IntlCalendar](class.intlcalendar.md)\|int\|null `$calendar` u003d
**`null`**,
string `$pattern` u003d ""
)

public static [create](intldateformatter.create.md)(
?string `$locale`,
int `$dateType`,
int `$timeType`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**,
[IntlCalendar](class.intlcalendar.md)\|int\|null `$calendar` u003d
**`null`**,
string `$pattern` u003d ""
): ?[IntlDateFormatter](class.intldateformatter.md)

public
[format](intldateformatter.format.md)([IntlCalendar](class.intlcalendar.md)\|[DateTimeInterface](class.datetimeinterface.md)\|array\|string\|int\|float
`$datetime`): string\|false

public static
[formatObject](intldateformatter.formatobject.md)([IntlCalendar](class.intlcalendar.md)\|[DateTime](class.datetime.md)
`$datetime`, array\|int\|string\|null `$format` u003d **`null`**, ?string
`$locale` u003d **`null`**): string\|false

public [getCalendar](intldateformatter.getcalendar.md)(): int\|false

public [getDateType](intldateformatter.getdatetype.md)(): int\|false

public [getErrorCode](intldateformatter.geterrorcode.md)(): int

public [getErrorMessage](intldateformatter.geterrormessage.md)():
string

public [getLocale](intldateformatter.getlocale.md)(int `$type` u003d
**`ULOC_ACTUAL_LOCALE`**): string\|false

public [getPattern](intldateformatter.getpattern.md)(): string\|false

public [getTimeType](intldateformatter.gettimetype.md)(): int\|false

public [getTimeZoneId](intldateformatter.gettimezoneid.md)():
string\|false

public [getCalendarObject](intldateformatter.getcalendarobject.md)():
[IntlCalendar](class.intlcalendar.md)\|false\|null

public [getTimeZone](intldateformatter.gettimezone.md)():
[IntlTimeZone](class.intltimezone.md)\|false

public [isLenient](intldateformatter.islenient.md)(): bool

public [localtime](intldateformatter.localtime.md)(string `$string`,
int `&$offset` u003d **`null`**): array\|false

public [parse](intldateformatter.parse.md)(string `$string`, int
`&$offset` u003d **`null`**): int\|float\|false

public
[setCalendar](intldateformatter.setcalendar.md)([IntlCalendar](class.intlcalendar.md)\|int\|null
`$calendar`): bool

public [setLenient](intldateformatter.setlenient.md)(bool `$lenient`):
void

public [setPattern](intldateformatter.setpattern.md)(string
`$pattern`): bool

public
[setTimeZone](intldateformatter.settimezone.md)([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone`): ?bool

}

## Дивіться також

- [» Форматування дат
ICU](http://www.icu-project.org/apiref/icu4c/udat_8h.md#details)



- [» Формати дат
ICU](https://unicode-org.github.io/icu/userguide/format_parse/datetime/#datetime-format-syntax)

## Зумовлені константи

Ці константи використовуються для завдання формату в конструкторах DateType
та TimeType.

**`IntlDateFormatter::NONE`** (int)
Не вмикати цей елемент

**`IntlDateFormatter::FULL`** (int)
Повний формат (Tuesday, April 12, 1952 AD or 3:30:42pm PST)

**`IntlDateFormatter::LONG`** (int)
Довгий формат (January 12, 1952 or 3:30:32pm)

**`IntlDateFormatter::MEDIUM`** (int)
Середній формат (Jan 12, 1952)

**`IntlDateFormatter::SHORT`** (int)
Найбільш скорочений формат, тільки найнеобхідніші дані (12/13/52
або 3:30pm)

**`IntlDateFormatter::RELATIVE_FULL`** (int)
Те саме, що і **`IntlDateFormatter::FULL`**, але "вчора", "сьогодні" і
"завтра" виводяться як `yesterday`, `today` та `tomorrow`. Доступно з PHP
8.0.0 тільки для 'dateType'.

**`IntlDateFormatter::RELATIVE_LONG`** (int)
Те саме, що і **`IntlDateFormatter::LONG`**, але "вчора", "сьогодні" і
"завтра" виводяться як `yesterday`, `today` та `tomorrow`. Доступно з PHP
8.0.0 тільки для 'dateType'.

**`IntlDateFormatter::RELATIVE_MEDIUM`** (int)
Те саме, що і **`IntlDateFormatter::MEDIUM`**, але "вчора", "сьогодні" і
"завтра" виводяться як `yesterday`, `today` та `tomorrow`. Доступно з PHP
8.0.0 тільки для 'dateType'.

**`IntlDateFormatter::RELATIVE_SHORT`** (int)
Те саме, що і **`IntlDateFormatter::SHORT`**, але "вчора", "сьогодні" і
"завтра" виводяться як `yesterday`, `today` та `tomorrow`. Доступно з PHP
8.0.0 тільки для 'dateType'.

Наступні константи використовуються для завдання типу календаря. Ці
календарі зав'язані прямо на Григоріанський календар. Чи не Григоріанський
календар має бути заданий у локалі. Наприклад
localeu003d"hi@calendaru003dBUDDHIST".

**`IntlDateFormatter::TRADITIONAL`** (int)
Чи не Григоріанський календар

**`IntlDateFormatter::GREGORIAN`** (int)
Григоріанський календар

## Зміст

- [IntlDateFormatter::create](intldateformatter.create.md) — Створює
засіб форматування дати
- [IntlDateFormatter::format](intldateformatter.format.md) -
Форматує значення дати/часу у вигляді рядка
- [IntlDateFormatter::formatObject](intldateformatter.formatobject.md)
- Форматує об'єкт
- [IntlDateFormatter::getCalendar](intldateformatter.getcalendar.md)
— Отримує тип календаря, який використовується IntlDateFormatter
- [IntlDateFormatter::getDateType](intldateformatter.getdatetype.md)
— Отримує тип дати, який використовується IntlDateFormatter
- [IntlDateFormatter::getErrorCode](intldateformatter.geterrorcode.md)
— Отримує код помилки останньої операції
- [IntlDateFormatter::getErrorMessage](intldateformatter.geterrormessage.md)
— Отримує текст помилки останньої операції
- [IntlDateFormatter::getLocale](intldateformatter.getlocale.md) -
Отримує мовний стандарт, який використовується засобом форматування
- [IntlDateFormatter::getPattern](intldateformatter.getpattern.md) -
Отримує шаблон, який використовується IntlDateFormatter
- [IntlDateFormatter::getTimeType](intldateformatter.gettimetype.md)
— Отримує тип часу, який використовується IntlDateFormatter
- [IntlDateFormatter::getTimeZoneId](intldateformatter.gettimezoneid.md)
— Отримує ідентифікатор часового поясу, який використовується
IntlDateFormatter
- [IntlDateFormatter::getCalendarObject](intldateformatter.getcalendarobject.md)
— Отримує копію об'єкта календаря засобу форматування
- [IntlDateFormatter::getTimeZone](intldateformatter.gettimezone.md)
— Отримує часовий пояс засобу форматування
- [IntlDateFormatter::isLenient](intldateformatter.islenient.md) -
Отримує поблажливість, що використовується для IntlDateFormatter
- [IntlDateFormatter::localtime](intldateformatter.localtime.md) -
Перетворює рядок на значення часу на основі поля
- [IntlDateFormatter::parse](intldateformatter.parse.md) -
Перетворює рядок на значення позначки часу
- [IntlDateFormatter::setCalendar](intldateformatter.setcalendar.md)
— Встановлює тип календаря, який використовує засіб форматування.
- [IntlDateFormatter::setLenient](intldateformatter.setlenient.md) -
Встановлює м'який режим аналізатора
- [IntlDateFormatter::setPattern](intldateformatter.setpattern.md) -
Встановлює шаблон, який використовується IntlDateFormatter
- [IntlDateFormatter::setTimeZone](intldateformatter.settimezone.md)
— Встановлює часовий пояс засобу форматування
