- [« IntlCalendar::setTimeZone](intlcalendar.settimezone.md)
- [IntlGregorianCalendar »](class.intlgregoriancalendar.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Перетворює IntlCalendar на об'єкт DateTime

# IntlCalendar::toDateTime

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a2)

IntlCalendar::toDateTime — Перетворює IntlCalendar на об'єкт DateTime

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::toDateTime**():
[DateTime](class.datetime.md)\|false

Процедурний стиль

**intlcal_to_date_time**([IntlCalendar](class.intlcalendar.md)
`$calendar`): [DateTime](class.datetime.md)\|false

Створює об'єкт [DateTime](class.datetime.md), який представляє той
ж момент (з точністю до секунди, з помилкою округлення менше 1 секунди)
з аналогічним часовим поясом (різниця в тому, що часовий пояс
[DateTime](class.datetime.md) підтримується часовим поясом PHP, в той час
час як часовий пояс [IntlCalendar](class.intlcalendar.md)
підтримується ICU).

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Об'єкт [DateTime](class.datetime.md) з тим самим часовим поясом, що і
заданий об'єкт (хоча з використанням бази даних PHP замість ICU) та с
тим же часом, за винятком меншої точності (друга точність замість
мілісекунд). Повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::toDateTime()****

` <?phpini_set('date.timezone', 'UTC');ini_set('intl.default_locale', 'pt_PT');$cal u003d IntlCalendar::createInstance('Europe/Lisbon'); //current time$dt u003d $cal->toDateTime();print_r($dt); `

Результат виконання цього прикладу:

DateTime Object
(
[date] u003d> 2013-07-02 00:29:13
[timezone_type] u003d> 3
[timezone] u003d> Europe/Lisbon
)

### Дивіться також

- [IntlCalendar::fromDateTime()](intlcalendar.fromdatetime.md) -
Створює IntlCalendar з об'єкта або рядка DateTime
- [IntlCalendar::getTime()](intlcalendar.gettime.md) - Отримує
час, представлений на даний момент об'єктом
- [IntlCalendar::createInstance()](intlcalendar.createinstance.md) -
Створює новий об'єкт IntlCalendar
- [DateTime::\_\_construct()](datetime.construct.md) - Конструктор
класу DateTime
