- [«pg_update](function.pg-update.md)
- [PgSql\Connection »](class.pgsql-connection.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає масив, що містить версії клієнта, протоколу
клієнт-серверної взаємодії та сервера (якщо є)

#pg_version

(PHP 5, PHP 7, PHP 8)

pg_version - Повертає масив, що містить версії клієнта, протоколу
клієнт-серверної взаємодії та сервера (якщо є)

### Опис

**pg_version**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): array

**pg_version()** повертає масив, що містить версії клієнта, протоколу
клієнт-серверної взаємодії та сервера. Версії протоколу та сервера
доступні лише якщо модуль PHP скомпільований для PostgreSQL версії 7.4
або вище.

Для отримання детальної інформації про сервер використовуйте функцію
[pg_parameter_status()](function.pg-parameter-status.md).

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

Повертає масив з ключами `client`, `protocol` та `server` та
відповідними значеннями версії.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_version()****

`<?php  $dbconn u003d pg_connect("hostu003dlocalhost portu003d5432 dbnameu003dmary")    or| die("Could not connect"); $v u003d pg_version($dbconn); echo $v['client'];?> `

Результат виконання цього прикладу:

7.4

### Дивіться також

- [pg_parameter_status()](function.pg-parameter-status.md) -
Перегляд поточних значень параметрів сервера
