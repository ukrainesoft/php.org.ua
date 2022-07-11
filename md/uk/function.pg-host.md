- [« pg_get_result](function.pg-get-result.md)
- [pg_insert »](function.pg-insert.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає ім'я хоста, що відповідає підключенню

#pg_host

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_host — Повертає ім'я хоста, що відповідає підключенню

### Опис

**pg_host**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

**pg_host()** повертає ім'я хоста, з яким встановлено задане
з'єднання PostgreSQL `connection`.

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

Рядок, що містить ім'я підключеного через 'connection' хоста, або
порожній рядок у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_host()****

` <?php$pgsql_conn u003d pg_connect("dbnameu003dmark hostu003dlocalhost");if($pgsql_conn) {   print "Успішно підключилися к : " . pg_host($pgsql_conn) . "<br/>
";} else {   print pg_last_error($pgsql_conn);  exit;}?> `

### Дивіться також

- [pg_connect()](function.pg-connect.md) - Відкриває з'єднання з
базою даних PostgreSQL
- [pg_pconnect()](function.pg-pconnect.md) - Відкриває постійне
з'єднання з сервером PostgreSQL
