- [« pg_affected_rows](function.pg-affected-rows.md)
- [pg_client_encoding »](function.pg-client-encoding.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Зупинення асинхронного запиту.

#pg_cancel_query

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_cancel_query — Зупинити асинхронний запит.

### Опис

**pg_cancel_query**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): bool

**pg_cancel_query()** скасовує виконання асинхронного запиту,
надісланого функціями [pg_send_query()](function.pg-send-query.md),
[pg_send_query_params()](function.pg-send-query-params.md) або
[pg_send_execute()](function.pg-send-execute.md). Неможливо завершити
виконання запиту, запущене функцією
[pg_query()](function.pg-query.md).

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_cancel_query()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися"); if (!pg_connection_busy($dbconn)) {     pg_send_query($dbconn, "select * from authors; select count(*) from authors;"); }  $res1 u003d pg_get_result($dbconn); echo "Перший запит до pg_get_result(): $res1
";  $rows1 u003d pg_num_rows($res1); echo "$res1 отримав $rows1 записів

";  // Зупинка виконуваного в даний момент запиту.  // Послідує друге запит, якщо, звичайно, він еще виконується.  pg_cancel_query($dbn

Результат виконання цього прикладу:

Перший запит на pg_get_result(): Resource id #3
Resource id #3 отримав 3 записів

### Дивіться також

- [pg_send_query()](function.pg-send-query.md) - Відправляє
асинхронний запит
- [pg_connection_busy()](function.pg-connection-busy.md) -
Перевіряє, чи зайнято з'єднання на даний момент.
