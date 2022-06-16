- [«
IntlCalendar::getKeywordValuesForLocale](intlcalendar.getkeywordvaluesforlocale.md)
- [IntlCalendar::getLocale »](intlcalendar.getlocale.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує найменший локальний максимум для поля

# IntlCalendar::getLeastMaximum

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getLeastMaximum — Отримує найменший локальний максимум
для поля

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getLeastMaximum**(int `$field`): int\|false

Процедурний стиль

**intlcal_get_least_maximum**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$field`): int\|false

Повертає найменший локальний максимум для поля. Це повинно бути
значення, менше або рівне значенню, що повертається
**IntlCalendar::getActualMaxmimum()**, яке, у свою чергу, менше
або дорівнює значенню, що повертається
[IntlCalendar::getMaximum()](intlcalendar.getmaximum.md).

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Ціле число (int), що представляє значення поля або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад максимального значення**

` <?phpini_set('date.timezone', 'UTC');ini_set('intl.default_locale', 'it_IT');$cal u003d new IntlGregorianCalendar(2013, 3 /* April */, 6); cal->getLeastMaximum(IntlCalendar::FIELD_DAY_OF_MONTH), // 28 |$cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH),| `

Результат виконання цього прикладу:

int(28)
int(30)
int(31)

### Дивіться також

- [IntlCalendar::getActualMaximum()](intlcalendar.getactualmaximum.md) -
Максимальне значення для поля з урахуванням поточного часу об'єкта
- [IntlCalendar::getMaximum()](intlcalendar.getmaximum.md) -
Отримує глобальне максимальне значення поля
- [IntlCalendar::getGreatestMinimum()](intlcalendar.getgreatestminimum.md) -
Отримує найбільше локальне мінімальне значення поля
