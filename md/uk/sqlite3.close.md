- [« SQLite3::changes](sqlite3.changes.md)
- [SQLite3::\_\_construct »](sqlite3.construct.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Закрити з'єднання з базою даних

# SQLite3::close

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::close — Закрити з'єднання з базою даних

### Опис

public **SQLite3::close**(): bool

Закриває з'єднання із БД.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SQLite3::close()****

` <?php$db u003d new SQLite3('mysqlitedb.db');$db->close();?> `
