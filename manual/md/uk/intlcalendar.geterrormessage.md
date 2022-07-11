- [« IntlCalendar::getErrorCode](intlcalendar.geterrorcode.md)
- [IntlCalendar::getFirstDayOfWeek
»](intlcalendar.getfirstdayofweek.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує останнє повідомлення про помилку для об'єкта

# IntlCalendar::getErrorMessage

# intlcal_get_error_message

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getErrorMessage -- intlcal_get_error_message -- Отримує
останнє повідомлення про помилку для об'єкту

### Опис

Об'єктно-орієнтований стиль (метод):

public **IntlCalendar::getErrorMessage**(): string\|false

Процедурний стиль:

**intlcal_get_error_message**([IntlCalendar](class.intlcalendar.md)
`$calendar`): string\|false

Повертає повідомлення про помилку (якщо є), пов'язане з помилкою,
якій повідомляє
[IntlCalendar::getErrorCode()](intlcalendar.geterrorcode.md) or
[intlcal_get_error_code()](intlcalendar.geterrorcode.md). Якщо
пов'язаного повідомлення про помилку немає, буде повернено лише рядкове
уявлення імені константи помилки. В іншому випадку повідомлення про
помилка також включає повідомлення, встановлене на стороні прив'язки PHP.

### Список параметрів

`calendar`
Об'єкт календаря в інтерфейс процедурного стилю.

### Значення, що повертаються

Повідомлення про помилку, пов'язане з останньою помилкою, що виникла під час виклику
функції цього об'єкта або рядок, що вказує на відсутність помилки.
Повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getErrorMessage()****

` <?php$cal u003d IntlCalendar::createInstance('UTC', 'en_US');var_dump($cal->getErrorMessage());$cal->getWeekendTransition(IntlCalendar::DOW_WEDNESDAY);var_dump($cal> getErrorMessage()); `

Результат виконання цього прикладу:

string(12) "U_ZERO_ERROR"
string(82) "intlcal_get_weekend_transition: Error calling ICU method: U_ILLEGAL_ARGUMENT_ERROR"
