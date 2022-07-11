- [«pg_delete](function.pg-delete.md)
- [pg_escape_bytea »](function.pg-escape-bytea.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Синхронізує з бекендом PostgreSQL

#pg_end_copy

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

pg_end_copy — Синхронізує з бекендом PostgreSQL

### Опис

**pg_end_copy**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): bool

**pg_end_copy()** синхронізує дані між фронтендом PostgreSQL
(зазвичай процесом веб-сервера) та сервером PostgreSQL після завершення
копіювання даних, виконаних за допомогою функції
[pg_put_line()](function.pg-put-line.md). Використання
**pg_end_copy()** необхідно, щоб уникнути розсинхронізації сервера
PostgreSQL з фронтендом та повідомлення про помилки.

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

**Приклад #1 Приклад використання **pg_end_copy()****

` <?php $connu003du003dpg_pconnect("dbnameu003dfoo"); pg_query($conn, "create table bar (a int4, b char(16), d float8)"); pg_query($conn, "copy bar from stdin"); pg_put_line($conn, "3 hello world 4.5
"); pg_put_line($conn, "4 goodbye world 7.11
"); pg_put_line($conn,"".
"); pg_end_copy($conn);?> `

### Дивіться також

- [pg_put_line()](function.pg-put-line.md) - Передає на PostgreSQL
сервер рядок із завершальним нулем
