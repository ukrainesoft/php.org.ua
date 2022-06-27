- [« mysqli_stmt::store_result](mysqli-stmt.store-result.md)
- [mysqli_result::\_\_construct »](mysqli-result.construct.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Клас mysqli_result

# Клас mysqli_result

(PHP 5, PHP 7, PHP 8)

## Вступ

Надає результуючий набір, отриманий із запиту до бази даних.

## Огляд класів

class **mysqli_result** implements
[IteratorAggregate](class.iteratoraggregate.md) {

/\* Властивості \*/

public readonly int `$current_field`;

public readonly int `$field_count`;

public readonly ?array `$ lengths`;

public readonly int\|string `$num_rows`;

public int `$type`;

/\* Методи \*/

public
[\_\_construct](mysqli-result.construct.md)([mysqli](class.mysqli.md)
`$mysql`, int `$result_mode` u003d **`MYSQLI_STORE_RESULT`**)

public [data_seek](mysqli-result.data-seek.md)(int `$offset`): bool

public [fetch_all](mysqli-result.fetch-all.md)(int `$mode` u003d
**`MYSQLI_NUM`**): array

public [fetch_array](mysqli-result.fetch-array.md)(int `$mode` u003d
**`MYSQLI_BOTH`**): array\|null\|false

public [fetch_assoc](mysqli-result.fetch-assoc.md)():
array\|null\|false

public [fetch_column](mysqli-result.fetch-column.md)(int `$column` u003d
0): null\|int\|float\|string\|false

public [fetch_field_direct](mysqli-result.fetch-field-direct.md)(int
`$index`): object\|false

public [fetch_field](mysqli-result.fetch-field.md)(): object\|false

public [fetch_fields](mysqli-result.fetch-fields.md)(): array

public [fetch_object](mysqli-result.fetch-object.md)(string `$class` u003d
"stdClass", array `$constructor_args` u003d \[\]): object\|null\|false

public [fetch_row](mysqli-result.fetch-row.md)(): array\|null\|false

public [field_seek](mysqli-result.field-seek.md)(int `$index`): bool

public [free](mysqli-result.free.md)(): void

public [close](mysqli-result.free.md)(): void

public [free_result](mysqli-result.free.md)(): void

public [getIterator](mysqli-result.getiterator.md)():
[Iterator](class.iterator.md)

}

## Властивості

`type`
Зберігає буферизований або небуферизований результат у вигляді цілого
числа (int) (**`MYSQLI_STORE_RESULT`** або **`MYSQLI_USE_RESULT`**
відповідно).

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | Клас **mysqli_result** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше замість нього було реалізовано інтерфейс [Traversable](class.traversable.md). |

## Зміст

- [mysqli_result::\_\_construct](mysqli-result.construct.md) -
Конструктор об'єкту mysqli_result
- [mysqli_result::$current_field](mysqli-result.current-field.md)
Отримує зміщення вказівника по відношенню до поточного поля
- [mysqli_result::data_seek](mysqli-result.data-seek.md)
Переміщує покажчик результату на вибраний рядок
- [mysqli_result::fetch_all](mysqli-result.fetch-all.md) — Вибирає
всі рядки з результуючого набору та поміщає їх в асоціативний
масив, звичайний масив або в обидва
- [mysqli_result::fetch_array](mysqli-result.fetch-array.md)
Вибирає наступний рядок з набору результатів і поміщає їх у
асоціативний масив, звичайний масив або обидва
- [mysqli_result::fetch_assoc](mysqli-result.fetch-assoc.md)
Вибирає наступний рядок з набору результатів і поміщає їх у
асоціативний масив
- [mysqli_result::fetch_column](mysqli-result.fetch-column.md)
Отримує один стовпець з наступного рядка набору результатів
- [mysqli_result::fetch_field_direct](mysqli-result.fetch-field-direct.md)
— Отримання метаданих конкретного поля
- [mysqli_result::fetch_field](mysqli-result.fetch-field.md)
Повертає наступне поле результуючого набору
- [mysqli_result::fetch_fields](mysqli-result.fetch-fields.md)
Повертає масив об'єктів, що становлять поля результуючого
набору
- [mysqli_result::fetch_object](mysqli-result.fetch-object.md)
Вибирає наступний рядок із набору результатів у вигляді об'єкта
- [mysqli_result::fetch_row](mysqli-result.fetch-row.md) — Вибирає
наступний рядок з набору результатів та поміщає її у звичайний
масив
- [mysqli_result::$field_count](mysqli-result.field-count.md)
Отримує кількість полів у наборі результатів
- [mysqli_result::field_seek](mysqli-result.field-seek.md)
Встановити вказівник поля на певне усунення
- [mysqli_result::free](mysqli-result.free.md) — Звільняє пам'ять,
зайняту результатами запиту
- [mysqli_result::getIterator](mysqli-result.getiterator.md)
Витягує зовнішній ітератор
- [mysqli_result::$lengths](mysqli-result.lengths.md) — Повертає
довжини полів поточного рядка результуючого набору
- [mysqli_result::$num_rows](mysqli-result.num-rows.md) — Отримує
кількість рядків у наборі результатів
