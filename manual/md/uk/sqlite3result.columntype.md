- [« SQLite3Result::columnName](sqlite3result.columnname.md)
- [SQLite3Result::\_\_construct »](sqlite3result.construct.md)

- [PHP Manual](index.md)
- [SQLite3Result](class.sqlite3result.md)
- Повертає тип n-ного стовпця

# SQLite3Result::columnType

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3Result::columnType — Повертає тип n-ного стовпця

### Опис

public **SQLite3Result::columnType**(int `$column`): int\|false

Повертає тип стовпця, вказаного в `column`.

### Список параметрів

`column`
Номер стовпця, починаючи з нуля.

### Значення, що повертаються

Повертає тип стовпця, вказаного в `column`. Повертає значення
**`SQLITE3_INTEGER`**, **`SQLITE3_FLOAT`**, **`SQLITE3_TEXT`**,
**`SQLITE3_BLOB`**, **`SQLITE3_NULL`**) або **`false`**, якщо стовпець не
існує.
