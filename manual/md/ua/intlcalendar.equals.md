- [« IntlCalendar::createInstance](intlcalendar.createinstance.md)
- [IntlCalendar::fieldDifference »](intlcalendar.fielddifference.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Порівнює час двох об'єктів IntlCalendar щодо рівності

# IntlCalendar::equals

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::equals — Порівнює час двох об'єктів IntlCalendar на
предмет рівності

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::equals**([IntlCalendar](class.intlcalendar.md)
`$other`): bool

Процедурний стиль

**intlcal_equals**([IntlCalendar](class.intlcalendar.md) `$calendar`,
[IntlCalendar](class.intlcalendar.md) `$other`): bool

Повертає true, якщо в обох календарів один і той самий час. Налаштування,
типи календаря та стани полів не обов'язково повинні збігатися.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`other`
Календар для порівняння з головним об'єктом.

### Значення, що повертаються

Повертає **`true`**, якщо поточний час цього та переданого у
[IntlCalendar](class.intlcalendar.md) об'єкта однаковий або
**`false`** інакше.

У разі виникнення помилки також повертається **`false`**. Для
виявлення умов помилки використовуйте
[intl_get_error_code()](function.intl-get-error-code.md) або налаштуйте
викидання
[виключень](intl.configuration.md#ini.intl.use-exceptions) в Intl.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::equals()****

` <?phpini_set('date.timezone', 'UTC');$cal1 u003d IntlCalendar::createInstance(NULL, 'es_ES');$cal2 u003d clone $cal1;var_dump($cal1->equals($cal2)) ; //TRUE// Мовний стандарт не включений в порівняння$cal2 u003d IntlCalendar::createInstance(NULL, 'pt_PT');$cal2->setTime($cal1->getTime());var_dump($cal1->equals( cal2)); //TRUE// І стан встановлених полів також не включено$cal2->clear(IntlCalendar::FIELD_YEAR);var_dump($cal1->isSet(IntlCalendar::FIELD_YEAR) u003d| ); //FALSEvar_dump($cal1->equals($cal2)); //TRUE// І тип календаря$cal2 u003d IntlCalendar::createInstance(NULL, 'es_ES@calendaru003dislamic');$cal2->setTime($cal1->getTime());var_dump($cal1->equals( $ cal2)); //TRUE// Тільки час$cal2 u003d clone $cal1;$cal2->setTime($cal1->getTime() + 1.);var_dump($cal1->equals($cal2)); // FALSE `
