- [« pg_execute](function.pg-execute.md)
- [pg_fetch_all »](function.pg-fetch-all.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вибирає всі записи з однієї колонки результату запиту та поміщає
їх у масив

#pg_fetch_all_columns

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_fetch_all_columns — Вибирає всі записи з однієї колонки результату
запиту та поміщає їх у масив

### Опис

**pg_fetch_all_columns**([PgSql\Result](class.pgsql-result.md)
`$result`, int `$field` u003d 0): array

**pg_fetch_all_columns()** повертає масив, що містить усі записи
однієї колонки екземпляра [PgSql \ Result] (class.pgsql-result.md).

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field`
Номер стовпчика. Якщо параметр не заданий, буде оброблено першу (нульову)
стовпчик.

### Значення, що повертаються

Масив значень стовпчика результату запиту.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_fetch_all_columns()****

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}$result u003d pg_query($conn, "SELECT title, name, address FROM authors");if (!$result) { echo "Відбулася помилка.
";  exit;}// Отримати масив імен всіх авторів$arr u003d pg_fetch_all_columns($result, 1);var_dump($arr);?> `

### Дивіться також

- [pg_fetch_all()](function.pg-fetch-all.md) - Вибирає всі дані
з результату запиту та поміщає їх у масив
