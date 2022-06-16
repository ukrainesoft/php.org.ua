- [« IntlDateFormatter](class.intldateformatter.md)
- [IntlDateFormatter::format »](intldateformatter.format.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Створює засіб форматування дати

# IntlDateFormatter::create

#datefmt_create

# IntlDateFormatter::\_\_construct

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::create -- datefmt_create --
IntlDateFormatter::\_\_construct — Створює засіб форматування дати

### Опис

Об'єктно-орієнтований стиль

public static **IntlDateFormatter::create**(
?string `$locale`,
int `$dateType`,
int `$timeType`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**,
[IntlCalendar](class.intlcalendar.md)\|int\|null `$calendar` u003d
**`null`**,
string `$pattern` u003d ""
): ?[IntlDateFormatter](class.intldateformatter.md)

Об'єктно-орієнтований стиль (конструктор)

public **IntlDateFormatter::\_\_construct**(
?string `$locale`,
int `$dateType`,
int `$timeType`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**,
[IntlCalendar](class.intlcalendar.md)\|int\|null `$calendar` u003d
**`null`**,
string `$pattern` u003d ""
)

Процедурний стиль

**datefmt_create**(
?string `$locale`,
int `$dateType`,
int `$timeType`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**,
[IntlCalendar](class.intlcalendar.md)\|int\|null `$calendar` u003d
**`null`**,
string `$pattern` u003d ""
): ?[IntlDateFormatter](class.intldateformatter.md)

Створює засіб форматування дати.

### Список параметрів

`locale`
Мовний стандарт, який використовується при форматуванні або синтаксичному
аналізі або **`null`** для використання значення, вказаного в
ini-налаштування
[intl.default_locale](intl.configuration.md#ini.intl.default-locale).

`dateType`
Тип дати (**`none`**, **`short`**, **`medium`**, **`long`**,
**`full`**). Одна з [констант
IntlDateFormatter](class.intldateformatter.md#intl.intldateformatter-constants).

`timeType`
Тип часу (**`none`**, **`short`**, **`medium`**, **`long`**,
**`full`**). Одна з [констант
IntlDateFormatter](class.intldateformatter.md#intl.intldateformatter-constants).

`timezone`
Ідентифікатор часового поясу. За замовчуванням (і той, що використовується,
якщо вказано **`null`**) - це той, який повертається
[date_default_timezone_get()](function.date-default-timezone-get.md)
або, якщо застосовно, об'єкт [IntlCalendar](class.intlcalendar.md),
вказаний у параметрі `calendar`. Цей ідентифікатор має бути
коректним ідентифікатором у базі даних ICU або ідентифікатором,
що представляє явне зміщення, наприклад, `GMT-05:30`.

Також може бути об'єкт [IntlTimeZone](class.intltimezone.md) або
[DateTimeZone](class.datetimezone.md).

`calendar`
Календар для форматування та аналізу. Значення за замовчуванням -
**`null`**, що відповідає **`IntlDateFormatter::GREGORIAN`**. Може
бути одна з [констант
IntlDateFormatter](class.intldateformatter.md#intl.intldateformatter-constants.calendartypes)
або об'єкт [IntlCalendar](class.intlcalendar.md). Будь-який переданий
об'єкт [IntlCalendar](class.intlcalendar.md) буде клонований; він не
буде змінено [IntlDateFormatter](class.intldateformatter.md). Це
визначить тип календаря (григоріанський, ісламський,
перський і т.д.) і, якщо в параметрі `timezone` вказано значення
**`null`**, також визначить часовий пояс, що використовується.

`pattern`
Необов'язковий шаблон для використання під час форматування або аналізу.
Можливі шаблони задокументовані за адресою
[»https://unicode-org.github.io/icu/userguide/format_parse/datetime/](https://unicode-org.github.io/icu/userguide/format_parse/datetime/).

### Значення, що повертаються

Створений об'єкт [IntlDateFormatter](class.intldateformatter.md) або
**`null`** у разі виникнення помилки.

### Список змін

[TABLE]

### Приклади

**Приклад #1 Приклад використання **datefmt_create()****

`<?php$fmt u003d datefmt_create( "en_US" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,    'America/Los_Angeles', IntlDateFormatter::GREGORIAN t| ;$fmt u003d datefmt_create( "de-DE" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,   'America/Los_Angeles',IntlDateFormatter::GregORIAN  );| $fmtu003du003ddatefmt_create("en_US"|,IntlDateFormatter::FULL,| ( $fmt , 0);$fmt u003d datefmt_create( "de-DE" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,    'America/Los_Angeles'," Second Formatted output with pattern is ".datefmt_format( $fmt , 0);?> `

**Приклад #2 OO example**

`<?php$fmt u003d new IntlDateFormatter( "en_US" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,   'America/Los_Angeles',IntlDateFormatter::GREGORIAN || 0); (0);$fmtu003du003dnew IntlDateFormatter("en_US" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,    'America/Los_Angeles',IntlDateFormatter::GREGORI y шаблоном: ".$fmt->format(0);$fmt u003d new IntlDateFormatter( "de-DE" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,      'America/Los_Ange /yyyy");echo "Другий форматований висновок з шаблоном: ".$fmt->format(0);?> `

Результат виконання цього прикладу:

Перший форматований висновок: Wednesday, December 31, 1969 4:00:00 PM PT
Другий форматований висновок: Mittwoch, 31. Dezember 1969 16:00 Uhr GMT-08:00
Перший форматований висновок із шаблоном: 12/31/1969
Другий форматований висновок із шаблоном: 12/31/1969

### Дивіться також

- [datefmt_format()](intldateformatter.format.md) - Форматує
значення дати/часу у вигляді рядка
- [datefmt_parse()](intldateformatter.parse.md) - Перетворює рядок
значення позначки часу
- [datefmt_get_error_code()](intldateformatter.geterrorcode.md) -
Отримує код помилки останньої операції
- [datefmt_get_error_message()](intldateformatter.geterrormessage.md) -
Отримує текст помилки останньої операції
