- [«
Collection::addOrReplaceOne](mysql-xdevapi-collection.addorreplaceone.md)
- [Collection::count »](mysql-xdevapi-collection.count.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Конструктор класу Collection

# Collection::\_\_construct

(No version information available, might only be in Git)

Collection::\_\_construct - Конструктор класу Collection

### Опис

private **mysql_xdevapi\Collection::\_\_construct**()

Створює об'єкт Collection.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::getOne()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d $ {"name": "Alfred", "age": 42, "job": "Butler"}')->execute();// Унікальний _id (за замовчуванням і рекомендується) генерується MySQL Server// в цьому прикладі додано тільки одна запис, тому $ids[0]$ids        u003du003d$result->getGeneratedIds();$alfreds_id u003d $ids[0];/$| >getOne($alfreds_id));?> `

Результатом виконання цього прикладу буде щось подібне:

00005b6b536100000000000001

Array
(
[_id] u003d> 00005b6b53610000000000000b1
[age] u003d> 42
[job] u003d> Butler
[name] u003d> Alfred
)
