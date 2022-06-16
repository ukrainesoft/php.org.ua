- [« pg_get_notify](function.pg-get-notify.md)
- [pg_get_result »](function.pg-get-result.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Отримує ID процесу сервера БД

#pg_get_pid

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_get_pid — Отримує ID процесу сервера БД

### Опис

**pg_get_pid**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): int

**pg_get_pid()** отримує PID сервер бази даних. PID корисний, коли
потрібно визначити, який процес надіслав `NOTIFY` повідомлення,
прийняте функцією [pg_get_notify()](function.pg-get-notify.md) (точніше
дізнатися, сервер його надіслав або якийсь інший процес).

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

ID процесу сервера бази даних.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 PID сервера PostgreSQL**

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}// PID сервера БД. Порівняйте його з PID повертаним pg_get_notify()$pid u003d pg_get_pid($conn);?> `

### Дивіться також

- [pg_get_notify()](function.pg-get-notify.md) - Отримання SQL
NOTIFY повідомлення
