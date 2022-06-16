- [« mysqli::$warning_count](mysqli.warning-count.md)
- [mysqli_stmt::$affected_rows »](mysqli-stmt.affected-rows.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- The mysqli_stmt class

# The mysqli_stmt class

(PHP 5, PHP 7, PHP 8)

## Вступ

Подає підготовлений вираз.

## Огляд класів

class **mysqli_stmt** {

/\* Властивості \*/

public readonly int\|string `$affected_rows`;

public readonly int\|string `$insert_id`;

public readonly int\|string `$num_rows`;

public readonly int `$param_count`;

public readonly int `$field_count`;

public readonly int `$errno`;

public readonly string `$error`;

public readonly array `$error_list`;

public readonly string `$sqlstate`;

public int `$id`;

/\* Методи \*/

public
[\_\_construct](mysqli-stmt.construct.md)([mysqli](class.mysqli.md)
`$mysql`, ?string `$query` u003d **`null`**)

public [attr_get](mysqli-stmt.attr-get.md)(int `$attribute`): int

public [attr_set](mysqli-stmt.attr-set.md)(int `$attribute`, int
`$value`): bool

public [bind_param](mysqli-stmt.bind-param.md)(string `$types`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): bool

public
[bind_result](mysqli-stmt.bind-result.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): bool

public [close](mysqli-stmt.close.md)(): bool

public [data_seek](mysqli-stmt.data-seek.md)(int `$offset`): void

public [execute](mysqli-stmt.execute.md)(?array `$params` u003d
**`null`**): bool

public [fetch](mysqli-stmt.fetch.md)(): ?bool

public [free_result](mysqli-stmt.free-result.md)(): void

public [get_result](mysqli-stmt.get-result.md)():
[mysqli_result](class.mysqli-result.md)\|false

public [get_warnings](mysqli-stmt.get-warnings.md)():
[mysqli_warning](class.mysqli-warning.md)\|false

public [more_results](mysqli-stmt.more-results.md)(): bool

public [next_result](mysqli-stmt.next-result.md)(): bool

public [num_rows](mysqli-stmt.num-rows.md)(): int\|string

public [prepare](mysqli-stmt.prepare.md)(string `$query`): bool

public [reset](mysqli-stmt.reset.md)(): bool

public [result_metadata](mysqli-stmt.result-metadata.md)():
[mysqli_result](class.mysqli-result.md)\|false

public [send_long_data](mysqli-stmt.send-long-data.md)(int
`$param_num`, string `$data`): bool

public [store_result](mysqli-stmt.store-result.md)(): bool

}

## Властивості

`id`
Зберігає ідентифікатор оператора.

## Зміст

- [mysqli_stmt::$affected_rows](mysqli-stmt.affected-rows.md) -
Повертає загальну кількість рядків, змінених, віддалених,
вставлених або зіставлених останнім виконаним виразом
- [mysqli_stmt::attr_get](mysqli-stmt.attr-get.md) — Отримує
поточне значення атрибуту запиту
- [mysqli_stmt::attr_set](mysqli-stmt.attr-set.md) — Змінює
поведінка підготовленого запиту
- [mysqli_stmt::bind_param](mysqli-stmt.bind-param.md) — Прив'язка
змінних до параметрів запиту, що готується
- [mysqli_stmt::bind_result](mysqli-stmt.bind-result.md) — Прив'язка
змінних до підготовленого запиту для розміщення результату
- [mysqli_stmt::close](mysqli-stmt.close.md) — Закриває
підготовлений запит
- [mysqli_stmt::\_\_construct](mysqli-stmt.construct.md) -
Конструктор для об'єкту mysqli_stmt
- [mysqli_stmt::data_seek](mysqli-stmt.data-seek.md) — Перехід до
заданому рядку в результуючому наборі
- [mysqli_stmt::$errno](mysqli-stmt.errno.md) — Повертає код
помилки виконання останнього запиту
- [mysqli_stmt::$error_list](mysqli-stmt.error-list.md) — Повертає
список помилок виконання останнього запиту
- [mysqli_stmt::$error](mysqli-stmt.error.md) — Повертає рядок з
поясненням останньої помилки під час виконання запиту
- [mysqli_stmt::execute](mysqli-stmt.execute.md) — Виконує
підготовлене затвердження
- [mysqli_stmt::fetch](mysqli-stmt.fetch.md) — Зв'язує результати
підготовленого виразу зі змінними
- [mysqli_stmt::$field_count](mysqli-stmt.field-count.md) -
Повертає кількість стовпців у заданому вираженні
- [mysqli_stmt::free_result](mysqli-stmt.free-result.md) -
Звільняє пам'ять від результату запиту, вказаного дескриптором
- [mysqli_stmt::get_result](mysqli-stmt.get-result.md) — Отримує
результат із підготовленого запиту як об'єкт mysqli_result
- [mysqli_stmt::get_warnings](mysqli-stmt.get-warnings.md) -
Отримує результат від SHOW WARNINGS
- [mysqli_stmt::$insert_id](mysqli-stmt.insert-id.md) — Отримує ID,
згенерований попередньою операцією INSERT
- [mysqli_stmt::more_results](mysqli-stmt.more-results.md)
Перевіряє, чи є ще набори рядків через мультизапит.
- [mysqli_stmt::next_result](mysqli-stmt.next-result.md) — Читає
наступний набір рядків із мультизапиту
- [mysqli_stmt::$num_rows](mysqli-stmt.num-rows.md) — Повертає
кількість рядків, отриманих із сервера
- [mysqli_stmt::$param_count](mysqli-stmt.param-count.md) -
Повертає кількість параметрів у запиті
- [mysqli_stmt::prepare](mysqli-stmt.prepare.md) — Підготовка
затвердження SQL до виконання
- [mysqli_stmt::reset](mysqli-stmt.reset.md) — Скидає результати
виконання підготовленого запиту
- [mysqli_stmt::result_metadata](mysqli-stmt.result-metadata.md) -
Повертає метадані результуючої таблиці.
запиту
- [mysqli_stmt::send_long_data](mysqli-stmt.send-long-data.md) -
Надсилання даних блоками
- [mysqli_stmt::$sqlstate](mysqli-stmt.sqlstate.md) — Повертає код
помилки SQLSTATE, викликаної під час виконання останньої операції над
запитом
- [mysqli_stmt::store_result](mysqli-stmt.store-result.md)
Зберігає набір результатів у внутрішньому буфері
