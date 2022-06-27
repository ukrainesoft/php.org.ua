- [« Базове використання](pgsql.examples-basic.md)
- [Функції PostgreSQL»] (ref.pgsql.md)

- [PHP Manual](index.md)
- [Приклади](pgsql.examples.md)
- Базове використання

## Базове використання

Ці приклади містять функції користувача, аналогічні застарілим
функцій MySQL.

**Приклад #1 Приклад використання функцій користувача PostgreSQL**

`<?php// Ця функція необхідна, так як з'єднанняPostgreSQL зв'язує базу даних.function pg_list_dbs($db){   assert(is_resource($db)); $queryu003du003d'SELECT d.datname as "Name", u.usename as "Owner", pg_encoding_to_char(d.encoding) as "Encoding"FROM pg_database d LEFT JOIN  ; return pg_query($db, $query);}// Список таблиць.function pg_list_tables($db){   assert(is_resource($db)); $queryu003du003d"SELECT c.relname as \"Name\", CASE c.relkind WHEN 'r' THEN 'table' WHEN 'v' THEN 'view' WHEN 'i' THEN '  ' WHEN 's'THEN 'special' END as \"Type\", u.usename as \"Owner\"FROM pg_class c LEFT JOIN pg_user u ON c.relowner             ¦¦¦¦ 'v','S','') AND c.relname !~ '^pg_'ORDER BY 1;"; return pg_query($db, $query);}// Дивіться також pg_meta_data(). Повертає визначення поля у виді масиву. $queryu003du003d"SELECT a.attname, format_type(a.atttypid, a.atttypmod), a.attnotnull, a.atthasdef, a.attnumFROM pg_class c, pg_attribute    .attnum > 0 AND a.attrelid u003d c.oidORDER BY a.attnum;"; return pg_query($db, $query);}?> `
