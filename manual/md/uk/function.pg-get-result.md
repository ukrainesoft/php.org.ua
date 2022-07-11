- [« pg_get_pid](function.pg-get-pid.md)
- [pg_host »](function.pg-host.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Отримання результату асинхронного запиту

#pg_get_result

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_get_result — Отримання результату асинхронного запиту

### Опис

**pg_get_result**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): [PgSql\Result](class.pgsql-result.md)\|false

**pg_get_result()** отримує екземпляр
[PgSql\Result](class.pgsql-result.md) з асинхронного запиту,
запущеного функціями [pg_send_query()](function.pg-send-query.md),
[pg_send_query_params()](function.pg-send-query-params.md) або
[pg_send_execute()](function.pg-send-execute.md).

[pg_send_query()](function.pg-send-query.md) та інші функції,
посилають асинхронні запити, може посилати відразу кілька запитів
на сервер. Функція **pg_get_result()** отримає результати всіх запитів
по черзі.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Примірник [PgSql\Result](class.pgsql-result.md), або **`false`**,
коли доступних результатів немає.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Повертає екземпляр [PgSql\Result](class.pgsql-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_get_result()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Неможливо з'єднатися з сервером"); if (!pg_connection_busy($dbconn)) {     pg_send_query($dbconn, "select * from authors; select count(*) from authors;"); }  $res1 u003d pg_get_result($dbconn); echo "Перший виклик pg_get_result(): $res1
";  $rows1 u003d pg_num_rows($res1); echo "$res1 має $rows1 записів

";  $res2 u003d pg_get_result($dbconn); echo "Другий виклик pg_get_result(): $res2
";  $rows2 u003d pg_num_rows($res2);  echo "$res2 має $rows2 записів
";?> `

Результат виконання цього прикладу:

Перший виклик pg_get_result(): Resource id #3
Resource id #3 має 3 записів

Другий виклик pg_get_result(): Resource id #4
Resource id #4 має 1 записів

### Дивіться також

- [pg_send_query()](function.pg-send-query.md) - Відправляє
асинхронний запит
