- [« pg_copy_to](function.pg-copy-to.md)
- [pg_delete »] (function.pg-delete.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- визначає ім'я бази даних

#pg_dbname

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_dbname — Визначає ім'я бази даних

### Опис

**pg_dbname**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

**pg_dbname()** повертає ім'я бази даних, що відповідає екземпляру
PostgreSQL `connection`.

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

Рядок, що містить ім'я бази даних, що відповідає ресурсу
`connection`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_dbname()****

`<?php  error_reporting(E_ALL); pg_connect("hostu003dlocalhost portu003d5432 dbnameu003dmary"); echo pg_dbname(); // mary?> `
