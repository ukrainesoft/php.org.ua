- [« pg_field_type](function.pg-field-type.md)
- [pg_free_result »](function.pg-free-result.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Скинути дані вихідного запиту на з'єднанні

#pg_flush

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

pg_flush — Скинути дані вихідного запиту на з'єднанні

### Опис

**pg_flush**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): int\|bool

**pg_flush()** скидає будь-які дані вихідного запиту, що очікують
надсилання на з'єднанні.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Повертає **`true`**, якщо скидання було успішним або дані не очікували
скидання, або `0`, якщо частина очікуваних даних була скинута, однак
залишилися ще або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
