- [« pg_unescape_bytea](function.pg-unescape-bytea.md)
- [pg_update »](function.pg-update.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вимикає трасування з'єднання з PostgreSQL

#pg_untrace

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

pg_untrace — Вимикає трасування з'єднання з PostgreSQL

### Опис

**pg_untrace**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): bool

Зупиняє трасування, запущене функцією
[pg_trace()](function.pg-trace.md).

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

Функція завжди повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_untrace()****

` <?php$pgsql_conn u003d pg_connect("dbnameu003dmark hostu003dlocalhost");if ($pgsql_conn) {   pg_trace('/tmp/trace.log', 'w', $pgsql_conn); pg_query("SELECT 1"); pg_untrace($pgsql_conn); // Тепер трасування взаємодії з сервером відключена} else {   print pg_last_error($pgsql_conn); exit;}?> `

### Дивіться також

- [pg_trace()](function.pg-trace.md) - Включає трасування
підключення PostgreSQL
