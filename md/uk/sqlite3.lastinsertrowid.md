- [« SQLite3::lastErrorMsg](sqlite3.lasterrormsg.md)
- [SQLite3::loadExtension »](sqlite3.loadextension.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Повертає ідентифікатор рядка останньої вставки (INSERT) до бази
даних

# SQLite3::lastInsertRowID

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::lastInsertRowID — Повертає ідентифікатор рядка останнього
вставки (INSERT) до бази даних

### Опис

public **SQLite3::lastInsertRowID**(): int

Повертає ідентифікатор рядка останньої вставки (INSERT) до бази
даних.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор рядка останньої вставки (INSERT) до бази
даних. Якщо при цьому з'єднанні з базою даних ніколи не відбувалося
успішних операцій INSERT в таблиці rowid, то
**SQLite3::lastInsertRowID()** повертає `0`.
