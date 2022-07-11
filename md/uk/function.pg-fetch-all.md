- [« pg_fetch_all_columns](function.pg-fetch-all-columns.md)
- [pg_fetch_array »](function.pg-fetch-array.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вибирає всі дані з результату запиту та поміщає їх у масив

#pg_fetch_all

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_fetch_all — Вибирає всі дані з результату запиту та поміщає їх у
масив

### Опис

**pg_fetch_all**([PgSql\Result](class.pgsql-result.md) `$result`, int
`$mode` u003d **`PGSQL_ASSOC`**): array

**pg_fetch_all()** повертає масив, що містить всі записи екземпляра
[PgSql\Result](class.pgsql-result.md).

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`mode`
Необов'язковий параметр, який визначає, як індексується
повертається масив (array). Параметр `mode` є константою і може
приймати наступні значення: **`PGSQL_ASSOC`**, **`PGSQL_NUM`** та
**`PGSQL_BOTH`**. Використовуючи **`PGSQL_NUM`**, **pg_fetch_all()** поверне
масив з числовими індексами, використовуючи **`PGSQL_ASSOC`**, вона поверне
тільки асоціативні індекси, а **`PGSQL_BOTH`** за замовчуванням буде
повертати як числові, і асоціативні індекси.

### Значення, що повертаються

Багатовимірний масив даних результату запиту. Кожен рядок результату
є масивом значень полів, індексованим іменами цих
полів.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.1.0 | Доданий параметр `mode`. |

### Приклади

**Приклад #1 Приклад використання**

` <?php$connu003du003dpg_pconnect("dbnameu003dpublisher");if(!$conn) {   echo "Відбулася помилка.
";   exit;}$result u003d pg_query($conn, "SELECT * FROM authors");if (!$result) {   echo "Відбулася помилка.
";   exit;}$arr u003d pg_fetch_all($result);print_r($arr);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[id] u003d> 1
[name] u003d> Fred
)

[1] u003d> Array
(
[id] u003d> 2
[name] u003d> Bob
)

)

### Дивіться також

- [pg_fetch_row()](function.pg-fetch-row.md) - Вибирає рядок
результату запиту та поміщає дані в масив
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
- [pg_fetch_object()](function.pg-fetch-object.md) - Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_fetch_result()](function.pg-fetch-result.md) - Повертає
запис з результату запиту
