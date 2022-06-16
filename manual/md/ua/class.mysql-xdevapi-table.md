- [«
Statement::hasMoreResults](mysql-xdevapi-statement.hasmoreresults.md)
- [Table::\_\_construct »](mysql-xdevapi-table.construct.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас Table

# Клас Table

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

Надає доступ до таблиці через оператори
INSERT/SELECT/UPDATE/DELETE.

## Огляд класів

class **mysql_xdevapi\Table** implements
[mysql_xdevapi\SchemaObject](class.mysql-xdevapi-schemaobject.md) {

/\* Властивості \*/

public `$name`;

/\* Методи \*/

public **count**(): int

public **delete**():
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

public **existsInDatabase**(): bool

public **getName**(): string

public **getSchema**():
[mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)

public **getSession**():
[mysql_xdevapi\Session](class.mysql-xdevapi-session.md)

public
**insert**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$columns`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$more_columns`):
[mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)

public **isView**(): bool

public
**select**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$columns`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$more_columns`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **update**():
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

}

## Властивості

`name`

## Зміст

- [Table::\_\_construct](mysql-xdevapi-table.construct.md) -
Конструктор Table
- [Table::count](mysql-xdevapi-table.count.md) — Отримати кількість
рядків
- [Table::delete](mysql-xdevapi-table.delete.md) — Видалити рядки з
таблиці
- [Table::existsInDatabase](mysql-xdevapi-table.existsindatabase.md)
— Перевірити, чи існує таблиця у базі даних
- [Table::getName](mysql-xdevapi-table.getname.md) — Отримати ім'я
таблиці
- [Table::getSchema](mysql-xdevapi-table.getschema.md) — Отримати
схему таблиці
- [Table::getSession](mysql-xdevapi-table.getsession.md) — Отримати
таблицю сесій
- [Table::insert](mysql-xdevapi-table.insert.md) — Вставити рядки
таблиці
- [Table::isView](mysql-xdevapi-table.isview.md) — Перевірити,
чи є таблиця уявленням
- [Table::select](mysql-xdevapi-table.select.md) — Вибрати рядки з
таблиці
- [Table::update](mysql-xdevapi-table.update.md) — Оновити рядки у
таблиці
