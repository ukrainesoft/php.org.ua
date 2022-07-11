- [« pg_fetch_row](function.pg-fetch-row.md)
- [pg_field_name »](function.pg-field-name.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Перевірка поля на значення SQL NULL

#pg_field_is_null

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_is_null — Перевірка поля на значення SQL `NULL`

### Опис

**pg_field_is_null**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$row`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field`): int

**pg_field_is_null**([PgSql\Result](class.pgsql-result.md) `$result`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field`): int

**pg_field_is_null()** перевіряє, чи містить осередок екземпляра
[PgSql\Result](class.pgsql-result.md) значення SQL `NULL`.

> **Примітка**:
>
> Колишня назва функції: **pg_fieldisnull()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Номер рядка результату запиту з полем. Нумерація рядків
починається з нуля. Якщо аргумент не заданий, буде вибрано поточний рядок.

`field`
Номер поля (з нуля) як int або ім'я поля як string.

### Значення, що повертаються

Повертає `1`, якщо обране значення SQL `NULL`, `0` для інших
значень. Функція поверне **`false`**, якщо номер рядка буде поза
допустимого діапазону та за інших помилок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_field_is_null()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die ("Не удалося з'єднатися з базою"); $res u003d pg_query($dbconn, "select * from authors where author u003d 'Orwell'"); if ($res) {      if (pg_field_is_null($res, 0, "year") u003du003d 1) {         echo "Значення поля y.
";      }      if (pg_field_is_null($res, 0, "year") u003du003d 0) {          echo "З|
";    } }?> `
