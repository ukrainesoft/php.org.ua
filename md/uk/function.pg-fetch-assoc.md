- [« pg_fetch_array](function.pg-fetch-array.md)
- [pg_fetch_object »](function.pg-fetch-object.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вибирає рядок результату запиту та поміщає дані до асоціативного
масив

#pg_fetch_assoc

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_fetch_assoc — Вибирає рядок результату запиту та поміщає дані в
асоціативний масив

### Опис

**pg_fetch_assoc**([PgSql\Result](class.pgsql-result.md) `$result`,
?int `$row` u003d **`null`**): array\|false

**pg_fetch_assoc()** повертає асоціативний масив, що містить записи
із рядка результату запиту.

Результат виконання **pg_fetch_assoc()** той самий, що й у
[pg_fetch_array()](function.pg-fetch-array.md) з параметром
**`PGSQL_ASSOC`**. Функція повертає лише асоціативний масив. Якщо
потрібен чисельно-індексований масив, використовуйте функцію
[pg_fetch_row()](function.pg-fetch-row.md).

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

**pg_fetch_assoc()** не набагато повільніше і значно простіше в
використання, ніж [pg_fetch_row()](function.pg-fetch-row.md).

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Номер вибирається з результату запиту рядка. Нумерація починається з
нуля. Якщо аргумент опущений або дорівнює **`null`**, береться така
черги рядок.

### Значення, що повертаються

Асоціативний масив індексований іменами полів вибірки. Значення
масиву представляються як текстових рядків. Значення `NULL` бази
даних перетворюються на PHP **`null`**.

**`false`**, якщо `row` перевищує кількість рядків у результаті запиту,
коли рядків у результаті не залишилося, та за інших помилок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_fetch_assoc()****

` <?php$conn u003d pg_connect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}$result u003dpg_query($conn, "SELECT id, author, email FROM authors");if (!$result) { echo "Відбулася помилка.
";  exit;}while ($row u003d pg_fetch_assoc($result)) {  echo $row['id']; echo $row['author'];  echo $row['email'];}?> `

### Дивіться також

- [pg_fetch_row()](function.pg-fetch-row.md) - Вибирає рядок
результату запиту та поміщає дані в масив
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
- [pg_fetch_object()](function.pg-fetch-object.md) - Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_fetch_result()](function.pg-fetch-result.md) - Повертає
запис з результату запиту
