- [« IntlCalendar::isEquivalentTo](intlcalendar.isequivalentto.md)
- [IntlCalendar::isSet »](intlcalendar.isset.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає, чи інтерпретація дати/часу м'якої

# IntlCalendar::isLenient

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::isLenient — Визначає, чи є інтерпретація
дати/часу м'якого

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::isLenient**(): bool

Процедурний стиль

**intlcal_is_lenient**([IntlCalendar](class.intlcalendar.md)
`$calendar`): bool

Повертає, чи є поточна інтерпретація дати та часу м'якою (по
замовчуванням). У цьому випадку деякі значення полів поза допустимим
діапазону будуть прийняті замість викликати помилку.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Логічне значення (bool), що вказує, чи встановлено календарі
м'який режим.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::isLenient()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'pt_PT');ini_set('intl.use_exceptions', '1');$cal u003d new IntlGregorianCalendar( 2013, 6 /* Липень */, 1);var_dump(IntlDateFormatter::formatObject($cal), // 01/07/2013, 00:00:00$cal->isLenient()); // true$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 33);var_dump(IntlDateFormatter::formatObject($cal)); // 02/08/2013, 00:00:00$cal->setLenient(false);var_dump($cal->isLenient()); //false$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 33);var_dump(IntlDateFormatter::formatObject($cal)); // Помилка `

Результат виконання цього прикладу:

string(20) "01/07/2013, 00:00:00"
bool(true)
string(20) "02/08/2013, 00:00:00"
bool(false)

Недостатній випадок: Відповідь про exception 'IntlException' with message 'datefmt_format_object: error obtaining instant from IntlCalendar' in /home/foobar/example.php:16
Stack trace:
#0 /home/foobar/example.php(16): IntlDateFormatter::formatObject(Object(IntlGregorianCalendar))
#1 {main}
thrown in /home/foobar/example.php on line 16
