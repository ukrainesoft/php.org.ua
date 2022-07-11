- [« SQLite3::prepare](sqlite3.prepare.md)
- [SQLite3::querySingle »](sqlite3.querysingle.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Виконує SQL-запит

# SQLite3::query

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::query — Виконує SQL-запит

### Опис

public **SQLite3::query**(string `$query`):
[SQLite3Result](class.sqlite3result.md)\|false

Виконує SQL-запит та повертає об'єкт
[SQLite3Result](class.sqlite3result.md). Якщо запит не повертає
результат (наприклад, запит типу DLM), то повернений об'єкт
[SQLite3Result](class.sqlite3result.md) марний. Для подібних
запитів використовуйте метод [SQLite3::exec()](sqlite3.exec.md).

### Список параметрів

`query`
SQL-запит для виконання.

### Значення, що повертаються

Повертає об'єкт [SQLite3Result](class.sqlite3result.md) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SQLite3::query()****

` <?php$db u003d new SQLite3('mysqlitedb.db');$results u003d $db->query('SELECT bar FROM foo');while ($row u003d $results->fetchArray()) {    $row);}?> `
