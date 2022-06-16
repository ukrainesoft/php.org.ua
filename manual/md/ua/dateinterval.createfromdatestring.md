- [« DateInterval::\_\_construct](dateinterval.construct.md)
- [DateInterval::format »](dateinterval.format.md)

- [PHP Manual](index.md)
- [DateInterval](class.dateinterval.md)
- Створює об'єкт класу DateInterval із дати у відносному форматі

# DateInterval::createFromDateString

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateInterval::createFromDateString — Створює об'єкт класу DateInterval
з дати у відносному форматі

### Опис

public static **DateInterval::createFromDateString**(string
`$datetime`): [DateInterval](class.dateinterval.md)\|false

Розбирає рядок, що містить часовий інтервал у звичайному
(здобутаному) вигляді і створює на його основі об'єкт класу DateInterval.

### Список параметрів

`datetime`
Дата, що складається з відносних часових фрагментів. Зокрема, для
створення об'єкта DateInterval з частин, записаних у [відносному
форматі](datetime.formats.relative.md), який підтримується
парсером у функціях [DateTimeImmutable](class.datetimeimmutable.md),
[DateTime](class.datetime.md) та
[strtotime()](function.strtotime.md).

### Значення, що повертаються

Повертає новий об'єкт класу [DateInterval](class.dateinterval.md) у
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----|
| 8.2.0 | Тільки властивості `from_string` та `date_string` будуть видно при створенні об'єкта [DateInterval](class.dateinterval.md) за допомогою цього методу. |

### Приклади

**Приклад #1 Аналіз та розбір часових інтервалів**

` <?php// Інтервали в кожному прикладі еквівалентні.$i u003d new DateInterval('P1D');$i u003d DateInterval::createFromDateString('1 day');$i u003d new u003d DateInterval::createFromDateString('2 weeks');$i u003d new DateInterval('P3M');$i u003d DateInterval::createFromDateString('3 months');$i u003d neu DateInterval('$ u003d DateInterval::createFromDateString('4 years');$i u003d new DateInterval('P1Y1D');$i u003d DateInterval::createFromDateString('1 year + 1 day');$i u003du003d ;$i u003d DateInterval::createFromDateString('1 day + 12 hours');$i u003d new DateInterval('PT3600S');$i u003d DateInterval::createFromDateString('3600 ;

**Приклад #2 Розбір спеціальних відносних тимчасових інтервалів**

` <?php$i u003d DateInterval::createFromDateString('last day of next month');var_dump($i);$i u003d DateInterval::createFromDateString('last weekday');var_dump($i); `

Результат виконання цього прикладу в PHP 8.2:

object(DateInterval)#1 (2) {
["from_string"]u003d>
bool(true)
["date_string"]u003d>
string(22) "last day of next month"
}
object(DateInterval)#2 (2) {
["from_string"]u003d>
bool(true)
["date_string"]u003d>
string(12) "last weekday"
}

Результат виконання цього прикладу в PHP 8 аналогічний:

object(DateInterval)#1 (16) {
["y"]u003d>
int(0)
["m"]u003d>
int(1)
["d"]u003d>
int(0)
["h"]u003d>
int(0)
["i"]u003d>
int(0)
["s"]u003d>
int(0)
["f"]u003d>
float(0)
["weekday"]u003d>
int(0)
["weekday_behavior"]u003d>
int(0)
["first_last_day_of"]u003d>
int(2)
["invert"]u003d>
int(0)
["days"]u003d>
bool(false)
["special_type"]u003d>
int(0)
["special_amount"]u003d>
int(0)
["have_weekday_relative"]u003d>
int(0)
["have_special_relative"]u003d>
int(0)
}
object(DateInterval)#2 (16) {
["y"]u003d>
int(0)
["m"]u003d>
int(0)
["d"]u003d>
int(0)
["h"]u003d>
int(0)
["i"]u003d>
int(0)
["s"]u003d>
int(0)
["f"]u003d>
float(0)
["weekday"]u003d>
int(0)
["weekday_behavior"]u003d>
int(0)
["first_last_day_of"]u003d>
int(0)
["invert"]u003d>
int(0)
["days"]u003d>
bool(false)
["special_type"]u003d>
int(1)
["special_amount"]u003d>
int(-1)
["have_weekday_relative"]u003d>
int(0)
["have_special_relative"]u003d>
int(1)
}
