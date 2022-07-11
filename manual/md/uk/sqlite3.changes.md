- [« SQLite3::busyTimeout](sqlite3.busytimeout.md)
- [SQLite3::close »](sqlite3.close.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Отримати кількість рядків, які були змінені/віддалені/вставлені
останнім запитом

# SQLite3::changes

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::changes — Отримати кількість рядків, які були
змінено/віддалено/вставлено останнім запитом

### Опис

public **SQLite3::changes**(): int

Повертає кількість рядків, які були змінені/віддалені/вставлені
останнім SQL-запитом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість рядків (int), які були
змінено/віддалено/вставлено останнім SQL-запитом.

### Приклади

**Приклад #1 Приклад використання **SQLite3::changes()****

` <?php$db u003d new SQLite3('mysqlitedb.db');$query u003d $db->exec('UPDATE counter SET viewsu003d0 WHERE pageu003d"test"');if ($query) {     Кількість змінених рядків: ', $db->changes();}?> `
