- [« pg_connection_status](function.pg-connection-status.md)
- [pg_convert »](function.pg-convert.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Читає вступні дані на з'єднанні

#pg_consume_input

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

pg_consume_input — Читає вступні дані на з'єднанні

### Опис

**pg_consume_input**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): bool

**pg_consume_input()** приймає будь-які вхідні дані, що очікують на читання
з сервера бази даних.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

**`true`**, якщо помилки не виникло, або **`false`**, якщо відбулася
помилка. Зверніть увагу, що **`true`** не обов'язково вказує, що
вхідні дані очікували на читання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
