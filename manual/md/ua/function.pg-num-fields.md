- [« pg_meta_data](function.pg-meta-data.md)
- [pg_num_rows »](function.pg-num-rows.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає кількість полів у вибірці

#pg_num_fields

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_num_fields — Повертає кількість полів у вибірці

### Опис

**pg_num_fields**([PgSql\Result](class.pgsql-result.md) `$result`):
int

**pg_num_fields()** повертає кількість полів (стовпців) в екземплярі
[PgSql\Result](class.pgsql-result.md).

> **Примітка**:
>
> Раніше функція називалася **pg_numfields()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

### Значення, що повертаються

Кількість полів (стовпців) у вибірці. У разі виникнення помилки
повертає -1.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_num_fields()****

` <?php$result u003d pg_query($conn, "SELECT 1, 2");$num u003d pg_num_fields($result);echo "Повернуто полів: " . $num . ".
";?> `

Результат виконання цього прикладу:

Повернуто поля: 2.

### Дивіться також

- [pg_num_rows()](function.pg-num-rows.md) - Повертає кількість
рядків у вибірці
- [pg_affected_rows()](function.pg-affected-rows.md) - Повертає
кількість порушених запитом записів (кортежів)
