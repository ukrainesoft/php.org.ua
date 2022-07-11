- [«pg_insert](function.pg-insert.md)
- [pg_last_notice »](function.pg-last-notice.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Отримує повідомлення про останню помилку на з'єднанні з
базою даних

#pg_last_error

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_last_error — Отримує повідомлення про останню помилку, що відбулася на
з'єднанні з базою даних

### Опис

**pg_last_error**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

**pg_last_error()** повертає повідомлення про останню помилку на заданому
з'єднанні `connection`.

Повідомлення про помилки можуть перезаписуватися під час внутрішніх викликів
функцій PostgreSQL (libpq). Якщо всередині модуля PostgreSQL відбудеться
кілька помилок, повідомлення може бути неінформативним.

Для обробки помилок краще використовувати функції
[pg_result_error()](function.pg-result-error.md),
[pg_result_error_field()](function.pg-result-error-field.md),
[pg_result_status()](function.pg-result-status.md) та
[pg_connection_status()](function.pg-connection-status.md).

> **Примітка**:
>
> Колишня назва функції: **pg_errormessage()**.

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

Рядок, що містить повідомлення про останню помилку, що сталася на
з'єднанні `connection`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_last_error()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися з сервером"); // Невдалий запит  $res u003d pg_query($dbconn, "select * from doesnotexist"); echo pg_last_error($dbconn);?> `

### Дивіться також

- [pg_result_error()](function.pg-result-error.md) - Повертає
повідомлення про помилку, пов'язане із запитом результату
- [pg_result_error_field()](function.pg-result-error-field.md) -
Повертає конкретне поле зі звіту про помилки
