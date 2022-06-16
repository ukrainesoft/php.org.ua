- [« PDO::pgsqlCopyFromFile](pdo.pgsqlcopyfromfile.md)
- [PDO::pgsqlCopyToFile »](pdo.pgsqlcopytofile.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- Вивантажити дані з таблиці до масиву PHP

# PDO::pgsqlCopyToArray

(PHP 5 \>u003d 5.3.3, PHP 7, PHP 8)

PDO::pgsqlCopyToArray — Вивантажити дані з таблиці в масив PHP

### Опис

public **PDO::pgsqlCopyToArray**(
string `$table_name`,
string `$delimiter` u003d " ",
string `$null_as` u003d "\\\N",
string `$fields` u003d ?
): array\|false

Вивантажує дані з таблиці `table` до масиву, використовуючи роздільник
`delimiter` та список полів `fields`

### Список параметрів

`table_name`
Рядок з ім'ям таблиці

`delimiter`
Роздільник полів

`null_as`
Як інтерпретувати значення NULL

`fields`
Список полів для вставки

### Значення, що повертаються

Повертає масив рядків або **false** у разі виникнення помилки.
