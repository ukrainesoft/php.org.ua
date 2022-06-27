- [« pg_num_fields](function.pg-num-fields.md)
- [pg_options »](function.pg-options.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає кількість рядків у вибірці

#pg_num_rows

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_num_rows — Повертає кількість рядків у вибірці

### Опис

**pg_num_rows**([PgSql\Result](class.pgsql-result.md) `$result`): int

**pg_num_rows()** повертає кількість рядків в екземплярі
[PgSql\Result](class.pgsql-result.md).

> **Примітка**:
>
> Раніше функція називалася **pg_numrows()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

### Значення, що повертаються

Кількість рядків у вибірці. У разі виникнення помилки повертає
`-1`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_num_rows()****

` <?php$result u003d pg_query($conn, "SELECT 1");$rows u003d pg_num_rows($result);echo "Повернуто рядок: " . $rows . ".
";?> `

Результат виконання цього прикладу:

Повернено рядків: 1.

### Дивіться також

- [pg_num_fields()](function.pg-num-fields.md) - Повертає
кількість полів у вибірці
- [pg_affected_rows()](function.pg-affected-rows.md) - Повертає
кількість порушених запитом записів (кортежів)
