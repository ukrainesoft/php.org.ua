- [« date_offset_get](function.date-offset-get.md)
- [date_parse »] (function.date-parse.md)

- [PHP Manual](index.md)
- [Функції дати та часу](ref.datetime.md)
- Отримання інформації про задану у визначеному форматі дату

# date_parse_from_format

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

date_parse_from_format — Отримання інформації про задану в певному
форматі дати

### Опис

**date_parse_from_format**(string `$format`, string `$datetime`): array

Повертає асоціативний масив з детальною інформацією про задану
дати/часу.

### Список параметрів

`format`
Формат, що розпізнається функцією
[DateTime::createFromFormat()](datetime.createfromformat.md).

`datetime`
Рядок, що представляє дату/час.

### Значення, що повертаються

Повертає асоціативний масив з детальною інформацією про задану
дати/часу.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 7.2.0 | Елемент `zone` масиву, що повертається, відображає тепер секунди замість хвилин, а його знак інвертується. Наприклад, `-120` тепер буде `7200`. |

### Приклади

**Приклад #1 Приклад використання **date_parse_from_format()****

` <?php$date u003d "6.1.2009 13:00+01:00";print_r(date_parse_from_format("j.n.Y H:iP", $date));?> `

Результат виконання цього прикладу:

Array
(
[year] u003d> 2009
[month] u003d> 1
[day] u003d> 6
[hour] u003d> 13
[minute] u003d> 0
[second] u003d> 0
[fraction] u003d>
[warning_count] u003d> 0
[warnings] u003d> Array
(
)

[error_count] u003d> 0
[errors] u003d> Array
(
)

[is_localtime] u003d> 1
[zone_type] u003d> 1
[zone] u003d> -60
[is_dst] u003d>
)

### Дивіться також

- [DateTime::createFromFormat()](datetime.createfromformat.md) -
Розбирає рядок з датою згідно з вказаним форматом
- [checkdate()](function.checkdate.md) - Перевіряє правильність дати
за григоріанським календарем
