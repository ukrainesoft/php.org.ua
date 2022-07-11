- [«SQLite3Stmt::reset](sqlite3stmt.reset.md)
- [SQLite3Result::columnName »](sqlite3result.columnname.md)

- [PHP Manual](index.md)
- [SQLite3](book.sqlite3.md)
- Клас SQLite3Result

# Клас SQLite3Result

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас, що надає доступ до результуючого набору модуля SQLite 3.

## Огляд класів

class **SQLite3Result** {

/\* Методи \*/

private [\_\_construct](sqlite3result.construct.md)()

public [columnName](sqlite3result.columnname.md)(int `$column`):
string\|false

public [columnType](sqlite3result.columntype.md)(int `$column`):
int\|false

public [fetchArray](sqlite3result.fetcharray.md)(int `$mode` u003d
**`SQLITE3_BOTH`**): array\|false

public [finalize](sqlite3result.finalize.md)(): bool

public [numColumns](sqlite3result.numcolumns.md)(): int

public [reset](sqlite3result.reset.md)(): bool

}

## Зміст

- [SQLite3Result::columnName](sqlite3result.columnname.md) -
\>Повертає ім'я n-ого стовпця
- [SQLite3Result::columnType](sqlite3result.columntype.md)
Повертає тип n-ного стовпця
- [SQLite3Result::\_\_construct](sqlite3result.construct.md) -
Конструктор класу SQLite3Result
- [SQLite3Result::fetchArray](sqlite3result.fetcharray.md) -
Вибирає один рядок з результуючого набору та поміщає його в
асоціативний або нумерований масив, або в обох відразу
- [SQLite3Result::finalize](sqlite3result.finalize.md) — Закриває
результуючий набір
- [SQLite3Result::numColumns](sqlite3result.numcolumns.md)
Повертає кількість стовпців у результуючому наборі
- [SQLite3Result::reset](sqlite3result.reset.md) — Скидає
покажчик результуючого набору на перший рядок
