- [« DateTimeZone::getTransitions](datetimezone.gettransitions.md)
- [DateTimeZone::listIdentifiers »](datetimezone.listidentifiers.md)

- [PHP Manual](index.md)
- [DateTimeZone](class.datetimezone.md)
- Повертає асоціативний масив, який містить прапор переходу на літнє
час, зсув та ім'я часового поясу

# DateTimeZone::listAbbreviations

#timezone_abbreviations_list

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTimeZone::listAbbreviations -- timezone_abbreviations_list
Повертає асоціативний масив, який містить прапор переходу на літнє
час, зсув та ім'я часового поясу

### Опис

Об'єктно-орієнтований стиль

public static **DateTimeZone::listAbbreviations**(): array

Процедурний стиль

[timezone_abbreviations_list](function.timezone-abbreviations-list.md)():
array

Список абревіатур, що повертається, включає всі історичні випадки
використання абревіатур, що може призвести до правильних, але
заплутаним записам. Існують також протиріччя, оскільки "pst"
використовується як у США, так і на Філіппінах.

Тому список, який повертає цю функцію, не підходить для створення
масиву з опціями для надання вибору часового поясу користувачам.

> **Примітка**:
>
> Дані для функції попередньо компілюються з міркувань
> продуктивності та не оновлюються при використанні більш нової
> версії [» timezonedb](https://pecl.php.net/package/timezonedb).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив скорочень часових поясів.

### Приклади

**Приклад #1 Приклад використання
[timezone_abbreviations_list()](function.timezone-abbreviations-list.md)**

` <?php$timezone_abbreviations u003d DateTimeZone::listAbbreviations();print_r($timezone_abbreviations["acst"]);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[dst] u003d> 1
[offset] u003d> -14400
[timezone_id] u003d> America/Porto_Acre
)

[1] u003d> Array
(
[dst] u003d> 1
[offset] u003d> -14400
[timezone_id] u003d> America/Eirunepe
)

[2] u003d> Array
(
[dst] u003d> 1
[offset] u003d> -14400
[timezone_id] u003d> America/Rio_Branco
)

[3] u003d> Array
(
[dst] u003d> 1
[offset] u003d> -14400
[timezone_id] u003d> Brazil/Acre
)

)

### Дивіться також

- [timezone_identifiers_list()](function.timezone-identifiers-list.md) -
Псевдонім DateTimeZone::listIdentifiers
