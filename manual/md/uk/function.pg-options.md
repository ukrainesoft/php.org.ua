- [« pg_num_rows](function.pg-num-rows.md)
- [pg_parameter_status »](function.pg-parameter-status.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Отримання параметрів з'єднання із сервером баз даних

#pg_options

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_options — Отримання параметрів підключення до сервера баз даних

### Опис

**pg_options**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

**pg_options()** повертає рядок, що містить параметри з'єднання
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

Рядок, що містить параметри з'єднання `connection`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_options()****

`<?php  $pgsql_connu003du003dpg_connect("dbnameu003dmark hostu003dlocalhost"); echo pg_options($pgsql_conn);?> `

### Дивіться також

- [pg_connect()](function.pg-connect.md) - Відкриває з'єднання з
базою даних PostgreSQL
