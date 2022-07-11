- [« pg_transaction_status](function.pg-transaction-status.md)
- [pg_unescape_bytea »](function.pg-unescape-bytea.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає ім'я терміналу TTY, пов'язане зі з'єднанням

#pg_tty

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_tty — Повертає ім'я терміналу TTY, пов'язане зі з'єднанням

### Опис

**pg_tty**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

**pg_tty()** повертає ім'я терміналу, пов'язаного з екземпляром
`connection`, на який виводиться налагоджувальна інформація.

> **Примітка**:
>
> **pg_tty()** застаріла, але залишена для зворотної сумісності.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо параметр
`connection` вказано **`null`**, використовується з'єднання за замовчуванням.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

### Значення, що повертаються

Ім'я TTY для підключення `connection` як рядка (string).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_tty()****

` <?php$pgsql_conn u003d pg_connect("dbnameu003dmark hostu003dlocalhost");if ($pgsql_conn) {   print "TTY налагодження сервера: " . pg_tty($pgsql_conn) . "<br/>
";} else {   print pg_last_error($pgsql_conn);  exit;}?> `
