- [« pg_set_client_encoding](function.pg-set-client-encoding.md)
- [pg_socket»](function.pg-socket.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Визначає обсяг тексту повідомлень, що повертаються функціями
pg_last_error та pg_result_error

#pg_set_error_verbosity

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_set_error_verbosity — Визначає обсяг тексту повідомлень, що повертаються
функціями [pg_last_error()](function.pg-last-error.md) та
[pg_result_error()](function.pg-result-error.md)

### Опис

**pg_set_error_verbosity**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, int `$verbosity`): int

Визначає обсяг тексту повідомлень, що повертаються функціями
[pg_last_error()](function.pg-last-error.md) та
[pg_result_error()](function.pg-result-error.md).

**pg_set_error_verbosity()** встановлює режим, який відповідає за повноту
повідомлень про помилки. У режимі **`PGSQL_ERRORS_TERSE`** повідомлення будуть
містити лише важливість помилки, основний текст та місце виникнення;
ця інформація зазвичай міститься в один рядок. У режимі за замовчуванням
**`PGSQL_ERRORS_DEFAULT`** у повідомлення будуть додані деталі помилки,
підказка або поля контексту (це може зайняти кілька рядків). В
режимі **`PGSQL_ERRORS_VERBOSE`** повідомлення будуть містити всі
можливі поля. Зміна режиму не торкнеться повідомлення існуючих
ресурсів. Новий режим буде застосовуватися тільки до новостворених.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо
`connection` не вказано, використовується стандартне з'єднання.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

`verbosity`
Необхідний режим: **`PGSQL_ERRORS_TERSE`**, **`PGSQL_ERRORS_DEFAULT`**
або **`PGSQL_ERRORS_VERBOSE`**.

### Значення, що повертаються

Попередній режим, що діяв до запуску функції:
**`PGSQL_ERRORS_TERSE`**, **`PGSQL_ERRORS_DEFAULT`** або
**`PGSQL_ERRORS_VERBOSE`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_set_error_verbosity()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Could not connect"); if (!pg_connection_busy($dbconn)) {     pg_send_query($dbconn, "select * from doesnotexist;"); }  pg_set_error_verbosity($dbconn, PGSQL_ERRORS_VERBOSE); $res1 u003d pg_get_result($dbconn); echo pg_result_error($res1);?> `

### Дивіться також

- [pg_last_error()](function.pg-last-error.md) - Отримує повідомлення
про останню помилку на з'єднанні з базою даних
- [pg_result_error()](function.pg-result-error.md) - Повертає
повідомлення про помилку, пов'язане із запитом результату
