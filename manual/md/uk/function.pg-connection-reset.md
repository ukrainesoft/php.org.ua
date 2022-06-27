- [« pg_connection_busy](function.pg-connection-busy.md)
- [pg_connection_status »](function.pg-connection-status.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Скидання підключення (перепідключення)

#pg_connection_reset

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_connection_reset — Скидання підключення (перепідключення)

### Опис

**pg_connection_reset**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): bool

**pg_connection_reset()** скидає підключення. Може бути
використано для усунення помилок.

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

**Приклад #1 Приклад використання **pg_connection_reset()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися"); $dbconn2u003du003dpg_connection_reset($dbconn); if ($dbconn2) {      echo "Успішне скидання
";  } else {      echo "Невдалий скидання
";  }?> `

### Дивіться також

- [pg_connect()](function.pg-connect.md) - Відкриває з'єднання з
базою даних PostgreSQL
- [pg_pconnect()](function.pg-pconnect.md) - Відкриває постійне
з'єднання з сервером PostgreSQL
- [pg_connection_status()](function.pg-connection-status.md) -
Визначає стан підключення
