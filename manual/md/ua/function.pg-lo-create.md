- [« pg_lo_close](function.pg-lo-close.md)
- [pg_lo_export »](function.pg-lo-export.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Створює великий об'єкт

#pg_lo_create

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_create — Створює великий об'єкт

### Опис

**pg_lo_create**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$object_id` u003d ?): int

**pg_lo_create**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$object_id`): int

**pg_lo_create()** створює великий об'єкт і повертає його `OID`. Режими
доступу PostgreSQL **`INV_READ`**, **`INV_WRITE`**, та **`INV_ARCHIVE`**
не підтримуються, об'єкт завжди створюється з доступом на читання та
запис. Режим **`INV_ARCHIVE`** прибраний із PostgreSQL версій 6.3 та вище.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

Замість використання інтерфейсу великих об'єктів (який не має
контролю доступу і дуже громіздкий сам по собі) користуйтеся полями
PostgreSQL типу `bytea` для зберігання двійкових даних та функцією
[pg_escape_bytea()](function.pg-escape-bytea.md) для їхнього екранування.

> **Примітка**:
>
> Колишня назва функції: **pg_locreate()**.

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

`object_id`
Якщо заданий аргумент `object_id`, функція спробує створити об'єкт з
цим ідентифікатором, інакше буде використаний вільний
ідентифікатор, призначений для сервера. Цей аргумент заснований на
функціоналі, вперше реалізованому в PostgreSQL 8.1.

### Значення, що повертаються

`OID` великого об'єкта або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_create()****

`<?php  $database u003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $oidu003du003dpg_lo_create($database); echo "$oid
";   $handle u003d pg_lo_open($database, $oid, "w");  echo "$handle
";  pg_lo_write($handle, "large object data");   pg_lo_close($handle);   pg_query($database, "commit");?> `
