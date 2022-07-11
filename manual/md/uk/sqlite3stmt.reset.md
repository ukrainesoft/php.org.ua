- [« SQLite3Stmt::readOnly](sqlite3stmt.readonly.md)
- [SQLite3Result »](class.sqlite3result.md)

- [PHP Manual](index.md)
- [SQLite3Stmt](class.sqlite3stmt.md)
- скидає підготовлений запит

# SQLite3Stmt::reset

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::reset — Скидає підготовлений запит

### Опис

public **SQLite3Stmt::reset**(): bool

Скидає підготовлений запит у стан до виконання. Після
скидання всі прив'язки залишаються постійними.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у випадку, якщо підготовлений запит був успішним
скинутий або **`false`** у разі виникнення помилки.
