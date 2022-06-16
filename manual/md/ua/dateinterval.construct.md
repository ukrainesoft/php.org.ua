- [« DateInterval](class.dateinterval.md)
- [DateInterval::createFromDateString
»](dateinterval.createfromdatestring.md)

- [PHP Manual](index.md)
- [DateInterval](class.dateinterval.md)
- Створює новий об'єкт DateInterval

# DateInterval::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateInterval::\_\_construct — Створює новий об'єкт DateInterval

### Опис

public **DateInterval::\_\_construct**(string `$duration`)

Створює новий об'єкт DateInterval.

### Список параметрів

`duration`
Опис інтервалу.

Формат опису інтервалу починається з літери `P`. Кожен період
інтервалу представлений цілим числом, за яким слідує вказівник його
типу. Можливі типи наведено у таблиці. Якщо інтервал містить
періоди, що позначають час, їх опису повинна передувати буква
`T`.

| Вказівник періоду | Опис |
|-------------------|----------------------------- -------------------------------------------------- ---|
| 'Y' | року |
| `M` | Місяці |
| `D` | дні |
| `W` | тижня. Перетворюється на дні. До PHP 8.0.0 було використовуватися спільно з `D`. |
| `H` | годинник |
| `M` | хвилини |
| `S` | секунди

**Покажчики періодів `duration`**

Ось кілька простих прикладів. Два дні – `P2D`. Дві секунди – `PT2S`.
Шість років і п'ять хвилин – `P6YT5M`.

> **Примітка**:
>
> Покажчики повинні записуватись від більшої величини (ліворуч) до меншої
> величині (направо). Тобто роки мають бути до місяців, місяці до
> днів, дні до хвилин тощо. Таким чином, один рік і чотири дні
> повинні бути представлені як `P1Y4D`, але не `P4D1Y`.

Задати період також можна як дати і часу. Приклад одного року та
Чотирьох днів може описуватися як `P0001-00-04T00:00:00`. Але значення в
цьому форматі не повинні виходити за рамки допустимих значень дати та
часу (наприклад, `25` годин неприпустимо)

Ці формати засновані на [» спеціфікації ISO
8601](http://en.wikipedia.org/wiki/Iso8601#Durations).

### Помилки

Викидає [Exception](class.exception.md), якщо `duration` не може
бути розпізнаний як інтервал.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.2.0 | Будуть видно тільки `y` в `f`, `invert` та `days`, включаючи нову логічну властивість `from_string`. |
| 8.0.0 | `W` тепер може використовуватися спільно з `D`. |

### Приклади

**Приклад #1 Приклад використання
[DateInterval](class.dateinterval.md)**

` <?php$interval u003d new DateInterval('P1W2D');var_dump($interval);?> `

Результат виконання цього прикладу в PHP 8.2:

object(DateInterval)#1 (10) {
["y"]u003d>
int(0)
["m"]u003d>
int(0)
["d"]u003d>
int(9)
["h"]u003d>
int(0)
["i"]u003d>
int(0)
["s"]u003d>
int(0)
["f"]u003d>
float(0)
["invert"]u003d>
int(0)
["days"]u003d>
bool(false)
["from_string"]u003d>
bool(false)
}

Результат виконання цього прикладу в PHP 8:

object(DateInterval)#1 (16) {
["y"]u003d>
int(0)
["m"]u003d>
int(0)
["d"]u003d>
int(9)
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
int(0)
["special_amount"]u003d>
int(0)
["have_weekday_relative"]u003d>
int(0)
["have_special_relative"]u003d>
int(0)
}

Результат виконання цього прикладу в PHP 7:

object(DateInterval)#1 (16) {
["y"]u003d>
int(0)
["m"]u003d>
int(0)
["d"]u003d>
int(2)
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
int(0)
["special_amount"]u003d>
int(0)
["have_weekday_relative"]u003d>
int(0)
["have_special_relative"]u003d>
int(0)
}

### Дивіться також

- [DateInterval::format()](dateinterval.format.md) - Форматує
інтервал
- [DateTime::add()](datetime.add.md) - Змінює об'єкт DateTime,
додаючи кількість днів, місяців, років, годин, хвилин та секунд
- [DateTime::sub()](datetime.sub.md) - Віднімає задану кількість
днів, місяців, років, годин, хвилин та секунд з часу об'єкту
DateTime
- [DateTime::diff()](datetime.diff.md) - Повертає різницю між
двома об'єктами DateTime
