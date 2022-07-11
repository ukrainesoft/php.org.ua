- [« pg_lo_unlink](function.pg-lo-unlink.md)
- [pg_meta_data »](function.pg-meta-data.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Записує дані у великий об'єкт

#pg_lo_write

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_write — записує дані у великий об'єкт

### Опис

**pg_lo_write**([PgSql\Lob](class.pgsql-lob.md) `$lob`, string
`$data`, ?int `$length` u003d **`null`**): int\|false

**pg_lo_write()** записує дані у великий об'єкт, починаючи з поточної
позиції внутрішнього покажчика.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: pg_lowrite()**.

### Список параметрів

`lob`
An [PgSql\Lob](class.pgsql-lob.md) instance, returned by
[pg_lo_open()](function.pg-lo-open.md).

`data`
Дані для запису на великий об'єкт. Якщо аргумент `length` заданий
менше розміру `data`, то записані будуть лише `length` байт.

`length`
Необов'язковий аргумент. Максимальна кількість байт, що записуються.
Повинен бути більшим за нуль і не перевищувати розмір `data`. За замовчуванням
приймається рівним розміру `data`.

### Значення, що повертаються

Кількість записаних у великий об'єкт байт, або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Параметр `lob` тепер чекає на екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `length` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_lo_write()****

`<?php  $doc_oidu003du003d189762345; $datau003du003d""This|will|overwrite|the|start|of|the|large object."; $databaseu003du003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $handle u003d pg_lo_open($database, $doc_oid, "w"); $datau003du003dpg_lo_write($handle,$data); pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_create()](function.pg-lo-create.md) - Створює великий
об'єкт
- [pg_lo_open()](function.pg-lo-open.md) - Відкриває великий об'єкт
бази даних
