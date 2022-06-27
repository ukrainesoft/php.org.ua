- [« DateTimeZone::getOffset](datetimezone.getoffset.md)
- [DateTimeZone::listAbbreviations
»](datetimezone.listabbreviations.md)

- [PHP Manual](index.md)
- [DateTimeZone](class.datetimezone.md)
- Повертає всі переходи для часового поясу

# DateTimeZone::getTransitions

#timezone_transitions_get

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTimeZone::getTransitions -- timezone_transitions_get — Повертає
всі переходи для часового поясу

### Опис

Об'єктно-орієнтований стиль

public **DateTimeZone::getTransitions**(int `$timestampBegin` u003d
**`PHP_INT_MIN`**, int `$timestampEnd` u003d **`PHP_INT_MAX`**):
array\|false

Процедурний стиль

[timezone_transitions_get](function.timezone-transitions-get.md)([DateTimeZone](class.datetimezone.md)
`$object`, int `$timestampBegin` u003d **`PHP_INT_MIN`**, int
`$timestampEnd` u003d **`PHP_INT_MAX`**): array\|false

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт
[DateTimeZone](class.datetimezone.md), що повертається
[timezone_open()](function.timezone-open.md).

`timestampBegin`
Початкова позначка часу.

`timestampEnd`
Кінцева позначка часу.

### Значення, що повертаються

У разі успішного виконання повертає чисельно індексований масив
масивів з усіма переходами або **`false`** у разі виникнення
помилки. Об'єкти DateTimeZone, що обертають тип 1 (зміщення UTC) та тип 2
(скорочення), не містять переходів та виклик цього методу в такому випадку
поверне **`false`**.

Якщо заданий параметр `timestampBegin`, то перший запис у повертається
масиві міститиме елемент переходу на момент параметра
`timestampBegin`.

| Ключ | Тип | Опис |
|----------|--------|----------------------------- --------------------|
| `ts` | int | Мітка часу Unix |
| `time` | string | **`DateTimeInterface::ISO8601`** рядок часу |
| `offset` | int | Зміщення від UTC за секунди |
| `isdst` | bool | Чи активний літній час |
| `abbr` | string | Абревіатура часового поясу

**Структура переходів масиву**

### Приклади

**Приклад #1 Приклад використання
[timezone_transitions_get()](function.timezone-transitions-get.md)**

` <?php$timezone u003d new DateTimeZone("Europe/London");$transitions u003d $timezone->getTransitions();print_r(array_slice($transitions, 0, 3));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[ts] u003d> -9223372036854775808
[time] u003d> -292277022657-01-27T08:29:52+0000
[offset] u003d> 3600
[isdst] u003d> 1
[abbr] u003d> BST
)

[1] u003d> Array
(
[ts] u003d> -1691964000
[time] u003d> 1916-05-21T02:00:00+0000
[offset] u003d> 3600
[isdst] u003d> 1
[abbr] u003d> BST
)

[2] u003d> Array
(
[ts] u003d> -1680472800
[time] u003d> 1916-10-01T02:00:00+0000
[offset] u003d> 0
[isdst] u003d>
[abbr] u003d> GMT
)

)

**Приклад #2 Приклад використання
[timezone_transitions_get()](function.timezone-transitions-get.md) з
заданим параметром `timestampBegin`**

` <?php$timezone u003d new DateTimeZone("Europe/London");$transitions u003d $timezone->getTransitions(time());print_r(array_slice($transitions, 0, 3));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[ts] u003d> 1654184161
[time] u003d> 2022-06-02T15:36:01+0000
[offset] u003d> 3600
[isdst] u003d> 1
[abbr] u003d> BST
)

[1] u003d> Array
(
[ts] u003d> 1667091600
[time] u003d> 2022-10-30T01:00:00+0000
[offset] u003d> 0
[isdst] u003d>
[abbr] u003d> GMT
)

[2] u003d> Array
(
[ts] u003d> 1679792400
[time] u003d> 2023-03-26T01:00:00+0000
[offset] u003d> 3600
[isdst] u003d> 1
[abbr] u003d> BST
)

)
