- [«pg_query](function.pg-query.md)
- [pg_result_error »](function.pg-result-error.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає конкретне поле зі звіту про помилки

#pg_result_error_field

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_result_error_field — Повертає конкретне поле зі звіту про помилки

### Опис

**pg_result_error_field**([PgSql\Result](class.pgsql-result.md)
`$result`, int `$field_code`): string\|false\|null

**pg_result_error_field()** повертає одне з полів звіту про помилки,
пов'язаного з екземпляром `result`. Функція підтримується серверами
PostgreSQL версій 7.4 та вище. Потрібне поле задається аргументом
`field_code`.

Функції [pg_query()](function.pg-query.md) та
[pg_query_params()](function.pg-query-params.md) у разі помилок
повертають **`false`** замість ресурсу. Щоб мати можливість
обробляти помилки, користуйтеся функціями
[pg_send_query()](function.pg-send-query.md) та
[pg_get_result()](function.pg-get-result.md).

Для отримання додаткової інформації про хід виконання відмови.
Використовуйте функції [pg_query()](function.pg-query.md)
[pg_set_error_verbosity()](function.pg-set-error-verbosity.md) та
[pg_last_error()](function.pg-last-error.md) та обробляйте результат
їх виконання.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field_code`
Можливі значення аргументу `field_code`: **`PGSQL_DIAG_SEVERITY`**,
**`PGSQL_DIAG_SQLSTATE`**, **`PGSQL_DIAG_MESSAGE_PRIMARY`**,
**`PGSQL_DIAG_MESSAGE_DETAIL`**, **`PGSQL_DIAG_MESSAGE_HINT`**,
**`PGSQL_DIAG_STATEMENT_POSITION`**, **`PGSQL_DIAG_INTERNAL_POSITION`**
(для версій PostgreSQL 8.0 та вище), **`PGSQL_DIAG_INTERNAL_QUERY`** (для
версій PostgreSQL 8.0 та вище), **`PGSQL_DIAG_CONTEXT`**,
**`PGSQL_DIAG_SOURCE_FILE`**, **`PGSQL_DIAG_SOURCE_LINE`**,
**`PGSQL_DIAG_SOURCE_FUNCTION`**.

### Значення, що повертаються

Повідомлення про помилку із заданого поля у вигляді рядка (string);
**`null`**, якщо задане поле не існує; **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_result_error_field()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Could not connect"); if (!pg_connection_busy($dbconn)) {     pg_send_query($dbconn, "select * from doesnotexist;"); }  $res1 u003d pg_get_result($dbconn); echo pg_result_error_field($res1, PGSQL_DIAG_SQLSTATE);?> `

### Дивіться також

- [pg_result_error()](function.pg-result-error.md) - Повертає
повідомлення про помилку, пов'язане із запитом результату
