- [« pg_lo_truncate](function.pg-lo-truncate.md)
- [pg_lo_write »](function.pg-lo-write.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Видалення великого об'єкту

#pg_lo_unlink

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_unlink — Видалення великого об'єкта

### Опис

**pg_lo_unlink**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, int `$oid`): bool

**pg_lo_unlink()** видаляє великий об'єкт із ідентифікатором `oid`.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: **pg_lounlink()**.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо
`connection` не вказано, використовується стандартне з'єднання.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

`oid`
`OID` великого об'єкта у базі даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_unlink()****

`<?php   // OID віддаленого об'єкта   $doc_oid u003d 189762345; $databaseu003du003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); pg_lo_unlink($database, $doc_oid); pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_create()](function.pg-lo-create.md) - Створює великий
об'єкт
- [pg_lo_import()](function.pg-lo-import.md) - Імпорт великого
об'єкта з файлу
