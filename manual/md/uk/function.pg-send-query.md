- [« pg_send_query_params](function.pg-send-query-params.md)
- [pg_set_client_encoding »](function.pg-set-client-encoding.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Надсилає асинхронний запит

#pg_send_query

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_send_query — Надсилає асинхронний запит

### Опис

**pg_send_query**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, string `$query`): int\|bool

**pg_send_query()** відправляє на виконання асинхронний запит. В
на відміну від [pg_query()](function.pg-query.md) запит може містити
кілька SQL-виражень, розділених крапкою з комою. Для отримання
результату запиту використовуйте функцію
[pg_get_result()](function.pg-get-result.md).

Виконання запиту не перериває роботу скрипта. Для визначення
зайнятості з'єднання (коли запит ще виконується) використовуйте функцію
[pg_connection_busy()](function.pg-connection-busy.md). Виконання
запиту можна перервати функцією
[pg_cancel_query()](function.pg-cancel-query.md).

Незважаючи на те, що можна надіслати кілька запитів за раз, їх не можна
посилати, доки з'єднання зайняте. В іншому випадку, надісланий запит
дочекається завершення попереднього, зітре його результат і запуститься сам.
Таким чином, ви втратите дані результату попереднього запиту.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`query`
Один або кілька SQL-виражень, розділених крапкою з комою.

Спецсимволи у рядку запиту мають бути
[екрановані](function.pg-escape-string.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, **`false`** або `0`
у разі виникнення помилки. Для отримання результату запиту
використовуйте функцію [pg_get_result()](function.pg-get-result.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_send_query()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося підключитися"); if (!pg_connection_busy($dbconn)) {     pg_send_query($dbconn, "select * from authors; select count(*) from authors;"); }  $res1 u003d pg_get_result($dbconn); echo "Перший виклик pg_get_result(): $res1
";  $rows1 u003d pg_num_rows($res1);  echo "$res1 містить $rows1 записів

";  $res2 u003d pg_get_result($dbconn); echo "Другий виклик pg_get_result(): $res2
";  $rows2 u003d pg_num_rows($res2); echo "$res2 містить $rows2 записів
";?> `

Результат виконання цього прикладу:

Перший виклик pg_get_result(): Resource id #3
Resource id #3 містить 3 записів

Другий виклик pg_get_result(): Resource id #4
Resource id #4 містить 1 записів

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_cancel_query()](function.pg-cancel-query.md) - Зупинка
асинхронного запиту.
- [pg_get_result()](function.pg-get-result.md) - Отримання
результату асинхронного запиту
- [pg_connection_busy()](function.pg-connection-busy.md) -
Перевіряє, чи зайнято з'єднання на даний момент.
