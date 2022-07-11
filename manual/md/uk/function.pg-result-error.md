- [« pg_result_error_field](function.pg-result-error-field.md)
- [pg_result_seek »](function.pg-result-seek.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає повідомлення про помилку, пов'язане із запитом результату

#pg_result_error

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_result_error — Повертає повідомлення про помилку, пов'язане із запитом
результату

### Опис

**pg_result_error**([PgSql\Result](class.pgsql-result.md) `$result`):
string\|false

**pg_result_error()** повертає повідомлення про будь-яку помилку, пов'язану з
екземпляром `result`. Таким чином, можна отримати більш вірне
повідомлення про помилку, ніж при використанні
[pg_last_error()](function.pg-last-error.md).

Функція [pg_result_error_field()](function.pg-result-error-field.md)
може дати більш детальну інформацію про помилку, ніж
**pg_result_error()**.

Оскільки [pg_query()](function.pg-query.md) повертає **`false`** в
у разі виникнення помилки запиту, необхідно використовувати
[pg_send_query()](function.pg-send-query.md) та
[pg_get_result()](function.pg-get-result.md) для отримання дескриптора
результату.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

### Значення, що повертаються

Повертає рядок (string). Повертає порожній рядок, якщо помилки немає.
Якщо є помилка, не пов'язана з параметром `result`, то повертається
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_result_error()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Could not connect"); if (!pg_connection_busy($dbconn)) {     pg_send_query($dbconn, "select * from doesnotexist;"); }  $res1 u003d pg_get_result($dbconn); echo pg_result_error($res1);?> `

### Дивіться також

- [pg_result_error_field()](function.pg-result-error-field.md) -
Повертає конкретне поле зі звіту про помилки
- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_send_query()](function.pg-send-query.md) - Відправляє
асинхронний запит
- [pg_get_result()](function.pg-get-result.md) - Отримання
результату асинхронного запиту
- [pg_last_error()](function.pg-last-error.md) - Отримує повідомлення
про останню помилку на з'єднанні з базою даних
- [pg_last_notice()](function.pg-last-notice.md) - Повертає
останнє повідомлення від сервера PostgreSQL
