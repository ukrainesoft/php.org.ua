- [«pg_convert](function.pg-convert.md)
- [pg_copy_to »](function.pg-copy-to.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вставляє записи з масиву до таблиці

#pg_copy_from

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_copy_from — Вставляє записи з масиву до таблиці

### Опис

**pg_copy_from**(
[PgSql\Connection](class.pgsql-connection.md) `$connection`,
string `$table_name`,
array `$rows`,
string `$separator` u003d " ",
string `$null_as` u003d "\\\N"
): bool

**pg_copy_from()** вставляє записи в таблицю з масиву `rows`. В ході
виконання викликає SQL-команду `COPY FROM` для вставлення записів.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`table_name`
Ім'я таблиці, в яку копіюються значення "rows".

`rows`
Масив (array) даних для копіювання в `table_name`. Кожне значення в
`rows` стає рядком у `table_name`. Кожне значення масиву `rows`
має бути рядком з роздільником, що містить значення для вставки в
кожне поле таблиці. Значення повинні закінчуватися символом перекладу
рядки.

`separator`
Символ, що відокремлює значення один від одного в кожному елементі масиву
`rows`. За замовчуванням ``.

`null_as`
Визначає, яким чином значення SQL `NULL` представлені у масиві
`rows`. За замовчуванням `\N` (`\N').

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_copy_from()****

` <?php  $db u003d pg_connect("dbnameu003dpublisher") or die("Не удалося підключитися"); $rowsu003du003dpg_copy_to($db,$table_name); pg_query($db, "DELETE FROM $table_name"); pg_copy_from($db, $table_name, $rows);?> `

### Дивіться також

- [pg_copy_to()](function.pg-copy-to.md) - Копіює дані з
таблиці в масив
