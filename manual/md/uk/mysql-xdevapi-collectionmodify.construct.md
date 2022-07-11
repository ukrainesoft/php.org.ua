- [« CollectionModify::bind](mysql-xdevapi-collectionmodify.bind.md)
- [CollectionModify::execute
»](mysql-xdevapi-collectionmodify.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Конструктор класу CollectionModify

# CollectionModify::\_\_construct

(No version information available, might only be in Git)

CollectionModify::\_\_construct - Конструктор класу CollectionModify

### Опис

private **mysql_xdevapi\CollectionModify::\_\_construct**()

Змінює (оновлює) колекцію та створюється методом Collection::modify().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d {"name":   "Bernie",    "traits": ["Friend", "Brother", "Human"]}') ->execute();$collection  ->modify("name in ('Bernie', Jane')") ->arrayAppend('traits', 'Happy') ->execute();$result u003d $collection  ->find() ->execute();print_r($result->fetchAll()); ?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[_id] u003d> 00005b6b536100000000000010c
[name] u003d> Bernie
[traits] u003d> Array
(
[0] u003d> Friend
[1] u003d> Brother
[2] u003d> Human
[3] u003d> Happy
)
)
)
