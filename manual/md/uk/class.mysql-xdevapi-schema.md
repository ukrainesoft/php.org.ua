- [«
RowResult::getWarningsCount](mysql-xdevapi-rowresult.getwarningscount.md)
- [Schema::\_\_construct »](mysql-xdevapi-schema.construct.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас Schema

# Клас Schema

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\Schema** implements
[mysql_xdevapi\DatabaseObject](class.mysql-xdevapi-databaseobject.md)
{

/\* Властивості \*/

public `$name`;

/\* Методи \*/

public **createCollection**(string `$name`, string `$validate` u003d ?):
[mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)

public **dropCollection**(string `$collection_name`): bool

public **existsInDatabase**(): bool

public **getCollection**(string `$name`):
[mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)

public **getCollectionAsTable**(string `$name`):
[mysql_xdevapi\Table](class.mysql-xdevapi-table.md)

public **getCollections**(): array

public **getName**(): string

public **getSession**():
[mysql_xdevapi\Session](class.mysql-xdevapi-session.md)

public **getTable**(string `$name`):
[mysql_xdevapi\Table](class.mysql-xdevapi-table.md)

public **getTables**(): array

}

## Властивості

`name`

## Зміст

- [Schema::\_\_construct](mysql-xdevapi-schema.construct.md) -
Конструктор
- [Schema::createCollection](mysql-xdevapi-schema.createcollection.md)
— Додати колекцію до схеми
- [Schema::dropCollection](mysql-xdevapi-schema.dropcollection.md) -
Видалити колекції зі схеми
- [Schema::existsInDatabase](mysql-xdevapi-schema.existsindatabase.md)
— Перевірити, чи існує у базі даних
- [Schema::getCollection](mysql-xdevapi-schema.getcollection.md) -
Отримати колекцію зі схеми
- [Schema::getCollectionAsTable](mysql-xdevapi-schema.getcollectionastable.md)
— Отримати об'єкт таблиці колекції
- [Schema::getCollections](mysql-xdevapi-schema.getcollections.md) -
Отримати всі колекції схеми
- [Schema::getName](mysql-xdevapi-schema.getname.md) — Отримати ім'я
схеми
- [Schema::getSession](mysql-xdevapi-schema.getsession.md) -
Отримати сесію схеми
- [Schema::getTable](mysql-xdevapi-schema.gettable.md) — Отримати
таблицю схеми
- [Schema::getTables](mysql-xdevapi-schema.gettables.md) — Отримати
таблиці схеми
