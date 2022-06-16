- [« Функції PostgreSQL](ref.pgsql.md)
- [pg_cancel_query »](function.pg-cancel-query.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає кількість порушених запитом записів (кортежів)

#pg_affected_rows

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_affected_rows — Повертає кількість порушених запитом записів
(кортежів)

### Опис

**pg_affected_rows**([PgSql\Result](class.pgsql-result.md) `$result`):
int

**pg_affected_rows()** повертає кількість кортежів
(сутностей/записів/рядів) порушених запитом `INSERT`, `UPDATE`, та
`DELETE` queries.

З версії PostgreSQL 9.0 і новіше, сервер повертає кількість вибраних рядів
для запиту SELECT. Старіші версії повертають 0 для SELECT.

> **Примітка**:
>
> Раніше ця функція називалася **pg_cmdtuples()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

### Значення, що повертаються

Кількість записів, порушених запитом. Якщо жоден кортеж не був
торкнуться, функція поверне `0`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_affected_rows()****

` <?php$result u003d pg_query($conn, "INSERT INTO authors VALUES ('Orwell', 2002, 'Animal Farm')");$cmdtuples u003d pg_affected_rows($$cm); "Кортежів" порушено.
";?> `

Результат виконання цього прикладу:

1 кортежів порушено.

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_query_params()](function.pg-query-params.md) - Посилає
параметризований запит на сервер, параметри передаються окремо від
тексту SQL запиту
- [pg_execute()](function.pg-execute.md) - Запускає виконання
раніше підготовленого параметризованого запиту та чекає результат
- [pg_num_rows()](function.pg-num-rows.md) - Повертає кількість
рядків у вибірці
