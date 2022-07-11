- [« SQLite3::openBlob](sqlite3.openblob.md)
- [SQLite3::query »](sqlite3.query.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- готує SQL-запит для виконання

# SQLite3::prepare

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::prepare — Підготовка SQL-запиту для виконання

### Опис

public **SQLite3::prepare**(string `$query`):
[SQLite3Stmt](class.sqlite3stmt.md)\|false

Підготовляє SQL-запит для виконання та повертає об'єкт
[SQLite3Stmt](class.sqlite3stmt.md).

### Список параметрів

`query`
SQL запит на підготовку.

### Значення, що повертаються

Повертає об'єкт [SQLite3Stmt](class.sqlite3stmt.md) у випадку
успішного виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SQLite3::prepare()****

` <?phpunlink('mysqlitedb.db');$db u003d new SQLite3('mysqlitedb.db');$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');$db->exec ("INSERT INTO foo (id, bar) VALUES (1, 'Тестове значення')");$stmt u003d $db->prepare('SELECT bar FROM foo WHERE idu003d:id');$stmt> ':id', 1, SQLITE3_INTEGER);$result u003d $stmt->execute();var_dump($result->fetchArray());?> `

### Дивіться також

- [SQLite3Stmt::paramCount()](sqlite3stmt.paramcount.md) -
Повертає кількість параметрів у підготовленому запиті
- [SQLite3Stmt::bindValue()](sqlite3stmt.bindvalue.md) - Зв'язує
значення параметра зі змінною підготовленого запиту
- [SQLite3Stmt::bindParam()](sqlite3stmt.bindparam.md) - Зв'язує
параметр зі змінною підготовленого запиту
