- [« SQLite3::escapeString](sqlite3.escapestring.md)
- [SQLite3::lastErrorCode »](sqlite3.lasterrorcode.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Виконує запит без результату до поточної бази даних

# SQLite3::exec

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::exec — Виконує запит без результату до поточної бази даних

### Опис

public **SQLite3::exec**(string `$query`): bool

Виконує запит без результату до поточної бази даних.

> **Примітка**: SQLite3, можливо, знадобиться створити [» часові
> файли](https://sqlite.org/tempfiles.md) під час виконання
> запити, так що відповідні директорії повинні бути доступні для
> Записи.

### Список параметрів

`query`
Запит SQL, що виконується (зазвичай запит INSERT, UPDATE або DELETE).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання запиту або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SQLite3::exec()****

` <?php$db u003d new SQLite3('mysqlitedb.db');$db->exec('CREATE TABLE bar (bar TEXT)');?> `
