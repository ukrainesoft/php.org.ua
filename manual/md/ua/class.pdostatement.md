- [«PDO::setAttribute](pdo.setattribute.md)
- [PDOStatement::bindColumn »](pdostatement.bindcolumn.md)

- [PHP Manual](index.md)
- [PDO](book.pdo.md)
- Клас PDOStatement

# Клас PDOStatement

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 1.0.0)

## Вступ

Подає підготовлений запит до бази даних, а після виконання
запиту відповідний результуючий набір.

## Огляд класів

class **PDOStatement** implements
[IteratorAggregate](class.iteratoraggregate.md) {

/\* Властивості \*/

public string `$queryString`;

/\* Методи \*/

public [bindColumn](pdostatement.bindcolumn.md)(
string\|int `$column`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
int `$type` u003d PDO::PARAM_STR,
int `$maxLength` u003d 0,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$driverOptions` u003d **`null`**
): bool

public [bindParam](pdostatement.bindparam.md)(
string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
int `$type` u003d PDO::PARAM_STR,
int `$maxLength` u003d 0,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$driverOptions` u003d **`null`**
): bool

public [bindValue](pdostatement.bindvalue.md)(string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$type` u003d PDO::PARAM_STR): bool

public [closeCursor](pdostatement.closecursor.md)(): bool

public [columnCount](pdostatement.columncount.md)(): int

public [debugDumpParams](pdostatement.debugdumpparams.md)(): ?bool

public [errorCode](pdostatement.errorcode.md)(): ?string

public [errorInfo](pdostatement.errorinfo.md)(): array

public [execute](pdostatement.execute.md)(?array `$params` u003d
**`null`**): bool

public [fetch](pdostatement.fetch.md)(int `$mode` u003d
PDO::FETCH_DEFAULT, int `$cursorOrientation` u003d PDO::FETCH_ORI_NEXT, int
`$cursorOffset` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [fetchAll](pdostatement.fetchall.md)(int `$mode` u003d
PDO::FETCH_DEFAULT): array

public [fetchAll](pdostatement.fetchall.md)(int `$mode` u003d
PDO::FETCH_COLUMN, int `$column`): array

public [fetchAll](pdostatement.fetchall.md)(int `$mode` u003d
PDO::FETCH_CLASS, string `$class`, ?array `$constructorArgs`): array

public [fetchAll](pdostatement.fetchall.md)(int `$mode` u003d
PDO::FETCH_FUNC, [callable](language.types.callable.md) `$callback`):
array

public [fetchColumn](pdostatement.fetchcolumn.md)(int `$column` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [fetchObject](pdostatement.fetchobject.md)(?string `$class` u003d
"stdClass", array `$constructorArgs` u003d \[\]): object\|false

public [getAttribute](pdostatement.getattribute.md)(int `$name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getColumnMeta](pdostatement.getcolumnmeta.md)(int `$column`):
array\|false

public [getIterator](pdostatement.getiterator.md)():
[Iterator](class.iterator.md)

public [nextRowset](pdostatement.nextrowset.md)(): bool

public [rowCount](pdostatement.rowcount.md)(): int

public [setAttribute](pdostatement.setattribute.md)(int `$attribute`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

public [setFetchMode](pdostatement.setfetchmode.md)(int `$mode`): bool

public [setFetchMode](pdostatement.setfetchmode.md)(int `$mode` u003d
PDO::FETCH_COLUMN, int `$colno`): bool

public [setFetchMode](pdostatement.setfetchmode.md)(int `$mode` u003d
PDO::FETCH_CLASS, string `$class`, ?array `$constructorArgs` u003d
**`null`**): bool

public [setFetchMode](pdostatement.setfetchmode.md)(int `$mode` u003d
PDO::FETCH_INTO, object `$object`): bool

}

## Властивості

`queryString`
Використовуваний рядок запиту.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -|
| 8.0.0 | **PDOStatement** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md) замість [Traversable](class.traversable.md). |

## Зміст

- [PDOStatement::bindColumn](pdostatement.bindcolumn.md) — Зв'язує
стовпець зі змінною PHP
- [PDOStatement::bindParam](pdostatement.bindparam.md) - Прив'язує
параметр запиту до змінної
- [PDOStatement::bindValue](pdostatement.bindvalue.md) - Зв'язує
параметр із заданим значенням
- [PDOStatement::closeCursor](pdostatement.closecursor.md) -
Закриває курсор, переводячи запит у стан готовності до
повторному запуску
- [PDOStatement::columnCount](pdostatement.columncount.md) -
Повертає кількість стовпців у результуючому наборі
- [PDOStatement::debugDumpParams](pdostatement.debugdumpparams.md) -
Виведення інформації про підготовлену SQL-команду з метою налагодження
- [PDOStatement::errorCode](pdostatement.errorcode.md) — Отримує
код SQLSTATE, пов'язаний з останньою операцією в об'єкті PDOStatement
- [PDOStatement::errorInfo](pdostatement.errorinfo.md) — Отримання
розширеної інформації про помилку, що сталася внаслідок роботи
об'єкта PDOStatement
- [PDOStatement::execute](pdostatement.execute.md) — Запускає
підготовлений запит на виконання
- [PDOStatement::fetch](pdostatement.fetch.md) - Вилучення
наступного рядка із результуючого набору
- [PDOStatement::fetchAll](pdostatement.fetchall.md) - Вибирає
рядки, що залишилися з набору результатів
- [PDOStatement::fetchColumn](pdostatement.fetchcolumn.md) -
Повертає дані одного стовпця наступного рядка результуючого
набору
- [PDOStatement::fetchObject](pdostatement.fetchobject.md) -
Витягує наступний рядок і повертає його у вигляді об'єкта
- [PDOStatement::getAttribute](pdostatement.getattribute.md) -
Отримання атрибуту запиту PDOStatement
- [PDOStatement::getColumnMeta](pdostatement.getcolumnmeta.md) -
Повертає метадані стовпця у результуючій таблиці
- [PDOStatement::getIterator](pdostatement.getiterator.md) -
Отримує ітератор набору результатів
- [PDOStatement::nextRowset](pdostatement.nextrowset.md) - Перехід до
наступного набору рядків у результаті запиту
- [PDOStatement::rowCount](pdostatement.rowcount.md) - Повертає
кількість рядків, порушених останнім SQL-запитом
- [PDOStatement::setAttribute](pdostatement.setattribute.md) -
Встановлює атрибут об'єкту PDOStatement
- [PDOStatement::setFetchMode](pdostatement.setfetchmode.md) -
Встановлює стандартний режим вибірки для об'єкта запиту
