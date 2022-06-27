- [« SQLite3::setAuthorizer](sqlite3.setauthorizer.md)
- [SQLite3Stmt »](class.sqlite3stmt.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Повертає версію бібліотеки SQLite3, містить як рядкову
константу, так і числову

# SQLite3::version

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::version — Повертає версію бібліотеки SQLite3, містить як
рядкову константу, так і числову

### Опис

public static **SQLite3::version**(): array

Повертає версію бібліотеки SQLite3, містить як рядкову константу,
так і числову.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив із ключами "versionString" та
"versionNumber".

### Приклади

**Приклад #1 Приклад використання **SQLite3::version()****

` <?phpprint_r(SQLite3::version());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[versionString] u003d> 3.5.9
[versionNumber] u003d> 3005009
)
