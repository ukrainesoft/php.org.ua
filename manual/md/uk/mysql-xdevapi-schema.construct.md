- [«mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- [Schema::createCollection
»](mysql-xdevapi-schema.createcollection.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Конструктор

# Schema::\_\_construct

(No version information available, might only be in Git)

Schema::\_\_construct - Конструктор

### Опис

private **mysql_xdevapi\Schema::\_\_construct**()

Об'єкт Schema надає повний доступ до схеми (бази даних).

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS food")->execute();$session->sql( "CREATE DATABASE food")->execute();$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();$schema u003d $session->getSchema("food ");$schema->createCollection("trees");print_r($schema->gettables());print_r($schema->getcollections()); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[fruit] u003d> mysql_xdevapi\Table Object
(
[name] u003d> fruit
)
)
Array
(
[trees] u003d> mysql_xdevapi\Collection Object
(
[name] u003d> trees
)
)
