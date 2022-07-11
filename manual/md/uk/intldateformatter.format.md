- [« IntlDateFormatter::create](intldateformatter.create.md)
- [IntlDateFormatter::formatObject
»](intldateformatter.formatobject.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Форматує значення дати/часу у вигляді рядка

# IntlDateFormatter::format

# datefmt_format

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::format -- datefmt_format — Форматує значення
дати/часу у вигляді рядка

### Опис

Об'єктно-орієнтований стиль

public
**IntlDateFormatter::format**([IntlCalendar](class.intlcalendar.md)\|[DateTimeInterface](class.datetimeinterface.md)\|array\|string\|int\|float
`$datetime`): string\|false

Процедурний стиль

**datefmt_format**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`,
[IntlCalendar](class.intlcalendar.md)\|[DateTimeInterface](class.datetimeinterface.md)\|array\|string\|int\|float
`$datetime`): string\|false

Форматує значення дати/часу у вигляді рядка.

### Список параметрів

`formatter`
Ресурс засобу форматування дати.

`datetime`
Значення форматування. Це може бути об'єкт
[DateTimeInterface](class.datetimeinterface.md), об'єкт
[IntlCalendar](class.intlcalendar.md), тип numeric, що представляє
(можливо, дробова) кількість секунд від початку епохи Unix або масив
(array) у форматі, що виводиться функцією
[localtime()](function.localtime.md).

Якщо передається об'єкт [DateTime](class.datetime.md) або
[IntlCalendar](class.intlcalendar.md), його часовий пояс не
враховується. Об'єкт буде відформатовано з використанням часового поясу
засоби форматування. Якщо хтось хоче використовувати часовий пояс
об'єкта, який потрібно відформатувати, потрібно викликати функцію
[IntlDateFormatter::setTimeZone()](intldateformatter.settimezone.md) з
часовий пояс об'єкта. Як альтернатива замість неї може
використовуватися статична функція
[IntlDateFormatter::formatObject()](intldateformatter.formatobject.md).

### Значення, що повертаються

Відформатований рядок або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------|------------------------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 7.1.5 | Додано підтримку спільних об'єктів [DateTimeInterface](class.datetimeinterface.md) для параметра `datetime`. Раніше підтримувалися лише об'єкти [DateTime](class.datetime.md). |
| PECL 3.0 | Додано підтримку надання об'єктів [IntlCalendar](class.intlcalendar.md) для параметра `datetime`. |

### Приклади

**Приклад #1 Приклад використання **datefmt_format()****

`<?php$fmt u003d datefmt_create(   'en_US',   IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles'| datefmt_format($fmt, 0);$fmt u003d datefmt_create(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Второй форматированный вывод: ' . datefmt_format($fmt, 0);$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo 'Первый форматований висновок з шаблоном: ' . datefmt_format($fmt, 0);$fmt u003d datefmt_create(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo "Другий форматований висновок з шаблоном: " . datefmt_format($fmt, 0);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Первый форматированный вывод: ' . $fmt->format(0);$fmt u003d new IntlDateFormatter(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Второй форматированный вывод: ' . $fmt->format(0);$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo 'Перший форматований висновок з шаблоном: ' . $fmt->format(0);$fmt u003d new IntlDateFormatter(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy') ;echo 'Другий форматований висновок з шаблоном: ' . $fmt->format(0);?> `

Результат виконання цього прикладу:

Перший форматований висновок: Wednesday, December 31, 1969 4:00:00 PM PT
Другий форматований висновок: Mittwoch, 31. Dezember 1969 16:00 Uhr GMT-08:00
Перший форматований висновок із шаблоном: 12/31/1969
Другий форматований висновок із шаблоном: 12/31/1969

**Приклад #3 Приклад використання з об'єктом
[IntlCalendar](class.intlcalendar.md)**

`<?php$tz u003d reset(iterator_to_array(IntlTimeZone::createEnumeration('FR')));$formatter u003d IntlDateFormatter::create(   'fr_FR',                   | :GREGORIAN);$cal u003d IntlCalendar::createInstance($tz, '@calendaru003dislamic-civil');$cal->set(IntlCalendar::FIELD_MONTH, 8); //9-й місяць, Рамадан$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 1); //Перший день$cal->clear(IntlCalendar::FIELD_HOUR_OF_DAY);$cal->clear(IntlCalendar::FIELD_MINUTE);$cal->clear(IntlCalendar::FIELD_SECOND);$cal->clear(IntlCalendar::FIEL );echo "В цьому ісламському року Рамадан почався/почнеться:
",         $formatter->format($cal), "
";//Це годинний пояс використовуваного засоби форматування:$formatter->setTimeZone('Asia/Tokyo');echo "Після зміни годинного поясу:
",         $formatter->format($cal), "
";

Результат виконання цього прикладу:

У цьому ісламському році Рамадан розпочався/почнеться:
mardi 9 juillet 2013 19:00:00 heure avancée d’Europe centrale
Після зміни часового поясу:
mercredi 10 juillet 2013 02:00:00 heure normale du Japon

### Дивіться також

- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
- [datefmt_parse()](intldateformatter.parse.md) - Перетворює рядок
значення позначки часу
- [datefmt_get_error_code()](intldateformatter.geterrorcode.md) -
Отримує код помилки останньої операції
- [datefmt_get_error_message()](intldateformatter.geterrormessage.md) -
Отримує текст помилки останньої операції
- [datefmt_format_object()](intldateformatter.formatobject.md) -
Форматує об'єкт
