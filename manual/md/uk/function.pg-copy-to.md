- [« pg_copy_from](function.pg-copy-from.md)
- [pg_dbname »](function.pg-dbname.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Копіює дані з таблиці до масиву

#pg_copy_to

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_copy_to — Копіює дані з таблиці до масиву

### Опис

**pg_copy_to**(
[PgSql\Connection](class.pgsql-connection.md) `$connection`,
string `$table_name`,
string `$separator` u003d " ",
string `$null_as` u003d "\\\N"
): array\|false

**pg_copy_to()** копіює дані з таблиці до масиву. Для отримання
записів посилає серверу команду SQL `COPY TO`.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`table_name`
Ім'я таблиці, з якої дані копіюються в масив `rows`.

`separator`
Символ-розділювач, що відокремлює значення полів в елементах масиву
`rows`. За замовчуванням ``.

`null_as`
Цей параметр відповідає за те, як значення SQL `NULL` будуть представлені
у масиві `rows`. За замовчуванням `\N` (`\N').

### Значення, що повертаються

Масив (array), в якому кожен елемент - рядок, отриманий за допомогою
`COPY` або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_copy_to()****

` <?php  $db u003d pg_connect("dbnameu003dpublisher") or die("Неможливо підключитися"); $rowsu003du003dpg_copy_to($db,$table_name); pg_query($db, "DELETE FROM $table_name"); pg_copy_from($db, $table_name, $rows);?> `

### Дивіться також

- [pg_copy_from()](function.pg-copy-from.md) - Вставляє записи з
масиву до таблиці
