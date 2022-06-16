- [« IntlCalendar::isSet](intlcalendar.isset.md)
- [IntlCalendar::roll »](intlcalendar.roll.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає, чи доводиться певна дата/час на вихідні

# IntlCalendar::isWeekend

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::isWeekend — Визначає, чи припадають певні
дата/час на вихідні

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::isWeekend**(?float `$timestamp` u003d **`null`**):
bool

Процедурний стиль

**intlcal_is_weekend**([IntlCalendar](class.intlcalendar.md)
`$calendar`, ?float `$timestamp` u003d **`null`**): bool

Повертає, чи є поточний час об'єкта чи задана тимчасова
мітка вихідними у календарній системі цього об'єкта.

Для цієї функції потрібний ICU 4.4 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`timestamp`
Необов'язкова мітка часу, що представляє кількість мілісекунд з
початку епохи Unix, крім додаткових секунд. Якщо **`null`**,
натомість використовується поточний час об'єкта.

### Значення, що повертаються

Логічне значення (bool), яке вказує, чи є час об'єкта
вихідними.

У разі виникнення помилки також повертається **`false`**. Для
виявлення умов помилки використовуйте
[intl_get_error_code()](function.intl-get-error-code.md) або налаштуйте
викидання
[виключень](intl.configuration.md#ini.intl.use-exceptions) в Intl.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::isWeekend()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');$cal u003d new IntlGregorianCalendar(NULL, 'en_US');$cal->set(2013, 6 /* Липень */, 7); // Неділяvar_dump($cal->isWeekend()); // truevar_dump($cal->isWeekend(strtotime('2013-07-01 00:00:00'))); // false, Понеділок$cal u003d new IntlGregorianCalendar(NULL, 'ar_SA');$cal->set(2013, 6 /* Липень */, 7); // Неділяvar_dump($cal->isWeekend()); // false, неділя не є вихідним днем в цьому календарі `

### Дивіться також

- [IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md) -
Повідомляє, чи є день буднім, вихідним чи днем із переходом
між ними
- [IntlCalendar::getWeekendTransition()](intlcalendar.getweekendtransition.md) -
Отримує час, коли вихідні починаються або закінчуються
