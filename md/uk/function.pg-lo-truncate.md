- [« pg_lo_tell](function.pg-lo-tell.md)
- [pg_lo_unlink »](function.pg-lo-unlink.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- обрізає великий об'єкт

#pg_lo_truncate

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

pg_lo_truncate — Обрізає великий об'єкт

### Опис

**pg_lo_truncate**([PgSql\Lob](class.pgsql-lob.md) `$lob`, int
`$size`): bool

**pg_lo_truncate()** обрізає екземпляр
[PgSql\Lob](class.pgsql-lob.md).

Для використання інтерфейсу великого об'єкта необхідно укласти його
блок транзакцій.

### Список параметрів

`lob`
An [PgSql\Lob](class.pgsql-lob.md) instance, returned by
[pg_lo_open()](function.pg-lo-open.md).

`size`
Кількість байт для обрізання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Параметр `lob` тепер чекає на екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_truncate()****

`<?php  $doc_oidu003du003d189762345; $databaseu003du003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $handle u003d pg_lo_open($database, $doc_oid, "r"); // Обрізати до 0   pg_lo_truncate($handle, 0); pg_query($database, "commit"); echo $data;?> `

### Дивіться також

- [pg_lo_tell()](function.pg-lo-tell.md) - Повертає поточний
становище внутрішнього покажчика великого об'єкта
