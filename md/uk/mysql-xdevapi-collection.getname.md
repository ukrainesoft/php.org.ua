- [« Collection::find](mysql-xdevapi-collection.find.md)
- [Collection::getOne »](mysql-xdevapi-collection.getone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Отримує назву колекції

# Collection::getName

(No version information available, might only be in Git)

Collection::getName — Отримує назву колекції

### Опис

public **mysql_xdevapi\Collection::getName**(): string

Отримує назву колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Назва колекції у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::getName()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");// ...var_d >getName());?> `

Результатом виконання цього прикладу буде щось подібне:

string(6) "people"
