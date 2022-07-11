- [« pg_lo_read](function.pg-lo-read.md)
- [pg_lo_tell »](function.pg-lo-tell.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Переміщує внутрішній покажчик великого об'єкту

#pg_lo_seek

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_seek — Переміщує внутрішній вказівник великого об'єкта

### Опис

**pg_lo_seek**([PgSql\Lob](class.pgsql-lob.md) `$lob`, int `$offset`,
int `$whence` u003d **`SEEK_CUR`**): bool

**pg_lo_seek()** переміщує внутрішній покажчик екземпляра
[PgSql\Lob](class.pgsql-lob.md).

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

### Список параметрів

`lob`
An [PgSql\Lob](class.pgsql-lob.md) instance, returned by
[pg_lo_open()](function.pg-lo-open.md).

`offset`
Кількість байт, скільки потрібно перемістити покажчик.

`whence`
Одна з констант: **`PGSQL_SEEK_SET`** (переміщати від початку об'єкта),
**`PGSQL_SEEK_CUR`** (переміщати з поточної позиції) або
**`PGSQL_SEEK_END`** (відступати від кінця об'єкта).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Параметр `lob` тепер чекає на екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_seek()****

`<?php  $doc_oidu003du003d189762345; $databaseu003du003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $handle u003d pg_lo_open($database, $doc_oid, "r"); // Пропустити перші 50000 байт   pg_lo_seek($handle, 50000, PGSQL_SEEK_SET); // Прочитати наступні 10000байт   $data u003d pg_lo_read($handle, 10000); pg_query($database, "commit"); echo $data;?> `

### Дивіться також

- [pg_lo_tell()](function.pg-lo-tell.md) - Повертає поточний
становище внутрішнього покажчика великого об'єкта
