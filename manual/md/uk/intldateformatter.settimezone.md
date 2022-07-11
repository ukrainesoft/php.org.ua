- [« IntlDateFormatter::setPattern](intldateformatter.setpattern.md)
- [ResourceBundle »](class.resourcebundle.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Встановлює часовий пояс засобу форматування

# IntlDateFormatter::setTimeZone

#datefmt_set_timezone

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL intl u003d 3.0.0)

IntlDateFormatter::setTimeZone -- datefmt_set_timezone — Встановлює
часовий пояс засобу форматування

### Опис

Об'єктно-орієнтований стиль

public
**IntlDateFormatter::setTimeZone**([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone`): ?bool

Процедурний стиль

**datefmt_set_timezone**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`,
[IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone`): ?bool

Встановлює часовий пояс, який використовується об'єктом IntlDateFormatter.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`timezone`
Часовий пояс засобу форматування. Можна вказати в наступних
форматах:

- Якщо **`null`**, то буде використаний часовий пояс за замовчуванням,
задана в ini-налаштування
[date.timezone](datetime.configuration.md#ini.date.timezone) або
за допомогою функції
[date_default_timezone_set()](function.date-default-timezone-set.md)
та повернена функцією
[date_default_timezone_get()](function.date-default-timezone-get.md).

- Об'єкт класу [IntlTimeZone](class.intltimezone.md).

- Об'єкт класу [DateTimeZone](class.datetimezone.md). Його
ідентифікатор буде вилучено і на його основі буде створено об'єкт
часового поясу ICU; часовий пояс буде збережено в базі даних ICU, а
не PHP.

- Рядок, що є коректним ідентифікатором часового поясу ICU.
Дивіться
[IntlTimeZone::createTimeZoneIDEnumeration()](intltimezone.createtimezoneidenumeration.md).
"Сирі" зсуви типу "GMT+08:30" також підтримуються.

### Значення, що повертаються

Повертає **`null`** у разі успішного виконання та **`false`** в
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlDateFormatter::setTimeZone()****

` <?phpini_set('date.timezone', 'Europe/Amsterdam');$formatter u003d IntlDateFormatter::create(NULL, NULL, NULL, "UTC");$formatter->setTimeZone(NULL);echo "NULL
", $formatter->getTimeZone()->getId(), "
";$formatter->setTimeZone(IntlTimeZone::createTimeZone('Europe/Lisbon'));echo "IntlTimeZone
", $formatter->getTimeZone()->getId(), "
";$formatter->setTimeZone(new DateTimeZone('Europe/Paris'));echo "DateTimeZone
", $formatter->getTimeZone()->getId(), "
";$formatter->setTimeZone('Europe/Rome');echo "String
", $formatter->getTimeZone()->getId(), "
";$formatter->setTimeZone('GMT+00:30');print_r($formatter->getTimeZone()); `

Результат виконання цього прикладу:

NULL
Europe/Amsterdam
IntlTimeZone
Europe/Lisbon
DateTimeZone
Europe/Paris
String
Europe/Rome
IntlTimeZone Object
(
[valid] u003d> 1
[id] u003d> GMT+00:30
[rawOffset] u003d> 1800000
[currentOffset] u003d> 1800000
)

### Дивіться також

- [IntlDateFormatter::getTimeZone()](intldateformatter.gettimezone.md) -
Отримує часовий пояс засобу форматування
