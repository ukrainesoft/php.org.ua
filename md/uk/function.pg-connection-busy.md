- [« pg_connect](function.pg-connect.md)
- [pg_connection_reset »](function.pg-connection-reset.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Перевіряє, чи зайнято з'єднання на даний момент.

#pg_connection_busy

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_connection_busy - Перевіряє, чи зайнято з'єднання в даний момент.

### Опис

**pg_connection_busy**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): bool

**pg_connection_busy()** визначає, чи зайнято з'єднання в даний момент
чи ні. З'єднання зайнято, коли попередній запит ще виконується.
Функція [pg_get_result()](function.pg-get-result.md) також блокує
з'єднання на час виконання.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Повертає **`true`**, якщо з'єднання зайняте, інакше
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_connection_busy()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднається"); $bsu003du003dpg_connection_busy($dbconn); if ($bs) {      echo 'З'єднання зайнято'; } else {     echo 'З'єднання не зайнято'; }?> `

### Дивіться також

- [pg_connection_status()](function.pg-connection-status.md) -
Визначає стан підключення
- [pg_get_result()](function.pg-get-result.md) - Отримання
результату асинхронного запиту
