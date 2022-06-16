- [« pg_last_error](function.pg-last-error.md)
- [pg_last_oid »](function.pg-last-oid.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає останнє повідомлення від сервера PostgreSQL

#pg_last_notice

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

pg_last_notice — Повертає останнє повідомлення від сервера PostgreSQL

### Опис

**pg_last_notice**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, int `$mode` u003d **`PGSQL_NOTICE_LAST`**):
array\|string\|bool

**pg_last_notice()** повертає останнє повідомлення, згенероване
сервером PostgreSQL на заданому з'єднанні `connection`. В деяких
випадках сервер посилає повідомлення, наприклад при створенні в таблиці
колонки типу `SERIAL`.

Завдяки **pg_last_notice()** не потрібно робити зайвих запитів,
щоб дізнатися надсилала ваша транзакція повідомлення чи ні.

Можна відключити відстеження сповіщень налаштуванням на значення 1
параметра `pgsql.ignore_notice` у файлі `php.ini`.

Можна вимкнути журналування повідомлень установкою на значення 0
параметра `pgsql.log_notice` у файлі `php.ini`. Поки що цей параметр
встановлено на значення 0, повідомлення неможливо записати до журналу
виконання.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`mode`
Одна з констант **`PGSQL_NOTICE_LAST`** (для повернення останнього
повідомлення), **`PGSQL_NOTICE_ALL`** (для повернення всіх повідомлень) або
**`PGSQL_NOTICE_CLEAR`** (для очищення повідомлень).

### Значення, що повертаються

Рядок, що містить останнє повідомлення на заданому з'єднанні, якщо
задана опція **`PGSQL_NOTICE_LAST`**, масив (array), якщо опція
**`PGSQL_NOTICE_ALL`** та значення типу bool у разі опції
**`PGSQL_NOTICE_CLEAR`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.1.0 | Доданий параметр `mode`. |

### Приклади

**Приклад #1 Приклад використання **pg_last_notice()****

`<?php $pgsql_connu003du003dpg_connect("dbnameu003dmark hostu003dlocalhost"); $resu003du003dpg_query("CREATE TABLE test|id(SERIAL)"); $noticeu003du003dpg_last_notice($pgsql_conn); echo $notice;?> `

Результат виконання цього прикладу:

CREATE TABLE буде створювати implicit sequence "test_id_seq" for "serial" column "test.id"

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_last_error()](function.pg-last-error.md) - Отримує повідомлення
про останню помилку на з'єднанні з базою даних
