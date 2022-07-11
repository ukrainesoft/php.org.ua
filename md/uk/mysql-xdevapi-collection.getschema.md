- [« Collection::getOne](mysql-xdevapi-collection.getone.md)
- [Collection::getSession »](mysql-xdevapi-collection.getsession.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Повертає об'єкт Schema

# Collection::getSchema

(No version information available, might only be in Git)

Collection::getSchema — Повертає об'єкт Schema

### Опис

public **mysql_xdevapi\Collection::getSchema**(): Schema Object

Повертає об'єкт Schema, що містить колекцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Schema у разі успішного виконання або **`null`**, якщо об'єкт
не може бути повернутий для цієї колекції.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::getSchema()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");var_dump($ecollection ;?> `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Schema)#9 (1) {
["name"]u003d>
string(11) "addressbook"
}
