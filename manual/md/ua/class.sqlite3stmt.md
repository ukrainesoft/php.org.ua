- [SQLite3::version](sqlite3.version.md)
- [SQLite3Stmt::bindParam »](sqlite3stmt.bindparam.md)

- [PHP Manual](index.md)
- [SQLite3](book.sqlite3.md)
- Клас SQLite3Stmt

# Клас SQLite3Stmt

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас, що надає доступ до підготовлених запитів у модулі SQLite
3.

## Огляд класів

class **SQLite3Stmt** {

/\* Методи \*/

private
[\_\_construct](sqlite3stmt.construct.md)([SQLite3](class.sqlite3.md)
`$sqlite3`, string `$query`)

public [bindParam](sqlite3stmt.bindparam.md)(string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`, int `$type` u003d **`SQLITE3_TEXT`**): bool

public [bindValue](sqlite3stmt.bindvalue.md)(string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$type` u003d **`SQLITE3_TEXT`**): bool

public [clear](sqlite3stmt.clear.md)(): bool

public [close](sqlite3stmt.close.md)(): bool

public [execute](sqlite3stmt.execute.md)():
[SQLite3Result](class.sqlite3result.md)\|false

public [getSQL](sqlite3stmt.getsql.md)(bool `$expand` u003d **`false`**):
string\|false

public [paramCount](sqlite3stmt.paramcount.md)(): int

public [readOnly](sqlite3stmt.readonly.md)(): bool

public [reset](sqlite3stmt.reset.md)(): bool

}

## Зміст

- [SQLite3Stmt::bindParam](sqlite3stmt.bindparam.md) — Зв'язує
параметр зі змінною підготовленого запиту
- [SQLite3Stmt::bindValue](sqlite3stmt.bindvalue.md) — Зв'язує
значення параметра зі змінною підготовленого запиту
- [SQLite3Stmt::clear](sqlite3stmt.clear.md) — Видаляє всі поточні
прив'язані параметри
- [SQLite3Stmt::close](sqlite3stmt.close.md) — Закриває
підготовлений запит
- [SQLite3Stmt::\_\_construct](sqlite3stmt.construct.md) -
Конструктор класу SQLite3Stmt
- [SQLite3Stmt::execute](sqlite3stmt.execute.md) — Виконує
підготовлений запит та повертає об'єкт із результуючим набором
- [SQLite3Stmt::getSQL](sqlite3stmt.getsql.md) — Отримати SQL-запит
у вигляді рядка із запиту
- [SQLite3Stmt::paramCount](sqlite3stmt.paramcount.md) — Повертає
кількість параметрів у підготовленому запиті
- [SQLite3Stmt::readOnly](sqlite3stmt.readonly.md) — Перевіряє,
є підготовлений запит тільки для читання
- [SQLite3Stmt::reset](sqlite3stmt.reset.md) — Скидає
підготовлений запит
