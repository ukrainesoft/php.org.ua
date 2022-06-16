- [«date_sub](function.date-sub.md)
- [date_sunrise »](function.date-sunrise.md)

- [PHP Manual](index.md)
- [Функції дати та часу](ref.datetime.md)
- Повертає масив з інформацією про захід сонця/світанок і початок/закінчення
сутінків

#date_sun_info

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

date_sun_info — Повертає масив з інформацією про захід сонця/світан і
початку/закінчення сутінків

### Опис

**date_sun_info**(int `$timestamp`, float `$latitude`, float
`$longitude`): array

### Список параметрів

`timestamp`
Тимчасова мітка Unix.

`latitude`
Широта у градусах.

`longitude`
Довгота у градусах.

### Значення, що повертаються

Повертає масив у разі успішного виконання або **`false`** у разі
виникнення помилки. Структура масиву докладно описана в наступному
списку:

`sunrise`
Тимчасова мітка сходу сонця (зенітний кут u003d 90 ° 35 ').

`sunset`
Тимчасова мітка заходу сонця (зенітний кут u003d 90 ° 35 ').

`transit`
Тимчасова мітка, коли сонце знаходиться у своєму зеніті, тобто досягло
найвищої точки.

`civil_twilight_begin`
Початок громадянського світанку (зенітний кут u003d 96 °). Воно закінчується на
`sunrise`.

`civil_twilight_end`
Кінець громадянського заходу сонця (зенітний кут u003d 96°). Воно починається на
`sunset`.

`nautical_twilight_begin`
Початок навігаційного світанку (зенітний кут u003d 102 °). Воно закінчується
`civil_twilight_begin`.

`nautical_twilight_end`
Кінець навігаційного заходу (зенітний кут u003d 102 °). Воно починається на
`civil_twilight_end`.

`astronomical_twilight_begin`
Початок астрономічного світанку (зенітний кут u003d 108 °). Воно
закінчується на `nautical_twilight_begin`.

`astronomical_twilight_end`
Кінець астрономічного заходу (зенітний кут u003d 108 °). Воно починається на
`nautical_twilight_end`.

Значення елементів масиву – або тимчасова мітка UNIX, **`false`**,
якщо сонце знаходиться нижче відповідного зеніту протягом усього дня,
або **`true`**, якщо сонце знаходиться вище відповідного зеніту в
протягом дня.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 7.2.0 | Розрахунок був виправлений з урахуванням місцевої опівночі замість місцевого полудня, що дещо змінює результати. |

### Приклади

**Приклад #1 Приклад використання **date_sun_info()****

` <?php$sun_info u003d date_sun_info(strtotime("2006-12-12"), 31.7667, 35.2333);foreach ($sun_info as $key u003d> $val) {   | date("H:i:s", $val) . "
";}?> `

Результат виконання цього прикладу:

sunrise: 05:52:11
sunset: 15:41:21
transit: 10:46:46
civil_twilight_begin: 05:24:08
civil_twilight_end: 16:09:24
nautical_twilight_begin: 04:52:25
nautical_twilight_end: 16:41:06
astronomical_twilight_begin: 04:21:32
astronomical_twilight_end: 17:12:00

**Приклад #2 Полярна ніч**

` <?phpvar_dump(date_sun_info(strtotime("2017-12-21"), 90, 0));?> `

Результат виконання цього прикладу:

array(9) {
["sunrise"]u003d>
bool(false)
["sunset"]u003d>
bool(false)
["transit"]u003d>
int(1513857490)
["civil_twilight_begin"]u003d>
bool(false)
["civil_twilight_end"]u003d>
bool(false)
["nautical_twilight_begin"]u003d>
bool(false)
["nautical_twilight_end"]u003d>
bool(false)
["astronomical_twilight_begin"]u003d>
bool(false)
["astronomical_twilight_end"]u003d>
bool(false)
}

**Приклад #3 Сонячне сонце**

` <?phpvar_dump(date_sun_info(strtotime("2017-06-21"), 90, 0));?> `

Результат виконання цього прикладу:

array(9) {
["sunrise"]u003d>
bool(true)
["sunset"]u003d>
bool(true)
["transit"]u003d>
int(1498046510)
["civil_twilight_begin"]u003d>
bool(true)
["civil_twilight_end"]u003d>
bool(true)
["nautical_twilight_begin"]u003d>
bool(true)
["nautical_twilight_end"]u003d>
bool(true)
["astronomical_twilight_begin"]u003d>
bool(true)
["astronomical_twilight_end"]u003d>
bool(true)
}

### Дивіться також

- [date_sunrise()](function.date-sunrise.md) - Повертає час
світанку для заданих дня та місця розташування
- [date_sunset()](function.date-sunset.md) - Повертає час заходу
сонця для заданих дня та місця розташування
