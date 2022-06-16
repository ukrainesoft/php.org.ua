- [« pg_fetch_result](function.pg-fetch-result.md)
- [pg_field_is_null »](function.pg-field-is-null.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вибирає рядок результату запиту та поміщає дані у масив

#pg_fetch_row

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_fetch_row — Вибирає рядок результату запиту та поміщає дані в
масив

### Опис

**pg_fetch_row**([PgSql\Result](class.pgsql-result.md) `$result`, ?int
`$row` u003d **`null`**, int `$mode` u003d **`PGSQL_NUM`**): array\|false

**pg_fetch_row()** вибирає один рядок із результату запиту `result`.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

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

Чисельно індексований масив значень рядка результату запиту.
Індексація починається з нуля. Значення представляються як рядків.
Значення `NULL` бази даних перетворюються на PHP **`null`**.

**`false`**, якщо `row` перевищує кількість рядків у результаті запиту,
коли рядків у результаті не залишилося, та за інших помилок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_fetch_row()****

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}$result u003dpg_query($conn, "SELECT author, email FROM authors");if (!$result) { echo "Відбулася помилка.
";  exit;}while ($row u003d pg_fetch_row($result)) {  echo "Автор: $row[0]  E-mail: $row[1]";  echo "<br />
";}?> `

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
- [pg_fetch_object()](function.pg-fetch-object.md) - Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_fetch_result()](function.pg-fetch-result.md) - Повертає
запис з результату запиту
