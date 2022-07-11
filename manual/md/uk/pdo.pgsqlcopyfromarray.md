- [« PDO_PGSQL DSN](ref.pdo-pgsql.connection.md)
- [PDO::pgsqlCopyFromFile »](pdo.pgsqlcopyfromfile.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- Копіювати масив PHP до таблиці

# PDO::pgsqlCopyFromArray

(PHP 5 \>u003d 5.3.3, PHP 7, PHP 8)

PDO::pgsqlCopyFromArray — Копіювати масив PHP до таблиці

### Опис

public **PDO::pgsqlCopyFromArray**(
string `$table_name`,
array `$rows`,
string `$delimiter` u003d " ",
string `$null_as` u003d "\\\N",
string `$fields` u003d ?
): bool

Копіює дані з масиву `rows` до таблиці `table_name` з
використанням роздільника полів `delimiter` та списку полів `fields`

### Список параметрів

`table_name`
Рядок з ім'ям таблиці

`rows`
Масив рядків із полями, розділеними `delimiter`

`delimiter`
Розділювач, що використовується в масиві `rows`

`null_as`
Як інтерпретувати значення NULL

`fields`
Список полів для вставки

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
