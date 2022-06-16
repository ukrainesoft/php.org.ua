- [« pg_fetch_object](function.pg-fetch-object.md)
- [pg_fetch_row »](function.pg-fetch-row.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає запис із результату запиту

#pg_fetch_result

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_fetch_result — Повертає запис із результату запиту

### Опис

**pg_fetch_result**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$row`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field`): string\|false\|null

**pg_fetch_result**([PgSql\Result](class.pgsql-result.md) `$result`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field`): string\|false\|null

**pg_fetch_result()** повертає значення осередку таблиці екземпляра
[PgSql\Result](class.pgsql-result.md).

> **Примітка**:
>
> Колишня назва функції: **pg_result()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Номер вибирається з результату запиту рядка. Нумерація починається з
нуля. Якщо аргумент опущений, береться наступний по черзі рядок.

`field`
Ім'я або номер поля значення, що вибирається. Поля нумеруються з нуля.

### Значення, що повертаються

Логічні значення повертаються як "t" чи "f". Інші типи,
включаючи масиви, повертаються у вигляді рядків у стандартному форматі
PostgreSQL, аналогічно висновку програми psql. Значення `NULL` бази
даних перетворюються на PHP **`null`**.

**`false`**, якщо `row` перевищує число рядків в результаті запиту, та
за інших помилок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_fetch_result()****

` <?php$db u003d pg_connect("dbnameu003dusers useru003dme") || die();$res u003d pg_query($db, "SELECT 1 UNION ALL SELECT 2");$val u003d pg_fetch_result($res, 1, 0);echo "Перше поле во другий       "
";?> `

Результат виконання цього прикладу:

Перше поле у другому рядку результату це: 2

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
