- [« pg_close](function.pg-close.md)
- [pg_connect »](function.pg-connect.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Опитати статус спроб асинхронного з'єднання PostgreSQL.

#pg_connect_poll

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

pg_connect_poll — Опитати статус спроби асинхронного з'єднання
PostgreSQL.

### Опис

**pg_connect_poll**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): int

**pg_connect_poll()** опитує статус з'єднання PostgreSQL,
створеного викликом функції [pg_connect()](function.pg-connect.md) з
параметром **`PGSQL_CONNECT_ASYNC`**.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Повертає **`PGSQL_POLLING_FAILED`**, **`PGSQL_POLLING_READING`**,
**`PGSQL_POLLING_WRITING`**, **`PGSQL_POLLING_OK`** або
**`PGSQL_POLLING_ACTIVE`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
