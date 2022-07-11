- [« pg_last_oid](function.pg-last-oid.md)
- [pg_lo_create »](function.pg-lo-create.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Закриває великий об'єкт

#pg_lo_close

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_close — Закриває великий об'єкт

### Опис

**pg_lo_close**([PgSql\Lob](class.pgsql-lob.md) `$lob`): bool

**pg_lo_close()** закриває великий об'єкт.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: **pg_loclose()**.

### Список параметрів

`lob`
An [PgSql\Lob](class.pgsql-lob.md) instance, returned by
[pg_lo_open()](function.pg-lo-open.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Параметр `lob` тепер чекає на екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_close()****

`<?php  $database u003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $oidu003du003dpg_lo_create($database); echo "$oid
";   $handle u003d pg_lo_open($database, $oid, "w");  echo "$handle
";  pg_lo_write($handle, "large object data");   pg_lo_close($handle);   pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_open()](function.pg-lo-open.md) - Відкриває великий об'єкт
бази даних
- [pg_lo_create()](function.pg-lo-create.md) - Створює великий
об'єкт
- [pg_lo_import()](function.pg-lo-import.md) - Імпорт великого
об'єкта з файлу
