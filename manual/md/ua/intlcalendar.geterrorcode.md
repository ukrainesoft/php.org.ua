- [«
IntlCalendar::getDayOfWeekType](intlcalendar.getdayofweektype.md)
- [IntlCalendar::getErrorMessage »](intlcalendar.geterrormessage.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує останній код помилки об'єкта

# IntlCalendar::getErrorCode

# intlcal_get_error_code

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getErrorCode -- intlcal_get_error_code — Отримує
останній код помилки об'єкта

### Опис

Об'єктно-орієнтований стиль (метод):

public **IntlCalendar::getErrorCode**(): int\|false

Процедурний стиль:

**intlcal_get_error_code**([IntlCalendar](class.intlcalendar.md)
`$calendar`): int\|false

Повертає числовий код помилки ICU для останнього виклику цього об'єкта
(включаючи клонування) або [IntlCalendar](class.intlcalendar.md),
вказаний для параметра calendar (у версії з процедурним стилем). Це
може означати лише попередження (негативний код помилки) або
повна відсутність помилки (**`U_ZERO_ERROR`**). Фактична наявність
помилки можна перевірити за допомогою
[intl_is_failure()](function.intl-is-failure.md).

Недійсні аргументи, виявлені на стороні PHP (до виклику
функцій бібліотеки ICU), що не записуються для цієї функції.

Останню помилку, яка сталася при будь-якому виклику функції модуля
intl, включаючи помилки ранніх аргументів, можна отримати за допомогою функції
[intl_get_error_code()](function.intl-get-error-code.md). Ця функція
скидає глобальний код помилки, а чи не код помилки об'єкта.

### Список параметрів

`calendar`
Об'єкт календаря в інтерфейс процедурного стилю.

### Значення, що повертаються

Код помилки ICU, що вказує на успішне виконання, збій або
попередження. Повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getErrorCode()** та
[IntlCalendar::getErrorMessage()](intlcalendar.geterrormessage.md)**

` <?phpini_set("intl.error_level", E_WARNING);ini_set("intl.default_locale", "nl");$intlcal u003d new IntlGregorianCalendar(2012, 1, 29);var_dump( | $intlcal->getErrorMessage());$intlcal->fieldDifference(-1e100, IntlCalendar::FIELD_SECOND);var_dump(    $intlcal->getErrorCode(),    $intlcal->getErrorMessage `

Результат виконання цього прикладу:

int(0)
string(12) "U_ZERO_ERROR"

Warning: IntlCalendar::fieldDifference(): intlcal_field_difference: Call до ICU метод проходить в /home/glopes/php/ws/example.php on line 10
int(1)
string(81) "intlcal_field_difference: Call до ICU метод мав failed: U_ILLEGAL_ARGUMENT_ERROR"

### Дивіться також

- [IntlCalendar::getErrorMessage()](intlcalendar.geterrormessage.md) -
Отримує останнє повідомлення про помилку для об'єкта
- [intl_is_failure()](function.intl-is-failure.md) - Перевірити,
чи є код помилки ознакою збою
- [intl_error_name()](function.intl-error-name.md) - Отримати ім'я
помилки за її кодом
- [intl_get_error_code()](function.intl-get-error-code.md) -
Отримати код останньої помилки
- [intl_get_error_message()](function.intl-get-error-message.md) -
Отримати опис помилки
