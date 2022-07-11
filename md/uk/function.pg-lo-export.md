- [« pg_lo_create](function.pg-lo-create.md)
- [pg_lo_import »](function.pg-lo-import.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Виведення великого об'єкта у файл

#pg_lo_export

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_export — Виведення великого об'єкта у файл

### Опис

**pg_lo_export**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, int `$oid`, string `$pathname`): bool

**pg_lo_export()** вибирає великий об'єкт із бази даних та зберігає
його дані локально у файловій системі.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: **pg_loexport()**.

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

`pathname`
Повний шлях та ім'я файлу в клієнтській файловій системі для запису даних
великого об'єкта.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_export()****

`<?php  $database u003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $oidu003du003dpg_lo_create($database); $handleu003du003dpg_lo_open($database,$oid,"w"); pg_lo_write($handle, "large object data"); pg_lo_close($handle); pg_lo_export($database, $oid, '/tmp/lob.dat'); pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_import()](function.pg-lo-import.md) - Імпорт великого
об'єкта з файлу
