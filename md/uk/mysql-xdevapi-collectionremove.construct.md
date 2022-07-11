- [« CollectionRemove::bind](mysql-xdevapi-collectionremove.bind.md)
- [CollectionRemove::execute
»](mysql-xdevapi-collectionremove.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- Конструктор класу CollectionRemove

# CollectionRemove::\_\_construct

(No version information available, might only be in Git)

CollectionRemove::\_\_construct - Конструктор класу CollectionRemove

### Опис

private **mysql_xdevapi\CollectionRemove::\_\_construct**()

Видаляє документи колекції та створюється екземпляром методу
Collection::remove().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::remove()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$collection->ad ": "Alfred", "age": 18, "job": "Butler"}')->execute();$collection->add('{"name": "Bob",    "age": 19, "job": "Painter"}')->execute();// Видалення всіх художників$collection  ->remove("job in ('Painter')") ->execute();// Видалити найстарішого двору collection  ->remove("job in ('Butler')") ->sort('age desc') ->limit(1) --execute();// Видалити запис з самим низким віку$ 'true') ->sort('age desc') ->limit(1) ->execute();?> `
