- [« MessageFormatter::setPattern](messageformatter.setpattern.md)
- [IntlCalendar::add »](intlcalendar.add.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlCalendar

# Клас IntlCalendar

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

## Вступ

## Огляд класів

class **IntlCalendar** {

/\* Константи \*/

const int `FIELD_ERA` u003d 0;

const int `FIELD_YEAR` u003d 1;

const int `FIELD_MONTH` u003d 2;

const int `FIELD_WEEK_OF_YEAR` u003d 3;

const int `FIELD_WEEK_OF_MONTH` u003d 4;

const int `FIELD_DATE` u003d 5;

const int `FIELD_DAY_OF_YEAR` u003d 6;

const int `FIELD_DAY_OF_WEEK` u003d 7;

const int `FIELD_DAY_OF_WEEK_IN_MONTH` u003d 8;

const int `FIELD_AM_PM` u003d 9;

const int `FIELD_HOUR` u003d 10;

const int `FIELD_HOUR_OF_DAY` u003d 11;

const int `FIELD_MINUTE` u003d 12;

const int `FIELD_SECOND` u003d 13;

const int `FIELD_MILLISECOND` u003d 14;

const int `FIELD_ZONE_OFFSET` u003d 15;

const int `FIELD_DST_OFFSET` u003d 16;

const int `FIELD_YEAR_WOY` u003d 17;

const int `FIELD_DOW_LOCAL` u003d 18;

const int `FIELD_EXTENDED_YEAR` u003d 19;

const int `FIELD_JULIAN_DAY` u003d 20;

const int `FIELD_MILLISECONDS_IN_DAY` u003d 21;

const int `FIELD_IS_LEAP_MONTH` u003d 22;

const int `FIELD_FIELD_COUNT` u003d 23;

const int `FIELD_DAY_OF_MONTH` u003d 5;

const int `DOW_SUNDAY` u003d 1;

const int `DOW_MONDAY` u003d 2;

const int `DOW_TUESDAY` u003d 3;

const int `DOW_WEDNESDAY` u003d 4;

const int `DOW_THURSDAY` u003d 5;

const int `DOW_FRIDAY` u003d 6;

const int `DOW_SATURDAY` u003d 7;

const int `DOW_TYPE_WEEKDAY` u003d 0;

const int `DOW_TYPE_WEEKEND` u003d 1;

const int `DOW_TYPE_WEEKEND_OFFSET` u003d 2;

const int `DOW_TYPE_WEEKEND_CEASE` u003d 3;

const int `WALLTIME_FIRST` u003d 1;

const int `WALLTIME_LAST` u003d 0;

const int `WALLTIME_NEXT_VALID` u003d 2;

/\* Методи \*/

private [\_\_construct](intlcalendar.construct.md)()

public [add](intlcalendar.add.md)(int `$field`, int `$value`): bool

public
[after](intlcalendar.after.md)([IntlCalendar](class.intlcalendar.md)
`$other`): bool

public
[before](intlcalendar.before.md)([IntlCalendar](class.intlcalendar.md)
`$other`): bool

public [clear](intlcalendar.clear.md)(?int `$field` u003d **`null`**):
bool

public static
[createInstance](intlcalendar.createinstance.md)([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**, ?string `$locale` u003d **`null`**):
?[IntlCalendar](class.intlcalendar.md)

public
[equals](intlcalendar.equals.md)([IntlCalendar](class.intlcalendar.md)
`$other`): bool

public [fieldDifference](intlcalendar.fielddifference.md)(float
`$timestamp`, int `$field`): int\|false

public static
[fromDateTime](intlcalendar.fromdatetime.md)([DateTime](class.datetime.md)\|string
`$datetime`, ?string `$locale` u003d **`null`**):
?[IntlCalendar](class.intlcalendar.md)

public [get](intlcalendar.get.md)(int `$field`): int\|false

public [getActualMaximum](intlcalendar.getactualmaximum.md)(int
`$field`): int\|false

public [getActualMinimum](intlcalendar.getactualminimum.md)(int
`$field`): int\|false

public static
[getAvailableLocales](intlcalendar.getavailablelocales.md)(): array

public [getDayOfWeekType](intlcalendar.getdayofweektype.md)(int
`$dayOfWeek`): int\|false

public [getErrorCode](intlcalendar.geterrorcode.md)(): int\|false

public [getErrorMessage](intlcalendar.geterrormessage.md)():
string\|false

public [getFirstDayOfWeek](intlcalendar.getfirstdayofweek.md)():
int\|false

public [getGreatestMinimum](intlcalendar.getgreatestminimum.md)(int
`$field`): int\|false

public static
[getKeywordValuesForLocale](intlcalendar.getkeywordvaluesforlocale.md)(string
`$keyword`, string `$locale`, bool `$onlyCommon`):
[IntlIterator](class.intliterator.md)\|false

public [getLeastMaximum](intlcalendar.getleastmaximum.md)(int
`$field`): int\|false

public [getLocale](intlcalendar.getlocale.md)(int `$type`):
string\|false

public [getMaximum](intlcalendar.getmaximum.md)(int `$field`):
int\|false

public
[getMinimalDaysInFirstWeek](intlcalendar.getminimaldaysinfirstweek.md)():
int\|false

public [getMinimum](intlcalendar.getminimum.md)(int `$field`):
int\|false

public static [getNow](intlcalendar.getnow.md)(): float

public
[getRepeatedWallTimeOption](intlcalendar.getrepeatedwalltimeoption.md)():
int

public
[getSkippedWallTimeOption](intlcalendar.getskippedwalltimeoption.md)():
int

public [getTime](intlcalendar.gettime.md)(): float\|false

public [getTimeZone](intlcalendar.gettimezone.md)():
[IntlTimeZone](class.intltimezone.md)\|false

public [getType](intlcalendar.gettype.md)(): string

public
[getWeekendTransition](intlcalendar.getweekendtransition.md)(int
`$dayOfWeek`): int\|false

public [inDaylightTime](intlcalendar.indaylighttime.md)(): bool

public
[isEquivalentTo](intlcalendar.isequivalentto.md)([IntlCalendar](class.intlcalendar.md)
`$other`): bool

public [isLenient](intlcalendar.islenient.md)(): bool

public [isSet](intlcalendar.isset.md)(int `$field`): bool

public [isWeekend](intlcalendar.isweekend.md)(?float `$timestamp` u003d
**`null`**): bool

public [roll](intlcalendar.roll.md)(int `$field`, int\|bool `$value`):
bool

public [set](intlcalendar.set.md)(int `$field`, int `$value`): bool

public [set](intlcalendar.set.md)(
int `$year`,
int `$month`,
int `$dayOfMonth` u003d NULL,
int `$hour` u003d NULL,
int `$minute` u003d NULL,
int `$second` u003d NULL
): bool

public [setFirstDayOfWeek](intlcalendar.setfirstdayofweek.md)(int
`$dayOfWeek`): bool

public [setLenient](intlcalendar.setlenient.md)(bool `$lenient`): bool

public
[setMinimalDaysInFirstWeek](intlcalendar.setminimaldaysinfirstweek.md)(int
`$days`): bool

public
[setRepeatedWallTimeOption](intlcalendar.setrepeatedwalltimeoption.md)(int
`$option`): bool

public
[setSkippedWallTimeOption](intlcalendar.setskippedwalltimeoption.md)(int
`$option`): bool

public [setTime](intlcalendar.settime.md)(float `$timestamp`): bool

public
[setTimeZone](intlcalendar.settimezone.md)([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone`): bool

public [toDateTime](intlcalendar.todatetime.md)():
[DateTime](class.datetime.md)\|false

}

## Зумовлені константи

**`IntlCalendar::FIELD_ERA`**
Поле календаря чисельно представляє епоху, наприклад `1` для "від
Різдва Христового" і `0` для "до Різдва Христового" у Григоріанському та
Юліанському календарі і `235` для періоду Хейсей
календар. Не всі календарі мають понад одну епоху.

**`IntlCalendar::FIELD_YEAR`**
Поле календар для року. Не унікально у тих кількох епох. Якщо
календар містить більше однієї ери, то, як правило, мінімальне значення
цього поля одно `1`.

**`IntlCalendar::FIELD_MONTH`**
Поле календаря на місяць. Послідовність місяців починається з нуля,
отже Janurary (Січень) (тут використовується для позначення
першого місяця року, але за фактом може бути зовсім інше ім'я, наприклад
Muharram для Ісламського календаря) буде представлено числом `0`,
February (Лютий) числом `1`, …, December (Грудень) числом `11` і, для
деяких календарів, 13-й або високосний місяць, значення буде рівним
`12`.

**`IntlCalendar::FIELD_WEEK_OF_YEAR`**
Поле календаря для номера тижня на рік. Залежить від того, з якого дня
починається тиждень](intlcalendar.getfirstdayofweek.md) та [мінімального
кількості днів на тижні](intlcalendar.getminimaldaysinfirstweek.md).

**`IntlCalendar::FIELD_WEEK_OF_MONTH`**
Поле календаря для номера тижня місяця. Залежить від того, з якого
дня починається тиждень](intlcalendar.getfirstdayofweek.md) та
[мінімальної кількості днів у
тижні](intlcalendar.getminimaldaysinfirstweek.md).

**`IntlCalendar::FIELD_DATE`**
Поле календаря для номера дня місяця. Те саме, що й
**`IntlCalendar::FIELD_DAY_OF_MONTH`**.

**`IntlCalendar::FIELD_DAY_OF_YEAR`**
Поле календаря для номера дня на рік. Для Грегоріанського календаря
знаходиться в діапазоні від **`1`** до **`365`** або **`366`**.

**`IntlCalendar::FIELD_DAY_OF_WEEK`**
Поле календаря для номера дня тижня. Починається з `1` (Неділя,
дивись
[**`IntlCalendar::DOW_SUNDAY`**](class.intlcalendar.md#intlcalendar.constants.dow-sunday)
і пов'язані константи) і закінчується 7 (субота).

**`IntlCalendar::FIELD_DAY_OF_WEEK_IN_MONTH`**
Номер дня тижня (Неділя, Понеділок, …) на місяць. Допустимо це
значення дорівнює `1`, а значення дня тижня дорівнює `2` (понеділок),
отже, це перший понеділок місяця. Максимальне значення дорівнює
`5`.

Також допустимі значення `0` і нижче (негативні). Значення `0`
охоплює 7 днів безпосередньо перед початком місяця (перший
відповідний день на місяці має значення `1`). Від'ємні значення
відраховуються від кінця місяця. Так, значення `-1` вказує на останній
підходящий день місяця, `-2` на другий з кінця і т.д.

На відміну від
[**`IntlCalendar::FIELD_WEEK_OF_MONTH`**](class.intlcalendar.md#intlcalendar.constants.field-week-of-month)
і
[**`IntlCalendar::FIELD_WEEK_OF_YEAR`**](class.intlcalendar.md#intlcalendar.constants.field-week-of-year),
це значення не залежить від
[IntlCalendar::getFirstDayOfWeek()](intlcalendar.getfirstdayofweek.md)
і
[IntlCalendar::getMinimalDaysInFirstWeek()](intlcalendar.getminimaldaysinfirstweek.md).
Перше середовище - це перше середовище, навіть якщо тиждень розпочався у попередньому
місяці.

**`IntlCalendar::FIELD_AM_PM`**
Поле календаря визначальний час до/після полудня. Відповідно `0` -
до полудня, (`1`) – після. Північ вважається як "до полудня", опівдні
як "після полудня".

**`IntlCalendar::FIELD_HOUR`**
Поле календаря для годинника, без вказівки до або після полудня. Допустимі
значення в інтервалі від `0` до `11`.

**`IntlCalendar::FIELD_HOUR_OF_DAY`**
Поле календаря для повного (24-годинного формату) годин. Допустимі значення
від `0` до `23`.

**`IntlCalendar::FIELD_MINUTE`**
Поле календар для хвилин.

**`IntlCalendar::FIELD_SECOND`**
Поле календаря на секунди.

**`IntlCalendar::FIELD_MILLISECOND`**
Поле календаря для мілісекунду.

**`IntlCalendar::FIELD_ZONE_OFFSET`**
Поле календаря для «сирого» усунення часового поясу, в мілісекундах.
"Сире" усунення не враховує переходи на літній/зимовий час.

**`IntlCalendar::FIELD_DST_OFFSET`**
Поле календаря для усунення часового поясу в мілісекундах залежно
від літнього/зимового часу, якщо застосовується до цього часового поясу.

**`IntlCalendar::FIELD_YEAR_WOY`**
Поле календаря являє собою рік для [тижня
року](class.intlcalendar.md#intlcalendar.constants.field-week-of-year).

**`IntlCalendar::FIELD_DOW_LOCAL`**
Поле календаря на локалізований день тижня. Приймає значення в
діапазоні від `1` до `7`. `1` використовується для дня тижня
відповідного значення повертається функцією
[IntlCalendar::getFirstDayOfWeek()](intlcalendar.getfirstdayofweek.md).

**`IntlCalendar::FIELD_EXTENDED_YEAR`**
Поле календаря для представлення номера року у контексті забезпечення
безперервності між епохами. Наприклад, для Грегоріанського календаря, це
значення для епохи "після Різдва Христового" буде відповідати
**`IntlCalendar::FIELD_YEAR`**, а для епохи "до Різдва Христового", рік
`y` буде представлений як `-y+1`.

**`IntlCalendar::FIELD_JULIAN_DAY`**
Поле календаря для модифікованих номерів днів юліанського календаря. В
на відміну від стандартного Юліанського календаря, у ньому перехід відбувається у
опівночі за локальним часом, а не опівдні за UTC. Він однозначно
ідентифікує дату.

**`IntlCalendar::FIELD_MILLISECONDS_IN_DAY`**
Поле календаря, що охоплює **`IntlCalendar::FIELD_HOUR_OF_DAY`**,
**`IntlCalendar::FIELD_MINUTE`**, **`IntlCalendar::FIELD_SECOND`** та
**`IntlCalendar::FIELD_MILLISECOND`**. Знаходиться в діапазоні від `0` до
`24*3600*1000 - 1`. Це не кількість мілісекунд, що минуло з
опівночі, оскільки у моменти переходу на літній/зимовий час матиме
розриви.

**`IntlCalendar::FIELD_IS_LEAP_MONTH`**
Поле календаря приймає значення `1` для високосного місяця та `0` для
звичайного.

**`IntlCalendar::FIELD_FIELD_COUNT`**
Загальна кількість полів.

**`IntlCalendar::FIELD_DAY_OF_MONTH`**
Псевдонім для
[**`IntlCalendar::FIELD_DATE`**](class.intlcalendar.md#intlcalendar.constants.field-date).

**`IntlCalendar::DOW_SUNDAY`**
Неділя.

**`IntlCalendar::DOW_MONDAY`**
Понеділок.

**`IntlCalendar::DOW_TUESDAY`**
Вівторок.

**`IntlCalendar::DOW_WEDNESDAY`**
Середа.

**`IntlCalendar::DOW_THURSDAY`**
Четвер.

**`IntlCalendar::DOW_FRIDAY`**
П'ятниця.

**`IntlCalendar::DOW_SATURDAY`**
Субота.

**`IntlCalendar::DOW_TYPE_WEEKDAY`**
Висновок
[IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md)
означає, що день буде.

**`IntlCalendar::DOW_TYPE_WEEKEND`**
Висновок
[IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md)
означає, що вихідний день.

**`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`**
Висновок
[IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md)
означає, що вихідні розпочинаються у цей день.

**`IntlCalendar::DOW_TYPE_WEEKEND_CEASE`**
Висновок
[IntlCalendar::getDayOfWeekType()](intlcalendar.getdayofweektype.md)
означає, що вихідні закінчуються у цей день.

**`IntlCalendar::WALLTIME_FIRST`**
Висновок
[IntlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md)
означає, що час у пропущеному діапазоні має посилатися на момент
часу менший на одну годину та виведення
[IntlCalendar::getRepeatedWallTimeOption()](intlcalendar.getrepeatedwalltimeoption.md)
означає, що час у діапазоні, що повторюється, повинен відноситися до моменту
першої появи такого часу.

**`IntlCalendar::WALLTIME_LAST`**
Висновок
[IntlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md)
означає, що час у пропущеному діапазоні має посилатися на момент
часу більшого на одну годину і виведення
[IntlCalendar::getRepeatedWallTimeOption()](intlcalendar.getrepeatedwalltimeoption.md)
означає, що час у діапазоні, що повторюється, повинен відноситися до моменту
другої появи такого часу.

**`IntlCalendar::WALLTIME_NEXT_VALID`**
Висновок
[IntlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md)
означає, що час у пропущеному діапазоні відноситься до моменту, коли
стався перехід на зимовий/літній час.

## Зміст

- [IntlCalendar::add](intlcalendar.add.md) — Додає кількість
(зі знаком) часу в полі
- [IntlCalendar::after](intlcalendar.after.md) — Визначає час
цього об'єкта пізніше часу переданого об'єкта
- [IntlCalendar::before](intlcalendar.before.md) — Визначає час
цього об'єкта раніше часу переданого об'єкта
- [IntlCalendar::clear](intlcalendar.clear.md) — Очищає поле або
всі поля
- [IntlCalendar::\_\_construct](intlcalendar.construct.md) -
Закритий конструктор для заборони створення екземплярів
- [IntlCalendar::createInstance](intlcalendar.createinstance.md) -
Створює новий об'єкт IntlCalendar
- [IntlCalendar::equals](intlcalendar.equals.md) — Порівнює час
двох об'єктів IntlCalendar щодо рівності
- [IntlCalendar::fieldDifference](intlcalendar.fielddifference.md) -
Обчислює різницю між заданим часом та часом об'єкта
- [IntlCalendar::fromDateTime](intlcalendar.fromdatetime.md) -
Створює IntlCalendar з об'єкта або рядка DateTime
- [IntlCalendar::get](intlcalendar.get.md) — Отримує значення поля
- [IntlCalendar::getActualMaximum](intlcalendar.getactualmaximum.md)
— Максимальне значення для поля з урахуванням поточного часу об'єкта
- [IntlCalendar::getActualMinimum](intlcalendar.getactualminimum.md)
— Мінімальне значення для поля з урахуванням поточного часу об'єкта
- [IntlCalendar::getAvailableLocales](intlcalendar.getavailablelocales.md)
— отримує масив мовних стандартів, для яких є дані
- [IntlCalendar::getDayOfWeekType](intlcalendar.getdayofweektype.md)
— Повідомляє, чи день буде буднім, вихідним чи днем з переходом
між ними
- [IntlCalendar::getErrorCode](intlcalendar.geterrorcode.md) -
Отримує останній код помилки об'єкта
- [IntlCalendar::getErrorMessage](intlcalendar.geterrormessage.md) -
Отримує останнє повідомлення про помилку для об'єкту
- [IntlCalendar::getFirstDayOfWeek](intlcalendar.getfirstdayofweek.md)
— Отримує перший день тижня для стандарту календаря.
- [IntlCalendar::getGreatestMinimum](intlcalendar.getgreatestminimum.md)
— Отримує найбільше локальне мінімальне значення поля
- [IntlCalendar::getKeywordValuesForLocale](intlcalendar.getkeywordvaluesforlocale.md)
— Набір значень ключових слів мовного стандарту
- [IntlCalendar::getLeastMaximum](intlcalendar.getleastmaximum.md) -
Отримує найменший локальний максимум для поля
- [IntlCalendar::getLocale](intlcalendar.getlocale.md) — Отримує
мовний стандарт, пов'язаний із об'єктом
- [IntlCalendar::getMaximum](intlcalendar.getmaximum.md) — Отримує
глобальне максимальне значення поля
- [IntlCalendar::getMinimalDaysInFirstWeek](intlcalendar.getminimaldaysinfirstweek.md)
— Отримує мінімальну кількість днів, яка може бути першою
тижні на рік чи місяць
- [IntlCalendar::getMinimum](intlcalendar.getminimum.md) — Отримує
глобальне мінімальне значення поля
- [IntlCalendar::getNow](intlcalendar.getnow.md) — Отримує число,
що представляє поточний час
- [IntlCalendar::getRepeatedWallTimeOption](intlcalendar.getrepeatedwalltimeoption.md)
— Отримує поведінку для обробки часу процесора, що повторюється.
- [IntlCalendar::getSkippedWallTimeOption](intlcalendar.getskippedwalltimeoption.md)
— Отримує поведінку для обробки пропущеного часу процесора
- [IntlCalendar::getTime](intlcalendar.gettime.md) — Отримує час,
представлене на даний момент об'єктом
- [IntlCalendar::getTimeZone](intlcalendar.gettimezone.md) -
Отримує часовий пояс об'єкту
- [IntlCalendar::getType](intlcalendar.gettype.md) — Отримує тип
календаря
- [IntlCalendar::getWeekendTransition](intlcalendar.getweekendtransition.md)
— Отримує час, коли вихідні починаються або закінчуються.
- [IntlCalendar::inDaylightTime](intlcalendar.indaylighttime.md) -
Визначає, чи час об'єкта переходить на літній час
- [IntlCalendar::isEquivalentTo](intlcalendar.isequivalentto.md) -
Визначає, чи дорівнює інший календар, але для іншого часу
- [IntlCalendar::isLenient](intlcalendar.islenient.md) — Визначає,
чи є інтерпретація дати/часу м'якої
- [IntlCalendar::isSet](intlcalendar.isset.md) - Визначає,
чи встановлено поле
- [IntlCalendar::isWeekend](intlcalendar.isweekend.md) — Визначає,
чи припадають певні дата/час на вихідні
- [IntlCalendar::roll](intlcalendar.roll.md) — Додає значення до
поле без перенесення в найважливіші поля
- [IntlCalendar::set](intlcalendar.set.md) — Встановлює поле
часу або відразу кілька спільних полів
- [IntlCalendar::setFirstDayOfWeek](intlcalendar.setfirstdayofweek.md)
— Встановлює день, який є початком тижня
- [IntlCalendar::setLenient](intlcalendar.setlenient.md) -
Встановлює, чи інтерпретація дати/часу повинна бути м'якою.
- [IntlCalendar::setMinimalDaysInFirstWeek](intlcalendar.setminimaldaysinfirstweek.md)
— Встановлює мінімальну кількість днів, яка може бути в
першому тижні на рік або місяць
- [IntlCalendar::setRepeatedWallTimeOption](intlcalendar.setrepeatedwalltimeoption.md)
— Встановлює поведінку для обробки часу, що повторюється
процесора при негативних переходах усунення часового поясу
- [IntlCalendar::setSkippedWallTimeOption](intlcalendar.setskippedwalltimeoption.md)
— Встановлює поведінку для обробки пропущеного часу
процесора при позитивних переходах усунення часового поясу
- [IntlCalendar::setTime](intlcalendar.settime.md) — Встановлює
календарний час у мілісекундах з початку епохи Unix
- [IntlCalendar::setTimeZone](intlcalendar.settimezone.md) -
Встановлює часовий пояс, що використовується календарем
- [IntlCalendar::toDateTime](intlcalendar.todatetime.md) -
Перетворює IntlCalendar на об'єкт DateTime
