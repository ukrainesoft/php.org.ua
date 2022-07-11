- [« pg_lo_open](function.pg-lo-open.md)
- [pg_lo_read »](function.pg-lo-read.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Читає вміст великого об'єкта та посилає безпосередньо до браузера

#pg_lo_read_all

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_read_all — Читає вміст великого об'єкта та посилає безпосередньо
у браузер

### Опис

**pg_lo_read_all**([PgSql\Lob](class.pgsql-lob.md) `$lob`): int

**pg_lo_read_all()** читає великий об'єкт і надсилає дані безпосередньо в
браузер після надсилання всіх необхідних заголовків. Використовується у
в основному для пересилання двійкових даних, таких як зображення або звук.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: pg_loreadall()**.

### Список параметрів

`lob`
An [PgSql\Lob](class.pgsql-lob.md) instance, returned by
[pg_lo_open()](function.pg-lo-open.md).

### Значення, що повертаються

Кількість прочитаних байт.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Параметр `lob` тепер чекає на екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_read_all()****

`<?php  header('Content-type:image/jpeg'); $image_oidu003du003d189762345; $databaseu003du003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $handle u003d pg_lo_open($database, $image_oid, "r"); pg_lo_read_all($handle); pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_read()](function.pg-lo-read.md) - Читає дані великого
об'єкта
