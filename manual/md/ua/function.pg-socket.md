- [« pg_set_error_verbosity](function.pg-set-error-verbosity.md)
- [pg_trace »](function.pg-trace.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Отримати дескриптор тільки для читання на сокет, що лежить в основі
з'єднання PostgreSQL

#pg_socket

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

pg_socket — Отримати дескриптор тільки для читання на сокет, що лежить в
основі з'єднання PostgreSQL

### Опис

**pg_socket**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): resource\|false

**pg_socket()** повертає ресурс (resource) тільки для читання,
відповідний сокету, що лежить в основі цієї сполуки PostgreSQL.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Ресурс сокету у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
