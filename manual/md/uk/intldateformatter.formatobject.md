- [« IntlDateFormatter::format](intldateformatter.format.md)
- [IntlDateFormatter::getCalendar
»](intldateformatter.getcalendar.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Форматує об'єкт

# IntlDateFormatter::formatObject

# datefmt_format_object

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL intl u003d 3.0.0)

IntlDateFormatter::formatObject -- datefmt_format_object — Форматує
об'єкт

### Опис

Об'єктно-орієнтований стиль

public static
**IntlDateFormatter::formatObject**([IntlCalendar](class.intlcalendar.md)\|[DateTime](class.datetime.md)
`$datetime`, array\|int\|string\|null `$format` u003d **`null`**, ?string
`$locale` u003d **`null`**): string\|false

Процедурний стиль

**datefmt_format_object**([IntlCalendar](class.intlcalendar.md)\|[DateTimeInterface](class.datetimeinterface.md)
`$datetime`, array\|int\|string\|null `$format` u003d **`null`**, ?string
`$locale` u003d **`null`**): string\|false

Функція дозволяє форматувати об'єкт
[IntlCalendar](class.intlcalendar.md) або
[DateTime](class.datetime.md) без попереднього явного створення
об'єкта [IntlDateFormatter](class.intldateformatter.md).

Тимчасовий [IntlDateFormatter](class.intldateformatter.md), який
буде створено, приймає часовий пояс із переданого об'єкта. База даних
часових поясів, пов'язана з PHP, не використовуватиметься - замість неї
використовуватиметься ICU. Отже, ідентифікатор часового поясу,
використовуваний в об'єктах [DateTime](class.datetime.md), також повинен
існувати у базі даних ICU.

### Список параметрів

`datetime`
Об'єкт типу [IntlCalendar](class.intlcalendar.md) або
[DateTime](class.datetime.md). Використовуватиметься інформація про
часовий пояс в об'єкті.

`format`
Як відформатувати дату/час. Можливо або масив (array) з двома
елементами (спочатку стиль дати, потім стиль часу, може бути одна з
констант: **`IntlDateFormatter::NONE`**, **`IntlDateFormatter::SHORT`**,
**`IntlDateFormatter::MEDIUM`**, **`IntlDateFormatter::LONG`**,
**`IntlDateFormatter::FULL`**), ціле число (int) зі значенням однієї з
цих констант (у цьому випадку воно буде використовуватися як для часу,
так і для дати) або рядок (string) у форматі, описаному в
[» документації
ICU](https://unicode-org.github.io/icu/userguide/format_parse/datetime/#datetime-format-syntax).
Якщо вказано значення **`null`**, буде використовуватися стиль
замовчуванням.

`locale`
Використовуваний мовний стандарт або **`null`** для використання
[значення по
замовчуванням](intl.configuration.md#ini.intl.default-locale).

### Значення, що повертаються

Рядок із результатом або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlDateFormatter::formatObject()****

`<?php/* годинний пояс за мовчанням не має значення; годинний пояс взято з об'єкта */ini_set('date.timezone', 'UTC');/* мовний стандарт за мовчанням береться з цієї налаштування ini */ini_set('intl.' ::fromDateTime("2013-06-06 17:05:06 Europe/Dublin");echo "За замовчуванням:
",        IntlDateFormatter::formatObject($cal),        "
";echo "Повний запис: \$format (full):
",         IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL),         "
";echo "Масив: \$format (none, full):
",|                                    
";echo "Рядок: \$format (d 'of' MMMM y):
",         IntlDateFormatter::formatObject($cal, "d 'of' MMMM y", 'en_US'),        "
";echo "Об'єкт DateTime:
",        IntlDateFormatter::formatObject(                new DateTime("2013-09-09 09:09:09 Europe/Madrid"),                IntlDateFormatter::FULL,                'es_ES'),        "
";

Результат виконання цього прикладу:

За замовчуванням:
6 juin 2013 17:05:06
Повний запис: $format (full):
jeudi 6 juin 2013 17:05:06 heure d’été irlandaise
Масив: $format (none, full):
17:05:06 heure d’été irlandaise
Рядок: $format (d 'of' MMMM y):
6 of June 2013
Об'єкт DateTime:
lunes, 9 de septiembre de 2013 09:09:09 Hora de verano de Europa central
