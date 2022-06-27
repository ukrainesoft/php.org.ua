- [« pg_lo_export](function.pg-lo-export.md)
- [pg_lo_open »](function.pg-lo-open.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Імпорт великого об'єкта з файлу

# pg_lo_import

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_import — імпорт великого об'єкта з файлу

### Опис

**pg_lo_import**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$pathname`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$object_id` u003d ?): int

**pg_lo_import()** створює великий об'єкт у базі даних, використовуючи
локальний файл як джерело даних.

Операції з використанням інтерфейсу великих об'єктів необхідно
укладати блок транзакції.

> **Примітка**:
>
> Колишня назва функції: **pg_loimport()**.

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

`pathname`
Повний шлях та ім'я файлу в клієнтській файловій системі для читання даних
великого об'єкта.

`object_id`
Якщо заданий аргумент `object_id`, функція спробує створити об'єкт з
цим ідентифікатором, інакше буде використаний вільний
ідентифікатор, призначений для сервера. Цей аргумент заснований на
функціоналі, вперше реалізованому в PostgreSQL 8.1.

### Значення, що повертаються

`OID` створеного великого об'єкта або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_lo_import()****

`<?php  $database u003dpg_connect("dbnameu003djacarta"); pg_query($database, "begin"); $oidu003du003dpg_lo_import($database, '/tmp/lob.dat'); pg_query($database, "commit");?> `

### Дивіться також

- [pg_lo_export()](function.pg-lo-export.md) - Висновок великого
об'єкта у файл
- [pg_lo_open()](function.pg-lo-open.md) - Відкриває великий об'єкт
бази даних
