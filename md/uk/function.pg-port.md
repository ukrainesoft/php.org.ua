- [«pg_ping](function.pg-ping.md)
- [pg_prepare »](function.pg-prepare.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає номер порту, який відповідає заданому з'єднанню

# pg_port

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_port — Повертає номер порту, який відповідає заданому з'єднанню

### Опис

**pg_port**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

**pg_port()** повертає номер порту, що відповідає заданому
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

Рядок (string), що відповідає номеру порту, або порожній рядок
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_port()****

` <?php$pgsql_conn u003d pg_connect("dbnameu003dmark hostu003dlocalhost");if($pgsql_conn) {   print' "Успішно з'єднано з портом : " . pg_port($pgsql_conn) . "<br/>
";} else {   print pg_last_error($pgsql_conn);  exit;}?> `
