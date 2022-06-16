- [« pg_lo_read_all](function.pg-lo-read-all.md)
- [pg_lo_seek »](function.pg-lo-seek.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Читає дані великого об'єкту

#pg_lo_read

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_read — Читає дані великого об'єкту

### Опис

**pg_lo_read**([PgSql\Lob](class.pgsql-lob.md) `$lob`, int `$length` u003d
8192): string \ | false

**pg_lo_read()** читає `length` байт великого об'єкта та повертає їх у
вигляді рядка.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: pg_loread()**.

### Список параметрів

`length`
An [PgSql\Lob](class.pgsql-lob.md) instance, returned by
[pg_lo_open()](function.pg-lo-open.md).

`length`
Необов'язковий аргумент. Кількість байт, які потрібно прочитати.

### Значення, що повертаються

Рядок(string), що містить `length` байт великого об'єкта, або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 8.1.0 | Параметр `lob` тепер чекає на екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_read()****

`<?php  $doc_oidu003du003d189762345; $databaseu003du003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $handle u003d pg_lo_open($database, $doc_oid, "r"); $datau003du003dpg_lo_read($handle, 50000); pg_query($database, "commit"); echo $data;?> `

### Дивіться також

- [pg_lo_read_all()](function.pg-lo-read-all.md) - Читає вміст
великого об'єкта та посилає безпосередньо в браузер
