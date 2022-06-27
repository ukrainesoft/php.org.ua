- [« SQLite3::lastInsertRowID](sqlite3.lastinsertrowid.md)
- [SQLite3::open »](sqlite3.open.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Спробувати завантажити бібліотеку модуля SQLite

# SQLite3::loadExtension

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::loadExtension — Спробувати завантажити бібліотеку модуля SQLite

### Опис

public **SQLite3::loadExtension**(string `$name`): bool

Спробувати завантажити бібліотеку модуля SQLite.

### Список параметрів

`name`
Ім'я бібліотеки, що завантажується. Бібліотека повинна знаходитись у каталозі,
вказаному у конфігураційній опції sqlite3.extension_dir.

### Значення, що повертаються

Повертає **`true`** у випадку, якщо модуль успішно завантажено або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SQLite3::loadExtension()****

` <?php$db u003d new SQLite3('mysqlitedb.db');$db->loadExtension('libagg.so');?> `
