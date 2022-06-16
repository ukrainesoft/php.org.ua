- [«PDO::pgsqlCopyToArray](pdo.pgsqlcopytoarray.md)
- [PDO::pgsqlGetNotify »](pdo.pgsqlgetnotify.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- Вивантаження таблиці у файл

# PDO::pgsqlCopyToFile

(PHP 5 \>u003d 5.3.3, PHP 7, PHP 8)

PDO::pgsqlCopyToFile — Вивантаження таблиці у файл

### Опис

public **PDO::pgsqlCopyToFile**(
string `$table_name`,
string `$filename`,
string `$delimiter` u003d " ",
string `$null_as` u003d "\\\N",
string `$fields` u003d ?
): bool

Вивантажує дані у файл `filename` використовуючи роздільник полів
`delimiter` та список полів `fields`

### Список параметрів

`table_name`
Рядок з ім'ям таблиці

`filename`
ім'я файлу

`delimiter`
Розділювач полів, що використовується в `filename`

`null_as`
Як інтерпретувати значення NULL

`fields`
Список полів для вставки

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
