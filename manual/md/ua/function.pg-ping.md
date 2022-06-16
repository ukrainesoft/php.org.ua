- [« pg_pconnect](function.pg-pconnect.md)
- [pg_port »](function.pg-port.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Перевірка з'єднання з базою даних

#pg_ping

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_ping — Перевірити з'єднання з базою даних

### Опис

**pg_ping**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): bool

**pg_ping()** перевіряє з'єднання з базою даних і перепідключається,
якщо вона порушена.

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

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_ping()****

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}if (!pg_ping($conn)) die("Сполука порушено
");?> `

### Дивіться також

- [pg_connection_status()](function.pg-connection-status.md) -
Визначає стан підключення
- [pg_connection_reset()](function.pg-connection-reset.md) - Скидання
підключення (перепідключення)
