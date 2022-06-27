- [« IntlDateFormatter::parse](intldateformatter.parse.md)
- [IntlDateFormatter::setLenient »](intldateformatter.setlenient.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Встановлює тип календаря, який використовується засобом форматування

# IntlDateFormatter::setCalendar

#datefmt_set_calendar

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::setCalendar -- datefmt_set_calendar — Встановлює
тип календаря, який використовується засобом форматування

### Опис

Об'єктно-орієнтований стиль

public
**IntlDateFormatter::setCalendar**([IntlCalendar](class.intlcalendar.md)\|int\|null
`$calendar`): bool

Процедурний стиль

**datefmt_set_calendar**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`, [IntlCalendar](class.intlcalendar.md)\|int\|null
`$calendar`): bool

Встановлює тип календаря за допомогою форматування.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`calendar`
Можливо: [тип
календаря](class.intldateformatter.md#intl.intldateformatter-constants.calendartypes)
для використання (за замовчуванням **`IntlDateFormatter::GREGORIAN`**,
який також використовується, якщо вказано значення **`null`**) або об'єкт
[IntlCalendar](class.intlcalendar.md).

Будь-який переданий об'єкт [IntlCalendar](class.intlcalendar.md) буде
клонований; до об'єкта аргументу не буде внесено жодних змін.

Часовий пояс засобу форматування буде збережено лише в тому випадку,
якщо об'єкт [IntlCalendar](class.intlcalendar.md) не передано, в
в іншому випадку новий часовий пояс буде таким же, як у переданого
об'єкт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- |
| 5.5.0/PECL 3.0.0 | Додано можливість передати об'єкт [IntlCalendar](class.intlcalendar.md). |

### Приклади

**Приклад #1 Приклад використання **datefmt_set_calendar()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип календаря средства форматирования : ' . datefmt_get_calendar($fmt);datefmt_set_calendar($fmt, IntlDateFormatter::TRADITIONAL);echo 'Тепер тип календаря : ' . datefmt_get_calendar($fmt);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Тип календаря средства форматирования : ' . $fmt->getCalendar();$fmt->setCalendar(IntlDateFormatter::TRADITIONAL);echo 'Тепер тип календаря : ' . $fmt->getCalendar();?> `

Результат виконання цього прикладу:

Тип календаря Засоби форматування: 1
Тепер тип календаря: 0

**Приклад #3 Приклад використання [IntlCalendar](class.intlcalendar.md)
з параметром**

` <?php$time u003d strtotime("2013-03-03 00:00:00 UTC");$formatter u003d IntlDateFormatter::create("en_US", NULL, NULL, "Europe/Amsterdam");echo : ", $formatter->format($time), "
";/* обратите внимание, что языковой стандарт календаря не используется! */$formatter->setCalendar(IntlCalendar::createInstance(               "America/New_York", "pt_PT@calendaru003dislamic"));echo "После:  ", $ formatter->format($time), "
";

Результат виконання цього прикладу:

До: Sunday, March 3, 2013 at 1:00:00 AM Central European Standard Time
Після: Saturday, Rabiʻ II 20, 1434 at 7:00:00 PM Eastern Standard Time

### Дивіться також

- [datefmt_get_calendar()](intldateformatter.getcalendar.md) -
Отримує тип календаря, який використовується IntlDateFormatter
- [datefmt_get_calendar_object()](intldateformatter.getcalendarobject.md) -
Отримує копію об'єкта календаря засобу форматування
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
