- [« pg_result_seek](function.pg-result-seek.md)
- [pg_select »](function.pg-select.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає стан результату запиту

#pg_result_status

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_result_status — Повертає стан результату запиту

### Опис

**pg_result_status**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$mode` u003d **`PGSQL_STATUS_LONG`**): string\|int

**pg_result_status()** повертає поточний стан екземпляра
[PgSql\Result](class.pgsql-result.md), або тег завершення сервером
роботи з цим ресурсом.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`mode`
Приймає одне із двох значень: **`PGSQL_STATUS_LONG`** для отримання
числового позначення стану `result`, або **`PGSQL_STATUS_STRING`**
для отримання стану теги у вигляді рядка. За замовчуванням використовується
**`PGSQL_STATUS_LONG`**.

### Значення, що повертаються

Якщо як аргумент передається **`PGSQL_STATUS_LONG`**, то
повертається одна з перерахованих констант: **`PGSQL_EMPTY_QUERY`**,
**`PGSQL_COMMAND_OK`**, **`PGSQL_TUPLES_OK`**, **`PGSQL_COPY_OUT`**,
**`PGSQL_COPY_IN`**, **`PGSQL_BAD_RESPONSE`**,
**`PGSQL_NONFATAL_ERROR`**, **`PGSQL_FATAL_ERROR`**. В іншому випадку
функція поверне рядкове відображення стану результату запиту.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_result_status()****

` <?php// Підключаємося до бази даних$conn u003d pg_pconnect("dbnameu003dpublisher"); $status u003d pg_result_status($result);// Розбираємо отримані даніif ($status u003du003d PGSQL_COPY_IN)  echo "Copy began.";else   echo "Copy fai>

Результат виконання цього прикладу:

Copy began.

### Дивіться також

- [pg_connection_status()](function.pg-connection-status.md) -
Визначає стан підключення
