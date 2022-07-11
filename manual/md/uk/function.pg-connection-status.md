- [« pg_connection_reset](function.pg-connection-reset.md)
- [pg_consume_input »](function.pg-consume-input.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Визначає стан підключення

#pg_connection_status

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_connection_status — Визначає стан підключення

### Опис

**pg_connection_status**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): int

**pg_connection_status()** повертає стан переданого як
аргументу з'єднання `connection`.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

**`PGSQL_CONNECTION_OK`** або **`PGSQL_CONNECTION_BAD`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_connection_status()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися"); $statu003du003dpg_connection_status($dbconn); if ($stat u003du003du003d PGSQL_CONNECTION_OK) {     echo 'Статус з'єднання: доступно'; } else {      echo 'Статус з'єднання: розірвано'; }?> `

### Дивіться також

- [pg_connection_busy()](function.pg-connection-busy.md) -
Перевіряє, чи зайнято з'єднання на даний момент.
