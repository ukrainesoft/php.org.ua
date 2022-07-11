- [«Collection::dropIndex](mysql-xdevapi-collection.dropindex.md)
- [Collection::find »](mysql-xdevapi-collection.find.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Перевіряє, чи існує колекція у базі даних

# Collection::existsInDatabase

(No version information available, might only be in Git)

Collection::existsInDatabase — Перевіряє, чи є колекція в базі
даних

### Опис

public **mysql_xdevapi\Collection::existsInDatabase**(): bool

Перевіряє, чи об'єкт Collection посилається на колекцію в базі даних
(схему).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** якщо колекція існує у базі даних, інакше
**`false`** якщо це не так.

Таблиця, визначена двома стовпцями (doc та \_id), вважається
колекцією, та третім стовпцем \_json_schema з MySQL 8.0.21. Додавання
Додатковий стовпчик означає, що existsInDatabase() більше не буде
бачити його як колекцію.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::existsInDatabase()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schemau003du003d$session->getSchema("addressbook");$create u003d $schema->createCollection("people");// ...$collection u003d $s ->getCollection("people");// ...if (!$collection->existsInDatabase()) {   echo "Колекція з іменем addressbook не існує в базі даних. ">
