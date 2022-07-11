- [« pg_lo_import](function.pg-lo-import.md)
- [pg_lo_read_all »](function.pg-lo-read-all.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Відкриває великий об'єкт бази даних

#pg_lo_open

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_open — Відкриває великий об'єкт бази даних

### Опис

**pg_lo_open**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, int `$oid`, string `$mode`):
[PgSql\Lob](class.pgsql-lob.md)\|false

**pg_lo_open()** відкриває великий об'єкт бази даних та повертає
екземпляр [PgSql\Lob](class.pgsql-lob.md).

**Увага**

Не слід закривати з'єднання з базою даних до завершення завершення
робота з екземпляром [PgSql\Lob](class.pgsql-lob.md).

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: **pg_loopen()**.

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

`mode`
Режим доступу до об'єкту. Можливі значення: "r" - тільки для читання,
"w" - лише для запису, "rw" - для читання та запису.

### Значення, що повертаються

Примірник [PgSql\Lob](class.pgsql-lob.md) або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Повертає екземпляр [PgSql\Lob](class.pgsql-lob.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_open()****

`<?php  $database u003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $oidu003du003dpg_lo_create($database); echo "$oid
";   $handle u003d pg_lo_open($database, $oid, "w");  echo "$handle
";  pg_lo_write($handle, "large object data");   pg_lo_close($handle);   pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_close()](function.pg-lo-close.md) - Закриває великий
об'єкт
- [pg_lo_create()](function.pg-lo-create.md) - Створює великий
об'єкт
