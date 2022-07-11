- [« IntlCalendar::before](intlcalendar.before.md)
- [IntlCalendar::\_\_construct »](intlcalendar.construct.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Очищає поле чи всі поля

# IntlCalendar::clear

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::clear — Очищає поле чи всі поля

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::clear**(?int `$field` u003d **`null`**): bool

Процедурний стиль

**intlcal_clear**([IntlCalendar](class.intlcalendar.md) `$calendar`,
?int `$field` u003d **`null`**): bool

Очищає всі поля, або певне поле. Очищене поле позначається
як не задане, що дає йому найнижчий пріоритет щодо
перевизначальним полям або навіть значенням за умовчанням під час обчислення
часу. Крім того, його значення встановлено на `0`, хоча, враховуючи
низький пріоритет поля, його значення могло бути внутрішньо встановлено на
інше значення на момент завершення запиту поля.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`field`
Одна з представлених у класі [IntlCalendar](class.intlcalendar.md)
[констант](class.intlcalendar.md#intlcalendar.constants) полів типу
дата час. Ціле число від `0` до **`IntlCalendar::FIELD_COUNT`**.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::clear()****

` <?phpini_set('intl.default_locale', 'es_ES');ini_set('date.timezone', 'UTC');$fields u003d array(    'FIELD_ERA'                  u003d> 0,    'FIELD_YEAR'                 u003d> 1,    'FIELD_MONTH '                u003d> 2,    'FIELD_WEEK_OF_YEAR'         u003d> 3,    'FIELD_WEEK_OF_MONTH'        u003d> 4,    'FIELD_DATE'                 u003d> 5,    'FIELD_DAY_OF_YEAR'          u003d> 6,    'FIELD_DAY_OF_WEEK'          u003d> 7,    'FIELD_DAY_OF_WEEK_IN_MONTH' u003d> 8,    'FIELD_AM_PM' u003d> 9,    'FIELD_HOUR'                 u003d> 10,    'FIELD_HOUR_OF_DAY'          u003d> 11,    'FIELD_MINUTE'               u003d> 12,    'FIELD_SECOND'               u003d> 13,    'FIELD_MILLISECOND'          u003d> 14,    'FIELD_ZONE_OFFSET'          u003d> 15,    'FIELD_DST_OFFSET'           u003d > 16,    'FIELD_YEAR_WOY'             u003d> 17,    'FIELD_DOW_LOCAL'            u003d> 18,    'FIELD_EXTENDED_YEAR'        u003d> 19,    'FIELD_JULIAN_DAY'           u003d> 20,    'FIELD_MILLISECONDS_IN_DAY'  u003d> 21,    'FIELD_IS_LEAP_MONTH'        u003d> 22,    'FIELD_FIELD_C OUNT'          u003d> 23,);function getSetFields(IntlCalendar $cal) {    global $fields; $ret u003d array(); foreach ($fields as $name u003d> $value) {        if ($cal->isSet($value)) {             $ret[] ;| }    }   return $ret;}$cal u003d new IntlGregorianCalendar(2013, 2 /* Березень*/, 15);echo "Після створення григоріанського кален
";print_r(getSetFields($cal));echo "
";echo IntlDateFormatter::formatObject($cal), "
";echo "Після того, як засіб форматування запросило поле EXTENDED_YEAR
";print_r(getSetFields($cal));echo "
";$cal->clear(IntlCalendar::FIELD_YEAR);echo "Після того, як рік буде очищений, дата залишиться колишньою
";echo IntlDateFormatter::formatObject($cal), "
";echo "Тому що FIELD_EXTENDED_YEAR все ще встановлений
";print_r(getSetFields($cal));echo "
";var_dump($cal->clear(IntlCalendar::FIELD_EXTENDED_YEAR));echo "Після того, як поле EXTENDED_YEAR було очищено
";print_r(getSetFields($cal));echo IntlDateFormatter::formatObject($cal), "
";echo "
";echo "Після перерахунку полів,
"         . " знову встановлено поле EXTENDED_YEAR (до 1970 г.)
";print_r(getSetFields($cal));echo "
";$cal->clear();echo "Після дзвінка варіанта без аргументів
";print_r(getSetFields($cal));echo IntlDateFormatter::formatObject($cal), "
";

Результат виконання цього прикладу:

Після створення григоріанського календаря
Array
(
[0] u003d> FIELD_ERA
[1] u003d> FIELD_YEAR
[2] u003d> FIELD_MONTH
[3] u003d> FIELD_DATE
)

15/03/2013 00:00:00
Після того, як засіб форматування запросив поле EXTENDED_YEAR
Array
(
[0] u003d> FIELD_ERA
[1] u003d> FIELD_YEAR
[2] u003d> FIELD_MONTH
[3] u003d> FIELD_DATE
[4] u003d> FIELD_EXTENDED_YEAR
)

Після того, як рік буде очищений, дата залишиться незмінною
15/03/2013 00:00:00
Тому що FIELD_EXTENDED_YEAR все ще встановлено
Array
(
[0] u003d> FIELD_ERA
[1] u003d> FIELD_MONTH
[2] u003d> FIELD_DATE
[3] u003d> FIELD_EXTENDED_YEAR
)

bool(true)
Після того як поле EXTENDED_YEAR було очищено
Array
(
[0] u003d> FIELD_ERA
[1] u003d> FIELD_MONTH
[2] u003d> FIELD_DATE
)
15/03/1970 00:00:00

Після перерахунку полів,
знову встановлено поле EXTENDED_YEAR (до 1970 р.)
Array
(
[0] u003d> FIELD_ERA
[1] u003d> FIELD_MONTH
[2] u003d> FIELD_DATE
[3] u003d> FIELD_EXTENDED_YEAR
)

Після виклику варіанта без аргументів
Array
(
)
01/01/1970 00:00:00
