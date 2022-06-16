- [«
Schema::createCollection](mysql-xdevapi-schema.createcollection.md)
- [Schema::existsInDatabase
»](mysql-xdevapi-schema.existsindatabase.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Видалити колекції зі схеми

# Schema::dropCollection

(No version information available, might only be in Git)

Schema::dropCollection — Видалити колекції зі схеми

### Опис

public **mysql_xdevapi\Schema::dropCollection**(string
`$collection_name`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`collection_name`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::getCollection()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS food")->execute();$session->sql( "CREATE DATABASE food")->execute();$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();$schema u003d $session->getSchema("food ");$schema->createCollection("trees");$schema->dropCollection("trees");$schema->createCollection("buildings");print_r($schema->gettables());print_r($ schema->getcollections()); `

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
[buildings] u003d> mysql_xdevapi\Collection Object
(
[name] u003d> buildings
)
)
