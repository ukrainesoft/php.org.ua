- [« SQLite3Stmt::clear](sqlite3stmt.clear.md)
- [SQLite3Stmt::\_\_construct »](sqlite3stmt.construct.md)

- [PHP Manual](index.md)
- [SQLite3Stmt](class.sqlite3stmt.md)
- Закриває підготовлений запит

# SQLite3Stmt::close

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::close — Закриває підготовлений запит

### Опис

public **SQLite3Stmt::close**(): bool

Закриває запит.

> **Примітка**: Зверніть увагу, що всі об'єкти
> [SQLite3Result](class.sqlite3result.md), отримані під час виконання
> цього підготовленого запиту будуть визнані недійсними при
> закрити цей запит.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**
