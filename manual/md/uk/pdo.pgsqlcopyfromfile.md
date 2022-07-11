- [« PDO::pgsqlCopyFromArray](pdo.pgsqlcopyfromarray.md)
- [PDO::pgsqlCopyToArray »](pdo.pgsqlcopytoarray.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- Скопіювати дані з файлу до таблиці

# PDO::pgsqlCopyFromFile

(PHP 5 \>u003d 5.3.3, PHP 7, PHP 8)

PDO::pgsqlCopyFromFile — Скопіювати дані з файлу до таблиці

### Опис

public **PDO::pgsqlCopyFromFile**(
string `$table_name`,
string `$filename`,
string `$delimiter` u003d " ",
string `$null_as` u003d "\\\N",
string `$fields` u003d ?
): bool

Копіює рядки з файлу `filename` до таблиці `table_name` використовуючи
роздільник полів `delimiter` та список полів `fields`

### Список параметрів

`table_name`
Рядок з ім'ям таблиці

`filename`
Ім'я файлу з даними

`delimiter`
Розділювач полів, що використовується в `filename`

`null_as`
Як інтерпретувати значення NULL

`fields`
Список полів для вставки

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
